import { memo } from 'react';
import styled from 'styled-components';

const TableHeadContainer = styled.thead`
  display: flex;
  position: -webkit-sticky;
  position: sticky;
  flex-direction: column;
  align-items: center;
  transition: all 0.2s linear;
  width: ${(p) => (p.fitwidth ? 'fit-content' : '100%')};

  /* box-shadow: ${(p) =>
    p.boxShadow ? p.boxShadow : '0px 0px 2px 2px rgb(150 150 150 / 10%)'}; */
  box-shadow: ${(p) => (p.boxShadow ? p.boxShadow : '')};
  padding: ${(p) => (p.padding ? p.padding : '0 6px 0 3px')};
  background: ${(p) => (p.orsticky ? '#f2f2f2' : 'white')};
  top: 0;
  z-index: ${(p) => (p.forsticky ? 17 : 1)}; ;
`;

const TableHead = ({ children, onClick, boxShadow, padding, forsticky, fitWidth }) => (
  <TableHeadContainer
    onClick={onClick}
    boxShadow={boxShadow}
    padding={padding}
    forsticky={forsticky}
    fitwidth={fitWidth}
  >
    {children}
  </TableHeadContainer>
);

export default memo(TableHead);
