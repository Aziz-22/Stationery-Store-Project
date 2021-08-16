import React, { Component } from "react";
import "../index.css";
export default class GetAll extends Component {

  constructor(props) {
    
    super(props);

    this.isFave = this.isFave.bind(this);
  }

  isFave = (faveName , faveQuan) => {
   // e.preventDefault();
    console.log("Fave Method ", faveName, faveQuan);
    this.props.myFun(faveName, faveQuan);
  }
  goCheck = () => {
    let counter = 1;
    if (this.props.productProps.name.length > 0) {
      return this.props.productProps.name.map((eachName, eachQuan) => {
        return (
          <tr key={counter}>
            <td>{counter++}</td>
            <td>{eachName}</td>
            <td>{this.props.productProps.quan[eachQuan]}</td>
            <td><img className="img-thumbnail" src={this.props.productProps.images[eachQuan]} alt="Empty"></img></td>
            <td id="edit" onClick = {() => this.isFave(eachName, this.props.productProps.quan[eachQuan])}>Add To Favorite List</td>
          </tr>
        );
      });
    }
  };
  render() {
    return (
      <div className="container">
        <span className="text-center">
          <h1>Your Products</h1>
        </span>

        <table className = "table">
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Image</th>
              <th>Favorite</th>
            </tr>
          </thead>
          <tbody>{this.goCheck()}</tbody>
        </table>
      </div>
    );
  }
}
