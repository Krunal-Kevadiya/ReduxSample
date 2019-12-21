import React from 'react';
import styles from './TodoDoneStyles';
import { TodoDoneScreenProps } from '../../navigation';
import { Button, Layout, LayoutElement, Text } from 'react-native-ui-kitten';

export const TodoDoneScreen = (props: TodoDoneScreenProps): LayoutElement => (
  <Layout style={styles.container}>
    <Text category='h4'>
      No done todos yet.
    </Text>
    <Button style={styles.addButton}>
      ADD TODO
    </Button>
  </Layout>
);