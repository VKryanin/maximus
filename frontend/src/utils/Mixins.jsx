import { css } from 'styled-components';

const scrollBarMixin = css`
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    min-height: 50px;
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
  }

  &::-webkit-scrollbar-thumb:hover {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.4);
  }
`;

const scrollBarMixinSlim = css`
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  /* &:hover::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  } */

  &::-webkit-scrollbar-thumb {
    min-height: 50px;
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
    border: 2px solid transparent;
    background-clip: padding-box;
  }

  &::-webkit-scrollbar-thumb:hover {
    transition: all 0.5s linear;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.4);
    border: 0;
  }
`;

export { scrollBarMixin, scrollBarMixinSlim };
