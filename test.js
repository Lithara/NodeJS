import {promisify} from 'util'

const wait = (time,cb) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, time)
    })
}

const run = async () => {
    await wait(3000)
    wait(2000)
    wait(1000)
}