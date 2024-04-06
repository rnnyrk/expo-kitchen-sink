import { Image } from 'expo-image';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

export const OnboardingPageContainer = styled.View<OnboardingPageContainerProps>`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;

type OnboardingPageContainerProps = {
  width: number;
  height: number;
};

export const AnimatedBadge = styled(Animated.View)<AnimatedBadgeProps>`
  width: ${({ width }) => width}px;
  border-radius: ${({ borderRadius }) => borderRadius}px;
  aspect-ratio: 1;
  background-color: white;
  overflow: hidden;
  padding: 10px;
`;

type AnimatedBadgeProps = {
  width: number;
  borderRadius: number;
};

export const OnboardingImage = styled(Image)`
  flex: 1;
  border-radius: 400px;
`;

export const AnimatedTitle = styled(Animated.Text)`
  font-size: 36px;
  font-weight: bold;
  color: black;
  margin-top: 50px;
  margin-right: 24px;
  margin-bottom: 16px;
  margin-left: 24px;
  text-transform: uppercase;
  text-align: center;
`;

export const AnimatedDescription = styled(Animated.Text)`
  font-size: 18px;
  color: black;
  text-align: center;
  margin-right: 16px;
  margin-left: 16px;
`;
