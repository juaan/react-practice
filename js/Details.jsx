// @flow

import React from 'react';
import Header from './Header';
import Spinner from './Spinner';
import axios from 'axios';

class Details extends React.Component {
    state = {
        apiData: { rating: '' }
    };
    props: {
        data: Show
    };

    componentDidMount() {
        axios.get(`http://localhost:3000/${this.props.data.imdbID}`).then((res: { data: { rating: string } }) => {
            this.setState({ apiData: res.data });
        });
    }

    render() {
        const { title, description, year, poster, trailer } = this.props.data;

        return (
            <div className="details">

                <Header />
                <section>
                    <h1>{title}</h1>
                    <h1>({year})</h1>
                    {this.state.apiData.rating ? <h3>{this.state.apiData.rating}</h3> : <Spinner />}
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

export default Details;
