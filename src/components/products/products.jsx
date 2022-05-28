import Product from "../productF/product";
import { useContext } from "react";
import ProductsCTX from "../context/context";
const Products = () => {
  const CTX = useContext(ProductsCTX);
  return (
    <>
      {CTX.products.map((item, index) => (
        <Product
          key={index}
          productName={item.productName}
          count={item.count}
          id={item.id}
        />
      ))}
      <button onClick={restProduct}>Reset</button>
    </>
  );
  function restProduct() {
    CTX.onReset();
  }
};

export default Products;
