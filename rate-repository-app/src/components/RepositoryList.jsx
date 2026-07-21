import { FlatList, View, StyleSheet } from 'react-native';

import useRepositories from '../hooks/useRepositories';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({item}) => <RepositoryItem item={item} />}
      keyExtractor={item => item.id}
    />
  );
};

const RepositoryList = () => {
  const { repositories } = useRepositories();
  return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;

// Implement a test that ensures that the RepositoryListContainer component renders repository's name, description, language, forks count, stargazers count, rating average, and review count correctly. One approach in implementing this test is to add a testID(opens in a new tab) prop for the element wrapping a single repository's information:

// const RepositoryItem = (/* ... */) => {
//   // ...

//   return (
//     <View testID="repositoryItem" {/* ... */}>
//       {/* ... */}
//     </View>
//   )
// };

// Once the testID prop is added, you can use the getAllByTestId(opens in a new tab) query to get those elements:

// const repositoryItems = screen.getAllByTestId('repositoryItem');
// const [firstRepositoryItem, secondRepositoryItem] = repositoryItems;

// // expect something from the first and the second repository item
// Having those elements you can use the toHaveTextContent(opens in a new tab) matcher to check whether an element has certain textual content. You might also find the Querying Within Elements(opens in a new tab) guide useful. If you are unsure what is being rendered, use the debug(opens in a new tab) function to see the serialized rendering result.

// Use this as a base for your test:

// describe('RepositoryList', () => {
//   describe('RepositoryListContainer', () => {
//     it('renders repository information correctly', () => {
//       const repositories = {
//         totalCount: 8,
//         pageInfo: {
//           hasNextPage: true,
//           endCursor:
//             'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
//           startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
//         },
//         edges: [
//           {
//             node: {
//               id: 'jaredpalmer.formik',
//               fullName: 'jaredpalmer/formik',
//               description: 'Build forms in React, without the tears',
//               language: 'TypeScript',
//               forksCount: 1619,
//               stargazersCount: 21856,
//               ratingAverage: 88,
//               reviewCount: 3,
//               ownerAvatarUrl:
//                 'https://avatars2.githubusercontent.com/u/4060187?v=4',
//             },
//             cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
//           },
//           {
//             node: {
//               id: 'async-library.react-async',
//               fullName: 'async-library/react-async',
//               description: 'Flexible promise-based React data loader',
//               language: 'JavaScript',
//               forksCount: 69,
//               stargazersCount: 1760,
//               ratingAverage: 72,
//               reviewCount: 3,
//               ownerAvatarUrl:
//                 'https://avatars1.githubusercontent.com/u/54310907?v=4',
//             },
//             cursor:
//               'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
//           },
//         ],
//       };

//       // Add your test code here
//     });
//   });
// });

// You can put the test file where you please. However, it is recommended to follow one of the ways of organizing test files introduced earlier. Use the repositories variable as the repository data for the test. There should be no need to alter the variable's value. Note that the repository data contains two repositories, which means that you need to check that both repositories' information is present.