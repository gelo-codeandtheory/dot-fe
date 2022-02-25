import styles from "./ArticleFooter.module.scss";
import {
  BookmarkIcon,
  FacebookIcon,
  LinkedInIcon,
  LinkIcon,
  ResponsesIcon,
  ThumbsUpIcon,
} from "./icons";
import TwitterIcon from "../components/icons/twitter.svg";
const ArticleFooter = () => (
  <footer className={styles["sticky-bottom"]}>
    <div className={styles["bottom-container"]}>
      <div className={styles["vote-container"]}>
        <button type="button">
          {/* thumbs up icon */}
          <ThumbsUpIcon />
          <p>50K</p>
        </button>

        {/* responses icon */}
        <button type="button">
          <ResponsesIcon />
          <p>177</p>
        </button>
      </div>
      <div className={styles["social-container"]}>
        <button type="button">
          <TwitterIcon />
        </button>
        <button type="button">
          <FacebookIcon />
        </button>
        <button type="button">
          <LinkedInIcon />
        </button>
        <button type="button">
          <LinkIcon />
        </button>
        <button type="button" className={styles["bookmark-icon"]}>
          <BookmarkIcon />
        </button>
      </div>
    </div>
  </footer>
);

export default ArticleFooter;
