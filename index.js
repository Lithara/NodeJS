#!/usr/bin/env node

import {count} from './utils.js'
import whatever from './utils.js'

const note = process.argv[2];
const newNote = {
    content: note,
    id: Date.now
}

