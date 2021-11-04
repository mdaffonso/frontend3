import { Component } from 'react'
import Item from './components/Items/Item/Item';
import Items from './components/Items/Items';

const data = [
  {
    id: "socks",
    name: "Meias",
    image: "https://cdn.shopify.com/s/files/1/0077/0025/0697/products/mens-sock-checker-gold-goldie-socks_1200x1200.jpg?v=1541354430",
    description: "Par de meias coloridas"
  },
  {
    id: "jacket",
    name: "Paletó",
    image: "https://emecasual.com/wp-content/uploads/2020/04/Blazer-Denim-1.jpeg",
    description: "Paletó masculino cinza risca de giz"
  },
  {
    id: "fork",
    name: "Garfo",
    image: "https://m.media-amazon.com/images/I/71RRthv0TkL._AC_SL1500_.jpg",
    description: "Garfo de aço inoxidável, 1 unidade"
  }
]

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      items: data
    }
  }

  reset = () => {
    this.setState({ items: data })
  }

  removeItem = (which) => {
    this.setState(state => ({ items: state.items.filter(item => item.id !== which) }))
  }
  
  render() {
    return (
      <>
        <header>
          <h1>Lista de Compras</h1>
          <button onClick={this.reset}><img src="refresh.png" alt="redefinir" /></button>
        </header>
        <main>
          <Items>
            {
              this.state.items.map(item => (
                <Item key={item.id} name={item.name} image={item.image} description={item.description} clickHandler={() => this.removeItem(item.id)} />
              ))
            }
          </Items>
        </main>
      </>
    );
  }
}
