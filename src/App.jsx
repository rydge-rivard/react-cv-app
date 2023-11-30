/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import "./App.css";

const CONTACT = {
  name: "Rydge",
  address: "Earth",
  email: "rydge@winner.ca",
  phone: "(226) 567 0000",
  id: crypto.randomUUID(),
};
const EDUCATION = [
  {
    school: "Brock U",
    program: "Business",
    startDate: "2023-01-01",
    endDate: "2023-02-02",
    id: crypto.randomUUID(),
  },
  {
    school: "The Odin Project",
    program: "Web Development",
    startDate: "2023-03-01",
    endDate: "2023-05-02",
    id: crypto.randomUUID(),
  },
];

const JOBS = [
  {
    employer: "NASA",
    title: "Spaceman",
    startDate: "2023-01-01",
    endDate: "2023-02-02",
    description: "Head of space technologies",
    id: crypto.randomUUID(),
  },
  {
    employer: "Strawberry Tyme Farms",
    title: "Labourer",
    startDate: "2009-01-01",
    endDate: "2015-02-02",
    description: "Box folding expert",
    id: crypto.randomUUID(),
  },
  {
    employer: "Dialpad",
    title: "Renewal Manager",
    startDate: "2021-01-01",
    endDate: "2023-01-01",
    description: "Renewing big customer contracts",
    id: crypto.randomUUID(),
  },
];

function Input({
  label,
  typeOf = "text",
  text,
  handler,
  id = crypto.randomUUID(),
  isRequired = false,
}) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={typeOf}
        value={text}
        onChange={handler}
        id={id}
        required={isRequired}
      ></input>
    </>
  );
}

function ContactForm({ contact, setContact }) {
  return (
    <section className="form">
      <h2>Contact Details</h2>
      <form>
        <ContactFields contact={contact} setContact={setContact} />
      </form>
    </section>
  );
}

function ContactFields({ contact, setContact }) {
  return (
    <>
      <Input
        label="Full Name:"
        text={contact.name}
        handler={(e) => setContact({ ...contact, name: e.target.value })}
      ></Input>
      <Input
        label="Address:"
        text={contact.address}
        handler={(e) => setContact({ ...contact, address: e.target.value })}
      ></Input>
      <Input
        label="Email:"
        typeOf="email"
        text={contact.email}
        handler={(e) => setContact({ ...contact, email: e.target.value })}
      ></Input>
      <Input
        label="Phone Number:"
        typeOf="tel"
        text={contact.phone}
        handler={(e) => setContact({ ...contact, phone: e.target.value })}
      ></Input>
    </>
  );
}

function EduForm({ education, setEducation, inputs, setInputs }) {
  function isEdit() {
    let isEdit = false;
    education.forEach((edu) => {
      if (edu.id === inputs.id) {
        isEdit = true;
      }
    });
    return isEdit;
  }

  function handleEduSubmit(e) {
    e.preventDefault();

    if (isEdit()) {
      setEducation(
        education.map((edu) => {
          if (edu.id === inputs.id) {
            return {
              ...edu,
              school: inputs.school,
              program: inputs.program,
              startDate: inputs.startDate,
              endDate: inputs.endDate,
            };
          } else {
            return edu;
          }
        })
      );
    } else {
      setEducation([...education, inputs]);
    }

    setInputs({
      school: "",
      program: "",
      startDate: "",
      endDate: "",
      id: crypto.randomUUID(),
    });
  }

  return (
    <section className="form">
      <h2>Add Education Details</h2>
      <form onSubmit={(e) => handleEduSubmit(e)}>
        <EducationFields inputs={inputs} setInputs={setInputs} />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

function EducationFields({ inputs, setInputs }) {
  return (
    <>
      <Input
        label="*School:"
        text={inputs.school}
        handler={(e) => setInputs({ ...inputs, school: e.target.value })}
        isRequired={true}
      ></Input>
      <Input
        label="*Name of Program:"
        text={inputs.program}
        handler={(e) => setInputs({ ...inputs, program: e.target.value })}
        isRequired={true}
      ></Input>
      <Input
        label="Start Date:"
        typeOf="date"
        text={inputs.startDate}
        handler={(e) => setInputs({ ...inputs, startDate: e.target.value })}
      ></Input>
      <Input
        label="End Date:"
        typeOf="date"
        text={inputs.endDate}
        handler={(e) => setInputs({ ...inputs, endDate: e.target.value })}
      ></Input>
    </>
  );
}

function JobForm({ jobs, setJobs, inputs, setInputs }) {
  function isEdit() {
    let isEdit = false;
    jobs.forEach((edu) => {
      if (edu.id === inputs.id) {
        isEdit = true;
      }
    });
    return isEdit;
  }

  function handleJobSubmit(e) {
    e.preventDefault();

    if (isEdit()) {
      setJobs(
        jobs.map((job) => {
          if (job.id === inputs.id) {
            return {
              ...job,
              employer: inputs.employer,
              title: inputs.title,
              startDate: inputs.startDate,
              endDate: inputs.endDate,
              description: inputs.description,
            };
          } else {
            return job;
          }
        })
      );
    } else {
      setJobs([...jobs, inputs]);
    }

    setInputs({
      employer: "",
      title: "",
      startDate: "",
      endDate: "",
      description: "",
      id: crypto.randomUUID(),
    });
  }

  return (
    <section className="form">
      <h2>Add Work Details</h2>
      <form onSubmit={(e) => handleJobSubmit(e)}>
        <JobFields inputs={inputs} setInputs={setInputs} />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

function JobFields({ inputs, setInputs }) {
  return (
    <>
      <Input
        label="*Employer:"
        text={inputs.employer}
        handler={(e) => setInputs({ ...inputs, employer: e.target.value })}
        isRequired={true}
      ></Input>
      <Input
        label="*Title:"
        text={inputs.title}
        handler={(e) => setInputs({ ...inputs, title: e.target.value })}
        isRequired={true}
      ></Input>
      <Input
        label="Start Date:"
        typeOf="date"
        text={inputs.startDate}
        handler={(e) => setInputs({ ...inputs, startDate: e.target.value })}
      ></Input>
      <Input
        label="End Date:"
        typeOf="date"
        text={inputs.endDate}
        handler={(e) => setInputs({ ...inputs, endDate: e.target.value })}
      ></Input>
      <Input
        label="Description:"
        text={inputs.description}
        handler={(e) => setInputs({ ...inputs, description: e.target.value })}
      ></Input>
    </>
  );
}

function ContactInfo({ contact, setContact }) {
  const recordSet = [];
  recordSet.push(
    <ul key={contact.id}>
      {<ListItem value={contact.name} key={contact.name} />}
      {<ListItem value={contact.address} key={contact.address} />}
      {<ListItem value={contact.email} key={contact.email} />}
      {<ListItem value={contact.phone} key={contact.phone} />}
    </ul>
  );
  return (
    <div className="record">
      <h3>Personal Information</h3>
      {recordSet}
    </div>
  );
}

function ListItem({ value, id }) {
  return <li key={id}>{value}</li>;
}

function EduInfo({ education, onEdit }) {
  const recordSet = [];
  education.forEach((info) => {
    recordSet.push(
      <ul key={info.id}>
        {<ListItem value={info.school} key={info.id + "-school"} />}
        {<ListItem value={info.program} key={info.id + "-program"} />}
        {<ListItem value={info.startDate} key={info.id + "-start"} />}
        {<ListItem value={info.endDate} key={info.id + "-end"} />}
      </ul>
    );
    recordSet.push(
      <button
        onClick={() => {
          onEdit(info.id);
        }}
      >
        Edit
      </button>
    );
  });
  return (
    <div className="record">
      <h3>Education</h3>
      {recordSet}
    </div>
  );
}

function JobInfo({ jobs, onEdit }) {
  const recordSet = [];
  jobs.forEach((info) => {
    recordSet.push(
      <ul key={info.id}>
        {<ListItem value={info.employer} key={info.employer} />}
        {<ListItem value={info.title} key={info.title} />}
        {<ListItem value={info.startDate} key={info.startDate} />}
        {<ListItem value={info.endDate} key={info.endDate} />}
        {<ListItem value={info.description} key={info.description} />}
      </ul>
    );
    recordSet.push(
      <button
        onClick={() => {
          onEdit(info.id);
        }}
      >
        Edit
      </button>
    );
  });
  return (
    <div className="record">
      <h3>Work Experience</h3>
      {recordSet}
    </div>
  );
}

function App() {
  const [eduList, setEduList] = useState(EDUCATION);
  const [jobsList, setJobsList] = useState(JOBS);
  const [contactList, setContactList] = useState(CONTACT);
  const [eduInputs, setEduInputs] = useState({
    school: "",
    program: "",
    startDate: "",
    endDate: "",
    id: crypto.randomUUID(),
  });
  const [jobInputs, setJobInputs] = useState({
    employer: "",
    title: "",
    startDate: "",
    endDate: "",
    description: "",
    id: crypto.randomUUID(),
  });

  function handleEduEdit(id) {
    eduList.forEach((edu) => {
      if (edu.id === id) {
        setEduInputs({
          ...eduInputs,
          id: edu.id,
          school: edu.school,
          program: edu.program,
          startDate: edu.startDate,
          endDate: edu.endDate,
        });
      }
    });
  }

  function handleJobEdit(id) {
    jobsList.forEach((job) => {
      if (job.id === id) {
        setJobInputs({
          ...jobInputs,
          employer: job.employer,
          title: job.title,
          startDate: job.startDate,
          endDate: job.endDate,
          description: job.description,
          id: job.id,
        });
      }
    });
  }

  return (
    <div className="app">
      <section className="editor">
        <ContactForm contact={contactList} setContact={setContactList} />
        <EduForm
          education={eduList}
          setEducation={setEduList}
          inputs={eduInputs}
          setInputs={setEduInputs}
        />
        <JobForm
          jobs={jobsList}
          setJobs={setJobsList}
          inputs={jobInputs}
          setInputs={setJobInputs}
        />
      </section>
      <section className="display">
        <ContactInfo contact={contactList} setContact={setContactList} />
        <br />
        <EduInfo education={eduList} onEdit={(id) => handleEduEdit(id)} />
        <br />
        <JobInfo jobs={jobsList} onEdit={(id) => handleJobEdit(id)} />
      </section>
    </div>
  );
}

export default App;
