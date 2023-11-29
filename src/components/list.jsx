export function EduListItems({ educationList }) {
  return educationList.map((education) => {
    return (
      <ul key={education.key}>
        <li>{education.school}</li>
        <li>{education.title}</li>
        <li>{education.startDate}</li>
        <li>{education.endDate}</li>
      </ul>
    );
  });
}
