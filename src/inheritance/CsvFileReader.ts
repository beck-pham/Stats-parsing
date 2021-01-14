import fs from 'fs';

// using generics <>. It is similar to arguments of a function
export abstract class CsvFileReader<T> {
  data: T[] = [];
  
  constructor(public filename: string) {}
  abstract mapRow(row: string[]): T;

  read(): void {
    this.data = fs.readFileSync(this.filename, {
      encoding: 'utf-8' // return a string from csv file
    })
      .split('\n') 
      .map((row: string): string[] => {
        return row.split(',');
      }
    )
    .map(this.mapRow)
  }
}