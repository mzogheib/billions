import React, { FC, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { makeQueryParams, useQuery } from '../../utils/routerUtils'
import { search, DiscogsSearchResult } from '../../services/discogs'
import SearchUI from './SearchUI'

type SearchFilter = {
  type: string
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
  const { replace } = useHistory()
  const [searchResults, setSearchResults] = useState<DiscogsSearchResult[]>([])
  const [type, setType] = useState<string>('artist')

  const handleSearch: HandleSearch = async ({ searchQuery, searchFilter }) => {
    if (!searchQuery) return

    // TODO: handle errors
    const response = await search({
      query: searchQuery,
      type: searchFilter.type,
    })
    const results = response.data.results
    setSearchResults(results)
  }

  useEffect(() => {
    handleSearch({ searchQuery: query, searchFilter: { type } })
  }, [query, type])

  const setNewQuery = (newQuery: string): void => {
    if (newQuery === query) return
    replace(`/search?${makeQueryParams({ query: newQuery })}`)
  }

  const searchResultsForUI = searchResults
    .filter(({ type: resultType }) => resultType === type)
    .map(({ id, type, title, thumb }) => ({
      id,
      type,
      title,
      imageUrl: thumb,
    }))

  const setFilter = ({ type: newType }: { type: string }): void => {
    if (newType === type) return
    setType(newType)
  }

  return (
    <SearchUI
      defaultSearchTerm={query}
      filter={{ type }}
      onChangeFilter={setFilter}
      onSubmit={setNewQuery}
      searchResults={searchResultsForUI}
    />
  )
}

export default Search
