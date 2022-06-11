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
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum consequuntur at suscipit facilis deleniti, assumenda necessitatibus debitis dolorum iure blanditiis porro numquam quaerat dolorem praesentium. Ullam quo sunt molestias unde."
          />
        </main>
      </div>
    </>
  );
}
