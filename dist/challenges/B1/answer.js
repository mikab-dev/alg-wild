"use strict";
/**
 * In this challenge, you must sort events chronologically (oldest to latest) based on
 * their startDatetime prop. If some events have the same startDatetime, then the shortest must appear
 * first
 *
 * @param events Unsorted list of events
 * @returns Sorted list of events
 */
Object.defineProperty(exports, "__esModule", { value: true });
// ↓ uncomment bellow lines and add your response!
function default_1({ events, }) {
    const listByDate = events.sort((a, b) => a.startDatetime > b.startDatetime
        ? 1
        : b.startDatetime > a.startDatetime
            ? -1
            : 0);
    return listByDate;
}
exports.default = default_1;
