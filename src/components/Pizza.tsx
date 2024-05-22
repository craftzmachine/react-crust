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
    <>
      {pizzaDatas.map((pizzaData: PizzasProps) => (
        <div key={pizzaData.id}>
          <h2>{pizzaData.name}</h2>
          <img src={pizzaData.photoName} alt={pizzaData.name} />
          <p>{pizzaData.ingredients}</p>
        </div>
      ))}
    </>
  );
};

export default Pizza;
