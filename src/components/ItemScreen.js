import { Component } from "react"
import Item from "./Item"
export default class ItemScreen extends Component {
    state = {
        items: [{
            name: "Item 1",
            price: "100",
        }],
        isVisible: false

    }

    render() {
        return (
            <>
                <button onClick={() => this.setState({ ...this.state, isVisible: true })}>Load</button>
                {this.state.isVisible && this.state.items.map((item, index) => <Item key={index} item={item} />)}
            </>
        )
    }
}