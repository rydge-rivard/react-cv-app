export { CONTACT, EDUCATION, JOBS };

const CONTACT = {
  name: "Rydge Rivard",
  address: "Planet Earth",
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
