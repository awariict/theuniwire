export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-neutral-900 mb-6">Privacy Policy</h1>
        
        <div className="prose max-w-none space-y-6 text-neutral-600">
          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">1. Introduction</h2>
            <p>
              TheUniWire ("we", "us", "our") operates the website. This page informs you of our policies regarding 
              the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">2. Information Collection and Use</h2>
            <p>
              We collect several different types of information for various purposes to provide and improve our Service to you.
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Personal Data: Email address, first name and last name, phone number, address, state, province, ZIP/postal code, city</li>
              <li>Usage Data: Browser type, browser version, pages visited, time and date of visit, time spent on pages</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">3. Use of Data</h2>
            <p>TheUniWire uses the collected data for various purposes:</p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>To provide and maintain the Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To allow you to participate in interactive features of our Service</li>
              <li>To provide customer care and support</li>
              <li>To gather analysis or valuable information so that we can improve our Service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">4. Security of Data</h2>
            <p>
              The security of your data is important to us, but remember that no method of transmission over the Internet 
              or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect 
              your Personal Data, we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at privacy@theuniwire.ng
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
