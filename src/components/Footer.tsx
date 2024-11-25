
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-purple-300">About</a></li>
                <li><a href="#" className="hover:text-purple-300">Careers</a></li>
                <li><a href="#" className="hover:text-purple-300">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-purple-300">Blog</a></li>
                <li><a href="#" className="hover:text-purple-300">Newsletter</a></li>
                <li><a href="#" className="hover:text-purple-300">Events</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-purple-300">Privacy</a></li>
                <li><a href="#" className="hover:text-purple-300">Terms</a></li>
                <li><a href="#" className="hover:text-purple-300">Cookies</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-purple-300">Twitter</a></li>
                <li><a href="#" className="hover:text-purple-300">LinkedIn</a></li>
                <li><a href="#" className="hover:text-purple-300">GitHub</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p>© 2024 AIDigest. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer