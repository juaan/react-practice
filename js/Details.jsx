// @flow

import React from 'react';
import Header from './Header';
import Spinner from './Spinner';
import { connect } from 'react-redux';
import { getApiData } from './actionCreators';

class Details extends React.Component {
    props: {
        data: Show,
        rating: string,
        getApiData: Function
    };

    componentDidMount() {
        if (!this.props.rating) {
            this.props.getApiData();
        }
    }

    render() {
        const { title, description, year, poster, trailer } = this.props.data;

        return (
            <div className="details">

                <Header />
                <section>
                    <h1>{title}</h1>
                    <h1>({year})</h1>
                    {this.props.rating ? <h3>{this.props.rating}</h3> : <Spinner />}
                    <img src={`/public/img/posters/${poster}`} alt={`Poster for ${title}`} />
                    <p>{description}</p>
                </section>
                <div>
                    <iframe
                        src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`}
                        frameborder="0"
                        allowFullScreen
                        title={`trailer for ${title}`}
                    />
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const apiData = state.apiData[ownProps.data.imdbID] ? state.apiData[ownProps.data.imdbID] : {apiData : ''};
    return {
        rating: apiData.rating
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    getApiData() {
        dispatch(getApiData(ownProps.data.imdbID));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
