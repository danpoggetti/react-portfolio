import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Project from "./components/Project";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div>
        <Header />

        {/* hero section */}
        <section className="hero">
          <div>
            <h2>Marketing + Coding = My Happy Place!</h2>
          </div>
          <figure className="profile-photo">
            <img
              id="border-photo"
              src={require("./images/danpoggetti.jpg")}
              alt="this lovely headshot of dan poggetti gives you an idea to what he looks like as you explore his portfolio"
            />
          </figure>
        </section>
        <main>
          {/* about me section */}
          <section className="page-sidel" id="about-me">
            <h2>About Me</h2>
            <div>
              <p>
                Hello, my name is Dan Poggetti and I welcome you to my
                portfolio. I currently serve as the Director of Marketing and
                Digital Media for Sacramento Magazine, a monthly lifestyle
                publication in Sacramento, California. I recenetly received a
                certificate from the University of California-Davis in
                Full-Stack Web Development. I am eager to leverage my digital
                marketing background and coding skills to provide a unique
                experience for website and app users. I pride myself as an
                innovative problem-solver and excel to identify the consumer,
                all to develop tactics to enhance user experience. Strengths in
                creativity, teamwork, and building projects from ideation to
                execution.
                <br />
                <br />I am excited to leverage my skills to help tell your
                story. Let's connect!
                <br />
                <br />
                Accomplishments:
                <br />
                <ul>
                  <li>
                    Increased monthly organic web traffic from 20,000 to 60,000+
                    unique visitors.
                  </li>
                  <li>
                    Oversees daily managment, optimization and curation of 8
                    social media accounats.
                  </li>
                  <li>
                    Build and send daily eNewsletter to 14,000+ double-opt in
                    eSubscribers.
                  </li>
                  <li>
                    Meet with 5 sales reps weekly to determine digital marketing
                    strategies for clients.
                  </li>
                  <li>
                    Planned and executed company fundraising event of 6,000+
                    people for the Make-A-Wish Foundation.
                  </li>
                </ul>
                Technical Skills:
                <br />
                <ol>
                  <li>Digital Marketing</li>
                  <li>HTML5</li>
                  <li>CSS</li>
                  <li>SEO</li>
                  <li>HubSpot</li>
                </ol>
                <br />
                You are more than welcome to visit my resume:
                <br />
                <a href="https://docs.google.com/document/d/1tv_ALeRi-Kv-8Jz8gXpt_yh7hviLVxV7gkVTYKqp86M/edit?usp=sharing">
                  Dan Poggetti's Resume
                </a>
              </p>
            </div>
          </section>
          <section className="page-sidel" id="work">
            <h2>Work</h2>
            <Project />
          </section>
          {/* Contact information */}
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
