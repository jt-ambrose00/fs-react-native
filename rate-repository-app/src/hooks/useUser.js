import { useQuery } from '@apollo/client/react';

import { GET_USER } from '../graphql/queries';

const useUser = () => {
  const { data, error, loading } = useQuery(GET_USER, {
    fetchPolicy: 'cache-and-network',
  });

  return { user: data?.me }
}

export default useUser;
