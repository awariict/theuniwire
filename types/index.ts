// User Roles
export enum UserRole {
  SUPER_ADMIN = 'super_admin',
  ADMIN = 'admin',
  EDITOR = 'editor',
  USER = 'user',
}

// User Type
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: UserRole;
  university?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Article Type
export interface Article {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  thumbnail?: string;
  category: ArticleCategory;
  tags: string[];
  author: User;
  status: ArticleStatus;
  featured: boolean;
  views: number;
  likes: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
}

export enum ArticleStatus {
  DRAFT = 'draft',
  PENDING = 'pending',
  PUBLISHED = 'published',
  ARCHIVED = 'archived',
}

export enum ArticleCategory {
  NEWS = 'news',
  EVENTS = 'events',
  FEATURES = 'features',
  ANNOUNCEMENTS = 'announcements',
  CAMPUS_LIFE = 'campus_life',
  SPORTS = 'sports',
  ENTERTAINMENT = 'entertainment',
  ACADEMIC = 'academic',
}

// Comment Type
export interface Comment {
  id: string;
  content: string;
  author: User;
  article: Article;
  likes: number;
  createdAt: Date;
  updatedAt: Date;
}

// University Type
export interface University {
  id: string;
  name: string;
  abbreviation: string;
  location: string;
  website?: string;
  logo?: string;
  description?: string;
  articlesCount: number;
  createdAt: Date;
}

// Dashboard Stats
export interface DashboardStats {
  totalArticles: number;
  totalUsers: number;
  totalViews: number;
  totalComments: number;
  pendingApproval: number;
}

// Pagination
export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}
