
// https://reqres.in/api/users

fetch('https://swapi.co/api/people/1')
    .then( resp=>{
        if (resp.ok){
            return resp;
        } else {
            throw ('no es encontro el registro')
        }
    })
    .then(resp => {
        return resp.json();
    })
    .then(resp =>{ 
        console.log(resp.name);
        console.log(resp.gender);
    })
    .catch(error =>console.log(error));

// let user= {
//     nombre: 'raul',
//     edad: 32
// };

// fetch('https://reqres.in/api', {
//         method: 'POST',
//         body: JSON.stringify( user ),
//         headers: {
//             'Content-Type': 'application/json'
//         }
// })
// .then( resp => resp.json() )
// .then( console.log)
// .catch( error => {
//     console.log('error en la peticion');
//     console.log(error);
// });


