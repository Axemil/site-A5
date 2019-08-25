import React, { Component } from "react";
import { Form, FormGroup, Input, Label, Button, FormText } from "reactstrap";
import axios from "axios";

export default class ContuctUs extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      message: "",
      exampleFile: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  async handleSubmit(e) {
    e.preventDefault();
    const { name, email, message, exampleFile } = this.state;

    const form = await axios.post("/api/form", {
      name,
      email,
      message,
      exampleFile
    });
  }

  render() {
    return (
      <div className="site-section bg-light" id="section-contact">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-7 text-center border-primary">
              <h2 className="font-weight-light text-primary">
                Оставьте Сообщение
              </h2>
              <p className="color-black-opacity-5">
                Инжиниринг и Типография ежедневно и в любое время суток
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-7 mb-5">
              <Form onSubmit={this.handleSubmit} className="p-5 bg-white">
                <div className="row form-group">
                  <FormGroup>
                    <div className="col-md-6 mb-3 mb-md-0">
                      <Label className="text-black" for="Name">
                        Имя
                      </Label>
                      <Input
                        id="fname"
                        className="form-control"
                        type="text"
                        name="name"
                        onChange={this.handleChange}
                      />
                    </div>
                  </FormGroup>

                  <FormGroup>
                    <div className="col-md-6">
                      <Label className="text-black" for="name">
                        Фамилия
                      </Label>
                      <Input
                        type="text"
                        id="fname"
                        className="form-control"
                        type="text"
                        name="name"
                        onChange={this.handleChange}
                      />
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <div className="row form-group">
                      <div className="col-md-12">
                        <Label className="text-black" for="email">
                          Электронный Адрес
                        </Label>
                        <Input
                          type="email"
                          id="email"
                          className="form-control"
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <div className="row form-group">
                      <div className="col-md-12">
                        <label className="text-black" for="subject">
                          Тема
                        </label>
                        <Input
                          type="subject"
                          id="subject"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <div className="row form-group">
                      <div className="col-md-12">
                        <Label className="text-black" for="message">
                          Сообщение
                        </Label>
                        <Input
                          type="textarea"
                          name="message"
                          onChange={this.handleChange}
                          className="form-control"
                        />
                      </div>
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <Label for="message">Message:</Label>
                    <Input
                      type="textarea"
                      name="message"
                      onChange={this.handleChange}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label for="exampleFile">File</Label>
                    <Input type="file" name="file" id="exampleFile" />
                    <FormText color="muted">
                      This is some placeholder block-level help text for the
                      above input. It's a bit lighter and easily wraps to a new
                      line.
                    </FormText>
                  </FormGroup>

                  <Button>Submit</Button>
                </div>
              </Form>
            </div>
            <div className="col-md-5">
              <div className="p-4 mb-3 bg-white">
                <p className="mb-0 font-weight-bold">Адрес</p>
                <p className="mb-4"> ул.Монтажная, д.9, стр1 г.Москва</p>

                <p className="mb-0 font-weight-bold">Телефон</p>
                <p className="mb-4">
                  <a href="tel:+74951375273">+7 (495) 137-52-73</a>
                </p>

                <p className="mb-0 font-weight-bold">Наш Электронный Адрес</p>
                <p className="mb-0">
                  <a href="mailto:a5grupp@list.ru">a5grupp@list.ru</a>
                </p>
              </div>

              <div className="p-4 mb-3 bg-white">
                <h3 className="h5 text-black mb-3">Как нас найти:</h3>
                <p>
                  Ближайшие станции метро: Щелковская, Бульвар Рокоссовского,
                  Локомотив. <br />
                  Проезд: станция метро «Бульвар Рокоссовского, автобус 3 ,
                  проезд до остановки "Магазин Техносила".
                </p>
                <p>
                  <a href="#" className="btn btn-primary px-4 py-2 text-white">
                    На страницу контактов
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
