import React from 'react';
import styles from './AddTodoStyles';
import { Formik, FormikProps } from 'formik';
import { FormInput, ImageOverlay, Toolbar } from '../../../component';
import { Images } from '../../../theme';
import { TodoData, TodoDataSchema } from '../../../data';
import { AddTodoScreenProps } from '../../../navigation';
import { Button, Layout } from 'react-native-ui-kitten';
import { EdgeInsets, useSafeArea } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { addItem, updateItem } from '../../../statemanagment/redux';
import { Creators } from '../../../statemanagment/sauce'

export interface AddTodoRouteParams {
  isReduxSauce: boolean;
  todo: TodoData;
}

export const AddTodoScreen = (props: AddTodoScreenProps) => {
  const { isReduxSauce, todo } = props.route.params;
  const insets: EdgeInsets = useSafeArea();
  const dispatch = useDispatch()

  const onFormSubmit = React.useCallback((values: TodoData) => {
    const normalAction = todo ? updateItem(values) : addItem(values);
    const sauceAction = todo ?  Creators.update(values) : Creators.add(values);
    isReduxSauce ? dispatch(sauceAction) : dispatch(normalAction)
    props.navigation.goBack();
  }, [])

  const renderForm = (props: FormikProps<TodoData>): React.ReactFragment => (
    <React.Fragment>
      <FormInput
        id='title'
        style={styles.formControl}
        placeholder='Title'
        keyboardType='default'
        value={props.values.title}
      />
      <FormInput
        id='description'
        style={styles.formControl}
        placeholder='Description'
        keyboardType='default'
        value={props.values.description}
      />
      <FormInput
        id='progress'
        style={styles.formControl}
        placeholder='Progress'
        keyboardType='numeric'
        value={props.values.progress}
      />
      <Button
        style={styles.submitButton}
        onPress={props.handleSubmit}>
        { todo !== undefined ? 'Edit Todo' : 'Add Todo' }
      </Button>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ImageOverlay
        style={[styles.appBar, { paddingTop: insets.top }]}
        source={Images.imageBackground}>
        <Toolbar
          appearance='control'
          onBackPress={props.navigation.goBack}
        />
      </ImageOverlay>
      <Layout style={styles.formContainer}>
        <Formik
          initialValues={TodoData.with(todo)}
          validationSchema={TodoDataSchema}
          onSubmit={onFormSubmit}>
          {renderForm}
        </Formik>
      </Layout>
    </React.Fragment>
  );
};