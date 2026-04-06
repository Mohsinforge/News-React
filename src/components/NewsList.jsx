import NewsItem from './NewsItem';

const news = [
  {
    id: 1,
    title: "New ES6 upgrade available",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto."
  },
  {
    id: 2,
    title: "The importance of React in development",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi."
  },
  {
    id: 3,
    title: "React developers going on strike",
    description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit."
  },
  {
    id: 4,
    title: "JavaScript frameworks compared in 2025",
    description: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est."
  },
];

export default function NewsList() {
  return (
    <div className="container">
      {news.map(item => (
        <NewsItem key={item.id} title={item.title} description={item.description} />
      ))}
    </div>
  );
}