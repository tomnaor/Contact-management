import { useState } from "react";
import { ContactType } from "../../Contact/Contact.types";

export const useContact = () => {
  const [selectedContact, setSelectedContact] = useState<ContactType | null>(
    null
  );

  const handleSelectContact = (contact: ContactType) => {
    setSelectedContact(contact);
  };

  const closeContact = () => {
    setSelectedContact(null);
  };

  return {
    selectedContact,
    handleSelectContact,
    closeContact,
  };
};
