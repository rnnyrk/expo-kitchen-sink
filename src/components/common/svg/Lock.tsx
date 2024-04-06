import Svg, { Path } from 'react-native-svg';

import { SvgWrapper } from './styled';

export const Lock = ({
  fill = '#000000',
  width = 20,
  height = 20,
  $position = 'static',
}: LockProps) => (
  <SvgWrapper $position={$position}>
    <Svg
      width={width}
      height={height}
      viewBox="0 0 244.6 428.8"
    >
      <Path
        fill={fill}
        d="M190.1 224c32.8-21.9 54.5-59.3 54.5-101.7C244.6 54.8 189.9 0 122.3 0 54.8 0 0 54.7 0 122.3c0 42.4 21.6 79.8 54.5 101.7L25.8 399.3c-2.5 15.5 9.4 29.5 25.1 29.5h142.8c15.7 0 27.6-14 25.1-29.5L190.1 224z"
      />
    </Svg>
  </SvgWrapper>
);

type LockProps = {
  fill?: string;
  width?: number;
  height?: number;
  $position?: 'static' | 'absolute';
};
