import { memo, useCallback } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import Animated, { useAnimatedStyle, useDerivedValue, withTiming } from 'react-native-reanimated';

import { PressableScale } from './PressableScale';

export const TabBarItem = memo(({ onPress, focusedIndex, index, icon }: TabBarItemProps) => {
  const isFocused = useDerivedValue(() => {
    return focusedIndex.value === index;
  }, [index]);

  const rStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(isFocused.value ? 1 : 0.3),
    };
  }, []);

  const getIconByScreenName = useCallback((icon: string) => {
    return (
      <MaterialIcons
        name={icon as any}
        size={25}
        color="white"
      />
    );
  }, []);

  return (
    <Animated.View style={[{ flex: 1 }, rStyle]}>
      <PressableScale onPress={onPress}>{getIconByScreenName(icon)}</PressableScale>
    </Animated.View>
  );
});

type TabBarItemProps = {
  children?: React.ReactNode;
  onPress: () => void;
  focusedIndex: Animated.SharedValue<number>;
  index: number;
  icon: string;
};
