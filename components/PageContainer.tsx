import type { NextPage } from "next";
import ArticleFooter from "./ArticleFooter";
import Header from "../components/Header";
import Aside from "./Aside";
import Footer from "./Footer";
import styles from "./PageContainer.module.scss";

const PageContainer = (props: any) => {
  return (
    <>
      <div className={styles["container"]}>
        <Header />
        <main className={styles["content-container"]}>{props.children}</main>
      </div>
      <Footer />
    </>
  );
};

export default PageContainer;
