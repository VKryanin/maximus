import styled from 'styled-components';

const TableBodyRowContainer = styled.tr`
  display: grid;
  transition: all 0.05s linear;
  width: ${(p) => p.width ?? '100%'};
  box-sizing: border-box;

  grid-template-columns: ${(p) => (p.columnTemplate ? p.columnTemplate : '')};
  min-height: ${(p) => (p.minHeight ? p.minHeight : '32px')};
  height: ${(p) => (p.height ? p.height : '')};
  margin: ${(p) => (p.margin ? p.margin : 'auto')};
  background-color: ${(p) => (p.backgroundColor ? p.backgroundColor : '#fff')};
  box-shadow: ${(p) => (p.boxShadow ? p.boxShadow : '')};

  grid-template-areas: ${(p) => (p.gridTemplateAreas ? p.gridTemplateAreas : '')};
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  ${(p) => {
    if (p.noAlternateBackground) {
      return ``;
    }
    return `
    &:nth-child(odd) {
      background-color: ${p.oddRowBackgroundColor || 'rgb(169 169 169 / 5%)'};
    }
    `;
  }}

  ${(p) => {
    if (p.selected) return `background-color: rgba(111 197 255 / 25%)!important;`;
    return ``;
  }}

  &:not(:nth-last-child(-n + ${(p) => (p.lastElementCount ? p.lastElementCount : 2)})) {
    border-bottom: 1px solid rgb(227, 227, 227);
  }

  /* & {
    border-bottom: 1px solid rgb(227, 227, 227);
  } */

  &:hover {
    background-color: rgba(111 197 255 / 15%);
    cursor: ${(p) => (p.cursor ? p.cursor : '')};
  }

  & > :not(:last-child):before {
    position: absolute;
    top: 50%;
    right: 0.1px;
    width: 1px;
    height: 1.3em;
    background-color: rgb(227, 227, 227);
    transform: translateY(-50%);
    transition: background-color 0.3s;
    content: '';
  }

  border-top: ${(p) => (p.borderTop ? p.borderTop : '')};
`;

export default TableBodyRowContainer;
