"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
var matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
var summary = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
// // Create an object that satisfies the 'DataReader' interface
// const csvFileReader = new CsvFileReader('football.csv');
// // Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
// const matchReader = new MatchReader(csvFileReader);
// matchReader.load();
// const summary = Summary.winsAnalysisWithHtmlReport('Man United');
// summary.buildAndPrintReport(matchReader.matches);
