import React from "react";

export const Footer = () => {
    return (
        <>
        {/* */}
    <div className="Footer">
        <div className="container text-center">
            <div className="row">
             <div className="col-md-5 ft-1">
                <h4><span>Dev</span>Tech</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                <div className="footer-icons">
                  <i class="fa-brands fa-facebook"></i> 
                  <i class="fa-brands fa-instagram"></i> 
                  <i class="fa-brands fa-linkedin-in"></i>
                </div>
             </div>
             <div className="col-md-3 ft-2">
                  <h5>Quiq Links</h5>
                  <ul>
                    <li className="footer-items">
                      <a className="" href="/">Portfolio</a>
                    </li>
                    <li className="footer-items">
                      <a className="" href="/">Services</a>
                    </li>
                    <li className="footer-items">
                      <a className="" href="/">Contact Us</a>
                    </li>
                    <li className="footer-items">
                       <a className="" href="/">Blogs</a>
                    </li>
                  </ul>
             </div>
             <div className="col-md-4 ft-3">
              <h5>Contact Info</h5>
              <p><i class="fa-solid fa-phone"></i>+404 9093997</p>
              <p><i class="fa-solid fa-envelope"></i>devtech@mail.com</p>
              <p><i class="fa-solid fa-paper-plane"></i>Manhatan, New York</p>
            </div> 
            </div>
        </div>
    </div>
    <div className="Last-Footer">
      <p>Design By BEB</p>
    </div>
      {/* */}
    </>
   ) 
}