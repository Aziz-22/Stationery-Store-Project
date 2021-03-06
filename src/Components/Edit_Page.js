import React, { Component } from "react";
import "../index.css";
export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //copyArray: this.props.productProps.name,
      valueName: "",
      valueQuan: 1,
      //These new edit variables to copy the previous values that in the variables above
      editName: "",
      editQuan: 1,
    };

    // this.GoToAPIpage = this.GoToAPIpage.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeQuan = this.handleChangeQuan.bind(this);
    this.Edit_Operation = this.Edit_Operation.bind(this);
  }

  handleChangeName(event) {
    this.setState({
      valueName: event.target.value,
    });
  }
  handleChangeQuan(event) {
    this.setState({
      valueQuan: event.target.value,
    });
  }

  boxModal = (pName, pQuan) => {
    console.log("Modal For => ", pName, " ", pQuan);

    // To Hold The Previous Values For Product Name And Quantity
    this.setState({
      editName: pName,
      editQuan: pQuan,
    });

    var modal = document.getElementById("myModal");

    // When the user clicks the button, open the modal
    modal.style.display = "block";

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };

    //return this.Edit_Operation(pName);
  };

  Edit_Operation = (e, newProductName, newQuan) => {
    e.preventDefault();
    var modal = document.getElementById("myModal");
    // let x = this.boxModal(m);

    console.log("I Wanna Edit => ", this.state.editName);
    console.log("I Wanna Edit Numbre => ", this.state.editQuan);

    // These Two Variables To Hold The Place Of THe Previous values.
    let knowIndexName = this.props.productProps.name.indexOf(
      this.state.editName
    );
    let knowIndexQuan = this.props.productProps.quan.indexOf(
      this.state.editQuan
    );
    //  Then replace it with new ones
    this.props.productProps.name[knowIndexName] = newProductName;
    this.props.productProps.quan[knowIndexQuan] = newQuan;

    // To Update the arrays and re-rendering again with new list
    this.setState({
      objectOfProducts: {
        name: this.props.productProps.name,
        quan: this.props.productProps.quan,
      },
    });
    alert("Edit Successfully");
    // Here To Close The Box modal after edit operation done.
    modal.style.display = "none";
    // this.goCheck();
  };

  // When the user clicks on <span> (x), close the modal
  close = () => {
    console.log("Close");
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  };

  // Here To Print That Table as dynamically with a new product name and quantity
  goCheck = () => {
    let counter = 1;
    if (this.props.productProps.name.length > 0) {
      return this.props.productProps.name.map((eachName, eachQuan) => {
        return (
          <tr key={counter}>
            <td>{counter++}</td>
            <td>{eachName}</td>
            <td>{this.props.productProps.quan[eachQuan]}</td>
            <td
              id="edit"
              onClick={() =>
                this.boxModal(eachName, this.props.productProps.quan[eachQuan])
              }
            >
              Edit
            </td>
          </tr>
        );
      });
    }
  };

  render() {
    return (
      <div className="container">
        <h2>Your Cart</h2>

        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>{this.goCheck()}</tbody>
        </table>
        {/*  The Modal */}
        <div id="myModal" className="modal">
          {/* Modal content */}
          <div className="modal-content">
            <span className="close" onClick={this.close}>
              &times;
            </span>
            <form>
              <div className="my-form-group">
                <label className="form-label">What Do You Want To Add?</label>{" "}
                <input
                  value={this.state.valueName}
                  onChange={this.handleChangeName}
                  type="text"
                  id="user-input-pName-edit"
                  placeholder="Type Your Product Here"
                  value={this.state.valueName}
                  className="form-control"
                />
              </div>
              <br />
              <br />
              <div className="row">
                <div className="col-sm-3">
                  <label className="form-label-edit">Quantity </label>{" "}
                  <input
                    value={this.state.valueQuan}
                    onChange={this.handleChangeQuan}
                    type="number"
                    id="user-input-pQuan-edit"
                    placeholder="How Many Pieces You Want?"
                    className="form-control"
                  />
                </div>
              </div>
              <br />
              <br />
            
              <input
                id = "inputBtn"
                type="submit"
                value="Edit Product"
                className="btn btn-success"
                onClick={(e) =>
                  this.Edit_Operation(
                    e,
                    this.state.valueName,
                    this.state.valueQuan
                  )
                }
              />
              <input id = "inputBtn" type="reset" value="Reset" className="btn btn-danger" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
