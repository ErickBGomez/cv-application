import Resume from "./components/Resume/Resume";

/*
  TODOs:
  1. form todos
  2. Add header and footer
  3. Change themes
  4. Save info in local storage
*/

const data = {
  fullname: "Erick Gomez",
  workPosition: "Web developer",
};

const App = () => {
  return <Resume data={data} />;
};

export default App;
