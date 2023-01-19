const getResponse = async (url) => {
    const response = await fetch(url)
    // при успешном запросе response будет возвращать true


    if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`)
    }
    return await response.json()
}

export { getResponse }