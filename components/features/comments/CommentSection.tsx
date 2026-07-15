'use client';

export function CommentSection({ articleSlug }: { articleSlug: string }) {
  return (
    <section className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-neutral-900 mb-6">Comments</h2>
      <div className="bg-neutral-50 rounded-lg p-6 text-center text-neutral-600">
        <p>Comments feature coming soon</p>
      </div>
    </section>
  );
}
