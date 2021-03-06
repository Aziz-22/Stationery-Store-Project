import React, { Component } from "react";
import "../index.css";
import Edit_Page from "./EditPage";
import {
  BrowserRouter as Router,
  Route,

} from "react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
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
      valueQuan: 1,
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeQuan = this.handleChangeQuan.bind(this);
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
  Add_Operation = (e) => {
    // To Prevent The Refresh The Page And Fire Toggle
    e.preventDefault();
    
    console.log("Name ", this.state.valueName, "Quan ", this.state.valueQuan);
    this.props.test(this.state.valueName, this.state.valueQuan);

    
  };

  render() {
    return (
      <Router>
        <div>
         

          <h1>Add A Product</h1>

          <div>
            <form>
              <div id = "div-input" className="form-group">
                <label className="text-pName">What Do You Want To Add?</label>{" "}
                <center>
                <input
                  value={this.state.valueName}
                  onChange={this.handleChangeName}
                  type="text"
                  id="user-input-pName"
                  placeholder="Type Your Product Here"
                  className="form-control"
                  />
                  </center>
              </div>
              <br />
              <br />
              <div id = "div-input"  className="form-group">
                <label className="text-quan">Quantity </label>{" "}
                <center>
                <input
                  value={this.state.valueQuan}
                  onChange={this.handleChangeQuan}
                  type="number"
                  id="user-input-pQuan"
                  placeholder="How Many Pieces You Want?"
                  className="form-control"
                  />
                  </center>
              </div>
              <br />
              <br />
              {/* <label> Do You Want To Upload an Image?</label>{" "}
              <input type="file" id="user-input-upload" />
              <br />
              <br /> */}
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
