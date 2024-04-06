import { TouchableOpacityProps } from 'react-native';
import styled, { css } from 'styled-components/native';

export const StyledInput = styled.TextInput<InputProps>`
  width: 100%;
  min-width: 240px;
  padding: 16px;
  font-family: ${({ theme }) => theme.fonts.Montserrat[400]};
  font-size: 20px;
  line-height: 26px;
  color: ${({ theme }) => theme.colors.black};

  ${({ hasError }) =>
    hasError &&
    css`
      border-color: ${({ theme }) => theme.colors.red};
    `}

  ${({ multiline }) =>
    multiline &&
    css`
      height: auto;
      min-height: 72px;
    `}
`;

export type InputProps = {
  hasError?: boolean;
  multiline?: boolean;
};

export const InputIcon = styled.TouchableOpacity<IconWrapperProps>`
  position: absolute;
  top: 50%;
  margin-top: -12px;
  right: 12px;
  justify-content: center;
  align-items: center;

  ${({ readOnly }) =>
    readOnly &&
    css`
      opacity: 0.4;
    `}
`;

type IconWrapperProps = TouchableOpacityProps & {
  readOnly?: boolean;
};

export const InputWrapper = styled.View`
  position: relative;
  width: 100%;
`;
