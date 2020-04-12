type SearchResponse = {
  meta: {
    status: number
  }
  response: {
    hits: { foo: string }[]
  }
}

type SearchParams = {
  query: string
}

interface Search {
  (params: SearchParams): Promise<SearchResponse>
}

export const search: Search = async ({ query }) => {
  // Make the auth header
  // Fetch the results and return the promise

  console.log('Searching', query)

  return await Promise.resolve({
    meta: {
      status: 200,
    },
    response: {
      hits: [{ foo: 'bar' }],
    },
  })
}
