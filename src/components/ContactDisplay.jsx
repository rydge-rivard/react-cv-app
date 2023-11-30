/* eslint-disable react/prop-types */
export { ContactInfo };

function ContactInfo({ contact }) {
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
