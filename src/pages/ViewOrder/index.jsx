import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import { Container, MyOrder, Payment, SVGPaymentTemplate, CreditPayment } from "./styles";

import { Header } from "../../components/Header";
import { HeaderAdm } from "../../components/HeaderAdm";
import { Footer } from "../../components/Footer";
import { Input } from '../../components/Input';
import { TextButton } from "../../components/TextButton";
import { OrderItem } from "../../components/OrderItem";


import { FiCreditCard, FiClock, FiCheckCircle } from "react-icons/fi";
import { BsXDiamond } from 'react-icons/bs';
import { TfiReceipt } from "react-icons/tfi";
import { ImSpoonKnife } from 'react-icons/im';

import qrCode from '../../assets/qrcode.png';

export function ViewOrder() {

	const params = useParams();
	const { user } = useAuth();

	const [currentUser, setCurrentUser] = useState(user);
	const [order, setOrder] = useState([]);
	const [paymentStatus, setPaymentStatus] = useState('delivered');
	const [status, setStatus] = useState(0);

	async function fetchData() {
		const orderResponse = await api.get(`/orders/${params.id}`);

		setOrder(orderResponse.data)
		setStatus(orderResponse.data.status);
	}

	async function handleRemoveItem(item) {
		if (status === 3 || status === 4) {
			return alert('Não é possível editar um pedido já pago.')
		}
		const confirmRemove = window.confirm(`Deseja remover ${item.name} do pedido?`);

		if (confirmRemove) {
			const response = await api.put(`/orders/${params.id}`, { meal_id: item.id, quantity: 0 });

			alert(response.data);

			await fetchData();

			return;
		}
	}


	function handleSelectPayment(method) {
		if (paymentStatus === 'delivered' || paymentStatus === 'paid') {
			return
		}

		if (method === paymentStatus) {
			setPaymentStatus('');
			const buttonToSelect = document.getElementById(`${method}-button`);
			buttonToSelect.classList.remove('selected');

		} else {
			const currentlySelectedButton = document.getElementsByClassName('selected');
			if (currentlySelectedButton[0]) {
				currentlySelectedButton[0].classList.remove('selected');
			}

			const buttonToSelect = document.getElementById(`${method}-button`);
			buttonToSelect.classList.add('selected');

			setPaymentStatus(method);
		}
	}

	async function handleConfirmOrder() {
		try {
			if (order.items.length > 0) {
				await api.patch(`orders/${params.id}`, { status: 2 });
				setStatus(2);
				return alert('Pedido enviado! Aguarde a confirmação pelo restaurante...');
			}

			return alert('O carrinho está vazio! Adicione algo para enviar o pedido.');
		} catch {
			return alert('Algo deu errado com o envio do seu pedido. Aguarde para tentar novamente.')
		}
	}

	useEffect((() => {
		fetchData();
	}), []);

	useEffect(() => {
		switch (status) {
			case (3): {
				setPaymentStatus('paid');
			}
				break;
			case (4): {
				setPaymentStatus('delivered');
			}
				break;
			default: {
				setPaymentStatus('');
			}
		}
	}, [status, order]);


	return (
		<Container>
			{currentUser.isAdmin ? <HeaderAdm /> : <Header />}
			<main>
				<MyOrder>
					<h2>Meu pedido</h2>
					<div id="items-wrapper">
						{
							order.items &&
							order.items.map(item => (
								<OrderItem key={String(item.id)} item={item} onClick={() => handleRemoveItem(item)} />
							))
						}
					</div>
					<strong>Total: R$ {order && order.price}</strong>
				</MyOrder>
				<div id="right">
					<Payment>
						<h2>Pagamento</h2>
						<div id="display-payment">
							<div id="select-payment">
								<button id="pix-button" onClick={() => handleSelectPayment('pix')}>
									<BsXDiamond />
									PIX
								</button>
								<button id='credit-button' onClick={() => handleSelectPayment('credit')}>
									<FiCreditCard />
									Crédito
								</button>
							</div>
							<div id="current-payment">
								{(() => {
									switch (paymentStatus) {
										case ('pix'): {
											return (
												<img src={qrCode} />
											)
										}
											break;
										case ('credit'): {
											return (
												<CreditPayment>
													<Input
														label='Número do cartão'
														placeholder='0000 0000 0000 0000'
													/>
													<div id="credit-second-row">
														<Input
															label='Validade'
															placeholder='04/25'
														/>
														<Input
															label='CVC'
															placeholder='04/25'
														/>
													</div>
													<TextButton
														content='Finalizar pagamento'
														icon={TfiReceipt}
													/>
												</CreditPayment>
											)
										}
											break;

										case ('paid'): {
											return (
												<SVGPaymentTemplate>
													<FiCheckCircle size={128} />
													<p>Pagamento aprovado!</p>
												</SVGPaymentTemplate>
											)
										}

										case ('delivered'): {
											return (
												<SVGPaymentTemplate>
													<ImSpoonKnife size={128} />
													<p>Pedido entregue!</p>
												</SVGPaymentTemplate>
											)
										}
											break;
										default: {
											return (
												<SVGPaymentTemplate>
													<FiClock size={128} />
													<p>Aguardando pagamento no caixa.</p>
												</SVGPaymentTemplate>
											)
										}
											break;
									}

								})()}
							</div>
						</div>
					</Payment>
					<div id="status-btn">
						{status === 1 ? <TextButton content='Confirmar pedido' onClick={handleConfirmOrder} /> : <></>}

					</div>
				</div>
			</main>
			<Footer />
		</Container>
	)
}