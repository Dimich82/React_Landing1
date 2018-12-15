import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import styled from 'styled-components';

const Repair = styled.div`
	color: #ffffff;
	font-weight: 700;
	font-size: 40px;
	line-height: 50px;

	span
	{
		display: block;
		font-size: 24px;
		line-height: 30px;
	}
`

const OrderText = styled.div`
	color: #ffffff;
	font-weight: 300;
	font-size: 18px;
	line-height: 28px;
	padding-top: 55px;
	padding-bottom: 45px;
`

const OrderButton = styled.button`
	width: 247px;
	height: 67px;
	background-color: #ffa14b;
	border-radius: 30px;
	color: #ffffff;
	font-size: 18px;
	font-weight: bold;
`

class Main extends Component
{
	constructor(props)
	{
		super(props);
		this.sendOrder = this.sendOrder.bind(this);
	}

	sendOrder()
	{
		alert('SEND order');
	}

	render()
	{
		return (
			<Row>
				<Col lg = {5}>
					<Repair>
						Качественные приманки
						<span>для вашего улова</span>
					</Repair>

					<OrderText>
						Оставьте заявку, и Вы получите джиг головку для приманок бесплатно
					</OrderText>

					<OrderButton onClick = {this.sendOrder}>Отправить заявку</OrderButton>
				</Col>

				<Col lg = {6} lgOffset = {1}>

				</Col>
			</Row>
		)
	}
}

export default Main;
