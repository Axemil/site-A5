import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className="border-bottom shadow-sm">
      <Container className='container__section'>
        <Row>
          <Col md={4} sm={4} xs={4}>
            <div className="logo">logo</div>
          </Col>
          <Col md={8} sm={8} xs={8} className="nav-bar">
            <Nav>
            <NavLink to="/Главная" className="nav-bar__Link" activeClassName="nav-bar__Link-active">Главная</NavLink>
            <NavLink to="/Заказ" className="nav-bar__Link" activeClassName="nav-bar__Link-active">Заказ</NavLink>
            <NavLink to="/Цены" className="nav-bar__Link" activeClassName="nav-bar__Link-active">Цены</NavLink>
            <NavLink to="/Оплата" className="nav-bar__Link" activeClassName="nav-bar__Link-active">Оплата</NavLink>
            <NavLink to="/Услуги" className="nav-bar__Link" activeClassName="nav-bar__Link-active">Инженерные услуги</NavLink>
            </Nav>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
