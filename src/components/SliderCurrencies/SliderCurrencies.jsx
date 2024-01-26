import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import { useWindowDimensions } from 'react-native';
import StyleSheet from 'react-native-extended-stylesheet';

import { queryCurrencies } from './helpers';
import { style } from './SliderCurrencies.style';
import { ScrollView } from '../../__design-system__';
import { useStore } from '../../contexts';
import { CardOption } from '../CardOption';

const SliderCurrencies = ({ selected, onChange, ...others }) => {
  const scrollview = useRef(null);
  const store = useStore();
  const { width } = useWindowDimensions();

  useEffect(() => {
    scrollview.current?.scrollTo({ x: (index - 1) * optionSnap, animated: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  const currencies = queryCurrencies(store);
  const index = currencies.findIndex((item) => item === selected);
  const optionSnap = StyleSheet.value('$optionSnap');

  return (
    <ScrollView {...others} horizontal ref={scrollview} snap={optionSnap} width={width}>
      {currencies.map((currency, index) => (
        <CardOption
          key={index}
          currency={currency}
          highlight={selected === currency}
          legend={currency}
          onPress={() => onChange(currency)}
          style={[style.option, index === 0 && style.firstOption, index === currencies.length - 1 && style.lastOption]}
        />
      ))}
    </ScrollView>
  );
};

SliderCurrencies.propTypes = {
  selected: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export { SliderCurrencies };
