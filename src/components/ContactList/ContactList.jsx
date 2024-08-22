import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
export default function ContactList({ contArr }) {
  return (
    <ul>
      {contArr.map((contact) => {
        return (
          <li className={css.item} key={contact.id}>
            <Contact contact={contact} />
          </li>
        );
      })}
    </ul>
  );
}
