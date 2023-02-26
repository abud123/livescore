export const MatchResult = ({homeScore, awayScore, matchStared}) => {
    if (matchStared === true)
        return (
            <div id={'scoreContainer'} data-testid={'background-color-green'}>
                <p id={'started'}>
                    {homeScore} : {awayScore}
                    (stared)
                </p>
            </div>
        )
    else {
        return (
            <div id={'scoreContainer'} data-testid={'background-color-red'}>

                <p  id={'notStarted'}>
                    (not started)
                    {/*{homeScore} {awayScore}*/}
                </p>
            </div>
        )
    }


}