export const ARTICLE_CATEGORIES = {
  NEWS: 'news',
  EVENTS: 'events',
  FEATURES: 'features',
  ANNOUNCEMENTS: 'announcements',
  CAMPUS_LIFE: 'campus_life',
  SPORTS: 'sports',
  ENTERTAINMENT: 'entertainment',
  ACADEMIC: 'academic',
} as const;

export const CATEGORY_LABELS = {
  news: 'News',
  events: 'Events',
  features: 'Features',
  announcements: 'Announcements',
  campus_life: 'Campus Life',
  sports: 'Sports',
  entertainment: 'Entertainment',
  academic: 'Academic',
} as const;

export const CATEGORY_COLORS = {
  news: 'bg-blue-100 text-blue-800',
  events: 'bg-purple-100 text-purple-800',
  features: 'bg-green-100 text-green-800',
  announcements: 'bg-red-100 text-red-800',
  campus_life: 'bg-yellow-100 text-yellow-800',
  sports: 'bg-orange-100 text-orange-800',
  entertainment: 'bg-pink-100 text-pink-800',
  academic: 'bg-indigo-100 text-indigo-800',
} as const;
