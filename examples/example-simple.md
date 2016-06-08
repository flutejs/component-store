## code

```jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import store from 'index';



@store({
  like: 'play'
})
class A extends React.Component {
  handleClick() {
    this.props.onChange({
      age: this.props.age - 1
    });
  }
  render() {
    return <div>
      name: {this.props.name} age: {this.props.age} like: {this.props.like}
      <button onClick={() => this.handleClick()}>age</button>
    </div>
  }
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'lily',
      age: 18,
    }
  }
  render() {
    return <A name={this.state.name} age={this.state.age} onChange={obj => this.setState(obj)} />;
  }
}


ReactDOM.render(<App />, document.getElementById('react-content'));
```

```html
<div id="react-content"></div>
```