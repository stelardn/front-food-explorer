import { useEffect, useState } from "react";

import { Container, MyOrder, OrderItem, Payment, SVGPaymentTemplate, CreditPayment } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Input } from '../../components/Input';
import { TextButton } from "../../components/TextButton";

import { FiCreditCard, FiClock, FiCheckCircle } from "react-icons/fi";
import { BsXDiamond}  from 'react-icons/bs';
import { TfiReceipt } from "react-icons/tfi";
import { CiForkAndKnife } from 'react-icons/ci'


import mealImg from '../../assets/pic1.png';
import { mockUser } from '../../../mockData';
import qrCode from '../../assets/qrcode.png';




export function ViewOrder(){

    const [order, setOrder] = useState(mockUser.orders[0]);
    const [paymentStatus, setPaymentStatus] = useState('delivered');
    const [status, setStatus] = useState(mockUser.orders[0].status);

    function handleSelectPayment(method){
		if(paymentStatus === 'delivered' || paymentStatus === 'paid'){
			return
		}
		
        if(method === paymentStatus) {
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



    useEffect(() => {
		switch(status){
			case(2): {
				setPaymentStatus('paid');
			}
			break;
			case(3): {
				setPaymentStatus('delivered');
			}
			break;
			default: {
				setPaymentStatus('');
			}
		}
    }, [status]);


    return (
        <Container>
            <Header/>
            <main>
                <MyOrder>
                    <h2>Meu pedido</h2>
                    <div id="items-wrapper">
                        {
                            order.items.map(item => (
                                <OrderItem key={String(item.id)}>
                                    <img src={mealImg} alt={`Imagem de ${item.name}.`} />
                                    <div className="item-details">
                                        <p>
                                            {item.quantity} x {item.name}
                                            <span>R$ {item.price}</span>
                                        </p>
                                        <button>Excluir</button>
                                    </div>
                                </OrderItem>
                            ))
                        }
                    </div>
                    <strong>Total: R$ {order.price}</strong>
                </MyOrder>
                <Payment>
                    <h2>Pagamento</h2>
                    <div id="display-payment">
                        <div id="select-payment">
                            <button id="pix-button" onClick={() => handleSelectPayment('pix')}>
                                <BsXDiamond/>
                                PIX
                            </button>
                            <button id='credit-button' onClick={() => handleSelectPayment('credit')}>
                                <FiCreditCard/>
                                Crédito
                            </button>
						</div>
						<div id="current-payment">
							{(() => {
								switch(paymentStatus) {
									case('pix'): {
											return (
												<img src={qrCode} />
											)
										}
									break;
									case('credit'): {
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

									case('paid'): {
										return (
											<SVGPaymentTemplate>
												<FiCheckCircle size={128} />
												<p>Pagamento aprovado!</p>
											</SVGPaymentTemplate>
										)
									}

									case('delivered'): {
										return (
											<SVGPaymentTemplate>
												<CiForkAndKnife size={128} />
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
            </main>
            <Footer/>
        </Container>
    )
}