export * from './roles';
export * from './article-categories';

export const SITE_NAME = 'TheUniWire';
export const SITE_DESCRIPTION = 'Professional news platform for Nigerian universities';
export const SITE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export const ARTICLE_STATUS = {
  DRAFT: 'draft',
  PENDING: 'pending',
  PUBLISHED: 'published',
  ARCHIVED: 'archived',
} as const;

export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 10,
  MAX_PAGE_SIZE: 100,
} as const;

export const DATE_FORMAT = 'MMM dd, yyyy';
export const DATE_TIME_FORMAT = 'MMM dd, yyyy HH:mm';
