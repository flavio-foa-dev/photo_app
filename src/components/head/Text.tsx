import { styled } from "styled-components"
import search from './search.png'

const Container = styled.div`
    position: relative;
    display: inline-block;
`;


const FildInput = styled.input`
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
`

const IconeLupa = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 38px;
    height: 38px;
`;

const CampoTexto = (props:any) => {
    return (
        <Container>
            <FildInput {...props} />
            <IconeLupa src={search} alt="ícone de lupa" />
        </Container>
    )
}

export default CampoTexto