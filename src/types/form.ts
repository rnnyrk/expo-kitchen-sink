import { RegisterOptions } from 'react-hook-form';
import { TextInputProps } from 'react-native';

export type FormFieldProps = {
  label?: string;
  description?: string;
  direction?: 'horizontal' | 'vertical';
  children?: React.ReactNode;
  isActive?: boolean;
  hasValue?: boolean;
  error?: any;
  marginTop?: string;
  marginBottom?: string;
  onPress?: () => void;
};

export type DefaultInputProps = Omit<Partial<TextInputProps>, 'style'> & {
  onChange?: ((text: string) => void) | undefined;
  onChangeText?: (text: string) => void;
  defaultValue?: string;
  name?: string;
  editable?: boolean;
  rules?: Exclude<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>;
  icon?: React.ReactNode;
  onIconClick?: ((event: any) => void) | undefined;
  error?: any;
};

export type CheckboxItemType = {
  label: string;
  value: string;
};

export type InputProps = DefaultInputProps &
  Omit<FormFieldProps, 'onPress'> & {
    style?: any;
  };

export type SelectOption = {
  label: string;
  value: string;
};
