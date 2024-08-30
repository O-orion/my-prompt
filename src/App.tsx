import React from 'react';
import Container from './components/component/Container.styled';
import Home from './pages/Home';
// import './App.css';

function App() {
  return (
    <Container backgroundColor='#1B1B1B' padding='10px' width='100vw' height='100vh' >
      <Home></Home>
    </Container>
  );
}

export default App;
