import { useMemo } from 'react';
import { useWindowDimensions } from 'react-native';
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';

import { OnboardingPage } from './components/OnboardingPage';
import { PaginationDots } from './components/Pagination';
import { OnboardingBg } from './styled';

const data = [
  {
    title: 'Count activities',
    description: 'Every time you eat fries, take a poo or anything else, count it!',
    color: '#265D9E',
    // image: require('../../../assets/images/onboarding/02.jpg'),
  },
  {
    title: 'Track habits',
    description: 'Dialy, weekly or monthly habits, track it!',
    color: '#4E8DC5',
    // image: require('../../../assets/images/onboarding/01.jpg'),
  },
  {
    title: 'Privacy first',
    description: 'Your data is yours, everything local, we do not share it with anyone.',
    color: '#7BB2E9',
    // image: require('../../../assets/images/onboarding/03.jpg'),
  },
  {
    title: 'Start now',
    description: 'Create your first counter or habit tracker.',
    color: '#A1CAE8',
    // image: require('../../../assets/images/onboarding/04.jpg'),
  },
];

export function Onboarding() {
  const { width, height } = useWindowDimensions();

  // Shared value to track the current scroll offset
  const currentOffset = useSharedValue(0);
  const listRef = useAnimatedRef<Animated.FlatList<ColorListItemType>>();

  // Calculating the scroll progress based on the window width
  const progress = useDerivedValue(() => {
    return currentOffset.value / width;
  }, [width]);

  // Creating arrays of indexes and colors from the data
  const indexes = useMemo(() => data.map((_, i) => i), [data]);
  const colors = useMemo(() => data.map(({ color }) => color), [data]);

  // Darkening the colors for gradient effect
  // const darkenColors = useMemo(() => {
  //   return data.map(({ color }) => {
  //     return Color(color).darken(0.8).hex();
  //   });
  // }, [data]);

  // Handler to update currentOffset on scroll
  const onScroll = useAnimatedScrollHandler({
    onScroll: ({ contentOffset: { x } }) => {
      currentOffset.value = x;
    },
  });

  const bgStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: colors[progress.value],
    };
  }, [progress.value]);

  return (
    <>
      <Animated.FlatList<ColorListItemType>
        ref={listRef}
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <OnboardingPage
            image={item.image}
            title={item.title}
            description={item.description}
            index={index}
            currentOffset={currentOffset}
            width={width}
            height={height}
          />
        )}
        onScroll={onScroll}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        horizontal
        pagingEnabled
        style={{ flex: 1 }}
      />

      <PaginationDots
        progress={progress}
        count={data.length}
        onDotPress={(index) => {
          if (!listRef.current) return;
          (listRef.current as any).scrollToOffset({
            offset: index * width,
            animated: true,
          });
        }}
      />

      <OnboardingBg style={bgStyle} />
    </>
  );
}

type ColorListItemType = {
  title: string;
  description: string;
  color: string;
  image?: ReturnType<typeof require>;
};
