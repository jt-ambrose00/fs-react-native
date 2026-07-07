import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';

import AppBar from './AppBar';
import RepositoryList from './RepositoryList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <RepositoryList />
    </View>
  );
};

export default Main;

// We will soon need to navigate between different views in our application. That is why we need an app bar(opens in a new tab) to display tabs for switching between different views. Create a file AppBar.jsx in the components folder with the following content:


// import { View, StyleSheet } from 'react-native';
// import Constants from 'expo-constants';

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: Constants.statusBarHeight,
//     // ...
//   },
//   // ...
// });

// const AppBar = () => {
//   return <View style={styles.container}>{/* ... */}</View>;
// };

// export default AppBar;

// Now that the AppBar component will prevent the status bar from overlapping the content, you can remove the marginTop style we added for the Main component earlier in the Main.jsx file. The AppBar component should currently contain a tab with the text "Repositories". Make the tab pressable by using the Pressable(opens in a new tab) component but you don't have to handle the onPress event in any way. Add the AppBar component to the Main component so that it is the uppermost component on the screen. The AppBar component should look something like this:

// The background color of the app bar in the image is #24292e but you can use any other color as well. It might be a good idea to add the app bar's background color into the theme configuration so that it is easy to change it if needed. Another good idea might be to separate the app bar's tab into a component like AppBarTab so that it is easy to add new tabs in the future.