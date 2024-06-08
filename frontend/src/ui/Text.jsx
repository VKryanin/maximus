import styled from 'styled-components';
import { Tooltip } from 'antd';

export const TextContainer = styled.span`
  font-family: 'Roboto', sans-serif;
  max-width: 100%;

  text-align: ${(p) => (p.textAlign ? p.textAlign : '')};
  white-space: ${(p) => (p.wordWrap ? 'wrap' : 'nowrap')};
  font-style: ${(p) => (p.fontStyle ? p.fontStyle : '')};
  font-weight: ${(p) => (p.fontWeight ? p.fontWeight : '400')};
  font-size: ${(p) => (p.fontSize ? p.fontSize : '13px')};
  color: ${(p) => (p.color ? p.color : '')};
  line-height: ${(p) => (p.lineHeight ? p.lineHeight : '1.1')};
  z-index: ${(p) => (p.zIndex ? p.zIndex : '0')};
  padding: ${(p) => (p.padding ? p.padding : '0')};
  margin: ${(p) => (p.margin ? p.margin : '0')};
  display: ${(p) => (p.flex ? 'flex' : '')};
  flex-direction: ${(p) => (p.column ? 'column' : 'row')};
  justify-content: ${(p) => (p.justifyContent ? p.justifyContent : '')};
  align-items: ${(p) => (p.alignItems ? p.alignItems : '')};
  position: ${(p) => (p.position ? p.position : '')};
  top: ${(p) => (p.top ? p.top : '')};
  left: ${(p) => (p.left ? p.left : '')};
  right: ${(p) => (p.right ? p.right : '')};
  bottom: ${(p) => (p.bottom ? p.bottom : '')};
  cursor: ${(p) => (p.cursor ? p.cursor : '')};
  width: ${(p) => (p.width ? p.width : '')};
  height: ${(p) => (p.height ? p.height : '')};

  ${(p) =>
    p.ellipsis
      ? `
    overflow: hidden;
    text-overflow: ellipsis;
  `
      : ''}
`;

const Text = ({
  title,
  children,
  mouseEnterDelay = 0.5,
  mouseLeaveDelay = 0,
  textAlign,
  wordWrap,
  fontStyle,
  fontWeight,
  fontSize,
  color,
  lineHeight,
  zIndex,
  padding,
  margin,
  flex,
  column,
  justifyContent,
  alignItems,
  position,
  top,
  right,
  left,
  bottom,
  cursor,
  ellipsis,
  dangerouslySetInnerHTML,
  width,
  height,
}) => {
  if (title)
    return (
      <Tooltip title={title} mouseEnterDelay={mouseEnterDelay} mouseLeaveDelay={mouseLeaveDelay}>
        <TextContainer
          textAlign={textAlign}
          wordWrap={wordWrap}
          fontStyle={fontStyle}
          fontWeight={fontWeight}
          fontSize={fontSize}
          color={color}
          lineHeight={lineHeight}
          zIndex={zIndex}
          padding={padding}
          margin={margin}
          flex={flex}
          column={column}
          justifyContent={justifyContent}
          alignItems={alignItems}
          position={position}
          top={top}
          right={right}
          left={left}
          bottom={bottom}
          cursor={cursor}
          ellipsis={ellipsis}
          dangerouslySetInnerHTML={dangerouslySetInnerHTML}
          width={width}
          height={height}
        >
          {children}
        </TextContainer>
      </Tooltip>
    );

  return (
    <TextContainer
      textAlign={textAlign}
      wordWrap={wordWrap}
      fontStyle={fontStyle}
      fontWeight={fontWeight}
      fontSize={fontSize}
      color={color}
      lineHeight={lineHeight}
      zIndex={zIndex}
      padding={padding}
      margin={margin}
      flex={flex}
      column={column}
      justifyContent={justifyContent}
      alignItems={alignItems}
      position={position}
      top={top}
      right={right}
      left={left}
      bottom={bottom}
      cursor={cursor}
      ellipsis={ellipsis}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      width={width}
      height={height}
    >
      {children}
    </TextContainer>
  );
};

export default Text;
