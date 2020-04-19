import React, { FC, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { makeQueryParams, useQuery } from '../../utils/routerUtils'
import { search, DiscogsSearchResult } from '../../services/discogs'
import SearchUI from './SearchUI'

const Search: FC = () => {
  const { query } = useQuery()
  const { replace } = useHistory()
  const [searchResults, setSearchResults] = useState<DiscogsSearchResult[]>([])

  const handleSearch = async (searchQuery?: string): Promise<void> => {
    if (!searchQuery) return

    // TODO: handle errors
    const response = await search({ query: searchQuery })
    const results = response.data.results
    setSearchResults(results)
  }

  useEffect(() => {
    handleSearch(query)
  }, [query])

  const setNewQuery = (newQuery: string): void => {
    if (newQuery === query) return
    replace(`/search?${makeQueryParams({ query: newQuery })}`)
  }

  const searchResultsForUI = searchResults.map(
    ({ id, type, title, thumb }) => ({
      id,
      type,
      title,
      imageUrl: thumb,
    })
  )

  return (
    <SearchUI
      defaultSearchTerm={query}
      onSubmit={setNewQuery}
      searchResults={searchResultsForUI}
    />
  )
}

export default Search
