import { StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

import Text from './Text';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});

const AppBarTab = ({link, label, onPress}) => {
  return <Link to={link} style={styles.container} onPress={onPress}>
    <Text fontSize='subheading' fontWeight='bold' color='textTertiary'>
      {label}
    </Text>
  </Link>
};

export default AppBarTab;
