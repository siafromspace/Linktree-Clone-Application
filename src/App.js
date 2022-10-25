import './App.css';
import profilePic from "./assets/profile__img.svg"
import github from "./assets/github-icon.svg"
import slack from "./assets/slack-icon.svg"
import I4G from "./assets/I4G-logo.svg"
import zuri from "./assets/zuri-logo.svg"
import desktopMenu from "./assets/menu-desktop.svg"
import mobileMenu from "./assets/menu-mobile.svg"

function App() {

  const twitter = "https://twitter.com/frdsharon"
  const btnZuri = "https://training.zuri.team/"
  const books = "http://books.zuri.team"
  const bookPython = "https://books.zuri.team/python-for-beginners?ref_id=ysharon"
  const pitch = "https://background.zuri.team"
  const bookDesign = "https://books.zuri.team/design-rules"
  const githubLink = "https://github.com/siafromspace"
  const slackLink = ""


  return (
    <>
      <header>
        <div>
          <div className="profile__pic">
            <img src={profilePic} alt="profile pic" id="profile__img" />
          </div>
          <p id="twitter">Sharon Yakubu</p>
          <p id="slack">Sharon Yakubu</p>
        </div>
        <div className="menu">
          <div className="desktop__menu" >
            <img src={desktopMenu} alt="desktop menu" />
          </div>
          <div className="mobile__menu">
            <img src={mobileMenu} alt="mobile menu" />
          </div>
        </div>
      </header>
      <main>
        <div className="link__tree">
          <a href={twitter} className="link" id="twitter__link">Twitter Link</a>
          <a href={btnZuri} className="link" id="btn__zuri">Zuri Team</a>
          <a href={books} className="link" id="books">Zuri Books</a>
          <a href={bookPython} className="link" id="book__python">Python Books</a>
          <a href={pitch} className="link" id="pitch">Background Check for Coders</a>
          <a href={bookDesign} className="link" id="book__design">Design Books</a>
        </div>
        <div className="social__links">
          <a href={slackLink}>
            <img src={slack} alt="slack" />
          </a>
          <a href={githubLink}>
            <img src={github} alt="github" />
          </a>
        </div>
      </main>
      <footer>
        <img src={zuri} alt="zuri logo" />
        <p className="footer__text">HNG Internship 9 Frontend Task</p>
        <img src={I4G} alt="i4g logo" />
      </footer>
    </>
  );
}

export default App;
