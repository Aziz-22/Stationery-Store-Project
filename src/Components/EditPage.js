import React, { Component } from "react";
import "../index.css";
import swal from "sweetalert";
import { FaUpload } from "react-icons/fa";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //copyArray: this.props.productProps.name,
      valueName: "",
      valueQuan: 1,
      valueImage: "",
      //These new edit variables to copy the previous values that in the variables above
      editName: "",
      editQuan: 1,
      editImage: "",
    };

    // this.GoToAPIpage = this.GoToAPIpage.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeQuan = this.handleChangeQuan.bind(this);
    this.handleChangeImage = this.handleChangeImage.bind(this);
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
  handleChangeImage = (event) => {
    // [...event.target.files].forEach((file) => {
    //   console.log("file >>> ", file.name);

      this.setState({
        // file: URL.createObjectURL(event.target.files[0])
        //   // images: URL.createObjectURL(file),
        valueImage: URL.createObjectURL(event.target.files[0]),
      });
    // });
  };

  boxModal = (pName, pQuan, pImage) => {
    console.log("Modal For => ", pName, " ", pQuan, " ", pImage);

    // To Hold The Previous Values For Product Name And Quantity
    this.setState({
      valueName: pName,
      valueQuan: pQuan,
      valueImage: pImage,
      editName: pName,
      editQuan: pQuan,
      editImage: pImage,
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

  Edit_Operation = (e, newProductName, newQuan, newImage) => {
    e.preventDefault();
    var modal = document.getElementById("myModal");
    console.log("The New Image, ", this.state.editImage, " OR ", newImage);
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

        let knowIndexImage = this.props.productProps.images.indexOf(
          this.state.editImage
        );
        console.log("IndexImage : ", knowIndexImage);

        //  Then replace it with new ones
        this.props.productProps.name[knowIndexName] = newProductName;
        this.props.productProps.quan[knowIndexQuan] = newQuan;
        this.props.productProps.images[knowIndexImage] = newImage;

        // To Update the arrays and re-rendering again with new list
        this.setState({
          objectOfProducts: {
            name: this.props.productProps.name,
            quan: this.props.productProps.quan,
            images: this.props.productProps.images,
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
            <td>
              <img
                className="img-thumbnail"
                src={this.props.productProps.images[eachQuan]}
                alt="Empty"
              ></img>
            </td>
            <td
              id="edit"
              onClick={() =>
                this.boxModal(
                  eachName,
                  this.props.productProps.quan[eachQuan],
                  this.props.productProps.images[eachQuan]
                )
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
    // console.log("Image Now => ", this.state.valueImage," / " , this.state.editImage)
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
                <div className="form-floating mb-5">
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
                <div className="form-floating">
                  <label
                    style={{ marginTop: "1vh", marginLeft: "12vw" }}
                    htmlFor="user-input-uploading"
                    className="form-label-uplod"
                  >
                    Do You Want To Change The Image?
                  </label>{" "}
                  <input
                    style={{ marginTop: "11vh", marginLeft: "13vw" }}
                    className="form-contr"
                    type="file"
                    id="user-input-uploading"
                    onChange={this.handleChangeImage}
                  />
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
                      this.state.valueQuan,
                      this.state.valueImage
                    )
                  }
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
