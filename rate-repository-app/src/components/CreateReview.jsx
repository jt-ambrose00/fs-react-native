import { TextInput, Pressable, View, StyleSheet } from 'react-native';
import { useNavigate } from "react-router";
import { useFormik } from 'formik';
import * as yup from 'yup';

import Text from './Text';
import theme from '../theme';
import useCreateReview from '../hooks/useCreateReview';

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
  textInputError: {
    borderColor: theme.colors.error,
  },
});

const initialValues = {
  repositoryName: '',
  ownerName: '',
  rating: '',
  text: '',
};

const validationSchema = yup.object().shape({
  repositoryName: yup
    .string()
    .required('Repository name is required'),
  ownerName: yup
    .string()
    .required('Repository owner name is required'),
  rating: yup
    .number()
    .min(0, 'Rating must be at least 0')
    .max(100, 'Rating must be no greater than 100')
    .required('Rating is required'),
  text: yup
    .string(),
});

export const CreateReviewForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Repository name'
        value={formik.values.repositoryName}
        onChangeText={formik.handleChange('repositoryName')}
        onBlur={formik.handleBlur('repositoryName')}
        style={[
          styles.textInput,
          formik.touched.repositoryName &&
          formik.errors.repositoryName &&
          styles.textInputError
        ]}
      />
      {formik.touched.repositoryName && formik.errors.repositoryName && (
        <Text color='error'>{formik.errors.repositoryName}</Text>
      )}
      <TextInput
        placeholder='Repository owner name'
        value={formik.values.ownerName}
        onChangeText={formik.handleChange('ownerName')}
        onBlur={formik.handleBlur('ownerName')}
        style={[
          styles.textInput,
          formik.touched.ownerName &&
          formik.errors.ownerName &&
          styles.textInputError
        ]}
      />
      {formik.touched.ownerName && formik.errors.ownerName && (
        <Text color='error'>{formik.errors.ownerName}</Text>
      )}
      <TextInput
        placeholder='Rating between 0 and 100'
        value={formik.values.rating}
        onChangeText={formik.handleChange('rating')}
        onBlur={formik.handleBlur('rating')}
        style={[
          styles.textInput,
          formik.touched.rating &&
          formik.errors.rating &&
          styles.textInputError
        ]}
      />
      {formik.touched.rating && formik.errors.rating && (
        <Text color='error'>{formik.errors.rating}</Text>
      )}
      <TextInput
        placeholder='Review'
        multiline
        value={formik.values.text}
        onChangeText={formik.handleChange('text')}
        onBlur={formik.handleBlur('text')}
        style={[
          styles.textInput,
          formik.touched.text &&
          formik.errors.text &&
          styles.textInputError
        ]}
      />
      {formik.touched.text && formik.errors.text && (
        <Text color='error'>{formik.errors.text}</Text>
      )}
      <Pressable onPress={formik.handleSubmit} style={styles.submitButton}>
        <Text color='textTertiary' fontWeight='bold'>
          Create a review
        </Text>
      </Pressable>
    </View>
  );
};

const CreateReview = () => {
  const [createReview] = useCreateReview();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { repositoryName, ownerName, rating, text } = values;

    try {
      const { data } = await createReview({
        repositoryName, ownerName, rating: Number(rating), text
      });
      console.log('data:', data);
      navigate(`/${data?.createReview.repositoryId}`);
    } catch (e) {
      console.log(e);
    }
  };

  return <CreateReviewForm onSubmit={onSubmit} />;
};

export default CreateReview;
