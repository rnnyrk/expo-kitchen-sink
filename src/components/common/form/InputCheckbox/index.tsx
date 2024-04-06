import { FieldError } from 'react-hook-form';

import { Checkbox } from '../Checkbox';
import { FormDescription } from '../FormDescription';
import { CheckboxError } from './styled';

export const InputCheckbox: React.FC<InputCheckboxProps> = ({
  onChange,
  value,
  error,
  children,
}) => {
  const handleOnChange = () => onChange(!value);

  return (
    <>
      <Checkbox
        onChange={handleOnChange}
        isActive={value}
      >
        {children}
      </Checkbox>
      {error && (
        <CheckboxError>
          <FormDescription isError>{error.message}</FormDescription>
        </CheckboxError>
      )}
    </>
  );
};

export type InputCheckboxProps = {
  onChange: (value: boolean) => void;
  value: boolean;
  error?: FieldError;
  children: React.ReactNode;
};
