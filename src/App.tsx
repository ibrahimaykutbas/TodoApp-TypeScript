import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import React, { useState, FC } from 'react';

import Form from './components/Form';
import Todo from './components/Todo';

interface IValues {
  id: number;
  value: string;
}

const App: FC = () => {
  const [value, setValue] = useState<string>('');
  const [todos, setTodos] = useState<IValues[]>([]);

  const addTodo = () => {
    if (!value) return;

    const newTodo = {
      id: todos.length + 1,
      value
    };

    setTodos([...todos, newTodo]);
    setValue('');
  };

  const deleteTodo = (id: number) => {
    const newTodos = todos.filter(item => item.id !== id);

    setTodos(newTodos);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Todo App with TypeScript</Text>
      <Form value={value} onChangeText={setValue} addTodo={addTodo} />

      {todos.map((todo: IValues) => (
        <Todo todo={todo} deleteTodo={deleteTodo} />
      ))}
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato'
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white'
  }
});
