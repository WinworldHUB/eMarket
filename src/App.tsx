import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import SignIn from "./pages/signin";
import { PageRoutes } from "./lib/constants";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PageRoutes.Home} element={<Home />} />
        <Route path={PageRoutes.Login} element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
