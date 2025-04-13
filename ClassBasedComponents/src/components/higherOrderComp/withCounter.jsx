import { Component } from "react";

const withCounter = (WrappedComponent) => {
  return class HigherOrderCounterComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }

    incCount = () => {
      this.setState({ count: this.state.count + 1 });
    };
    render() {
      return (
        <WrappedComponent count={this.state.count} incCount={this.incCount} />
      );
    }
  };
};

export default withCounter;
