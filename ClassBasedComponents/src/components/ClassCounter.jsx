import { Component } from "react";

export default class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  incCount() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    const { name } = this.props;
    const { count } = this.state;
    return (
      <div className="flex gap-6">
        <button
          className="border rounded border-blue-600 border-solid border-x-2 border-y-2 bg-blue-300"
          onClick={() => this.setState({ count: count - 1 })}
        >
          Decrease
        </button>
        <h2 className="font-bold">{count}</h2>
        <button
          className="border rounded border-blue-600 border-solid border-x-2 border-y-2 bg-blue-300"
          onClick={this.incCount.bind(this)}
        >
          Increase
        </button>
        <p>{name}</p>
      </div>
    );
  }
}
