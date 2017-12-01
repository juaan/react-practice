// @flow

export type Show = {
    poster: string,
    title: string,
    year: string,
    description: string,
    trailer: string,
    imdbID: string
};

declare var module: {
    hot: {
        accept(path: string, callback: () => void): void
    }
};
