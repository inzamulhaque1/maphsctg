import React, { useState, useEffect } from "react";
import {
  Star,
  Calendar,
  Trophy,
  BookOpen,
  GraduationCap,
  Sparkles,
  X,
} from "lucide-react";
import logo from "../assets/img/logo/mainlogo.png";
const NoticeBar = () => {
  const [currentNotice, setCurrentNotice] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedNotice, setSelectedNotice] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const noticeLogo = "https://png.pngtree.com/png-vector/20190504/ourmid/pngtree-announcement-icon-design-png-image_1017472.jpg"

  const notices = [
    {
      icon: <Calendar className="w-5 h-5" />,
      text: "📅 আগামী ১৩ সেপ্টেম্বর আখেরী চাহার সোম্বা উপলক্ষে বিদ্যালয় বন্ধ",
      fullText:
        "**আগামী ১৩ সেপ্টেম্বর, বুধবার ২০২৩, আখেরী চাহার সোম্বা উপলক্ষে বিদ্যালয় বন্ধ থাকিবে।**\n\nনোটিশ নং: 02-02-18\n\nএতদ্বারা বিদ্যালয়ের সকল শিক্ষার্থীদের জানানো যাচ্ছে যে আগামী ১৩ সেপ্টেম্বর, বুধবার ২০২৩ আখেরী চাহার সোম্বা উপলক্ষে বিদ্যালয় বন্ধ থাকিবে।\n\n১৪ সেপ্টেম্বর, বৃহস্পতিবার হইতে বিদ্যালয় যথারীতি খোলা থাকিবে।\n\nসকল শিক্ষার্থী ও অভিভাবকগণ এই নোটিশটি সংরক্ষণ করুন।\n\nধন্যবাদ\nপ্রধান শিক্ষক",
    },
    {
      icon: <Star className="w-5 h-5" />,
      text: "🌟 আগামী ০৬ সেপ্টেম্বর শুভ জন্মাষ্টমী উপলক্ষে বিদ্যালয় বন্ধ",
      fullText:
        "**আগামী ০৬ সেপ্টেম্বর, বুধবার শুভ জন্মাষ্টমী উপলক্ষে বিদ্যালয় বন্ধ থাকিবে**\n\nনোটিশ নং: 02-02-18\n\nএতদ্বারা বিদ্যালয়ের সকল শিক্ষার্থীদের জানানো যাচ্ছে যে আগামী ০৬ সেপ্টেম্বর, বুধবার শুভ জন্মাষ্টমী উপলক্ষে বিদ্যালয় বন্ধ থাকিবে।\n\n০৭ সেপ্টেম্বর, বৃহস্পতিবার হইতে বিদ্যালয় যথারীতি খোলা থাকিবে।\n\nসকল শিক্ষার্থী ও অভিভাবকদের কাছে অনুরোধ এই তারিখটি মনে রাখার জন্য।\n\nশুভেচ্ছা সহ\nবিদ্যালয় প্রশাসন",
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      text: "📚 বার্ষিক পরীক্ষার সময়সূচী প্রকাশ - সকল শাখার জন্য",
      fullText:
        "**বার্ষিক পরীক্ষার সময়সূচী প্রকাশিত**\n\nনোটিশ নং: 03-01-25\n\nএতদ্বারা সকল শিক্ষার্থী ও অভিভাবকদের জানানো যাচ্ছে যে ২০২৩ সালের বার্ষিক পরীক্ষার সময়সূচী প্রকাশ করা হলো।\n\nপরীক্ষার তারিখ:\n• শুরু: ১৫ অক্টোবর ২০২৩\n• শেষ: ৩০ অক্টোবর ২০২৩\n• সময়: সকাল ৯টা থেকে দুপুর ১২টা\n\nগুরুত্বপূর্ণ নির্দেশনা:\n• পরীক্ষার ৩০ মিনিট আগে উপস্থিত থাকতে হবে\n• পরীক্ষার হল টিকেট বাধ্যতামূলক\n• সকল প্রয়োজনীয় স্টেশনারি সাথে আনতে হবে\n\nবিস্তারিত সময়সূচী বিদ্যালয়ের নোটিশ বোর্ডে দেখুন।",
    },
    {
      icon: <Trophy className="w-5 h-5" />,
      text: "🏆 আন্তঃবিদ্যালয় ক্রীড়া প্রতিযোগিতায় আমাদের বিজয়",
      fullText:
        "**আন্তঃবিদ্যালয় ক্রীড়া প্রতিযোগিতায় গৌরবজনক সাফল্য**\n\nনোটিশ নং: 04-01-12\n\nগর্বের সাথে জানানো যাচ্ছে যে আমাদের বিদ্যালয়ের শিক্ষার্থীরা জেলা পর্যায়ের আন্তঃবিদ্যালয় ক্রীড়া প্রতিযোগিতায় অসাধারণ সাফল্য অর্জন করেছে।\n\nঅর্জিত পুরস্কার:\n🥇 স্বর্ণ পদক - ফুটবল (ছেলেদের)\n🥈 রৌপ্য পদক - ব্যাডমিন্টন (মেয়েদের)\n🥉 ব্রোঞ্জ পদক - দৌড় প্রতিযোগিতা\n🏅 বিশেষ পুরস্কার - সেরা টিম স্পিরিট\n\nবিজয়ী শিক্ষার্থীদের অভিনন্দন!\n\nতাদের কঠোর পরিশ্রম ও নিবেদনের ফল এই সাফল্য। বিদ্যালয় কর্তৃপক্ষ ও সকল শিক্ষক-শিক্ষার্থী গর্বিত।",
    },
    {
      icon: <GraduationCap className="w-5 h-5" />,
      text: "🎓 নতুন শিক্ষাবর্ষে ভর্তির আবেদন গ্রহণ শুরু",
      fullText:
        "**২০২৪ শিক্ষাবর্ষে ভর্তির বিজ্ঞপ্তি**\n\nনোটিশ নং: 01-03-15\n\nআগামী শিক্ষাবর্ষ ২০২৪ এর জন্য ভর্তির আবেদন গ্রহণ শুরু হয়েছে।\n\nভর্তির তথ্য:\n• আবেদনের শেষ তারিখ: ৩০ নভেম্বর ২০২৩\n• ভর্তি পরীক্ষা: ১৫ ডিসেম্বর ২০২৩\n• ফলাফল প্রকাশ: ২২ ডিসেম্বর ২০২৩\n• ক্লাস শুরু: ১ জানুয়ারি ২০২৪\n\nপ্রয়োজনীয় কাগজপত্র:\n• জন্ম নিবন্ধন সার্টিফিকেট\n• পূর্ববর্তী ক্লাসের সনদপত্র\n• অভিভাবকের এনআইডি কপি\n• পাসপোর্ট সাইজ ছবি (৪ কপি)\n\nআবেদন ফর্ম বিদ্যালয় অফিস থেকে সংগ্রহ করুন অথবা অনলাইনে পূরণ করুন।",
    },
  ];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentNotice((prev) => (prev + 1) % notices.length);
        setIsTransitioning(false);
      }, 600);
    }, 4000);

    return () => clearInterval(interval);
  }, [notices.length, isPaused]);

  const openModal = (index) => {
    setSelectedNotice(index);
    setShowModal(true);
    setIsPaused(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setIsPaused(false);
  };

  return (
    <>
      <div className="relative shadow-lg overflow-hidden bg-white font-bangla2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          {/* Grid Layout: 1 column for logo, 3 columns for notice */}
          <div className="grid grid-cols-3 md:grid-cols-4 gap-2 items-center">
            {/* Logo Section - Takes 1 column */}
            <div className="col-span-1 flex justify-center sm:justify-start">
              <div className="group cursor-pointer">
                <a
                  href="/"
                  className="block transition-all duration-300 hover:opacity-80"
                >
                  <img
                    src={logo}
                    alt="School Logo"
                    className="w-24 h-24 rounded-full shadow-lg border-3 border-white transition-all duration-300 hover:shadow-xl hover:scale-105"
                  />
                </a>
              </div>
            </div>

            {/* Notice Section - Takes 3 columns */}
            <div className="col-span-2 md:col-span-3">
              <div className="relative group w-full">
                {/* Main notice container */}
                <div
                  className="flex items-center space-x-3 sm:space-x-4 px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-[#002147] to-[#003366] rounded-xl shadow-xl border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:from-[#001a33] hover:to-[#002147] cursor-pointer w-full"
                  onClick={() => openModal(currentNotice)}
                >
                  {/* Icon container */}
                  <div className="hidden md:flex">
                    <div className="p-2 sm:p-3 bg-white bg-opacity-15 rounded-lg text-white transition-all duration-300 hover:bg-opacity-25 hover:scale-110">
                      <div
                        className={`transition-all duration-600 ease-in-out ${
                          isTransitioning
                            ? "opacity-0 blur-sm transform translate-y-2 scale-90"
                            : "opacity-100 blur-0 transform translate-y-0 scale-100"
                        }`}
                      >
                        <img
                          src={noticeLogo}
                          className="h-10 w-10"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>

                  {/* Notice text container */}
                  <div className="flex-1 min-w-0 pr-4">
                    <div
                      className={`transition-all duration-600 ease-in-out ${
                        isTransitioning
                          ? "opacity-0 blur-sm transform translate-x-4"
                          : "opacity-100 blur-0 transform translate-x-0"
                      }`}
                    >
                      <p className="text-white font-bold text-sm sm:text-base lg:text-lg line-clamp-2 sm:line-clamp-1 leading-relaxed mb-1">
                        {notices[currentNotice].text}
                      </p>
                      <p className="text-blue-200 text-xs sm:text-sm font-medium opacity-80">
                        বিস্তারিত জানতে ক্লিক করুন →
                      </p>
                    </div>
                  </div>

                  {/* Pulse indicator */}
                  <div className="flex-shrink-0">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg"></div>
                  </div>
                </div>

                {/* Progress indicator */}
                <div className="flex justify-center mt-2 space-x-1">
                  {notices.map((_, index) => (
                    <div
                      key={index}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        index === currentNotice
                          ? "w-6 bg-[#002147]"
                          : "w-2 bg-gray-300 hover:bg-gray-400"
                      }`}
                      onClick={() => {
                        setCurrentNotice(index);
                        setIsTransitioning(false);
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 backdrop-blur-lg transition-all duration-300"
            style={{
              background: "rgba(0, 33, 71, 0.1)",
            }}
            onClick={closeModal}
          ></div>

          {/* Modal Container */}
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-full sm:max-w-2xl max-h-[90vh] overflow-hidden border border-gray-200 transform transition-all duration-300 scale-100">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#002147] to-[#003366] text-white p-4 sm:p-6 relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `
                                    radial-gradient(circle at 20% 20%, rgba(255,255,255,0.2) 2px, transparent 2px),
                                    radial-gradient(circle at 80% 80%, rgba(255,255,255,0.15) 1px, transparent 1px)
                                `,
                  backgroundSize: "30px 30px, 20px 20px",
                }}
              ></div>
              <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between">
                <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-0">
                  <div className="p-2 sm:p-3 bg-white bg-opacity-20 rounded-lg">
                    <img
                          src={noticeLogo}
                          className="h-10 w-10"
                          alt=""
                        />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold">
                      গুরুত্বপূর্ণ নোটিশ
                    </h3>
                    <p className="text-xs sm:text-sm opacity-90">
                      বাইরে ক্লিক অথবা X চাপুন বন্ধ করতে
                    </p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-all duration-200 hover:scale-110"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-4 sm:p-8 max-h-[60vh] sm:max-h-96 overflow-y-auto">
              <div className="prose prose-sm sm:prose-lg max-w-none">
                <div
                  className="whitespace-pre-line text-gray-800 leading-relaxed text-sm sm:text-base"
                  style={{ fontFamily: "SolaimanLipi, Arial, sans-serif" }}
                >
                  {notices[selectedNotice].fullText}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-gray-50 px-4 sm:px-8 py-3 sm:py-4 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
                <div className="text-xs sm:text-sm text-gray-600">
                  নোটিশ {selectedNotice + 1} এর {notices.length}
                </div>
                <button
                  onClick={closeModal}
                  className="w-full sm:w-auto px-4 sm:px-6 py-2 bg-gradient-to-r from-[#002147] to-[#003366] text-white font-semibold rounded-lg hover:from-[#001a33] hover:to-[#002147] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  বুঝেছি! ✓
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NoticeBar;
