import {loadImgByTeamId} from "../helpers/images";
import {MatchResult} from "./MatchResult";
import 'bootstrap/dist/css/bootstrap.css';


export const Match = ({match, teams, events,showLongName}) => {



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


    function loadImg(teamId) {
        return <img src={loadImgByTeamId(teamId)} alt={teamId}/>
    }


    return (

        <tr className={'row'} id={'row'}>
            <td className={'col-md-2'}>
                <p  id={'textLeft'}>{showLongName ? filterHomeTeam().team_name : filterHomeTeam().team_name_short}</p>
            </td>

            <td className={'col-md-2'}>
                <p id={'imgleft'}> {loadImg(filterHomeTeam().team_id)}</p>
            </td>

            <td className={'col-md-2'}>
                <div id={'scoreContainer'}><MatchResult homeScore={homeScore()} awayScore={awayScore()}
                                                      matchStared={matchStarted()}/></div>
            </td>

            <td className={'col-md-2'}>
                <p id={'imgRight'}>{loadImg(filterAwayTeam().team_id)}</p>
            </td>

            <td className={'col-md-2'}>
                <p  id={'textRight'}>{showLongName ? filterAwayTeam().team_name : filterAwayTeam().team_name_short}</p>
            </td>
        </tr>
    )

}