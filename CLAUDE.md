# Prayaan Capital — project context

**The durable context for this project lives in a DuckDB database, not in the chat window.**
Keep the Claude context window small by re-hydrating from the DB instead of re-reading transcripts.

- DB: `/Users/santhoshp/Documents/Claude/context/prayaan_context.duckdb`
- Loader: `/Users/santhoshp/Documents/Claude/context/load_context.py`

## ⛔ MANDATORY: run the regression check before EVERY `git push`

Before pushing ANY change to git, run:

```
npm run regression
```

It builds the production bundle and loads **every live page** in a real browser
(Playwright + the system Chrome), screenshots each, and asserts it actually works:
HTTP < 400, not the 404 page, a visible non-empty `<h1>`, no broken images, and no
unexpected console errors — plus a 404-recovery check and the interest-rates→PDF
redirect. The route list auto-derives from `src/routes.ts`, so it never goes stale.

- **Every test must pass. If any page fails, DO NOT push — fix it first.**
- This is in addition to `npx tsc --noEmit` + `npm run build` staying clean.
- Screenshots land in `e2e/screenshots/`; full report via `npx playwright show-report`.
- Test file: `e2e/smoke.spec.ts` (runs against the prod build via `vite preview`).
- Warm run ≈ 20s; cold (with build) ≈ 1 min.

## At the start of a session
Read the compact digest (~2 KB) and work from it:
```
python3 /Users/santhoshp/Documents/Claude/context/load_context.py
```
Pull deeper detail only when needed:
```
python3 .../load_context.py --tables                 # list tables + counts
python3 .../load_context.py --table commits          # dump a table
python3 .../load_context.py --sql "SELECT * FROM pending"
```
Tables: meta, requests, commits, changes, files, pages, disabled_routes, decisions,
pending, compliance_gaps, theme_tokens, team_members, assets, policies,
customer_education, key_facts, realistic_numbers.

## Keeping the window under ~300k
- Don't reload the whole conversation; read the digest above instead.
- After a chunk of work, update the DB (see "Updating" below), then `/compact` or `/clear` the chat — the DB remains the source of truth.

## Updating the DB after changes
Rebuild script: `/tmp/build_context_db.py` (edit the in-script data + re-run), or insert directly, e.g.:
```
python3 -c "import duckdb; c=duckdb.connect('/Users/santhoshp/Documents/Claude/context/prayaan_context.duckdb'); c.execute(\"INSERT INTO commits VALUES (26,'<hash>','<ts>','<subject>',false)\"); c.close()"
```

## Quick facts (also in DB)
- Stack: React + Vite + TS + Tailwind + shadcn + framer-motion. Repo: github.com/itissanthoshkumar/prayaan-capital (branch main).
- Verify changes: `npx tsc --noEmit` + `npm run build` (must stay clean) + **`npm run regression` before any push** (see the mandate at the top).
- Preview: managed dev server on :5174 (name `prayaan-capital`; restart between sessions).
- Theme: gold #f0a800 primary (dark text), blue #00549c accent.
- Open item: 11 commits unpushed (push deploys to Vercel).

> Note: the `.duckdb` lives outside this git repo (it's session memory, not site code) — do not commit it.
