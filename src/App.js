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

  AddProduct = (pName, quan) => {
    // This Function for add a product and save it in the array.
    console.log(pName, quan);

    this.setState({
      objectOfProducts: {
        name: [...this.state.objectOfProducts.name, pName],
        quan: [...this.state.objectOfProducts.quan, quan],
      },
    });
    swal({
      title: "Added Successfully",
      icon: "success",
    });
    console.log("Added Success");
  };

  myFave = (faveName, faveQuan) => {
    // This Function For Add a marked product to the favorite array.

    console.log(faveName, faveQuan);
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
    console.log(this.state.faveObjects.isFaveArrayName);
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

    alert("Removed Successfully ");
  };

  render() {
    console.log("New Array => ", this.state.objectOfProducts);
    return (
      <Router>
        <div className="App">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <a className="navbar-brand" href="/">
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
                  productProps={this.state.objectOfProducts}
                  myFun={this.delete}
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
