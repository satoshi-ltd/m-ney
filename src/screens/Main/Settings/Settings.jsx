import React, { useState } from 'react';

import { changeBaseCurrency, getLatestRates } from './helpers';
import { Backup } from './Settings.Backup';
import { style } from './Settings.style';
import { Action, Card, Screen, Text, View } from '../../../__design-system__';
import { Heading, SliderCurrencies } from '../../../components';
import { useStore } from '../../../contexts';
import { L10N } from '../../../modules';

const Settings = () => {
  const store = useStore();

  const {
    settings: { baseCurrency, lastRatesUpdate = '' },
  } = store;

  const [busy, setBusy] = useState(false);

  const handleChangeCurrency = async (currency) => {
    setBusy(true);
    await changeBaseCurrency({ currency, L10N, store });
    setBusy(false);
  };

  const handleUpdateRates = async () => {
    setBusy(true);
    await getLatestRates({ store });
    setBusy(false);
  };

  return (
    <Screen gap>
      <Card style={style.offset}>
        <Text bold subtitle>
          Statistics
        </Text>
      </Card>

      <Backup style={style.offset} />

      <View>
        <Heading value={L10N.CHOOSE_CURRENCY}>
          <Action caption disabled={busy} small onPress={handleUpdateRates}>
            {L10N.SYNC_RATES_CTA}
          </Action>
        </Heading>

        <SliderCurrencies selected={baseCurrency} onChange={handleChangeCurrency} style={style.slider} />

        <Text color="contentLight" caption style={[style.hint, style.offset]}>
          {!busy
            ? `${L10N.SYNC_RATES_SENTENCE} ${lastRatesUpdate.toString().split(' ').slice(0, 5).join(' ')}`
            : L10N.WAIT}
        </Text>
      </View>
    </Screen>
  );
};

Settings.displayName = 'Settings';

export { Settings };