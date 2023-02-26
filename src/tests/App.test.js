import {fireEvent, render, screen} from '@testing-library/react';
import App from '../App';


test (' on press button toggle names',()=> {
    render (<App />)
    const button = screen.getByRole('button')

    fireEvent.click(button)
    expect(button).toHaveTextContent('show short name')

    fireEvent.click(button)
    expect(button).toHaveTextContent('show full name')

})