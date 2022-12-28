import { FaCircle } from "react-icons/fa";
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";

export function OrderItemMobile({ order }) {
    const navigate = useNavigate();

    function goToOrder() {
        navigate(`/orders/${order.id}`);
    }

    return (
        <Container onClick={goToOrder}>
            {
                (() => {
                    switch (order.status) {
                        case (3): {
                            return (
                                <div className="status" key={`${String(order.id)}.st`}>
                                    <FaCircle size={8} color='orange' />
                                    <h3>Preparando</h3>
                                </div>
                            )
                        }
                            break;
                        case (4): {
                            return (
                                <div className="status" key={`${String(order.id)}.st`}>
                                    <FaCircle size={8} color='green' />
                                    <h3>Entregue</h3>
                                </div>
                            )
                        }
                            break;
                        default: {
                            return (
                                <div className="status" key={`${String(order.id)}.st`}>
                                    <FaCircle size={8} color='red' />
                                    <h3>Pendente</h3>
                                </div>
                            )
                        }
                            break;
                    }
                })()
            }
            <div id="details">
                <p>Nº {order.id}</p>
                <span>{order.created_at}</span>
            </div>
            <ul id="items">
                {order.items && order.items.map((item, index) => (
                    index === order.items.length - 1 ? <span key={String(`it.${index}`)}>{item.quantity} x {item.name}</span> : <span key={String(`it.${index}`)}>{item.quantity} x {item.name}, </span>
                )
                )}
            </ul>
        </Container>
    )
}