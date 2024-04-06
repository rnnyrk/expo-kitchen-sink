import * as Haptics from 'expo-haptics';

export const lightHapticFeedback = () => {
  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
};
