import "./product.css";
import { useContext } from "react";
import ProductsCTX from "../context/context";
const Product = ({ productName, count, id }) => {
  const CTX = useContext(ProductsCTX);
  return (
    <div>
      <span>{productName}</span>
      <span>{handleCount()}</span>
      <button onClick={incriment}>+</button>
      <button onClick={decriment}>-</button>
      <button onClick={deleteProduct}>Delete</button>
    </div>
  );
  function handleCount() {
    if (count === 0) {
      return "zero";
    } else {
      return count;
    }
  }
  function incriment() {
    CTX.onChange("add", id);
  }
  function decriment() {
    CTX.onChange("mines", id);
  }
  function deleteProduct() {
    CTX.onDelete(id);
  }
};

export default Product;
