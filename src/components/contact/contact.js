import { Component } from "react";
import "./contact.css";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-container">
        <div className="contact-title">
          <div>Contact</div>
          <div className="contact-underline"></div>
        </div>

        <div className="contactFlex">
          <div className="contactFirstBox">
            <div className="letConnectFlex">
              <div className="letConnectClass">Let's Connect</div>
              <br />
              <p>
                If my portfolio matches your requirment, <br />
                so yo can connect with me using following <br /> details given
                below or you can also send a<br /> message from the given form.
              </p>
              <div>
                <div>
                  <i class="fas fa-at"></i>&nbsp;&nbsp;
                  <span style={{ color: "grey" }}>as2224900@gmail.com</span>
                </div>
                <br />
                <div>
                  <i class="fas fa-phone-alt"></i>&nbsp;&nbsp;
                  <span style={{ color: "grey" }}>7987484748</span>
                </div>
                <br />
                <div>
                  <i class="far fa-envelope"></i>&nbsp;&nbsp;
                  <span style={{ color: "grey" }}>7987484748</span>
                </div>
              </div>
            </div>
          </div>
          <div className="contactSecondBox">
            <div className="messageFlex">
              <div className="messageClass">Send me a message</div>
              <form className="formClass">
                  <label>Name :</label>
                  <br/>
                  <input type="text" id="name" value="" style={{width:"450px", height:"20px"}} required/>
                  <br/><br/>

                  <label>PhoneNo. :</label>
                  <br/>
                  <input type="number" id="number" value="" style={{width:"450px", height:"20px"}}  required/>
                  <br/><br/>

                  <label>Email :</label><br/>
                  <input type="email" id="email" value="" style={{width:"450px", height:"20px"}}  required/>
                  <br/><br/>

                  <label>Message :</label><br/>
                  <input type="text" id="message" value="" style={{width:"450px", height:"20px"}}  required/>
                  <br/><br/>

                  <div><button type="submit" className="submitForm">Send Message</button></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
