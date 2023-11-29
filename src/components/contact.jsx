export default function Contact({ person, setPerson }) {
  return (
    <section className="contact">
      <h2>Contact</h2>
      <Input
        label="Full Name"
        typeOf="text"
        text={person.name}
        handler={(e) => setPerson({ ...person, name: e.target.value })}
      ></Input>
      <Input
        label="Address"
        typeOf="text"
        text={person.address}
        handler={(e) => setPerson({ ...person, address: e.target.value })}
      ></Input>
      <Input
        label="Email"
        typeOf="email"
        text={person.email}
        handler={(e) => setPerson({ ...person, email: e.target.value })}
      ></Input>
      <Input
        label="Phone Number"
        typeOf="tel"
        text={person.phone}
        handler={(e) => setPerson({ ...person, phone: e.target.value })}
      ></Input>
    </section>
  );
}

function Input({ label, typeOf, text, handler }) {
  return (
    <>
      <label>{label}</label>
      <input type={typeOf} value={text} onChange={handler}></input>
    </>
  );
}
