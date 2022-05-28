// import Product from "./components/productC/product";
import { useState } from "react";
import Navbar from "./components/navbar/navbar";
import Products from "./components/products/products";
import ProductsCTX from "./components/context/context";

const App = () => {
  const [list, setList] = useState([
    { id: 1, productName: "laptop", count: 2 },
    { id: 2, productName: "phone", count: 6 },
    { id: 3, productName: "airpod", count: 4 },
  ]);

  const handleDelete = (productId) => {
    let newItem = list.filter((item) => item.id !== productId);
    setList(newItem);
  };

  const handleChange = (value, productId) => {
    let newIndex = list.findIndex((index) => index.id === productId);
    let newArray = [...list];

    if (value === "add") {
      let newNumber = newArray[newIndex].count + 1;
      newArray[newIndex].count = newNumber;
      setList(newArray);
    } else {
      let newNumber = newArray[newIndex].count - 1;
      newArray[newIndex].count = newNumber;
      setList(newArray);
    }
  };

  const handleReset = (productId) => {
    let newArray = [...list];
    newArray.map((item) => (item.count = 0));
    setList(newArray);
  };
  return (
    <>
      <ProductsCTX.Provider
        value={{
          products: list,
          onDelete: handleDelete,
          onChange: handleChange,
          onReset: handleReset,
        }}
      >
        <Products />
        <Navbar />
      </ProductsCTX.Provider>
    </>
  );
};

export default App;
