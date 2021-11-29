import React from "react";

const Contact = () => {
    return (
        <div>
            {/* <!-- CONTACT --> */}
            <div class="towhid_tm_contact" id="contact">
                <div class="container">
                    <div class="contact_inner">
                        <div
                            class="left wow fadeInLeft"
                            data-wow-duration="1.2s"
                        >
                            <div class="towhid_tm_title_holder">
                                <span>Contact</span>
                                <h3>Let's discuss your project</h3>
                            </div>
                            <div class="short_list">
                                <ul>
                                    <li>
                                        <img
                                            class="svg"
                                            src="img/svg/phone.svg"
                                            alt=""
                                        />
                                        <span>+880 1521401825</span>
                                    </li>
                                    <li>
                                        <img
                                            class="svg"
                                            src="img/svg/mail.svg"
                                            alt=""
                                        />
                                        <span>
                                            <a href="mailto:towhidulislamcse@gmail.com">
                                                towhidulislamcse@gmail.com
                                            </a>
                                        </span>
                                    </li>
                                    <li>
                                        <img
                                            class="svg"
                                            src="img/svg/map.svg"
                                            alt=""
                                        />
                                        <span>
                                            Chittagong
                                            <br /> Bangladesh
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div
                            class="right wow fadeInLeft"
                            data-wow-duration="1.2s"
                            data-wow-delay="0.3s"
                        >
                            <div class="title">
                                <p>
                                    I'm always open to discussing product
                                    <br />
                                    <span>design work or partnerships.</span>
                                </p>
                            </div>
                            <div class="fields">
                                <form
                                    action="/"
                                    method="post"
                                    class="contact_form"
                                    id="contact_form"
                                    autocomplete="off"
                                >
                                    <div
                                        class="returnmessage"
                                        data-success="Your message has been received, We will contact you soon."
                                    ></div>
                                    <div class="empty_notice">
                                        <span>Please Fill Required Fields</span>
                                    </div>
                                    <div class="first_row">
                                        <input
                                            id="name"
                                            type="text"
                                            placeholder="Name*"
                                        />
                                    </div>
                                    <div class="second">
                                        <div class="left">
                                            <input
                                                id="email"
                                                type="text"
                                                placeholder="Email*"
                                            />
                                        </div>
                                        <div class="right">
                                            <input
                                                id="subject"
                                                type="text"
                                                placeholder="Subject*"
                                            />
                                        </div>
                                    </div>
                                    <div class="third">
                                        <textarea
                                            id="message"
                                            placeholder="Message*"
                                        ></textarea>
                                    </div>
                                    <div class="towhid_tm_button">
                                        <button type="submit" className="btn">
                                            Submit
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
