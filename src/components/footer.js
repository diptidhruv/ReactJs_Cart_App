import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    const footer = (
      <div>
        <footer className="footer mt-auto py-3 bg-light fixed-bottom bg-dark">
          <div className="container">
            <span class="text-muted">© 2022 Company, Inc</span>
          </div>
        </footer>
      </div>
    );
    return footer;
  }
}
