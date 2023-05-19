import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import "../src/App.css";
import Auth from "./components/Auth/Auth";
import Register from "./components/Auth/Register";
import { UserPage } from "./components/UserPage";
import AdminPage from "./Page/AdminPage";
import PanelStatistic from "./components/adminPanel/adminPanelStatistic";
import PanelAnswer from "./components/adminPanel/adminPanelAnswers";
import PanelQuestion from "./components/adminPanel/adminPanelQuestion";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin-page" element={<AdminPage />} />
          <Route path="/admin-page/statistic" element={<PanelStatistic />} />
          <Route path="/admin-page/answer" element={<PanelAnswer />} />
          <Route path="/admin-page/question" element={<PanelQuestion />} />
          <Route path="/user-page" element={<UserPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
