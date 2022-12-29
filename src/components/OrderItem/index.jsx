import { api } from "../../services/api";

import { Container } from "./styles";

import picturePlaceHolder from '../../assets/empty-plate.png';


export function OrderItem({ item, onClick }) {
    const pictureUrl = item && item.picture ? `${api.defaults.baseURL}/files/${item.picture}` : picturePlaceHolder;

    return (
        <Container>
            <img src={pictureUrl} alt={`Imagem de ${item.name}.`} />
            <div className="item-details">
                <p>
                    {item.quantity} x {item.name}
                    <span>R$ {item.price}</span>
                </p>
                <button
                    onClick={onClick}
                >
                    Excluir
                </button>
            </div>
        </Container>
    )
}