import type { NextPage, NextPageContext } from "next";
import Error from "next/error";
import Image from "next/image";
import Link from "next/link";
import ArticleFooter from "../components/ArticleFooter";
import Aside from "../components/Aside";
import { SearchIcon, SubscriptionIcon } from "../components/icons";
import PageContainer from "../components/PageContainer";
import Article from "../models/Article";
import styles from "../styles/Article.module.scss";

const Home: NextPage = (props: any) => {
  const {
    publisher,
    author,
    datePublish,
    timeRead,
    title,
    subheader,
    content,
    recommendations,
  }: Article = props;

  if (props.errorCode) {
    return <Error statusCode={props.errorCode} />;
  }

  return (
    <PageContainer>
      <div>
        <div className={styles["content-header-container"]}>
          <div className={styles["content-header"]}>
            <Image
              src="/publisher1.png"
              width={32}
              height={32}
              layout="intrinsic"
            />
            <p>
              Published in{" "}
              <Link href="/">
                <a>{publisher}</a>
              </Link>{" "}
              ·
              <Link href="/">
                <a> Follow</a>
              </Link>
            </p>
          </div>
        </div>
        <div className={styles["content"]}>
          <div className={styles["author"]}>
            {author?.name && (
              <Image
                src={author.image}
                alt="author"
                width={48}
                height={48}
                layout="intrinsic"
              />
            )}
            <div className={styles["author-details"]}>
              {author?.name && <p>{author.name}</p>}
              {datePublish && timeRead && (
                <p>
                  {datePublish} · {timeRead}
                </p>
              )}
            </div>
          </div>
          {title && <h1 className={styles["title"]}>{title}</h1>}
          {subheader && <h2 className={styles["subheader"]}>{subheader}</h2>}
          {content && (
            <section
              className={styles["article"]}
              dangerouslySetInnerHTML={{ __html: content }}
            />
          )}
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
              {author?.image && (
                <Image
                  src={author.image}
                  alt="author"
                  width={100}
                  height={100}
                  layout="intrinsic"
                />
              )}
              {author?.name && <h2>{author.name}</h2>}
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
              {recommendations &&
                recommendations?.length &&
                recommendations.map((r) => (
                  <div className={styles["related-items"]}>
                    <div className={styles["related-item"]}>
                      {r?.image && (
                        <Image
                          src={r.image}
                          alt="related article"
                          width={50}
                          height={50}
                          layout="intrinsic"
                        />
                      )}
                      {r?.title && <p>{r.title}</p>}
                    </div>
                  </div>
                ))}
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
  return { props: { ...article } };
}

export default Home;
