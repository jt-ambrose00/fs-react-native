import { useQuery } from '@apollo/client/react';

import { GET_REPOSITORY_REVIEWS } from '../graphql/queries';

const useRepositoryReviews = (id) => {
  const { data, error, loading } = useQuery(GET_REPOSITORY_REVIEWS, {
    variables: { id: id },
    fetchPolicy: 'cache-and-network',
  });

  return { reviews: data?.repository.reviews, loading };
};

export default useRepositoryReviews;
