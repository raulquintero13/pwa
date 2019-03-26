console.log('start');

if (navigator.serviceWorker){
    console.log('supported');
    navigator.serviceWorker.register('/sw.js');
}


var wifi = document.querySelector('#wifi');

// document.addEventListener("DOMContentLoaded", function () {
// setInterval(() => {
//     fetch('http://localhost:8080/img/onlineico.png')
//         .then( ()=>{
//             console.log('online');
//             wifi.src = 'http://localhost:8080/img/onlineico.png'

//         })
//         .catch(()=>{
//             console.log('offline');
//             wifi.src = '/img/offlineico.png'
//         });
// }, 3000);

// });