
import { FaLink, FaCalendarAlt, FaCalendarCheck, FaChevronRight, FaExternalLinkAlt, FaGlobe, FaBook, FaGraduationCap, FaChalkboardTeacher, FaUserFriends, FaLandmark, FaCalendarDay, FaClock, FaHistory } from 'react-icons/fa';

const InfoSection = () => {
  // Useful Links data
  const usefulLinks = [
    { name: 'Education Board Result', url: '#', icon: <FaGraduationCap /> },
    { name: 'Directorate of Secondary and Higher Education', url: '#', icon: <FaChalkboardTeacher /> },
    { name: 'Chittagong Education Board', url: '#', icon: <FaLandmark /> },
    { name: 'Directorate of Primary Education', url: '#', icon: <FaBook /> },
    { name: 'National Academy for Primary Education', url: '#', icon: <FaUserFriends /> },
    { name: 'Ministry of Education', url: '#', icon: <FaGlobe /> },
    { name: 'National Curriculum & Textbook Board', url: '#', icon: <FaBook /> },
  ];

  // Holidays data
  const holidays = [
    { date: 'Jan 1', description: 'New Year Day' },
    { date: 'Feb 21', description: 'International Mother Language Day' },
    { date: 'Mar 26', description: 'Independence Day' },
    { date: 'Apr 14', description: 'Bengali New Year' },
    { date: 'May 1', description: 'Labor Day' },
    { date: 'Aug 15', description: 'National Mourning Day' },
    { date: 'Dec 16', description: 'Victory Day' },
    { date: 'Dec 25', description: 'Christmas Day' },
  ];

  // Events data - split into two parts
  const upcomingEvents = [
    { name: 'Annual Science Fair', date: 'May 15, 2025' },
    { name: 'Cultural Festival', date: 'Jun 20, 2025' },
    { name: 'Sports Week', date: 'Jul 10-15, 2025' },
  ];

  const recentEvents = [
    { name: 'Parents-Teacher Meeting', date: 'Aug 5, 2025' },
    { name: 'Art Exhibition', date: 'Sep 12, 2025' },
    { name: 'Annual Function', date: 'Oct 30, 2025' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">Resources & Information</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Explore useful links, upcoming holidays, and exciting events
          </p>
        </div>

        {/* Main Container */}
        <div className="flex flex-col gap-6 sm:gap-8">
          {/* Top Row - Useful Links and Holidays */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Useful Links Section - Top Left */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 animate-fade-in-up">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="p-3 bg-[#002147] rounded-full">
                  <FaLink className="text-white text-xl" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 ml-3">Useful Links</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {usefulLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url}
                    className="group flex items-center p-3 sm:p-4 bg-white rounded-lg hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-[#002147]"
                  >
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-gray-100 rounded-lg text-[#002147] group-hover:bg-[#002147] group-hover:text-white transition-colors duration-300">
                      {link.icon}
                    </div>
                    <div className="ml-3 flex-1 min-w-0">
                      <h4 className="font-medium text-gray-700 group-hover:text-[#002147] transition-colors duration-300 text-sm sm:text-base truncate">
                        {link.name}
                      </h4>
                    </div>
                    <div className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <FaExternalLinkAlt className="text-[#002147] text-sm" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Holidays Section - Top Right */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="p-3 bg-[#002147] rounded-full">
                  <FaCalendarAlt className="text-white text-xl" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 ml-3">Holidays 2025</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {holidays.map((holiday, index) => (
                  <div key={index} className="flex items-start p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-[#002147]">
                    <div className="flex-shrink-0 w-12 h-12 flex flex-col items-center justify-center bg-[#002147] rounded-lg text-white font-bold text-xs">
                      {holiday.date}
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-700 font-medium text-sm">{holiday.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Row - Events (Full Width with 2 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            {/* Upcoming Events Section - Bottom Left */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="p-3 bg-[#002147] rounded-full">
                  <FaClock className="text-white text-xl" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 ml-3">Upcoming Events</h3>
              </div>
              
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div 
                    key={index}
                    className="relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 border border-gray-200"
                  >
                    <div className="absolute inset-0 bg-[#002147] opacity-90"></div>
                    <div className="relative p-4 text-white">
                      <div className="flex justify-between items-start">
                        <h4 className="font-bold text-base sm:text-lg">{event.name}</h4>
                        <div className="bg-white bg-opacity-20 rounded-full p-1">
                          <FaChevronRight className="text-white text-sm" />
                        </div>
                      </div>
                      <p className="mt-2 text-sm opacity-90">{event.date}</p>
                      <div className="absolute bottom-0 right-0 w-12 h-12 bg-white opacity-10 rounded-tl-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Events Section - Bottom Right */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="p-3 bg-[#002147] rounded-full">
                  <FaHistory className="text-white text-xl" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 ml-3">Recent Events</h3>
              </div>
              
              <div className="space-y-4">
                {recentEvents.map((event, index) => (
                  <div 
                    key={index}
                    className="relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 border border-gray-200"
                  >
                    <div className="absolute inset-0 bg-[#002147] opacity-90"></div>
                    <div className="relative p-4 text-white">
                      <div className="flex justify-between items-start">
                        <h4 className="font-bold text-base sm:text-lg">{event.name}</h4>
                        <div className="bg-white bg-opacity-20 rounded-full p-1">
                          <FaChevronRight className="text-white text-sm" />
                        </div>
                      </div>
                      <p className="mt-2 text-sm opacity-90">{event.date}</p>
                      <div className="absolute bottom-0 right-0 w-12 h-12 bg-white opacity-10 rounded-tl-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
        }
      `}</style>
    </div>
  );
};

export default InfoSection;