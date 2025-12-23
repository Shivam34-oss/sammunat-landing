import "./Features.css";

const data = [
  { title: "Modern Tech", desc: "Built with latest tools and best practices." },
  { title: "Secure Systems", desc: "Security-first development approach." },
  { title: "Scalable Design", desc: "Ready for future growth." },
];

const Features = () => {
  return (
    <section className="features">
      {data.map((item, i) => (
        <div key={i} className="card">
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;
