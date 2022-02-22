import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles["footer"]}>
      <div className="social-container">
        <button type="button">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            className="bx xi"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15 27a12 12 0 1 0 0-24 12 12 0 0 0 0 24zm4.95-16.17a2.67 2.67 0 0 0-4.6 1.84c0 .2.03.41.05.62a7.6 7.6 0 0 1-5.49-2.82 3 3 0 0 0-.38 1.34c.02.94.49 1.76 1.2 2.23a2.53 2.53 0 0 1-1.2-.33v.04c0 1.28.92 2.36 2.14 2.62-.23.05-.46.08-.71.1l-.21-.02-.27-.03a2.68 2.68 0 0 0 2.48 1.86A5.64 5.64 0 0 1 9 19.38a7.62 7.62 0 0 0 4.1 1.19c4.9 0 7.58-4.07 7.57-7.58v-.39c.52-.36.97-.83 1.33-1.38-.48.23-1 .37-1.53.43.56-.33.96-.86 1.15-1.48-.5.31-1.07.53-1.67.66z"
              fill="#292929"
            ></path>
          </svg>
        </button>
        <button type="button">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            className="bx xi"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15 27a12 12 0 1 0 0-24 12 12 0 0 0 0 24zm-1.23-6.03V15.6H12v-2.15h1.77v-1.6C13.77 10 14.85 9 16.42 9c.75 0 1.4.06 1.58.08v1.93h-1.09c-.85 0-1.02.43-1.02 1.05v1.38h2.04l-.27 2.15H15.9V21l-2.13-.03z"
              fill="#292929"
            ></path>
          </svg>
        </button>
        <button type="button">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            className="bx xi"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M27 15a12 12 0 1 1-24 0 12 12 0 0 1 24 0zm-14.61 5v-7.42h-2.26V20h2.26zm-1.13-8.44c.79 0 1.28-.57 1.28-1.28-.02-.73-.5-1.28-1.26-1.28-.78 0-1.28.55-1.28 1.28 0 .71.49 1.28 1.25 1.28h.01zM15.88 20h-2.5s.04-6.5 0-7.17h2.5v1.02l-.02.02h.02v-.02a2.5 2.5 0 0 1 2.25-1.18c1.64 0 2.87 1.02 2.87 3.22V20h-2.5v-3.83c0-.97-.36-1.62-1.26-1.62-.69 0-1.1.44-1.28.87-.06.15-.08.36-.08.58v4z"
              fill="#292929"
            ></path>
          </svg>
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
