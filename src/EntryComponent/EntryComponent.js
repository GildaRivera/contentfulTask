import "./EntryComponent.css";

function EntryComponent({ title, content, author }) {
  return (<>
    <article className="entry">
      <h1>{title}</h1>
      <article className="entry__data">
        <blockquote>{content}</blockquote>
        <addres className="entry__author">-{author}</addres>
      </article>
    </article></>
  );
}

export default EntryComponent;
