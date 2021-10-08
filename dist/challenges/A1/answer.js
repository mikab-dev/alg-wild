"use strict";
/**
 * In this challenge, you must sort students by their age (younger first). If some of them have
 * the same age, then you should sort them alphabetically (A to Z)
 *
 * @param students Unsorted list of students
 * @returns Sorted list of students
 */
Object.defineProperty(exports, "__esModule", { value: true });
// ↓ uncomment bellow lines and add your response!
function default_1({ students }) {
    const sortByName = students.sort((a, b) => a.name > b.name ? 1 : b.name > a.name ? -1 : 0);
    const sortByNameAndAge = sortByName.sort((a, b) => a.age > b.age ? 1 : b.age > a.age ? -1 : 0);
    return sortByNameAndAge;
}
exports.default = default_1;
