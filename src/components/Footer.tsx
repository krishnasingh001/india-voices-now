
import { Button } from "@/components/ui/button";
import { Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-orange-400 mb-4">NextPM.in</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Empowering Indian democracy through digital participation. 
              Your voice, your vote, your India.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                <Youtube className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                Twitter
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                Facebook
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                Instagram
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#polls" className="hover:text-orange-400 transition-colors">Live Polls</a></li>
              <li><a href="#news" className="hover:text-orange-400 transition-colors">Political News</a></li>
              <li><a href="#leaders" className="hover:text-orange-400 transition-colors">Leader Reviews</a></li>
              <li><a href="#discussions" className="hover:text-orange-400 transition-colors">Discussions</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/about" className="hover:text-orange-400 transition-colors">About Us</a></li>
              <li><a href="/contact" className="hover:text-orange-400 transition-colors">Contact</a></li>
              <li><a href="/terms" className="hover:text-orange-400 transition-colors">Terms of Service</a></li>
              <li><a href="/privacy" className="hover:text-orange-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 NextPM.in. All rights reserved. Building democracy, one vote at a time.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-sm text-gray-400">Made with ❤️ for India</span>
              <div className="flex space-x-2">
                <div className="w-4 h-3 bg-orange-500 rounded-sm"></div>
                <div className="w-4 h-3 bg-white rounded-sm"></div>
                <div className="w-4 h-3 bg-green-500 rounded-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
