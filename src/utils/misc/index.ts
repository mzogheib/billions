import { SimpleKeyValue } from '../typescript'

interface MakeRandomString {
  (): string
}

export const makeRandomString: MakeRandomString = () =>
  Math.random()
    .toString(36)
    .substr(2)

interface Encode {
  (obj: SimpleKeyValue): string
}

export const encode: Encode = obj => btoa(JSON.stringify(obj))

interface Decode {
  (string: string): SimpleKeyValue
}

export const decode: Decode = string => JSON.parse(atob(string))
