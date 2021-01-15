import { MatchReader } from './MatchReader';
import { Summary } from './Summary';


const matchReader = MatchReader.fromCsv('football.csv');
const summary = Summary.winsAnalysisWithHtmlReport('Man United');

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);




// // Create an object that satisfies the 'DataReader' interface
// const csvFileReader = new CsvFileReader('football.csv');
// // Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
// const matchReader = new MatchReader(csvFileReader);
// matchReader.load();


// const summary = Summary.winsAnalysisWithHtmlReport('Man United');

// summary.buildAndPrintReport(matchReader.matches);


