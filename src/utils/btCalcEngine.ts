// Balance Transfer calculation engine — ported from SwitchIQ

export function calcEMI(P: number, annualRate: number, n: number): number {
  if (P <= 0 || n <= 0) return 0;
  const r = annualRate / 12 / 100;
  if (r === 0) return P / n;
  const g = Math.pow(1 + r, n);
  return (P * r * g) / (g - 1);
}

export function monthsElapsed(loanStartDate: Date): number {
  const now = new Date();
  return (
    (now.getFullYear() - loanStartDate.getFullYear()) * 12 +
    (now.getMonth() - loanStartDate.getMonth())
  );
}

export function calcOutstanding(P: number, annualRate: number, N: number, k: number): number {
  const r = annualRate / 12 / 100;
  if (r === 0) return Math.max(0, P - (P / N) * k);
  const gN = Math.pow(1 + r, N);
  const gk = Math.pow(1 + r, k);
  return (P * (gN - gk)) / (gN - 1);
}

export interface BTCalcInputs {
  totalLoan: number;
  emi: number;
  roi: number;
  totalTenure: number;
  loanStartDate: Date;
  prayaanROI: number;
  prayaanTenure: 60 | 84 | 120;
  /** Extra working capital borrowed on top of the balance transfer. */
  topUp?: number;
}

export interface BTCalcResult {
  outstanding: number;
  remainingMonths: number;
  elapsedMonths: number;
  endDate: string;
  newEMI: number;
  monthlySavings: number;
  actualRemainingOutflow: number;
  actualPrayaanOutflow: number;
  actualTotalSavings: number;
  currentInterestRemaining: number;
  prayaanInterest: number;
  interestSaved: number;
  deviation: number;
  isEstimated: boolean;
  prayaanN: number;
  expired: boolean;
  // ── Top-up (BT + extra working capital) ──
  topUp: number;
  /** outstanding + topUp — the principal of the new Prayaan loan. */
  newLoanBase: number;
  hasTopUp: boolean;
  // Apples-to-apples: the SAME new loan base over the Prayaan tenure, but at the
  // borrower's current rate. Lets us isolate the pure rate saving when a top-up
  // makes the simple "stay vs switch" framing no longer like-for-like.
  currentLikeEMI: number;
  currentLikeTotal: number;
  currentLikeInterest: number;
  prayaanLikeInterest: number;
}

export function calcBT(inputs: BTCalcInputs): BTCalcResult | null {
  const { totalLoan: P, emi, roi, totalTenure: N, loanStartDate, prayaanROI, prayaanTenure, topUp: topUpRaw = 0 } = inputs;
  if (P <= 0 || emi <= 0 || roi <= 0 || N <= 0) return null;

  const r = roi / 12 / 100;
  if (emi <= P * r) return null;

  const topUp = Math.max(0, topUpRaw);
  const hasTopUp = topUp > 0;

  const k = Math.min(monthsElapsed(loanStartDate), N);
  const remainingMonths = Math.max(0, N - k);
  const expired = k >= N;

  const outstanding = calcOutstanding(P, roi, N, k);

  const endDateObj = new Date(loanStartDate);
  endDateObj.setMonth(endDateObj.getMonth() + N);
  const endDate = endDateObj.toLocaleDateString("en-IN", { month: "long", year: "numeric" });

  const expectedEMI = calcEMI(P, roi, N);
  const deviation = expectedEMI > 0 ? Math.abs(expectedEMI - emi) / emi : 0;
  const isEstimated = deviation > 0.05;

  const prayaanN = prayaanTenure;
  // The new Prayaan loan covers the outstanding balance plus any top-up cash.
  const newLoanBase = outstanding + topUp;
  const newEMI = calcEMI(newLoanBase, prayaanROI, prayaanN);
  const monthlySavings = emi - newEMI;

  const effectiveN = Math.max(remainingMonths, 1);
  const actualRemainingOutflow = emi * effectiveN;
  const actualPrayaanOutflow = newEMI * prayaanN;
  const actualTotalSavings = Math.max(0, actualRemainingOutflow - actualPrayaanOutflow);

  const currentInterestRemaining = Math.max(0, actualRemainingOutflow - outstanding);
  const prayaanInterest = Math.max(0, actualPrayaanOutflow - newLoanBase);
  const interestSaved = Math.max(0, currentInterestRemaining - prayaanInterest);

  // Like-for-like: the same new loan base at the borrower's current rate over the
  // Prayaan tenure. With a top-up you're borrowing more, so this is the only fair
  // "what would this cost at your bank vs Prayaan" comparison.
  const currentLikeEMI = calcEMI(newLoanBase, roi, prayaanN);
  const currentLikeTotal = currentLikeEMI * prayaanN;
  const currentLikeInterest = Math.max(0, currentLikeTotal - newLoanBase);
  const prayaanLikeInterest = Math.max(0, actualPrayaanOutflow - newLoanBase);

  return {
    outstanding,
    remainingMonths,
    elapsedMonths: k,
    endDate,
    newEMI,
    monthlySavings,
    actualRemainingOutflow,
    actualPrayaanOutflow,
    actualTotalSavings,
    currentInterestRemaining,
    prayaanInterest,
    interestSaved,
    deviation,
    isEstimated,
    prayaanN,
    expired,
    topUp,
    newLoanBase,
    hasTopUp,
    currentLikeEMI,
    currentLikeTotal,
    currentLikeInterest,
    prayaanLikeInterest,
  };
}

export function sanitizeDecimal(value: string): string {
  const s = value.replace(/[^\d.]/g, "");
  const [whole, ...dec] = s.split(".");
  return dec.length > 0 ? `${whole}.${dec.join("")}` : whole;
}

export function sanitizeInteger(value: string): string {
  return value.replace(/\D/g, "");
}

export function parseNum(value: string): number {
  return Number.parseFloat(value) || 0;
}

export function fmtINR(n: number): string {
  n = Math.round(n);
  if (Math.abs(n) >= 10_000_000) {
    const v = n / 10_000_000;
    return "₹" + v.toFixed(2).replace(/\.?0+$/, "") + " Cr";
  }
  if (Math.abs(n) >= 100_000) {
    const v = n / 100_000;
    return "₹" + v.toFixed(2).replace(/\.?0+$/, "") + " L";
  }
  return "₹" + n.toLocaleString("en-IN");
}

export function fmtEMI(n: number): string {
  return "₹" + Math.round(n).toLocaleString("en-IN");
}

export function fmtINRSpoken(n: number): string {
  n = Math.round(Math.abs(n));
  if (n === 0) return "₹0";
  const parts: string[] = [];
  const cr = Math.floor(n / 10_000_000); n -= cr * 10_000_000;
  const lk = Math.floor(n / 100_000);    n -= lk * 100_000;
  const th = Math.floor(n / 1_000);      n -= th * 1_000;
  if (cr) parts.push(`${cr} ${cr === 1 ? "Crore" : "Crores"}`);
  if (lk) parts.push(`${lk} ${lk === 1 ? "Lakh" : "Lakhs"}`);
  if (th) parts.push(`${th} Thousand`);
  if (n)  parts.push(`${n} ${n === 1 ? "Rupee" : "Rupees"}`);
  return "₹" + parts.join(" ");
}
