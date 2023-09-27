import { Contact } from "../Contact/Contact";
import { ContactsTable } from "../ContactsTable/ContactsTable";
import { useContact } from "./hooks/useContact";

export const Contacts = () => {
  const { selectedContact, handleSelectContact } = useContact();

  return (
    <div>
      <ContactsTable handleSelectContact={handleSelectContact} />
      <Contact contact={selectedContact} />
    </div>
  );
};
