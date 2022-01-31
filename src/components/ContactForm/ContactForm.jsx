import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import propTypes from "prop-types";
import { Form, Label, Input, Button } from "./ContactForm.styled";
import { addContacts } from "../../redux/phonebook/phonebook-actions.js";
import { nanoid } from "nanoid";
export default function ContactsForm() {
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const { contacts } = useSelector((state) => state);
	const dispatch = useDispatch();

	const onAddContacts = (name, phone) => dispatch(addContacts(name, phone));

	const handleSubmit = (e) => {
		e.preventDefault();

		const isAdded = (name) =>
			contacts.map((contact) => contact.name).includes(name);

		if (isAdded(name)) {
			return alert(`${name} is already in contacts`);
		} else {
			onAddContacts(name, phone);
		}

		setName("");
		setPhone("");
	};
	const nameInputId = nanoid();
	const numberInputId = nanoid();

	return (
		<Form onSubmit={(e) => handleSubmit(e)}>
			<Label htmlFor={nameInputId}>
				Name
				<Input
					type="text"
					name="name"
					id={nameInputId}
					value={name}
					onChange={(e) => setName(e.target.value)}
					pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
					title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
					required
					placeholder="Andrei Potapov"
				/>
			</Label>
			<Label htmlFor={numberInputId}>
				Phone
				<Input
					type="tel"
					name="phone"
					id={numberInputId}
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
					pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
					title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
					required
					placeholder="111-11-11"
				/>
			</Label>
			<Button type="submit">Add contact</Button>
		</Form>
	);
}

ContactsForm.propTypes = {
	onAddContacts: propTypes.func,
};
