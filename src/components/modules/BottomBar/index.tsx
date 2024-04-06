import { useCallback } from 'react';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { StackActions } from '@react-navigation/native';
import { usePathname, useRouter } from 'expo-router';
import { Dimensions, Platform } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { BOTTOM_BAR_HEIGHT, useSafeBottomBarHeight } from 'hooks/useSafeBottomBarHeight';

import { TabBarItem } from './components/TabBarItem';
import { BottomBarContainer, StyledBlurView, StyledGradient } from './styled';

export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const IS_SMALL_DEVICE = SCREEN_HEIGHT < 700;

export const LINEAR_GRADIENT_COLORS = [
  'rgba(255,255,255,0)',
  'rgba(0,0,0,0.1)',
  'rgba(0,0,0,0.5)',
  'rgba(0,0,0,0.8)',
];

const screens = [
  {
    name: 'Home',
    icon: 'map',
    url: '/',
  },
  {
    name: 'Favorites',
    icon: 'star',
    url: '/dashboard/favorites/',
  },
  {
    name: 'Settings',
    icon: 'settings',
    url: '/dashboard/settings/',
  },
];

export function BottomTabBar({ state, navigation }: BottomTabBarProps) {
  const router = useRouter();
  const path = usePathname();
  const { bottom: safeBottom } = useSafeAreaInsets();
  const bottomBarSafeHeight = useSafeBottomBarHeight();

  const focusedIndex = useSharedValue(state.index);
  const currentIndex = state.index;

  const onTapIcon = useCallback(
    (selectedIndex: number) => {
      const nextScreen = screens[selectedIndex];
      const isChangingRoute = currentIndex !== selectedIndex;

      // Get the number of screens to pop if the selected screen is already focused
      const popsAmount = navigation.getState().routes.find((item) => {
        return item.name === nextScreen.name;
      })?.state?.index;

      // If not changing route and there are screens to pop, perform a pop action
      if (!isChangingRoute && popsAmount !== 0 && Boolean(popsAmount)) {
        const popAction = StackActions.pop(popsAmount);

        navigation.dispatch(popAction);
        return;
      }

      router.push(nextScreen.url as any);
      // navigation.navigate(nextScreen.url);
      return;
    },
    [currentIndex, navigation],
  );

  return (
    <>
      {path === '/' && (
        <StyledGradient
          pointerEvents="none"
          colors={LINEAR_GRADIENT_COLORS}
          height={bottomBarSafeHeight}
        />
      )}

      <BottomBarContainer
        bottom={safeBottom + 15}
        height={BOTTOM_BAR_HEIGHT}
      >
        <StyledBlurView
          intensity={Platform.OS === 'android' ? 20 : 40}
          path={path}
        >
          {screens.map((item, index) => {
            return (
              <TabBarItem
                key={`${item.name}_${index}`}
                icon={item.icon}
                focusedIndex={focusedIndex}
                index={index}
                onPress={() => {
                  onTapIcon(index);
                  focusedIndex.value = index;
                }}
              />
            );
          })}
        </StyledBlurView>
      </BottomBarContainer>
    </>
  );
}
