export const get = async (url, headers) => {
  const response = await fetch(url, { headers })
  const data     = await response.json()

  if (!response.ok) throw data

  return data
}