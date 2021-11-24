import { useEffect, useState } from "react"

export const NotFound = () => {

  const [ time, setTime ] = useState(5)

  useEffect(() => {
    const theFinalCountdown = setTimeout(() => {
      setTime(time - 1)
    }, 1000)

    if (time <= 0) {
      setTime(0)
      clearTimeout(theFinalCountdown)
      window.location = "https://wplanet.com.br/"
    }

    return () => clearTimeout(theFinalCountdown)
  }, [time])

  return (
    <div className="not-found">
      <h2>A página que você está procurando não existe...</h2>
      <p>Você será punido em {time} segundos...</p>
    </div>
  )
}