import Animated from 'react-native-reanimated';
import { EdgeInsets } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

import { type ToastProps } from '.';

export const ToastContainer = styled(Animated.View)<ToastContainerProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding-top: ${({ insets }) => insets.top + 12}px;
  padding-right: 16px;
  padding-bottom: 16px;
  padding-left: 16px;
  background-color: ${({ theme }) => theme.colors.green};

  ${({ variant }) =>
    variant === 'error' &&
    css`
      background-color: ${({ theme }) => theme.colors.red};
    `}
`;

type ToastContainerProps = Pick<ToastProps, 'variant'> & {
  insets: EdgeInsets;
};
