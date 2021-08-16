import React, { Component } from "react";
import Home from "./Components/Home";
import EditPage from "./Components/EditPage";
import AddPage from "./Components/AddPage";
import "./App.css";
import APIPage from "./Components/APIPage";
import DeletePage from "./Components/DeletePage";
import GetAll from "./Components/GetAll";
import Fave from "./Components/Fave";
import logo from "./Images/Logo_Stationery.PNG";
import swal from "sweetalert";
import $ from "jquery";

// This Import For Brings Icons From react-icons/ai
import { RiHeartAddLine } from "react-icons/ri";

// These Imports For Router
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      objectOfProducts: {
        name: [],
        quan: [],
        images: [],
      },

      //To store the favorite products name and quantity.
      faveObjects: {
        isFaveArrayName: [],
        isFaveArrayQuan: [],
      },
    };

    this.AddProduct = this.AddProduct.bind(this);
  }
  // let newName = this.state.objectOfProducts.name
  // newName.push(pName)
  // this.setState({
  //     name: newName
  // })

  AddProduct = (pName, quan, image) => {
    // This Function for add a product and save it in the array.
    console.log(pName, quan , image);

    this.setState({
      objectOfProducts: {
        name: [...this.state.objectOfProducts.name, pName],
        quan: [...this.state.objectOfProducts.quan, quan],
        images: [...this.state.objectOfProducts.images, image]
      },
    });
    swal({
      title: "Added Successfully",
      icon: "success",
    });
    // console.log("Added Success: ", this.state.objectOfProducts);
  };

  deleteFun = (deletedRowName, deletedRowQuan, pName, quan) => {
    console.log("ROW: ", deletedRowName , deletedRowQuan);
    console.log("63: ", pName, quan);

      swal({
      title: "Are You Sure?",
      text: "Are you sure you want to delete this products?",
      icon: "warning",
      buttons: true, // This button to tell the Sweetalert to add a cancel button with confirmation button
      dangerMode: true, // The focus will automatically be set on the cancel button instead of the confirm button
    }).then((willDelete) => {
      if (willDelete) {
        swal({
          title: "Delete Product",
          text: "Deleted Successfully",
          icon: "success",
        });
         // this for deleted from the favorite section if it is there.
        if (this.state.faveObjects.isFaveArrayName.includes(deletedRowName)) {
          
          let knowIndex = this.state.faveObjects.isFaveArrayName.indexOf(deletedRowName);
          console.log(knowIndex)
          this.state.faveObjects.isFaveArrayName.splice(knowIndex, 1);

        }

        if (this.state.objectOfProducts.name.includes(deletedRowName)) {
          
          let knowIndex = this.state.objectOfProducts.name.indexOf(deletedRowName);
          this.state.objectOfProducts.name.splice(knowIndex, 1);
        }
        
        if (this.state.objectOfProducts.quan.includes(deletedRowQuan)) {
          let knowIndex = this.state.objectOfProducts.quan.indexOf(deletedRowQuan);
          this.state.objectOfProducts.quan.splice(knowIndex, 1);
        }

        console.log("81: ", this.state.objectOfProducts)
        // To Update the arrays and re-rendering again with new list
        this.setState({
          objectOfProducts: {
            name: this.state.objectOfProducts.name,
            quan: this.state.objectOfProducts.quan,
          },
          // faveObjects: {
          //   isFaveArrayName: this.state.objectOfProducts.name,
          //   isFaveArrayQuan: this.state.objectOfProducts.quan,
          // }
        });
        console.log("93: ", this.state.objectOfProducts)
        console.log("88: ", this.state.faveObjects)

      }
    });
  }

  myFave = (faveName, faveQuan) => {
    // This Function For Add a marked product to the favorite array.

    console.log("111: ", faveName, faveQuan);
    let newFaveArrayName = this.state.faveObjects.isFaveArrayName;
    newFaveArrayName.push(faveName);
    let newFaveArrayQuan = this.state.faveObjects.isFaveArrayQuan;
    newFaveArrayQuan.push(faveQuan);
    this.setState({
      faveObjects: {
        isFaveArrayName: newFaveArrayName,
        isFaveArrayQuan: newFaveArrayQuan,
      },
    });
    console.log("22:",this.state.faveObjects.isFaveArrayName);
    console.log(this.state.faveObjects.isFaveArrayQuan);

    $("span").removeClass("newstyle");
    

    

    swal({
      title: "Added Successfully",
      icon: "success"
    
    });
    $("span").addClass("newstyle");
    
  };

  removeOperation = (removeName, removeQuan) => {
    console.log("RemoveFave From APP = ", removeName, " ", removeQuan);

    if (this.state.faveObjects.isFaveArrayName.includes(removeName)) {
      let knowIndex = this.state.faveObjects.isFaveArrayName.indexOf(
        removeName
      );
      this.state.faveObjects.isFaveArrayName.splice(knowIndex, 1);
    }
    if (this.state.faveObjects.isFaveArrayQuan.includes(removeQuan)) {
      let knowIndex = this.state.faveObjects.isFaveArrayQuan.indexOf(
        removeQuan
      );
      this.state.faveObjects.isFaveArrayQuan.splice(knowIndex, 1);
    }

    // To Update the arrays and re-rendering again with new list
    this.setState({
      faveProps: {
        isFaveArrayName: this.state.faveObjects.isFaveArrayName,
        isFaveArrayQuan: this.state.faveObjects.isFaveArrayQuan,
      },
    });

    swal({

      title: "Removed Successfully",
      icon: "success"

    });
  };

  render() {
    console.log("New Array => ", this.state.objectOfProducts);
    return (
      
      <Router>
        <div className="App">
          {/* <img src={ this.state.objectOfProducts.images} alt="Loading...."></img> */}
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <a className="navbar-brand" href="/Stationery-Store-Project">
                  <img
                    src={logo}
                    alt=""
                    width="30"
                    height="24"
                    className="d-inline-block align-top"
                  ></img>
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        to="/Fave"
                        style={{ textDecoration: "none" }}
                        activeClassName="fave-link"
                      >
                        <h2
                          id="fave-icon"
                          style={{ width: "30", height: "24" }}
                          className="d-inline-block align-top"
                        >
                          <RiHeartAddLine />
                          <span className="counter-style">
                            {console.log(this.state.faveObjects)}
                            {console.log(this.state.faveObjects.isFaveArrayName.length)}
                            {this.state.faveObjects.isFaveArrayName.length}
                          </span>
                        </h2>
                      </NavLink>
                    </li>

                    <p className="title">Stationery Store In Your Hands</p>
                  </ul>
                  <NavLink
                    to="/Stationery-Store-Project/API_Page"
                    style={{ textDecoration: "none" }}
                    activeClassName="api-link"
                  >
                    <h4 id="API-tag">Something Fun</h4>
                  </NavLink>
                </div>
              </div>
            </nav>
            <p className="text-center" style={{ margin: "4vh 0" }}>
              <img
                src={logo}
                className="img-rounded"
                alt="MyImage"
                width="15%"
                height="15%"
                rounded = "true"
              ></img>
            </p>
            <h3 className="text-center" style={{ margin: "10vh 0" }}>
              {" "}
              What Do You Want?
            </h3>
            <ul className="nav justify-content-center nav-pills">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  role="tab"
                  style={{ textDecoration: "none" }}
                  to="/Add-Page"
                >
                  Add A Product
                </NavLink>
                {/* <a className="nav-link active" aria-current="page" href="#">
                  Active
                </a> */}
              </li>
              <li className="nav-item">
                <NavLink
                  style={{ textDecoration: "none" }}
                  activeClassName="edit-link"
                  className="nav-link"
                  data-toggle="pill"
                  role="tab"
                  to="/Edit_Page"
                >
                  Edit On A Product
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  style={{ textDecoration: "none" }}
                  activeClassName="delete-link"
                  className="nav-link"
                  data-toggle="pill"
                  to="/Delete_Page"
                >
                  Delete A Product/s
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  style={{ textDecoration: "none" }}
                  activeClassName="get-link"
                  className="nav-link"
                  data-toggle="pill"
                  to="/Get_All"
                >
                  Get All Products
                </NavLink>
              </li>
            </ul>{" "}
            {/* <div className="link-tags"> */}
            {/* We can use Link tag, but I've used NavLink to styling purpose only because if we have used NavLink we can't add styling on it. */}
            {/* </div> */}
            {/* Line 234: Here To set the Home Component as Default Page. */}
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/Home" component={Home}></Route>
            <Route
              exact
              path="/Add-Page"
              component={() => <AddPage test={this.AddProduct} />}
            ></Route>
            <Route
              exact
              path="/Edit_Page"
              component={() => (
                <EditPage productProps={this.state.objectOfProducts} />
              )}
            ></Route>
            <Route
              exact
              path="/Delete_Page"
              component={() => (
                <DeletePage
                  dOperation = {this.deleteFun}
                  productProps={this.state.objectOfProducts}
                  myFun={this.delete}
                  isfave = {this.state.faveObjects}
                />
              )}
            ></Route>
            <Route
              exact
              path="/Get_All"
              component={() => (
                <GetAll
                  productProps={this.state.objectOfProducts}
                  myFun={this.myFave}
                />
              )}
            ></Route>
            <Route
              exact
              path="/Stationery-Store-Project/API_Page"
              component={APIPage}
            ></Route>
            <Route
              exact
              path="/Fave"
              component={() => (
                <Fave
                  faveProps={this.state.faveObjects}
                  productProps={this.state.objectOfProducts}
                  removeProps={this.removeOperation}
                />
              )}
            ></Route>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
