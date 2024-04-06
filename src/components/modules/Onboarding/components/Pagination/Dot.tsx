import Animated, { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated';

import { PressableScale } from '../PressableScale';
import { AnimatedDot } from './styled';

const DOT_SIZE = 7;
const OPACITY_THRESHOLD = 0.7;
const ENABLED_OPACITY = 0.6;
const DISABLED_OPACITY = 0.2;

export function Dot({ count, index, progress, onPress }: DotProps) {
  const animatedDotStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      progress.value,
      [index - OPACITY_THRESHOLD, index, index + OPACITY_THRESHOLD],
      [DISABLED_OPACITY, ENABLED_OPACITY, DISABLED_OPACITY],
      {
        extrapolateLeft: Extrapolate.CLAMP,
        extrapolateRight: Extrapolate.CLAMP,
      },
    );

    return {
      opacity,
    };
  });

  return (
    <PressableScale onPress={() => onPress?.(index)}>
      <AnimatedDot
        style={animatedDotStyle}
        dotSize={DOT_SIZE}
      />
    </PressableScale>
  );
}

type DotProps = {
  count: number;
  index: number;
  progress: Animated.SharedValue<number>;
  onPress?: (index: number) => void;
};
