import { Animated } from 'react-native';
import styled, { css } from 'styled-components/native';

import { type DotLoaderProps } from '.';
import { type DotProps } from './Dot';

export const DotLoaderContainer = styled.View`
  width: 70px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const DotContainer = styled(Animated.View)<DotContainerProps>`
  width: 6px;
  height: 6px;
  border-radius: 6px;
  margin-right: ${({ isLast }) => (isLast ? 0 : 3)}px;
  background-color: ${({ theme, color }) => theme.colors[color || 'white']};

  ${({ size }) =>
    size === 'large' &&
    css`
      width: 12px;
      height: 12px;
      border-radius: 12px;
    `}
`;

type DotContainerProps = Pick<DotLoaderProps, 'color' | 'size'> & Pick<DotProps, 'isLast'>;
