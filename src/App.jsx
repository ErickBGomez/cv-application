import { Route, Routes } from "react-router";
import ResumeForm from "./components/form/ResumeForm/ResumeForm";
import Footer from "./components/page-elements/Footer/Footer";
import Header from "./components/page-elements/Header/Header";
import Resume from "./components/resume/Resume/Resume";
import MainLayout from "./pages/layout/MainLayout/MainLayout";
import FormPage from "./pages/FormPage/FormPage";
import ResumePage from "./pages/ResumePage/ResumePage";

/*
  TODOs:
  4. Save info in local storage
*/

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<FormPage />} />
        <Route path="/result" element={<ResumePage />} />
      </Route>
    </Routes>
  );
};

export default App;
