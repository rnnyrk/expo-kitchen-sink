import Svg, { Circle, Path } from 'react-native-svg';

import theme from 'styles/theme';

import { SvgWrapper } from './styled';

export const Min = ({ width = 20, height = 20, $position = 'static', style }: MinProps) => (
  <SvgWrapper
    $position={$position}
    style={style}
  >
    <Svg
      width={width}
      height={height}
      viewBox="0 0 111.2 111.2"
    >
      <Circle
        cx={55.6}
        cy={55.6}
        r={55.6}
        fill={theme.colors.primary}
      />
      <Path
        d="M82.6 59.2h-54c-2.7 0-4.9-2.2-4.9-4.9s2.2-4.9 4.9-4.9h53.9c2.7 0 4.9 2.2 4.9 4.9.1 2.7-2.1 4.9-4.8 4.9z"
        fill={theme.colors.white}
      />
    </Svg>
  </SvgWrapper>
);

type MinProps = {
  width?: number;
  height?: number;
  $position?: 'static' | 'absolute';
  style?: any;
};
