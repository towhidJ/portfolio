import "./About.css";
const About = () => {
    return (
        <>
            <div className=" beny_tm_about">
                <div className="container ">
                    <div class="beny_tm_title_holder">
                        <span>About Me</span>
                        <h3>About Me</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Amet, egestas. Id fermentum nullam ipsum
                            massa.
                        </p>
                    </div>

                    <div className="about_inner">
                        <div className="left">
                            <img src="" alt="" />
                        </div>
                        <div className="right">
                            <div className="float-start">
                                <h3>Hi There!</h3>
                                <p>
                                    I'm a Monalisa hug web designer &amp;
                                    front‑end developer focused on crafting
                                    clean &amp; user‑friendly experiences, I am
                                    passionate about building excellent software
                                    that improves the lives of those around me.
                                </p>
                            </div>
                            <div className="float-end">
                                <h3 class="title">Personal Infos</h3>
                                <div class="list">
                                    <ul>
                                        <li>
                                            <p>
                                                <span>Name :</span> Beny
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <span>Address :</span> N-400 -
                                                Path2UK
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <span>Age :</span> 27 Years
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <span>Phone :</span>{" "}
                                                +71621484010
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <span>Nationality :</span> UK
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <span>Email :</span>{" "}
                                                mail@gmail.com
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <span>Freelance :</span>{" "}
                                                Available
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <span>Languages :</span> French,
                                                English
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <div class="beny_tm_button color">
                                    <a href="img/about/1.jpg" download>
                                        <span class="wrapper">
                                            <span class="first">
                                                Download CV
                                            </span>
                                            <span class="second">
                                                Download CV
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
