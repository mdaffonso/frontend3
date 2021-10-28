
export const CardSection = ({title, items}) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {
          items.map(item => (item &&
            <li key={item}>{item}</li>
          ))
        }
      </ul>
    </div>
  )
}