import * as S from "./ContactsTable.style";
import { contactsTableColumns } from "./constants/contactsTableColumns";
import { ContactType } from "../Contact/Contact.types";
import useLocalStorage from "use-local-storage";

interface ContactsTableProps {
  handleSelectContact: (contact: ContactType) => void;
}

export const ContactsTable = ({ handleSelectContact }: ContactsTableProps) => {
  const [contactsJson] = useLocalStorage("contacts", "");

  const contacts = JSON.parse(contactsJson) as ContactType[];

  return (
    <div>
      <h4>Contacts table</h4>
      <S.Table>
        <thead>
          <tr>
            {contactsTableColumns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr
              key={contact.phone}
              onClick={() => handleSelectContact(contact)}
            >
              <td>{contact.fullName}</td>
              <td>{contact.email}</td>
              <td>{contact.age}</td>
            </tr>
          ))}
        </tbody>
      </S.Table>
    </div>
  );
};
