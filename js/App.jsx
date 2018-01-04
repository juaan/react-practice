import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import AsyncRoute from './AsyncRoute';
import preload from '../data';

const NotFound = () => <h1>Not Found 404</h1>;

const App = () => (
    <Provider store={store}>
        <div className="app">
            <Switch>
                <Route
                    exact
                    path="/"
                    component={props => <AsyncRoute props={props} loadingPromise={import('./Landing')} />}
                />

                <Route
                    path="/search"
                    component={props => (
                        <AsyncRoute
                            props={Object.assign({ data: preload }, props)}
                            loadingPromise={import('./Search')}
                        />
                    )}
                />
                <Route
                    path="/details/:id"
                    component={props => {
                        const oneData = preload.shows.find(el => el.imdbID == props.match.params.id);
                        return (
                            <AsyncRoute
                                props={Object.assign({ data: oneData }, props)}
                                loadingPromise={import('./Details')}
                            />
                        );
                    }}
                />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Provider>
);

export default App;
