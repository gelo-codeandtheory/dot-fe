import Link from "next/link";
import styles from "./Aside.module.scss";

const Aside = (props: any) => {
  const { children } = props;

  return (
    <aside className={styles["secondary-nav-container"]}>
      <div className={styles["secondary-nav"]}>
        {children}
        <div className={styles["site-maps"]}>
          <Link href="/">
            <a>Help</a>
          </Link>
          <Link href="/">
            <a>Status</a>
          </Link>
          <Link href="/">
            <a>Writers</a>
          </Link>
          <Link href="/">
            <a>Blog</a>
          </Link>
          <Link href="/">
            <a>Careers</a>
          </Link>
          <Link href="/">
            <a>Privacy</a>
          </Link>
          <Link href="/">
            <a>Terms</a>
          </Link>
          <Link href="/">
            <a>About</a>
          </Link>
          <Link href="/">
            <a>Knowable</a>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
