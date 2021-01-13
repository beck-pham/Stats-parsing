import fs from 'fs';
import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';

//tuple
type MatchData =[Date, string, string, number, number, MatchResult, string];

export class CsvFileReader {
  data: MatchData[] = [];
  
  constructor(public filename: string) {}

  read(): void {
    this.data = fs.readFileSync(this.filename, {
      encoding: 'utf-8' // return a string from csv file
    })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      }
    )
    .map((row: string[]): MatchData => {
      return [ // data structure as the tuple defined above
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult, //type assertion "H", "A", "D"
        row[6]
      ];
    })
  }
}