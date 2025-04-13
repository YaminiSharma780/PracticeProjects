export default function PostCard(props) {
  const { title, tags } = props;
  return (
    <div className="post-card">
      <div className="upper-card-container">
        <h3>{title}</h3>
      </div>
      <div className="lower-card-container">
        <div className="tags-array">
          {tags.map((t, i) => {
            return <span key={i} className="tags">#{t}</span>;
          })}
        </div>
      </div>
    </div>
  );
}
