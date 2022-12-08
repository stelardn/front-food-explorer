import { Container } from "./styles";

export function LinkButton({ icon: Icon, onClick, content, ...rest }) {
  return (
    <Container onClick={onClick} {...rest}>
      {Icon && <Icon />}
      {content}
    </Container>
  );
}
