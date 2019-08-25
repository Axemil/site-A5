import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faBars,
  faTimes,
  faHome,
  faDollarSign,
  faCommentDollar,
  faShoppingCart
} from "@fortawesome/free-solid-svg-icons";

const showSide = () =>
  document.querySelector(".side-bar").classList.toggle("side-bar__active");

const Header = () => {
  return (
    <header className="border-bottom shadow-sm">
      <Container>
        <Row>
          <Col md={4} sm={4} xs={4}>
            <div className="logo">logo</div>
          </Col>
          <Col md={8} sm={8} xs={8} className="nav-bar">
            <Nav className="nav-bar__desktop">
              <NavLink to="/" className="nav-bar__Link">
                <FontAwesomeIcon icon={faHome} /> Главная
              </NavLink>
              <NavLink to="/Заказ" className="nav-bar__Link">
                <FontAwesomeIcon icon={faShoppingCart} /> Заказ
              </NavLink>
              <NavLink to="/Цены" className="nav-bar__Link">
                <FontAwesomeIcon icon={faDollarSign} /> Цены
              </NavLink>
              <NavLink to="/Оплата" className="nav-bar__Link">
                <FontAwesomeIcon icon={faCommentDollar} /> Оплата
              </NavLink>
              <NavLink className="nav-bar__Link">
                <div className="nav_bar__text">
                  Технические услуги <FontAwesomeIcon icon={faCaretDown} />
                </div>
                <div className="nav-bar__Dropdown">
                  <NavLink
                    to="/Eng1"
                    style={{ textDecoration: "none", color: "rgb(37, 37, 37)" }}
                    className="nav-bar__Dropdown-item"
                  >
                    Обследование конструктивных элементов зданий
                  </NavLink>
                  <NavLink
                    to="/Eng2"
                    style={{ textDecoration: "none", color: "rgb(37, 37, 37)" }}
                    className="nav-bar__Dropdown-item"
                  >
                    Обследование внутренних сетей зданий
                  </NavLink>
                  <NavLink
                    to="/Eng3"
                    style={{ textDecoration: "none", color: "rgb(37, 37, 37)" }}
                    className="nav-bar__Dropdown-item"
                  >
                    Обследование внутриплощадочных сетей
                  </NavLink>
                  <NavLink
                    to="/Eng4"
                    style={{ textDecoration: "none", color: "rgb(37, 37, 37)" }}
                    className="nav-bar__Dropdown-item"
                  >
                    Проектирование систем пожарной безопасности
                  </NavLink>
                  <NavLink
                    to="/Eng5"
                    style={{ textDecoration: "none", color: "rgb(37, 37, 37)" }}
                    className="nav-bar__Dropdown-item"
                  >
                    Разработка планов эвакуации согласно ГОСТ
                  </NavLink>
                  <NavLink
                    to="/Eng6"
                    style={{ textDecoration: "none", color: "rgb(37, 37, 37)" }}
                    className="nav-bar__Dropdown-item"
                  >
                    Проектирование слаботочных систем
                  </NavLink>
                  <NavLink
                    to="/Eng7"
                    style={{ textDecoration: "none", color: "rgb(37, 37, 37)" }}
                    className="nav-bar__Dropdown-item"
                  >
                    Архитектурное разработка инженерных сетей.
                  </NavLink>
                  <NavLink
                    to="/Eng8"
                    style={{ textDecoration: "none", color: "rgb(37, 37, 37)" }}
                    className="nav-bar__Dropdown-item"
                  >
                    Проведение НИОКР в оснований
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
                <NavLink to="/">Главная</NavLink>
                <NavLink to="/Заказ">Заказ</NavLink>
                <NavLink to="/Цены">Цены</NavLink>
                <NavLink to="/Оплата">Оплата</NavLink>
                <p style={{ color: "$Orange", fontSize: "1rem" }}>
                  Технические услуги
                </p>
                <ul style={{ listStyle: "none" }}>
                  <li>
                    <NavLink
                      to="/Eng1"
                      style={{
                        textDecoration: "none",
                        color: "rgb(37, 37, 37)",
                        color: "$Orange",
                        fontSize: "0.7rem",
                        textAlign: "left"
                      }}
                    >
                      Обследование конструктивных элементов зданий
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/Eng2"
                      style={{
                        textDecoration: "none",
                        color: "rgb(37, 37, 37)",
                        color: "$Orange",
                        fontSize: "0.7rem",
                        textAlign: "left"
                      }}
                    >
                      Обследование внутренних сетей зданий
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/Eng3"
                      style={{
                        textDecoration: "none",
                        color: "rgb(37, 37, 37)",
                        color: "$Orange",
                        fontSize: "0.7rem",
                        textAlign: "left"
                      }}
                    >
                      Обследование внутриплощадочных сетей
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/Eng4"
                      style={{
                        textDecoration: "none",
                        color: "rgb(37, 37, 37)",
                        color: "$Orange",
                        fontSize: "0.7rem",
                        textAlign: "left"
                      }}
                    >
                      Проектирование систем пожарной безопасности
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/Eng5"
                      style={{
                        textDecoration: "none",
                        color: "rgb(37, 37, 37)",
                        color: "$Orange",
                        fontSize: "0.7rem",
                        textAlign: "left"
                      }}
                    >
                      Разработка планов эвакуации согласно ГОСТ
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/Eng6"
                      style={{
                        textDecoration: "none",
                        color: "rgb(37, 37, 37)",
                        color: "$Orange",
                        fontSize: "0.7rem",
                        textAlign: "left"
                      }}
                    >
                      Проектирование слаботочных систем
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/Eng7"
                      style={{
                        textDecoration: "none",
                        color: "rgb(37, 37, 37)",
                        color: "$Orange",
                        fontSize: "0.7rem",
                        textAlign: "left"
                      }}
                    >
                      Архитектурное разработка инженерных сетей.
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/Eng8"
                      style={{
                        textDecoration: "none",
                        color: "rgb(37, 37, 37)",
                        color: "$Orange",
                        fontSize: "0.7rem",
                        textAlign: "left"
                      }}
                    >
                      Проведение НИОКР в оснований
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
