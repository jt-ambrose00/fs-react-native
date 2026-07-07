import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';

import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    height: 120,
    paddingLeft: 10,
    backgroundColor: theme.colors.textPrimary,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const AppBar = () => {
  return <View style={styles.container}>
    <Pressable>
      <Text fontSize='subheading' fontWeight='bold' color='textTertiary'>
        Repositories
      </Text>
    </Pressable>
  </View>;
};

export default AppBar;
