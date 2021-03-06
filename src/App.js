import React, { useContext } from "react";
import "./style.css";
import Blog from "./components/Blog";
import { ContextoTema } from "./contextos/contextoTema";
import styled from "styled-components";
import Controles from './components/Controles'
const App = () => {
  const { propiedades } = useContext(ContextoTema);
  const tema = propiedades.tema;
  console.log(tema);
  return (
    <Main tema={tema}>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Controles/>
      <Blog />
    </Main>
  );
};
export default App;
const Main = styled.main`
  font-size: ${props => (props.tema ? props.tema.fuente + "px" : "16px")};
  text-align: ${props => (props.tema ? props.tema.alineado : "right")};
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;
