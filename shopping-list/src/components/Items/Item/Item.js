import { Component } from "react"
import styles from "./Item.module.scss"

export default class Item extends Component {

  constructor() {
    super()
    this.state = {
      out: "false"
    }
  }

  remove = () => {
    this.setState(() => ({ out: "true" }))
    setTimeout(this.props.clickHandler, 250)
  }

  render() {
    return (
      <button className={styles.Item} onClick={this.remove} data-out={this.state.out}>
        <img src={this.props.image} alt={this.props.description} />
        <h2>{this.props.name}</h2>
      </button>
    )
  }
}