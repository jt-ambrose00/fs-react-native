import { View, StyleSheet } from 'react-native';
import { format } from "date-fns";

import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 12,
    backgroundColor: theme.colors.container,
  },
  leftContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: theme.colors.primary,
    borderRadius: 20,
  },
  rightContainer: {
    display: 'flex',
    flex: 1,
    gap: 6,
    paddingHorizontal: 12,
  },
});

const ReviewItem = ({review}) => (
  <View style={styles.container}>
    <View style={styles.leftContainer}>
      <Text color='primary' fontWeight='bold'>
        {review.rating}
      </Text>
    </View>
    <View style={styles.rightContainer}>
      <Text fontWeight='bold'>{review.user.username}</Text>
      <Text>{format(review.createdAt, "dd MMM yyyy")}</Text>
      <Text>{review.text}</Text>
    </View>
  </View>
);

export default ReviewItem;
