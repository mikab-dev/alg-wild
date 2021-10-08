"use strict";
/**
 * In this challenge, you have to get all the categories from the events. The categories
 * must be unique and sorted from A to Z.
 *
 * @param events List of events with their categories
 * @returns All existing categories sorted alphabatically without duplicates (A to Z)
 */
Object.defineProperty(exports, "__esModule", { value: true });
// ↓ uncomment bellow lines and add your response!
function default_1({ events, }) {
    const getAllCategories = events.map((item) => item.categories);
    const flattenArray = getAllCategories.flat();
    const arrayWithUniqueName = [...new Set(flattenArray)];
    const sortByName = arrayWithUniqueName.sort();
    return sortByName;
}
exports.default = default_1;
