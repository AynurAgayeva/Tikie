import React, { Component } from "react";
import SingleCard from "./SingleCard";

import { data } from "./data";

class Shop extends Component {
  constructor() {
    super();
  this.state = {
    data: data.slice(0, 12),
  };
  }




  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="shop mt-5">
            <div className=" d-flex align-items-center justify-content-center mb-2">
              <h1 className="">Shop</h1>
            </div>


          </div>

          {this.state.data.length === 0 ? (
            <h1 style={{ textAlign: "center", marginTop: "100px" }}>
              Loading...
            </h1>
          ) : (
            this.state.data.map((item) => {
              return <SingleCard userdata={item} key={item.id} />;

              {
              }
            })
          )}
        </div>
      </div>
    );
  }
}

export default Shop;
