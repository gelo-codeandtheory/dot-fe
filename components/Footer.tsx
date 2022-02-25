import styles from "./Footer.module.scss";
import { FacebookIcon, LinkedInIcon, TwitterIcon } from "./icons";

const Footer = () => {
  return (
    <div className={styles["footer"]}>
      <div className="social-container">
        <button type="button">
          <TwitterIcon />
        </button>
        <button type="button">
          <FacebookIcon />
        </button>
        <button type="button">
          <LinkedInIcon />
        </button>
      </div>
      <hr />
      <div>
        <p>&copy; Copyright Medium. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
