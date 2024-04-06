import { Animated } from 'react-native';
import styled, { css } from 'styled-components/native';

export const FormFieldWrapper = styled.Pressable<FormFieldWrapperProps>`
  margin: 20px 0;
  width: 100%;

  ${({ marginBottom }) =>
    marginBottom &&
    css`
      margin-bottom: ${marginBottom};
    `};

  ${({ marginTop }) =>
    marginTop &&
    css`
      margin-top: ${marginTop};
    `};
`;

type FormFieldWrapperProps = {
  marginBottom?: string;
  marginTop?: string;
};

export const FieldWrapper = styled(Animated.View)`
  width: 100%;
  border-width: 3px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const FormFieldDescription = styled.Text<FormFieldDescriptionProps>`
  width: 100%;
  margin-top: 8px;
  font-size: 14px;

  ${({ isError }) =>
    isError &&
    css`
      color: ${({ theme }) => theme.colors.red};
    `}
`;

type FormFieldDescriptionProps = {
  isError?: boolean;
};

export const Label = styled(Animated.Text)`
  width: 100%;
  position: absolute;
  top: 30px;
  left: 16px;
  font-family: ${({ theme }) => theme.fonts.Montserrat[400]};
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;
  letter-spacing: 1.6px;
  color: ${({ theme }) => theme.colors.gray};
`;

export const InputWrapper = styled.View`
  width: 100%;
`;
