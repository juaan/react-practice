// @flow

import React from 'react';
import { connect } from 'react-redux';
import ShowCard from './ShowCard';
import Header from './Header';

const Search = (props: { searchTerm: string, data: Array<Show> }) => (
    <div className="search">
        <Header showSearch />
        <div>
            {props.data.shows
                .filter(
                    data =>
                        `${data.title} ${data.description}`.toUpperCase().indexOf(props.searchTerm.toUpperCase()) >= 0
                )
                .map(data => <ShowCard key={data.imdbID} {...data} />)}
        </div>
    </div>
);


const mapStateToProps = state => ({
    searchTerm: state.searchTerm
})

export default connect(mapStateToProps)(Search);
