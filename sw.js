
importScripts('/js/sw-utils.js');

const CACHE_STATIC_NAME = "static-v1";
const CACHE_INMUTABLE_NAME = "inmutable-v1";
const CACHE_DYNAMIC_NAME = "dynamic-v1";
const OFFLINE_ICON = "/img/offlineIco.png";


self.addEventListener('install', e => {

    const cacheProm = caches.open(CACHE_STATIC_NAME)
        .then(cache => {

            return cache.addAll([
                '/',
                '/index.html',
                '/style.css',
                '/img/main.jpg',
                '/js/app.js',
                '/img/offlineico.png',
                '/img/onlineico.png',
                '/aboutus.html'
            ]);
        });

    const cacheInmutable = caches.open(CACHE_INMUTABLE_NAME)
        .then(cache => {
            return cache.addAll([
                'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css',
                'https://code.jquery.com/jquery-3.2.1.slim.min.js',
                'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js',
                'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js'
            ]);
        });

    e.waitUntil(Promise.all([cacheProm, cacheInmutable]));


})


self.addEventListener('activate', e => {


    const respuesta = caches.keys().then(keys => {

        keys.forEach(key => {

            // static-v4
            if (key !== CACHE_STATIC_NAME && key.includes('static')) {
                return caches.delete(key);
            }

        });

    });



    e.waitUntil(respuesta);

});

self.addEventListener('fetch', e => {


   
    const respuesta = new Promise( (resolve, reject) =>{

        let rechazada = false;

        const falloUnaVez = () => {

            if ( rechazada ) {
                
                if ( /\.(png|jpg)$/i.test( e.request.url ) ) {

                    resolve( caches.match('/img/no-img.jpg')  );

                } else { 
                    reject('No se encontro respuesta');
                }


            } else {
                rechazada = true;
            }


        };



        fetch( e.request ).then( res => {
            res.ok ? resolve(res) : falloUnaVez();
        }).catch( falloUnaVez );


        caches.match( e.request ).then( res => {
            res ? resolve( res ) : falloUnaVez();
        }).catch( falloUnaVez );


    });


    e.respondWith( respuesta );

});