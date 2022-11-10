import { Container } from "./styles";

export function TextButton({ content, icon: Icon, ...rest }) {
    return (
        <Container {...rest}>
            {Icon && <Icon size={20} />}
            {content}
        </Container>
    )
}