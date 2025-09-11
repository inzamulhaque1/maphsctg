import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe, FaFacebookF, FaChevronRight, FaArrowRight } from 'react-icons/fa';

const Footer = () => {
  const [emailHover, setEmailHover] = useState(false);
  const [phoneHover, setPhoneHover] = useState(false);
  const [webHover, setWebHover] = useState(false);
  const [fbHover, setFbHover] = useState(false);

  const contactInfo = [
    { 
      icon: <FaMapMarkerAlt className="text-white" />, 
      text: "Mohamuni, Pahartali, Raozan, Chittagong.",
      label: "Address",
      isLink: false
    },
    { 
      icon: <FaPhone className="text-white" />, 
      text: "+880 1819 639 572",
      label: "Phone",
      isLink: true,
      href: "tel:+8801819639572",
      hover: phoneHover,
      setHover: setPhoneHover
    },
    { 
      icon: <FaEnvelope className="text-white" />, 
      text: "mahamuni_aphs@yahoo.com",
      label: "Email",
      isLink: true,
      href: "mailto:mahamuni_aphs@yahoo.com",
      hover: emailHover,
      setHover: setEmailHover
    },
    { 
      icon: <FaGlobe className="text-white" />, 
      text: "maphsctg.edu.bd",
      label: "Website",
      isLink: true,
      href: "http://maphsctg.edu.bd/",
      hover: webHover,
      setHover: setWebHover,
      external: true
    }
  ];

  const informationLinks = [
    { name: "Notice", url: "/notice" },
    { name: "About School", url: "/about-us" },
    { name: "Our Gallery", url: "/gallery" },
    { name: "Contact Us", url: "/contact" }
  ];

  const admissionLinks = [
    { name: "Apply Now", url: "/onlineadmission" },
    { name: "Admission Details", url: "/admission-info" },
    { name: "Result", url: "/results" },
    { name: "Attendance", url: "/attendance" },
    { name: "Seat Plan", url: "/seat-plan" }
  ];

  return (
    <footer className="bg-[#002147] text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-blue-900 opacity-10"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-blue-900 opacity-10"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* School Contact Section */}
          <div className="animate-fade-in-up">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <FaMapMarkerAlt className="mr-2" /> School Contact
            </h3>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start group"
                  onMouseEnter={() => item.setHover && item.setHover(true)}
                  onMouseLeave={() => item.setHover && item.setHover(false)}
                >
                  <div className="mt-1 mr-3 text-blue-300 group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-blue-200">{item.label}</p>
                    {item.isLink ? (
                      <a 
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className={`transition-all duration-300 ${item.hover ? 'text-white font-medium underline' : 'text-blue-100'}`}
                      >
                        {item.text}
                      </a>
                    ) : (
                      <p className="text-blue-100">{item.text}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Information Section */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <h3 className="text-xl font-bold mb-6">Information</h3>
            <ul className="space-y-3">
              {informationLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.url}
                    className="flex items-center text-blue-100 hover:text-white transition-all duration-300 group"
                  >
                    <FaChevronRight className="mr-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Admission Section */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <h3 className="text-xl font-bold mb-6">Admission</h3>
            <ul className="space-y-3">
              {admissionLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.url}
                    className="flex items-center text-blue-100 hover:text-white transition-all duration-300 group"
                  >
                    <FaChevronRight className="mr-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Facebook Page Section */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <h3 className="text-xl font-bold mb-6">Facebook Page</h3>
            <a 
              href="https://www.facebook.com/mohamuni/" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-blue-600 hover:bg-blue-500 rounded-lg p-4 transition-all duration-300 transform hover:-translate-y-1 group"
              onMouseEnter={() => setFbHover(true)}
              onMouseLeave={() => setFbHover(false)}
            >
              <FaFacebookF className={`text-2xl mr-3 transition-all duration-300 ${fbHover ? 'text-white' : 'text-blue-200'}`} />
              <span className={`font-medium transition-all duration-300 ${fbHover ? 'text-white' : 'text-blue-100'}`}>
                Visit Our Facebook
              </span>
              <FaArrowRight className={`ml-2 transition-all duration-300 ${fbHover ? 'opacity-100 translate-x-1' : 'opacity-0'}`} />
            </a>
            
            <div className="mt-6 p-4 bg-blue-900 bg-opacity-30 rounded-lg">
              <p className="text-sm text-blue-200 mb-2">Stay connected with us for the latest updates</p>
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
                <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-8 mt-8 border-t border-blue-800 text-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <p className="text-blue-300">
            &copy; {new Date().getFullYear()} All Rights Reserved 2025.
          </p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link to="/privacy" className="text-blue-400 hover:text-white transition-colors duration-300 text-sm">Privacy Policy</Link>
            <Link to="/terms" className="text-blue-400 hover:text-white transition-colors duration-300 text-sm">Terms of Service</Link>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </footer>
  );
};

export default Footer;