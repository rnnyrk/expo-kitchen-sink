import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export function PressableScale({ children, onPress }: PressableScaleProps) {
  const active = useSharedValue(false);

  const gesture = Gesture.Tap()
    .maxDuration(4000) // Set maximum duration for tap gesture
    .onTouchesDown(() => {
      active.value = true; // Mark as active on touch down
    })
    .onTouchesUp(() => {
      if (onPress != null) runOnJS(onPress)(); // Execute onPress on touch up
    })
    .onFinalize(() => {
      active.value = false; // Reset press state on finalize
    });

  // Create an animated style for scaling effect
  const rAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withTiming(active.value ? 0.92 : 1), // Scale down when active, return to normal otherwise
        },
      ],
    };
  }, []);

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View
        style={[{ flex: 1, justifyContent: 'center', alignItems: 'center' }, rAnimatedStyle]}
      >
        {children}
      </Animated.View>
    </GestureDetector>
  );
}

type PressableScaleProps = {
  children: React.ReactNode;
  onPress?: () => void;
};
