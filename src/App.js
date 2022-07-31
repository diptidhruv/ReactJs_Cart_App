import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Navbar from "./components/navbar";
import Header from "./components/header";
import Counters from "./components/Counters";
import Footer from "./components/footer";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 1 },
      { id: 4, value: 0 },
    ],
  };

  // Life cycyle hook1

  // perfact place to initializa properties here  , constructor is called once this class is initilized
  constructor(props) {
    super(props);
    console.log("App - constructor", this.props);

    // this.state= this.props.something  // directly update state here
  }

  // life cycle hook3
  // perfact place for ajax call and get data from the server
  componentDidMount() {
    console.log("App mounted");

    //const objMovies = {}; // data from server and update to state
    // this.setState({movies:movies})
  }

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters: counters });
  };

  // Life cycle hook2
  render() {
    console.log(
      "App - Rendered : when component is rendered all its components are rendered recursively"
    );

    return (
      <React.Fragment>
        {/* Header component */}
        <Header />

        {/* Navbar componenet */}
        <Navbar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />

        <main className="container">
          <Counters
            counters={this.state.counters}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
          />
          {/* <Sidebar /> */}
          {/* <Carousel /> */}
          <Footer />
        </main>
      </React.Fragment>
    );
  }
}
export default App;
