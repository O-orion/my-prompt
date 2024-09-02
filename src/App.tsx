import React from 'react';
import Container from './components/component/Container.styled';
import Home from './pages/Home';
// import './App.css';

function App() {
  return (
    <Container backgroundColor='#d9d9d9' padding='10px' width='100vw' height='100vh' >
      <Home></Home>
    </Container>
  );
}

export default App;
