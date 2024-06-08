import styled from 'styled-components';
import { Popover } from 'antd';

const TableBodyRowCellContainer = styled.td`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 13px;
  color: ${(p) => (p.color ? p.color : '#4b4b4b')};
  position: ${(p) => (p.sticky ? 'sticky' : 'relative')};
  left: ${(p) => (p.left ? p.left : '')};
  z-index: ${(p) => (p.sticky ? 16 : '')};

  overflow: hidden;
  width: 100%;
  transition: all 0.2s linear;

  grid-area: ${({ gridArea }) => gridArea ?? ''};
  border-bottom: ${({ borderBottom }) => borderBottom ?? ''};

  justify-content: ${(p) => (p.justifyContent ? p.justifyContent : 'center')};
  padding: ${(p) => (p.padding ? p.padding : '0')};
  cursor: ${(p) => (p.cursor ? p.cursor : 'inherit')};
  text-shadow: ${(p) => (p.textShadow ? p.textShadow : '')};
  color: ${(p) => (p.linkStyle ? '#1890ff' : '')};
  color: ${(p) => (p.fontColor ? p.fontColor : '')};
  box-shadow: ${(p) => (p.dangerShadow ? 'inset 0px 0px 3px 1px rgba(255 0 0 / 40%)' : '')};
  background-color: ${(p) => (p.backgroundColor ? p.backgroundColor : 'transparent')};
  ${(p) =>
    p.dangerShadow
      ? `
    &:before {
    display: none;
  }
  `
      : ''}

  ${(p) =>
    p.iconHoverUpscale
      ? `
          & svg {
            transition: all 0.2s ease;
          }

          &:hover svg {
            transform: scale(${p.iconHoverUpscale});
          }
        `
      : ''}

  &:hover {
    color: ${(p) => (p.linkStyle ? '#40a9ff' : '')};
    ${(p) => (p.hover ? 'box-shadow: inset 0px 0px 3px 1px rgba(111 197 255 / 40%);' : '')}
  }
  @media screen and (max-width: 480px) {
    min-height: ${(p) => (p.breakWord ? 'fit-content' : 'auto')};
  }
`;

const TextCell = styled.span`
  padding: ${(p) => (p.textCellPadding ? p.textCellPadding : '0 8px')};
  white-space: ${(p) => (p.breakWord ? 'normal' : 'nowrap')};
  word-break: ${(p) => (p.breakWord ? 'break-word' : 'normal')};
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${(p) => (p.color ? p.color : '#4b4b4b')};

  width: ${(p) => (p.width ? p.width : '')};
  text-align: ${(p) => (p.textAlign ? p.textAlign : '')};
  opacity: ${(p) => (p.textOpacity ? p.textOpacity : '')};

  /* &:after {
    content: attr(title);
    z-index: 999;
    position: absolute;
    bottom: 10px;
    left: 10px;
    width: 195px;
    height: 50px;
    padding: 7px 15px 10px 15px;
    font-size: 13px;
    font-weight: 400;
    color: #fff;
    background-color: #444;
    border-radius: 3px;
  } */
  @media screen and (max-width: 480px) {
    padding: 0 4px;
  }
`;

const BoxCell = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  gap: ${(p) => (p.boxCellGap ? p.boxCellGap : '')};
  justify-content: ${(p) => (p.justifyContent ? p.justifyContent : 'center')};
  text-align: ${(p) => (p.textAlign ? p.textAlign : 'center')};
  white-space: ${(p) => (p.whiteSpace ? p.whiteSpace : '')};
  padding: ${(p) => (p.padding ? p.padding : '')};
`;

const DoubleLinkCell = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: repeat(2, fit-content(100%));
  padding: 0 8px;
  gap: 10px;
  text-decoration: none;
  transition: color 0.2s linear;

  & > :first-child {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    /* color: inherit; */
    color: #0202a8;
  }

  & > :first-child:hover {
    color: red;
    cursor: pointer;
  }

  & > :last-child {
    color: #0202a8;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  & > :last-child:hover {
    color: red;
    cursor: pointer;
  }
`;

const DoubleItemCell = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: repeat(2, fit-content(100%));
  padding: 0 8px;
  gap: 10px;
  text-decoration: none;
  transition: color 0.2s linear;

  & > :first-child {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: inherit;
  }

  & > :last-child {
    color: #0202a8;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const StyledPopover = styled(Popover)`
  width: 100%;
  text-align: ${(p) => (p.popoverAlign ? p.popoverAlign : 'center')};
  white-space: nowrap;
  word-break: normal;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export {
  TableBodyRowCellContainer,
  TextCell,
  BoxCell,
  DoubleLinkCell,
  DoubleItemCell,
  StyledPopover,
};
