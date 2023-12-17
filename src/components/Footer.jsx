import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer>
      <a
        href="https://www.github.com/yiwereaminu"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} size="xl" />
      </a>
      <a href="https://x.com/0x1AY" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faXTwitter} size="xl" />
      </a>
    </footer>
  );
}
