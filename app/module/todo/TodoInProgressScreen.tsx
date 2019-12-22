import React from 'react';
import { Icons, verticalScale, horizontalScale } from '../../theme';
import { TodoData } from '../../data';
import { ProgressBar } from '../../component';
import { ListRenderItemInfo } from 'react-native';
import { TodoInProgressScreenProps, AppRoute } from '../../navigation';
import { Input, Layout, List,Button, ListElement, ListItem, ListItemElement, Text, ThemedComponentProps, withStyles } from 'react-native-ui-kitten';
import { useSelector } from 'react-redux';

const TodoInProgressScreenComponent = (props: TodoInProgressScreenProps & ThemedComponentProps): ListElement => {
  const { isReduxSauce } = props;
  const allTodos = useSelector(({ reducerNormal, reducerSaurce }) =>
    isReduxSauce ? reducerSaurce.todoList.filter((todo: TodoData): boolean => {
      return todo.progress < 100;
    }) : reducerNormal.todoList.filter((todo: TodoData): boolean => {
      return todo.progress < 100;
    })
  )

  // const [todos, setTodos] = React.useState<TodoData[]>([]);
  // const [query, setQuery] = React.useState<string>('');

  // const onChangeQuery = (query: string): void => {
  //   const nextTodos: TodoData[] = allTodos.filter((todo: TodoData): boolean => {
  //     return todo.title.toLowerCase().includes(query.toLowerCase());
  //   });

  //   setTodos(nextTodos);
  //   setQuery(query);
  // };

  const navigateTodoDetails = React.useCallback((todo: TodoData) => {
    props.navigation.navigate(AppRoute.TODO_DETAILS, { isReduxSauce, todo });
  }, [])

  const navigateAddTodo = React.useCallback(() => {
    props.navigation.navigate(AppRoute.TODO_ADD, { isReduxSauce, todo: undefined });
  }, [])

  const renderTodo = ({ item }: ListRenderItemInfo<TodoData>): ListItemElement => (
    <ListItem
      style={props.themedStyle.item}
      onPress={() => navigateTodoDetails(item)}>
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
    <Layout style={ allTodos.length <= 0 ? props.themedStyle.containerEmpty : props.themedStyle.containerList}>
      { allTodos.length <= 0 && 
        <>
          <Text category='h4'>
            No InProgress todos yet.
          </Text>
          <Button 
            style={props.themedStyle.addButton}
            onPress={navigateAddTodo}>
            ADD TODO
          </Button>
        </>
      }
      { allTodos.length > 0 && 
        // <>
        //   <Input
        //     style={props.themedStyle.filterInput}
        //     placeholder='Search'
        //     value={query}
        //     icon={Icons.searchIcon}
        //     onChangeText={onChangeQuery}
        //   />
          <List
            style={props.themedStyle.list}
            data={allTodos}
            renderItem={renderTodo}
          />
        // </>
      }
      
    </Layout>
  );
};

export const TodoInProgressScreen = withStyles(TodoInProgressScreenComponent, (theme) => ({
  containerList: {
    flex: 1
  },
  containerEmpty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  addButton: {
    marginVertical: verticalScale(8)
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