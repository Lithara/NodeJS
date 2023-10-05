const wait = (time, cb) => {
    setTimeout(() => {
        cb();
    }, time);
}

wait(3000, () => {
    wait(200, () => {
        wait(100, () => {
            console.log('done');
        })
    })
})