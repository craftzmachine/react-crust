import Header from "./components/Header";
import Pizza from "./components/Pizza";
import pizzaDatas from "./data/data.json";

const App: React.FC = () => {
  console.log(pizzaDatas);
  return (
    <>
      <Header />
      <Pizza pizzaDatas={pizzaDatas} />
    </>
  );
};

export default App;
