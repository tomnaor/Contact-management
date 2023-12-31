import { Contact } from "../Contact/Contact";
import { ContactsTable } from "../ContactsTable/ContactsTable";
import { ContactForm } from "../ContactForm/ContactForm";
import * as S from "./Contacts.style";
import { useContact } from "./hooks/useContact";

export const Contacts = () => {
  const { selectedContact, handleSelectContact, closeContact } = useContact();

  return (
    <S.ContactsContainer>
      <ContactsTable handleSelectContact={handleSelectContact} />
      <Contact contact={selectedContact} closeContact={closeContact} />
      <ContactForm />
    </S.ContactsContainer>
  );
};
