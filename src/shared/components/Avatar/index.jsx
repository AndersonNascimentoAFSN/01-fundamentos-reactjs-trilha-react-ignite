import PropTypes from "prop-types";
import styles from "./styles.module.css";

export function Avatar({ link, title, hasBorder = true }) {
  return (
    <div>
      <img
        src={link}
        alt={title}
        className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      />
    </div>
  );
}

Avatar.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
};
