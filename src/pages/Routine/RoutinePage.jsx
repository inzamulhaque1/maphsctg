"use client";

import {
  FaCalendarAlt,
  FaChevronLeft,
  FaDownload,
  FaEye,
  FaFilePdf,
  FaClock,
  FaGraduationCap,
  FaSearch,
  FaTimes,
  FaExpand,
  FaCompress,
} from "react-icons/fa";
import { useState } from "react";

import routineClass6 from "../../assets/pdf/routine.pdf";
import routineClass7 from "../../assets/pdf/routine.pdf";
import routineClass8 from "../../assets/pdf/routine.pdf";
import routineClass9Science from "../../assets/pdf/routine.pdf";
import routineClass9Humanities from "../../assets/pdf/routine.pdf";
import routineClass10Science from "../../assets/pdf/routine.pdf";
import routineClass10Humanities from "../../assets/pdf/routine.pdf";
import examRoutine from "../../assets/pdf/routine.pdf";

const RoutinePage = () => {
  const [selectedClass, setSelectedClass] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const routineFiles = [
    {
      id: 1,
      title: "ষষ্ঠ শ্রেণির রুটিন",
      class: "6th",
      fileName: "routine-class6.pdf",
      pdfPath: routineClass6,
      uploadDate: "১৫ জানুয়ারি, ২০২৪",
      size: "২.৩ MB",
      type: "class",
      description: "সাপ্তাহিক ক্লাস রুটিন",
    },
    {
      id: 2,
      title: "সপ্তম শ্রেণির রুটিন",
      class: "7th",
      fileName: "routine-class7.pdf",
      pdfPath: routineClass7,
      uploadDate: "১৫ জানুয়ারি, ২০২৪",
      size: "২.১ MB",
      type: "class",
      description: "সাপ্তাহিক ক্লাস রুটিন",
    },
    {
      id: 3,
      title: "অষ্টম শ্রেণির রুটিন",
      class: "8th",
      fileName: "routine-class8.pdf",
      pdfPath: routineClass8,
      uploadDate: "১৫ জানুয়ারি, ২০২৪",
      size: "২.৫ MB",
      type: "class",
      description: "সাপ্তাহিক ক্লাস রুটিন",
    },
    {
      id: 4,
      title: "নবম শ্রেণির রুটিন (বিজ্ঞান)",
      class: "9th",
      fileName: "routine-class9-science.pdf",
      pdfPath: routineClass9Science,
      uploadDate: "১৫ জানুয়ারি, ২০২৪",
      size: "২.৭ MB",
      type: "class",
      description: "বিজ্ঞান বিভাগের সাপ্তাহিক রুটিন",
    },
    {
      id: 5,
      title: "নবম শ্রেণির রুটিন (মানবিক)",
      class: "9th",
      fileName: "routine-class9-humanities.pdf",
      pdfPath: routineClass9Humanities,
      uploadDate: "১৫ জানুয়ারি, ২০২৪",
      size: "২.৪ MB",
      type: "class",
      description: "মানবিক বিভাগের সাপ্তাহিক রুটিন",
    },
    {
      id: 6,
      title: "দশম শ্রেণির রুটিন (বিজ্ঞান)",
      class: "10th",
      fileName: "routine-class10-science.pdf",
      pdfPath: routineClass10Science,
      uploadDate: "১৫ জানুয়ারি, ২০২৪",
      size: "২.৮ MB",
      type: "class",
      description: "বিজ্ঞান বিভাগের সাপ্তাহিক রুটিন",
    },
    {
      id: 7,
      title: "দশম শ্রেণির রুটিন (মানবিক)",
      class: "10th",
      fileName: "routine-class10-humanities.pdf",
      pdfPath: routineClass10Humanities,
      uploadDate: "১৫ জানুয়ারি, ২০২৪",
      size: "২.৬ MB",
      type: "class",
      description: "মানবিক বিভাগের সাপ্তাহিক রুটিন",
    },
    {
      id: 8,
      title: "পরীক্ষার রুটিন - ২০২৪",
      class: "exam",
      fileName: "exam-routine.pdf",
      pdfPath: examRoutine,
      uploadDate: "১০ ফেব্রুয়ারি, ২০২৪",
      size: "১.৯ MB",
      type: "exam",
      description: "বার্ষিক পরীক্ষার সময়সূচী",
    },
  ];

  const filteredRoutines = routineFiles.filter((routine) => {
    const matchesClass =
      selectedClass === "all" || routine.class === selectedClass;
    const matchesSearch =
      routine.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      routine.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesClass && matchesSearch;
  });

  const handleViewPdf = (routine) => {
    setSelectedPdf(routine);
  };

  const handleDownload = (fileName, pdfPath) => {
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Enhanced Header with better responsive design */}
      <div className="bg-gradient-to-br from-[#002147] via-[#003366] to-[#004488] text-white py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-5"></div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center md:items-center justify-center gap-6">
            {/* Logo Left */}
            <div className="flex justify-center md:justify-start">
              <img
                src="https://maphsctg.edu.bd/logo/1739418675logo1.png"
                alt="Mahamuni Anglo-Pali High School Logo"
                className="w-20 h-20 md:w-36 md:h-36 bg-white rounded-full p-2 shadow-lg"
              />
            </div>

            {/* Texts Right */}
            <div className="text-center md:text-right">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
                ক্লাস রুটিন
              </h1>
              <p className="text-lg md:text-xl opacity-90 font-medium mb-2">
                মহামুনি এংলো-পালি উচ্চ বিদ্যালয়
              </p>
              <p className="text-base md:text-lg opacity-80">২০২৪ শিক্ষাবর্ষ</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 md:py-8">
        {/* Enhanced Back Button */}
        <button
          onClick={() => window.history.back()}
          className="flex items-center space-x-3 text-[#002147] hover:bg-[#002147] hover:text-white px-6 md:px-8 py-3 md:py-4 rounded-xl border-2 border-[#002147] mb-6 md:mb-8 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          <FaChevronLeft className="text-lg" />
          <span className="text-sm md:text-base">Go Back</span>
        </button>

        {/* Enhanced PDF Viewer Modal with fullscreen support */}
        {selectedPdf && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-2 md:p-4">
            <div
              className={`bg-white rounded-xl md:rounded-2xl shadow-2xl flex flex-col transition-all duration-300 ${
                isFullscreen ? "w-full h-full" : "w-full max-w-6xl h-5/6"
              }`}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 md:p-6 border-b space-y-3 md:space-y-0">
                <div>
                  <h3 className="text-lg md:text-2xl font-bold text-[#002147] mb-1">
                    {selectedPdf.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {selectedPdf.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  <button
                    onClick={toggleFullscreen}
                    className="flex items-center space-x-2 bg-blue-600 text-white px-3 md:px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 text-sm md:text-base"
                  >
                    {isFullscreen ? <FaCompress /> : <FaExpand />}
                    <span className="hidden md:inline">
                      {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
                    </span>
                  </button>
                  <button
                    onClick={() =>
                      handleDownload(selectedPdf.fileName, selectedPdf.pdfPath)
                    }
                    className="flex items-center space-x-2 bg-green-600 text-white px-3 md:px-4 py-2 rounded-lg hover:bg-green-700 transition-all duration-300 text-sm md:text-base"
                  >
                    <FaDownload />
                    <span className="hidden md:inline">Download</span>
                  </button>
                  <button
                    onClick={() => setSelectedPdf(null)}
                    className="bg-red-600 text-white px-3 md:px-4 py-2 rounded-lg hover:bg-red-700 transition-all duration-300"
                  >
                    <FaTimes />
                  </button>
                </div>
              </div>
              <div className="flex-1 p-4 md:p-6">
                <iframe
                  src={selectedPdf.pdfPath}
                  width="100%"
                  height="100%"
                  className="w-full h-full rounded-lg border-2 border-gray-200"
                  title={selectedPdf.title}
                />
              </div>
            </div>
          </div>
        )}

        {/* Enhanced Search and Filter Section */}
        <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6 mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-[#002147] mb-4 md:mb-6 flex items-center">
            <FaGraduationCap className="mr-3" />
            শ্রেণি নির্বাচন ও অনুসন্ধান
          </h2>

          {/* Search Bar */}
          <div className="relative mb-4 md:mb-6">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="রুটিন খুঁজুন..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 md:py-4 border-2 border-gray-200 rounded-xl focus:border-[#002147] focus:outline-none transition-all duration-300 text-sm md:text-base"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <FaTimes />
              </button>
            )}
          </div>

          {/* Filter Tabs with better mobile layout */}
          <div className="grid grid-cols-2 md:flex md:flex-wrap gap-2 md:gap-3">
            {[
              { key: "all", label: "সকল শ্রেণি" },
              { key: "6th", label: "ষষ্ঠ শ্রেণি" },
              { key: "7th", label: "সপ্তম শ্রেণি" },
              { key: "8th", label: "অষ্টম শ্রেণি" },
              { key: "9th", label: "নবম শ্রেণি" },
              { key: "10th", label: "দশম শ্রেণি" },
              { key: "exam", label: "পরীক্ষার রুটিন" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setSelectedClass(tab.key)}
                className={`px-3 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl font-semibold transition-all duration-300 text-sm md:text-base ${
                  selectedClass === tab.key
                    ? "bg-[#002147] text-white shadow-lg transform scale-105"
                    : "bg-gray-100 text-[#002147] hover:bg-gray-200 hover:scale-105"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced Statistics Cards with better mobile layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
          <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6 text-center transform hover:scale-105 transition-all duration-300">
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <FaFilePdf className="text-2xl md:text-3xl text-[#002147]" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-[#002147] mb-2">
              {filteredRoutines.length}
            </h3>
            <p className="text-gray-600 font-medium text-sm md:text-base">
              মোট রুটিন ফাইল
            </p>
          </div>
          <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6 text-center transform hover:scale-105 transition-all duration-300">
            <div className="bg-gradient-to-br from-green-100 to-green-200 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <FaClock className="text-2xl md:text-3xl text-green-600" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-[#002147] mb-2">
              ২০২৪
            </h3>
            <p className="text-gray-600 font-medium text-sm md:text-base">
              শিক্ষাবর্ষ
            </p>
          </div>
          <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6 text-center transform hover:scale-105 transition-all duration-300">
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <FaGraduationCap className="text-2xl md:text-3xl text-purple-600" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-[#002147] mb-2">
              ৫
            </h3>
            <p className="text-gray-600 font-medium text-sm md:text-base">
              শ্রেণি
            </p>
          </div>
        </div>

        {/* Enhanced Routine Files Grid with better mobile responsiveness */}
        <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#002147] mb-6 md:mb-8 text-center">
            রুটিন ফাইলসমূহ
          </h2>

          {filteredRoutines.length === 0 ? (
            <div className="text-center py-8 md:py-12">
              <FaFilePdf className="text-4xl md:text-6xl text-gray-300 mx-auto mb-4" />
              <p className="text-lg md:text-xl text-gray-500">
                {searchTerm
                  ? "অনুসন্ধানের জন্য কোন রুটিন পাওয়া যায়নি"
                  : "এই শ্রেণির জন্য কোন রুটিন পাওয়া যায়নি"}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {filteredRoutines.map((routine) => (
                <div
                  key={routine.id}
                  className="border-2 border-gray-200 rounded-xl p-4 md:p-6 hover:border-[#002147] hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-start mb-4">
                    <div className="bg-gradient-to-br from-red-100 to-red-200 w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                      <FaFilePdf className="text-lg md:text-2xl text-red-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base md:text-lg font-bold text-[#002147] mb-1 line-clamp-2">
                        {routine.title}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-500 mb-1">
                        {routine.size}
                      </p>
                      <p className="text-xs md:text-sm text-gray-600">
                        {routine.description}
                      </p>
                    </div>
                  </div>

                  <div className="mb-4 space-y-1">
                    <p className="text-xs md:text-sm text-gray-600">
                      <strong>আপলোড:</strong> {routine.uploadDate}
                    </p>
                    <p className="text-xs md:text-sm text-gray-600 truncate">
                      <strong>ফাইল:</strong> {routine.fileName}
                    </p>
                  </div>

                  <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-3">
                    <button
                      onClick={() => handleViewPdf(routine)}
                      className="flex-1 flex items-center justify-center space-x-2 bg-[#002147] text-white py-2 md:py-3 px-3 md:px-4 rounded-lg hover:bg-blue-800 transition-all duration-300 font-semibold text-sm md:text-base"
                    >
                      <FaEye />
                      <span>দেখুন</span>
                    </button>
                    <button
                      onClick={() =>
                        handleDownload(routine.fileName, routine.pdfPath)
                      }
                      className="flex-1 flex items-center justify-center space-x-2 bg-green-600 text-white py-2 md:py-3 px-3 md:px-4 rounded-lg hover:bg-green-700 transition-all duration-300 font-semibold text-sm md:text-base"
                    >
                      <FaDownload />
                      <span>ডাউনলোড</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Enhanced Instructions with better mobile layout */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-[#002147] rounded-lg p-4 md:p-6 mt-6 md:mt-8">
          <h3 className="text-lg md:text-xl font-bold text-[#002147] mb-3 flex items-center">
            <FaCalendarAlt className="mr-2" />
            নির্দেশনা:
          </h3>
          <ul className="text-gray-700 space-y-2 text-sm md:text-base">
            <li>• রুটিন দেখতে "দেখুন" বাটনে ক্লিক করুন</li>
            <li>• রুটিন ডাউনলোড করতে "ডাউনলোড" বাটনে ক্লিক করুন</li>
            <li>• শ্রেণি অনুযায়ী রুটিন দেখতে উপরের ট্যাব ব্যবহার করুন</li>
            <li>• নির্দিষ্ট রুটিন খুঁজতে সার্চ বক্স ব্যবহার করুন</li>
            <li>• ফুলস্ক্রিন মোডে দেখতে ফুলস্ক্রিন বাটন ব্যবহার করুন</li>
            <li>• যেকোনো সমস্যার জন্য স্কুল অফিসে যোগাযোগ করুন</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RoutinePage;
