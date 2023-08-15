import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  const auth = localStorage.getItem("user")

  return (<>

   



   <footer className="footer_area section_padding_130_0">
  <div className="container">
    <div className="row">
      {/* Single Widget*/}
      <div className="col-12 col-sm-6 col-lg-4">
        <div className="single-footer-widget section_padding_0_130">
          {/* Footer Logo*/}
          <div className="footer-logo mb-3" />
          <p>Appland is completely creative, lightweight, clean app landing page.</p>
          {/* Copywrite Text*/}
          <div className="copywrite-text mb-5">
            <p className="mb-0">Made with <i className="lni-heart mr-1" />by<a className="ml-1" href="https://wrapbootstrap.com/user/DesigningWorld">Designing World</a></p>
          </div>
          {/* Footer Social Area*/}
          <div className="footer_social_area"><a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Facebook"><i className="fa fa-facebook" /></a><a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Pinterest"><i className="fa fa-pinterest" /></a><a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Skype"><i className="fa fa-skype" /></a><a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Twitter"><i className="fa fa-twitter" /></a></div>
        </div>
      </div>
      {/* Single Widget*/}
      <div className="col-12 col-sm-6 col-lg">
        <div className="single-footer-widget section_padding_0_130">
          {/* Widget Title*/}
          <h5 className="widget-title">About</h5>
          {/* Footer Menu*/}
          <div className="footer_menu">
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Corporate Sale</a></li>
              <li><a href="#">Terms &amp; Policy</a></li>
              <li><a href="#">Community</a></li>
            </ul>
          </div>
        </div>
      </div>
      {/* Single Widget*/}
      <div className="col-12 col-sm-6 col-lg">
        <div className="single-footer-widget section_padding_0_130">
          {/* Widget Title*/}
          <h5 className="widget-title">Support</h5>
          {/* Footer Menu*/}
          <div className="footer_menu">
            <ul>
              <li><a href="#">Help</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Term &amp; Conditions</a></li>
              <li><a href="#">Help &amp; Support</a></li>
            </ul>
          </div>
        </div>
      </div>
      {/* Single Widget*/}
      <div className="col-12 col-sm-6 col-lg">
        <div className="single-footer-widget section_padding_0_130">
          {/* Widget Title*/}
          <h5 className="widget-title">Contact</h5>
          {/* Footer Menu*/}
          <div className="block-5 mb-5">
              <ul className="list-unstyled">
                <li className="address">Gulbarg II , Lahore,Punjab,Pakistan</li>
                <li className="phone"><a href="tel://23923929210">+92 123456789</a></li>
                <li className="email">musamarazzaq7@gmail.com</li>
              </ul>
            </div>
        </div>
      </div>
    </div>
    <div className="row pt-5  text-center">
          <div className="col-md-12">
            <p>
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              Copyright © All rights reserved | Created <i className="icon-heart" aria-hidden="true" /> by M Usama Razzaq - DreamX Solutions
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            </p>
          </div>
        </div>
  </div>
</footer>




  </>);
}

export default Footer;
