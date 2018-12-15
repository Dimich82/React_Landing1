import React, { Component } from 'react';
//import '../App.css';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import styled from 'styled-components';

const Repair = styled.div`
	color: #464646;
	font-size: 18px;
	font-weight: 300;
	line-height: 22px;
`

const WorkTime = styled.div`
	color: #2a2a2a;
	font-size: 12px;
	font-weight: 300;
	line-height: 24px;

	span
	{
		display: block;
		color: #464646;
		font-size: 21px;
		font-weight: 700;
	}
`

const Calls = styled.div`
	color: #2a2a2a;
	font-size: 12px;
	font-weight: 300;
	line-height: 24px;

	span
	{
		display: block;
		color: #464646;
		font-size: 21px;
		font-weight: 700;
	}
`

const CallButton = styled.button`
	weight: 176px;
	height: 48px;
	background-color: #3fc7db;
	border-radius: 30px;
	color: #ffffff;
	font-size: 14px;
	font-weight: 400;
`

class Address extends Component
{
	render()
	{
		return (
			<span>{this.props.addr}</span>
		)
	}
}

class Phone extends Component
{
	render()
	{
		return (
			<span>{this.props.phonenum}</span>
		)
	}
}

class Menu extends Component
{
	constructor(props)
	{
		super(props);
		this.askCall = this.askCall.bind(this);
	}

	askCall()
	{
		alert('ASK call');
	}

	render()
	{
		return (
			<Row>
				<Col lg = {3}>
					<Repair>Крутая резина для рыбалки</Repair>
				</Col>

				<Col lg = {3} lgOffset = {1}>
					<WorkTime>
						Пн-пт с 11 до 18, сб, вс - выходной
						<Address addr = "Караваевская 57" />
					</WorkTime>
				</Col>

				<Col lg = {3}>
					<Calls>
						Звонки принимаются 24 часа
						<Phone phonenum = "950-02-89" />
					</Calls>
				</Col>

				<Col lg = {2}>
					<CallButton onClick = {this.askCall}>Заказать звонок</CallButton>
				</Col>

			</Row>
		)
	}
}

export default Menu;
