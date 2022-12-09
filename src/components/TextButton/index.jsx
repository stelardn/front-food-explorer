import { Container } from "./styles";

export function TextButton({ content, icon: Icon, onClick, ...rest }) {
    return (
        <Container onClick={onClick} {...rest}>
            {Icon && <Icon size={20} />}
            {content}
        </Container>
    )
}