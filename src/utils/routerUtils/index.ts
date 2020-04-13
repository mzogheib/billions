import { useLocation } from 'react-router-dom'
import { parse, stringify } from 'query-string'
import { SimpleKeyValue } from '../typescript'

// Using custom definition of ParsedQuery (instead of from query-string) as
// there is no use case for an array of strings or null
export type ParsedQuery = {
  [key: string]: string | undefined
}

interface UseQuery {
  (options?: { hash?: boolean }): ParsedQuery
}

export const useQuery: UseQuery = options => {
  const location = useLocation()

  const shouldParseHash = options && options.hash
  const stringToParse = shouldParseHash ? location.hash : location.search

  return parse(stringToParse) as ParsedQuery
}

interface MakeQueryParams {
  (params: SimpleKeyValue): string
}

export const makeQueryParams: MakeQueryParams = params => stringify(params)
