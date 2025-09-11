import React, { useState, useEffect } from 'react';
import { Search, Filter, GraduationCap, Sparkles, BookOpen, Award, Users, Heart } from 'lucide-react';

const TeachersPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterPosition, setFilterPosition] = useState('all');
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

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

  const filteredTeachers = teachers.filter(teacher => {
    const matchesSearch = teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          teacher.position.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPosition = filterPosition === 'all' || teacher.position === filterPosition;
    return matchesSearch && matchesPosition;
  });

  const positions = ['all', 'Headmaster', 'Asst. Headmaster', 'Asst. Teacher'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-indigo-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-br from-purple-200/20 to-pink-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-6 sm:py-8 md:py-10 lg:py-12">
        {/* Header Section */}
        <div className={`text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative inline-block mb-3 sm:mb-4 md:mb-5">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-30 animate-pulse"></div>
            <div className="relative bg-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg shadow-lg border border-gray-100">
              <div className="flex items-center justify-center gap-2 sm:gap-3">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#002147]" />
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#002147] to-[#003366] bg-clip-text text-transparent">
                  আমাদের শিক্ষকবৃন্দ
                </h1>
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-amber-500 animate-pulse" />
              </div>
            </div>
          </div>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-2">
            মহামুনি এংলো-পালি উচ্চ বিদ্যালয়ের গর্বিত ও অভিজ্ঞ শিক্ষকমণ্ডলী যারা শিক্ষার্থীদের ভবিষ্যৎ গড়তে নিরলস কাজ করে যাচ্ছেন
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className={`mb-6 sm:mb-8 md:mb-10 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 shadow-lg border border-gray-100">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                <input
                  type="text"
                  placeholder="শিক্ষকের নাম বা পদবী অনুসন্ধান করুন..."
                  className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#002147] focus:border-transparent text-sm sm:text-base"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                <select
                  className="pl-9 sm:pl-10 pr-8 py-2.5 sm:py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#002147] focus:border-transparent appearance-none text-sm sm:text-base w-full sm:w-auto"
                  value={filterPosition}
                  onChange={(e) => setFilterPosition(e.target.value)}
                >
                  {positions.map(position => (
                    <option key={position} value={position}>
                      {position === 'all' ? 'সকল পদবী' : position}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Teachers Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-8 sm:mb-10 md:mb-12 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {filteredTeachers.map((teacher, index) => (
            <div 
              key={index} 
              className="group transform transition-all duration-500 hover:-translate-y-2"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                {/* Decorative Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#002147] to-[#003366] p-0.5 rounded-xl sm:rounded-2xl">
                  <div className="bg-white h-full w-full rounded-xl sm:rounded-2xl"></div>
                </div>
                
                {/* Content */}
                <div className="relative flex flex-col h-full">
                  {/* Image Section */}
                  <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 z-10"></div>
                    <img 
                      src={teacher.image} 
                      alt={teacher.name}
                      className="max-h-full max-w-full object-contain p-2"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-full bg-gradient-to-br from-[#002147] to-[#003366]  items-center justify-center hidden absolute inset-0">
                      <GraduationCap className="w-10 h-10 sm:w-12 sm:h-12 text-white/80" />
                    </div>
                  </div>
                  
                  {/* Info Section */}
                  <div className="p-3 sm:p-4 md:p-5 flex flex-col flex-grow relative">
                    {/* Position Badge */}
                    <div className="absolute top-1 right-0 bg-[#002147] text-white text-xs font-medium px-2 py-1 sm:px-3 sm:py-1.5 rounded-l-full z-20">
                      {teacher.position}
                    </div>
                    <h3 className="font-bold text-[#002147] text-base sm:text-lg md:text-xl mb-1.5 sm:mb-2 leading-tight pr-16 sm:pr-20">
                      {teacher.name}
                    </h3>
                    
                    <div className="flex items-start gap-2 text-sm text-gray-600 mb-2">
                      <BookOpen className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span className="line-clamp-2">{teacher.qualifications || 'যোগ্যতা তথ্য নেই'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredTeachers.length === 0 && (
          <div className="text-center py-8 sm:py-10 md:py-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg border border-gray-100">
              <Search className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-bold text-gray-700 mb-2">কোন শিক্ষক পাওয়া যায়নি</h3>
              <p className="text-gray-600 text-sm sm:text-base">আপনার অনুসন্ধানের সাথে মিলিয়ে কোন শিক্ষক খুঁজে পাওয়া যায়নি। অনুগ্রহ করে অন্য কোন শব্দ দিয়ে চেষ্টা করুন।</p>
            </div>
          </div>
        )}

        {/* Statistics Section */}
        <div className={`bg-gradient-to-r from-[#002147] to-[#003366] rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 text-white mb-8 sm:mb-10 md:mb-12 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            <div className="flex flex-col items-center text-center p-3 sm:p-4">
              <div className="bg-white/10 p-2 sm:p-3 rounded-full mb-2 sm:mb-3">
                <Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
              </div>
              <h3 className="font-bold text-xl sm:text-2xl md:text-3xl mb-1">{teachers.length}+</h3>
              <p className="text-white/80 text-xs sm:text-sm">অভিজ্ঞ শিক্ষক</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-3 sm:p-4">
              <div className="bg-white/10 p-2 sm:p-3 rounded-full mb-2 sm:mb-3">
                <Award className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
              </div>
              <h3 className="font-bold text-xl sm:text-2xl md:text-3xl mb-1">১৫+</h3>
              <p className="text-white/80 text-xs sm:text-sm">বর্ষের অভিজ্ঞতা</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-3 sm:p-4">
              <div className="bg-white/10 p-2 sm:p-3 rounded-full mb-2 sm:mb-3">
                <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
              </div>
              <h3 className="font-bold text-xl sm:text-2xl md:text-3xl mb-1">১০০%</h3>
              <p className="text-white/80 text-xs sm:text-sm">যোগ্যতা</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-3 sm:p-4">
              <div className="bg-white/10 p-2 sm:p-3 rounded-full mb-2 sm:mb-3">
                <Heart className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
              </div>
              <h3 className="font-bold text-xl sm:text-2xl md:text-3xl mb-1">১০০%</h3>
              <p className="text-white/80 text-xs sm:text-sm">নিষ্ঠা</p>
            </div>
          </div>
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

export default TeachersPage;