const stats = [
  { number: "500+", label: "Businesses Automated" },
  { number: "1M+", label: "Messages Handled Monthly" },
  { number: "24/7", label: "Automated Support" },
  { number: "98%", label: "Client Satisfaction" }
];

const Stats = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-secondary to-secondary/90 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl font-bold mb-2 text-primary">{stat.number}</div>
              <div className="text-sm opacity-80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;