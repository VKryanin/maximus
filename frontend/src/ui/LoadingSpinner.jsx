import { memo } from 'react';
import styled from 'styled-components';
import { RotateSpinner } from 'react-spinners-kit';

const LoadingSpinnerContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  transition: opacity 0.1s ease;
  z-index: 500;

  top: ${(p) => (p.top ? p.top : `calc(50% - ${p.size / 2}px)`)};
  left: ${(p) => (p.left ? p.left : `calc(50% - ${p.size / 2}px)`)};
  right: ${(p) => (p.right ? p.right : '')};
  bottom: ${(p) => (p.bottom ? p.bottom : '')};
  padding: ${(p) => (p.padding ? p.padding : '5px')};
  margin: ${(p) => (p.margin ? p.margin : '')};
  position: ${(p) => (p.position ? p.position : 'absolute')};
  opacity: ${(p) => (p.show ? '1' : '0')};
  width: ${(p) => (p.width ? p.width : 'auto')};
  height: ${(p) => (p.height ? p.height : 'auto')};
`;

const LoadingSpinner = ({
  position,
  margin,
  padding,
  show = true,
  size = 45,
  top,
  right,
  left,
  bottom,
  width,
  height,
}) => (
  <LoadingSpinnerContainer
    position={position}
    margin={margin}
    padding={padding}
    show={show}
    size={size}
    top={top}
    right={right}
    left={left}
    bottom={bottom}
    width={width}
    height={height}
  >
    <RotateSpinner color='#3686ff' size={size} />
  </LoadingSpinnerContainer>
);

export default memo(LoadingSpinner);
