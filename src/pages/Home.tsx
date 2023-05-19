import Card from "../components/Card";
import data from "../data/stays.json";

function Home() {
  return (
    <div className="grid grid-cols-4 gap-6">
      {data.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Home;
