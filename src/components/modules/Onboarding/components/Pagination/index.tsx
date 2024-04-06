import type Animated from 'react-native-reanimated';
import { useDerivedValue } from 'react-native-reanimated';

import { Dot } from './Dot';
import { PaginationContainer } from './styled';

export function PaginationDots({ count, progress, onDotPress, reversed }: PaginationDotsProps) {
  // Calculate the effective progress based on the 'reversed' prop.
  const effectiveProgress = useDerivedValue(() => {
    return reversed ? count - 1 - progress.value : progress.value;
  }, [reversed, count]);

  return (
    <PaginationContainer>
      {Array(count)
        .fill(0)
        .map((_, index) => (
          <Dot
            key={index}
            count={count}
            index={index}
            progress={effectiveProgress}
            onPress={onDotPress}
          />
        ))}
    </PaginationContainer>
  );
}

export type PaginationDotsProps = {
  count: number;
  progress: Animated.SharedValue<number>;
  onDotPress?: (index: number) => void;
  reversed?: boolean;
};
