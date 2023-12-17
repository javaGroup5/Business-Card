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
        <a
          href="https://yiwereamin.wixsite.com/my-site-1"
          target="_blank"
          rel="noreferrer"
        >
          My Portfolio
        </a>
      </p>
      <div className="profile-socials">
        <a href="mailto:yiwereamin@gmail.com" className="email">
          <FontAwesomeIcon icon={faEnvelope} />
          Email
        </a>
        <a
          href="https://www.linkedin.com/aminu-yiwere"
          target="_blank"
          rel="noreferrer"
          className="linkedin"
        >
          <FontAwesomeIcon icon={faLinkedin} />
          LinkedIn
        </a>
      </div>
    </div>
  );
}
