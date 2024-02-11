import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/signin";
import { PageRoutes } from "./lib/constants";
import Invoices from "./pages/Invoices";
import Home from "./pages/home";

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
