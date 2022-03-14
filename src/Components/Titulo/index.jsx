import styled from 'styled-components'

const Titulo = styled.h1`
  color: ${(props)=>{return props.theme.text}};
  padding: 25px 0;
`

export default Titulo;
