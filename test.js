const wait = new Promise((resolve, reject) => {
    (time, cb) => {
        setTimeout(() => {
            cb();
        }, time);
    }
})

wait(3000, () => {
    wait(200, () => {
        
    })
})