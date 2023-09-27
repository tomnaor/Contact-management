import { ContactType } from "./Contact.types";
import * as S from "./Contact.style";
interface ContactProps {
  contact: ContactType | null;
  closeContact: () => void;
}

export const Contact = ({ contact, closeContact }: ContactProps) => {
  if (!contact) return null;

  return (
    <div>
      <h3>Contact</h3>
      <S.ContactContainer>
        {Object.entries(contact).map(([contactField, fieldValue]) => (
          <S.ContactField>
            <h4>{`${contactField}:`}</h4>
            <p>{fieldValue}</p>
          </S.ContactField>
        ))}
      </S.ContactContainer>
      <button onClick={closeContact}>Close contact</button>
    </div>
  );
};
