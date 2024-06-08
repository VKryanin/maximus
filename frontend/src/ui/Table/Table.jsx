import { memo } from 'react';
import styled from 'styled-components';

export const TableContainer = styled.table`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.2s linear;
  line-height: 1.1;

  overflow: ${(p) => (p.forSticky ? 'visible' : 'auto')};

  width: ${(p) => (p.width ? p.width : 'fit-content')};
  max-width: ${(p) => (p.maxWidth ? p.maxWidth : 'max-content')};
  min-width: ${(p) => (p.minWidth ? p.minWidth : '100%')};
  height: ${(p) => (p.height ? p.height : 'auto')};
  max-height: ${(p) => (p.maxHeight ? p.maxHeight : '')};
  padding: ${(p) => (p.padding ? p.padding : '')};
  margin: ${(p) => (p.margin ? p.margin : '0')};
  position: ${(p) => (p.position ? p.position : 'static')};
  top: ${(p) => (p.top ? p.top : '')};
  left: ${(p) => (p.left ? p.left : '')};
  right: ${(p) => (p.right ? p.right : '')};
  bottom: ${(p) => (p.bottom ? p.bottom : '')};

  /* flex-shrink: 0; */
`;

const Table = ({
  children,
  onClick,
  newheigth,
  width,
  margin,
  padding,
  height,
  maxHeight,
  position,
  top,
  left,
  right,
  bottom,
  forSticky,
  maxWidth,
  minWidth,
}) => (

  <TableContainer

    onClick={onClick}
    width={width}
    margin={margin}
    padding={padding}
    height={height || newheigth}
    newheigth={newheigth}
    maxHeight={maxHeight}
    position={position}
    top={top}
    left={left}
    right={right}
    bottom={bottom}
    forSticky={forSticky}
    maxWidth={maxWidth}
    minWidth={minWidth}
  >
    {children}
  </TableContainer>
);

export default memo(Table);
