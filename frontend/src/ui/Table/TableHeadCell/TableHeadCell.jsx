import { memo } from 'react';
import styled from 'styled-components';
import { Tooltip } from 'antd';
import InfoIcon from '../../Icons/InfoIcon'

const TableHeadCellContainer = styled.th`
  padding: ${(p) => (p.padding ? p.padding : '0')};
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: ${(p) => (p.justifycontent ? p.justifycontent : 'center')};
  text-align: center;
  font-size: 13px;
  cursor: default;
  position: ${(p) => (p.sticky ? 'sticky' : 'relative')};
  left: ${(p) => (p.left ? p.left : '')};
  top: ${(p) => (p.top ? p.top : '')};
  z-index: ${(p) => (p.sticky ? 16 : 10)};
  background: ${(p) => (p.sticky ? '#f2f2f2' : '')};

  grid-area: ${(p) => p.gridArea || ''};

  font-weight: ${(p) => (p.fontWeight ? p.fontWeight : '500')};
  white-space: ${(p) => p.whiteSpace ?? 'inherit'};
  color: ${(p) => (p.color ? p.color : '')};
  box-shadow: ${(p) => (p.boxShadow ? p.boxShadow : '')};
  box-shadow: ${(p) => (p.dangerShadow ? 'inset 0px 0px 3px 1px rgba(255 0 0 / 40%)' : '')};

  ${(p) =>
    p.dangerShadow
      ? `
    &:before {
    display: none;
  }
  `
      : ''}

  @media screen and (max-width: 550px) {
    font-size: 10px;
  }
`;

export const InfoIconBox = styled.div`
  position: absolute;
  top: ${(p) => (p.infoPosTop ? p.infoPosTop : '1px')};
  right: ${(p) => (p.infoPosRight ? p.infoPosRight : '3px')};

  opacity: 0.4;

  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

const TableHeadCell = ({
  children,
  onClick,
  color,
  fontWeight,
  dangerShadow,
  info,
  infoPosTop,
  infoPosRight,
  justifycontent,
  borderRight,
  borderLeft,
  sticky,
  left,
  top,
  gridArea,
  padding,
  whiteSpace,
}) => (
  <TableHeadCellContainer
    color={color}
    fontWeight={fontWeight}
    onClick={onClick}
    dangerShadow={dangerShadow}
    justifycontent={justifycontent}
    borderRight={borderRight}
    borderLeft={borderLeft}
    sticky={sticky}
    left={left}
    top={top}
    gridArea={gridArea}
    padding={padding}
    whiteSpace={whiteSpace}
  >
    {info && (
      <Tooltip title={info} mouseLeaveDelay={0.1} mouseEnterDelay={1}>
        <InfoIconBox infoPosTop={infoPosTop} infoPosRight={infoPosRight}>
          <InfoIcon />
        </InfoIconBox>
      </Tooltip>
    )}

    {children}
  </TableHeadCellContainer>
);

export default memo(TableHeadCell);
