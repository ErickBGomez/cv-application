import Resume from "./components/resume/Resume/Resume";

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
  about:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Aliquam in hendrerit urna. Pellentesque sit amet ",
  email: "erickgomez@domain.com",
  phoneNumber: "+503 1234-5678",
  location: "San Salvador, El Salvador",
  education: [
    {
      title: "Bachelor of Science in Computer Science",
      description: "Central America University",
      startYear: 2023,
      endYear: 2027,
      gpa: 3.8,
    },
    {
      title: "High School Diploma",
      description: "San Salvador High School",
      startYear: 2019,
      endYear: 2022,
      gpa: 4.0,
    },
  ],
  workExperience: [
    {
      title: "Web developer",
      description: "Company A",
      startYear: 2027,
      endYear: "Present",
    },
    {
      title: "Intern",
      description: "Company B",
      startYear: 2026,
      endYear: 2027,
    },
  ],
  skills: [
    { title: "React", description: 5 },
    { title: "NodeJS", description: 3 },
    { title: "Proofreading", description: 1 },
  ],
};

const App = () => {
  return <Resume data={data} />;
};

export default App;
