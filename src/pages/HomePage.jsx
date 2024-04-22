import { Helmet, HelmetProvider } from "react-helmet-async";
import TypeWriter from "typewriter-effect";
import { Link } from "react-router-dom";
import "./style/homepage.css";
import image from "../assets/me.jpeg";

export const HomePage = () => {
  return (
    <HelmetProvider>
      <section>
        <Helmet>
          <meta charset="UTF-8" />
          <meta name="description" content="Welcome to my page" />
        </Helmet>
        <div>
          <img src={image} style={{ width: 300, height: 400 }} />
          <h1>I am Daisy</h1>
          <h1>
            <TypeWriter
              options={{
                strings: [
                  "I like coding",
                  "I like fitness",
                  "I am a purrgrammer🐱",
                  "I love every second of my life",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 10,
              }}
            />
          </h1>
          <div className="links">
            <Link className="about" to="/me/bio">
              <div>More About Me</div>
            </Link>
            <Link className="contact">
              <div>Contact Me</div>
            </Link>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
