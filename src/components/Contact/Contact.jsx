import css from "./Contact.module.css";
export default function Contact({ contact: { name, number } }) {
  return (
    <div className={css.wrap}>
      <div>
        <p>{name}</p>
        <p>{number}</p>
      </div>

      <button className={css.button} type="button">
        Delete
      </button>
    </div>
  );
}
