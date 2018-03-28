#!/usr/bin/env node

const opn = require('opn')

const url = 'http://skylabcoders.com'

opn(url, { wait: false })
    .then(() => console.log(`opening ${url}`))