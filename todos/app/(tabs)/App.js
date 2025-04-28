import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Heading from './Heading';
import Input from './Input';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All',
    };
  }

  inputChange = (inputValue) => {
    this.setState({ inputValue });
  }

  submitTodo = () => {
    if (this.state.inputValue.trim() !== '') {
      const newTodo = {
        title: this.state.inputValue,
        completed: false,
      };
      this.setState(prevState => ({
        todos: [...prevState.todos, newTodo],
        inputValue: '',
      }));
    }
  }

  markTodoDone = (index) => {
    const updatedTodos = [...this.state.todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    this.setState({ todos: updatedTodos });
  }

  deleteTodo = (index) => {
    const updatedTodos = this.state.todos.filter((_, i) => i !== index);
    this.setState({ todos: updatedTodos });
  }

  render() {
    const { inputValue, todos } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
          <Heading />
          <Input
            inputValue={inputValue}
            inputChange={this.inputChange}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.submitButton} onPress={this.submitTodo}>
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>

          {/* List of Todos */}
          {todos.map((todo, index) => (
            <View key={index} style={styles.todoItem}>
              <Text style={styles.todoText}>{todo.title}</Text>
              <TouchableOpacity
                style={styles.doneButton}
                onPress={() => this.markTodoDone(index)}
              >
                <Text style={styles.doneButtonText}>
                  {todo.completed ? 'Undo' : 'Done'}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => this.deleteTodo(index)}
              >
                <Text style={styles.deleteButtonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        {/* Tabs */}
        <View style={styles.tabs}>
          <TouchableOpacity style={styles.tabButton}>
            <Text>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabButton}>
            <Text>Active</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabButton}>
            <Text>Complete</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    paddingTop: 60,
  },
  buttonContainer: {
    marginTop: 10,
    marginHorizontal: 20,
    alignItems: 'flex-end',
  },
  submitButton: {
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  submitButtonText: {
    color: '#333333',
    fontSize: 16,
    fontWeight: '500',
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 10,
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  todoText: {
    flex: 1,
    fontSize: 16,
  },
  doneButton: {
    backgroundColor: '#d4edda',
    padding: 8,
    borderRadius: 5,
    marginRight: 5,
  },
  doneButtonText: {
    color: 'green',
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: '#f8d7da',
    padding: 8,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: 'red',
    fontWeight: 'bold',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#ffffff',
  },
  tabButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});

export default App;
