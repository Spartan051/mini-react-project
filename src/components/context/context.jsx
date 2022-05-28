import { createContext } from "react";
const ProductsCTX = createContext({
  products: [],
  onDelete: () => {},
  onChange: () => {},
  onReset: () => {},
});
export default ProductsCTX;
