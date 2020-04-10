const prefix = 'geenious'

const makeKey = (key: string): string => `${prefix}-${key}`

const get = (key: string): string | undefined => {
  const storedValue = localStorage.getItem(makeKey(key))

  if (storedValue === null) return

  return storedValue
}

const set = (key: string, value: string): void =>
  localStorage.setItem(makeKey(key), value)

const remove = (key: string): void => localStorage.removeItem(makeKey(key))

export default {
  get,
  set,
  delete: remove,
}
