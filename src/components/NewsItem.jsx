export default function NewsItem({ title, description }) {
  return (
    <div className="news_item">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}