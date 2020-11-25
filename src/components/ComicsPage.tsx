import React, { useEffect, useState } from "react"
import ComicsResults from "../models/ComicsResults"
import fetchComics from "../services/Marvel"
import ComicList from "./ComicList"
import SearchForm from "./SearchForm"

const Loading: React.FC = () => {
  return <div className="loading">Loading...</div>
}

const defaultRestults: ComicsResults = {comics: [], total: 0, count: 0}

const ComicsPage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [term, setTerms] = useState<string>("")
  const [comicsResults, setComicsResults] = useState<ComicsResults>(defaultRestults)
  const [error, setError] = useState<string>("")

  useEffect(() => {
    const getComics = async () => {
      try {
        const results: ComicsResults = await fetchComics(term)
        setLoading(false)
        setComicsResults(results)
      } catch (e) {
        setLoading(false)
        setError(e)
      }
    }
    getComics()
  }, [term])

  const handleSearchTerm = (term: string) => {
    setLoading(true)
    setTerms(term)
    setError("")
  }

  const {comics, total} = comicsResults
  return (
    <>
      <SearchForm placeHolder="Ma recherche" onSearch={handleSearchTerm} />
      {loading && <Loading />}
      {error && <div className="block error m-2">Error during searching.... retry !</div>}
      {!error && <div className="m-2"><strong>{total}</strong> résultats trouvés</div>}
      {!error && <ComicList comics={comics} />}
    </>
  )
}

export default ComicsPage
