import { Container, MyOrder, OrderItem, Payment, CheckoutPayment, CreditPayment } from "./styles";

import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { useEffect, useState } from "react";

import {Input} from '../../Components/Input';

import {mockUser} from '../../../mockData';

import mealImg from '../../assets/pic1.png';
import qrCode from '../../assets/qrcode.png';

import pixIcon from '../../assets/pix.svg';
import { FiCreditCard, FiClock } from "react-icons/fi";
import {BsXDiamond} from 'react-icons/bs';
import { TfiReceipt } from "react-icons/tfi";

import { TextButton } from "../../Components/TextButton";




export function ViewOrder(){

    const [order, setOrder] = useState(mockUser.orders[1]);
    const [paymentMethod, setPaymentMethod] = useState('');
    const [paid, setPaid] = useState(false);

    function handleSelectPayment(method){
        if(method === paymentMethod) {
            setPaymentMethod('');
			const buttonToSelect = document.getElementById(`${method}-button`);
			buttonToSelect.classList.remove('selected');

        } else {
			const currentlySelectedButton = document.getElementsByClassName('selected');
			if (currentlySelectedButton[0]) {
				currentlySelectedButton[0].classList.remove('selected');
			}
			
			const buttonToSelect = document.getElementById(`${method}-button`);
			buttonToSelect.classList.add('selected');

            setPaymentMethod(method);
        }
    }



    useEffect(() => {

    }, []);


    return (
        <Container>
            <Header/>
            <main>
                <MyOrder>
                    <h2>Meu pedido</h2>
                    <div id="items-wrapper">
                        {
                            order.items.map(item => (
                                <OrderItem>
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
								switch(paymentMethod) {
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

									default: {
										return (
											<CheckoutPayment>
												<FiClock size={128} />
												<p>Aguardando pagamento no caixa</p>
											</CheckoutPayment>
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