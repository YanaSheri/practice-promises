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

//---------------------------PRACTICE----------------------------
