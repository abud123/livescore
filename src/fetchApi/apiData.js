function getJSONFeed() {
    return fetch("http://vgcommonstaging.aitcloud.de/livescore/")
        .catch((err) => {
            throw new Error(err)})
        .then(response => (response.json()));
}

export const getMatches = () => {
    return getJSONFeed()
        .then(apiData => (apiData["matches"]))
}


export const getPlayingTeamsFromMatchId = (matchId) => {
    return getMatches()
        .then(matches => matches.filter(match => match["match_id"] === matchId))
        .then(
            match => {
                return getTeams()
                    .then(teams => teams
                        .filter(team => team["team_id"] in [match["home_team_id"], match["away_team_id"]]))
            })
}
export const getTeams = () => {
    return getJSONFeed()
        .then(apiData => (apiData["teams"]))

}
export const getEvents = () => {
    return getJSONFeed()
        .then(apiData => (apiData["events"]))
}

