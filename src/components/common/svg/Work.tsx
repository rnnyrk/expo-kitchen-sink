import Svg, { Path } from 'react-native-svg';

import { SvgWrapper } from './styled';

export const Work = ({
  fill = '#000000',
  width = 20,
  height = 20,
  $position = 'static',
}: WorkProps) => (
  <SvgWrapper $position={$position}>
    <Svg
      width={width}
      height={height}
      viewBox="0 0 414.8 389.7"
    >
      <Path
        d="M345 88.5h-.7v-27c0-33.9-27.6-61.5-61.5-61.5H132C98.1 0 70.5 27.6 70.5 61.5v27h-.7C31.4 88.5 0 119.9 0 158.3v161.6c0 38.4 31.4 69.8 69.8 69.8H345c38.4 0 69.8-31.4 69.8-69.8V158.3c0-38.4-31.4-69.8-69.8-69.8zm-228-27c0-8.1 6.8-15 15-15h150.7c8.1 0 15 6.8 15 15v27H117v-27z"
        fill={fill}
      />
    </Svg>
  </SvgWrapper>
);

type WorkProps = {
  fill?: string;
  width?: number;
  height?: number;
  $position?: 'static' | 'absolute';
};
