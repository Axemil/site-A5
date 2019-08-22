import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faBars,
  faTimes
} from "@fortawesome/free-solid-svg-icons";

const showSide = () => 
  document.querySelector(".side-bar").classList.toggle("side-bar__active")

const Header = () => {
  return (
    <header className="border-bottom shadow-sm">
      <Container className="container__section">
        <Row>
          <Col md={4} sm={4} xs={4}>
            <div className="logo">logo</div>
          </Col>
          <Col md={8} sm={8} xs={8} className="nav-bar">
            <Nav className="nav-bar__desktop">
              <NavLink
                to="/Главная"
                className="nav-bar__Link"
                activeClassName="nav-bar__Link-active"
              >
                Главная
              </NavLink>
              <NavLink
                to="/Заказ"
                className="nav-bar__Link"
                activeClassName="nav-bar__Link-active"
              >
                Заказ
              </NavLink>
              <NavLink
                to="/Цены"
                className="nav-bar__Link"
                activeClassName="nav-bar__Link-active"
              >
                Цены
              </NavLink>
              <NavLink
                to="/Оплата"
                className="nav-bar__Link"
                activeClassName="nav-bar__Link-active"
              >
                Оплата
              </NavLink>
              <NavLink
                className="nav-bar__Link"
                activeClassName="nav-bar__Link-active"
              >
                <div className="nav_bar__text">
                  Технические услуги <FontAwesomeIcon icon={faCaretDown} />
                </div>
                <div className="nav-bar__Dropdown">
                  <NavLink
                    style={{ textDecoration: "none", color: "rgb(37, 37, 37)" }}
                    className="nav-bar__Dropdown-item"
                  >
                    Обследование конструктивных элементов зданий
                  </NavLink>
                  <NavLink
                    style={{ textDecoration: "none", color: "rgb(37, 37, 37)" }}
                    className="nav-bar__Dropdown-item"
                  >
                    Обследование внутренних и внешних сетей зданий
                  </NavLink>
                  <NavLink
                    style={{ textDecoration: "none", color: "rgb(37, 37, 37)" }}
                    className="nav-bar__Dropdown-item"
                  >
                    Проектирование пожарных систем
                  </NavLink>
                  <NavLink
                    style={{ textDecoration: "none", color: "rgb(37, 37, 37)" }}
                    className="nav-bar__Dropdown-item"
                  >
                    Разработка планов эвакуации
                  </NavLink>
                  <NavLink
                    style={{ textDecoration: "none", color: "rgb(37, 37, 37)" }}
                    className="nav-bar__Dropdown-item"
                  >
                    Разработка сетей
                  </NavLink>
                </div>
              </NavLink>
            </Nav>
            <div className="side-bar__button">
              <FontAwesomeIcon onClick={showSide} icon={faBars} />
            </div>
            <div className="side-bar shadow-sm">
              <div className="side-bar__close">
                <FontAwesomeIcon onClick={showSide} icon={faTimes} />
              </div>
              <div className="side-bar__list">
                <NavLink>Главная</NavLink>
                <NavLink>Заказ</NavLink>
                <NavLink>Цены</NavLink>
                <NavLink>Оплата</NavLink>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
