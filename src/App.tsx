import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Pizza from "./components/Pizza";

import pizzaDatas from "./data/data.json";

const App: React.FC = () => {
  console.log(pizzaDatas);
  return (
    <div className="container">
      <Header />
      <Menu />
      <Pizza pizzaDatas={pizzaDatas} />
      <Footer />
    </div>
  );
};

export default App;
