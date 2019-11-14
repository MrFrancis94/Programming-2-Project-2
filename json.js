$(() => {

    // Submit a form
    $('#search-form').submit((e) => {
        e.preventDefault();
        const searchTerm = $('#search-imput').val();
        getRequest(searchTerm);

    });

    function getRequest(input) {
        const url = 'http://www.omdbapi.com/'
        const paramenters = {
            apikey: '879742c', // Your own api key
            s: input,
            r: 'json'
        };

        $.getJSON(url, paramenters, (response) => { // or data instead of response
            showResults(response.Search);
        });
    }

    function showResults(movies) {
        /*
        for(let i = 0; i < movies.length; i++){ // JS For-Loop, the old way
        }
        */

        $.each(movies, (i, value) => { // JQuery version
            $('#results').append(`<h3>${value.Title}</h3> <img src="${value.Poster}"><a href="https://www.imdb.com/title/${value.imdbID}">Read More</a`);
        });
    }
});