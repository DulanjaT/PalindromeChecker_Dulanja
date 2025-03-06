import React from "react";
import PalindromeChecker from "./Components/PalindromeChecker";
import "./styles.css";
import './main.css'
import './app.css'


const App: React.FC = () => {
  return (
    <div className="App">
      <PalindromeChecker />
    </div>
  );
};

export default App;
