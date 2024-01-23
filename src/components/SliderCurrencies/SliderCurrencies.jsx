import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import { useWindowDimensions } from 'react-native';

import { queryCurrencies } from './helpers';
import { style } from './SliderCurrencies.style';
import { ScrollView } from '../../__design-system__';
import { useStore } from '../../contexts';
import { Option, OPTION_SIZE } from '../Option';

const SliderCurrencies = ({ selected, onChange, ...others }) => {
  const scrollViewRef = useRef(null);
  const store = useStore();
  const { width } = useWindowDimensions();

  useEffect(() => {
    scrollViewRef.current?.scrollTo({ x: (index - 1) * OPTION_SIZE });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  const currencies = queryCurrencies(store);
  const index = currencies.findIndex((item) => item === selected);

  return (
    <ScrollView {...others} horizontal ref={scrollViewRef} snap={OPTION_SIZE} width={width}>
      {currencies.map((currency, index) => (
        <Option
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
