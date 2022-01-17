import './sass/main.scss';

//задача
// let second = 0;
// let intervalId;
// const refs = {
//     hours: document.querySelector('#hours'),
//     minutes: document.querySelector('#minutes'),
//     seconds: document.querySelector('#seconds'),
//     targetTimer: document.querySelector('#target-timer'),
//     save: document.querySelector('#save'),
// };

// function convertS(s) {
//   const hours = Math.floor(s / 60 / 60);
//   s = s - 60 * 60 * hours;
//   const minutes = Math.floor(s / 60);
//   s = s - 60 * minutes;
//   const seconds = s;
//   refs.hours.innerHTML = hours.toString().padStart(2, 0);
//   refs.minutes.innerHTML = minutes.toString().padStart(2, 0);
//   refs.seconds.innerHTML = seconds.toString().padStart(2, 0);
// }

// // setInterval(() => {
// //   secund += 1;
// //   convertS(secund);
// // }, 1000);

// refs.save.addEventListener('click', (e) => {
//     imitatedServer('times')
//         .then(res => {
//             console.log(res);
//             const times = res === null ? [] : res;
//             // second - это временная метка (тип number)
//             times.push(second);
//             return times;
//         })
//         .then(times => imitatedServer("times", "SET", times))
//         .catch();

// } );

// refs.targetTimer.addEventListener('click', onTimerClick);

// function onTimerClick(e) {
//   if (e.target.textContent === 'Stop') {
//     clearInterval(intervalId);
//     e.target.textContent = 'Start';
//   } else {
//     intervalId = setInterval(() => {
//       second += 1;
//       convertS(second);
//     }, 1000);
//     e.target.textContent = 'Stop';
//   }
// };


// const imitatedServer = (key, type = 'GET', data = {}) => {
//     const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             if (Math.random() > 0.2) {
//                 if (type === 'GET') {
//                     res(JSON.parse(localStorage.getItem(key)));
//                 } else if (type === 'SET') {
//                     localStorage.setItem(key, JSON.stringify(data))
//                     res(true)
//                 } else {
//                     rej('invalid type')
//                 }
//             } else rej('oops!!!')
//         }, getRandomInt(1000, 5000))
//     })
// }

// function printTimesStemp(s) {
//     const hours = Math.floor(s / 60 / 60);
//     s = s - 60 * 60 * hours;
//     const minutes = Math.floor(s / 60);
//     s = s - 60 * minutes;
//     const seconds = s;
//     refs.targetTimer.insertAdjacentHTML('beforeend', `<li>${hours.toString().padStart(2, 0)}:${minutes.toString().padStart(2, 0)}:${seconds.toString().padStart(2, 0)}</li>`);
// };

// imitatedServer('times').then(times => {
//     if (times === 0) return;
//     times.forEach(printTimesStemp);
// }).catch(console.log);

// добавить возможность удалять сохранённые точки
// добавить возможность начинять отсчет с сохранённой точки
//-------------------------------------------------------------




//---------------------------PRACTICE movie searcher----------------------------
//ключ 8a7432db37f5ff14bd102ef897a46bd5



// export default function fetchMovies(query) {
//     const KEY = '8a7432db37f5ff14bd102ef897a46bd5';
//     const BASE_URL = 'https://api.themoviedb.org/3/search/movie?';
//     return fetch(`${BASE_URL}api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${query}`)
//     .then(response => response.json())
// };

// import fetchMovies from './movieService';
// import debounce from 'lodash.debounce';
// import movieItem from './templates/movieItem.hbs';

// const input = document.querySelector('.input');
// const list = document.querySelector('.list');
// const btnLoad = document.querySelector('.load-more');
// let page = 1;
// let inputValue = '';

// btnLoad.addEventListener('click', loadMore);

// input.addEventListener('input', debounce(getMovie, 500));

// function getMovie() {
//     inputValue = input.value;
//     console.log(inputValue);
//     list.innerHTML = '';
//     btnLoad.style.display = "none";
//     if (inputValue.trim() === '') return;
//     fetchMovies(inputValue)
//         .then(data => {
//             console.log(data);
//             createMarkup(data.results);
//             return data;
//         })  
//         .then((data) => {
//             if (!data.results.length) {
//                 console.log('return');
//                 btnLoad.style.display = "none";
//                 return;
//             }
//             console.log('visible');
//             btnLoad.style.display = 'inline-block';
//         })
// };

// function createMarkup(array) {
//     // const list = document.createElement("ul");
//     // document.body.append(list);
//     // const markup = movieItem(array);
//     // document.querySelector('ul').insertAdjacentHTML("beforeend", markup);

//     const markup = movieItem(array);
//     list.insertAdjacentHTML('beforeend', markup) 
// }

// function loadMore() {
//     page += 1;
//     fetchMovies(inputValue, page)
//         .then(data => createMarkup(data.results))
// }
