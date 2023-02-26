import './App.css';
import {Game} from "./Game";
import {useEffect, useState} from "react";
import {getEvents, getMatches, getTeams} from "./fetchApi/apiData";
import {ColoredCircle} from "./componets/GameResult";
import 'bootstrap/dist/css/bootstrap.css';



function App() {
    const [teams, setTeams] = useState([])
    const [matches, setMatches] = useState([])
    const [events, setEvents] = useState([])

    const fetchState = () => {
        getTeams().then(teams => setTeams(teams))
        getMatches().then(matches => setMatches(matches))
        getEvents().then(events => setEvents(events))
    }

    // Todo: fetchState on mounted
    useEffect(() => {
            const timerId = setInterval(fetchState, 1000 * 2)

            return () => clearInterval(timerId);

        }, [fetchState]
    )


    return (

        <div className="App">
            <div className={'container'}>
            <table className={'table table-striped'}>
                <tbody>

                {matches.map(match => (<Game key={match.match_id} match={match} teams={teams} events={events}/>))}

                </tbody>
            </table>
            </div>
        </div>

    );
}

export default App;
