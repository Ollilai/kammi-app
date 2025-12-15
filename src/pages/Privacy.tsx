import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Privacy = () => {
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
          Privacy Policy
        </h1>
        
        <div className="space-y-6 opacity-80">
          <p>
            Kammi is designed with your privacy as a priority.
          </p>
          
          <h2 className="text-2xl font-medium mt-8 mb-4">Your Data Stays Local</h2>
          <p>
            All your writing is stored locally on your computer. We do not collect, 
            transmit, or store any of your content on external servers.
          </p>
          
          <h2 className="text-2xl font-medium mt-8 mb-4">No Tracking</h2>
          <p>
            Kammi does not include any analytics, tracking pixels, or third-party 
            services that monitor your usage.
          </p>
          
          <h2 className="text-2xl font-medium mt-8 mb-4">No Account Required</h2>
          <p>
            You don't need to create an account or provide any personal information 
            to use Kammi. Just download and start writing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
