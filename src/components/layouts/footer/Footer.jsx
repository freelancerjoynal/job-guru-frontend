const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top section */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-2">JOBS PORTAL</h1>
          <h2 className="text-xl text-gray-300 mb-4">ONLINE JOBS PORTAL</h2>
          <p className="text-gray-400 max-w-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et consequat elit. Proin molestie eros sed urna auctor lobortis. Integer eget sedeirstyte arcu. Pellentesque sedeirstyte pellentesque nisi. Sit amet aliquam mi pellentesque fringilla. Ut porta augue a libero pretium laoreet. Suspendisse sit amet massa accumsan, pulvinar augue id, tristique tortor.
          </p>
        </div>

        {/* Links sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Career Services</a></li>
              <li>
                <span className="text-gray-400">CV Writing:</span>
                <ul className="ml-4 mt-1 space-y-1">
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Career Resources</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Company Listings</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Success Stories</a></li>
                </ul>
              </li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Create Account</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Post a job</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Contact Sales</a></li>
            </ul>
          </div>

          {/* Jobs By Industry */}
          <div>
            <h3 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">Jobs By Industry</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Information Technology jobs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Recruitment/Employment Firms jobs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Education/Training jobs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Manufacturing jobs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Call Center jobs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">N.G.O./Social Services jobs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">BPD jobs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Textiles/Garments jobs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Telecommunications/PJP jobs</a></li>
            </ul>
          </div>

          {/* Latest Articles */}
          <div>
            <h3 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">Latest Articles</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Sed fermentum at lectus nec porta.
                </a>
                <p className="text-sm text-gray-500 mt-1">jun 28, 2016</p>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Sed fermentum at lectus nec porta.
                </a>
                <p className="text-sm text-gray-500 mt-1">jun 28, 2016</p>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Sed fermentum at lectus nec porta.
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter or additional content can go here */}
          <div>
            <h3 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">Stay Updated</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest job postings.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-gray-800 text-white px-4 py-2 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Jobs Portal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;