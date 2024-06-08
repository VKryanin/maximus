import { memo } from 'react';
import styled from 'styled-components';

const TableFooterContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  transition: all 0.2s linear;
  width: 100%;
  min-height: 24px;

  ${(p) =>
    p.noBox
      ? ''
      : `
      border-radius: 2px;
      box-shadow: 0px 0px 3px 0px rgb(150 150 150 / 70%);
      background-color: white;
    `}

  /* & > tr {
    width: 100%;
    border-top: 1px solid rgb(227, 227, 227);
    border-bottom: 1px solid rgb(227, 227, 227);
    padding: 0 0 0 20px;
  } */

  /* box-shadow: 0px 0px 2px 2px rgb(150 150 150 / 10%); */

  margin: ${(p) => (p.margin ? p.margin : '0')};
  padding: ${(p) => (p.padding ? p.padding : '3px 20px 3px 20px')};
`;

const TableFooter = ({ children, margin, padding, noBox }) => (
  <TableFooterContainer margin={margin} padding={padding} noBox={noBox}>
    {children}
  </TableFooterContainer>
);

export default memo(TableFooter);