import { ContactType } from "./Contact.types";
import * as S from "./Contact.style";
import { useDeleteContact } from "./hooks/useDeleteContact";
interface ContactProps {
  contact: ContactType | null;
  closeContact: () => void;
}

export const Contact = ({ contact, closeContact }: ContactProps) => {
  const { deleteContact } = useDeleteContact(closeContact);

  if (!contact) return null;

  return (
    <div>
      <h3>Contact</h3>
      <S.ContactContainer>
        {Object.entries(contact).map(([contactField, fieldValue]) => (
          <S.ContactField key={contactField}>
            <h4>{`${contactField}:`}</h4>
            <p>{fieldValue}</p>
          </S.ContactField>
        ))}
      </S.ContactContainer>
      <div style={{ display: "flex", gap: "0.8rem" }}>
        <button onClick={closeContact}>Close contact</button>
        <button
          style={{ background: "red", color: "white" }}
          onClick={() => deleteContact(contact.phone)}
        >
          Delete contact
        </button>
      </div>
    </div>
  );
};
