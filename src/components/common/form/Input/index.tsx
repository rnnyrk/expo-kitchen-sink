import type * as i from 'types';
import { useState } from 'react';

import { FormField } from '../FormField';
import { InputIcon, InputWrapper, StyledInput } from './styled';

export const Input = ({
  autoCapitalize,
  secureTextEntry,
  label,
  icon,
  error,
  editable = true,
  marginBottom,
  marginTop,
  description,
  onIconClick,
  placeholder,
  value,
  onChangeText,
  style,
}: i.InputProps) => {
  const [isFocus, setIsFocus] = useState(false);
  const isActive = isFocus || Boolean(value);
  const IconComponent = icon as React.ReactNode;

  return (
    <FormField
      {...{ label, error, description, isActive, marginBottom, marginTop, hasValue: !!value }}
    >
      <InputWrapper>
        <StyledInput
          hasError={!!error}
          onChangeText={onChangeText}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          placeholder={placeholder}
          {...{ autoCapitalize, secureTextEntry, value, editable, style }}
        />
        {icon && (
          <InputIcon
            activeOpacity={0.6}
            hitSlop={{ top: 5, left: 5, right: 5, bottom: 5 }}
            readOnly={!onIconClick}
            onPress={onIconClick}
          >
            {IconComponent}
          </InputIcon>
        )}
      </InputWrapper>
    </FormField>
  );
};
