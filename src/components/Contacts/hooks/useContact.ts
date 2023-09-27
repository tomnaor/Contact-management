import { useState } from "react";
import { ContactType } from "../../Contact/Contact.types";

export const useContact = () => {
  const [selectedContact, setSelectedContact] = useState<
    ContactType | undefined
  >();

  const handleSelectContact = (contact: ContactType) => {
    setSelectedContact(contact);
  };

  return {
    selectedContact,
    handleSelectContact,
  };
};
