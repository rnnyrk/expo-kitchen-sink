import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

export const BottomBarContainer = styled.View<BottomBarContainerProps>`
  position: absolute;
  left: 15%;
  right: 15%;
  bottom: ${({ bottom }) => bottom}px;
  z-index: 100;
  height: ${({ height }) => height}px;
  overflow: hidden;
  border-radius: 100px;
  border-curve: continuous;
`;

type BottomBarContainerProps = {
  bottom: number;
  height: number;
};

export const StyledGradient = styled(LinearGradient)<StyledGradientProps>`
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: 0px;
  height: ${({ height }) => height}px;
`;

type StyledGradientProps = {
  height: number;
};

export const StyledBlurView = styled(BlurView)<StyledBlurViewProps>`
  flex: 1;
  flex-direction: row;
  padding-left: 15px;
  padding-right: 15px;
  background-color: ${({ path }) =>
    path !== '/' ? 'rgba(0, 0, 0, 0.3)' : 'rgba(255, 255, 255, 0.05)'};
`;

type StyledBlurViewProps = {
  path: string;
};
