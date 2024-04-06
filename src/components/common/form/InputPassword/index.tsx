import type * as i from 'types';
import { useState } from 'react';

import { Input } from '../Input';
import { VisibilityToggle } from '../VisibilityToggle';

export const InputPassword: React.FC<i.InputProps> = ({ ...props }) => {
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);

  return (
    <Input
      secureTextEntry={secureTextEntry}
      onIconClick={() => setSecureTextEntry(!secureTextEntry)}
      icon={<VisibilityToggle isToggled={!secureTextEntry} />}
      {...props}
    />
  );
};
