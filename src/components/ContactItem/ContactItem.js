import actions from "../../redux/phonebook/phonebook-actions";
import { connect } from "react-redux";
import "./ContactItem.css";

const ContactItem = ({ name, id, number, onDelete }) => {
  return (
    <li className="contact-item">
      {name} {number}
      <button
        type="button"
        onClick={() => onDelete(id)}
        className="contact-item_button"
      >
        Удалить
      </button>
    </li>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onDelete: (value) => dispatch(actions.deleteContacts(value)),
});

export default connect(null, mapDispatchToProps)(ContactItem);
