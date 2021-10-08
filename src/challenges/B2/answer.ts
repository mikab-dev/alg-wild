/**
 * In this challenge, you have to get all the categories from the events. The categories
 * must be unique and sorted from A to Z.
 *
 * @param events List of events with their categories
 * @returns All existing categories sorted alphabatically without duplicates (A to Z)
 */

// ↓ uncomment bellow lines and add your response!
export default function ({
  events,
}: {
  events: EventWithCategory[];
}): string[] {
  const getAllCategories = events.map((item) => item.categories);
  const flattenArray = getAllCategories.flat();
  const arrayWithUniqueName = [...new Set(flattenArray)];
  const sortByName = arrayWithUniqueName.sort();
  return sortByName;
}

// used interfaces, do not touch
export interface EventWithCategory {
  startDatetime: string;
  endDatetime: string;
  event: string;
  categories: string[];
}
