import { CardSection } from "./CardSection/CardSection"
import styles from "./Card.module.scss"

export const Card = () => {

  const data = [
      { name: "Felipe", gender: "m", bringing: "batata-frita", invited: true }, 
      { name: "Adryana", gender: "f", bringing: "doces", invited: true }, 
      { name: "Matheus", gender: "m", bringing: "pizza", invited: false },
      { name: "Ednaldo Pereira", gender: "m", bringing: "bebidas", invited: true }
  ]

  const processedGuests = data.map(entry => {
    const genderedString = entry.gender === "m" ? "convidado" : "convidada"
    const invitedString = entry.invited ? "está" : "não está"
    const sentence = `${entry.name} ${invitedString} ${genderedString} para a festa`
    return sentence
  })

  const processedTasks = data.map(entry => entry.invited && `${entry.name} trará ${entry.bringing}`)

  return (
    <div className={styles.Card}>
      <CardSection title="Convidados" items={processedGuests} />
      <CardSection title="Tarefas" items={processedTasks} />
    </div>
  )
}