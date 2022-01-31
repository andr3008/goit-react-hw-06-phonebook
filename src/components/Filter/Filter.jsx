import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/phonebook/phonebook-actions";
import { Label, Input } from "./Filter.styled";
import { nanoid } from "nanoid";

export default function Filter() {
	const filterInputId = nanoid();

	const filter = useSelector((state) => state.filter);
	const dispatch = useDispatch();

	const handleChangeFilter = (e) => dispatch(changeFilter(e.target.value));
	return (
		<Label htmlFor={filterInputId} value={filter}>
			Find contacts by name
			<Input
				type="text"
				name="name"
				value={filter}
				id={filterInputId}
				onChange={handleChangeFilter}
				placeholder="Andrei Potapov"
			/>
		</Label>
	);
}
