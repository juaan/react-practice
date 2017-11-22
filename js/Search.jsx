import React from 'react';
import preload from '../data.json';
import ShowCard from './ShowCard'

class Search extends React.Component {
    state = {
        searchTerm: ""
    }

    handleSearch = e => {
        this.setState({searchTerm: e.target.value})
    }

    render() {
    return(
            <div className="search">
                <header> 
                    <h1>JuanVids</h1>
                    <input 
                      type="text"
                      onChange={this.handleSearch}
                      value={this.state.searchTerm}
                      placeholder="Search" 
                    />
                </header>
                <div>
                    {
                        preload.shows
                          .filter(data => `${data.title} ${data.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
                          .map( data => (
                            <ShowCard key={data.imdbID} {...data} />
                          ))
                    }
                </div>
            </div>
        )
    } 
} 

export default Search;