import { ToggleContainer, ToggleText } from './styled';

export const VisibilityToggle = ({ isToggled }: VisibilityToggleProps) => {
  return (
    <ToggleContainer>
      <ToggleText>{isToggled ? 'Hide' : 'Show'}</ToggleText>
    </ToggleContainer>
  );
};

type VisibilityToggleProps = {
  isToggled?: boolean;
};
