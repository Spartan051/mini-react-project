import "./product.css";
import { Component } from "react";
class Product extends Component {
  state = {
    count: 5,
    productName: "laptop",
  };
  render() {
    return (
      <>
        <span>{this.state.productName}</span>
        <span>{this.state.count}</span>
        <button onClick={this.incriment}>+</button>
        <button onClick={this.decriment}>-</button>
        <button onClick={this.deleteProduct}>delete</button>
      </>
    );
  }
  incriment = () => {
    const { count: c } = this.state;
    this.setState({ count: c + 1 });
  };
  decriment = () => {
    const { count: c } = this.state;
    this.setState({ count: c - 1 });
  };
  deleteProduct = () => {};
}

export default Product;
