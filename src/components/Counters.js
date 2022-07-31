import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  render() {
    console.log("Counters -Rendered");

    // object destructuring
    const { onReset, counters, onDelete, onIncrement } = this.props;

    return (
      <div>
        <button onClick={onReset} className="btn btn-danger btn-sm m-2">
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            onIncrement={onIncrement}
            onDelete={onDelete}
            key={counter.id}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
