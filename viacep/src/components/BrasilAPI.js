import axios from "axios"
import { useState } from "react"
import { Wrapper } from "./Wrapper"

export const BrasilAPI = () => {

  const [data, setData] = useState({})
  const [cep, setCep] = useState("")

  const handleSubmit = async () => {
    try {
      const response = await axios(`https://brasilapi.com.br/api/cep/v1/${cep}`)
      setData(response.data)
    } catch (error) {
      setData({erro: true})
    }
  }

  return <Wrapper handleSubmit={handleSubmit} cep={cep} setCep={setCep} api="Brasil API" data={data} />
}