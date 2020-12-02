import React from "react"
import Comic from "../models/Comic"
import { favorite, unfavorite } from "../store/Reducer"
import { useStateContext } from "../store/Store"

const ComicListItem: React.FC<Comic> = ({
  id,
  title,
  coverUrl,
  publishedAt,
}) => {

  const {state, dispatch} = useStateContext()

  const handleFavorite = () => {
      dispatch(favorite(id))
  }

  const handleUnfavorite = () => {
    dispatch(unfavorite(id))
  }

  const isFavorited = state.favorites.findIndex(elem => elem === id) !== -1

  return (
    <div className="card" data-item-id={id}>
      <div className="card-image">
        <figure className="image">
          <img src={coverUrl} alt={title + "cover"} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{title}</p>
          {publishedAt && (
            <p className="subtitle is-6">{publishedAt.getFullYear()} </p>
          )}
          {!isFavorited && <button className="button is-primary" onClick={handleFavorite}>♥ Favorite</button>}
          {isFavorited && <button className="button" onClick={handleUnfavorite}>♥ Unfavorite</button>}
        </div>
      </div>
    </div>
  )
}

export default ComicListItem
