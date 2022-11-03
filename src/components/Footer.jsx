import I4G from "../assets/I4G-logo.svg"
import zuri from "../assets/zuri-logo.svg"

const Footer = () => {
    return (
        <footer>
            <img src={zuri} alt="zuri logo" />
            <p className="footer__text">HNG Internship 9 Frontend Task</p>
            <img src={I4G} alt="i4g logo" />
        </footer>
    );
}

export default Footer;