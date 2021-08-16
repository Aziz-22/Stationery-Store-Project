import React, { Component } from "react";
import "../index.css";
import swal from "sweetalert";
export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //copyArray: this.props.productProps.name,
      valueName: "",
      valueQuan: 1,
      images: null,
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
      valueName: pName,
      valueQuan: pQuan,
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

    swal({
      title: "Are You Sure?",
      text: "Are you sure you want to edit on this products?",
      icon: "warning",
      buttons: true, // This button to tell the Sweetalert to add a cancel button with confirmation button
      dangerMode: true, // The focus will automatically be set on the cancel button instead of the confirm button
    }).then((willDelete) => {
      if (willDelete) {
        swal({
          title: "Edit Successfully",
          icon: "success",
        });
        // These Two Variables To Hold The Place Of THe Previous values.
        let knowIndexName = this.props.productProps.name.indexOf(
          this.state.editName
        );
        console.log("IndexName: ", knowIndexName);
        let knowIndexQuan = this.props.productProps.quan.indexOf(
          this.state.editQuan
        );
        console.log("IndexQuan: ", knowIndexQuan);

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
      }
    });

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
            <td><img className="img-thumbnail" src={this.props.productProps.images[eachQuan]} alt="Empty"></img></td>
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
    console.log(this.props.productProps.images[0])
    return (
      
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
            <div>
              <form>
                <div className="form-floating mb-3">
                  <input
                    // {...console.log("150: ", this.state.editName , this.state.editQuan )}
                    value={this.state.valueName}
                    onChange={this.handleChangeName}
                    type="text"
                    id="edit-input-id"
                    placeholder="Type Your Product Here"
                    className="form-control"
                  />
                  <label
                    htmlFor="form-control-input1-id"
                    className="form-label"
                  >
                    Edit a Product
                  </label>
                </div>
                <div className="form-floating">
                  <input
                    value={this.state.valueQuan}
                    onChange={this.handleChangeQuan}
                    type="number"
                    id="edit-input-id"
                    placeholder="How Many Pieces You Want?"
                    className="form-control"
                  />
                  <label
                    htmlFor="form-control-input2-id"
                    className="form-label"
                  >
                    Quantity
                  </label>
                </div>

                {/* <label> Do You Want To Upload an Image?</label>{" "}
              <input type="file" id="user-input-upload" />
              <br />
              <br /> */}
                <input
                  id="inputEditBtn"
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
              </form>
            </div>
            {/* <form>
              <div className="my-form-group">
                <label className="form-label">Edit a Product</label>{" "}
                <input
                  // {...console.log("150: ", this.state.editName , this.state.editQuan )}
                  value={this.state.valueName}
                  onChange={this.handleChangeName}
                  type="text"
                  id="user-input-pName-edit"
                  placeholder="Type Your Product Here"
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
            </form> */}
          </div>
        </div>
      </div>
    );
  }
}
