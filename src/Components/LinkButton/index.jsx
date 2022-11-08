import { Container } from "./styles";

export function LinkButton({ icon: Icon, content, ...rest }) {
    return (
        <Container {...rest}>
            {Icon && <Icon />}
            {content}
        </Container>
    )
}