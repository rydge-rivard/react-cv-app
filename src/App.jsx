/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./App.css";

const CONTACT = [
  {
    name: "Rydge",
    address: "Earth",
    startDate: "2023/1/1",
    endDate: "2023/2/2",
  },
];

const EDUCATION = [
  {
    school: "Brock U",
    program: "Business",
    startDate: "2023/1/1",
    endDate: "2023/2/2",
  },
  {
    school: "The Odin Project",
    program: "Web Development",
    startDate: "2023/3/1",
    endDate: "2023/5/2",
  },
];

const JOBS = [
  {
    employer: "NASA",
    title: "Spaceman",
    startDate: "2023/1/1",
    endDate: "2023/2/2",
    description: "Head of space technologies",
  },
  {
    employer: "Strawberry Tyme Farms",
    title: "Labourer",
    startDate: "2009/1/1",
    endDate: "2015/2/2",
    description: "Box folding expert",
  },
  {
    employer: "Dialpad",
    title: "Renewal Manager",
    startDate: "2021/1/1",
    endDate: "2023/1/1",
    description: "Renewing big customer contracts",
  },
];

function Input({
  label,
  typeOf = "text",
  text,
  handler,
  id = crypto.randomUUID(),
}) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input type={typeOf} value={text} onChange={handler} id={id}></input>
    </>
  );
}

function FormSection({ title, fields }) {
  return (
    <section className="form">
      <h2>{title}</h2>
      <form>{fields}</form>
    </section>
  );
}

function ContactFields() {
  return (
    <>
      <Input label="Full Name:"></Input>
      <Input label="Address:"></Input>
      <Input label="Email:" typeOf="email"></Input>
      <Input label="Phone Number:" typeOf="tel"></Input>
    </>
  );
}

function EducationFields() {
  return (
    <>
      <Input label="School:"></Input>
      <Input label="Name of Program:"></Input>
      <Input label="Start Date:" typeOf="date"></Input>
      <Input label="End Date:" typeOf="date"></Input>
      <button type="submit">Submit</button>
    </>
  );
}

function JobFields() {
  return (
    <>
      <Input label="Employer:"></Input>
      <Input label="Title:"></Input>
      <Input label="Start Date:" typeOf="date"></Input>
      <Input label="End Date:" typeOf="date"></Input>
      <Input label="Description:"></Input>
      <button type="submit">Submit</button>
    </>
  );
}

function Editors() {
  return (
    <section className="editor">
      <FormSection title={"Contact Details"} fields={ContactFields()} />
      <FormSection title={"Education Details"} fields={EducationFields()} />
      <FormSection title={"Job Details"} fields={JobFields()} />
    </section>
  );
}

function App() {
  return (
    <div className="app">
      <Editors />
      <section className="display">
        <ul>
          <li>Rydge</li>
          <li>Ontario</li>
          <li>rydge@test.ca</li>
          <li>226-454-3124</li>
        </ul>
        <br />
        <ul>
          <li>Brock U</li>
          <li>MBA</li>
          <li>2023/12/12</li>
          <li>2023/12/12</li>
        </ul>
        <button>Edit</button>
        <br />
        <ul>
          <li>Dennis Horseradish</li>
          <li>General Manager</li>
          <li>2023/12/12</li>
          <li>2023/12/12</li>
          <li>Responsible for day-to-day sales and business operations.</li>
        </ul>
        <button>Edit</button>
        <br />
        <ul>
          <li>Strawberry Tyme Farm</li>
          <li>General Labour</li>
          <li>2012/12/12</li>
          <li>2013/12/12</li>
          <li>Folding boxes for fruits.</li>
        </ul>
        <button>Edit</button>
      </section>
    </div>
  );
}

export default App;
