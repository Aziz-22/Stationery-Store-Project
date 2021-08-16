import React, { Component } from "react";
import "../index.css";
import EditPage from "./EditPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FaUpload } from "react-icons/fa";
import $ from "jquery";

export default class Add_Page extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Here To Store All Products That Comes From The User's Form.
      //   objectOfProducts: {
      //     name: [],
      //     quan: [],
      //   },

      valueName: "",
      valueQuan: "",
      images: null,
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeQuan = this.handleChangeQuan.bind(this);
    this.handleChangeImage = this.handleChangeImage.bind(this);
    // this.imageHandle = this.imageHandle.bind(this);
  }

  // imageHandle = (event) =>{

  //   if (event.target.files && event.target.files[0]) {

  //     let img = event.target.files[0];
  //     this.setState({

  //       images: URL.createObjectURL(img)
  //     });
  //   }
  // }
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
  handleChangeImage(event) {
    

    [...event.target.files].forEach((file) => {
      console.log("file >>> ", file.name);


      this.setState({
        images: URL.createObjectURL(file),
      });

    });

    var file = document.querySelector("#user-input-upload");

    // Get the selected file
    [file] = event.target.files;
    // Get the file name and size
    const fileName = file.name;
    // Convert size in bytes to kilo bytes
    const size = (file.size / 1000).toFixed(2);
  
    // Set the text content
    const fileNameAndSize = fileName + " - " + size + "KB";
    document.querySelector(".file-name").textContent = fileNameAndSize;

    // setPictures(tempArr);
  }
  Add_Operation = (e) => {
    // To Prevent The Refresh The Page And Fire Toggle
    e.preventDefault();

    console.log(
      "Name ",
      this.state.valueName,
      "Quan ",
      this.state.valueQuan,
      "IMAGE: ",
      this.state.images
    );
    this.props.test(
      this.state.valueName,
      this.state.valueQuan,
      this.state.images
    );
  };

  // This for reset the inputs

  ResetOperation = (e) => {
    e.preventDefault();

    this.setState({
      valueName: "",
      valueQuan: "",
    });
  };

  render() {
    return (
      <Router>
        <div>
          <h1 className="text-center" id="AddTitle">
            Add a Product
          </h1>

          <div>
            <form>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="form-control-input1-id"
                  value={this.state.valueName}
                  onChange={this.handleChangeName}
                  placeholder="Type Here Your Product"
                />
                <label htmlFor="form-control-input1-id" className="form-label">
                  What do You Want to Add?
                </label>
              </div>
              <div className="form-floating">
                <input
                  type="number"
                  className="form-control"
                  id="form-control-input2-id"
                  value={this.state.valueQuan}
                  onChange={this.handleChangeQuan}
                  placeholder="How Many Do you Want?"
                />
                <label htmlFor="form-control-input2-id" className="form-label">
                  Quantity
                </label>
              </div>
              <br></br>
              <label htmlFor="user-input-upload" className="form-label-upload">
                <span style={{ verticalAlign: "text-bottom" }}>
                  <FaUpload />
                </span>{" "}
                Do You Want To Upload an Image?
                
              </label>{" "}
              <p className="file-name"></p>
              <input
                className="inputFile"
                type="file"
                id="user-input-upload"
                onChange={this.handleChangeImage}
              />
              <input
                id="inputBtn"
                type="submit"
                value="Add Product"
                className="btn btn-primary"
                onClick={this.Add_Operation}
              />
              <input
                id="inputBtn"
                type="reset"
                value="Reset"
                className="btn btn-danger"
                onClick={this.ResetOperation}
              />
            </form>
          </div>
          <Route
            exact
            path="/Edit_Page"
            foo="I'm Prop"
            component={() => (
              <EditPage arrayProps={this.state.objectOfProducts.name} />
            )}
          ></Route>
          {/* <Route exact path="/" component={App}></Route> */}
          {/* <Route exact path="/Edit_Page" component={Edit_Page}></Route> */}
        </div>
      </Router>
    );
  }
}
