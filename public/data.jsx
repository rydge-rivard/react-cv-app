export { CONTACT, EDUCATION, JOBS };

const CONTACT = {
  name: "Buzz Lightyear",
  address: "290 Bremner Blvd, Toronto, ON M5V 3L9, Canada",
  email: "rydge@winner.ca",
  phone: "(226) 567 0000",
  id: crypto.randomUUID(),
};
const EDUCATION = [
  {
    school: "University of Space Sciences",
    program: "Ph.D. in Aerospace Engineering",
    startDate: "2012-01-01",
    endDate: "2016-02-02",
    id: crypto.randomUUID(),
  },
  {
    school: "University of Astronomy",
    program: "Master of Science in Astrophysics",
    startDate: "2008-03-01",
    endDate: "2011-03-02",
    id: crypto.randomUUID(),
  },
];

const JOBS = [
  {
    employer: "Advanced Rocket Technologies",
    title: "Aerospace Engineer",
    startDate: "2023-01-01",
    endDate: "2023-02-02",
    description:
      "- Contributed to the development of next-generation propulsion systems for deep-space exploration.",
    id: crypto.randomUUID(),
  },
  {
    employer: "Space Exploration Institute, Houston",
    title: "Research Scientist",
    startDate: "2020-01-01",
    endDate: "2022-01-01",
    description:
      "- Conducted groundbreaking research on the effects of microgravity on plant growth, contributing to NASA's efforts in sustainable space farming.",
    id: crypto.randomUUID(),
  },
  {
    employer: "NASA Johnson Space Center",
    title: "Mission Specialist",
    startDate: "2018-01-01",
    endDate: "2019-01-01",
    description:
      "- Actively participated in mission planning, simulation, and execution for various space shuttle missions.",
    id: crypto.randomUUID(),
  },
];
