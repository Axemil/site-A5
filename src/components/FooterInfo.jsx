import React from 'react'

function FooterInfo () {
  return ( 
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-5 mr-auto">
                <h2 className="footer-heading mb-4">About Us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam iure deserunt ut architecto dolores quo beatae laborum aliquam ipsam rem impedit obcaecati ea consequatur.</p>
              </div>
              
              <div className="col-md-3">
                <h2 className="footer-heading mb-4">Быстрые ссылки</h2>
                <ul className="list-unstyled">
                  <li><a href="#">Главная</a></li>
                  <li><a href="#">Заказ</a></li>
                  <li><a href="#">Цены</a></li>
                  <li><a href="#">Оплата</a></li>
                </ul>
              </div>
              <div className="col-md-3">
                <h2 className="footer-heading mb-4">Follow Us</h2>
                <a href="#" className="pl-0 pr-3"><span className="icon-facebook"></span></a>
                <a href="#" className="pl-3 pr-3"><span className="icon-twitter"></span></a>
                <a href="#" className="pl-3 pr-3"><span className="icon-instagram"></span></a>
                <a href="#" className="pl-3 pr-3"><span className="icon-linkedin"></span></a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <h2 className="footer-heading mb-4">Subscribe Newsletter</h2>
            <form action="#" method="post">
              <div className="input-group mb-3">
                <input type="text" className="form-control border-secondary text-white bg-transparent" placeholder="Enter Email" aria-label="Enter Email" aria-describedby="button-addon2"/>
                <div className="input-group-append">
                  <button className="btn btn-primary text-white" type="button" id="button-addon2">Send</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        </div>
    </footer>
  )
}

export default FooterInfo