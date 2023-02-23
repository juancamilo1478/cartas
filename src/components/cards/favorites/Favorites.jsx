import favorito from "../../../img/heartfull.png";
import nofavorite from "../../../img/emtyHeart.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addfavorito, deletefavorito } from "../../../redux/actions/actions";
import estilo from "../Card.module.css";

const Favorites = (props) => {
  const [favorite, setFavorite] = useState(false);

  const dispatch = useDispatch();
  const favoritos = useSelector((state) => state.favorite);
  const cartas = useSelector((state) => state.allcards);

  useEffect(() => {
    let auxiliar = false;
    if (favoritos) {
      favoritos.forEach((data) => {
        if (data.id === props.id) {
          auxiliar = true;
        }
      });
    }
    setFavorite(auxiliar);
  }, [favoritos, cartas, props.id]);

  const addFavorite = () => {
    if (favorite === false) {
      dispatch(addfavorito(props.id));
    } else {
      dispatch(deletefavorito(props.id));
    }
  };

  return (
    <>
      {favorite ? (
        <img
          src={favorito}
          alt="nofavorito"
          className={estilo.favorite}
          onClick={addFavorite}
        />
      ) : (
        <img
          src={nofavorite}
          alt="nofavorito"
          className={estilo.favorite}
          onClick={addFavorite}
        />
      )}
    </>
  );
};
export default Favorites;
