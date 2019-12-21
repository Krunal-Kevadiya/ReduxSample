import React from 'react';
import { Icons, verticalScale, horizontalScale } from '../../theme';
import { TodoData } from '../../data';
import { ProgressBar } from '../../component';
import { ListRenderItemInfo } from 'react-native';
import { TodoInProgressScreenProps, AppRoute } from '../../navigation';
import { Input, Layout, List, ListElement, ListItem, ListItemElement, Text, ThemedComponentProps, withStyles } from 'react-native-ui-kitten';

const allTodos: TodoData[] = [
  TodoData.mocked0(),
  TodoData.mocked1(),
  TodoData.mocked2(),
  TodoData.mocked0(),
  TodoData.mocked1(),
  TodoData.mocked2(),
  TodoData.mocked0(),
  TodoData.mocked1(),
  TodoData.mocked2(),
];

const TodoInProgressScreenComponent = (props: TodoInProgressScreenProps & ThemedComponentProps): ListElement => {

  const [todos, setTodos] = React.useState<TodoData[]>(allTodos);
  const [query, setQuery] = React.useState<string>('');

  const onChangeQuery = (query: string): void => {
    const nextTodos: TodoData[] = allTodos.filter((todo: TodoData): boolean => {
      return todo.title.toLowerCase().includes(query.toLowerCase());
    });

    setTodos(nextTodos);
    setQuery(query);
  };

  const navigateTodoDetails = (todoIndex: number): void => {
    const { [todoIndex]: todo } = todos;
    props.navigation.navigate(AppRoute.TODO_DETAILS, { todo });
  };

  const renderTodo = ({ item }: ListRenderItemInfo<TodoData>): ListItemElement => (
    <ListItem
      style={props.themedStyle.item}
      onPress={navigateTodoDetails}>
      <Text category='s1'>
        {item.title}
      </Text>
      <Text
        appearance='hint'
        category='c1'>
        {item.description}
      </Text>
      <ProgressBar
        style={props.themedStyle.itemProgressBar}
        progress={item.progress}
        text={`${item.progress}%`}
      />
    </ListItem>
  );

  return (
    <Layout style={props.themedStyle.container}>
      <Input
        style={props.themedStyle.filterInput}
        placeholder='Search'
        value={query}
        icon={Icons.searchIcon}
        onChangeText={onChangeQuery}
      />
      <List
        style={props.themedStyle.list}
        data={todos}
        renderItem={renderTodo}
      />
    </Layout>
  );
};

export const TodoInProgressScreen = withStyles(TodoInProgressScreenComponent, (theme) => ({
  container: {
    flex: 1
  },
  filterInput: {
    marginTop: verticalScale(16),
    marginHorizontal: horizontalScale(8)
  },
  list: {
    flex: 1,
    backgroundColor: theme['background-basic-color-1'],
  },
  item: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingHorizontal: horizontalScale(12)
  },
  itemProgressBar: {
    width: '50%',
    marginVertical: verticalScale(12)
  },
}));