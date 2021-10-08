"use strict";
/**
 * In this challenge, you have to add a list of skills to each group (based on
 * students skills in the group). Duplicates skills for one group is not permitted. Skills must be
 * sorted alphabatically. Groups order, students order and students skills order must remain
 * untouched.
 *
 * @param groups List of groups without skills, but with students
 * @returns List of groups with a new prop skills
 */
Object.defineProperty(exports, "__esModule", { value: true });
// ↓ uncomment bellow lines and add your response!
function default_1({ groups }) {
    return groups.map((group) => {
        const groupSkills = [];
        group.students.forEach((student) => {
            student.skills.forEach((skill) => {
                if (!groupSkills.includes(skill)) {
                    groupSkills.push(skill);
                }
            });
        });
        return {
            students: group.students,
            name: group.name,
            skills: groupSkills.sort(),
        };
    });
}
exports.default = default_1;
