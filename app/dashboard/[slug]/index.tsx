import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Container } from 'common/layout';
import { Text } from 'common/typography';

export default function SlugScreen() {
  const { top, left, right } = useSafeAreaInsets();

  return (
    <Container {...{ right, left }}>
      <Text
        size={28}
        fontFamily={400}
        style={{ paddingLeft: 24 }}
      >
        Slug
      </Text>
    </Container>
  );
}
