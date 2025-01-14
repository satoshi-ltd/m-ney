import { Icon, Screen, Pressable, View } from '@satoshi-ltd/nano-design';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import { useWindowDimensions } from 'react-native';
import StyleSheet from 'react-native-extended-stylesheet';

import { ButtonSummary } from './components';
import { query } from './modules';
import { style } from './Transactions.style';
import { Banner, GroupTransactions, Heading, LineChart, Summary } from '../../components';
import { useStore } from '../../contexts';
import { C, ICON, L10N } from '../../modules';

const {
  TX: {
    TYPE: { INCOME, EXPENSE, TRANSFER },
  },
} = C;

const Transactions = ({
  route: { params: { account: { hash, chartBalanceBase = [] } } = {} } = {},
  navigation = {},
}) => {
  const scrollview = useRef(null);
  const { accounts = [], settings: { baseCurrency } = {} } = useStore();

  const { height, width } = useWindowDimensions();

  const [dataSource, setDataSource] = useState({});
  const [scrollQuery, setScrollQuery] = useState(false);
  const [txs, setTxs] = useState([]);

  useEffect(() => {
    scrollview.current?.scrollTo({ y: 0, animated: false });

    const account = accounts.find((item) => item.hash === hash);
    if (!account) return;

    setDataSource(account);
    setTxs(query(account.txs));
    setScrollQuery(false);

    navigation.setOptions({
      title: account.title,
      headerLeft: () => (
        <Pressable onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" title />
        </Pressable>
      ),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hash, accounts]);

  const handleEdit = () => {
    navigation.navigate('account', dataSource);
  };

  const handleScroll = (nextScroll, y) => {
    if (!scrollQuery && y > height / 2) {
      setScrollQuery(true);
      setTxs(query(dataSource.txs, true));
    }
  };

  const handleTransaction = (type) => {
    navigation.navigate('transaction', { account: dataSource, type });
  };

  const account = accounts.find((item) => item.hash === hash);
  const { currency = baseCurrency, ...rest } = dataSource;

  // ! TODO assign events to <Screen>
  return (
    <Screen ref={scrollview} onScroll={handleScroll} style={style.screen}>
      <Summary {...rest} currency={currency} title={account?.title}>
        <LineChart
          currency={currency}
          height={128}
          showPointer
          values={chartBalanceBase}
          width={width - StyleSheet.value('$viewOffset') * 2}
        />

        <View row style={style.buttons}>
          <ButtonSummary icon={ICON.INCOME} text={L10N.INCOME} onPress={() => handleTransaction(INCOME)} />
          <ButtonSummary icon={ICON.EXPENSE} text={L10N.EXPENSE} onPress={() => handleTransaction(EXPENSE)} />
          {accounts.length > 1 && (
            <ButtonSummary icon={ICON.SWAP} text={L10N.SWAP} onPress={() => handleTransaction(TRANSFER)} />
          )}
          <ButtonSummary icon={ICON.SETTINGS} text={L10N.SETTINGS} onPress={handleEdit} />
        </View>
      </Summary>

      {txs.length > 0 ? (
        <>
          <Heading value={L10N.TRANSACTIONS} />
          {txs.map((item) => (
            <GroupTransactions key={item.timestamp} {...item} currency={currency} />
          ))}
        </>
      ) : (
        <Banner
          align="center"
          // ! TODO: Setup image
          // image={}
          title={L10N.NO_TRANSACTIONS}
        />
      )}
    </Screen>
  );
};

Transactions.propTypes = {
  route: PropTypes.any,
  navigation: PropTypes.any,
};

export { Transactions };
