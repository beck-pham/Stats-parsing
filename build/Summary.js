"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
var WinAnalysis_1 = require("./analyzers/WinAnalysis");
var HtmlReport_1 = require("./reportTarget/HtmlReport");
// STATIC uses to call METHOD WITHOUT create an INSTANCE out of a class
var Summary = /** @class */ (function () {
    function Summary(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    Summary.winsAnalysisWithHtmlReport = function (team) {
        return new Summary(new WinAnalysis_1.WinsAnalysis(team), new HtmlReport_1.HtmlReport());
    };
    Summary.prototype.buildAndPrintReport = function (matches) {
        var output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    };
    return Summary;
}());
exports.Summary = Summary;
// METHOD can only be called when you create an INSTANCE out of a CLASS
// const summary = new Summary();
// summary.buildAndPrintReport
