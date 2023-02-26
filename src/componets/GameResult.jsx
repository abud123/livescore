export const GameResult = ({homeScore, awayScore, matchStared}) =>{
    if(matchStared===true)
    return (
        <p>
            {homeScore} : {awayScore}
            (stared)
        </p>
            )
    else{
        return (
            <p >
                (not started)
                {/*{homeScore} {awayScore}*/}
            </p>
        )
    }


}