import { FlatList, View, StyleSheet } from 'react-native';
import { useParams } from 'react-router-native';

import RepositoryItem from './RepositoryItem';
import ReviewItem from './ReviewItem';
import useRepository from '../hooks/useRepository';
import useRepositoryReviews from '../hooks/useRepositoryReviews';
import Text from './Text';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const SingleRepository = ({reviews, repository}) => {
  const reviewNodes = reviews
    ? reviews.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({item}) => <ReviewItem review={item} />}
      keyExtractor={({id}) => id}
      ListHeaderComponent={() =>
        <>
          <RepositoryItem item={repository} singleRepository />
          <ItemSeparator />
        </>
      }
    />
  );
};

const RepositoryPage = () => {
  const { id } = useParams();
  const { repository, loading } = useRepository(id);
  const { reviews } = useRepositoryReviews(id);

  if (loading) {
    return <Text>Loading...</Text>
  }

  return <SingleRepository reviews={reviews} repository={repository} />
};

export default RepositoryPage;
