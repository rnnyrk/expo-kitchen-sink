import type * as i from 'types';
import { Controller, useForm } from 'react-hook-form';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Env, fetcher, validation } from 'utils';
import { Input } from 'common/form';
import { Button } from 'common/interaction';
import { Container } from 'common/layout';
import { Text } from 'common/typography';

type NewAddressForm = {
  address: string;
};

export default function SettingsScreen() {
  const { top } = useSafeAreaInsets();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<NewAddressForm>();

  function onNewLocation(data: NewAddressForm) {
    fetcher(
      `/mapbox.places/${data.address}.json`,
      {
        method: 'GET',
        type: 'mapbox',
      },
      {
        country: 'nl',
        access_token: Env.MAPBOX_PUBLIC_KEY,
      },
    )
      .then((response) => {
        const [lat, long] = (response?.features as i.LocationFeature[])[0].center;
        console.log({ lat, long });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <Container top={top}>
      <Text
        size={28}
        fontFamily={500}
      >
        Settings
      </Text>

      <Controller
        name="address"
        control={control}
        rules={{ ...validation.required }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            error={errors.address}
          />
        )}
      />

      <Button
        onPress={handleSubmit(onNewLocation)}
        style={{ marginTop: 16 }}
      >
        Nieuwe locatie aanmaken
      </Button>
    </Container>
  );
}
