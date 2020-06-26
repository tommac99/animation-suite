import styled from 'styled-components';

export const Space = styled.div<{ height?: number }>`
  width: 100%;
  height: ${({ height }) => (height ? height : 20)}px;
`;

// TODO: add border radius 1/2 of height
export const LineBreak = styled.div<{ height?: number }>`
  width: 100%;
  height: ${({ height }) => (height ? height : 2)}px;
  background: #e7e7e7;
`;
