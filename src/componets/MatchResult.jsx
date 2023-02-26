import {} from'../App.css'
export const MatchResult = ({homeScore, awayScore, matchStared}) => {
    if (matchStared === true)
        return (
            <div id={'scoreContainer'} data-testid={'background-color-green'}>
                <div id={'started'}>
                    <div >
                        <div>
                            {homeScore} : {awayScore}
                        </div>
                    </div>
                </div>
            </div>
        )
    else {
        return (
            <div id={'scoreContainer'} data-testid={'background-color-red'}>

                <div id={'notStarted'}>

                </div>
            </div>
        )
    }


}