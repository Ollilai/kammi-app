import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen theme-midnight font-garamond transition-theme">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <Link
          to="/"
          className="inline-flex items-center opacity-70 hover:opacity-100 transition-opacity duration-300 mb-12"
        >
          <ArrowLeft className="mr-2 h-5 w-5" aria-hidden="true" />
          Back to home
        </Link>

        <h1 className="text-4xl md:text-5xl font-medium italic mb-8">
          Privacy Policy
        </h1>

        <p className="opacity-60 mb-8">Last updated: December 2025</p>

        <div className="space-y-8 opacity-80">
          <section>
            <h2 className="text-2xl font-medium mb-4">Overview</h2>
            <p>
              Kammi is a local desktop writing application. We are committed to protecting
              your privacy and being transparent about our practices. This policy explains
              what data we collect (very little) and how we handle it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4">Your Writing Stays Local</h2>
            <p>
              All your writing is stored locally on your computer in the ~/Documents/Kammi
              folder. We do not collect, transmit, or have access to any of your content.
              Your words belong to you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4">No Tracking or Analytics</h2>
            <p>
              Kammi does not include any analytics, tracking pixels, telemetry, or third-party
              services that monitor your usage. We don't know how often you write, what you
              write, or when you use the app.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4">No Account Required</h2>
            <p>
              You don't need to create an account or provide any personal information
              to use Kammi. Just download and start writing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4">Free and Open Source</h2>
            <p>
              Kammi is free and open source. No purchase or account is required.
              Just download the app from GitHub and start writing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4">Your Rights (GDPR)</h2>
            <p className="mb-4">
              Under the General Data Protection Regulation (GDPR) and similar laws,
              you have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access any personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Request data portability</li>
            </ul>
            <p className="mt-4">
              Since we collect minimal data, exercising these rights is straightforward.
              Contact us and we'll respond within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4">Contact</h2>
            <p>
              For any privacy-related questions or to exercise your rights, please email:{" "}
              <a
                href="mailto:kammi.tuki@gmail.com"
                className="underline hover:opacity-70 transition-opacity"
              >
                kammi.tuki@gmail.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4">Changes to This Policy</h2>
            <p>
              If we make changes to this privacy policy, we will update the "Last updated"
              date at the top of this page.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
