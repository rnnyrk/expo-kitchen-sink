import { EdgeInsets } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled.View<ContainerProps>`
  flex: 2;
  align-items: ${({ alignItems }) => alignItems || 'flex-start'};
  background-color: ${({ theme }) => theme.colors.white};
  padding-top: ${({ top }) => top || 0}px;
  padding-right: ${({ right }) => right || 24}px;
  padding-bottom: ${({ bottom }) => bottom || 0}px;
  padding-left: ${({ left }) => left || 24}px;
`;

type ContainerProps = Partial<EdgeInsets> & {
  alignItems?: 'flex-start' | 'flex-end' | 'center';
};
