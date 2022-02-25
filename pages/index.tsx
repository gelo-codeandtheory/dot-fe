import type { NextPage } from "next";
import ArticleFooter from "../components/ArticleFooter";
import Aside from "../components/Aside";
import { SearchIcon, SubscriptionIcon } from "../components/icons";
import PageContainer from "../components/PageContainer";
import styles from "../styles/Article.module.scss";
import Image from "next/image";

const Home: NextPage = (props: any) => {
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
              Published in <a href="#">Javascript Scene</a> ·
              <a href="http://"> Follow</a>
            </p>
          </div>
        </div>
        <div className={styles["content"]}>
          <div className={styles["author"]}>
            <Image
              src="/author1.jpeg"
              alt="author"
              width={48}
              height={48}
              layout="intrinsic"
            />
            <div className={styles["author-details"]}>
              <p>Eric Elliott</p>
              <p>Oct 3, 2015 · 13 min read</p>
            </div>
          </div>
          <h1 className={styles["title"]}>
            10 Interview Questions Every Javascript Developer Should Know
          </h1>
          <h2 className={styles["subheader"]}>
            AKA: The Keys to Javascript Mastery
          </h2>
          <section className={styles["article"]}>
            <h1>Update: 2020</h1>
            <p>
              In the years since I wrote this article, a lot has changed. When I
              wrote it, lots of developers were coming to JavaScript from
              languages like Java and C++, lacking any understanding of how
              objects work in JavaScript, and trying to apply obsolete patterns,
              such as deeply layered inheritance hierarchies.
            </p>
            <p>
              Thanks in part to warnings from influential software developers
              and framework authors (particularly the authors of React, who
              wisely listened to the warnings and encouraged better alternatives
              such as higher order components and React hooks for idiomatic
              React), the trend of overusing class inheritance in JavaScript has
              mostly died. And it’s missed by nobody.
            </p>
            <p>In recent job interviews, here’s what I do:</p>
            <p>
              <strong>Ask the candidate to build a click counter</strong> using
              any popular framework (React preferred in 2020). This ridiculously
              simple app has one job: keep track of how many times the user has
              clicked the button during the current session. No storage. No
              network I/O. Just count clicks. It is intentionally ridiculously
              simple: We’re not trying to stump the developer — we’re just
              trying to verify that they know how to code. I prefer to do this
              in a pair programming session via a remote Zoom meeting — no use
              flying a candidate to some office just to watch them code.
            </p>

            <figure>
              <iframe
                src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F37rMZSA6oLk%3Ffeature%3Doembed&amp;url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D37rMZSA6oLk&amp;image=https%3A%2F%2Fi.ytimg.com%2Fvi%2F37rMZSA6oLk%2Fhqdefault.jpg&amp;key=a19fcc184b9711e1b4764040d3dc5c07&amp;type=text%2Fhtml&amp;schema=youtube"
                frameBorder="0"
                height="480"
                width="854"
                title="The Profit Principles With Marcus Lemonis | The Profit"
                className="eg aq as ag dq"
                scrolling="auto"
              ></iframe>
            </figure>

            <ol>
              <li>
                <h2>
                  Can you name two programming paradigms important for
                  Javascript app developers?
                </h2>
                <p>
                  JavaScript is a multi-paradigm language, supporting
                  imperative/procedural programming along with OOP
                  (Object-Oriented Programming) and functional programming.
                  JavaScript supports OOP with prototypal inheritance.
                </p>
                <p>
                  <strong>Good to hear:</strong>
                </p>
                <ul>
                  <li>Prototypal inheritance (also: prototypes, OLOO).</li>
                  <li>
                    Functional programming (also: closures, first class
                    functions, lambdas).
                  </li>
                </ul>
                <p>
                  <strong>Red flags:</strong>
                </p>
                <ul>
                  <li>
                    No clue what a paradigm is, no mention of prototypal oo or
                    functional programming.
                  </li>
                </ul>
                <p>
                  <strong>Learn More:</strong>
                </p>
                <ul>
                  <li>The Two Pillars of JavaScript Part 1 — Prototypal OO.</li>
                  <li>
                    The Two Pillars of JavaScript Part 2 — Functional
                    Programming.
                  </li>
                </ul>
              </li>
              <li>
                <h2>What is functional programming</h2>
                <p>
                  Functional programming produces programs by composing
                  mathematical functions and avoids shared state & mutable data.
                  Lisp (specified in 1958) was among the first languages to
                  support functional programming, and was heavily inspired by
                  lambda calculus. Lisp and many Lisp family languages are still
                  in common use today.
                </p>
                <p>
                  Functional programming is an essential concept in JavaScript
                  (one of the two pillars of JavaScript). Several common
                  functional utilities were added to JavaScript in ES5.
                </p>
              </li>
            </ol>
          </section>
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
              <Image
                src="/author1.jpeg"
                alt="author"
                width={100}
                height={100}
                layout="intrinsic"
              />
              <h2>Eric Elliott</h2>
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
                  <Image
                    src="/recommendation.jpeg"
                    alt="related article"
                    width={50}
                    height={50}
                    layout="intrinsic"
                  />
                  <p>Currying for Javascript Developers with Examples</p>
                </div>
                <div className={styles["related-item"]}>
                  <Image
                    src="/recommendation.jpeg"
                    alt="related article"
                    width={50}
                    height={50}
                    layout="intrinsic"
                    className={styles["related-image"]}
                  />
                  <p>Currying for Javascript Developers with Examples</p>
                </div>
                <div className={styles["related-item"]}>
                  <Image
                    src="/recommendation.jpeg"
                    alt="related article"
                    width={50}
                    height={50}
                    layout="intrinsic"
                  />
                  <p>Currying for Javascript Developers with Examples</p>
                </div>
                <div className={styles["related-item"]}>
                  <Image
                    src="/recommendation.jpeg"
                    alt="related article"
                    width={50}
                    height={50}
                    layout="intrinsic"
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

export default Home;
