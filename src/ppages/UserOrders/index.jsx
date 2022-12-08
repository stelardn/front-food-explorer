import { useEffect, useState } from "react";

import { Container, MainWide, MainMobile } from "./styles";

import {Header} from '../../components/Header';
import {Footer} from '../../components/Footer';
import {OrderItemMobile} from '../../components/OrderItemMobile';

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
            <MainWide>
                <h1>Pedidos</h1>
				<div className="table-scroll">
					<table>
						<thead>
							<tr>
								<th className="status">Status</th>
								<th>Código</th>
								<th>Detalhamento</th>
								<th>Data e hora</th>
							</tr>
						</thead>
						<tbody>
							{user.orders.map(order => (
								<tr key={String(order.id)}>
									{
										(() => {
											switch(order.status) {
												
												case(3): {
													return (
															<td className="status" key={`${String(order.id)}.st`}>
																<FaCircle size={8} color='orange' />
																Preparando
															</td>
														)
													}
												break;
													
												case(4): {
													return (
															<td className="status" key={`${String(order.id)}.st`}>
																<FaCircle size={8} color='green' />
																Entregue
															</td>
													)
												}
												break;
												
												default: {
														return (
															<td className="status" key={`${String(order.id)}.st`}>
																<FaCircle size={8} color='red' />
																Pendente
															</td>
														)
													}
												break;
												}
										})()  
									}  
									
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
            </MainWide>
			<MainMobile>
				<h1>Pedidos</h1>
				{
					user.orders.map(order => (
						<OrderItemMobile order={order} />
					))
				}
			</MainMobile>
            <Footer />
        </Container>
    )
}