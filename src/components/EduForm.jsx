/* eslint-disable react/prop-types */
export { EduForm };

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
