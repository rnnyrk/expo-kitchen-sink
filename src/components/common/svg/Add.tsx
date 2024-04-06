import Svg, { Circle, Path } from 'react-native-svg';

import theme from 'styles/theme';

import { SvgWrapper } from './styled';

export const Add = ({ width = 20, height = 20, $position = 'static' }: AddProps) => (
  <SvgWrapper $position={$position}>
    <Svg
      width={width}
      height={height}
      viewBox="0 0 397.4 443.4"
    >
      <Circle
        cx={199}
        cy={199}
        r={199}
        fill={theme.colors.primary}
      />
      <Path
        fill="#FFFFFF"
        d="M96 171.1h205.3c12 0 21.8 9.7 21.8 21.8v6c0 12-9.7 21.8-21.8 21.8H96c-12 0-21.8-9.7-21.8-21.8v-6c0-12.1 9.8-21.8 21.8-21.8z"
      />
      <Path
        fill="#FFFFFF"
        d="M223.4 93.1v205.3c0 12-9.7 21.8-21.8 21.8h-6c-12 0-21.8-9.7-21.8-21.8V93.1c0-12 9.7-21.8 21.8-21.8h6c12.1.1 21.8 9.8 21.8 21.8z"
      />
    </Svg>
  </SvgWrapper>
);

type AddProps = {
  width?: number;
  height?: number;
  $position?: 'static' | 'absolute';
};
