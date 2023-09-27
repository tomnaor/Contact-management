import useLocalStorage from "use-local-storage";
import { ContactType } from "../Contact.types";

export const useDeleteContact = (closeContact: () => void) => {
  const [contacts, setContacts] = useLocalStorage("contacts", "");

  const deleteContact = (phone: string) => {
    const oldContacts: ContactType[] = JSON.parse(contacts);

    const newContacts = oldContacts.filter(
      (contact: { phone: string }) => contact.phone !== phone
    );

    setContacts(JSON.stringify(newContacts));
    closeContact();
    alert("Contact deleted successfully");
  };

  return {
    deleteContact,
  };
};
