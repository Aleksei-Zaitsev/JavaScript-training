"use strict"


// Спрашиваем сколько фильмов просмогтрел гость

let numberOfFilms;
function start() {

    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

    while (numberOfFilms == null || numberOfFilms == "" || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    };
        
};

start();

// Создаем объект с базой данных рейтинга кинофильмов гостя

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// Проверяем чтобы ответы были отвечены корректно

function rememberMeFilms() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Один из последних фильмов которые ты посмотрел?'),
            b = prompt('От 1 до 10 на сколько понравился фильм?');
        
        if (a != null && b != null && a != '' & b != '' & a.length < 50 && b.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            console.log('error');
            i--;
        }
    };
};

rememberMeFilms();

// По количеству фильмов делаем комментарий

function detectPersonalLvl() {
    if (numberOfFilms < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (numberOfFilms >= 10 && numberOfFilms < 30) {
        alert('Вы классический зритель');
    } else {
        alert('Вы киноман!')
    }
};

detectPersonalLvl();

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Твой ${i + 1} любимый жанр?`);
    }
}

writeYourGenres();

function showMyBD(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    } 
};

showMyBD(personalMovieDB.privat);








