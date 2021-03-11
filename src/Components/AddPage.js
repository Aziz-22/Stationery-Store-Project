import React, { Component } from "react";
import "../index.css";
import EditPage from "./EditPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
          <h1 class="text-center" id="AddTitle">Add A Product</h1>

          <div>
            <form>
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="form-control-input1-id"
                  value={this.state.valueName}
                  onChange={this.handleChangeName}
                />
                <label for="form-control-input1-id" className="form-label">
                  What Do You Want To Add?
                </label>
              </div>
              <div class="form-floating">
                <input
                  type="number"
                  class="form-control"
                  id="form-control-input2-id"
                  value={this.state.valueQuan}
                  onChange={this.handleChangeQuan}
                />
                <label for="form-control-input2-id" className="form-label">
                  Quantity
                </label>
              </div>
              
              
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
