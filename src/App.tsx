import { useState } from 'react';
import { AlertCircle, CheckCircle2, Mail, ArrowRight, CircuitBoard, Laptop, Gauge, Lightbulb, Menu, X } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Footer from './components/Footer';
import SocialProof from './components/SocialProof';
import CTA from './components/CTA';
import ai from './assets/ai.jpg'

const App = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter your email address');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    setSubmitted(true);
    setError('');
  };

  const features = [
    {
      icon: CircuitBoard,
      title: "AI Breakthroughs",
      description: "Stay updated on the latest developments in artificial intelligence research and applications."
    },
    {
      icon: Laptop,
      title: "Industry Insights",
      description: "Expert analysis of AI industry trends, market movements, and competitive landscape."
    },
    {
      icon: Gauge,
      title: "Implementation Strategies",
      description: "Practical guides on AI implementation, best practices, and case studies."
    },
    {
      icon: Lightbulb,
      title: "Future Predictions",
      description: "Forward-looking analysis of AI's impact on various sectors and emerging opportunities."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-800 to-indigo-900 text-white">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <CircuitBoard className="h-8 w-8" />
              <span className="text-xl font-bold">AIDigest</span>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="hover:text-purple-200 transition-colors">Features</a>
              <a href="#testimonials" className="hover:text-purple-200 transition-colors">Testimonials</a>
              <a href="#pricing" className="hover:text-purple-200 transition-colors">Pricing</a>
              <Button className="bg-white text-purple-900 hover:bg-purple-100">
                Get Started
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 space-y-4">
              <a href="#features" className="block hover:text-purple-200 transition-colors">Features</a>
              <a href="#testimonials" className="block hover:text-purple-200 transition-colors">Testimonials</a>
              <a href="#pricing" className="block hover:text-purple-200 transition-colors">Pricing</a>
              <Button className="w-full bg-white text-purple-900 hover:bg-purple-100">
                Get Started
              </Button>
            </div>
          )}
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-indigo-900 to-purple-800 text-white py-20">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2 space-y-8">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Master the Future of AI
                </h1>
                <p className="text-xl text-purple-100">
                  Get weekly insights on AI breakthroughs, industry trends, and implementation strategies 
                  delivered straight to your inbox.
                </p>
                {/* Subscription Form */}
                <div className="max-w-md">
                  {submitted ? (
                    <Alert className="bg-green-100 border-green-200">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      <AlertTitle className="text-green-800">Success!</AlertTitle>
                      <AlertDescription className="text-green-700">
                        Welcome aboard! Check your inbox to confirm your subscription.
                      </AlertDescription>
                    </Alert>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="flex flex-col sm:flex-row gap-2">
                        <div className="relative flex-grow">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                          <Input
                            type="email"
                            placeholder="Enter your email"
                            className="pl-10 w-full bg-white/90 border-0"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <Button type="submit" className="bg-purple-500 hover:bg-purple-600 text-white">
                          Subscribe <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                      {error && (
                        <Alert variant="destructive" className="bg-red-50 border-red-200">
                          <AlertCircle className="h-4 w-4" />
                          <AlertTitle>Error</AlertTitle>
                          <AlertDescription>{error}</AlertDescription>
                        </Alert>
                      )}
                    </form>
                  )}
                </div>
              </div>
              <div className="lg:w-1/2">
                <img 
                  src={ai}
                  alt="AI Technology"
                  className="w-full h-auto rounded-lg shadow-2xl object-cover md:max-w-md lg:max-w-lg xl:max-w-xl"
                />
              </div>
            </div>
          </div>
        </section>


        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose AIDigest?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Stay ahead of the curve with our comprehensive AI coverage and expert analysis.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-purple-100"
                >
                  <feature.icon className="h-12 w-12 text-purple-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SocialProof />
        <CTA />
      </main>

      <Footer />
    </div>
  );
};

export default App;