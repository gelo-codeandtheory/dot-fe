import type { NextPage, NextPageContext } from "next";
import Error from "next/error";
import ArticleFooter from "../components/ArticleFooter";
import Aside from "../components/Aside";
import { SearchIcon, SubscriptionIcon } from "../components/icons";
import PageContainer from "../components/PageContainer";
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
                <SearchIcon />
                <input type="search" placeholder="Search" />
              </div>
              <img src={data?.author?.image} alt="author" />
              <h2>{data?.author?.name}</h2>
              <p>108K Followers</p>
              <p>Make some magic. #Javascript</p>
              <div className={styles["subscription-buttons"]}>
                <button type="button" className={styles["follow-button"]}>
                  Follow
                </button>
                <button type="button" className={styles["subscription-button"]}>
                  <SubscriptionIcon />
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
  const res = await fetch(`${process.env.API_BASE_URL}articles/${id}`);
  const errorCode = res.ok ? false : res.status;

  if (errorCode) {
    return { props: { errorCode } };
  }

  const { article } = await res.json();
  return { props: { data: article } };
}

export default Home;
