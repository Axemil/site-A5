import React from "react";
import { Container, Row, Col, Card, Table } from "react-bootstrap";
import "../../styles/price.scss";
const Price = () => {
  return (
    <div>
      <Container>
        <Row className="rowStyles">
          <Card className="cardStyles" style={{ width: "350px" }}>
            <Card.Title className="CardTitle">
              Черно-белая печать / копирование
            </Card.Title>
            <Card.Body>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Кол-во экз.</th>
                    <th>А4</th>
                    <th>А3</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1-25</th>
                    <th>9 руб.</th>
                    <th>17 руб.</th>
                  </tr>
                  <tr>
                    <th>26-50</th>
                    <th>7 руб.</th>
                    <th>13 руб.</th>
                  </tr>
                  <tr>
                    <th>51-100</th>
                    <th>6 руб.</th>
                    <th>11 руб.</th>
                  </tr>
                  <tr>
                    <th>101-300</th>
                    <th>5 руб.</th>
                    <th>9 руб.</th>
                  </tr>
                  <tr>
                    <th>301-500</th>
                    <th>4 руб.</th>
                    <th>7 руб.</th>
                  </tr>
                  <tr>
                    <th>501+</th>
                    <th>3 руб.</th>
                    <th>5 руб.</th>
                  </tr>
                </tbody>
              </Table>
              <Card.Text>
                Черно-белое копирование со стекла А4 - 10руб, А3 - 20руб.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="cardStyles" style={{ width: "400px" }}>
            <Card.Title className="CardTitle">
              Наценка за использование бумаги другой плотности
            </Card.Title>
            <Card.Body>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Тип бумаги</th>
                    <th>А4</th>
                    <th>А3</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>130 г/м2</th>
                    <th>2 руб.</th>
                    <th>4 руб.</th>
                  </tr>
                  <tr>
                    <th>170 г/м2</th>
                    <th>2,50 руб.</th>
                    <th>5 руб.</th>
                  </tr>
                  <tr>
                    <th>200 г/м2</th>
                    <th>3 руб.</th>
                    <th>6 руб.</th>
                  </tr>
                  <tr>
                    <th>250 г/м2</th>
                    <th>4 руб.</th>
                    <th>8 руб.</th>
                  </tr>
                  <tr>
                    <th>300 г/м2</th>
                    <th>5 руб.</th>
                    <th>10 руб.</th>
                  </tr>
                  <tr>
                    <th>Самоклейка</th>
                    <th>15 руб.</th>
                    <th>30 руб.</th>
                  </tr>
                  <tr>
                    <th>Прозрачная пленка</th>
                    <th>40 руб.</th>
                    <th>-</th>
                  </tr>
                  <tr>
                    <th>Дизайнерская бумага</th>
                    <th>30 руб.</th>
                    <th>60 руб.</th>
                  </tr>
                  <tr>
                    <th>Бумага Touch Cover</th>
                    <th>60 руб.</th>
                    <th>120 руб.</th>
                  </tr>
                  <tr>
                    <th>Цветная бумага 80 г/м2</th>
                    <th>2 руб.</th>
                    <th>-</th>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
          <Card className="cardStyles" style={{ width: "350px" }}>
            <Card.Title className="CardTitle">
              Цветная печать / копирование
            </Card.Title>
            <Card.Body>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Кол-во экз.</th>
                    <th>А4</th>
                    <th>А3</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1-25</th>
                    <th>22 руб.</th>
                    <th>42 руб.</th>
                  </tr>
                  <tr>
                    <th>26-50</th>
                    <th>17 руб.</th>
                    <th>32 руб.</th>
                  </tr>
                  <tr>
                    <th>51-100</th>
                    <th>16 руб.</th>
                    <th>30 руб.</th>
                  </tr>
                  <tr>
                    <th>101-300</th>
                    <th>12 руб.</th>
                    <th>22 руб.</th>
                  </tr>
                  <tr>
                    <th>301-500</th>
                    <th>11 руб.</th>
                    <th>20 руб.</th>
                  </tr>
                  <tr>
                    <th>501+</th>
                    <th>10 руб.</th>
                    <th>18 руб.</th>
                  </tr>
                </tbody>
              </Table>
              <Card.Text>
                Цветное копирование со стекла А4 - 25руб, А3 - 45руб.
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
};

export default Price;
