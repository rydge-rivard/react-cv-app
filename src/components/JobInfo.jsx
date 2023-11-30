/* eslint-disable react/prop-types */
export { JobInfo };

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

function ListItem({ value, id }) {
  return <li key={id}>{value}</li>;
}
