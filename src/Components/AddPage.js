import React, { Component } from "react";
import "../index.css";
import EditPage from "./EditPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FaUpload } from "react-icons/fa";
import { BiCheckCircle } from "react-icons/bi";

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
      images: "",

      // To Check if the user has been added a picture or not (After he hits the button)
      fileHandle: null,
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeQuan = this.handleChangeQuan.bind(this);
    this.handleChangeImage = this.handleChangeImage.bind(this);

    // this.imageHandle = this.imageHandle.bind(this);
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
  handleChangeImage(event) {
    [...event.target.files].forEach((file) => {
      console.log("file >>> ", file.name);

      this.setState({
        // images: URL.createObjectURL(file),
        images: [...this.state.images, URL.createObjectURL(file)],
      });
    });


    let myFile = document.querySelector("#user-input-upload");

    // Get the selected file
    [myFile] = event.target.files;
    // Get the file name and size
    const fileName = myFile.name;

    // Convert size in bytes to kilo bytes
    // const size = (myFile.size / 1000).toFixed(2);

    // // Set the text content
    // const fileNameAndSize = fileName + " - " + size + "KB";
    document.getElementById("checkId").className = "On";

    this.setState({
      fileHandle: fileName,
    });

    // setPictures(tempArr);
  }

  Add_Operation = (e, myFileHandle) => {
    console.log(myFileHandle);
    // To Prevent The Refresh The Page And Fire Toggle
    e.preventDefault();

   
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
      images: "",
      fileHandle: null,
    });

    document.querySelector(".On").className = "Off";
  };

  render() {
    
    // if (window.performance) {
    //   console.info("window.performance works fine on this browser");
    // }
    // console.info(performance.navigation.type);
    // if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
    //   console.info("This page is reloaded");
    
    //   window.location.href = "/Stationery-Store-Project";

    // } else {
    //   console.info("This page is not reloaded");
    // }
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
              <div className="divUpload">
                <label
                  htmlFor="user-input-upload"
                  className="form-label-upload"
                >
                  <span style={{ verticalAlign: "text-bottom" }}>
                    <FaUpload />
                  </span>{" "}
                  Do You Want To Upload an Image?
                </label>{" "}
                <p id="checkId" style={{display: "none"}}><BiCheckCircle/></p>
                <input
                  className="inputFile"
                  type="file"
                  id="user-input-upload"
                  onChange={this.handleChangeImage}
                />
              </div>
              <input
                id="inputBtn"
                type="submit"
                value="Add Product"
                className="btn btn-primary"
                onClick={(e) => this.Add_Operation(e, this.state.fileHandle)}
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
