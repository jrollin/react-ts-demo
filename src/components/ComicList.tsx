import React from "react"
import Comics from "../models/Comics"
import ComicListItem from "./ComicListItem"

type Props = {
  comics: Comics
}

const ComicList: React.FC<Props> = ({ comics }) => {
  return (
    <div className="container m-2">
      {comics.length === 0 && <div className="card">Pas de comics trouvés</div>}
      {comics.length > 0 && (
        <div className="columns is-multiline">
          {comics.map(({ id, title, publishedAt, coverUrl }, index) => {
            return (
              <div className="column is-4" key={index} role="article">
                <ComicListItem
                  key={id}
                  id={id}
                  title={title}
                  publishedAt={publishedAt}
                  coverUrl={coverUrl}
                />
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default ComicList
