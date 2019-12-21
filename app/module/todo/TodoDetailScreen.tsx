import React from 'react';
import { View } from 'react-native';
import { Images } from '../../theme';
import styles from './TodoDetailStyles';
import { Button, Layout, LayoutElement, Text } from 'react-native-ui-kitten';
import { EdgeInsets, useSafeArea } from 'react-native-safe-area-context';
import { TodoDetailsScreenProps } from '../../navigation';
import { Toolbar, ImageOverlay, ProgressBar } from '../../component';
import { TodoData } from '../../data';

export interface TodoDetailsRouteParams {
  todo: TodoData;
}

export const TodoDetailsScreen = (props: TodoDetailsScreenProps): LayoutElement => {

  const { todo } = props.route.params;
  const insets: EdgeInsets = useSafeArea();

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
          onPress={props.navigation.goBack}>
          COMPLETE
        </Button>
      </Layout>
    </React.Fragment>
  );
};
