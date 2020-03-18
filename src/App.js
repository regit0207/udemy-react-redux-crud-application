import React from 'react';

// class App extends Component {
//   render() {
//     return <div>Hello, world!</div>
//   };
// }

const App = () => {
  return (
    <React.Fragment>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </React.Fragment>
  )
}

const Cat = () => {
  return <div>Meow!</div>;
}

export default App;
