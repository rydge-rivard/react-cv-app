/* eslint-disable react/prop-types */
import { useState } from "react";

export function EducationForm({ addEducation }) {
  const [education, setEducation] = useState({
    school: "The Odin Project",
    title: "Full Stack Javascript Course",
    startDate: "2020-11-22",
    endDate: "2023-11-22",
  });

  function handleSubmit(e) {
    e.preventDefault();
    addEducation(
      education.school,
      education.title,
      education.startDate,
      education.endDate
    );
  }

  return (
    <section className="education">
      <h2>Education Details</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        {" "}
        <Input
          label="School:"
          typeOf="text"
          text={education.school}
          handler={(e) =>
            setEducation({ ...education, school: e.target.value })
          }
          id={crypto.randomUUID()}
        ></Input>
        <Input
          label="Name of Program:"
          typeOf="text"
          text={education.title}
          handler={(e) => setEducation({ ...education, title: e.target.value })}
          id={crypto.randomUUID()}
        ></Input>
        <Input
          label="Start Date:"
          typeOf="date"
          text={education.startDate}
          handler={(e) =>
            setEducation({ ...education, startDate: e.target.value })
          }
          id={crypto.randomUUID()}
        ></Input>
        <Input
          label="End Date:"
          typeOf="date"
          text={education.endDate}
          handler={(e) =>
            setEducation({ ...education, endDate: e.target.value })
          }
          id={crypto.randomUUID()}
        ></Input>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

function Input({ label, typeOf, text, handler, id }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input type={typeOf} value={text} onChange={handler} id={id}></input>
    </>
  );
}
