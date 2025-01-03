import { Route, Routes } from "react-router";
import MainLayout from "./pages/layout/MainLayout/MainLayout";
import FormPage from "./pages/FormPage/FormPage";
import ResumePage from "./pages/ResumePage/ResumePage";
import NotFound from "./pages/errors/NotFound/NotFound";

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<FormPage />} />
        <Route path="/result" element={<ResumePage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
