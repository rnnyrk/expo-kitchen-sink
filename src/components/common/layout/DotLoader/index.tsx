import type * as i from 'types';

import { Dot } from './Dot';
import { DotLoaderContainer } from './styled';

export const DotLoader = ({ color, size, style }: DotLoaderProps) => {
  return (
    <DotLoaderContainer style={style}>
      <Dot
        delay={0}
        color={color}
        size={size}
      />
      <Dot
        delay={220}
        color={color}
        size={size}
      />
      <Dot
        delay={440}
        color={color}
        size={size}
        isLast
      />
    </DotLoaderContainer>
  );
};

export type DotLoaderProps = {
  color?: i.ColorsFromTheme<'primary' | 'primaryLight' | 'gray' | 'darkGray' | 'white' | 'black'>;
  size?: 'large';
  style?: any;
};
