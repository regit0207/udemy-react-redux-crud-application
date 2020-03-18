import React from 'react';

const App = () => {
  const profiles = [
    { name: "太郎", age: 10 },
    { name: "さやか", age: 25 },
    { name: "花子", age: 21 },
    {}
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>Hi, I am {props.name}, and I am {props.age} years old!</div>;
}

User.defaultProps = {
  name: "John Doe",
  age: 1
}

export default App;
