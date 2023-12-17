import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Info() {
  return (
    <div className="info">
      <img
        src="./src/assets/images/aminoffice.png"
        alt="Profile photo"
        className="profile-photo"
      ></img>
      <p className="name">Aminu Yiwere</p>
      <p className="profession">Frontend Developer</p>
      <p className="website">
        <a href="www.amin.com">yiwereamin.com</a>
      </p>
      <div className="profile-socials">
        <a href="#" className="email">
          <FontAwesomeIcon icon={faEnvelope} />
          Email
        </a>
        <a href="#" className="linkedin">
          <FontAwesomeIcon icon={faLinkedin} />
          LinkedIn
        </a>
      </div>
    </div>
  );
}
