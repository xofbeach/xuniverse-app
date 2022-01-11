import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

// @inject(stores => ({
//   number: stores.counter.number,
//   increase: stores.counter.increase,
//   decrease: stores.counter.decrease,
// }))
@inject('counterStore', 'rootStore')
@observer
class Counter extends Component {
  render() {
    // const { number, increase, decrease } = this.props;
    console.log(this.props.counterStore)
    return (
      <div>
        <h1>{this.props.counterStore.data.number}</h1>
        <button onClick={this.props.counterStore.increase}>+1</button>
        <button onClick={this.props.counterStore.decrease}>-1</button>
      </div>
    );
  }
}

export default Counter;
