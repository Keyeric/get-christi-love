import './App.css';


import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Main from "./components/mainPage";


function App() {
  return (
    <div className="App2">
      <header className="App-header2">
        <Header />

        <Navigation />
        <Main />
          {/*
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Get Christi Love
        </p> */}
      </header>
    </div>
  );
}

export default App;
