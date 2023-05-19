import { useContext } from "react";
import { HiStar } from "react-icons/hi";
import { FiHeart } from "react-icons/fi";
import { StayContext } from "../context/stayContext";
import type { Stay } from "../data/Stay";

type CardProps = {
  item: Stay;
};

function Card({ item }: CardProps) {
  const { dispatch } = useContext(StayContext);

  const handleOpen = () => dispatch({ type: "OPEN", payload: {} });

  return (
    <div>
      <article className="card" onClick={handleOpen}>
        <button className="card__heart-icon">
          <FiHeart size={16} />
        </button>

        <div className="card__image">
          <img className="h-80" src={item.image} alt="card image" />
        </div>

        <div className="card__content">
          <h3 className="card__title">{item.name}</h3>
          <span className="card__subtitle">{item.subtitle}</span>
        </div>

        <div className="card__footer">
          <div className="flex justify-between items-center text-sm">
            <div>
              <span className="text-gray-800 font-bold">{item.price}</span> / night
            </div>
            <span className="inline-flex items-center">
              <HiStar /> {item.rating}
            </span>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Card;
