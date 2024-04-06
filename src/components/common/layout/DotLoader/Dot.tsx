import { Animated, Easing } from 'react-native';

import { type DotLoaderProps } from '.';
import { DotContainer } from './styled';

export const Dot = ({ color, delay, isLast, size }: DotProps) => {
  const opacityValue = new Animated.Value(0);

  Animated.loop(
    Animated.timing(opacityValue, {
      toValue: 100,
      duration: 1400,
      delay,
      easing: Easing.ease,
      useNativeDriver: true,
    }),
  ).start();

  const opacity = opacityValue.interpolate({
    inputRange: [0, 50, 100],
    outputRange: [0.0, 1.0, 0.0],
  });

  return (
    <DotContainer
      style={{ opacity }}
      color={color}
      isLast={isLast}
      size={size}
    />
  );
};

export type DotProps = Pick<DotLoaderProps, 'color' | 'size'> & {
  delay: number;
  isLast?: boolean;
};
