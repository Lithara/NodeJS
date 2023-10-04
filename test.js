const wait = (time, cb) => {
    setTimeout(() => {
        cb();
    }, time);
}

wait(3000, () => {console.log('3s')})