import { useEffect, useState } from "react";

import { Container, Main } from "./styles";

import {Header} from '../../Components/Header';
import {Footer} from '../../Components/Footer';

import {mockUser} from '../../../mockData';

import {FaCircle} from 'react-icons/fa';

export function UserOrders() {

    const [user, setUser] = useState(mockUser);

    useEffect((() => {
        setUser(mockUser);
    }), []);


    return (
        <Container>
            <Header />
            <Main>
                <h1>Pedidos</h1>
				<div className="table-scroll">
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
									<td className="status" key={`${String(order.id)}.st`}>
									{
										(() => {
											switch(order.status) {
													
												case('Em andamento'): {
														return (
															<FaCircle size={8} color='orange' />
														)
													}
												break;
													
												case('Entregue'): {
													return (
														<FaCircle size={8} color='green' />
													)
												}
												break;
												
												default: {
														return (
															<FaCircle size={8} color='red' />
														)
													}
												break;
												}
										})()  
									}  
										{order.status}
									</td>
									<td className="code" key={`${String(order.id)}.id`}>
										{order.id}
									</td>
									<td className="items" key={`${String(order.id)}.its`}>
										{order.items.map((item, index) => (
											index === order.items.length - 1 ? <span key={String(`it.${index}`)}>{item.quantity} x {item.name}</span> : <span key={String(`it.${index}`)}>{item.quantity} x {item.name}, </span>
											)
										)}
									</td>
									<td className="datetime" key={`${String(order.id)}.dt`}>
										{order.updated_at}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
            </Main>
            <Footer />
        </Container>
    )
}