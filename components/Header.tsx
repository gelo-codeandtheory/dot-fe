import Link from "next/link";
import styles from "./Header.module.scss";
import {
  ArticleIcon,
  EditIcon,
  HomeIcon,
  LogoIcon,
  NotificationIcon,
  SaveIcon,
} from "./icons";

const Header = () => (
  <>
    <nav className={styles["nav-container"]}>
      <div className={styles["nav"]}>
        <Link href="/">
          <LogoIcon className={styles["brand"]} />
        </Link>
        <div className={styles["nav-items"]}>
          <Link href="/">
            <HomeIcon className={styles["nav-item"]} />
          </Link>
          <NotificationIcon className={styles["nav-item"]} />
          <SaveIcon className={styles["nav-item"]} />
          <ArticleIcon className={styles["nav-item"]} />
          <div className={styles["nav-item"]}>
            <hr />
          </div>
          <EditIcon className={styles["nav-item"]} />
        </div>
      </div>
    </nav>
  </>
);

export default Header;
