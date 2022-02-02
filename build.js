const { exec } = require('child_process')

let p1 = exec('npm run webpack')
p1.stdout.pipe(process.stdout)

// p1.on('exit', () => {
//     let p2 = exec('npm run debug')
//     p2.stdout.pipe(process.stdout)
//     p2.stderr.pipe(process.stderr)

// })

