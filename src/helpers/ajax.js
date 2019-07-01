export const get = async (url, headers) => {
  const response = await fetch(url, { headers })
  const data     = await response.json()

  if (!response.ok) throw data

  return data
}

export const post = async (url, headers, request) => {
  const response = await fetch(url, {
    method  : 'post',
    headers : {
      'Content-Type': 'application/json',
      ...headers
    },
    body : JSON.stringify({
      ...request
    })
  })

  const data = await response.json()

  if (!response.ok) throw data

  return data
}