import {loadImgByTeamId} from "./helpers/images";

export const Game = ({match, teams, events}) => {

    const filterHomeTeam = () => Object
        .values(teams)
        .filter(team => team.team_id === match.home_team_id).at(0)


    const filterAwayTeam = () => Object
        .values(teams)
        .filter(team => team.team_id === match.away_team_id).at(0)


    const filterEvents = () => Object.values(events).filter(event => match.match_id === event.match_id)


    const filterGoals = () => {
        // console.log(filterEvents())
        if (filterEvents())
            return filterEvents().filter(event => {
                // console.log(event.event_type==='goal')
                return event.event_type === 'goal'
            })
        return []
    }


    function homeScore() {
        return filterGoals().filter(event => {
            return event.score_team === 'home'
        }).map((event) => event.score_amount).reduce((e1, e2) => e1 + e2, 0)
    }


    function awayScore() {
        return filterGoals().filter(event => {
            return event.score_team === 'away'
        }).map((event) => event.score_amount).reduce((e1, e2) => e1 + e2, 0)
    }


    function loadImg(teamId) {
        // console.log(loadImgByTeamId(teamId))

        return <img src={loadImgByTeamId(teamId)} alt={teamId}/>
    }


    return (
        <tr>
            <td>
                {loadImg(filterHomeTeam().team_id)} {filterHomeTeam().team_name_short} {homeScore()} : {awayScore()} {filterAwayTeam().team_name_short}{loadImg(filterAwayTeam().team_id)}
            </td>

        </tr>
    )

}