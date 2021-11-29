import emailjs from "emailjs-com";
import { useRef } from "react";
import mail from "../../../images/svg/mail.svg";
import map from "../../../images/svg/map.svg";
import phone from "../../../images/svg/phone.svg";
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(form.current);
        emailjs
            .sendForm(
                "service_f9ixi4i",
                "template_6qer0pi",
                form.current,
                "user_DaZ2LHGuS6Q0XYxfTRjV0"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert(
                        "Your message has been received, We will contact you soon."
                    );
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    return (
        <div id="contact">
            {/* <!-- CONTACT --> */}
            <div className="towhid_tm_contact" id="contact">
                <div className="container">
                    <div className="contact_inner">
                        <div
                            className="left wow fadeInLeft"
                            data-wow-duration="1.2s"
                        >
                            <div className="towhid_tm_title_holder">
                                <span>Contact</span>
                                <h3>Let's discuss your project</h3>
                            </div>
                            <div className="short_list">
                                <ul>
                                    <li>
                                        <img
                                            className="svg"
                                            src={phone}
                                            alt=""
                                        />
                                        <span style={{ color: "white" }}>
                                            +880 1521401825
                                        </span>
                                    </li>
                                    <li>
                                        <img
                                            className="svg"
                                            src={mail}
                                            alt=""
                                        />
                                        <span style={{ color: "white" }}>
                                            <a href="mailto:towhidulislamcse@gmail.com">
                                                towhidulislamcse@gmail.com
                                            </a>
                                        </span>
                                    </li>
                                    <li>
                                        <img className="svg" src={map} alt="" />
                                        <span style={{ color: "white" }}>
                                            Chittagong
                                            <br /> Bangladesh
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div
                            className="right wow fadeInLeft"
                            data-wow-duration="1.2s"
                            data-wow-delay="0.3s"
                        >
                            <div className="title">
                                <p>
                                    I'm always open to discussing product
                                    <br />
                                    <span>design work or partnerships.</span>
                                </p>
                            </div>
                            <div className="fields">
                                <form
                                    ref={form}
                                    onSubmit={sendEmail}
                                    className="contact_form"
                                    autocomplete="off"
                                >
                                    <div className="first_row">
                                        <input
                                            id="name"
                                            type="text"
                                            placeholder="Name*"
                                            name="name"
                                        />
                                    </div>
                                    <div className="second">
                                        <div className="left">
                                            <input
                                                id="email"
                                                type="text"
                                                placeholder="Email*"
                                                name="email"
                                            />
                                        </div>
                                        <div className="right">
                                            <input
                                                id="subject"
                                                type="text"
                                                placeholder="Subject*"
                                                name="subject"
                                            />
                                        </div>
                                    </div>
                                    <div className="third">
                                        <textarea
                                            id="message"
                                            placeholder="Message*"
                                            name="message"
                                        ></textarea>
                                    </div>
                                    <div className="towhid_tm_button">
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                        >
                                            Send
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- /CONTACT --> */}
        </div>
    );
};

export default Contact;
