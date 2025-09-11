/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import {
  Home,
  Building2,
  Layout,
  Calendar,
  UserPlus,
  Users,
  Trophy,
  Camera,
  User,
  Phone,
  ChevronDown,
  Menu,
  X,
  Download,
  FileText,
  Globe,
  Info,
} from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FcManager } from "react-icons/fc";
import logo from "../assets/img/logo/mainlogo.png";

const MenuBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const mobileMenuRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  const menuLinks = [
    {
      id: "home",
      title: "হোম",
      icon: <Home className="w-4 h-4" />,
      route: "/",
    },
    {
      id: "school-info",
      title: "স্কুল তথ্য",
      icon: <Building2 className="w-4 h-4" />,
      submenu: [
        {
          title: "প্রতিষ্ঠান পরিচিতি",
          route: "/about-us",
          icon: <FileText className="w-4 h-4" />,
        },
        {
          title: "স্বীকৃতি ও পাঠদান অনুমতি",
          route: "/pathdan-onumoti",
          icon: <Globe className="w-4 h-4" />,
        },
        {
          title: "ব্যবস্থাপনা কমিটি",
          route: "/management",
          icon: <FcManager className="w-4 h-4" />,
        },
        {
          title: "শিক্ষার্থীর তথ্য",
          route: "/student-info",
          icon: <Info className="w-4 h-4" />,
        },
      ],
    },
    {
      id: "seat-plan",
      title: "সীট প্ল্যান",
      icon: <Layout className="w-4 h-4" />,
      route: "/seat-plan",
    },
    {
      id: "routine",
      title: "রুটিন",
      icon: <Calendar className="w-4 h-4" />,
      route: "/routine",
    },
    {
      id: "admission",
      title: "ভর্তির তথ্য",
      icon: <UserPlus className="w-4 h-4" />,
      submenu: [
        {
          title: "ভর্তির তথ্য",
          route: "/admission-info",
          icon: <FileText className="w-4 h-4" />,
        },
        {
          title: "অনলাইন আবেদন",
          route: "/onlineadmission",
          icon: <Globe className="w-4 h-4" />,
        },
        {
          title: "ডাউনলোড",
          route: "/admission-online-download",
          icon: <Download className="w-4 h-4" />,
        },
      ],
    },
    {
      id: "attendance",
      title: "উপস্থিত",
      icon: <Users className="w-4 h-4" />,
      route: "/attendance",
    },
    {
      id: "results",
      title: "ফলাফল",
      icon: <Trophy className="w-4 h-4" />,
      route: "/results",
    },
    {
      id: "gallery",
      title: "গ্যালারি",
      icon: <Camera className="w-4 h-4" />,
      route: "/gallery",
    },
    {
      id: "mujib-corner",
      title: "মুজিব কর্ণার",
      icon: <User className="w-4 h-4" />,
      submenu: [
        {
          title: "মুজিব কর্ণার",
          route: "/mujib-corner",
          icon: <FileText className="w-4 h-4" />,
        },
        {
          title: "শেখ রাসেল কর্ণার",
          route: "/rasel-corner",
          icon: <Globe className="w-4 h-4" />,
        },
        {
          title: "সুবর্ণ জয়ন্তী কর্নার",
          route: "/joyonti-corner",
          icon: <Download className="w-4 h-4" />,
        },
      ],
    },

    {
      id: "contact",
      title: "যোগাযোগ",
      icon: <Phone className="w-4 h-4" />,
      route: "/contact",
    },
  ];

  // Responsive check
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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

  const MenuItem = ({ item, isMobileView }) => {
    const hasSubmenu = item.submenu?.length > 0;

    return (
      <div className="relative font-bangla1">
        <button
          onClick={() =>
            hasSubmenu
              ? setActiveDropdown(activeDropdown === item.id ? null : item.id)
              : handleLinkClick(item.route)
          }
          className={`flex items-center justify-between w-full px-5 py-3 rounded-lg font-semibold transition-all duration-300 ${
            location.pathname === item.route
              ? "bg-white/20 text-white"
              : "text-white"
          } ${
            isMobileView ? "text-white hover:bg-white/10" : "hover:bg-white/10"
          }`}
        >
          <div className="flex items-center space-x-2">
            <span>{item.title}</span>
          </div>
          {hasSubmenu && (
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                activeDropdown === item.id ? "rotate-180" : "rotate-0"
              }`}
            />
          )}
        </button>

        {hasSubmenu && activeDropdown === item.id && (
          <div
            className={`${
              isMobileView ? "pl-4" : "absolute top-full left-0 mt-1 w-64"
            } bg-[#0f2136] rounded-lg shadow-lg overflow-hidden`}
          >
            {item.submenu.map((sub, idx) => (
              <button
                key={idx}
                onClick={() => handleLinkClick(sub.route)}
                className={`flex items-center space-x-2 w-full px-4 py-2 text-white hover:bg-white/10 rounded-lg m-1 ${
                  location.pathname === sub.route
                    ? "bg-white/20 text-white"
                    : ""
                }`}
              >
                {sub.icon}
                <span>{sub.title}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <nav className="sticky top-0 bg-[#002147] z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop */}
        <div className="hidden md:flex h-16 items-center space-x-2">
          {menuLinks.map((item) => (
            <MenuItem key={item.id} item={item} isMobileView={false} />
          ))}
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center justify-between h-16">
          <div className="flex items-center space-x-2 text-white font-bold text-lg">
            maphsctg
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-3 rounded-lg"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed top-10 left-0 right-0 bottom-0 bg-[#0a2b50] z-50 overflow-y-auto transition-transform duration-300 p-5"
        >
          <div className="md:hidden flex items-center justify-between h-16">
            <div className="flex items-center space-x-2 text-white font-bold text-lg">
              maphsctg
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-3 rounded-lg"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {menuLinks.map((item) => (
            <MenuItem key={item.id} item={item} isMobileView={true} />
          ))}
        </div>
      )}
    </nav>
  );
};

export default MenuBar;
