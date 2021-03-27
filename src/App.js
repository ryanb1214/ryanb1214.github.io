import { Link, animateScroll as scroll } from "react-scroll";
import ReactPlayer from "react-player";
import { Fade, Slide, Bounce } from "react-awesome-reveal";
import ScrollTopArrow from "./components/ScrollTopArrow";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <ScrollTopArrow />
      <header className="App-header">
        <div className="video-container">
          <ReactPlayer
            url="background.mp4"
            playing={true}
            muted={true}
            loop={true}
            width="100%"
            height="100%"
          />
        </div>
        <div className="showcase">
          <Slide triggerOnce="true">
            <h1>Ryan Ball</h1>
            <p className="motto">
              Developer and web designer with interest for cybersecurity
            </p>
          </Slide>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <div className="scroll-down"></div>
          </Link>
        </div>
      </header>
      <main className="container">
        <section id="about">
          <Fade triggerOnce="true">
          <h2>About Me</h2>
          <div className="row">
            <div className="col-md-4 bio">
              I am a developer with an attention to detail and strive to keep
              everything I create secure and up to development standards. I am
              more knowledgeable about front-end web development, but I am
              actively learning more about back-end API development utilizing
              Node JS currently.
            </div>
            <div className="col-md-4">
              <img
                className="avatar img-fluid"
                src="https://avatars.githubusercontent.com/ryanb1214"
                alt="avatar"
              />
            </div>
            <div className="col-md-4 details">
              <ul className="no-bullets">
                <li>
                  <strong>Age:</strong> {age()} years
                </li>
                <li>
                  <strong>Location:</strong> Edmonton, Alberta
                </li>
              </ul>
            </div>
          </div>
          </Fade>
          
        </section>
        <section id="experience">
          <Fade triggerOnce="true">
            <h2>Experiences</h2>
            <p>
            Dolor qui nostrud excepteur officia labore eiusmod aliquip aliquip
            officia reprehenderit.
          </p>
          <h3>Education</h3>
          </Fade>
          <Fade triggerOnce="true" childClassName="text-align-left">
          <div class="experiences">
            <div class="experience row">
              <div class="col-md-4">
                <div class="experience-heading">
                  Northern Alberta Institute of Technology
                </div>
                <div class="experience-period">2018 - 2020</div>
              </div>
              <div class="col-md-8">
                <strong>
                  Digital Media & IT - Computer Software Development Diploma
                </strong>
                <br />
                The languages I learned during my time gaining this diploma
                consisted of: HTML, CSS, C#/ASP.Net Framework Applications, Java
                Jakarta EE8, Microsoft SQL, Oracle Database, Flutter and Swift
                4. I also learnt about MVC, UML, unit testing & quality
                assurance, as well as agile development methodologies (mainly
                SCRUM) by creating a WordPress site, database & admin dashboard
                for an outside client on a team.
              </div>
            </div>
          </div>
          <div class="experiences">
            <div class="experience row">
              <div class="col-md-4">
                <div class="experience-heading">
                  Camrose Composite High School
                </div>
                <div class="experience-period">2015 - 2018</div>
              </div>
              <div class="col-md-8">
                <strong>High School Diploma</strong>
                <br />
                Successfully achieved my high school diploma. I have always been
                interested in development, web design & cybersecurity so I
                decided to take up the DMIT program at NAIT. During my free-time
                while going to high school I developed a few small websites that
                are no longer hosted online.
              </div>
            </div>
          </div>
          </Fade>
          
        </section>
        <section id="abilities">
          <Fade triggerOnce="true">
          <h2>Abilities</h2>
          <p>Commodo laboris adipisicing enim Lorem cupidatat.</p>
          <h3>Skills</h3>
          
          <div className="row">
            <div className="col-md-6">
              <ul className="rating no-bullets">
                <span className="ability-type">Bootstrap Framework</span>
                <span className="ability-rating">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </span>
              </ul>
              <ul className="rating no-bullets">
                <span className="ability-type">HTML</span>
                <span className="ability-rating">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </span>
              </ul>
              <ul className="rating no-bullets">
                <span className="ability-type">React JS</span>
                <span className="ability-rating">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </span>
              </ul>
              <ul className="rating no-bullets">
                <span className="ability-type">C#</span>
                <span className="ability-rating">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star"></i>
                </span>
              </ul>
              <ul className="rating no-bullets">
                <span className="ability-type">CSS</span>
                <span className="ability-rating">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star"></i>
                </span>
              </ul>
              <ul className="rating no-bullets">
                <span className="ability-type">Javascript</span>
                <span className="ability-rating">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star"></i>
                </span>
              </ul>
              <ul className="rating no-bullets">
                <span className="ability-type">Microsoft SQL</span>
                <span className="ability-rating">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star"></i>
                </span>
              </ul>
              <ul className="rating no-bullets">
                <span className="ability-type">
                  Object Oriented Programming
                </span>
                <span className="ability-rating">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star"></i>
                </span>
              </ul>
              <ul className="rating no-bullets">
                <span className="ability-type">Search Engine Optimization</span>
                <span className="ability-rating">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star"></i>
                </span>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="rating no-bullets">
                <span className="ability-type">Scrum</span>
                <span className="ability-rating">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star"></i>
                </span>
              </ul>
              <ul className="rating no-bullets">
                <span className="ability-type">WordPress</span>
                <span className="ability-rating">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star"></i>
                </span>
              </ul>
              <ul className="rating no-bullets">
                <span className="ability-type">Flutter</span>
                <span className="ability-rating">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star"></i>
                  <i class="bi bi-star"></i>
                </span>
              </ul>
              <ul className="rating no-bullets">
                <span className="ability-type">MySQL</span>
                <span className="ability-rating">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star"></i>
                  <i class="bi bi-star"></i>
                </span>
              </ul>
              <ul className="rating no-bullets">
                <span className="ability-type">Node JS</span>
                <span className="ability-rating">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star"></i>
                  <i class="bi bi-star"></i>
                </span>
              </ul>
              <ul className="rating no-bullets">
                <span className="ability-type">Oracle Database</span>
                <span className="ability-rating">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star"></i>
                  <i class="bi bi-star"></i>
                </span>
              </ul>
              <ul className="rating no-bullets">
                <span className="ability-type">Java</span>
                <span className="ability-rating">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star"></i>
                  <i class="bi bi-star"></i>
                  <i class="bi bi-star"></i>
                </span>
              </ul>
              <ul className="rating no-bullets">
                <span className="ability-type">Python</span>
                <span className="ability-rating">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star"></i>
                  <i class="bi bi-star"></i>
                  <i class="bi bi-star"></i>
                </span>
              </ul>
              <ul className="rating no-bullets">
                <span className="ability-type">Swift</span>
                <span className="ability-rating">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star"></i>
                  <i class="bi bi-star"></i>
                  <i class="bi bi-star"></i>
                </span>
              </ul>
            </div>
          </div>
          <hr />
          <h3>Tools</h3>
          <div className="row">
            <div className="col-md-6">
              <ul className="rating no-bullets">
                <span className="ability-type">
                  FileZilla / WinSCP{" "}
                  <span className="italic">
                    ({new Date().getFullYear() - 2015} years)
                  </span>
                </span>
                <span className="ability-rating">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </span>
              </ul>
              <ul className="rating no-bullets">
                <span className="ability-type">
                  Firefox{" "}
                  <span className="italic">
                    ({new Date().getFullYear() - 2015} years)
                  </span>
                </span>
                <span className="ability-rating">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </span>
              </ul>
              <ul className="rating no-bullets">
                <span className="ability-type">
                  Linux Desktop{" "}
                  <span className="italic">
                    ({new Date().getFullYear() - 2018} years)
                  </span>
                </span>
                <span className="ability-rating">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </span>
              </ul>
              <ul className="rating no-bullets">
                <span className="ability-type">
                  Microsoft Office{" "}
                  <span className="italic">
                    ({new Date().getFullYear() - 2014} years)
                  </span>
                </span>
                <span className="ability-rating">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </span>
              </ul>
              <ul className="rating no-bullets">
                <span className="ability-type">
                  Ubuntu Servers{" "}
                  <span className="italic">
                    ({new Date().getFullYear() - 2015} years)
                  </span>
                </span>
                <span className="ability-rating">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </span>
              </ul>
              <ul className="rating no-bullets">
                <span className="ability-type">
                  Visual Studio Code{" "}
                  <span className="italic">
                    ({new Date().getFullYear() - 2017} years)
                  </span>
                </span>
                <span className="ability-rating">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </span>
              </ul>
              <ul className="rating no-bullets">
                <span className="ability-type">
                  Windows
                  {/* <span className="italic"> ({new Date().getFullYear() - 2009 > 20
                    ? "20+ years" : "10+ years"})
                  </span> */}
                  <span className="italic"> (10+ years)</span>
                </span>
                <span className="ability-rating">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </span>
              </ul>
              <ul className="rating no-bullets">
                <span className="ability-type">
                  MacOS{" "}
                  <span className="italic">
                    ({new Date().getFullYear() - 2019} years)
                  </span>
                </span>
                <span className="ability-rating">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star"></i>
                </span>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="rating no-bullets">
                <span className="ability-type">
                  Git{" "}
                  <span className="italic">
                    ({new Date().getFullYear() - 2018} years)
                  </span>
                </span>
                <span className="ability-rating">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star"></i>
                </span>
              </ul>
              <ul className="rating no-bullets">
                <span className="ability-type">
                  Sublime Text{" "}
                  <span className="italic">
                    ({new Date().getFullYear() - 2016} years)
                  </span>
                </span>
                <span className="ability-rating">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star"></i>
                </span>
              </ul>
              <ul className="rating no-bullets">
                <span className="ability-type">
                  Visual Studio{" "}
                  <span className="italic">
                    ({new Date().getFullYear() - 2018} years)
                  </span>
                </span>
                <span className="ability-rating">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star"></i>
                </span>
              </ul>
              <ul className="rating no-bullets">
                <span className="ability-type">
                  Amazon Web Services <span className="italic">(1 year)</span>
                </span>
                <span className="ability-rating">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star"></i>
                  <i class="bi bi-star"></i>
                </span>
              </ul>
              <ul className="rating no-bullets">
                <span className="ability-type">
                  Eclipse <span className="italic">(2 years)</span>
                </span>
                <span className="ability-rating">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star"></i>
                  <i class="bi bi-star"></i>
                </span>
              </ul>
              <ul className="rating no-bullets">
                <span className="ability-type">
                  Photoshop{" "}
                  <span className="italic">
                    ({new Date().getFullYear() - 2013} years)
                  </span>
                </span>
                <span className="ability-rating">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star"></i>
                  <i class="bi bi-star"></i>
                </span>
              </ul>
              <ul className="rating no-bullets">
                <span className="ability-type">
                  Premiere Pro{" "}
                  <span className="italic">
                    ({new Date().getFullYear() - 2018} years)
                  </span>
                </span>
                <span className="ability-rating">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star"></i>
                  <i class="bi bi-star"></i>
                  <i class="bi bi-star"></i>
                </span>
              </ul>
            </div>
          </div>
          </Fade>
        </section>
      </main>

      <footer className="container-fluid">
        <Bounce triggerOnce="true">
        <h2>Get in Touch</h2>

        <div className="row justify-content-center">
          <div
            className="media col-md-3"
            onClick={(event) =>
              (window.location.href = "https://github.com/ryanb1214/")
            }
          >
            <span className="media-icon">
              <i class="bi bi-github"></i>
            </span>
            <span className="media-text">ryanb1214</span>
          </div>

          <div
            className="media col-md-3"
            onClick={(event) =>
              (window.location.href = "https://www.linkedin.com/in/ryanball99")
            }
          >
            <span className="media-icon">
              <i class="bi bi-linkedin"></i>
            </span>
            <span className="media-text">ryanball99</span>
          </div>

          {/* <div
            className="media col-md-3"
            onClick={(event) =>
              (window.location.href = "")
            }
          >
            <span className="media-icon">
              <i class="bi bi-envelope-fill"></i>
            </span>
            <span className="media-text"></span>
          </div> */}
        </div>

        <button
          onClick={(event) =>
            (window.location.href =
              "https://github.com/ryanb1214/ryanb1214.github.io")
          }
          className="btn btn-secondary btn-source"
        >
          View React source code on GitHub <i class="bi bi-download"></i>
        </button>
        </Bounce>
      </footer>
    </div>
  );
}

function age() {
  var today = new Date();
  var birthDate = new Date("1999 12 14");
  var currentAge = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    currentAge--;
  }
  return currentAge;
}

export default App;
