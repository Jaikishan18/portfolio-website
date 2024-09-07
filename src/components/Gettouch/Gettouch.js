import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Gettouch.css'

const Gettouch = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "19a5e615-769b-478d-9c39-3ab4c5302e2a");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert("Form Submitted Successfully")
        }
    }
  return (
    <Container>
      <Row>
        <Col>
          <div className="get_container" id="contact">
            <div className="title">
               <h2>Get in touch</h2>
               <img
                src="data:image/svg+xml,%3csvg%20width='227'%20height='72'%20viewBox='0%200%20227%2072'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%2061.1395C0%2055.1999%205.16729%2050.5816%2011.0696%2051.2459L187.039%2071.052C209.597%2073.591%20228.703%2054.5844%20226.282%2032.0133C223.76%208.50255%20199.379%20-6.00841%20177.511%202.98631L13.7433%2070.3471C7.19098%2073.0422%200%2068.2245%200%2061.1395Z'%20fill='url(%23paint0_linear_2160_23)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_2160_23'%20x1='851.318'%20y1='47.553'%20x2='756.751'%20y2='339.402'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23DF8908'/%3e%3cstop%20offset='1'%20stop-color='%23B415FF'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"
                alt="logo_image"
             />
            </div>
            <Row>
              <Col lg={5} md={12}>
                <div className="get_left_content">
                  <h1>Let's talk</h1>
                  <p>
                    I'm currently avaliable to take on new projects, so feel
                    free to send me a message about anything that you want me to
                    work on. You can contact anytime.
                  </p>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-2 12H6v-2h12zm0-3H6V9h12zm0-3H6V6h12z"
                      />
                    </svg>
                    <p>kishangv26@gmail.com</p>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M18.93 20q-2.528 0-5.184-1.266t-4.935-3.555t-3.545-4.935T4 5.07q0-.458.3-.763T5.05 4h2.473q.408 0 .712.257t.411.659L9.142 7.3q.07.42-.025.733t-.333.513L6.59 10.592q.616 1.117 1.361 2.076t1.59 1.817q.87.87 1.874 1.62q1.004.749 2.204 1.414l2.139-2.177q.244-.263.549-.347q.304-.083.674-.033l2.103.43q.408.1.662.411t.254.712v2.435q0 .45-.306.75t-.763.3M6.12 9.654l1.92-1.765q.095-.077.124-.212q.03-.135-.01-.25l-.443-2.12q-.039-.153-.135-.23T7.327 5H5.275q-.115 0-.192.077t-.077.192q.029 1.025.321 2.14t.794 2.245m8.45 8.334q1.014.502 2.16.743q1.148.24 2 .257q.115 0 .192-.077T19 18.72v-2.008q0-.153-.077-.25q-.077-.096-.23-.134l-1.85-.379q-.116-.039-.203-.01q-.086.03-.182.125zm0 0"
                      />
                    </svg>
                    <p>9080042067</p>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="currentColor"
                        d="M16 2A11.013 11.013 0 0 0 5 13a10.9 10.9 0 0 0 2.216 6.6s.3.395.349.452L16 30l8.439-9.953c.044-.053.345-.447.345-.447l.001-.003A10.9 10.9 0 0 0 27 13A11.013 11.013 0 0 0 16 2m0 15a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4"
                      />
                      <circle cx="16" cy="13" r="4" fill="none" />
                    </svg>
                    <p>Madurai,Tamilnadu</p>
                  </div>
                </div>
              </Col>
              <Col lg={7} md={12}>
                <div className="">
                   <form className="get_form_content" onSubmit={onSubmit}>
                      <label>Your Name</label>
                      <input type="text" name="name" placeholder="enter your name"/>
                      <label>Your Email</label>
                      <input type="email" name="email" placeholder="enter your email"/>
                      <label>Write your message here</label>
                      <textarea rows={8} name="message" placeholder="enter the text"></textarea>
                      <button type="submit">Submit Now</button>
                   </form>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Gettouch;

