console.log('start');


function sumarUno(numero){

    return new Promise(function(resolve,reject) {

    setTimeout( function(){
        console.log(numero);
        resolve( numero + 1 );

    }, 800);
    
    });



}


sumarUno( 5 )
.then( sumarUno )
.then( sumarUno )
.then( sumarUno );


