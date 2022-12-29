// multiple promises
const p1 = new Promise((resolve, reject) => {
    setTimeout( () => {
        resolve('resolve from promise 1');
    }, 5000)
});

const p2 = new Promise((resolve, reject) => {
    setTimeout( () => {
        resolve('resolve from promise 2');
    }, 3000)
});

// execute two promises at a time
Promise.all([p1, p2])     // execute the promise
.then(data => console.log(data))
.catch(err => console.error(err))
;

// useing race method
Promise.race([p1, p2])     // execute the promise
.then(data => console.log(data))
.catch(err => console.error(err))
;
