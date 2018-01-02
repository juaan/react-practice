import React from 'react';
import { shallow, render } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import store from '../store';
import preload from '../../data.json';
import ShowCard from '../ShowCard';
import Search, { Unwrapped as UnwrappedSearch } from '../Search';
import { setSearchTerm } from '../actionCreators';

test('Search render correctly', () => {
    const component = shallow(<UnwrappedSearch data={preload} searchTerm="" />);
    expect(component).toMatchSnapshot();
});

test('Search should render correct amount of shows', () => {
    const component = shallow(<UnwrappedSearch data={preload} searchTerm="" />);
    expect(component.find(ShowCard).length).toEqual(preload.shows.length);
});

test('search should render correct amount of shows based on search term - without redux', () => {
    const searchWord = 'black';
    // store.dispatch(setSearchTerm(searchWord));
    const component = shallow(<UnwrappedSearch data={preload} searchTerm={searchWord} />);
    

    const showCount = preload.shows.filter(
        data => `${data.title} ${data.description}`.toUpperCase().indexOf(searchWord.toUpperCase()) >= 0
    );

    expect(component.find(ShowCard).length).toEqual(showCount.length);
});

test('search should render correct amount of shows based on search term - with redux', () => {
    const searchWord = 'black';
    store.dispatch(setSearchTerm(searchWord));
    const component = render(
        <Provider store={store}>
            <MemoryRouter>
                <Search data={preload} searchTerm={searchWord} />
            </MemoryRouter>
        </Provider>
    );

    const showCount = preload.shows.filter(
        data => `${data.title} ${data.description}`.toUpperCase().indexOf(searchWord.toUpperCase()) >= 0
    );

    expect(component.find('.show-card').length).toEqual(showCount.length);
});
