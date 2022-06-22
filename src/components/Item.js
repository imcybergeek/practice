import { Component } from "react";

class Item extends Component {
    state = {
        count: 0
    }

    render() {
        return (
            <div>
                <h1>{this.props.item.name}</h1>
                <h2>{this.props.item.price}</h2>
                <h3>Quantity: {this.state.count}</h3>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>+</button>
                <button onClick={() => this.state.count - 1 >= 0 && this.setState({count: this.state.count - 1 })}>-</button>
            </div >
        )
    }
}

export default Item;