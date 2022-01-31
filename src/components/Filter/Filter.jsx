import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/phonebook/phonebook-actions";
import { getFilter } from "../../redux/phonebook/phonebook-selectors";

import React from "react";
import { nanoid } from "nanoid";
import { Label, Input } from "./Filter.styled";

export default function Filter() {
	const dispatch = useDispatch();
	const filter = useSelector(getFilter);

	const onChange = (value) => dispatch(changeFilter(value));

	const handleFilterChange = (event) => {
		const { value } = event.target;
		onChange(value.toLowerCase());
	};

	const filterInputId = nanoid();
	return (
		<Label htmlFor={filterInputId}>
			<Input
				type="text"
				name="name"
				value={filter}
				id={filterInputId}
				onChange={handleFilterChange}
				placeholder="Find contacts by name"
			/>
		</Label>
	);
}
