import { Link, animateScroll as scroll } from "react-scroll";
import ReactPlayer from "react-player";
import { Fade, Slide, Bounce, Zoom } from "react-awesome-reveal";
import ScrollTopArrow from "./components/ScrollTopArrow";
import Rating from "./components/Rating";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div class="App">
      {/* <Navbar /> */}
      <ScrollTopArrow />
      <header class="App-header">
        <div class="video-container">
          <ReactPlayer
            url="background.mp4"
            playing={true}
            muted={true}
            loop={true}
            width="100%"
            height="100%"
          />
        </div>
        <div class="showcase">
          <Slide triggerOnce="true">
            <h1>Ryan Ball</h1>
            <p class="motto">
              Aspiring Cybersecurity Professional
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
            <div class="scroll-down"></div>
          </Link>
        </div>
      </header>
      <main class="container">
        <section id="about">
          <Fade triggerOnce="true">
            <h2>About Me</h2>
            <div className="row">
              <div className="col-md-4 bio">
                Organized and eager-to-learn aspiring Cybersecurity Professional, with a history of software development, looking to start a career in the industry.
                <br /> <br /> 
                I am experienced in cybersecurity documentation development, 
                risk identification, vulnerability assessments, web and database development, diagnosing software and hardware issues, customer service, video production 
                with working knowledge in networking and Windows/Linux Servers. I am currently working towards acquiring a CompTIA Security+ certification and improving my Python knowledge.
              </div>
              <div className="col-md-4">
                <Zoom triggerOnce="true">
                  <img
                    className="avatar img-fluid"
                    src="https://avatars.githubusercontent.com/ryanb1214"
                    alt="avatar"
                  />
                </Zoom>
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
            <p className="quote">
              “The only source of knowledge is experience.”
              <br />
              <span className="speaker">-- Albert Einstein</span>
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
                  <div class="experience-period">2021 - 2022</div>
                </div>
                <div class="col-md-8">
                  <strong>
                    Cybersecurity&nbsp;&nbsp;|&nbsp;&nbsp;Post-Diploma
                    Certificate
                  </strong>
                  <br />
                  Areas of studies covered in this program included standards and regulations (ISO, NIST & PIPA, PIPEDA, GDPR), 
                  frameworks (COBIT & ITIL), network protocols and traffic analysis, vulnerabilty assessments, 
                  penetration testing, digital forensics, identity management, identifying social engineering attacks, 
                  implementing cyber awareness training, developing policies/procedures/playbooks, risk management and risk assessments, firewalls, and threat hunting.
                </div>
              </div>
            </div>
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
                    Digital Media & IT - Computer Software
                    Development&nbsp;&nbsp;|&nbsp;&nbsp;Diploma
                  </strong>
                  <br />
                  The languages I learned during my time gaining this diploma
                  consisted of: HTML, CSS, C#/ASP.Net Framework Applications,
                  Java Jakarta EE8, Microsoft SQL, Oracle Database, Flutter and
                  Swift 4. I also learnt about MVC, UML, unit testing & quality
                  assurance, as well as agile development methodologies. During the program's final course, the "Capstone Project", my team and I
                  utilized SCRUM to create a WordPress site, database & admin
                  dashboard for an external client, which was the project chosen
                  to be used over other teams' final projects. During my tenure in the program, I
                  was placed on the Dean's Honour Roll for 2/4 terms.
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
                  Successfully achieved my high school diploma. I have always
                  been interested in evolving techologies, development & cybersecurity so
                  I decided to take up both programs at NAIT. During my free-time while in junior
                  high and high school I developed a few small websites that are
                  no longer hosted online, which utilized a Linux server and developed with Flash, HTML/CSS, and Javascript.
                </div>
              </div>
            </div>
          </Fade>
        </section>
        <section id="abilities">
          <Fade triggerOnce="true">
            <h2>Abilities</h2>
            <p className="quote">
              "Competence goes beyond words. It's the leader's ability to say
              it, plan it, and do it in such a way that others know that you
              know how - and know that they want to follow you."
              <br />
              <span className="speaker">-- John Maxwell</span>
            </p>
            <hr />

            <h3>Cybersecurity Tools</h3>
            <div className="row">
              <div className="col-md-6">
                <Rating title="Metasploit" star={4} startYear={2020} />
                <Rating title="Nessus" star={3} startYear={2020} />
                <Rating title="Nmap" star={3} startYear={2020} />
                <Rating title="Wireshark" star={3} startYear={2020} />
              </div>
              <div className="col-md-6">
                <Rating title="Autopsy" star={2} experienceString="(1 year)" />
                <Rating title="Burpsuite" star={2} startYear={2021} />
                <Rating title="IDA Debugger" star={2} experienceString="(1 year)" />
              </div>
            </div>

            <h3>Technologies</h3>
            <div className="row">
              <div className="col-md-6">
                <Rating title="Windows Desktops & Servers" star={5} experienceString="(10+ years)" />
                <Rating title="Visual Studio Code" star={5} startYear={2017} />
                <Rating title="Git" star={4} experienceString="(3 years)" />
                <Rating title="Linux Desktops & Servers" star={4} startYear={2018} />
              </div>
              <div className="col-md-6">
                <Rating title="MacOS" star={4} experienceString="(2 years)" />
                <Rating title="Microsoft Office" star={4} startYear={2016} />
                <Rating title="Visual Studio" star={4} experienceString="(3 years)" />
                <Rating title="Amazon Web Services" star={2} experienceString="(1 year)" />
              </div>
            </div>

            <h3>Development Skills</h3>

            <div className="row">
              <div className="col-md-6">
                <Rating title="Bootstrap Framework" star={5} />
                <Rating title="HTML" star={5} />
                <Rating title="CSS" star={4} />
                <Rating title="Javascript" star={4} />
                <Rating title="ReactJS" star={4} />
                <Rating title="SCRUM Methodology" star={4} />
              </div>
              <div className="col-md-6">
                <Rating title="Search Engine Optimization" star={4} />
                <Rating title="WordPress" star={4} />
                <Rating title="C#" star={3} />
                <Rating title="MySQL" star={3} />
                <Rating title="NodeJS" star={3} />
                <Rating title="Python" star={2} />
              </div>
            </div>
          </Fade>
        </section>
      </main>
      <footer className="container-fluid">
        <Bounce triggerOnce="true">
          <h2>Get in Touch</h2>

          <div className="row justify-content-center">
            <div className="col-lg-4">
              <a
                href={"https://github.com/ryanb1214"}
                className="media media-email"
              >
                <i className="media-icon bi bi-github"></i>
                <span className="media-text">ryanb1214</span>
              </a>
            </div>

            <div className="col-lg-4">
              <a
                href={"https://www.linkedin.com/in/ryanball99"}
                className="media media-email"
              >
                <i className="media-icon bi bi-linkedin"></i>
                <span className="media-text">ryanball99</span>
              </a>
            </div>

            <div className="col-lg-4">
              <a
                href={"mailto:ryanb1214@protonmail.com"}
                className="media media-email"
              >
                <i className="media-icon bi bi-envelope-fill"></i>
                <span className="media-text">ryanb1214@protonmail.com</span>
              </a>
            </div>
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
