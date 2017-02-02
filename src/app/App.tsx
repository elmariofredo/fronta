import { Component, h } from 'preact';
import TodoItem from './todo-item';

type Todo = {
  text: string
}

interface TodoListState {
  todos: { text: string }[];
  text: string;
}

export default class App extends Component<{}, TodoListState> {
  state = { todos: any[], text: '' };

  setText = (e: Event) => {

    console.log(e.target.value)

    this.setState({ text: (e.target as HTMLInputElement).value } as TodoListState);
  }

  addTodo = () => {
    const { todos, text } = this.state;

    this.setState({
      todos: [
        ...todos,
        { text }
      ], text: ''
    });
  }

  render({ }, { todos, text }) {
    return (
      <form onSubmit={this.addTodo}>
        <bl-input value={text} onInput={this.setText} />
        <bl-button onClick={this.addTodo} color="brand">Add</bl-button>
        <ul>
          {todos.map(({text}) => (
            <TodoItem text={text} />
          ))}
        </ul>
      </form>
    );
  }
}
