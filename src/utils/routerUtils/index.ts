import { useLocation } from 'react-router-dom'
import { parse, ParsedQuery, stringify } from 'query-string'
import { SimpleKeyValue } from '../typescript'

interface UseQuery {
  (options?: { hash?: boolean }): ParsedQuery
}

export const useQuery: UseQuery = options => {
  const location = useLocation()

  const shouldParseHash = options && options.hash
  const stringToParse = shouldParseHash ? location.hash : location.search

  return parse(stringToParse)
}

interface MakeQueryParams {
  (params: SimpleKeyValue): string
}

export const makeQueryParams: MakeQueryParams = params => stringify(params)
