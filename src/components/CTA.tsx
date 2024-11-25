import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="bg-gradient-to-r from-purple-800 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Stay Ahead in AI?
        </h2>
        <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join our community of AI enthusiasts and get weekly insights delivered to your inbox.
        </p>
        <Button className="bg-white text-purple-900 hover:bg-purple-100 text-lg px-8 py-6">
            Subscribe Now <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        </div>
    </section>
  )
}

export default CTA