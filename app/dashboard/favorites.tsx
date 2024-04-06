import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Container } from 'common/layout';
import { Text } from 'common/typography';

export default function FavoritesScreen() {
  const { top } = useSafeAreaInsets();

  return (
    <Container top={top}>
      <Text
        size={28}
        fontFamily={500}
      >
        Favorites
      </Text>
    </Container>
  );
}
