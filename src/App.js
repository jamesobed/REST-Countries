import React from "react";
import Country from "./components/Countries";
import Header from "./components/Header";
import Filter from "./components/Filter";

function App() {
  return (
    <>
      <Header />
      <Filter />
      <Country />
    </>
  );
}

export default App;
