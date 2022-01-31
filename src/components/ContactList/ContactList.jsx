import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/phonebook/phonebook-actions";

import React from "react";
import { Ul, Li, Button, P } from "./ContactList.styled";

export default function ContactList({ contacts }) {
	const dispatch = useDispatch();

	const onDelete = (id) => dispatch(deleteContact(id));

	return (
		<Ul>
			{contacts.map(({ id, name, number }) => (
				<Li key={id}>
					<P>
						{name}: {number}
					</P>
					<Button type="button" onClick={() => onDelete(id)}>
						Delete
					</Button>
				</Li>
			))}
		</Ul>
	);
}
