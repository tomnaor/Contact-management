import { SubmitHandler, useForm } from "react-hook-form";
import { ContactType } from "../../Contact/Contact.types";
import useLocalStorage from "use-local-storage";

export const useCreateContactForm = () => {
  const [contacts, setContacts] = useLocalStorage("contacts", "");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm<ContactType>();

  const onSubmitContact: SubmitHandler<ContactType> = (data) => {
    const oldContacts: ContactType[] = JSON.parse(contacts);

    const isContactExist = oldContacts.some(
      (contact: ContactType) => contact.phone === data.phone
    );

    if (isContactExist) {
      setError("phone", {
        message: "Phone already exist in contacts",
        type: "exists",
      });
      return;
    }

    const newContacts = oldContacts?.length ? [...oldContacts, data] : [data];
    setContacts(JSON.stringify(newContacts));
    reset();
  };

  return {
    onSubmitContact,
    register,
    handleSubmit,
    errors,
  };
};
