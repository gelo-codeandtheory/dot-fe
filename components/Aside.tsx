import styles from "./Aside.module.scss";

const Aside = (props: any) => {
  const { children } = props;

  return (
    <aside className={styles["secondary-nav-container"]}>
      <div className={styles["secondary-nav"]}>
        {/* {renderArticleAside} */}
        {children}
        <div className={styles["site-maps"]}>
          <a href="#">Help</a>
          <a href="#">Status</a>
          <a href="#">Writers</a>
          <a href="#">Blog</a>
          <a href="#">Careers</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">About</a>
          <a href="#">Knowable</a>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
