import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, GraduationCap, Users, ArrowRight } from 'lucide-react';

const TeacherSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);
  const sliderRef = useRef(null);
  
  const teachers = [
    {
      name: "Anjan Barua",
      position: "Headmaster",
      image: "https://maphsctg.edu.bd/images/teacher/1555836925.jpg",
      qualifications: "B.s.c B.ed, M,ed"
    },
    {
      name: "Nasrin Akther",
      position: "Asst. Headmaster",
      image: "https://maphsctg.edu.bd/images/teacher/1526123827.jpg",
      qualifications: "B.com, M,ed, M.com"
    },
    {
      name: "Shibasish Ray",
      position: "Asst. Teacher",
      image: "https://maphsctg.edu.bd/images/teacher/1526124026.JPG",
      qualifications: "B.A kabathithr"
    },
    {
      name: "Md. Abdus Sabur",
      position: "Asst. Teacher",
      image: "https://maphsctg.edu.bd/images/teacher/1526124041.JPG",
      qualifications: "Kamil"
    },
    {
      name: "Samurika Paul",
      position: "Asst. Teacher",
      image: "https://maphsctg.edu.bd/images/teacher/1526124079.jpg",
      qualifications: "B.A. B,ed Agri-Diploma"
    },
    {
      name: "Md. Masuk Chy.",
      position: "Asst. Teacher",
      image: "https://maphsctg.edu.bd/images/teacher/1526124138.jpg",
      qualifications: "B.s.c B,ed B,P,ed"
    },
    {
      name: "Pradip Battacharje",
      position: "Asst. Teacher",
      image: "https://maphsctg.edu.bd/images/teacher/1526124145.jpg",
      qualifications: "M.A in ELL, M.A in ELT, B, Ed."
    },
    {
      name: "Panna Chowdhury",
      position: "Asst. Teacher",
      image: "https://maphsctg.edu.bd/images/teacher/1526124224.JPG",
      qualifications: "B.A (Librarian)"
    },
    {
      name: "Ashim Kumar Chy.",
      position: "0ffice Asst. Teacher",
      image: "https://maphsctg.edu.bd/images/teacher/1526124233.jpg",
      qualifications: "B.A"
    },
    {
      name: "Mosammat Morjina Kader",
      position: "Assistant Teacher",
      image: "https://maphsctg.edu.bd/images/teacher/1693898120.jpg",
      qualifications: ""
    },
    {
      name: "Shanta Barua",
      position: "Assistant Teacher",
      image: "https://maphsctg.edu.bd/images/teacher/1693898233.jpg",
      qualifications: ""
    },
    {
      name: "Nahida Nasrin Lipa",
      position: "Lab Assistant",
      image: "https://maphsctg.edu.bd/images/teacher/1693898282.jpg",
      qualifications: ""
    },
    {
      name: "Subir Barua",
      position: "Office Assistant",
      image: "https://maphsctg.edu.bd/images/teacher/1693898497.jpg",
      qualifications: ""
    },
    {
      name: "Robi Paul",
      position: "Assistant Teacher",
      image: "https://maphsctg.edu.bd/images/teacher/1739946408.jpg",
      qualifications: "MSC"
    },
    {
      name: "Md. Abdus Subhan",
      position: "Assistant Teacher",
      image: "https://maphsctg.edu.bd/images/teacher/1739946620.jpg",
      qualifications: "M.A"
    },
    {
      name: "Md. Shamim Reza",
      position: "Assistant Teacher",
      image: "https://maphsctg.edu.bd/images/teacher/1739946767.jpg",
      qualifications: "M.A"
    },
    {
      name: "Doli Akther",
      position: "Assistant Teacher",
      image: "https://maphsctg.edu.bd/images/teacher/1739947919.jpg",
      qualifications: "BSC"
    },
    {
      name: "Imo Barua",
      position: "Assistant Teacher(Buddha Religion)",
      image: "https://maphsctg.edu.bd/images/teacher/1739947618.jpg",
      qualifications: "M.A"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Set visible count based on screen size
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    
    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    
    // Auto-slide functionality
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = Math.max(0, teachers.length - visibleCount);
        return prevIndex >= maxIndex ? 0 : prevIndex + 1;
      });
    }, 5000);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', updateVisibleCount);
    };
  }, [visibleCount, teachers.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = Math.max(0, teachers.length - visibleCount);
      return prevIndex <= 0 ? maxIndex : prevIndex - 1;
    });
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = Math.max(0, teachers.length - visibleCount);
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const totalSlides = Math.max(1, teachers.length - visibleCount + 1);

  return (
    <div className=" py-8 sm:py-12 md:py-16 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-indigo-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-br from-purple-200/20 to-pink-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className={`text-center mb-8 sm:mb-10 lg:mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative inline-block mb-3 sm:mb-4">
            <div className="relative  px-4 sm:px-5 py-2 ">
              <div className="flex items-center justify-center gap-2">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-[#002147]" />
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-[#002147] to-[#003366] bg-clip-text text-transparent font-bangla1">
                  আমাদের শিক্ষকবৃন্দ
                </h1>
              </div>
            </div>
          </div>
          
          <p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed px-2 sm:px-4">
            মহামুনি এংলো-পালি উচ্চ বিদ্যালয়ের গর্বিত ও অভিজ্ঞ শিক্ষকমণ্ডলী যারা শিক্ষার্থীদের ভবিষ্যৎ গড়তে নিরলস কাজ করে যাচ্ছেন
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative mb-6 md:m-5 sm:mb-8 md:mb-10">
          <div className="overflow-hidden px-2">
            <div 
              className="flex transition-transform duration-500 ease-in-out md:m-5"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
              ref={sliderRef}
            >
              {teachers.map((teacher, index) => (
                <div 
                  key={index} 
                  className={`flex-shrink-0 px-2 ${
                    visibleCount === 1 ? 'w-full' : 
                    visibleCount === 2 ? 'w-1/2' : 
                    'w-1/3'
                  }`}
                >
                  <div className="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg border border-gray-100 overflow-hidden hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    {/* Content */}
                    <div className="relative flex flex-col h-full">
                      {/* Image Section */}
                      <div className="relative h-60 sm:h-72 md:h-80 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 z-10"></div>
                        <img 
                          src={teacher.image} 
                          alt={teacher.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(teacher.name)}&background=002147&color=fff&size=200`;
                          }}
                        />
                      </div>
                      
                      {/* Info Section */}
                      <div className="p-3 sm:p-4 flex flex-col flex-grow relative">
                        {/* Position Badge */}
                        <div className="absolute -top-4 right-0 bg-[#002147] text-white text-xs font-medium px-2 py-1 sm:px-3 sm:py-2 rounded-l-full z-20">
                          {teacher.position}
                        </div>
                        <h3 className="font-bold text-[#002147] text-base sm:text-lg md:text-xl mb-1 sm:mb-2 leading-tight pr-12 sm:pr-16">
                          {teacher.name}
                        </h3>
                        
                        <div className="flex items-start gap-1 sm:gap-2 text-xs sm:text-sm text-gray-600 mt-auto">
                          <GraduationCap className="w-3 h-3 sm:w-4 sm:h-4 mt-0.5 flex-shrink-0" />
                          <span className="line-clamp-2">
                            {teacher.qualifications || 'যোগ্যতা তথ্য নেই'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={goToPrevious}
            className="absolute top-1/2 -left-2 sm:-left-3 md:-left-14 transform -translate-y-1/2 bg-[#002147] backdrop-blur-sm p-1 sm:p-2 rounded-l-full shadow-md hover:bg-[#2b0441] transition-colors duration-300 z-10"
            aria-label="Previous teacher"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute top-1/2 -right-2 sm:-right-3 md:-right-14 transform -translate-y-1/2 bg-[#002147] backdrop-blur-sm p-1 sm:p-2 rounded-r-full shadow-md hover:bg-[#2b0441] transition-colors duration-300 z-10"
            aria-label="Next teacher"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-1 sm:space-x-2 mb-6 sm:mb-8">
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <button
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`w-2 h-2 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                currentIndex === slideIndex 
                  ? 'bg-[#002147] w-4 sm:w-6' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${slideIndex + 1}`}
            />
          ))}
        </div>

        {/* View All Teachers Button */}
        <div className={`text-center transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <button className="group inline-flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-[#002147] via-[#003366] to-[#004080] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-xs sm:text-sm shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
            <Users className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>সকল শিক্ষক দেখুন</span>
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default TeacherSlider;