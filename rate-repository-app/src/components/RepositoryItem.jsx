import { View, Image, StyleSheet, Pressable } from 'react-native';

import RepositoryStatistic from './RepositoryStatistic';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 4,
  },
  languageButton: {
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.primary,
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderRadius: 4,
  },
  container: {
    padding: 12,
    backgroundColor: theme.colors.container,
  },
  topContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  topSubContainer: {
    display: 'flex',
    gap: 6,
  },
  bottomContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 12,
  },
});

const RepositoryItem = ({item}) => (
  <View style={styles.container}>
    <View style={styles.topContainer}>
      <Image source={{ uri: item.ownerAvatarUrl }} style={styles.avatar} />
      <View style={styles.topSubContainer}>
        <Text fontSize='subheading' fontWeight='bold'>
          {item.fullName}
        </Text>
        <Text>{item.description}</Text>
        <Pressable style={styles.languageButton}>
          <Text color='textTertiary'>{item.language}</Text>
        </Pressable>
      </View>
    </View>
    <View style={styles.bottomContainer}>
      <RepositoryStatistic value={item.stargazersCount} label='Stars' />
      <RepositoryStatistic value={item.forksCount} label='Forks' />
      <RepositoryStatistic value={item.reviewCount} label='Reviews' />
      <RepositoryStatistic value={item.ratingAverage} label='Rating' />
    </View>
  </View>
);

export default RepositoryItem;
