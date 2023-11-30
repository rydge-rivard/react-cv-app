/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import "./App.css";
import { ContactForm } from "./components/ContactForm";
import { EduForm } from "./components/EduForm";
import { JobForm } from "./components/JobForm";
import { ContactInfo } from "./components/ContactDisplay";
import { EduInfo } from "./components/EduDisplay";
import { JobInfo } from "./components/JobInfo";
import { CONTACT, JOBS, EDUCATION } from "../public/data";

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
        <ContactInfo contact={contactList} />
        <br />
        <EduInfo education={eduList} onEdit={(id) => handleEduEdit(id)} />
        <br />
        <JobInfo jobs={jobsList} onEdit={(id) => handleJobEdit(id)} />
      </section>
    </div>
  );
}

export default App;
