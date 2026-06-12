import { useParams, Navigate } from "react-router-dom";
import { productData } from "@/data/products";
import ProductPageTemplate from "@/components/templates/ProductPageTemplate";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? productData[slug] : undefined;
  if (!data) return <Navigate to="/products" replace />;
  return <ProductPageTemplate data={data} />;
};

export default ProductDetail;
