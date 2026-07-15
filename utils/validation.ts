export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPassword = (password: string): boolean => {
  // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.{8,})/.test(password);
  return passwordRegex;
};

export const validateArticleForm = (data: any): { isValid: boolean; errors: Record<string, string> } => {
  const errors: Record<string, string> = {};

  if (!data.title || data.title.trim().length === 0) {
    errors.title = 'Title is required';
  }
  if (data.title && data.title.length > 200) {
    errors.title = 'Title must be less than 200 characters';
  }

  if (!data.content || data.content.trim().length === 0) {
    errors.content = 'Content is required';
  }
  if (data.content && data.content.length < 100) {
    errors.content = 'Content must be at least 100 characters';
  }

  if (!data.excerpt || data.excerpt.trim().length === 0) {
    errors.excerpt = 'Excerpt is required';
  }

  if (!data.category) {
    errors.category = 'Category is required';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
