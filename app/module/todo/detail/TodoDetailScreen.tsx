import React from 'react';
import { View } from 'react-native';
import { Images } from '../../../theme';
import styles from './TodoDetailStyles';
import { Button, Layout, LayoutElement, Text } from 'react-native-ui-kitten';
import { EdgeInsets, useSafeArea } from 'react-native-safe-area-context';
import { TodoDetailsScreenProps, AppRoute } from '../../../navigation';
import { Toolbar, ImageOverlay, ProgressBar } from '../../../component';
import { TodoData } from '../../../data';
import { useDispatch } from 'react-redux';
import { updateItem, deleteItem } from '../../../statemanagment/redux';
import { Creators } from '../../../statemanagment/sauce'

export interface TodoDetailsRouteParams {
  isReduxSauce: boolean;
  todo: TodoData;
}

export const TodoDetailsScreen = (props: TodoDetailsScreenProps): LayoutElement => {
  const { isReduxSauce, todo } = props.route.params;
  const insets: EdgeInsets = useSafeArea();
  const dispatch = useDispatch()

  const onEditSubmit = React.useCallback(() => {
    props.navigation.goBack();
    props.navigation.navigate(AppRoute.TODO_ADD, { isReduxSauce, todo });
  }, [])

  const onCompleteSubmit = React.useCallback(() => {
    const values = new TodoData(todo.id, todo.title, todo.description, 100);
    const normalAction = updateItem(values);
    const sauceAction = Creators.update(values);
    isReduxSauce ? dispatch(sauceAction) : dispatch(normalAction)
    props.navigation.goBack();
  }, [])

  const onDeleteSubmit = React.useCallback(() => {
    const normalAction = deleteItem(todo)
    const sauceAction = Creators.delete(todo)
    isReduxSauce ? dispatch(sauceAction) : dispatch(normalAction)
    props.navigation.goBack();
  }, [])

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
      <Layout style={styles.container}>
        <View style={styles.detailsContainer}>
          <Text
            style={styles.title}
            category='h4'>
            {todo.title}
          </Text>
          <ProgressBar
            style={styles.progressBar}
            progress={todo.progress}
            text={`${todo.progress}%`}
          />
          <Text style={styles.title}>
            {todo.description}
          </Text>
        </View>
        <Button
          style={styles.submitButton}
          onPress={onEditSubmit}>
          EDIT
        </Button>
        <Button
          status='success'
          style={styles.submitButton}
          onPress={onCompleteSubmit}>
          COMPLETE
        </Button>
        <Button
          status='danger'
          style={styles.submitButton}
          onPress={onDeleteSubmit}>
          DELETE
        </Button>
      </Layout>
    </React.Fragment>
  );
};
