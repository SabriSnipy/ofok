import React from 'react';
import './App.css';
import Header from './component/header/header.component';
import Footer from './component/footer/footer.component';
import Routes from './component/routes';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes/>
      <Footer/>
    </div>
  );
}

export default App;
