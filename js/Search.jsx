// @flow

import React from 'react';
import ShowCard from './ShowCard';
import Header from './Header';

class Search extends React.Component {
    state = {
        searchTerm: ''
    };

    handleSearch = (e: KeyboardEvent & { target: HTMLInputElement }) => {
        this.setState({ searchTerm: e.target.value });
    };

    render() {
        return (
            <div className="search">
                <Header searchTerm={this.state.searchTerm} showSearch handleSearch={this.handleSearch} />
                <div>
                    {this.props.data.shows
                        .filter(
                            data =>
                                `${data.title} ${data.description}`
                                    .toUpperCase()
                                    .indexOf(this.state.searchTerm.toUpperCase()) >= 0
                        )
                        .map(data => <ShowCard key={data.imdbID} {...data} />)}
                </div>
            </div>
        );
    }
}

export default Search;
