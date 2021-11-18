import { Link } from "react-router-dom";

export const Home = () => (
  <div className="buttons-wrapper">
    <Link to="/brasil-api"><button>Brasil API</button></Link>
    <Link to="/via-cep"><button>Via CEP</button></Link>
  </div>
)