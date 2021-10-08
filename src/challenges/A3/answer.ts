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

// ↓ uncomment bellow lines and add your response!

export default function ({
  lastActivityDatetime,
  messages,
}: {
  lastActivityDatetime: string;
  messages: Message[];
}): MessageWithUnread[] {
  
  const sortByDate = messages.sort((a, b) =>
    a.sentAt > b.sentAt ? 1 : b.sentAt > a.sentAt ? -1 : 0
  );

  sortByDate.forEach((date) => {
    const lastActivity = JSON.stringify(lastActivityDatetime);
    const dateSend = JSON.stringify(date.sentAt);

    if (dateSend > lastActivity) {
      date.unread = true;
    } else {
      date.unread = false;
    }
  });
  return sortByDate;
}

// used interfaces, do not touch
export interface Message {
  author: string;
  sentAt: string;
  message: string;
  //TODO check comment choper le unread de l'interface
  unread: boolean;
}

export interface MessageWithUnread extends Message {
  unread: boolean;
}
