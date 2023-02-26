import './App.css';
import {Match} from "./componets/Match";
import {useEffect, useState} from "react";
import {getEvents, getMatches, getTeams} from "./fetchApi/apiData";
import 'bootstrap/dist/css/bootstrap.css';


function App() {
    const [teams, setTeams] = useState([])
    const [matches, setMatches] = useState([])
    const [events, setEvents] = useState([])
    const [showLongName, setShowLongName] = useState(false)

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

    const toggleShowLongName = () => {
        setShowLongName(!showLongName)
    }


    return (

        <div className="App">
            <div id={'container'}>
                <div>
                    <button id={'button'}
                            onClick={toggleShowLongName}>{showLongName ? 'show short name' : 'show full name'}</button>
                </div>
                <table className={'table table-striped'}>
                    <tbody id={'body'}>

                    {matches.map(match => (<Match key={match.match_id} match={match} teams={teams} events={events}
                                                  showLongName={showLongName}/>))}

                    </tbody>
                </table>
            </div>
        </div>

    );
}

export default App;
