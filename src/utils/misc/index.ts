import { SimpleKeyValue } from '../typescript'

export const makeRandomString = (): string =>
  Math.random()
    .toString(36)
    .substr(2)

export const encode = (obj: SimpleKeyValue): string => btoa(JSON.stringify(obj))

export const decode = (string: string): SimpleKeyValue =>
  JSON.parse(atob(string))
