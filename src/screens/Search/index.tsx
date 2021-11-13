import React, { FC, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { makeQueryParams, useQuery } from '../../utils/routerUtils'
import {
  search,
  DiscogsSearchResult,
  DiscogsSearchType,
} from '../../services/discogs'
import SearchUI, { OnSubmit as SetNewQuery } from './SearchUI'

type SearchFilter = {
  type: DiscogsSearchType
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
  const { replace, push } = useHistory()
  const [searchResults, setSearchResults] = useState<DiscogsSearchResult[]>([])
  const [type, setType] = useState<DiscogsSearchType>(DiscogsSearchType.artist)
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
    replace(`/search?${makeQueryParams({ query: newQuery })}`)
  }

  const handleSelectArtist = (id: number): void => {
    push(`/artists/${id}`)
  }

  const handleSelectRelease = (id: number): void => {
    push(`/releases/${id}`)
  }

  const searchResultsForUI = searchResults.map(({ id, title, thumb }) => ({
    id,
    title,
    imageUrl: thumb,
  }))

  return (
    <SearchUI
      defaultSearchTerm={query}
      onSelectArtists={(): void => setType(DiscogsSearchType.artist)}
      onSelectReleases={(): void => setType(DiscogsSearchType.master)}
      onSelectArtist={handleSelectArtist}
      onSelectRelease={handleSelectRelease}
      onSubmit={setNewQuery}
      searchResults={searchResultsForUI}
      isLoading={isLoading}
    />
  )
}

export default Search
