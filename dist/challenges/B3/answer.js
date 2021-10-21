"use strict";
/**
 * In this challenge, you must find and attach to each group the group (or groups)
 * with which the current group has the most skills in common.
 * Attached groups must be sorted by their name (A to Z).
 * You must not change the order of the main list of groups.
 *
 * @param groups List of groups without closestGroups
 * @returns The same list but with a new closestGroups prop on each
 */
Object.defineProperty(exports, "__esModule", { value: true });
// ↓ uncomment bellow lines and add your response!
function default_1({ groups, }) {
    // console.log(groups);
    // const filteredList = groups.filter(index => groups.skills[index]
    // const compareSkills = groups
    //   .filter((value) => skills.includes(value))
    //   .filter((value, index, self) => self.indexOf(value) === index);
    for (let i = 0; i < groups.length; i++) {
        for (let k = i + 1; k < groups.length; k++) {
            if (groups[i] != groups[k]) {
                const test = groups[i].skills;
                const test2 = groups[k].skills;
                console.log(test.includes("MySQL"));
            }
        }
    }
    return [];
}
exports.default = default_1;
