"use strict";
/**
 * In this challenge, you should sort messages by their sentAt property (oldest first) and
 * modify them by adding an "unread" property
 * (boolean meaning that the current user did not read this message) based on the lastActivityDatetime
 * input.
 *
 * @param lastActivityDatetime String representing an ISO8601 datetime. Represent the last time the user checked his messages
 * @param messages List of messages, unsorted and without unread property
 * @returns Sorted list of messages with the unread information
 */
Object.defineProperty(exports, "__esModule", { value: true });
// ↓ uncomment bellow lines and add your response!
function default_1({ lastActivityDatetime, messages, }) {
    const sortByDate = messages.sort((a, b) => a.sentAt > b.sentAt ? 1 : b.sentAt > a.sentAt ? -1 : 0);
    sortByDate.forEach((date) => {
        const lastActivity = JSON.stringify(lastActivityDatetime);
        const dateSend = JSON.stringify(date.sentAt);
        if (dateSend > lastActivity) {
            date.unread = true;
        }
        else {
            date.unread = false;
        }
    });
    return sortByDate;
}
exports.default = default_1;
