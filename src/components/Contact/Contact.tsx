import { ContactType } from "./Contact.types";

interface ContactProps {
  contact?: ContactType;
}

export const Contact = ({ contact }: ContactProps) => {
  if (!contact) return null;

  return (
    <div>
      <p>Contact page</p>
      <p>{contact.fullName}</p>
    </div>
  );
};
