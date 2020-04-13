const prefix = 'geenious'

interface MakeKey {
  (key: string): string
}

const makeKey: MakeKey = key => `${prefix}-${key}`

interface Get {
  (key: string): string | undefined
}

const get: Get = key => {
  const storedValue = localStorage.getItem(makeKey(key))

  if (storedValue === null) return

  return storedValue
}

interface Set {
  (key: string, value: string): void
}

const set: Set = (key, value) => localStorage.setItem(makeKey(key), value)

interface Remove {
  (key: string): void
}

const remove: Remove = key => localStorage.removeItem(makeKey(key))

export default {
  get,
  set,
  delete: remove,
}
