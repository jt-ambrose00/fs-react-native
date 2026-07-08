import Constants from 'expo-constants';
import { View, StyleSheet, ScrollView } from 'react-native';

import AppBarTab from './AppBarTab';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    height: 120,
    backgroundColor: theme.colors.textPrimary,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const AppBar = () => {
  return <View style={styles.container}>
    <ScrollView horizontal>
      <AppBarTab link='/' label='Repositories' />
      <AppBarTab link='/signin' label='Sign In' />
    </ScrollView>
  </View>;
};

export default AppBar;
