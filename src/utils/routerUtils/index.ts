import { useLocation } from 'react-router-dom'
import { parse, ParsedQuery, stringify } from 'query-string'

export const useQuery = (): ParsedQuery => parse(useLocation().search)

export const makeQueryParams = (params: {
  [key: string]: string | number | boolean
}): string => stringify(params)
