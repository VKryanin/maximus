import styled from "styled-components";
import { scrollBarMixin } from "../../utils/Mixins";

const TableBox = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  max-height: ${(p) => (p.maxHeight ? p.maxHeight : "100%")};
  border-radius: 2px;
  box-shadow: ${(p) =>
    p.noShadow ? "" : "0px 0px 3px 0px rgb(150 150 150 / 70%)"};
  background-color: white;
  overflow: ${(p) => (p.overflow ? p.overflow : "overlay")};
  padding: 10px;
  font-size: 13px;
  line-height: 1.1;

  flex-shrink: ${(p) => (p.shrink ? p.shrink : "")};
  width: ${(p) => (p.width ? p.width : "100%")};
  min-width: ${(p) => (p.minwidth ? p.minwidth : "100%")};
  height: ${(p) =>
    p.newHeight ? `${p.newHeight}px` : p.height ? p.height : "auto"};
  padding: ${(p) => (p.padding ? p.padding : `0`)};
  margin: ${(p) => (p.margin ? p.margin : `0`)};
  align-items: ${(p) => (p.alignItems ? p.alignItems : ``)};
  justify-content: ${(p) => (p.justifyContent ? p.justifyContent : ``)};

  ${scrollBarMixin}
`;

export default TableBox;
