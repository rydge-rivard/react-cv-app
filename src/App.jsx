import { useState } from "react";
import Contact from "./components/contact.jsx";

function App() {
  const [person, setPerson] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
  });

  return (
    <>
      <h1>CV Builder</h1>
      <Contact person={person} setPerson={setPerson} />
      <section className="cv"></section>
      <div>{person.name}</div>
      <div>{person.address}</div>
      <div>{person.email}</div>
      <div>{person.phone}</div>
    </>
  );
}

export default App;
