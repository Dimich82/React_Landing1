import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MeetAll />
      </div>
    );
  }
}

function Hello()
{
  let str = "Dimich 1";
  return (<h1>Hello {str}</h1>)
}

function SayFullName(props)
{
  return (
    <div>
      <h1>Я {props.name} {props.surname}</h1>
      <p><a href = {props.link}>LINK</a></p>
    </div>
  )
}

function MeetAll()
{
  return (
    <div>
      <Hello />
      <SayFullName name="Dimich" surname="Dimichev" link="yandex.ru" />
      <SayFullName name="Aaa" surname="Bbb" link="yandex.ru" />
    </div>
  )
}

export default App;