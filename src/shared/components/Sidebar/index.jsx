import { PencilLine } from "phosphor-react";
import styles from "./styles.module.css";
import background from "../../../assets/background.jpeg";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img src={background} alt="Imagem de background definida pelo usuário" />
      <header className={styles.profile}>
        <img
          src="https://github.com/andersonnascimentoafsn.png"
          alt="Foto do perfil do usuário"
          className={styles.avatar}
        />
        <strong className={styles.name}>Anderson Nascimento</strong>
        <span className={styles.role}>Web Developer</span>
      </header>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
