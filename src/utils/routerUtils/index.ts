import { useLocation } from 'react-router-dom'
import { parse, ParsedQuery, stringify } from 'query-string'

interface UseQuery {
  hash?: boolean
}

export const useQuery = (options?: UseQuery): ParsedQuery => {
  const location = useLocation()

  const shouldParseHash = options && options.hash
  const stringToParse = shouldParseHash ? location.hash : location.search

  return parse(stringToParse)
}

export const makeQueryParams = (params: {
  [key: string]: string | number | boolean
}): string => stringify(params)
