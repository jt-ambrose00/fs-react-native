import { View, StyleSheet } from 'react-native';

import Text from './Text';

const styles = StyleSheet.create({
  bottomSubContainer: {
    display: 'flex',
    alignItems: 'center',
  },
});

const formatNumber = (number) => {
  if (number < 1000) {
    return number
  }
  return `${(number / 1000).toFixed(1)}k`
}

const RepositoryStatistic = ({value, label}) => (
  <View style={styles.bottomSubContainer}>
    <Text fontWeight='bold'>{formatNumber(value)}</Text>
    <Text>{label}</Text>
  </View>
);

export default RepositoryStatistic;
