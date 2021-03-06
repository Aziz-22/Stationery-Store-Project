import React, { Component } from "react";

import axios from "axios";
import $ from "jquery";
export default class APIPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            valueInput: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.checkSpace = this.checkSpace.bind(this);
    }
    handleChange(event) {
        this.setState({
            valueInput: event.target.value,
        });
    }
    checkSpace = (event) => {
        console.log("I'm In");
        event.preventDefault();
        const form = $("#Input");
        let VAR = form.val();

        console.log("Before ", VAR);
        if (VAR.includes(" ")) {
            let varSplit = VAR.split(" "); // []
            let varJoin = varSplit.join("+");
            console.log("Result ", varJoin);
            VAR = varJoin;

            //return varJoin;
            //postData(varJoin);
        }

        return this.showGifs(VAR);
        //
        //postData();
    };
     
    showGifs = (myVar) => {
    const divContainer = document.getElementById("container");
        console.log("I'm In ShowGifs Method ", myVar);
        const API_1 = `http://api.giphy.com/v1/gifs/search?q=${myVar}&api_key=dc6zaTOxFJmzC`;
        axios
            .get(API_1)
            .then((response) => {
                const data = response.data.data.length;
                console.log("Length ", data);
                console.log("RESPONSE: ", response);
                console.log("DATA: ", response.data);

                //document.removeChild("img");

                divContainer.innerHTML = "";

                //    let one =  document.querySelector("img").
                let i = 0;
                for (i; i < data; i++) {
                    const dataImage = response.data.data[i].images.original.url;

                    const img = document.createElement("img");

                    img.src = dataImage;

                    divContainer.appendChild(img);
                }
            })
            .catch((err) => {
                console.log("ERR: ", err);
                divContainer.innerHTML = "";
                const myError = document.createElement("h3");

                myError.innerText = "Invalid Input, Please Type Another Thing";
                myError.style.color = "red";
                myError.style.textAlign = "center";

                divContainer.appendChild(myError);
            });
    };


  render() {
    // const btn = $("#Btn");
    // btn.on("click", checkSpace);
   

    // const postData = (myVar) => {
    //   //$ {};
    //   // http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC

    return (
      <div>
            <h2>API</h2>
            <h3>Type Anything To See Images As Gif For That.</h3>

        <form id="myForm" method="GET">
          <input
            id="Input"
                    type="text"
                    placeholder = "Type Anything To See Images As Gif For That."
            onChange={this.handleChange}
            value={this.state.valueInput}
          />

          <button id="Btn" onClick={(e) => this.checkSpace(e)}>
            Submit
          </button>

          {/* <input id="Sub" type="submit" value="Submit" /> */}
        </form>
        <br />

        <div id="container"></div>
      </div>
    );
  }
}
