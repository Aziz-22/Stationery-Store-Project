import React, { Component } from "react";

export default class Fave extends Component {
  constructor(props) {
    super(props);

    this.removeFave = this.removeFave.bind(this);
  }
  removeFave = (removeName, removeQuan) => {
    console.log("RemoveFave = ", removeName, " ", removeQuan);

    this.props.removeProps(removeName, removeQuan);

  
  };

  goCheck = () => {
    // console.log("FAVE: 36:", this.props.productProps)
    console.log("FAVE: 37:", this.props.faveProps)
    let counter = 1;
    if (this.props.faveProps.isFaveArrayName.length > 0) {
      return this.props.faveProps.isFaveArrayName.map((eachName, eachQuan) => {
        return (
          <tr key={counter}>
            <td>{counter++}</td>
            <td>{this.props.productProps.name[eachQuan]}</td>
            <td>{this.props.productProps.quan[eachQuan]}</td>
            <td><img className="img-thumbnail" src={this.props.productProps.images[eachQuan]} alt="Empty"></img></td>
            <td
              id="remove-link"
              onClick={() =>
                this.removeFave(
                  eachName,
                  this.props.faveProps.isFaveArrayQuan[eachQuan]
                )
              }
            >
              Remove From Favorite List
            </td>
          </tr>
        );
      });
    }
  };
  render() {
    return (
      <div className="container">
        <span className="text-center">
          <h1 style={{ color: "red" }}>Your Favorite Products</h1>
        </span>

        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Image</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>{this.goCheck()}</tbody>
        </table>
      </div>
    );
  }
}
