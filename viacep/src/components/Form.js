export const Form = (props) => {

  const {api, cep, data, handleChange} = props

  return (
    <>
      <h1>Digite um CEP para obter informações pelo serviço {api}</h1>
      <input type="text" value={cep} onChange={handleChange} maxLength={8} />
      { data.erro ? (
        <h2>CEP não encontrado...</h2>
      ) : data.cep && (
        <ul>
          <li>{data.logradouro || data.street}</li>
          <li>Bairro {data.bairro || data.neighborhood}</li>
          <li>{data.localidade || data.city}, {data.uf || data.state}</li>
          <li>{data.cep}</li>
        </ul>
      )}
    </>
  );
}