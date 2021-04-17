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
      valueQuan: "",
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

  // This for reset the inputs

  ResetOperation = (e) => {
    
    e.preventDefault();

    this.setState({

      valueName: "",
      valueQuan: ""
    });
  }

  render() {
    return (
      <Router>
        <div>
          <h1 className="text-center" id="AddTitle">Add A Product</h1>

          

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
