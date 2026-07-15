'use client';

export function AdminDashboard() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-neutral-900 mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-white rounded-lg border border-neutral-200 p-6">
            <p className="text-neutral-600 text-sm mb-2">Stat {i}</p>
            <p className="text-3xl font-bold text-primary-600">1,234</p>
          </div>
        ))}
      </div>
    </div>
  );
}
