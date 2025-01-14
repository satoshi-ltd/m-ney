import { Action, Input, Screen, ScrollView } from '@satoshi-ltd/nano-design';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import StyleSheet from 'react-native-extended-stylesheet';

import { style } from './Dashboard.style';
import { queryAccounts, queryLastTxs, querySearchTxs } from './helpers';
import { CardAccount, GroupTransactions, Heading, Summary } from '../../components';
import { useStore } from '../../contexts';
import { getProgressionPercentage, L10N } from '../../modules';

const Dashboard = ({ navigation: { navigate } = {} }) => {
  const { accounts = [], settings: { baseCurrency } = {}, overall = {}, txs = [] } = useStore();

  const [lastTxs, setLastTxs] = useState([]);
  const [search, setSearch] = useState(false);
  const [query, setQuery] = useState();

  useEffect(() => {
    if (!accounts.length) navigate('account', { firstAccount: true });
    // else navigate('transactions', { account: accounts[5] });
    // setTimeout(() => {
    //   navigate('transaction', { type: 0 });
    // }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const nextTxs = queryLastTxs({ accounts, txs });
    if (JSON.stringify(nextTxs) !== JSON.stringify(lastTxs)) setLastTxs(nextTxs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accounts, txs]);

  const handleSearch = () => {
    setSearch(() => {
      setQuery(undefined);
      return !search;
    });
  };

  const sortedAccounts = queryAccounts({ accounts, query: undefined });

  return (
    <Screen _gap _offset style={style.screen}>
      <Summary {...overall} currency={baseCurrency} detail />

      <Heading value={L10N.ACCOUNTS}>
        <Action color="content" caption onPress={() => navigate('account', { create: true })}>
          {`${L10N.NEW} ${L10N.ACCOUNT}`}
        </Action>
      </Heading>

      <ScrollView horizontal snap={StyleSheet.value('$cardAccountSnap')} style={[style.scrollView]}>
        {sortedAccounts.map((account, index) => {
          const {
            chartBalanceBase = [],
            currentBalance,
            currency,
            currentMonth: { progressionCurrency },
            hash,
            title,
          } = account;

          return (
            <CardAccount
              key={hash}
              balance={currentBalance}
              chart={chartBalanceBase}
              currency={currency}
              operator
              percentage={getProgressionPercentage(currentBalance, progressionCurrency)}
              style={[
                style.card,
                index === 0 && style.firstCard,
                index === sortedAccounts.length - 1 && style.lastCard,
              ]}
              title={title}
              onPress={() => navigate('transactions', { account })}
            />
          );
        })}
      </ScrollView>

      {lastTxs.length > 0 && (
        <>
          <Heading value={L10N.LAST_TRANSACTIONS}>
            <Action caption color="content" onPress={handleSearch}>
              {!search ? L10N.SEARCH : L10N.CLOSE}
            </Action>
          </Heading>
          {search && (
            <Input
              autoFocus
              placeholder={`${L10N.SEARCH}...`}
              value={query}
              onChange={setQuery}
              style={style.inputSearch}
            />
          )}

          {(querySearchTxs({ accounts, query, txs }) || lastTxs).map((item) => (
            <GroupTransactions {...item} key={`${item.timestamp}`} currency={baseCurrency} />
          ))}
        </>
      )}
    </Screen>
  );
};

Dashboard.displayName = 'Dashboard';

Dashboard.propTypes = {
  navigation: PropTypes.any,
};

export { Dashboard };
