import { getVisibleContacts } from "./redux/phonebook/phonebook-selectors";
import { useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import { Wrapper, Title, TitleContacts, P } from "./App.styled";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";

export default function App() {
	const contacts = useSelector(getVisibleContacts);
	return (
		<Wrapper>
			<Toaster />
			<Title>Phonebook</Title>
			<ContactForm />
			<TitleContacts>Contacts</TitleContacts>
			<Filter />
			{contacts.length > 0 ? (
				<ContactList contacts={contacts} />
			) : (
				<P>Your phonebook is empty.</P>
			)}
		</Wrapper>
	);
}
