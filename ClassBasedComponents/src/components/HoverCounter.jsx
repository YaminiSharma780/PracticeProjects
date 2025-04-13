import { Component } from "react";
import withCounter from "./higherOrderComp/withCounter";

class HoverCounter extends Component {
  render() {
    return (
      <div className="flex gap-6">
        <h2
          className="flex items-center justify-center rounded text-lg font-bold px-10 py-4 cursor-pointer bg-violet-300"
          onMouseOver={this.props.incCount}
        >
          {this.props.count}
        </h2>
      </div>
    );
  }
}

export default withCounter(HoverCounter);
