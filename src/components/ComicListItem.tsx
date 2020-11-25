import React from "react"
import Comic from "../models/Comic"

const ComicListItem: React.FC<Comic> = ({
  id,
  title,
  coverUrl,
  publishedAt,
}) => {
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
          <button className="button">♥ Favorite</button>
        </div>
      </div>
    </div>
  )
}

export default ComicListItem
