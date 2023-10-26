// import logo from './logo.svg';
import logo from './img/Profile-picture.png';
import COWI from './img/cowi.png';
import linkedinLogo from './img/LinkedIn.png';
import Atkins from './img/Atkins.png';
import LTH from './img/LTH.png'
import DHL from './img/DHL.png'
import Uniflex from './img/Uniflex.png'
import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='small-intro'>
          Hey, I'm
        </p>
        <p className='big-intro'>Gabriel Johansson</p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <main className='App-main'>
        <div>
          <h1 className='hr-lines'>My Story</h1>
        </div>
        <div className='heading1-content'>
          <h3>
            Experienced building engineer now looking to move into the
            exciting field of software development.
            As a curious person I like to challenge myself. I love
            how coding gives you the power to solve complex problems
            in a controlled and logical way.
          </h3>
        </div>
        {/* <div className='skills'>
        </div> */}
        <div className='main-content'>
          <aside><img className='company-logo Cowi' src={COWI} alt="COWI" /></aside>
          <section className='main-content-sections'>
            <h2 className='main-content-headers'>COWI AB (Bridge designer)</h2>
            <h3 className='main-content-duration'>November 2021 - November 2022</h3>
            <p>
              As a bridge designer, I’ve been modelling different types of
              bridges, both manually in programs such as Autocad and
              Revit, but also using parameters with the use of VBA scripts
              in excel. I’ve been cooperating a lot between different
              disciplines in projects e,g geotechnicians, rail, hydro.
            </p>
          </section>
          <aside><img className='company-logo Atkins' src={Atkins} alt="Atkins" /></aside>
          <section className='main-content-sections'>
            <h2 className='main-content-headers'>Atkins (Thesis)</h2>
            <h3 className='main-content-duration'>February 2020 - June 2020</h3>
            <p>
              Wrote my thesis together with Atkins in Helsingborg about
              optimization of concrete/steel reinforcement in regards to
              cost and environmental effects.
            </p>
          </section>
          <aside><img className='company-logo LTH' src={LTH} alt="LTH" /></aside>
          <section className='main-content-sections'>
            <h2 className='main-content-headers'>Volleyball-leader (Volunteer)</h2>
            <h3 className='main-content-duration'>September 2018 - May 2019</h3>
            <p>
              Volleyball-leader in a student organization in Helsingborg
              during a year, roughly 25 students present twice a week. This
              included organising tournaments in Malmö.
            </p>
          </section>
          <aside><img className='company-logo DHL' src={DHL} alt="DHL" /></aside>
          <section className='main-content-sections'>
            <h2 className='main-content-headers'>DHL (Traffic Coordinator)</h2>
            <h3 className='main-content-duration'>June 2018 - August 2018</h3>
            <p>
              Office work where I was in contact with transport agencies
              regarding what and where they were shipping. Solving any
              issues that would arise such as delays, express shipping, wrong
              or missing cargo.
            </p>
          </section>
          <aside><img className='company-logo Uniflex' src={Uniflex} alt="Uniflex" /></aside>
          <section className='main-content-sections'>
            <h2 className='main-content-headers'>Uniflex (Logistician)</h2>
            <h3 className='main-content-duration'>June 2017 (2 weeks)</h3>
            <p>
              Responsible for a smaller warehouse where I independently
              took care of incoming and outgoing products and managed the
              logistics of the warehouse. Internal processes were learnt and
              executed with tight time constraints as I was a stand-in
            </p>
          </section>
        </div>
      </main>
      <footer className='footer'>
        <div className='footer-container'>
          <div className='footer-box'><a href="https://www.linkedin.com/in/gabriel-johansson-ab326819b"><img src={linkedinLogo} className="linkedin-logo" alt="linkedin-logo" />LinkedIn</a></div>
          <div className='footer-box'>gabriel.emil.johansson@gmail.com</div>
          <div className='footer-box'>+46 709 59 16 10</div>
        </div>
      </footer>
    </div>
  );
}
export default App;
