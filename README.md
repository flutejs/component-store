# component-store

[![NPM version](https://img.shields.io/npm/v/component-store.svg?style=flat)](https://npmjs.org/package/component-store)

A way to manage react dumb component's state, then you can use it in plain, redux or mobx app.

## Install

```
npm install component-store
```


## Usage

normal style
```js
import store from 'component-store';

class A extends React.Component {
}

export default store(defaultStore)(App)
```

decorator style
```js
import store from 'component-store';

@store(defaultStore)
class A extends React.Component {
}

export default App;
```


## Api

- store: Function(default store, onChange name='onChange')

- onChange: Function(nextStore)

## Example

http://flutejs.github.io/component-store/