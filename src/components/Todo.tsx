import { Pressable, Text, StyleSheet } from 'react-native';
import React, { FC } from 'react';

interface ITodo {
  todo: {
    id: number;
    value: string;
  };
  deleteTodo: (id: number) => void;
}

const Todo = ({ todo, deleteTodo }: ITodo) => {
  return (
    <Pressable
      style={styles.todo}
      key={todo.id}
      onLongPress={() => deleteTodo(todo.id)}>
      <Text style={styles.todoTitle}>{todo.value}</Text>
    </Pressable>
  );
};

export default Todo;

const styles = StyleSheet.create({
  todo: {
    height: 50,
    backgroundColor: '#FFE6C7',
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    justifyContent: 'center',
    paddingLeft: 10
  },
  todoTitle: {
    color: '#454545',
    fontWeight: 'bold',
    fontSize: 15
  }
});
