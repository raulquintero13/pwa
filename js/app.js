console.log('start');

if (navigator.serviceWorker){
    console.log('supported');
    navigator.serviceWorker.register('/sw.js');
}