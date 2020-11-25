import React, { ChangeEvent, MouseEvent } from "react"

type SearchProps = {
  placeHolder?: string
  onSearch: (term: string) => void
}

const SearchForm: React.FC<SearchProps> = ({
  placeHolder = "MyPlaceHolder",
  onSearch,
}) => {
  const [search, setSearch] = React.useState<string>("")

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const { value } = e.target
    setSearch(value)
  }

  const handleClickSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    onSearch(search)
  }

  const handleClickReset = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setSearch("")
    onSearch("")
  }

  const canSubmit: boolean = search.length < 3

  return (
    <section className="container is-medium m-5">
        <div className="field has-addons">
          <div className="control is-expanded">
            <input
              id="search"
              className="input"
              type="text"
              placeholder={placeHolder}
              onChange={handleChangeSearch}
              value={search}
            />
          </div>
          <div className="control">
            <button
              className="button is-link"
              onClick={handleClickSubmit}
              disabled={canSubmit}
            >
              Search
            </button>
          </div>
          <div className="control">
            <button
              className="button is-text"
              onClick={handleClickReset}
            >
              Effacer
            </button>
          </div>
        </div>
    </section>
  )
}

export default SearchForm
