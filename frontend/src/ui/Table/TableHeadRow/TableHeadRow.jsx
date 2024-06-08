import { memo } from 'react';
import styled from 'styled-components';

export const TableHeadRowContainer = styled.tr`
  width: ${(p) => p.width ?? '100%'};
  transition: all 0.2s ease-in;
  display: grid;
  border-bottom: 1px solid rgb(227, 227, 227);
  border-radius: ${(p) => (p.borderRadius ? p.borderRadius : '2px 2px 0 0')};

  border-top: ${(p) => (p.borderTop ? '1px solid rgb(227, 227, 227)' : '')};
  min-height: ${(p) => (p.minHeight ? p.minHeight : '32px')};
  /* background-color: ${(p) => (p.backgroundColor ? p.backgroundColor : '#dad8d8')}; */
  background-color: ${(p) => (p.backgroundColor ? p.backgroundColor : 'rgb(169 169 169 / 15%)')};
  grid-template-columns: ${(p) => (p.columnTemplate ? p.columnTemplate : '')};
  grid-template-areas: ${(p) => (p.gridTemplateAreas ? p.gridTemplateAreas : '')};
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  /* & th:not(:last-child) {
    border-right: 1px solid #f1f1f1;
  } */

  & th:not(:last-child):before {
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
`;

const TableHeadRow = ({
  children,
  onClick,
  columnTemplate,
  backgroundColor,
  minHeight,
  borderTop,
  borderRadius,
  gridTemplateAreas,
  width,
}) => (
  <TableHeadRowContainer
    onClick={onClick}
    columnTemplate={columnTemplate}
    backgroundColor={backgroundColor}
    minHeight={minHeight}
    borderTop={borderTop}
    borderRadius={borderRadius}
    gridTemplateAreas={gridTemplateAreas}
    width={width}
  >
    {children}
  </TableHeadRowContainer>
);

export default memo(TableHeadRow);
