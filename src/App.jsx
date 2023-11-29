import { useState } from "react";
import Contact from "./components/contact.jsx";
import "./App.css";

function App() {
  const [person, setPerson] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
  });

  return (
    <div className="app">
      <section className="editor">
        <Contact person={person} setPerson={setPerson} />
      </section>
      <section className="display">
        <div>{person.name}</div>
        <div>{person.address}</div>
        <div>{person.email}</div>
        <div>{person.phone}</div>
      </section>
    </div>
  );
}

export default App;
