import { useState } from "react";
import { Contact } from "./components/contact.jsx";
import { EducationForm } from "./components/education.jsx";
import "./App.css";
import { EduListItems } from "./components/list.jsx";

function App() {
  const [person, setPerson] = useState({
    name: "Rydge Rivard",
    address: "123 Sesame Street, California",
    email: "kelly@slater.com",
    phone: "(336) 360-1080",
  });

  const [educationList, setEducationList] = useState([]);

  function addEducation(school, title, startDate, endDate) {
    setEducationList((currentEducation) => {
      return [
        ...currentEducation,
        {
          id: crypto.randomUUID(),
          school,
          title,
          startDate,
          endDate,
        },
      ];
    });
  }

  console.log(educationList);

  return (
    <div className="app">
      <section className="editor">
        <Contact person={person} setPerson={setPerson} />
        <EducationForm addEducation={addEducation} />
      </section>
      <section className="display">
        <div>
          <div>{person.name}</div>
          <div>{person.address}</div>
          <div>{person.email}</div>
          <div>{person.phone}</div>
        </div>
        <ul>
          <EduListItems educationList={educationList} />
        </ul>
      </section>
    </div>
  );
}

export default App;
