import { Component } from "react";
import styles from "./Items.module.scss"

export default class Items extends Component {
  render() {
    return (
      <div className={styles.Items}>
        {this.props.children.length > 0 ? this.props.children : <h3>Nenhum item para mostrar...</h3>}
      </div>
    )
  }
}