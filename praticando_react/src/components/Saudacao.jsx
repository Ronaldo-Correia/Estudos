import Cumprimentar from "./Cumprimentar"

function Saudacao({ nome }) {
  return (
    <h2>
      <Cumprimentar hora={new Date().getHours()} />,{" "}
      {nome ? nome : "visitante"}, bem-vindo ao nosso site!
    </h2>
  )
}

export default Saudacao
