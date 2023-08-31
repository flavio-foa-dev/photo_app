import { styled } from "styled-components"
import CampoTexto from "./Text"

const Header = styled.header`
  padding: 60px;
  display: flex;
  justify-content: space-between;
  img {
    max-width: 212px;
  }
`

export default function Head() {
  return (
    <Header>
      <img src="./imagens/logo.png" alt="logo" />
      <CampoTexto/>
    </Header>
  )
}
