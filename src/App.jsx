import { useEffect } from "react";
import { connect } from "react-redux";
import { Title, TitleContacts, Wrapper, P } from "./App.styled";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactsList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";

function App({ contacts }) {
	useEffect(() => {
		localStorage.setItem("contacts", JSON.stringify(contacts));
	}, [contacts]);

	return (
		<Wrapper>
			<Title>Phonebook</Title>
			<ContactForm />
			<TitleContacts>Contacts</TitleContacts>
			{contacts.length > 1 && <Filter />}
			{contacts.length > 0 ? <ContactsList /> : <P>Your phonebook is empty.</P>}
		</Wrapper>
	);
}

const mapStateToProps = (state) => ({
	contacts: state.contacts,
});

export default connect(mapStateToProps)(App);
