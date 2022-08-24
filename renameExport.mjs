import fs from 'fs'

function executeRename() {
  fs.rename('./out/[[...index]].html', './out/index.html', err => {
    if (err) throw err
    console.log('[...index]].html renamed to index.html')
  })
}
executeRename()
