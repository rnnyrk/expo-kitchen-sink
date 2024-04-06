import Animated, { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated';

import {
  AnimatedBadge,
  AnimatedDescription,
  AnimatedTitle,
  OnboardingImage,
  OnboardingPageContainer,
} from './styled';

export function OnboardingPage({
  image,
  title,
  description,
  index,
  currentOffset,
  width,
  height,
}: OnboardingPageProps) {
  // Calculate input range based on page index and width
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];

  const rBadgeStyle = useAnimatedStyle(() => {
    // Calculate rotation and scaling based on current page offset
    // Play with these values to get different effects!!
    const rotateY = interpolate(currentOffset.value, inputRange, [
      Math.PI / 4,
      Math.PI * 2,
      Math.PI / 4,
    ]);
    const scale = interpolate(currentOffset.value, inputRange, [0.2, 1, 0.2]);
    const opacity = interpolate(currentOffset.value, inputRange, [-1, 1, -1], Extrapolate.CLAMP);

    return {
      opacity,
      transform: [
        // {
        //   rotateY: `${rotateY}rad`,
        // },
        {
          scale: scale,
        },
      ],
    };
  }, []);

  const rTextStyle = useAnimatedStyle(() => {
    const opacity = interpolate(currentOffset.value, inputRange, [-1, 1, -1], Extrapolate.CLAMP);
    return {
      opacity,
    };
  }, []);

  return (
    <OnboardingPageContainer
      width={width}
      height={height}
    >
      <AnimatedBadge
        width={width * 0.6}
        borderRadius={width * 0.3}
        style={[rBadgeStyle]}
      >
        <OnboardingImage source={image as string} />
      </AnimatedBadge>

      <AnimatedTitle style={rTextStyle}>{title}</AnimatedTitle>
      <AnimatedDescription style={rTextStyle}>{description}</AnimatedDescription>
    </OnboardingPageContainer>
  );
}

type OnboardingPageProps = {
  image: ReturnType<typeof require>;
  title: string;
  description: string;
  index: number;
  currentOffset: Animated.SharedValue<number>;
  width: number;
  height: number;
};
