import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports'; 
=======
>>>>>>> origin/main
import SignIn from "./pages/signin";
import { PageRoutes } from "./lib/constants";
import Invoices from "./pages/Invoices";
import Home from "./pages/home";

Amplify.configure(awsconfig);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PageRoutes.Home} element={<Home />} />
        <Route path={PageRoutes.Login} element={<SignIn />} />
        <Route path={PageRoutes.Invoices} element={<Invoices />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
