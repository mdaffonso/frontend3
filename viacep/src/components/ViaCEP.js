import axios from "axios"
import { useState } from "react"
import { Wrapper } from "./Wrapper"

export const ViaCEP = () => {

  const [data, setData] = useState({})
  const [cep, setCep] = useState("")

  const handleSubmit = async () => {
    try {
      const response = await axios(`https://viacep.com.br/ws/${cep}/json/`)
      setData(response.data)
    } catch (error) {
      setData({erro: true})
    }
  }

  return <Wrapper handleSubmit={handleSubmit} cep={cep} setCep={setCep} api="Via CEP" data={data} />
}