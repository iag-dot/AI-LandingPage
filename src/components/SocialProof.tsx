import googleLogo from '../assets/google-logo.png';
import microsoftLogo from '../assets/microsoft-logo.png';
import amazonLogo from '../assets/amazon-logo.svg';
import metaLogo from '../assets/meta-logo.svg';

const SocialProof = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600">
            Join thousands of professionals from leading tech companies.
          </p>
        </div>

        {/* Logo Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center mb-16">
          <img src={googleLogo} alt="Google" className="opacity-50 hover:opacity-100 transition-opacity w-32" />
          <img src={microsoftLogo} alt="Microsoft" className="opacity-50 hover:opacity-100 transition-opacity w-32" />
          <img src={amazonLogo} alt="Amazon" className="opacity-50 hover:opacity-100 transition-opacity w-32" />
          <img src={metaLogo} alt="Meta" className="opacity-50 hover:opacity-100 transition-opacity w-32" />
        </div>

        {/* Testimonial Section */}
        <div className="text-center space-y-8">
          <h3 className="text-2xl font-semibold text-gray-800">What Our Users Are Saying</h3>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
              <p className="text-gray-700 italic">
                "This platform has transformed the way we approach AI insights. The updates are always on point, and I feel more prepared to lead my team."
              </p>
              <h4 className="mt-4 font-bold text-gray-900">– Sarah J., Tech Lead at Google</h4>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
              <p className="text-gray-700 italic">
                "An invaluable resource. It’s like having a tech mentor in my inbox every week."
              </p>
              <h4 className="mt-4 font-bold text-gray-900">– Alex P., Software Engineer at Microsoft</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
