import { Helmet, HelmetProvider } from "react-helmet-async";
import TypeWriter from "typewriter-effect";
import { Link } from "react-router-dom"

export const HomePage = () => {
    return (
        <HelmetProvider>
            <section>
                <Helmet>
                    <meta charset="UTF-8" />
                    <meta name="description" content="Welcome to my page" />
                </Helmet>
                <div>
                    <img src="https://pbs.twimg.com/media/F5UCxQ7XYAAN5u_?format=jpg&name=4096x4096" style={{width:300, height:400}} />
                    <h1>I am Daisy</h1>
                    <h1>
                        <TypeWriter 
                            options={{
                                strings: [
                                    "I like coding",
                                    "I like fitness",
                                    "I am a purrgrammer🐱",
                                    "I love every second of my life"
                                ],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 10
                            }}
                        />
                    </h1>
                    <div className="links">
                        <Link className="about" to="/about">
                            <div>More About Me</div>
                        </Link>
                        <Link className="contact">
                            <div>Contact Me</div>
                        </Link>
                    </div>
                </div>
            </section>
        </HelmetProvider>
    )
}