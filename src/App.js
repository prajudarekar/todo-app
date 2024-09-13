import React from "react";
import TodoApp from "./TodoApp";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
function App() {
  return (
    <div className="box">
      <Header />
      <TodoApp />
      <Footer />
    </div>
  );
}

export default App;
