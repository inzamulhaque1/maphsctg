import React, { useState, useEffect } from 'react';
import { Clock, Calendar, School, ChevronDown, ChevronUp } from 'lucide-react';

const SchoolTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getCurrentDayName = () => {
    return currentTime.toLocaleDateString('en-US', { weekday: 'long' });
  };

  const schoolHours = [
    { day: 'Monday', time: '9:30 AM - 4:30 PM' },
    { day: 'Tuesday', time: '9:30 AM - 4:30 PM' },
    { day: 'Wednesday', time: '9:30 AM - 4:30 PM' },
    { day: 'Thursday', time: '9:30 AM - 4:30 PM' },
    { day: 'Friday', time: '9:30 AM - 4:30 PM' },
    { day: 'Saturday', time: '9:30 AM - 1:30 PM' },
    { day: 'Sunday', time: 'Closed' }
  ];

  const isSchoolOpen = () => {
    const now = currentTime;
    const day = now.getDay();
    const hour = now.getHours();
    const minute = now.getMinutes();
    
    if (day === 0) return false; // Sunday
    
    if (day === 6) { // Saturday
      return (hour > 9 || (hour === 9 && minute >= 30)) && hour < 13 || (hour === 13 && minute <= 30);
    }
    
    // Weekdays
    return (hour > 9 || (hour === 9 && minute >= 30)) && (hour < 16 || (hour === 16 && minute <= 30));
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="bg-[#002147] rounded-lg shadow-lg overflow-hidden">
        
        {/* Main Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            
            {/* Date Section */}
            <div className="flex items-center gap-4">
              <div className="bg-white/10 p-3 rounded-lg">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div className="text-white">
                <p className="text-sm text-white/70 font-medium">Today</p>
                <p className="font-semibold text-lg">{formatDate(currentTime)}</p>
              </div>
            </div>

            {/* Time & Status Section */}
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center gap-2 mb-3">
                <div className={`h-2 w-2 rounded-full ${isSchoolOpen() ? 'bg-green-400' : 'bg-red-400'}`}></div>
                <span className="text-white text-sm font-medium">
                  {isSchoolOpen() ? 'Open' : 'Closed'}
                </span>
              </div>
              <div className="bg-white/10 rounded-lg p-4 min-w-[200px] relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10 transition-opacity duration-300 opacity-100"></div>
                <div className="flex items-center justify-center gap-3 relative z-10">
                  <Clock className="w-6 h-6 text-white animate-spin" style={{animationDuration: '60s'}} />
                  <span className="text-white text-2xl font-bold font-mono tracking-wider transition-all duration-300 scale-100">
                    {formatTime(currentTime)}
                  </span>
                </div>
              </div>
            </div>

            {/* School Hours Section */}
            <div className="flex items-center gap-4 md:justify-end">
              <div className="bg-white/10 p-3 rounded-lg">
                <School className="w-6 h-6 text-white" />
              </div>
              <div className="text-white">
                <p className="text-sm text-white/70 font-medium">School Hours</p>
                <p className="font-semibold text-lg">9:30 AM - 4:30 PM</p>
              </div>
            </div>
          </div>

          {/* Schedule Toggle */}
          <div className="mt-6 pt-6 border-t border-white/20">
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center justify-center w-full text-white/80 hover:text-white transition-colors py-2"
            >
              <span className="text-sm font-medium">
                {isExpanded ? 'Hide Schedule' : 'View Weekly Schedule'}
              </span>
              {isExpanded ? (
                <ChevronUp className="w-4 h-4 ml-2" />
              ) : (
                <ChevronDown className="w-4 h-4 ml-2" />
              )}
            </button>

            {/* Schedule Grid */}
            {isExpanded && (
              <div className="mt-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-3">
                  {schoolHours.map((dayInfo, index) => {
                    const isToday = dayInfo.day === getCurrentDayName();
                    return (
                      <div 
                        key={index}
                        className={`p-3 rounded-lg text-center border ${
                          isToday 
                            ? 'bg-white/15 border-white/40' 
                            : 'bg-white/5 border-white/20'
                        }`}
                      >
                        <p className="text-white font-medium text-sm mb-1">
                          {dayInfo.day}
                        </p>
                        <p className="text-white/80 text-xs">
                          {dayInfo.time}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolTime;