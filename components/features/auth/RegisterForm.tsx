'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';
import { isValidEmail, isValidPassword } from '@/utils/validation';

export function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    university: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.password || !formData.university) {
      toast.error('Please fill in all fields');
      return;
    }

    if (!isValidEmail(formData.email)) {
      toast.error('Please enter a valid email');
      return;
    }

    if (!isValidPassword(formData.password)) {
      toast.error('Password must be at least 8 characters with uppercase, lowercase, and numbers');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    setLoading(true);

    try {
      // TODO: Replace with actual API call
      console.log('Registering:', formData);
      toast.success('Registration successful! Please sign in.');
      // Redirect to login
    } catch (error) {
      toast.error('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-neutral-900 mb-2">Create Account</h1>
      <p className="text-neutral-600 mb-8">Join TheUniWire today</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">University</label>
          <select
            name="university"
            value={formData.university}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
          >
            <option value="">Select a university</option>
            <option value="univ_1">University of Lagos</option>
            <option value="univ_2">University of Ibadan</option>
            <option value="univ_3">Obafemi Awolowo University</option>
            <option value="univ_4">University of Nigeria</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
            placeholder="••••••••"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 disabled:opacity-50 transition"
        >
          {loading ? 'Creating Account...' : 'Create Account'}
        </button>
      </form>

      <p className="text-center text-neutral-600 mt-6">
        Already have an account?{' '}
        <a href="/login" className="text-primary-600 font-semibold hover:underline">
          Sign In
        </a>
      </p>
    </div>
  );
}
