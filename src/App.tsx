import { styled } from "styled-components"
import Head from "./components/head/Head"
import MenuAside from "./components/aside/Aside"

const Div_bg = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`


function App() {


  return (
    <Div_bg>
      <Head />
      <MenuAside/>

      <progress value="70" max="100">70 %</progress>
    </Div_bg>
  )
}

export default App
