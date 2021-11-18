import { useEffect } from "react"
import { Form } from "./Form"

export const Wrapper = ({handleSubmit, data, cep, setCep, api}) => {

  const handleChange = (event) => {
    const value = event.target.value.replace(/\D/g, "")
    setCep(value)
  }

  useEffect(() => {
    if (cep.length === 8) {
      handleSubmit()
    }
    // eslint-disable-next-line
  }, [cep])

  return <Form api={api} cep={cep} data={data} handleChange={handleChange} />
}