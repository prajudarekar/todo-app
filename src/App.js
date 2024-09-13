import React from "react";
import TodoApp from "./TodoApp";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
function App() {
  return (
    <>
      <Header />
      <main className="main">
        <TodoApp />
      </main>
      <Footer />
    </>
  );
}

export default App;
