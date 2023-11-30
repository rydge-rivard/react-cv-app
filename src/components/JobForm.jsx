/* eslint-disable react/prop-types */
export { JobForm };

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
