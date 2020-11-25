import React from "react"
import { render, screen } from "@testing-library/react"
import ComicList from "./ComicList"
import Comics from "../models/Comics"

test("render comics list wit no elements", () => {
  render(<ComicList comics={[]} />)

  const linkElement = screen.getByText(/Pas de comics trouvés/i)
  expect(linkElement).toBeInTheDocument()
})

test("render comics list wit 2 elements", () => {
  const defaultComics: Comics = [
    {
      id: 1,
      title: "True Believers: King In Black - Iron Man/Doctor Doom (2020) #1",
      publishedAt: new Date(),
      coverUrl:
        "https://i.annihil.us/u/prod/marvel/i/mg/6/a0/5f4fb02f21788/portrait_uncanny.jpg",
    },
    {
      id: 2,
      title: "Werewolf",
      publishedAt: new Date(),
      coverUrl:
        "https://i.annihil.us/u/prod/marvel/i/mg/e/c0/5f4fb01f2aed1/portrait_uncanny.jpg",
    },
  ]

  const { getAllByRole } = render(<ComicList comics={defaultComics} />)

  const elements = getAllByRole("article")

  expect(elements).toHaveLength(2)
})
