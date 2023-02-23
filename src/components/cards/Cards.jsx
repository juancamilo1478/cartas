//component card ,show the cards
import Card from "./Card";
import fotos from "../../img/portada.jpg";
import { useSelector } from "react-redux";
//accion todas las cartas
export default function Cards() {
  const cartass = useSelector((state) => state.allcards);

  return (
    <div className="cards_todo">
      <img src={fotos} alt="foto" className="cards_foto" />
      <div className="cards_container">
        {cartass &&
          cartass?.map((data, index) => {
            return (
              <Card
                name={data.name}
                gender={data.gender}
                species={data.species}
                image={data.image}
                id={data.id}
                key={index}
              />
            );
          })}
      </div>
    </div>
  );
}
//
