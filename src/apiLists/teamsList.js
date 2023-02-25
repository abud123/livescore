
import {getTeams} from "../fetchApi/apiData";

import {useState} from "react";
import {useEffect} from "react";


export const GetTeamsList = () => {


    const [teamsList, setTeamsList] = useState([])


    useEffect(() => {

            async function fetchData() {
                setTeamsList(await getTeams())
            }

            fetchData();

        }, [teamsList],
        (error) => {

            setTeamsList(null)

        }
    )

    if (!teamsList) return (<div>No teams found</div>)


    return (teamsList)

}
