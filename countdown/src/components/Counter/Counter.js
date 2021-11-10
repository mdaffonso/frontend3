import { Component } from "react"
import styles from "./Counter.module.scss"

export class Counter extends Component {

  constructor(props) {
    super()
    this.state = {
      counter: props.time || 60,
      ticker: setInterval(this.tick, 1000)
    }
  }

  tick = () => {
    if(this.state.counter > 0) {
      this.setState({counter: this.state.counter - 1})
    } else {
      this.setState({counter: this.props.time})
    }
  }

  render() {
    return (
      <div className={styles.Counter}>
        {this.state.counter}
      </div>
    )
  }
}