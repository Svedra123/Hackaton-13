// 1. por que evitar callbacks en las llamadas asincronas? 

// Porque se dificulta la escritura del codigo asi como su comprension, es mejor utilizar promesas debido a su simplicidad y facil llamado

function levelOne(value, callback) {
    var newScore = value + 5;
    callback(newScore);
    }
    
    function startGame() {
    var currentScore = 5;
    console.log('Game Started! Current score is ' +  currentScore);
    
    levelOne(currentScore, function (levelOneReturnedValue) {
    console.log('Level One reached! New score is ' +  levelOneReturnedValue);
    });
    }
    startGame();


// 2. Que es una promesa? 

// * Una promesa es un objeto que representa la terminacion o el fracaso eventual de una operacion asincrona. Resuelve un valor
// y ejecuta un codigo de aceptacion o rechazo

const getNames = new Promise ( function(resolve, reject){
    return setTimeout(function(){
        const names = ("glen", "ignacio", "diego")
        resolve (names)
    }, 1000)
})

getNames.then(function(value){
    console.log('value',value)
}).catch(function(err){
    console.log('err',err)
}).finally(function(){
    console.log('finaly')
});


// 3. Que es un callback hell 

//el callback hell debido a malas prácticas de programación, realmente no planean la estructura de su código y no se
//dan cuenta de lo mal que que está estructurado hasta que es demasiado tarde, haciendo dificil su comprension

"use strict";
 
function asyncSqrt(value, callback) {
    console.log('START execution with value =', value);
    setTimeout(function () {
        callback(value, value * value);
    }, 0 | Math.random() * 100);
}
 
asyncSqrt(0, function (value, result) {
    console.log('END execution with value =', value, 'and result =', result);
    asyncSqrt(1, function (value, result) {
        console.log('END execution with value =', value, 'and result =', result);
        asyncSqrt(2, function (value, result) {
            console.log('END execution with value =', value, 'and result =', result);
            asyncSqrt(3, function (value, result) {
                console.log('END execution with value =', value, 'and result =', result);
                asyncSqrt(4, function (value, result) {
                    console.log('END execution with value =', value, 'and result =', result);
                    asyncSqrt(5, function (value, result) {
                        console.log('END execution with value =', value, 'and result =', result);
                        asyncSqrt(6, function (value, result) {
                            console.log('END execution with value =', value, 'and result =', result);
                            asyncSqrt(7, function (value, result) {
                                console.log('END execution with value =', value, 'and result =', result);
                                asyncSqrt(8, function (value, result) {
                                    console.log('END execution with value =', value, 'and result =', result);
                                    asyncSqrt(9, function (value, result) {
                                        console.log('END execution with value =', value, 'and result =', result);
                                        console.log('COMPLETED');
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});