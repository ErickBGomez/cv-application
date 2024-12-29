import { Route, Routes } from "react-router";
import MainLayout from "./pages/layout/MainLayout/MainLayout";
import FormPage from "./pages/FormPage/FormPage";
import ResumePage from "./pages/ResumePage/ResumePage";
import NotFound from "./pages/errors/NotFound/NotFound";

/*
  TODOs:
  1. Load form with local storage
  2. Edit existing form data from resume page
  3. Delete existing data when clicking on "New resume" button
  4. Print resume
  5. Check string lengths of resume result
  6. Some fields are not loading in result page
*/

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
