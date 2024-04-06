import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

export const PaginationContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: 100px;
  z-index: 10;
`;

export const AnimatedDot = styled(Animated.View)<AnimatedDotProps>`
  width: ${({ dotSize }) => dotSize}px;
  height: ${({ dotSize }) => dotSize}px;
  border-radius: ${({ dotSize }) => dotSize / 2}px;
  background-color: black;
`;

type AnimatedDotProps = {
  dotSize: number;
};
