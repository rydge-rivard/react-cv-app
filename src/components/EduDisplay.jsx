/* eslint-disable react/prop-types */
export { EduInfo };

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

function ListItem({ value, id }) {
  return <li key={id}>{value}</li>;
}
