import { MatchData } from './MatchData';
import { WinsAnalysis } from './analyzers/WinAnalysis';
import { HtmlReport } from './reportTarget/HtmlReport';

export interface Analyzer {
  run(matches: MatchData[]): string
}

export interface OutputTarget {
  print(report: string): void
}

// STATIC uses to call METHOD WITHOUT create an INSTANCE out of a class
export class Summary {
  static winsAnalysisWithHtmlReport(team: string): Summary {
    return new Summary(
      new WinsAnalysis(team),
      new HtmlReport()
    )
  }

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}

// METHOD can only be called when you create an INSTANCE out of a CLASS
// const summary = new Summary();
// summary.buildAndPrintReport