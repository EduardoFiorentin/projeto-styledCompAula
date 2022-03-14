import React , {useState} from "react";
import {GlobalStyle} from './Components/GlobalStyle'

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";

import {ThemeProvider} from 'styled-components'
import {TemaClaro, TemaEscuro} from  './Components/UI/temas'
import { BtnTema } from "./Components/UI";
import SwitcherTema from "./Components/SwitcherTema";

function App() {
  const [tema, setTema] = useState(true)

  const toggleTema = () => {
    setTema((tema) => !tema)
  }

  return (
      <ThemeProvider theme={tema ? TemaClaro : TemaEscuro}>
        <GlobalStyle/>
          <BtnTema onClick={toggleTema}>
            <SwitcherTema tema={tema}/>
          </BtnTema>
          <Cabecalho />
        <Container />
      </ThemeProvider>
  );
}

export default App;