import pizzas from "../../data/pizzas.json";
import img28 from "../../assets/image6.svg"; 
import img29 from "../../assets/image9.svg"; 
import img30 from "../../assets/image10.svg"; 
import img31 from "../../assets/image21.svg"; 
import img32 from '../../assets/shrimp.svg';
import img33 from '../../assets/Pizza1.svg';
import img34 from '../../assets/Pizza2.svg';
import img35 from '../../assets/top-view-pizza-with-ai-generated-free-png.svg';
import img36 from '../../assets/diablo.svg';
import img37 from '../../assets/toppng1.svg';
import './List.css'
const images = {
  peperoni: img28,
  margarita: img29,
  vegeterian: img30,
  strawberry: img31,
  shrimp:img32,
  bbq:img33,
  pesto:img34,
  mushroom:img35,
  diablo:img36,
  mix:img37
};

function List() {
  return (
    <div className="elems">
      {pizzas.map((pizza) => (
        <div key={pizza.id} className="elem">
            <img src={images[pizza.src]} alt={pizza.name} width={120} />
            <div className="ins">
                <h2>{pizza.name}</h2>
                <p>{pizza.description}</p>
                <strong>{pizza.price} ₸</strong><br />
            </div>
            <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}
export default List