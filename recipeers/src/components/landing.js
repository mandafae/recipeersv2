import React, { Component } from "react";

class Landing extends Component {
  render() {
    return (
      <div className="container">
        <div className="card-container">
          <div className="card">Login goes here</div>
        </div>
        <div className="footer">
          Photo by{" "}
          <a
            href="https://unsplash.com/photos/y1XXWct5rBo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            target="_blank"
          >
            Lee Myungseong
          </a>{" "}
          on{" "}
          <a
            href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            target="_blank"
          >
            Unsplash
          </a>
          .
        </div>
      </div>
    );
  }
}

export default Landing;
