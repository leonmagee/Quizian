/**
 * Get Data from Trivia API
 * @type {{getQuestions: (())}}
 */
const api = {
    getQuestions(n) {

        //const url = 'https://opentdb.com/api.php?amount=' + n + '&type=multiple';
        //const url = 'https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986';
        //const url = 'https://opentdb.com/api.php?amount=10&type=multiple&encode=base64';

        const url = 'https://levon.io/wp-json/quizian/sports/basketball/nba/10';

        return fetch(url).then((res) => res.json());
        //console.log('api working so far?');
        //return fetch(url).then((res) => console.log(res));

    },
}

module.exports = api;