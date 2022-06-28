import { useState } from "react";
// import PropTypes from "prop-types";
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
import styles from "./styles.module.css";
// import { FormatDates } from "../../utils/FormatDates";

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState([
    { id: 1, content: "Muito bom Devon, parabéns!! 👏👏" },
  ]);
  const [newComment, setNewComment] = useState("");

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const handleNewCommentChange = (event) => {
    event.target.setCustomValidity("");
    setNewComment(event.target.value);
  };

  function handleCreateNewComment(event) {
    event.preventDefault();
    // const newCommentText = event.target.comment.value; // programação imperativa
    setComments((comments) => [
      ...comments,
      // { id: comments[comments.length - 1].id + 1, content: newCommentText }, // programação imperativa
      { id: comments[comments.length - 1].id + 1, content: newComment }, // programação declarativa
    ]);
    setNewComment("");
    // event.target.comment.value = ""; // programação imperativa
  }

  function deleteComment(id) {
    // const newListComments = [...comments]; // imutabilidade, as variáveis não sofrem mutação, nós criamos um novo valor (um novo espaço na memória);
    // const index = newListComments.findIndex((comment) => comment.id === +id);
    // const commentsWithoutDeletedOne = newListComments.splice(index, 1);

    const commentsWithoutDeletedOne = comments.filter(
      (comment) => comment.id !== id
    );

    setComments(commentsWithoutDeletedOne);
  }

  function handleNewCommentInvalid(event) {
    event.target.setCustomValidity("Esse campo é obrigatório");
  }

  const isNewCommentEmpty = newComment.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar link={author.avatarUrl} title="Foto profile usuário" />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(({ to, type, content, text = "" }) => {
          const contentElement = {
            paragraph: <p key={content}>{content}</p>,
            link: (
              <p key={content}>
                {text}
                <a href={to}>{content}</a>
              </p>
            ),
          };
          return contentElement[type];
          // if (type === "paragraph") return <p key={index}>{content}</p>;
          // if (type === "link")
          //   return (
          //     <p key={index}>
          //       {text}
          //       <a href={to}>{content}</a>
          //     </p>
          //   );
        })}
      </div>

      <form
        name="feedbacks"
        onSubmit={handleCreateNewComment}
        className={styles.commentForm}
      >
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          value={newComment}
          onChange={handleNewCommentChange}
          placeholder="Escreva um comentário..."
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment
            id={comment.id}
            key={comment.id}
            content={comment.content}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  );
}

// Post.propTypes = {
//   author: PropTypes.string,
//   content: PropTypes.string,
//   publishedAt: PropTypes.string,
// };
