import {} from '../App.css'
export const GameResult = ({homeScore, awayScore, matchStared}) =>{
    if(matchStared===true)
    return (
        <div id={'scoreContainer'}>
        <p id={'started'}>
            {homeScore} : {awayScore}
            (stared)
        </p>
        </div>
            )
    else{
        return (
            <div  id={'scoreContainer'}>

            <p id={'notStarted'}>
                (not started)
                {/*{homeScore} {awayScore}*/}
            </p>
            </div>
        )
    }


}