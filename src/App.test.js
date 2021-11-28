import {render , screen} from '@testing-library/react';
import App from './App';

test ('renders learns react link ' , () => {
    render (<App/>);
    const linkElement = screen.getByAltText(/learn react /i);
    expect(linkElement).toBeInTheDocument();
});