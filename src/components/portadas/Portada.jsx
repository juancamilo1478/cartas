import foto from "../../img/portada.jpg";
import { Link } from "react-router-dom";
import volar from "../../img/animation.png";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { allcards } from "../../redux/actions/actions";

function Portada() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allcards());
  });

  return (
    <div className="portada_all">
      <img src={foto} alt="foto" className="portada_image" />
      <div className="portada_container">
        <h1>¡WUBBA LUBBA DUB DUB!</h1>
        <h3>
          ¿Dinosaurios? ¿Más clones? ¿Naves espaciales? ¿Drama familiar? Nadie
          sabe qué deparará a Rick and Morty
        </h3>
        <div className="portada_botton">
          <Link to="/cartas" className="portda_link">
            <p>Personajes</p>
          </Link>
        </div>
      </div>
      <div className="portada_stard"></div>
      <div className="portada_stard2"></div>

      <div className="portada_rick">
        <img src={volar} alt="volar" />
      </div>
    </div>
  );
}
export default Portada;
