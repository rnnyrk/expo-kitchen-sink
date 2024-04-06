import { EdgeInsets } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const FormContent = styled.View`
  flex: 1;
  justify-content: center;
  width: 100%;
`;

export const FormAction = styled.View<FormActionProps>`
  width: 100%;
  align-items: center;
  padding-bottom: ${({ insets }) => insets.bottom + 16}px;
`;

type FormActionProps = {
  insets: EdgeInsets;
};

export const FormLayout = {
  Action: FormAction,
  Content: FormContent,
};
