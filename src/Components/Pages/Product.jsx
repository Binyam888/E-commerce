import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Breadcrums/Breadcrum";
import ProductDisplay from "../ProductDisplay/ProductDisplay";
import DiscriptionBox from "../DiscriptionBox/DiscriptionBox";
import RelatedProducts from "../RelatedProducts/RelatedProducts";

function Product() {
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();

  const product = all_products.find((e) => e.id === Number(productId));
  console.log(product);

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DiscriptionBox />
      <RelatedProducts />
    </div>
  );
}

export default Product;
