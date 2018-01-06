require('babel-register');

const express = require('express'),
    React = require('react'),
    ReactDOMServer = require('react-dom/server'),
    ReactRouter = require('react-router-dom'),
    _ = require('lodash'),
    fs = require('fs'),
    ClientApp = require('./js/App').default,
    port = 8080,
    StaticRouter = ReactRouter.StaticRouter,
    baseTemplate = fs.readFileSync('./index.html'),
    template = _.template(baseTemplate),
    // cors = require('cors'),
    // logger = require('morgan'),
    app = express();

// const buffer = fs.readFileSync('./data.json');
// const showsObj = JSON.parse(buffer);
// const ratedShows = showsObj.shows.map(show =>
//     Object.assign({ rating: `${Math.floor(Math.random() * 9)}.${Math.floor(Math.random() * 9)}` }, show)
// );

// app.use(logger('dev'));
// app.use(cors());

app.use('/public', express.static('./public'));
app.use((req, res) => {
    const context = {};
    const body = ReactDOMServer.renderToString(
        React.createElement(StaticRouter, { location: req.url, context }, React.createElement(ClientApp))
    );

    if (context.url) {
        res.redirect(context.url);
    }
    res.write(template({ body }));
    res.end();
});

// app.get('/:id', (req, res) => {
//     const show = ratedShows.find(item => item.imdbID === req.params.id);
//     if (show) {
//         console.log(show.title);
//         setTimeout(() => res.json(show), Math.floor(Math.random() * 5000));
//     } else {
//         console.log(404, req.params.id);
//         res.status(404).json({ error: 'show not found' });
//     }
// });

app.listen(port, () => {
    console.log(`server is listening on ${port}`);
});
