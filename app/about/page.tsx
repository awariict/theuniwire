'use client';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-neutral-900 mb-6">About TheUniWire</h1>
        
        <div className="prose max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Our Mission</h2>
            <p className="text-neutral-600 leading-relaxed">
              TheUniWire is dedicated to keeping Nigerian university communities informed and connected. 
              We provide a platform for sharing news, events, and announcements from universities across Nigeria, 
              fostering a sense of community and belonging among students, staff, and alumni.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">What We Do</h2>
            <ul className="space-y-3 text-neutral-600">
              <li className="flex gap-3">
                <span className="text-primary-600 font-bold">•</span>
                <span>Aggregate news and announcements from Nigerian universities</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary-600 font-bold">•</span>
                <span>Provide a platform for university events and campus activities</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary-600 font-bold">•</span>
                <span>Connect students, staff, and alumni across institutions</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary-600 font-bold">•</span>
                <span>Support campus journalism and student voices</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Integrity', desc: 'We maintain high standards of journalistic integrity' },
                { title: 'Community', desc: 'We believe in the power of connected communities' },
                { title: 'Excellence', desc: 'We strive for excellence in all our endeavors' },
                { title: 'Innovation', desc: 'We embrace innovation and continuous improvement' },
              ].map((value) => (
                <div key={value.title} className="p-6 bg-primary-50 rounded-lg">
                  <h3 className="font-bold text-neutral-900 mb-2">{value.title}</h3>
                  <p className="text-neutral-600 text-sm">{value.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
