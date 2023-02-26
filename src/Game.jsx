import {loadImgByTeamId} from "./helpers/images";
import {GameResult} from "./componets/GameResult";
import 'bootstrap/dist/css/bootstrap.css';


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


    function loadImg(teamId) {
        // console.log(loadImgByTeamId(teamId))

        return <img src={loadImgByTeamId(teamId)} alt={teamId}/>
    }


    return (

        <tr className={'row'}>
            <td className={'col-md-2'}>
                <p className={'text-left'} id={'text'}>{filterHomeTeam().team_name_short}</p>
            </td>

            <td className={'col-md-2'}>
                <p className={'rounded float-left'}> {loadImg(filterHomeTeam().team_id)}</p>
            </td>

            <td className={'col-md-2'}>
                <p id={'scoreContainer'}><GameResult homeScore={homeScore()} awayScore={awayScore()}
                                                     matchStared={matchStarted()}/></p>
            </td>

            <td className={'col-md-2'}>
                <p className={'rounded float-right'}>{loadImg(filterAwayTeam().team_id)}</p>
            </td>

            <td className={'col-md-2'} >
                <p className={'text-right'} id={'text'}>{filterAwayTeam().team_name_short}</p>
            </td>
        </tr>
    )

}