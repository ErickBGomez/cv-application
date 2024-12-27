import Resume from "./components/Resume/Resume";

const data = {
  fullname: "Erick Gomez",
  workPosition: "Web developer",
};

const App = () => {
  return <Resume data={data} />;
};

export default App;
