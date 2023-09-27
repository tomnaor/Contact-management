import * as S from "./ContactsTable.style";
import { contactsTableColumns } from "./constants/contactsTableColumns";
import { ContactType } from "../Contact/Contact.types";

const contacts: ContactType[] = [
  {
    phone: "123456789",
    fullName: "John Doe",
    email: "johndoe@gmail.com",
    age: 24,
  },
];

interface ContactsTableProps {
  handleSelectContact: (contact: ContactType) => void;
}

export const ContactsTable = ({ handleSelectContact }: ContactsTableProps) => {
  return (
    <div>
      <p>Contacts table</p>
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
