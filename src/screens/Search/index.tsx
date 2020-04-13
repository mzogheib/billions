import React, { FC, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { makeQueryParams, useQuery } from '../../utils/routerUtils'
import SearchUI from './SearchUI'
import { search, SearchResult } from '../../services/discogs'

const Search: FC = () => {
  const { query } = useQuery() as { query: string } // It's safe to assume it will only be a string
  const { replace } = useHistory()
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])

  const handleSearch = async (searchQuery: string): Promise<void> => {
    if (!searchQuery) return

    const response = await search({ query: searchQuery })
    const results = response.data.results.map(({ title, type }) => ({
      title,
      type,
    }))
    setSearchResults(results)
  }

  useEffect(() => {
    handleSearch(query)
  }, [query])

  const setNewQuery = (newQuery?: string): void => {
    if (!newQuery || newQuery === query) return
    replace(`/search?${makeQueryParams({ query: newQuery })}`)
  }

  return (
    <SearchUI
      defaultSearchTerm={query}
      onSubmit={setNewQuery}
      searchResults={searchResults}
    />
  )
}

export default Search
