import React, { Component } from "react";
import "../index.css";
export default class DeletePage extends Component {
  myArr = this.props.productProps.name;
  myArrQuan = this.props.productProps.quan;
  myArrImages = this.props.productProps.images;
  faveName = this.props.isfave.isFaveArrayName;
  faveQuan = this.props.isfave.isFaveArrayQuan;
  faveImage = this.props.isfave.isFaveArrayImage;

  // This Method For Deleting All The Products When the user click the button.
  deleteAll = () => {
    console.log("Delete All");

    this.props.deleteAllFun();
  };

  // This method for delete a specific row in the cart
  deleteProduct = (deletedRowName, deletedRowQuan, deletedRowImage) => {
    // e.preventDefault();
    // console.log(this.myArr);
    console.log(deletedRowName, deletedRowQuan, deletedRowImage);
    this.props.dOperation(
      deletedRowName,
      deletedRowQuan,
      deletedRowImage,
      this.myArr,
      this.myArrQuan,
      this.myArrImages
    );
  };

  // Here To Print That Table as dynamically with a new product name and quantity
  goCheck = () => {
    let counter = 1;
    console.log(this.myArr);
    if (this.myArr.length > 0) {
      return this.myArr.map((eachName, eachQuan) => {
        
        return (
          <tr key={counter}>
            <td>{counter++}</td>
            <td>{eachName}</td>
            <td>{this.props.productProps.quan[eachQuan]}</td>
            <td>
              <img
                className="img-thumbnail"
                src={this.myArrImages[eachQuan]}
                alt="Empty"
              ></img>
            </td>
            <td
              id="edit"
              onClick={() =>
                this.deleteProduct(
                  eachName,
                  this.props.productProps.quan[eachQuan],
                  this.props.productProps.images[eachQuan]
                )
              }
            >
              Delete
            </td>
          </tr>
        );
      });
    }
  };
  render() {
    return (
      <div>
        <div className="container">
          <span className="text-center">
            <h1>Your Cart</h1>
          </span>

          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Image</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>{this.goCheck()}</tbody>
          </table>

          <button
            style={{ margin: "auto", display: "block" }}
            id="deleteBtn"
            className="btn btn-danger"
            onClick={this.deleteAll}
          >
            Clear All Products
          </button>
        </div>
      </div>
    );
  }
}
