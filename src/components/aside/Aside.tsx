import { styled } from "styled-components";


const Ul = styled.ul`
  width: 212px;

`

const A = styled.a`
  text-decoration: none;
`

export default function MenuAside() {
  return (
    <aside>
      <nav>
        <Ul>
          <li>
            <A href="http://" target="_blank" rel="noopener noreferrer">Inicio</A>
          </li>
          <li>
            <A href="http://" target="_blank" rel="noopener noreferrer">Favoritos</A>
          </li>
        </Ul>
      </nav>
    </aside>
  )
}
