import { Container } from "./styles";

export function Input({ label, type, placeholder, ...rest }) {
  return (
    <Container>
      <label>{label}</label>
      {type === "textarea" ? (
        <textarea placeholder={placeholder} {...rest} />
      ) : (
        <input placeholder={placeholder} type={type} {...rest} />
      )}
    </Container>
  );
}
