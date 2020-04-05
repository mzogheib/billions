import { useLocation } from 'react-router-dom'
import { parse, ParsedQuery } from 'query-string'

export const useQuery = (): ParsedQuery => parse(useLocation().search)
