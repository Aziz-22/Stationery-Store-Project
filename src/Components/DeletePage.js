import React, { Component } from "react";
import "../index.css";
import swal from "sweetalert";
export default class DeletePage extends Component {
  myArr = this.props.productProps.name;
  myArrQuan = this.props.productProps.quan;

  // This Method For Deleting All The Products When the user click the button.
  deleteAll = () => {
   
    console.log("Delete All");

    swal({
      title: "Are You Sure?",
      text: "Are you sure you want to delete all products?",
      icon: "warning",
      buttons: true, // This button to tell the Sweetalert to add a cancel button with confirmation button
      dangerMode: true, // The focus will automatically be set on the cancel button instead of the confirm button
    }).then((willDelete) => {
      if (willDelete) {
        swal({
          title: "Deleted All",
          text: "Deleted Successfully",
          icon: "success",
        });
        // Here Is the actuall deleting operation, I've used the splice method to delete the entire array.
        this.myArr.splice(0, this.myArr.length);
        this.myArrQuan.splice(0, this.myArrQuan.length);

        // To Update the arrays and re-rendering again with new list
        this.setState({
          objectOfProducts: {
            name: this.myArr,
            quan: this.myArrQuan,
          },
          faveObjects: {
            isFaveArrayName: this.myArr,
            isFaveArrayQuan: this.myArrQuan,
          }
        });
        console.log("39: ", this.props.isfave)
      }
    });
  };

  // This method for delete a specific row in the cart
  deleteProduct = (deletedRowName, deletedRowQuan) => {
    // e.preventDefault();
    // console.log(this.myArr);
    console.log(deletedRowName, deletedRowQuan);
    this.props.dOperation(deletedRowName, deletedRowQuan, this.myArr, this.myArrQuan);
  };

  //   // // Here To Check If that product exist in the array or not. If so we want to the where is the place of that product by using indexOf() and then use splice method to remove it.
  //   // if (this.myArr.includes(deletedRow)) {
  //   //   let knowIndex = this.myArr.indexOf(deletedRow);
  //   //   this.myArr.splice(knowIndex, 1);
  //   // }

  //   // alert("Deleted Successfully ");
  //   console.log("Delete From The Delete File ", deletedRowName, deletedRowQuan);

  //   swal({
  //     title: "Are You Sure?",
  //     text: "Are you sure you want to delete this products?",
  //     icon: "warning",
  //     buttons: true, // This button to tell the Sweetalert to add a cancel button with confirmation button
  //     dangerMode: true, // The focus will automatically be set on the cancel button instead of the confirm button
  //   }).then((willDelete) => {
  //     if (willDelete) {
  //       swal({
  //         title: "Delete Product",
  //         text: "Deleted Successfully",
  //         icon: "success",
  //       });
  //       if (this.myArr.includes(deletedRowName)) {
  //         let knowIndex = this.myArr.indexOf(deletedRowName);
  //         this.myArr.splice(knowIndex, 1);
  //       }
  //       if (this.myArrQuan.includes(deletedRowQuan)) {
  //         let knowIndex = this.myArrQuan.indexOf(deletedRowQuan);
  //         this.myArrQuan.splice(knowIndex, 1);
  //       }

  //       console.log("81: ", this.myArr)
  //       // To Update the arrays and re-rendering again with new list
  //       this.setState({
  //         objectOfProducts: {
  //           name: this.myArr,
  //           quan: this.myArrQuan,
  //         },
  //         faveObjects: {
  //           isFaveArrayName: this.myArr,
  //           isFaveArrayQuan: this.myArrQuan,
  //         }
  //       });
  //       console.log("93: ", this.myArr)
  //       console.log("88: ", this.state.faveObjects)

  //     }
  //   });
  // };

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
            <td
              id="edit"
              onClick={() =>
                this.deleteProduct(
                  eachName,
                  this.props.productProps.quan[eachQuan]
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
          <p className="text-center">
            <h1>Your Cart</h1>
          </p>

          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Quantity</th>
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
