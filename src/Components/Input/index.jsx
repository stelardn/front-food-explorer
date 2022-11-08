import { Container } from "./styles";

export function Input({ label, placeholder, ...rest }) {
    return (
        <Container>
            <label>
                {label}
            </label>
            <input placeholder={placeholder} />
        </Container>
    )
}