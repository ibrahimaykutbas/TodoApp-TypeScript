import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import React, { FC, Dispatch, SetStateAction } from 'react';

interface IFormProps {
  value: string;
  onChangeText: Dispatch<SetStateAction<string>>;
  addTodo: () => void;
}

const Form = ({ value, onChangeText, addTodo }: IFormProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter todo.."
        placeholderTextColor="gray"
        value={value}
        onChangeText={onChangeText}
      />
      <Pressable
        style={styles.button}
        onPress={addTodo}
        disabled={value.length > 0 ? false : true}>
        <Text style={styles.buttonText}>Add</Text>
      </Pressable>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-around'
  },
  input: {
    width: 250,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingLeft: 10
  },
  button: {
    width: 100,
    height: 50,
    backgroundColor: '#FFA559',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15
  }
});
