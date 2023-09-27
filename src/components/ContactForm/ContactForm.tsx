import { useCreateContactForm } from "./hooks/useContactForm";
import * as S from "./ContactForm.style";

export const ContactForm = () => {
  const { onSubmitContact, handleSubmit, errors, register } =
    useCreateContactForm();

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h3>Create new contact</h3>
      <S.ContactForm onSubmit={handleSubmit(onSubmitContact)}>
        <S.InputField
          placeholder="Full name"
          {...register("fullName", { required: true })}
        />
        {errors.fullName && <span>Name is required</span>}
        <S.InputField
          placeholder="Phone number"
          {...register("phone", { required: true })}
        />
        {errors.phone?.type === "required" && (
          <span>Phone number is required</span>
        )}
        {errors.phone?.type === "exists" && "This phone number already exists"}
        <S.InputField placeholder="Email" {...register("email")} />
        <S.InputField placeholder="Age" {...register("age")} />
        <S.InputField placeholder="Notes" {...register("notes")} />

        <button type="submit">Save contact</button>
      </S.ContactForm>
    </div>
  );
};
