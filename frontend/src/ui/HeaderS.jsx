import styled from 'styled-components';

const HeaderS = styled.header`
  width: ${(p) => (p.width ? p.width : '100%')};
  max-width: ${(p) => (p.maxWidth ? p.maxWidth : '100%')};
  box-sizing: ${(p) => (p.contentBox ? 'content-box' : 'border-box')};
  display: ${(p) => (p.block ? 'block' : 'flex')};
  flex-direction: ${(p) => (p.column ? 'column' : 'row')};
  flex-flow: ${(p) => (p.flexFlow ? p.flexFlow : '')};
  justify-content: ${(p) => (p.justifyContent ? p.justifyContent : '')};
  align-items: ${(p) => (p.alignItems ? p.alignItems : '')};
  margin: ${(p) => (p.margin ? p.margin : `0`)};
`

export default HeaderS;