/* eslint-disable react/prop-types */
import "./contact.css";

export function Contact({ person, setPerson }) {
  return (
    <section className="contact">
      <h2>Contact Details</h2>
      <form>
        <Input
          label="Full Name:"
          typeOf="text"
          text={person.name}
          handler={(e) => setPerson({ ...person, name: e.target.value })}
          id={crypto.randomUUID()}
        ></Input>
        <Input
          label="Address:"
          typeOf="text"
          text={person.address}
          handler={(e) => setPerson({ ...person, address: e.target.value })}
          id={crypto.randomUUID()}
        ></Input>
        <Input
          label="Email:"
          typeOf="email"
          text={person.email}
          handler={(e) => setPerson({ ...person, email: e.target.value })}
          id={crypto.randomUUID()}
        ></Input>
        <Input
          label="Phone Number:"
          typeOf="tel"
          text={person.phone}
          handler={(e) => setPerson({ ...person, phone: e.target.value })}
          id={crypto.randomUUID()}
        ></Input>
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
