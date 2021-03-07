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
// This Import For Brings Icons From react-icons/ai
import { RiHeartAddLine } from "react-icons/ri";

// These Imports For Router
import {
  BrowserRouter as Router,
  Route,
  NavLink,
} from "react-router-dom";

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
    alert("Added Successfully ");
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

    alert("Added Successfully");
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
            <Home />
            <nav className="app-nav">
              {/* Logo For Website... */}

              <h1 className="name-website">Stationery Store In Your Hands</h1>

              <img
                src={logo}
                className="img-rounded"
                alt="Image"
                width="15%"
                height="15%"
                rounded
              ></img>

              <NavLink
                to="/Stationery-Store-Project/API_Page"
                style={{ textDecoration: "none" }}
                activeClassName="api-link"
              >
                <h4 id="API-tag">Something Fun</h4>
              </NavLink>
              <NavLink
                to="/Fave"
                style={{ textDecoration: "none" }}
                activeClassName="fave-link"
              >
                <h2 id="fave-icon">
                  <RiHeartAddLine />
                  <span className="counter-style">
                    {this.state.faveObjects.isFaveArrayName.length}
                  </span>
                </h2>
              </NavLink>
            </nav>

            <h3 className="question"> What Do You Want?</h3>

            <div className="link-tags">
              {/* We can use Link tag, but I've used NavLink to styling purpose only because if we have used NavLink we can't add styling on it. */}

              <NavLink
                style={{ textDecoration: "none" }}
                activeClassName="add-link"
                to="/Add-Page"
              >
                Add A Product
              </NavLink>
              <NavLink
                style={{ textDecoration: "none" }}
                activeClassName="edit-link"
                to="/Edit_Page"
              >
                Edit On A Product
              </NavLink>
              <NavLink
                style={{ textDecoration: "none" }}
                activeClassName="delete-link"
                to="/Delete_Page"
              >
                Delete A Product/s
              </NavLink>
              <NavLink
                style={{ textDecoration: "none" }}
                activeClassName="get-link"
                to="/Get_All"
              >
                Get All Products
              </NavLink>
            </div>

            {/* Line 176: Here To set the Home Component as Default Page. */}
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
            <Route exact path="/Stationery-Store-Project/API_Page" component={APIPage}></Route>
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
