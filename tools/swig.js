'use strict'

const fs  = require('fs')
const swig  = require('swig')
const jsonfile = require('jsonfile')

// Config
const entry = 'components/app/templates/index.swig'
const data = 'components/app/data/sample.json'
const build = 'build/index.html'

const sample = jsonfile.readFileSync(data)
console.log(sample)
const content = swig.renderFile(entry, sample)

fs.writeFile(build, content, (err) => {
  if (err) return err
  console.log(content)
})
