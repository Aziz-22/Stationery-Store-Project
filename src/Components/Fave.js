import React, { Component } from "react";

export default class Fave extends Component {
  constructor(props) {
    super(props);

    this.removeFave = this.removeFave.bind(this);
  }
  removeFave = (removeName, removeQuan) => {
    console.log("RemoveFave = ", removeName, " ", removeQuan);

    this.props.removeProps(removeName, removeQuan);

    //  if (this.props.faveProps.isFaveArrayName.includes(removeName)) {
    //   let knowIndex = this.props.faveProps.isFaveArrayName.indexOf(removeName);
    //   this.props.faveProps.isFaveArrayName.splice(knowIndex, 1);
    // }
    // if (this.props.faveProps.isFaveArrayQuan.includes(removeQuan)) {
    //   let knowIndex = this.props.faveProps.isFaveArrayQuan.indexOf(removeQuan);
    //   this.props.faveProps.isFaveArrayQuan.splice(knowIndex, 1);
    // }

    // // To Update the arrays and re-rendering again with new list
    // this.setState({

    //   faveProps: {
    //     isFaveArrayName: this.props.faveProps.isFaveArrayName,
    //     isFaveArrayQuan: this.props.faveProps.isFaveArrayQuan,
    //   }
    // })

    // alert("Removed Successfully ");
  };

  goCheck = () => {
    let counter = 1;
    if (this.props.faveProps.isFaveArrayName.length > 0) {
      return this.props.faveProps.isFaveArrayName.map((eachName, eachQuan) => {
        return (
          <tr key={counter}>
            <td>{counter++}</td>
            <td>{eachName}</td>
            <td>{this.props.faveProps.isFaveArrayQuan[eachQuan]}</td>
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
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>{this.goCheck()}</tbody>
        </table>
      </div>
    );
  }
}
