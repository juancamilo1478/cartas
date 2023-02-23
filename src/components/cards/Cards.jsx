//component card ,show the cards
import Card from "./Card";
import fotos from "../../img/portada.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { allcards } from "../../redux/actions/actions";
//accion todas las cartas
export default function Cards() {
  const cartass = useSelector((state) => state.allcards);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(cartass);
    if (!cartass) {
      dispatch(allcards());
    }
  });

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
