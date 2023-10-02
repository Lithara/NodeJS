#!/usr/bin/env node
import * as things from './utils'

import fs from 'node:fs'
import _ from 'lodash'

const note = process.argv[2];
const newNote = {
    content: note,
    id: Date.now
}

