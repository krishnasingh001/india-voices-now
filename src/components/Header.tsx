
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Search, Bell } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-orange-600">NextPM.in</h1>
              <p className="text-xs text-gray-600">Democracy in Action</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#polls" className="text-gray-700 hover:text-orange-600 transition-colors">Polls</a>
            <a href="#news" className="text-gray-700 hover:text-orange-600 transition-colors">News</a>
            <a href="#leaders" className="text-gray-700 hover:text-orange-600 transition-colors">Leaders</a>
            <a href="#discussions" className="text-gray-700 hover:text-orange-600 transition-colors">Discussions</a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Bell className="h-4 w-4" />
            </Button>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white">
              Vote Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#polls" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Polls</a>
            <a href="#news" className="block px-3 py-2 text-gray-700 hover:text-orange-600">News</a>
            <a href="#leaders" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Leaders</a>
            <a href="#discussions" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Discussions</a>
            <div className="pt-2">
              <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                Vote Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
