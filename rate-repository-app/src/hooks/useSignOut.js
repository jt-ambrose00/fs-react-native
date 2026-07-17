import { useQuery, useApolloClient } from '@apollo/client/react';

import { GET_USER } from '../graphql/queries';
import useAuthStorage from '../hooks/useAuthStorage';

const useSignOut = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const signOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  return signOut;
};

export default useSignOut;
