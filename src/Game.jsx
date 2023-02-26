import {loadImgByTeamId} from "./helpers/images";
import {GameResult} from "./componets/GameResult";

export const Game = ({match, teams, events}) => {

    const filterHomeTeam = () => Object
        .values(teams)
        .filter(team => team.team_id === match.home_team_id).at(0)


    const filterAwayTeam = () => Object
        .values(teams)
        .filter(team => team.team_id === match.away_team_id).at(0)


    const filterEvents = () => Object.values(events).filter(event => match.match_id === event.match_id)


    const filterGoals = () => {
        if (filterEvents())
            return filterEvents().filter(event => {
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

    const matchStarted = () => {
        return filterEvents().map(event => event.event_type).includes("match_start")
    }

    // const setLightColor = () => {
    //
    //     if (matchStarted())
    //         console.log(matchStarted())
    //     return <ColoredCircle color={"#00ff00"}/>
    //     return <ColoredCircle color={"#ff0000"}/>
    // }


    function loadImg(teamId) {
        // console.log(loadImgByTeamId(teamId))

        return <img src={loadImgByTeamId(teamId)} alt={teamId}/>
    }


    return (
        <tr>
            <td>
                {loadImg(filterHomeTeam().team_id)} {filterHomeTeam().team_name_short}
            </td>
            <td>
                <GameResult homeScore={homeScore()} awayScore={awayScore()} matchStared={matchStarted()}/>
            </td>
            <td>
                {filterAwayTeam().team_name_short}{loadImg(filterAwayTeam().team_id)}

            </td>
        </tr>
    )

}