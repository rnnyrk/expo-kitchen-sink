import styled, { css } from 'styled-components/native';

export const FormDescription = styled.Text<FormDescriptionProps>`
  width: 100%;
  margin: 4px 0 16px;
  font-family: ${({ theme }) => theme.fonts.Montserrat[400]};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray};

  ${({ isError }) =>
    isError &&
    css`
      color: ${({ theme }) => theme.colors.red};
    `}
`;

type FormDescriptionProps = {
  isError?: boolean;
};
