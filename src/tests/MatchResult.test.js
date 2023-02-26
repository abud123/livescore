import {MatchResult} from "../componets/MatchResult";
import {render, screen} from "@testing-library/react";


test ('on match started should appear green',()=> {
    render (<MatchResult homeScore={'7'} awayScore={'3'} matchStared={true} />)
    expect(screen.getByTestId('background-color-green')).toHaveStyle('background-color: greenyellow  float: inside')
})

test ('on not started should appear red',()=> {
    render (<MatchResult  matchStared={false} />)
    expect(screen.getByTestId('background-color-red')).toHaveStyle('background-color: red  float: inside')
})