import React, { Component } from "react";

class Counter extends Component {
  // Component is updated ?
  componentDidUpdate(prevProps, prevState) {
    console.log("Prev props", prevProps);
    console.log("Prev State", prevState);

    if (prevProps.counter.value !== this.props.counter.value) {
      //ajax call and get data from server
    }
  }

  // perfact place for cleanup otherwise we'll end up with memory leaks
  componentWillUnmount() {
    console.log("component - removed");
  }

  // Check if counter has any value or not
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  // use 'ZERO' if no counter
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "ZERO" : value;
  }

  render() {
    console.log("Counter -Rendered");

    return (
      <React.Fragment>
        <div>
          <span style={{ fontSize: 20 }} className={this.getBadgeClasses()}>
            {this.formatCount()}
          </span>
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            increment
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2"
            disabled={this.isDisabled}
          >
            Delete
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Counter;

// pagination
//sorting
//searching
//Http
//Auth
//Deployment
