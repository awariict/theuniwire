// User Types\nexport type UserRole = 'super_admin' | 'admin' | 'editor' | 'user';\n\nexport interface User {\n  id: string;\n  name: string;\n  email: string;\n  avatar?: string;\n  role: UserRole;\n  university?: string;\n  isActive: boolean;\n  createdAt: Date;\n  updatedAt: Date;\n}\n\n// Article Types\nexport type ArticleStatus = 'draft' | 'pending' | 'published' | 'archived';\nexport type ArticleCategory = \n  | 'news' \n  | 'events' \n  | 'features' \n  | 'announcements' \n  | 'campus_life' \n  | 'sports' \n  | 'entertainment' \n  | 'academic';\n\nexport interface Article {\n  id: string;\n  title: string;\n  slug: string;\n  excerpt: string;\n  content: string;\n  thumbnail?: string;\n  category: ArticleCategory;\n  tags: string[];\n  author: User;\n  status: ArticleStatus;\n  featured: boolean;\n  views: number;\n  likes: number;\n  createdAt: Date;\n  updatedAt: Date;\n  publishedAt?: Date;\n}\n\n// Comment Types\nexport interface Comment {\n  id: string;\n  articleId: string;\n  author: User;\n  content: string;\n  likes: number;\n  approved: boolean;\n  createdAt: Date;\n  updatedAt: Date;\n}\n\n// University Types\nexport interface University {\n  id: string;\n  name: string;\n  abbreviation: string;\n  location: string;\n  website: string;\n  logo?: string;\n  description?: string;\n  createdAt: Date;\n}\n\n// API Response Types\nexport interface ApiResponse<T> {\n  success: boolean;\n  data?: T;\n  error?: string;\n  message?: string;\n}\n\nexport interface PaginatedResponse<T> {\n  items: T[];\n  total: number;\n  page: number;\n  pageSize: number;\n  totalPages: number;\n}\n\n// Auth Types\nexport interface LoginRequest {\n  email: string;\n  password: string;\n}\n\nexport interface LoginResponse {\n  token: string;\n  user: User;\n}\n\nexport interface RegisterRequest {\n  name: string;\n  email: string;\n  password: string;\n  university: string;\n}\n\n// Search Types\nexport interface SearchParams {\n  query: string;\n  category?: ArticleCategory;\n  page?: number;\n  pageSize?: number;\n  sortBy?: 'date' | 'views' | 'likes';\n  sortOrder?: 'asc' | 'desc';\n}\n\nexport interface SearchResult {\n  articles: Article[];\n  total: number;\n  page: number;\n  pageSize: number;\n}\n\n// Analytics Types\nexport interface ArticleStats {\n  articleId: string;\n  title: string;\n  views: number;\n  likes: number;\n  comments: number;\n  shares: number;\n}\n\nexport interface UserStats {\n  userId: string;\n  articlesWritten: number;\n  totalViews: number;\n  totalEngagement: number;\n}\n\n// Notification Types\nexport type NotificationType = 'comment' | 'like' | 'article_published' | 'article_approved';\n\nexport interface Notification {\n  id: string;\n  userId: string;\n  type: NotificationType;\n  title: string;\n  message: string;\n  link?: string;\n  read: boolean;\n  createdAt: Date;\n}\n\n// Form Types\nexport interface CreateArticleForm {\n  title: string;\n  excerpt: string;\n  content: string;\n  category: ArticleCategory;\n  tags: string[];\n  thumbnail?: string;\n  featured: boolean;\n}\n\nexport interface UpdateArticleForm extends Partial<CreateArticleForm> {\n  status?: ArticleStatus;\n}\n\nexport interface CreateCommentForm {\n  content: string;\n  articleId: string;\n}\n\n// Error Types\nexport interface ApiError {\n  status: number;\n  message: string;\n  errors?: Record<string, string>;\n}\n\n// Filter Types\nexport interface ArticleFilters {\n  category?: ArticleCategory;\n  status?: ArticleStatus;\n  authorId?: string;\n  featured?: boolean;\n  dateFrom?: Date;\n  dateTo?: Date;\n}\n"
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
