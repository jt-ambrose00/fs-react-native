import { Link } from 'react-router-native';

import Text from './Text';

const AppBarTab = ({link, label}) => {
  return <Link to={link}>
    <Text fontSize='subheading' fontWeight='bold' color='textTertiary'>
      {label}
    </Text>
  </Link>
};

export default AppBarTab;
