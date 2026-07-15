'use client';

import { useState } from 'react';
import { HiSearch } from 'react-icons/hi';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function SearchBar({ value, onChange, placeholder = 'Search articles...' }: SearchBarProps) {
  return (
    <div className="relative">
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full px-4 py-3 pl-10 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
        />
        <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={20} />
      </div>
    </div>
  );
}
