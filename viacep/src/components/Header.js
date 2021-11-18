import { Link, useLocation } from "react-router-dom";

export const Header = ({history}) => {
  const location = useLocation()
  const curr = location.pathname

  return (
    curr !== "/" && <header>
      {curr !== "/brasil-api" ? <Link to="/brasil-api">Brasil API</Link> : <p>Brasil API</p> }
      {curr !== "/via-cep" ? <Link to="/via-cep">Via CEP</Link> : <p>Via CEP</p> }
    </header>
  )
}