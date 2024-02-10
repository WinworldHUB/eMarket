import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/signin";
import { PageRoutes } from "./lib/constants";
import Dashboard from "./pages/dashboard";
import Invoices from "./pages/Invoices";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PageRoutes.Home} element={<Dashboard />} />
        <Route path={PageRoutes.Login} element={<SignIn />} />
        <Route path={PageRoutes.Invoices} element={<Invoices />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
