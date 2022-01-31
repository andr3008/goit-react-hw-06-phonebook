import { useSelector, useDispatch } from "react-redux";
import { deleteContacts } from "../../redux/phonebook/phonebook-actions";
import PropTypes from "prop-types";
import { Ul, Li, Button, P } from "./ContactList.styled";

export default function ContactsList() {
	const { contacts, filter } = useSelector((state) => state);
	const dispatch = useDispatch();

	const onDeleteBtn = (id) => dispatch(deleteContacts(id));

	const filteredContacts = (contacts, filter) => {
		return contacts.filter((contact) =>
			contact.name.toLowerCase().includes(filter.toLowerCase())
		);
	};

	const filterContacts = filteredContacts(contacts, filter);

	return (
		<Ul>
			{filterContacts.map(({ id, name, phone }) => (
				<Li key={id}>
					<P>
						{name}: {phone}
					</P>
					<Button type="button" onClick={(e) => onDeleteBtn(id)}>
						Delete
					</Button>
				</Li>
			))}
		</Ul>
	);
}

ContactsList.propTypes = {
	onDeleteBtn: PropTypes.func,
	contacts: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			name: PropTypes.string,
			phone: PropTypes.string,
		})
	),
};
