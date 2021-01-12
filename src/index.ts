import fs from 'fs';

const matches = fs.readFileSync('football.csv', {
  encoding: 'utf-8' // return a string from csv file
})
  .split('\n')
  .map((row: string): string[] => {
    return row.split(',');
  })

// analysis
let manUnitedWins = 0;

for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === 'H') {
    manUnitedWins++
  } else if (match[2] === 'Man United' && match[5] === 'A') {
    manUnitedWins++;
  }
}

console.log( `Man United won ${manUnitedWins} games`);