// promise means eventual completetion of async operations

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('foo');
//     }, 3000);
//     // resolve('foo');
// });

// promise1
// .then((value) => {
//     console.log(value);
//     // expected output: "foo"
//     return '1'
// })
// .then((value) => {
//     console.log(value);
//     // expected output: "foo"
// })
// .then(() =>{
//     throw new Error('some error')
// })
// .catch(e => {
//     console.log(e)
// })
// .finally(() => {
//     console.log('promise final section')
// })

// console.log('=============', promise1);

function resolveAfter2Seconds() {
    console.log("starting slow promise")
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("slow")
            console.log("slow promise is done")
        }, 2000)
    })
}

function resolveAfter1Second() {
    console.log("starting fast promise")
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve("fast")
            console.log("fast promise is done")
        }, 1000)
    })
}


async function sequentialStart() {
    console.log('==SEQUENTIAL START==')
    const startTime = Date.now()

    // 1. Execution gets here almost instantly
    // const slow = await resolveAfter2Seconds()
    // console.log(slow, Date.now() - startTime) // 2. this runs 2 seconds after 1.

    // const fast = await resolveAfter1Second()
    // console.log(fast, Date.now() - startTime) // 3. this runs 3 seconds after 1.

    // console.log('==SEQUENTIAL START==')
    resolveAfter2Seconds().then(res => {
        console.log(Date.now() - startTime) // 4. this runs 2 seconds after 1
        console.log('resolveAfter2Seconds', res)
    })
    resolveAfter1Second().then(res => {
        console.log(Date.now() - startTime) // 5. this runs 1 second after 1
        console.log('resolveAfter1Second', res)
    })
}

sequentialStart()