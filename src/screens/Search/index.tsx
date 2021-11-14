import React, { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { makeQueryParams, useQuery } from '../../utils/routerUtils'
import { search, SearchResult, SearchType } from '../../services/discogs'
import SearchUI, { OnSubmit as SetNewQuery } from './SearchUI'

type SearchFilter = {
  type: SearchType
}

type HandleSearchParams = {
  searchQuery?: string
  searchFilter: SearchFilter
}

interface HandleSearch {
  (params: HandleSearchParams): Promise<void>
}

const Search: FC = () => {
  const { query } = useQuery()
  const navigate = useNavigate()
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [type, setType] = useState<SearchType>(SearchType.artist)
  const [isLoading, setLoading] = useState(false)

  const handleSearch: HandleSearch = async ({ searchQuery, searchFilter }) => {
    if (!searchQuery) return

    setLoading(true)

    // TODO: handle errors
    const response = await search({
      query: searchQuery,
      type: searchFilter.type,
    })
    const results = response.results
    setSearchResults(results)

    setLoading(false)
  }

  useEffect(() => {
    handleSearch({ searchQuery: query, searchFilter: { type } })
  }, [query, type])

  const setNewQuery: SetNewQuery = newQuery => {
    if (newQuery === query) return
    navigate(`/search?${makeQueryParams({ query: newQuery })}`, {
      replace: true,
    })
  }

  const handleSelectArtist = (id: number): void => {
    navigate(`/artists/${id}`)
  }

  const handleSelectRelease = (id: number): void => {
    navigate(`/releases/${id}`)
  }

  const searchResultsForUI = searchResults.map(({ id, title, thumb }) => ({
    id,
    title,
    imageUrl: thumb,
  }))

  return (
    <SearchUI
      defaultSearchTerm={query}
      onSelectArtists={(): void => setType(SearchType.artist)}
      onSelectReleases={(): void => setType(SearchType.master)}
      onSelectArtist={handleSelectArtist}
      onSelectRelease={handleSelectRelease}
      onSubmit={setNewQuery}
      searchResults={searchResultsForUI}
      isLoading={isLoading}
    />
  )
}

export default Search
