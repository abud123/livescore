import {getMatches} from "../fetchApi/apiData";
import {useState} from "react";
import {useEffect} from "react";


export const GetMatchList = () => {

        const [matchList, setMatchList] = useState([])

    useEffect(() => {

            async function fetchData() {
                setMatchList(await getMatches())
            }

            fetchData();

        }, [matchList],
        (error) => {

            setMatchList(null)

        }
    )

    if (!matchList) return (<div>No teams found</div>)


    return (matchList)

}
