import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from '../assets/img/logo/mainlogo.png'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  
  const menuLinks = [
    {
      id: "home",
      title: "হোম",
      route: "/",
    },
    {
      id: "school-info",
      title: "স্কুল তথ্য",
      submenu: [
        { title: "প্রতিষ্ঠান পরিচিতি", route: "/about-us" },
        { title: "স্বীকৃতি ও পাঠদান অনুমতি", route: "/pathdan-onumoti" },
        { title: "ব্যবস্থাপনা কমিটি", route: "/management" },
        { title: "শিক্ষার্থীর তথ্য", route: "/student-info" },
      ],
    },
    {
      id: "seat-plan",
      title: "সীট প্ল্যান",
      route: "/seat-plan",
    },
    {
      id: "routine",
      title: "রুটিন",
      route: "/routine",
    },
    {
      id: "admission",
      title: "ভর্তির তথ্য",
      submenu: [
        { title: "ভর্তির তথ্য", route: "/admission-info" },
        { title: "অনলাইন আবেদন", route: "/onlineadmission" },
        { title: "ডাউনলোড", route: "/admission-online-download" },
      ],
    },
    {
      id: "attendance",
      title: "উপস্থিত",
      route: "/attendance",
    },
    {
      id: "results",
      title: "ফলাফল",
      route: "/results",
    },
    {
      id: "gallery",
      title: "গ্যালারি",
      route: "/gallery",
    },
    {
      id: "mujib-corner",
      title: "মুজিব কর্ণার",
      submenu: [
        { title: "মুজিব কর্ণার", route: "/mujib-corner" },
        { title: "শেখ রাসেল কর্ণার", route: "/rasel-corner" },
        { title: "সুবর্ণ জয়ন্তী কর্নার", route: "/joyonti-corner" },
      ],
    },
    {
      id: "contact",
      title: "যোগাযোগ",
      route: "/contact",
    },
  ];

  // Check if a menu item is active
  const isMenuItemActive = (item) => {
    if (item.route === location.pathname) return true;
    
    if (item.submenu) {
      return item.submenu.some(subItem => subItem.route === location.pathname);
    }
    
    return false;
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click outside to close mobile menu
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLinkClick = (route) => {
    navigate(route);
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const MenuItem = ({ item, isMobileView }) => {
    const hasSubmenu = item.submenu?.length > 0;
    const isActive = activeDropdown === item.id;
    const isItemActive = isMenuItemActive(item);

    return (
      <div className="relative group">
        {hasSubmenu ? (
          <button
            onClick={() => setActiveDropdown(isActive ? null : item.id)}
            className={`
              relative flex items-center justify-between px-4 py-2 font-medium
              transition-all duration-500 ease-out overflow-hidden
              ${isMobileView ? 'w-full text-left' : ''}
              ${isItemActive 
                ? 'bg-[#002147] text-white font-bold' 
                : 'text-gray-800 hover:text-[#002147]'
              }
              group
            `}
          >
            {/* Solid background for active state */}
            {isItemActive && (
              <div className={`
                absolute inset-0 bg-[#002147]
                ${isMobileView ? 'rounded-lg' : 'rounded-t-lg'}
              `} />
            )}
            
            {/* Animated background for hover (non-active) */}
            {!isItemActive && (
              <div className={`
                absolute inset-0 bg-[#e6f0ff]
                transform transition-all duration-700 ease-out
                ${isMobileView 
                  ? 'translate-x-[-100%] group-hover:translate-x-0 rounded-lg' 
                  : 'translate-y-full group-hover:translate-y-0 rounded-t-lg'
                }
              `} />
            )}
            
            {/* Glowing border effect */}
            <div className={`
              absolute inset-0 border-2 border-transparent
              bg-gradient-to-r from-[#002147] to-[#004284] bg-clip-border
              transition-opacity duration-500
              ${isMobileView ? 'rounded-lg' : 'rounded-t-lg'}
              ${isItemActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
            `} style={{
              background: 'linear-gradient(90deg, transparent, rgba(0, 33, 71, 0.3), transparent)',
              backgroundSize: '200% 100%',
              animation: isMobileView ? '' : 'shimmer 2s infinite'
            }} />
            
            <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">
              {item.title}
            </span>
            
            {hasSubmenu && (
              <ChevronDown
                className={`
                  w-4 h-4 ml-2 relative z-10 transition-all duration-500 ease-out
                  ${isActive ? 'rotate-180' : 'rotate-0'}
                  ${isItemActive ? 'text-white' : 'group-hover:text-[#002147]'}
                `}
              />
            )}
          </button>
        ) : (
          <Link
            to={item.route}
            onClick={() => handleLinkClick(item.route)}
            className={`
              relative flex items-center justify-between px-4 py-2 font-medium
              transition-all duration-500 ease-out overflow-hidden
              ${isMobileView ? 'w-full text-left' : ''}
              ${isItemActive 
                ? 'bg-[#002147] text-white font-bold rounded-t-lg' 
                : 'text-gray-800 hover:text-[#002147]'
              }
              group
            `}
          >
            {/* Solid background for active state */}
            {isItemActive && (
              <div className={`
                absolute inset-0 bg-[#002147]
                ${isMobileView ? 'rounded-lg' : 'rounded-t-lg'}
              `} />
            )}
            
            {/* Animated background for hover (non-active) */}
            {!isItemActive && (
              <div className={`
                absolute inset-0 bg-[#e6f0ff]
                transform transition-all duration-700 ease-out
                ${isMobileView 
                  ? 'translate-x-[-100%] group-hover:translate-x-0 rounded-lg' 
                  : 'translate-y-full group-hover:translate-y-0 rounded-t-lg'
                }
              `} />
            )}
            
            {/* Glowing border effect */}
            <div className={`
              absolute inset-0 border-2 border-transparent
              bg-gradient-to-r from-[#002147] to-[#004284] bg-clip-border
              transition-opacity duration-500
              ${isMobileView ? 'rounded-lg' : 'rounded-t-lg'}
              ${isItemActive ? 'opacity-100 rounded-t-lg' : 'opacity-0 group-hover:opacity-100 rounded-t-lg'}
            `} style={{
              background: 'linear-gradient(90deg, transparent, rgba(0, 33, 71, 0.3), transparent)',
              backgroundSize: '200% 100%',
              animation: isMobileView ? '' : 'shimmer 2s infinite'
            }} />
            
            <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">
              {item.title}
            </span>
          </Link>
        )}
        
        {/* Desktop Dropdown */}
        {hasSubmenu && !isMobileView && (
          <div className={`
            absolute top-full left-0 mt-2 w-72 z-50
            transform transition-all duration-500 ease-out origin-top
            ${isActive 
              ? 'opacity-100 scale-100 translate-y-0' 
              : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'
            }
          `}>
            <div className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden backdrop-blur-lg">
              {/* Animated top border */}
              <div className="h-1 bg-gradient-to-r from-[#002147] via-[#004284] to-[#0066cc]" />
              
              {item.submenu.map((sub, idx) => {
                const isSubActive = location.pathname === sub.route;
                return (
                  <Link
                    key={idx}
                    to={sub.route}
                    onClick={() => handleLinkClick(sub.route)}
                    className={`
                      relative w-full px-6 py-4 text-left block transition-all duration-300 group/sub
                      border-b border-gray-100 last:border-b-0
                      hover:bg-[#f5f9ff]
                      ${isSubActive 
                        ? 'text-white bg-[#002147] font-medium' 
                        : 'text-gray-700 hover:text-[#002147]'
                      }
                    `}
                  >
                    <div className={`absolute left-0 top-0 h-full w-1 bg-[#002147] transform transition-transform duration-300 origin-top ${
                      isSubActive ? 'scale-y-100' : 'scale-y-0 group-hover/sub:scale-y-100'
                    }`} />
                    <span className="relative z-10 transition-transform duration-200 group-hover/sub:translate-x-2">
                      {sub.title}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
        
        {/* Mobile Dropdown */}
        {hasSubmenu && isMobileView && isActive && (
          <div className="mt-2 ml-4 space-y-2 overflow-hidden">
            {item.submenu.map((sub, idx) => {
              const isSubActive = location.pathname === sub.route;
              return (
                <Link
                  key={idx}
                  to={sub.route}
                  onClick={() => handleLinkClick(sub.route)}
                  className={`
                    relative block w-full px-4 py-3 text-left transition-all duration-300 group/sub
                    rounded-lg
                    ${isSubActive 
                      ? 'text-white bg-[#002147] font-medium' 
                      : 'text-gray-700 hover:text-[#002147] hover:bg-gray-100'
                    }
                  `}
                  style={{
                    animation: `slideInLeft 0.3s ease-out ${idx * 0.1}s both`
                  }}
                >
                  <div className={`absolute left-0 top-1/2 w-2 h-2 bg-white rounded-full transform -translate-y-1/2 transition-transform duration-200 ${
                    isSubActive ? 'scale-100' : 'scale-0 group-hover/sub:scale-100'
                  }`} />
                  <span className="ml-4 transition-transform duration-200 group-hover/sub:translate-x-2">
                    {sub.title}
                  </span>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        @keyframes slideInLeft {
          0% { 
            opacity: 0; 
            transform: translateX(-20px); 
          }
          100% { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .float-animation {
          animation: float 6s ease-in-out infinite;
        }
        
        .active-nav-indicator {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 6px;
          height: 6px;
          background: #002147;
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .active-nav-item .active-nav-indicator {
          opacity: 1;
        }
      `}</style>
      
      <nav className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out
        ${scrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200' 
          : 'bg-white'
        }
      `}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-4 group cursor-pointer">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#002147] to-[#004284] rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-lg" />
                <div className="bg-amber-50 p-1 rounded-full">
                  <img 
                    src={logo} 
                    alt="Logo" 
                    className="h-16 w-16 relative z-10 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
            </Link>
            
            {/* Menu Items */}
            <div className="flex items-center space-x-1">
              {menuLinks.map((item) => {
                const isActive = isMenuItemActive(item);
                return (
                  <div key={item.id} className={`relative ${isActive ? 'active-nav-item' : ''}`}>
                    <MenuItem item={item} isMobileView={false} />
                    <div className="active-nav-indicator" />
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Mobile Header */}
          <div className="lg:hidden flex items-center justify-between h-16">
            {/* Mobile Logo */}
            <Link to="/" className="flex items-center">
              <div className="bg-amber-50 p-1 rounded-full">
                <img 
                  src={logo} 
                  alt="Logo" 
                  className="h-10 w-10"
                />
              </div>
            </Link>
            
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="
                relative p-3 text-gray-700 hover:text-[#002147] 
                transition-all duration-300 group rounded-lg
                hover:bg-gray-100
              "
            >
              <div className="relative">
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 transform transition-transform duration-300 rotate-0 group-hover:rotate-90" />
                ) : (
                  <Menu className="w-6 h-6 transform transition-transform duration-300 group-hover:scale-110" />
                )}
              </div>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu Overlay */}
        <div className={`
          lg:hidden fixed inset-0 top-16 z-40 transition-all duration-500 ease-out
          ${isMobileMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
          }
        `}>
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={toggleMobileMenu} />
          
          {/* Mobile Menu */}
          <div 
            ref={mobileMenuRef}
            className={`
              relative bg-white
              h-full overflow-y-auto transition-transform duration-500 ease-out
              border-r border-gray-200 shadow-2xl max-w-sm
              ${isMobileMenuOpen 
                ? 'transform translate-x-0' 
                : 'transform -translate-x-full'
              }
            `}
          >
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#002147] via-[#004284] to-[#0066cc]" />
            </div>
            
            <div className="relative z-10 p-6 space-y-2">
              {menuLinks.map((item, index) => {
                const isActive = isMenuItemActive(item);
                return (
                  <div 
                    key={item.id}
                    className={`relative ${isActive ? 'active-nav-item' : ''}`}
                    style={{
                      animation: isMobileMenuOpen 
                        ? `slideInLeft 0.3s ease-out ${index * 0.1}s both` 
                        : 'none'
                    }}
                  >
                    <MenuItem item={item} isMobileView={true} />
                    <div className="active-nav-indicator" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
      
      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-20 lg:h-20" />
    </>
  );
};

export default Navbar;