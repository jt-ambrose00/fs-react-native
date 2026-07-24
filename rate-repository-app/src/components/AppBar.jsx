import Constants from 'expo-constants';
import { View, StyleSheet, ScrollView } from 'react-native';

import AppBarTab from './AppBarTab';
import theme from '../theme';
import useUser from '../hooks/useUser';
import useSignOut from '../hooks/useSignOut';

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
  const { user } = useUser();
  const signOut = useSignOut();

  return <View style={styles.container}>
    <ScrollView horizontal>
      <AppBarTab link='/' label='Repositories' />
      {user ?
        <>
          <AppBarTab link='/createReview' label='Create a Review' />
          <AppBarTab link='/' label='Sign Out' onPress={signOut} />
        </> :
        <AppBarTab link='/signin' label='Sign In' />
      }
    </ScrollView>
  </View>;
};

export default AppBar;
