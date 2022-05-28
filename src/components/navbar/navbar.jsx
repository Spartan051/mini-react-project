import "./navbar.css";
import { useContext } from "react";
import ProductsCTX from "../context/context";
const Navbar = () => {
  const CTX = useContext(ProductsCTX);
  return (
    <div>
      <span>number products : {sum()}</span>
    </div>
  );

  function sum() {
    let number = 0;
    CTX.products.map((item) => (number += item.count));
    return number;
  }
};

export default Navbar;
