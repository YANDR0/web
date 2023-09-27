

function  callbacks(){

    let banderaHola = false, banderaMundo = false; 

    setTimeout(function timeHola(i) { 
        console.log("Hola " + ++i);
        if(i < 10) setTimeout(timeHola, 1000, i);
        else banderaHola = true;
    }, 1000, 0);

    setTimeout(function timeMundo(i) { 
        console.log("Mundo " + ++i);
        if(i < 5) setTimeout(timeMundo, 2000, i);
        else banderaMundo = true;
    }, 2000, 0);

    setTimeout(function fin() { 
        if(!(banderaHola && banderaMundo)) setTimeout(fin, 1000);
        else console.log("FIN ");
    }, 1000, 0);

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

    Promise.all([
        promiseMundo(1)
        .then(r => promiseMundo(r))
        .then(r => promiseMundo(r))
        .then(r => promiseMundo(r))
        .then(r => promiseMundo(r)),
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
    ]).then(()=> console.log("FIN"));

}

function asin(){

    function timer(time){
        return new Promise((resolve, reject) => setTimeout(a => resolve(), time));
    }

    async function asinHola(){
        for (let i = 1; i <= 10; i++) {
            let wait = await timer(1000);
            console.log("Hola " + i);
        }
    }

    async function asinMundo(){
        for (let i = 1; i <= 5; i++) {
            let wait = await timer(2000);
            console.log("Mundo " + i);
        }
    }
    
    Promise.all([
        asinHola(),
        asinMundo()
        ]).then(()=> console.log("FIN"));

}


callbacks()
//promises()
//asin()

