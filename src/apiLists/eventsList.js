import {useState} from "react";
import {useEffect} from "react";
import {getEvents} from "../fetchApi/apiData";



export const GetEventList = () => {

    const [eventsList, setEventsList] = useState([])

    useEffect(() => {

            async function fetchData() {
                setEventsList(await getEvents())
            }
            fetchData();

        },[eventsList],
        (error) => {

            setEventsList(null)
        }

    )
    if (!eventsList) return (<div>No events found</div>)
    console.log(eventsList['event_time'])

return (eventsList)

}
