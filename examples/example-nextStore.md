## code

```jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import store from 'index';



@store({
  like: 'play',
  study: false,
})
class A extends React.Component {
  handleStudy() {
    this.props.onChange({
      study: true,
    });
  }
  handleAge() {
    this.props.onChange({
      age: this.props.age - 1,
    });
  }
  render() {
    const { name, age, like, study } = this.props;
    return <div>
      name: {name} age: {age} like: {like} study: {String(study)}
      <button onClick={() => this.handleStudy()}>study</button>
      <button onClick={() => this.handleAge()}>age</button>
    </div>
  }
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: {
        name: 'lily',
        age: 18,
        study: false,
      }
    }
  }
  render() {
    return <div>
      <button onClick={() => {
        this.setState({
          obj: {
            ...this.state.obj,
            study: false,
          }
        });
      }}>setState</button>
      <A
        name={this.state.obj.name}
        age={this.state.obj.age}
        study={this.state.obj.study}
        onChange={obj => this.setState({obj})} />
    </div>;
  }
}





ReactDOM.render(<App />, document.getElementById('react-content'));
```

```html
<div id="react-content"></div>
```