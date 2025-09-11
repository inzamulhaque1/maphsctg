import { useState, useEffect } from 'react';
import { FaUserGraduate, FaChalkboardTeacher, FaUsers, FaSchool } from 'react-icons/fa';

const StatsCard = ({ icon, title, value, color }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const duration = 2000; // Animation duration in ms
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Use easing function for smoother animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(easeOutQuart * value);
      
      setCount(currentValue);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [value]);

  return (
    <div className="group relative overflow-hidden bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg p-6 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-gray-100">
      {/* Animated background decoration */}
      <div className={`absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500 ${color}`}></div>
      
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className={`p-4 rounded-full ${color} text-white mb-4 transition-transform duration-500 group-hover:scale-110`}>
          {icon}
        </div>
        
        <h3 className="text-lg font-semibold text-gray-700 mb-1">{title}</h3>
        
        <div className="text-4xl font-bold text-gray-800 mt-2">
          {count.toLocaleString()}
        </div>
        
        {/* Progress bar animation */}
        <div className="w-full h-1 bg-gray-200 rounded-full mt-4 overflow-hidden">
          <div 
            className={`h-full ${color} rounded-full transition-all duration-1000 ease-out`}
            style={{ width: `${(count / value) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    {
      title: 'Students',
      value: 760,
      icon: <FaUserGraduate className="w-8 h-8" />,
      color: 'bg-[#002147]'
    },
    {
      title: 'Teachers',
      value: 14,
      icon: <FaChalkboardTeacher className="w-8 h-8" />,
      color: 'bg-[#002147]'
    },
    {
      title: 'Staff',
      value: 20,
      icon: <FaUsers className="w-8 h-8" />,
      color: 'bg-[#002147]'
    },
    {
      title: 'Classrooms',
      value: 5,
      icon: <FaSchool className="w-8 h-8" />,
      color: 'bg-[#002147]'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4">
      <div className="max-w-6xl mx-auto">

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <StatsCard {...stat} />
            </div>
          ))}
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

export default StatsSection;