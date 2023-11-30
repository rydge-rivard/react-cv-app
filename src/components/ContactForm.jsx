/* eslint-disable react/prop-types */
export { ContactForm };

function ContactForm({ contact, setContact }) {
  return (
    <section className="form">
      <h2>Contact Details</h2>
      <form>
        <ContactFields contact={contact} setContact={setContact} />
      </form>
    </section>
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

function ContactFields({ contact, setContact }) {
  return (
    <>
      <Input
        label="Full Name:"
        text={contact.name}
        handler={(e) => setContact({ ...contact, name: e.target.value })}
      ></Input>
      <Input
        label="Address:"
        text={contact.address}
        handler={(e) => setContact({ ...contact, address: e.target.value })}
      ></Input>
      <Input
        label="Email:"
        typeOf="email"
        text={contact.email}
        handler={(e) => setContact({ ...contact, email: e.target.value })}
      ></Input>
      <Input
        label="Phone Number:"
        typeOf="tel"
        text={contact.phone}
        handler={(e) => setContact({ ...contact, phone: e.target.value })}
      ></Input>
    </>
  );
}
