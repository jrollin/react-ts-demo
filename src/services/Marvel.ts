import Comic from "../models/Comic"
import Comics from "../models/Comics"
import ComicsResults from "../models/ComicsResults"
import json from "./comics.json"

type ComicThumbnail = {
  path: string
  extension: string
}

type ComicDto = {
  id: number
  title: string
  modified: string
  thumbnail: ComicThumbnail
}

const extractThumbnailUrl = ({ path, extension }: ComicThumbnail) => {
  return `${path}/portrait_uncanny.${extension}`
}

const mapToComic = ({ id, title, modified, thumbnail }: ComicDto): Comic => {
  const coverUrl = extractThumbnailUrl(thumbnail)
  // fallback to now date if wrong format
  const publishedAt = Date.parse(modified) ? new Date(modified) : new Date()
  return { id, title, publishedAt, coverUrl }
}

const fetchComics = async (term: string) => {
  let comics: Comics = json.data.results.map(mapToComic)

  if (term) {
    comics = comics.filter(({ title }) =>
      title.toLowerCase().startsWith(term.toLowerCase())
    )
  }

  const results: ComicsResults = {
    total: json.data.total,
    count: json.data.count,
    comics,
  }

  sleep(1000)

  return new Promise<ComicsResults>((resolve, reject) => {
    if (comics.length > 0) {
      resolve(results)
    } else {
      reject("Error !")
    }
  })
}

// simulate http delay...
function sleep(milliseconds: number) {
  const date = Date.now()
  let currentDate = null
  do {
    currentDate = Date.now()
  } while (currentDate - date < milliseconds)
}

export default fetchComics
