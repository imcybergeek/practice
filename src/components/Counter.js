import { Component } from 'react'

export default class Counter extends Component {
        state = {
            count: 0,
        }

    render() {
        return (
            <>
                <p>{this.state.count}</p>
                <button onClick={() => this.setState({count: this.state.count + 1 })}>
                    Increase
                </button>
                <button onClick={() => this.state.count!==0 && this.setState({count: this.state.count - 1 })}>
                    Decrease
                </button>
            </>
        )
    }
}