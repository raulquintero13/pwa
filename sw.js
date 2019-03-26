
const CACHE_STATIC_NAME     = "static-v1";
const CACHE_INMUTABLE_NAME  = "inmutable-v1";
const CACHE_DYNAMIC_NAME    = "dynamic-v1";



self.addEventListener('install', e => {
    
    const cacheProm = caches.open( CACHE_STATIC_NAME )
        .then( cache => {

            return cache.addAll([
                '/',
                '/index.html',
                '/style.css',
                '/img/main.jpg',
                '/js/app.js',
            ])
        });
    
        const cacheInmutable = caches.open( CACHE_INMUTABLE_NAME )
            .then( cache => {
                return  cache.add('https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css')
            });
    
    e.respondWith( Promise.all([cacheProm, cacheInmutable]) );



})