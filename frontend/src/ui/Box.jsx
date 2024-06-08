import styled from 'styled-components';

const Box = styled.div`
  width: ${(p) => (p.width ? p.width : '100%')};
  max-width: ${(p) => (p.maxWidth ? p.maxWidth : '100%')};
  height: ${(p) => (p.height ? p.height : 'auto')};
  max-height: ${(p) => (p.maxHeight ? p.maxHeight : '')};
  min-height: ${(p) => (p.minHeight ? p.minHeight : '')};
  position: ${(p) => (p.position ? p.position : 'static')};
  box-sizing: ${(p) => (p.contentBox ? 'content-box' : 'border-box')};
  display: ${(p) => (p.block ? 'block' : 'flex')};
  flex-direction: ${(p) => (p.column ? 'column' : 'row')};
  flex-flow: ${(p) => (p.flexFlow ? p.flexFlow : '')};
  justify-content: ${(p) => (p.justifycontent ? p.justifycontent : '')};
  align-items: ${(p) => (p.alignitems ? p.alignitems : '')};
  gap: ${(p) => (p.gap ? p.gap : '')};
  row-gap: ${(p) => (p.rowGap ? p.rowGap : '')};
  column-gap: ${(p) => (p.columnGap ? p.columnGap : '')};
  z-index: ${(p) => (p.zIndex ? p.zIndex : `0`)};
  padding: ${(p) => (p.padding ? p.padding : `0`)};
  margin: ${(p) => (p.margin ? p.margin : `0`)};
  background-color: ${(p) => (p.backgroundColor ? p.backgroundColor : 'transparent')};
  box-shadow: ${(p) => (p.boxShadow ? p.boxShadow : 'none')};
  border: ${(p) => (p.border ? p.border : ``)};
  border-radius: ${(p) => (p.borderRadius ? p.borderRadius : ``)};
  cursor: ${(p) => (p.cursor ? p.cursor : ``)};
  overflow: ${(p) => (p.overflow ? p.overflow : ``)};
  position: ${(p) => (p.position ? p.position : ``)};
  top: ${(p) => (p.top ? p.top : '')};
  left: ${(p) => (p.left ? p.left : '')};
  right: ${(p) => (p.right ? p.right : '')};
  bottom: ${(p) => (p.bottom ? p.bottom : '')};
  flex-wrap: ${(p) => (p.flexWrap ? p.flexWrap : '')};
  flex-shrink: ${(p) => (p.flexShrink ? p.flexShrink : '')};
  white-space: ${(p) => (p.whiteSpace ? p.whiteSpace : '')};
  color: ${(p) => (p.color ? p.color : 'inherit')};
  text-align: ${(p) => (p.textAligh ? p.textAligh : '')}
`;

export default Box;
