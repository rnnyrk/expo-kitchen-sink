import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export function PressableScale({ children, onPress }: PressableScaleProps) {
  const active = useSharedValue(false);

  // Gesture configuration to handle tap events
  const gesture = Gesture.Tap()
    .maxDuration(4000) // Maximum duration for the tap gesture
    .onTouchesDown(() => {
      // Action on touch down
      active.value = true;
    })
    .onTouchesUp(() => {
      // Action on touch up
      if (onPress != null) runOnJS(onPress)(); // Execute onPress if provided
    })
    .onFinalize(() => {
      // Final actions when touch is released
      active.value = false;
    });

  const rAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withTiming(active.value ? 0.95 : 1), // Scale down to 0.95 when pressed, scale back to 1 when released
        },
      ],
    };
  }, []);

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[{ paddingHorizontal: 5 }, rAnimatedStyle]}>{children}</Animated.View>
    </GestureDetector>
  );
}

type PressableScaleProps = {
  children: React.ReactNode;
  onPress?: () => void;
  enabled?: boolean;
};
