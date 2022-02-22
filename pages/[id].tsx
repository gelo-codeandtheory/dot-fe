import type { NextPage, NextPageContext } from "next";
import Error from "next/error";
import ArticleFooter from "../components/ArticleFooter";
import Footer from "../components/ArticleFooter";
import Aside from "../components/Aside";
import Header from "../components/Header";
import PageContainer from "../components/PageContainer";
import Article from "../models/Article";
import styles from "../styles/Article.module.scss";

const Home: NextPage = (props: any) => {
  const { data } = props;
  console.log("props", props);

  if (props.errorCode) {
    return <Error statusCode={props.errorCode} />;
  }

  return (
    <PageContainer>
      <div>
        <div className={styles["content-header-container"]}>
          <div className={styles["content-header"]}>
            <img src="https://miro.medium.com/fit/c/64/64/1*fegbK6HDD8crwrwARuMhaQ.png" />
            <p>
              Published in <a href="#">{data?.publisher}</a> ·
              <a href="http://"> Follow</a>
            </p>
          </div>
        </div>
        <div className={styles["content"]}>
          <div className={styles["author"]}>
            <img src={data?.author?.image} alt="author" />
            <div className={styles["author-details"]}>
              <p>{data?.author?.name}</p>
              <p>
                {data?.datePublish} · {data?.timeRead}
              </p>
            </div>
          </div>
          <h1 className={styles["title"]}>{data?.title}</h1>
          <h2 className={styles["subheader"]}>{data?.subheader}</h2>
          <section
            className={styles["article"]}
            dangerouslySetInnerHTML={{ __html: data?.content }}
          />
        </div>
        <ArticleFooter />
      </div>
      <Aside>
        <div>
          <div className={styles["buttons-container"]}>
            <button className={styles["get-started"]} type="button">
              Get started
            </button>
            <button className={styles["sign-in"]} type="button">
              Sign In
            </button>
          </div>
          <div className={styles["related-container"]}>
            <div className={styles["related-author-container"]}>
              <div className={styles["search-container"]}>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="rgba(8, 8, 8, 1)"
                >
                  <path d="M20.07 18.93l-4.16-4.15a6 6 0 1 0-.88.88l4.15 4.16a.62.62 0 1 0 .89-.89zM6.5 11a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0z"></path>
                </svg>
                <input type="search" placeholder="Search" />
              </div>
              <img
                src="https://miro.medium.com/fit/c/96/96/1*VZfJFJj5oVmZ5WzlrgSmRg.jpeg"
                alt="author"
              />
              <h2>Eric Elliott</h2>
              <p>108K Followers</p>
              <p>Make some magic. #Javascript</p>
              <div className={styles["subscription-buttons"]}>
                <button type="button" className={styles["follow-button"]}>
                  Follow
                </button>
                <button type="button" className={styles["subscription-button"]}>
                  <svg
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    fill="none"
                    className={styles["oe nz oa"]}
                  >
                    <rect
                      x="26.25"
                      y="9.25"
                      width="0.5"
                      height="6.5"
                      rx="0.25"
                      strokeWidth="0.5"
                    ></rect>
                    <rect
                      x="29.75"
                      y="12.25"
                      width="0.5"
                      height="6.5"
                      rx="0.25"
                      transform="rotate(90 29.75 12.25)"
                      strokeWidth="0.5"
                    ></rect>
                    <path
                      d="M19.5 12.5h-7a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-5"
                      strokeLinecap="round"
                    ></path>
                    <path d="M11.5 14.5L19 20l4-3" strokeLinecap="round"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className={styles["related-articles"]}>
              <h2>Related</h2>
              <div className={styles["related-items"]}>
                <div className={styles["related-item"]}>
                  <img
                    src="https://miro.medium.com/focal/58/58/50/50/0*SYbbtHZcvbFB0fHR.jpg"
                    alt="related article"
                  />
                  <p>Currying for Javascript Developers with Examples</p>
                </div>
                <div className={styles["related-item"]}>
                  <img
                    src="https://miro.medium.com/focal/58/58/50/50/0*SYbbtHZcvbFB0fHR.jpg"
                    alt="related article"
                  />
                  <p>Currying for Javascript Developers with Examples</p>
                </div>
                <div className={styles["related-item"]}>
                  <img
                    src="https://miro.medium.com/focal/58/58/50/50/0*SYbbtHZcvbFB0fHR.jpg"
                    alt="related article"
                  />
                  <p>Currying for Javascript Developers with Examples</p>
                </div>
                <div className={styles["related-item"]}>
                  <img
                    src="https://miro.medium.com/focal/58/58/50/50/0*SYbbtHZcvbFB0fHR.jpg"
                    alt="related article"
                  />
                  <p>Currying for Javascript Developers with Examples</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Aside>
    </PageContainer>
  );
};

export async function getServerSideProps(context: any) {
  const { id } = context.params;
  console.log("context", context);
  const res = await fetch(`http://localhost:3000/api/articles/${id}`);
  const errorCode = res.ok ? false : res.status;

  if (errorCode) {
    return { props: { errorCode } };
  }

  const { article } = await res.json();
  console.log("article", article);
  return { props: { data: article } };
}

export default Home;
