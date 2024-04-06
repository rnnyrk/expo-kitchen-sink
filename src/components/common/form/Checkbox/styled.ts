import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Montserrat[400]};
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.black};
`;

export const CheckboxBox = styled(Animated.View)`
  width: 22px;
  height: 22px;
  border-width: 1px;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

export const CheckContainer = styled(Animated.View)`
  width: 13px;
  height: 10px;
`;

export const CheckboxTouchableContent = styled.View`
  flex-direction: row;
`;
