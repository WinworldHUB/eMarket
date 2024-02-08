import React from "react";
import "./App.css";
import PageLayout from "./lib/components/page-layout";
import SignUp from "./lib/components/SignUp";

function App() {
  return (
    <div>
      <PageLayout isShowSideMenu />
      <SignUp/>
    </div>
  );
}

export default App;
