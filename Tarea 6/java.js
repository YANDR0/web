
function  callbacks(){

    setTimeout(function timeHola(i) { 
        console.log("Hola " + ++i);
        if(i < 10) setTimeout(timeHola, 1000, i);
        else console.log("FIN ");
    }, 1000, 0);

    setTimeout(function timeMundo(i) { 
        console.log("Mundo " + ++i);
        if(i < 5) setTimeout(timeMundo, 2000, i);
    }, 2000, 0);

}

function promises(){

    let promiseHola = (i) =>{
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Hola " + i)
                resolve(i+1)
            }, 1000);
        })
    }

    let promiseMundo = (i) =>{
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Mundo " + i)
                resolve(i+1)
            }, 2000);
        })
    }

    promiseMundo(1)
    .then(r => promiseMundo(r))
    .then(r => promiseMundo(r))
    .then(r => promiseMundo(r))
    .then(r => promiseMundo(r));

    promiseHola(1)
    .then(r => promiseHola(r))
    .then(r => promiseHola(r))
    .then(r => promiseHola(r))
    .then(r => promiseHola(r))
    .then(r => promiseHola(r))
    .then(r => promiseHola(r))
    .then(r => promiseHola(r))
    .then(r => promiseHola(r))
    .then(r => promiseHola(r))
    .then(r => console.log("FIN"));

}

function async(){

}


//callbacks()
//promises()
//async()

