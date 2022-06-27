import { Header, Post, Sidebar } from "../../components";
import styles from "./styles.module.css";

const posts = [
  {
    id: 1,
    author: {
      role: "Web Developer @ Meta",
      name: "Anderson Nascimento",
      avatarUrl: "https://github.com/andersonnascimentoafsn.png",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala pessoal 👋",
      },
      ,
      {
        type: "paragraph",
        content:
          "Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻",
      },
      {
        to: "#",
        type: "link",
        content: "devonlane.design",
      },
    ],
    publishedAt: new Date("2022-05-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      role: "Web Developer @ Meta",
      name: "Anderson Nascimento",
      avatarUrl: "https://github.com/andersonnascimentoafsn.png",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala pessoal 👋",
      },
      ,
      {
        type: "paragraph",
        content:
          "Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻",
      },
      {
        to: "#",
        type: "link",
        text: 'Acesse e deixe seu feedback 👉 ',
        content: "devonlane.design",
      },
    ],
    publishedAt: new Date("2022-05-03 20:00:00"),
  },
];

export function Home() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {/* <Post
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
          /> */}

          {posts.map((post) => (
            <Post
              id={post.id}
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </>
  );
}
