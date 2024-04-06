import styled from 'styled-components/native';

export const ToggleContainer = styled.View`
  transform: translateX(5px) translateY(-6px);
`;

export const ToggleText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Montserrat[400]};
  font-size: 14px;
  line-height: 14px;
  text-transform: uppercase;
  letter-spacing: -0.1px;
  color: ${({ theme }) => theme.colors.gray};
`;
