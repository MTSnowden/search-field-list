export const myMovieListLoaded = (movies) => {
    return {
    type: 'MY_MOVIE_LIST_LOADED',
    value: movies
    };
}

export const loadMyMovieList = () => dispatch => {
        fetch("/movies")
        .then((res) => {
            return res.json()
        })
        .then((movies) => {
            dispatch(myMovieListLoaded(movies))
        });
    }


export const searchLoaded = (movies) => {
    return (dispatch) => {
        dispatch({
        type: 'SEARCH_RESULTS_LOADED',
        value: movies.results
        })
    };
}

export const loadSearch = (searchTerm) => {
    return (dispatch) => {
        dispatch({
            type: "LOAD_SEARCH"
        })
        fetch(`https://api.themoviedb.org/3/search/multi?query=${searchTerm}&api_key=2c21f9c6b3a11ec9052a26d421ca1f7b`)
        .then((res) => {
            return res.json()
        })
        .then((movies) => {
            dispatch(searchLoaded(movies))
        });
    }   
}



export const saveMyMovie = (movie) => {
    return (dispatch) => {
        fetch("/movies", {
            headers: {'Content-Type': 'application/json'},
            method: "POST",
            body: JSON.stringify(movie)
        })
        .then((movie) => {
            // console.log('RES:', res);
            dispatch(loadMyMovieList(movie))
        })
    }
}

export const removeMyMovie = (id) => dispatch => {
        fetch(`/movies` + id, {
            headers: {'Content-Type': 'application/json'},
            method: "DELETE"
        })
        .then((movie) => {
            dispatch(loadMyMovieList(movie))
        })   
}