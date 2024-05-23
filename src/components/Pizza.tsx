// Define the interface for the props
interface PizzasProps {
  id: string;
  name: string;
  ingredients: string;
  price: number;
  photoName: string;
  soldOut: boolean;
}

// Define the type for the component's props
interface PizzaListProps {
  pizzaDatas: PizzasProps[];
}

const Pizza: React.FC<PizzaListProps> = ({ pizzaDatas }) => {
  console.log(pizzaDatas);
  return (
    <div className="pizzas">
      {pizzaDatas.map((pizzaData: PizzasProps) => (
        <div className="pizza" key={pizzaData.id}>
          <div>
            <h3>{pizzaData.name}</h3>
            <img src={pizzaData.photoName} alt={pizzaData.name} />
            <p>{pizzaData.ingredients}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Pizza;
