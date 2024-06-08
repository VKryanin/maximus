import { memo, forwardRef } from 'react';
import styled from 'styled-components';
import { scrollBarMixin } from '../../../utils/Mixins';

export const TableBodyContainer = styled.tbody`
  display: flex;
  flex-direction: column;
  align-items: ${(p) => (p.alignItems ? p.alignItems : 'center')};
  transition: all 0.2s linear;
  width: 100%;
  /* width: fit-content; */
  overflow: ${(p) => (p.forSticky ? 'visible' : 'auto')};

  scrollbar-gutter: ${(p) => (p.scrollbarGutter ? p.scrollbarGutter : 'stable')};
  height: ${(p) => (p.height ? p.height : 'auto')};
  max-height: ${(p) => (p.maxHeight ? p.maxHeight : '')};
  margin: ${(p) => (p.margin ? p.margin : '0')};
  padding: ${(p) => (p.padding ? p.padding : '0 0 0 3px')};

  /* flex-shrink: 0; */

  /* & > :nth-child(odd) > tr {
    background-color: rgb(169 169 169 / 5%);
  } */

  ${scrollBarMixin}
`;

const TableBody = forwardRef(
  (
    {
      children,
      height,
      maxHeight,
      margin,
      padding,
      boxShadow,
      scrollbarGutter,
      forSticky,
      alignItems,
    },
    ref
  ) => (
    <TableBodyContainer
      height={height}
      maxHeight={maxHeight}
      margin={margin}
      padding={padding}
      boxShadow={boxShadow}
      scrollbarGutter={scrollbarGutter}
      forSticky={forSticky}
      alignItems={alignItems}
      ref={ref}
      orSticky
    >
      {children}
    </TableBodyContainer>
  )
);

export default memo(TableBody);
