function Cumprimentar({ hora }) {
  const saudacao =
    hora >= 0 && hora <= 12
      ? "Bom dia"
      : hora > 12 && hora <= 18
      ? "Boa tarde"
      : "Boa noite"

  return <span>{saudacao}</span>
}

export default Cumprimentar
