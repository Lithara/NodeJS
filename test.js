import fs from 'node:fs/promises'

const readPjson = async () => {
    const pjsonPath = new URL('./package.json', import.meta.url)
    return JSON.parse(await fs.readFileSync(pjsonPath, 'utf-8'))
}

readPjson()