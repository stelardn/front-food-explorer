import { Container } from "./styles";

export function TextButton({ content, ...rest }) {
    return (
        <Container {...rest}>
            {content}
        </Container>
    )
}