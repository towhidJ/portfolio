import Bounce from "react-reveal/Bounce";
import "./Footer.css";

const Footer = () => {
    return (
        <Bounce bottom>
            <div className="text-center footer mt-5 pt-3">
                <h6>Designer & Developer</h6>
                <a href="https://www.linkedin.com/in/towhidcse/" target="blank">
                    Towhidul Islam
                </a>{" "}
                <br />
                <div className="social-icon">
                    <a href="mailto:towhidulislamcse@gmail.com" target="blank">
                        {" "}
                    </a>
                    <a
                        href="https://www.linkedin.com/in/towhidcse/"
                        target="blank"
                    >
                        {" "}
                        <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/towhidj" target="blank">
                        {" "}
                        <i class="fab fa-github"></i>
                    </a>
                    <a
                        href="https://www.facebook.com/towhiduli3"
                        target="blank"
                    >
                        {" "}
                        <i class="fab fa-facebook"></i>
                    </a>
                    <a
                        href="https://www.instagram.com/towhidulcse/"
                        target="blank"
                    >
                        {" "}
                        <i class="fab fa-instagram"></i>
                    </a>
                </div>
                <h5>
                    &copy; 2021 <span style={{ fontSize: "17px" }}>||</span> All
                    Right Reserved
                </h5>
            </div>
        </Bounce>
    );
};

export default Footer;
