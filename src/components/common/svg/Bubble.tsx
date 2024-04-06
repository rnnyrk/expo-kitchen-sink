import Svg, { Path } from 'react-native-svg';

import theme from 'styles/theme';

import { SvgWrapper } from './styled';

export const Bubble = ({
  fill = theme.colors.primary,
  width = 200,
  height = 200,
  $position = 'static',
}: BubbleProps) => (
  <SvgWrapper $position={$position}>
    <Svg
      width={width}
      height={height}
      viewBox="0 0 442 493.3"
    >
      <Path
        d="M413.4 103.3c-19-31.9-45.1-57.1-78.3-75.6C302 9.2 264 0 221.4 0c-42.7 0-80.6 9.2-113.8 27.8-33.2 18.5-59.4 43.7-78.7 75.6C9.7 135.2 0 171.7 0 212.9s9.7 77.6 28.9 109.5c19.3 31.9 45.5 57.1 78.7 75.6 29.7 16.6 63.2 25.7 100.6 27.4L198 447.6c-6.8 14.7-1.5 32.2 12.3 40.7l1.6 1c10.1 6.3 23.2 5.1 32.1-2.8l129.8-115.9c15.5-13.9 28.7-29.9 39.6-48.1 19-31.9 28.5-68.4 28.5-109.5.1-41.3-9.5-77.8-28.5-109.7z"
        fill={fill}
      />
    </Svg>
  </SvgWrapper>
);

type BubbleProps = {
  fill?: string;
  width?: number;
  height?: number;
  $position?: 'static' | 'absolute';
};
