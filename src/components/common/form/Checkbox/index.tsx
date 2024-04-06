import { useEffect, useRef } from 'react';
import { Animated, TouchableWithoutFeedback } from 'react-native';

import theme from 'styles/theme';
import { Check } from 'common/svg';

import { CheckboxBox, CheckboxTouchableContent, CheckContainer, Label } from './styled';

export const Checkbox = ({ isActive, onChange, children }: CheckboxProps) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const animate = (reverse: boolean) => {
    return Animated.timing(animatedValue, {
      toValue: reverse ? 0 : 1,
      duration: 200,
      useNativeDriver: false,
    });
  };

  useEffect(() => {
    if (isActive) animate(false).start();
    else animate(true).start();
  }, [isActive]);

  const interpolatedColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [theme.colors.gray, theme.colors.primary],
  });

  const interpolatedBorderRadius = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [5, 0],
  });

  return (
    <TouchableWithoutFeedback onPress={onChange}>
      <CheckboxTouchableContent>
        <CheckboxBox
          style={{ borderColor: interpolatedColor, borderRadius: interpolatedBorderRadius }}
        >
          <CheckContainer style={{ opacity: animatedValue }}>
            <Check />
          </CheckContainer>
        </CheckboxBox>
        <Label>{children}</Label>
      </CheckboxTouchableContent>
    </TouchableWithoutFeedback>
  );
};

export type CheckboxProps = {
  isActive?: boolean;
  onChange: () => void;
  children: React.ReactNode;
};
