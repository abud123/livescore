function getJSONFeed() {
    return fetch("http://vgcommonstaging.aitcloud.de/livescore/")
        .catch((err) => {
            throw new Error(err)
        })
        .then(response => (response.json()));
}

export const getMatches = () => {
    return getJSONFeed()
        .then(apiData => (apiData["matches"]))
}

export const getTeams = () => {
    return getJSONFeed()
        .then(apiData => (apiData["teams"]))

}
export const getEvents = () => {
    return getJSONFeed()
        .then(apiData => (apiData["events"]))
}

