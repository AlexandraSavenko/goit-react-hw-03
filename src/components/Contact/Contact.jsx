import css from "./Contact.module.css";
import { IoMdPerson } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
export default function Contact({ contact: { name, number } }) {
  return (
    <div className={css.wrap}>
      <div>
        <div className={css.textPlusIcon}>
          <IoMdPerson />
          <p>{name}</p>
        </div>
        <div className={css.textPlusIcon}>
          <FaPhoneAlt className={css.noMargin} />
          <p className={css.noMargin}>{number}</p>
        </div>
      </div>

      <button className={css.button} type="button">
        Delete
      </button>
    </div>
  );
}
