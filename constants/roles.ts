export const ROLES = {
  SUPER_ADMIN: 'super_admin',
  ADMIN: 'admin',
  EDITOR: 'editor',
  USER: 'user',
} as const;

export const ROLE_PERMISSIONS = {
  super_admin: [
    'create_user',
    'delete_user',
    'edit_user',
    'manage_roles',
    'approve_articles',
    'delete_articles',
    'manage_admins',
    'view_analytics',
    'manage_universities',
    'system_settings',
  ],
  admin: [
    'approve_articles',
    'delete_articles',
    'create_editor',
    'delete_editor',
    'view_analytics',
    'manage_universities',
  ],
  editor: ['create_article', 'edit_own_article', 'upload_media'],
  user: ['read_articles', 'comment_on_articles', 'like_articles'],
} as const;

export const ROLE_DESCRIPTIONS = {
  super_admin: 'Full system access and user management',
  admin: 'Manage editors, approve content, and view analytics',
  editor: 'Create and edit articles, upload media',
  user: 'Read articles and interact with content',
} as const;
