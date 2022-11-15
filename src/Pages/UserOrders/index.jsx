import { useEffect, useState } from "react";

import { Container, Main } from "./styles";

import {Header} from '../../Components/Header';
import {Footer} from '../../Components/Footer';

import {mockUser} from '../../../mockData';

export function UserOrders() {

    const [user, setUser] = useState(mockUser);

    useEffect((() => {
        setUser(mockUser);
    }), []);


    return (
        <Container>
            <Header />
            <Main>
                <h2>Pedidos</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Status</th>
                            <th>Código</th>
                            <th>Detalhamento</th>
                            <th>Data e hora</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user.orders.map(order => (
                            <tr key={String(order.id)}>
                                <td key={`${String(order.id)}.st`}>{order.status}</td>
                                <td key={`${String(order.id)}.id`}>{order.id}</td>
                                <td key={`${String(order.id)}.its`}>
                                    {order.items.map(item => (
                                        `${item.quantity} x ${item.name}, `
                                        )
                                    )}
                                </td>
                                <td key={`${String(order.id)}.dt`}>{order.updated_at}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Main>
            <Footer />
        </Container>
    )
}