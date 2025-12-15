import { Link } from "react-router-dom";
import { ArrowLeft, Mail } from "lucide-react";

const Support = () => {
  return (
    <div className="min-h-screen bg-kammi-dark text-kammi-gold font-serif transition-theme">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <Link 
          to="/" 
          className="inline-flex items-center opacity-70 hover:opacity-100 transition-opacity duration-300 mb-12"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-medium italic mb-8">
          Support
        </h1>
        
        <div className="space-y-6 opacity-80">
          <p>
            Need help with Kammi? We're here for you.
          </p>
          
          <div className="mt-8 p-8 border border-kammi-gold/30 rounded-lg">
            <h2 className="text-2xl font-medium mb-4">Get in Touch</h2>
            <p className="mb-6">
              For questions, feedback, or support requests, please email us:
            </p>
            <a 
              href="mailto:support@kammi.app"
              className="inline-flex items-center text-xl hover:opacity-70 transition-opacity duration-300"
            >
              <Mail className="mr-3 h-5 w-5" />
              support@kammi.app
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
