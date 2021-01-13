"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
var dateStringToDate = function (dateString) {
    var dateSeparator = dateString
        .split('/')
        .map(function (value) {
        return parseInt(value);
    });
    // 28/10/2008
    return new Date(dateSeparator[2], dateSeparator[1] - 1, dateSeparator[0]);
};
exports.dateStringToDate = dateStringToDate;
