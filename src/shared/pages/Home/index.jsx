import { Header, Post, Sidebar } from "../../components";
import styles from "./styles.module.css";

export function Home() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Anderson Nascimento"
            role="Web Developer"
            content={[
              "Fala pessoal 👋",
              "Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻",
              <>
                Acesse e deixe seu feedback 👉 <a href="#">devonlane.design</a>
              </>,
              <>
                <a href="#">#uiux</a> <a href="#">#userexperience</a>
              </>,
            ]}
          />
          <Post
            author="Anderson Nascimento"
            role="Web Developer"
            content={[
              "Fala pessoal 👋",
              "Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻",
              <>
                Acesse e deixe seu feedback 👉 <a href="#">devonlane.design</a>
              </>,
              <>
                <a href="#">#uiux</a> <a href="#">#userexperience</a>
              </>,
            ]}
          />
        </main>
      </div>
    </>
  );
}
