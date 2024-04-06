import { useReducer } from 'react';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';

import { ArrowDown } from 'common/svg';
import { Text } from 'common/typography';

import {
  AccordionContainer,
  AccordionItemContainer,
  AccordionItemContent,
  AccordionItemHeader,
} from './styled';

const AccordionRoot = ({ children, style }: AccordionRootProps) => {
  return <AccordionContainer style={style}>{children}</AccordionContainer>;
};

export type AccordionRootProps = {
  children: React.ReactNode;
  style?: any;
};

const AccordionItem = ({ children, title }: AccordionItemProps) => {
  const [show, toggle] = useReducer((open) => !open, false);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: withTiming(`${show ? 180 : 0}deg`) }],
    };
  });

  return (
    <AccordionItemContainer>
      <AccordionItemHeader
        onPress={toggle}
        isOpen={show}
      >
        <Text
          selectable={false}
          color={show ? 'white' : 'white'}
        >
          {title}
        </Text>
        <Animated.View style={animatedStyle}>
          <ArrowDown
            width={24}
            height={24}
            fill="#FFFFFF"
          />
        </Animated.View>
      </AccordionItemHeader>
      {show && <AccordionItemContent>{children}</AccordionItemContent>}
    </AccordionItemContainer>
  );
};

export type AccordionItemProps = {
  title: string;
  children: React.ReactNode;
};

export const Accordion = {
  Root: AccordionRoot,
  Item: AccordionItem,
};
