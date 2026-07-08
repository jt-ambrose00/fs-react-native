import Constants from 'expo-constants';
import { View, StyleSheet } from 'react-native';

import AppBarTab from './AppBarTab';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    height: 120,
    paddingLeft: 10,
    backgroundColor: theme.colors.textPrimary,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

const AppBar = () => {
  return <View style={styles.container}>
    <AppBarTab link='/' label='Repositories' />
    <AppBarTab link='/signin' label='Sign In' />
  </View>;
};

export default AppBar;
