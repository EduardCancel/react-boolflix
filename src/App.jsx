import React from "react";
import { GlobalProvider } from "./context/GlobalContext";
import HomePage from "./Pages/HomePage";
import Header from "./Components/Header";

export default function App() {
  return (
    <GlobalProvider>
      <Header />
      <HomePage />
    </GlobalProvider>
  );
}
