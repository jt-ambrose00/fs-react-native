import { TextInput, Pressable, View, StyleSheet } from 'react-native';
import { useFormik } from 'formik';

import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  submitButton: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    padding: 8,
    borderRadius: 4,
  },
  container: {
    display: 'flex',
    gap: 12,
    padding: 12,
    backgroundColor: theme.colors.container,
  },
  textInput: {
    display: 'flex',
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: theme.colors.textPrimary,
  },
});

const initialValues = {
  username: '',
  password: '',
};

const SignInForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Username'
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
        style={styles.textInput}
      />
      <TextInput
        placeholder='Password'
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        secureTextEntry={true}
        style={styles.textInput}
      />
      <Pressable onPress={formik.handleSubmit} style={styles.submitButton}>
        <Text color='textTertiary' fontWeight='bold'>
          Sign In
        </Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log('values:', values)
  };

  return <SignInForm onSubmit={onSubmit} />;
};

export default SignIn;

// Implement a sign-in form to the SignIn component we added earlier in the SignIn.jsx file. The sign-in form should include two text fields, one for the username and one for the password. There should also be a button for submitting the form. You don't need to implement an onSubmit callback function, it is enough that the form values are logged using console.log when the form is submitted:

// const onSubmit = (values) => {
//   console.log(values);
// };

// You can use the secureTextEntry(opens in a new tab) prop in the TextInput component to obscure the password input.

// The sign-in form should look something like this: