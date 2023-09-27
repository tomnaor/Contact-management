import { useState } from "react";
import * as S from "./ContactsTable.style";
import { contactsTableColumns } from "./constants/contactsTableColumns";
import { Contact } from "./Contact.types";

const contacts: Contact[] = [
  {
    phone: "123456789",
    fullName: "John Doe",
    email: "johndoe@gmail.com",
    age: 24,
  },
];

export const ContactsTable = () => {
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  const handleContactClick = (contact: Contact) => {
    setSelectedContact(contact);
  };

  console.log(selectedContact);

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
            <tr key={contact.phone} onClick={() => handleContactClick(contact)}>
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
