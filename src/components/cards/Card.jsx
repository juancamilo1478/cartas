import { Link } from "react-router-dom";
import estilo from "./Card.module.css";
// import img favorite
import Favorite from "./favorites/Favorites";

export default function Card(props) {
  //dispatch

  return (
    <div className={estilo.contenedor}>
      <div className={estilo.opcions}>
        <Favorite id={props.id} />
      </div>
      <img className={estilo.imagen} src={props.image} alt="" />
      <div className={estilo.contenedorbotton}>
        <Link to={`/detail/${props.id}`} className={estilo.lin}>
          <div className={estilo.boton1}>
            <div className={estilo.texto}>
              <h2> {props.name}</h2>
            </div>
          </div>
        </Link>
        <div className={estilo.boton2}>
          <h2 className={estilo.texto}> {props.gender}</h2>
        </div>
        <div className={estilo.boton3}>
          <h2 className={estilo.texto}> {props.species}</h2>
        </div>
      </div>
    </div>
  );
}
