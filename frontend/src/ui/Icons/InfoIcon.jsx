import styled from 'styled-components';

const IconContainer = styled.div`
  color: ${(p) => (p.color ? p.color : '#000')};
  line-height: 1;

  & > svg {
    transition: all 0.2s ease;

    width: ${(p) => (p.width ? p.width : '')};
    height: ${(p) => (p.height ? p.height : '')};
  }
`;

const InfoIcon = ({ width = '15px', height = '15px', color }) => (
  <IconContainer width={width} color={color} height={height}>
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
      <g fill='none' stroke='currentColor' strokeLinejoin='round'>
        <circle cx='12' cy='12' r='9' strokeLinecap='round' strokeWidth='2.5' />
        <path strokeWidth='3.75' d='M12 8h.01v.01H12z' />
        <path strokeLinecap='round' strokeWidth='2.5' d='M12 12v4' />
      </g>
    </svg>
  </IconContainer>
);

export default InfoIcon;
