#!/usr/bin/env node
import {count} from './utils.js'
const {count} = require('./utils.js')

import fs from 'node:fs'
import _ from 'lodash'

const note = process.argv[2];
const newNote = {
    content: note,
    id: Date.now
}

