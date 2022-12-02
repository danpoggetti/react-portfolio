import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
<div>
  <Header/>

  {/* hero section */}
  <section className="hero">
    <div>
      <h2>Marketing + Coding = My Happy Place!</h2>
    </div>
    <figure className="profile-photo">
      <img id="border-photo" src={require("./images/danpoggetti.jpg")} alt="this lovely headshot of dan poggetti gives you an idea to what he looks like as you explore his portfolio" />
    </figure>
  </section>
  <main>
    {/* about me section */}
    <section className="page-sidel" id="about-me">
      <h2>About Me</h2>
      <div>
        <p>
          Hello, my name is Dan Poggetti and I welcome you to my portfolio. I'm a marketing professional living in Sacramento, California. I'm currently learning about coding.<br /><br />
          When I'm not working I enjoy watching sports, reading, and spending time with my family.
        </p>
      </div>
    </section>
    <section className="page-sidel" id="work">
      <h2>Work</h2>
      <Project/>
    </section>
    {/* Contact information */}
  <Footer/> 
  </main>
</div>
  
    </div>
  );
}

export default App;
