import { useDispatch } from "react-redux";
import { addContact } from "../../redux/phonebook/phonebook-actions";
import { useState } from "react";
import { nanoid } from "nanoid";
import { Form, Label, Input, Button } from "./ContactForm.styled";

export default function ContactForm() {
	const [name, setName] = useState("");
	const [number, setNumber] = useState("");

	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addContact({ name, number }));
		resetInput();
	};

	const resetInput = () => {
		setName("");
		setNumber("");
	};
	const nameInputId = nanoid();
	const numberInputId = nanoid();
	return (
		<Form onSubmit={handleSubmit}>
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
				Number
				<Input
					type="tel"
					name="number"
					id={numberInputId}
					value={number}
					onChange={(e) => setNumber(e.target.value)}
					pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
					title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
					required
					placeholder="111-11-11"
				/>
			</Label>
			<Button type="sumbit">Add contact</Button>
		</Form>
	);
}
