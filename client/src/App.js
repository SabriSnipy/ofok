import React from 'react';
import './App.css';
import Header from './component/header/header.component';
import Footer from './component/footer/footer.component';
import Home from './component/home';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
