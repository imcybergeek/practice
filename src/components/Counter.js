import { Component } from 'react'

export default class Counter extends Component {
        state = {
            count: 0,
            name: "Jatin"
        }

    render() {
        return (
            <>
                <p>{this.state.count} {this.state.name}</p>
                <button onClick={() => this.setState({count: this.state.count + 1 })}>
                    +
                </button>
                <button onClick={() => this.setState({count: this.state.count - 1 })}>
                    -
                </button>
            </>
        )
    }
}