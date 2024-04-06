import Svg, { Path } from 'react-native-svg';

import theme from 'styles/theme';

import { SvgWrapper } from './styled';

export const Refresh = ({
  fill = theme.colors.darkGray,
  width = 32,
  height = 32,
  $position = 'static',
  style,
}: RefreshProps) => (
  <SvgWrapper
    $position={$position}
    style={style}
  >
    <Svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
    >
      <Path
        d="M9 1.5a7.504 7.504 0 0 0-5.222 2.118V1.512H2.732v4.05h4.05V4.516H4.359A6.43 6.43 0 0 1 9 2.546 6.462 6.462 0 0 1 15.455 9 6.462 6.462 0 0 1 9 15.454 6.462 6.462 0 0 1 2.74 7.41l.055-.22-1.013-.256-.054.22A7.619 7.619 0 0 0 1.5 9c0 4.137 3.366 7.5 7.5 7.5s7.5-3.366 7.5-7.5S13.137 1.5 9 1.5Z"
        fill={fill}
      />
    </Svg>
  </SvgWrapper>
);

type RefreshProps = {
  fill?: string;
  width?: number;
  height?: number;
  $position?: 'static' | 'absolute';
  style?: any;
};
