import React, { useState } from "react";
import {
  Bell,
  X,
  Calendar,
  Star,
  BookOpen,
  Trophy,
  GraduationCap,
  ChevronRight,
} from "lucide-react";

const Notice = () => {
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  
  const notices = [
    {
      icon: <Calendar className="w-5 h-5 md:w-6 md:h-6" />,
      text: "📅 আগামী ১৩ সেপ্টেম্বর আখেরী চাহার সোম্বা উপলক্ষে বিদ্যালয় বন্ধ",
      category: "Holiday",
      date: "Sep 13, 2023",
      priority: "high",
      fullText:
        "**আগামী ১৩ সেপ্টেম্বর, বুধবার ২০২৩, আখেরী চাহার সোম্বা উপলক্ষে বিদ্যালয় বন্ধ থাকিবে।**\n\nনোটিশ নং: 02-02-18\n\nএতদ্বারা বিদ্যালয়ের সকল শিক্ষার্থীদের জানানো যাচ্ছে যে আগামী ১৩ সেপ্টেম্বর, বুধবার ২০২৩ আখেরী চাহার সোম্বা উপলক্ষে বিদ্যালয় বন্ধ থাকিবে।\n\n১৪ সেপ্টেম্বর, বৃহস্পতিবার হইতে বিদ্যালয় যথারীতি খোলা থাকিবে।\n\nসকল শিক্ষার্থী ও অভিভাবকগণ এই নোটিশটি সংরক্ষণ করুন।\n\nধন্যবাদ\nপ্রধান শিক্ষক",
    },
    {
      icon: <Star className="w-5 h-5 md:w-6 md:h-6" />,
      text: "🌟 আগামী ০৬ সেপ্টেম্বর শুভ জন্মাষ্টমী উপলক্ষে বিদ্যালয় বন্ধ",
      category: "Holiday",
      date: "Sep 6, 2023",
      priority: "high",
      fullText:
        "**আগামী ০৬ সেপ্টেম্বর, বুধবার শুভ জন্মাষ্টমী উপলক্ষে বিদ্যালয় বন্ধ থাকিবে**\n\nনোটিশ নং: 02-02-18\n\nএতদ্বারা বিদ্যালয়ের সকল শিক্ষার্থীদের জানানো যাচ্ছে যে আগামী ০৬ সেপ্টেম্বর, বুধবার শুভ জন্মাষ্টমী উপলক্ষে বিদ্যালয় বন্ধ থাকিবে।\n\n০৭ সেপ্টেম্বর, বৃহস্পতিবার হইতে বিদ্যালয় যথারীতি খোলা থাকিবে।\n\nসকল শিক্ষার্থী ও অভিভাবকদের কাছে অনুরোধ এই তারিখটি মনে রাখার জন্য。\n\nশুভেচ্ছা সহ\nবিদ্যালয় প্রশাসন",
    },
    {
      icon: <BookOpen className="w-5 h-5 md:w-6 md:h-6" />,
      text: "📚 বার্ষিক পরীক্ষার সময়সূচী প্রকাশ - সকল শাখার জন্য",
      category: "Exam",
      date: "Oct 15, 2023",
      priority: "medium",
      fullText:
        "**বার্ষিক পরীক্ষার সময়সূচী প্রকাশিত**\n\nনোটিশ নং: 03-01-25\n\nএতদ্বারা সকল শিক্ষার্থী ও অভিভাবকদের জানানো যাচ্ছে যে ২০২৩ সালের বার্ষিক পরীক্ষার সময়সূচী প্রকাশ করা হলো।\n\nপরীক্ষার তারিখ:\n• শুরু: ১৫ অক্টোবর ২০২৩\n• শেষ: ৩০ অক্টোবর ২০২৩\n• সময়: সকাল ৯টা থেকে দুপুর ১২টা\n\nগুরুত্বপূর্ণ নির্দেশনা:\n• পরীক্ষার ৩০ মিনিট আগে উপস্থিত থাকতে হবে\n• পরীক্ষার হল টিকেট বাধ্যতামূলক\n• সকল প্রয়োজনীয় স্টেশনারি সাথে আনতে হবে\n\nবিস্তারিত সময়সূচী বিদ্যালয়ের নোটিশ বোর্ডে দেখুন。",
    },
    {
      icon: <Trophy className="w-5 h-5 md:w-6 md:h-6" />,
      text: "🏆 আন্তঃবিদ্যালয় ক্রীড়া প্রতিযোগিতায় আমাদের বিজয়",
      category: "Sports",
      date: "Sep 1, 2023",
      priority: "low",
      fullText:
        "**আন্তঃবিদ্যালয় ক্রীড়া প্রতিযোগিতায় গৌরবজনক সাফল্য**\n\nনোটিশ নং: 04-01-12\n\nগর্বের সাথে জানানো যাচ্ছে যে আমাদের বিদ্যালয়ের শিক্ষার্থীরা জেলা পর্যায়ের আন্তঃবিদ্যালয় ক্রীড়া প্রতিযোগিতায় অসাধারণ সাফল্য অর্জন করেছে।\n\nঅর্জিত পুরস্কার:\n🥇 স্বর্ণ পদক - ফুটবল (ছেলেদের)\n🥈 রৌপ্য পদক - ব্যাডমিন্টন (মেয়েদের)\n🥉 ব্রোঞ্জ পদক - দৌড় প্রতিযোগিতা\n🏅 বিশেষ পুরস্কার - সেরা টিম স্পিরিট\n\nবিজয়ী শিক্ষার্থীদের অভিনন্দন!\n\nতাদের কঠোর পরিশ্রম ও নিবেদনের ফল এই সাফল্য। বিদ্যালয় কর্তৃপক্ষ ও সকল শিক্ষক-শিক্ষার্থী গর্বিত。",
    },
    {
      icon: <GraduationCap className="w-5 h-5 md:w-6 md:h-6" />,
      text: "🎓 নতুন শিক্ষাবর্ষে ভর্তির আবেদন গ্রহণ শুরু",
      category: "Admission",
      date: "Nov 30, 2023",
      priority: "medium",
      fullText:
        "**২০২৪ শিক্ষাবর্ষে ভর্তির বিজ্ঞপ্তি**\n\nনোটিশ নং: 01-03-15\n\nআগামী শিক্ষাবর্ষ ২০২৪ এর জন্য ভর্তির আবেদন গ্রহণ শুরু হয়েছে।\n\nভর্তির তথ্য:\n• আবেদনের শেষ তারিখ: ৩০ নভেম্বর ২০২৩\n• ভর্তি পরীক্ষা: ১৫ ডিসেম্বর ২০২৩\n• ফলাফল প্রকাশ: ২২ ডিসেম্বর ২০২৩\n• ক্লাস শুরু: ১ জানুয়ারি ২০২৪\n\nপ্রয়োজনীয় কাগজপত্র:\n• জন্ম নিবন্ধন সার্টিফিকেট\n• পূর্ববর্তী ক্লাসের সনদপত্র\n• অভিভাবকের এনআইডি কপি\n• পাসপোর্ট সাইজ ছবি (৪ কপি)\n\nআবেদন ফর্ম বিদ্যালয় অফিস থেকে সংগ্রহ করুন অথবা অনলাইনে পূরণ করুন。",
    },
  ];

  const categories = ["All", "Holiday", "Exam", "Sports", "Admission"];

  const filteredNotices =
    activeCategory === "All"
      ? notices
      : notices.filter((notice) => notice.category === activeCategory);

  const formatText = (text) => {
    return text.split("\n").map((line, index) => {
      if (line.startsWith("**") && line.endsWith("**")) {
        return (
          <h3
            key={index}
            className="text-[#002147] font-bold text-lg md:text-xl mb-3 md:mb-4 leading-tight"
          >
            {line.slice(2, -2)}
          </h3>
        );
      }
      if (line.startsWith("•")) {
        return (
          <div
            key={index}
            className="text-[#002147]/90 mb-2 md:mb-3 ml-4 md:ml-6 flex items-start gap-3"
          >
            <div className="w-2 h-2 bg-[#002147] rounded-full flex-shrink-0 mt-2"></div>
            <span>{line.slice(1).trim()}</span>
          </div>
        );
      }
      if (
        line.includes("🥇") ||
        line.includes("🥈") ||
        line.includes("🥉") ||
        line.includes("🏅")
      ) {
        return (
          <div
            key={index}
            className="text-[#002147] mb-3 font-medium bg-[#002147]/5 p-3 rounded-lg border-l-4 border-[#002147]"
          >
            {line}
          </div>
        );
      }
      return line.trim() ? (
        <p
          key={index}
          className="text-[#002147]/90 mb-3 md:mb-4 leading-relaxed text-sm md:text-base"
        >
          {line}
        </p>
      ) : (
        <div key={index} className="mb-3 md:mb-4"></div>
      );
    });
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-[#002147] text-white";
      case "medium":
        return "bg-[#002147]/80 text-white";
      default:
        return "bg-[#002147]/60 text-white";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f0f4f8] to-[#e2e8f0]">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#002147] to-[#003366]">
        <div className="relative py-12 md:py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-6 md:mb-8">
              <div className="relative group">
                <div className="absolute -inset-2 md:-inset-4 bg-[#002147]/50 rounded-full blur-lg"></div>
                <div className="relative bg-white/10 p-3 md:p-4 rounded-2xl md:rounded-3xl backdrop-blur-sm border border-white/20">
                  <Bell className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                  Notice Board
                </h1>
                <div className="h-1 w-24 md:w-32 bg-white/60 rounded-full mx-auto"></div>
              </div>
            </div>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Stay informed with the latest announcements, updates, and
              important information from our institution
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-6xl mx-auto px-4 py-6 md:py-8">
        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#002147] text-white shadow-md"
                  : "bg-white text-[#002147] border border-[#002147] hover:bg-[#002147] hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Notice List */}
      <div className="max-w-6xl mx-auto px-4 py-6 md:py-12">
        <div className="grid gap-4 md:gap-6">
          {filteredNotices.map((notice, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl md:rounded-2xl shadow-md border border-slate-200 hover:shadow-lg hover:border-[#002147]/30 transition-all duration-300 cursor-pointer overflow-hidden"
              onClick={() => setSelectedNotice(notice)}
            >
              <div className="p-4 md:p-6">
                <div className="flex items-start gap-4 md:gap-6">
                  {/* Priority Indicator */}
                  <div className="flex flex-col items-center gap-2 md:gap-3">
                    <div
                      className={`${getPriorityColor(
                        notice.priority
                      )} p-3 md:p-4 rounded-xl md:rounded-2xl flex-shrink-0 group-hover:scale-105 transition-all duration-300 shadow-lg`}
                    >
                      {notice.icon}
                    </div>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium border border-[#002147]/20 text-[#002147]`}
                    >
                      {notice.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-2">
                      <span className="text-xs md:text-sm text-[#002147]/70 font-medium">
                        {notice.date}
                      </span>
                      <div className="h-1 w-1 bg-[#002147]/40 rounded-full"></div>
                      <span
                        className={`text-xs px-2 py-1 rounded-full font-medium ${getPriorityColor(
                          notice.priority
                        )}`}
                      >
                        {notice.priority.charAt(0).toUpperCase() +
                          notice.priority.slice(1)}{" "}
                        Priority
                      </span>
                    </div>
                    <p className="text-[#002147] font-medium text-base md:text-lg leading-relaxed mb-3 group-hover:text-[#002147]/80 transition-colors duration-300">
                      {notice.text}
                    </p>
                    <div className="flex items-center justify-between">
                      <button className="inline-flex items-center gap-1 md:gap-2 text-[#002147] hover:text-[#002147]/80 font-semibold text-sm">
                        Read Full Notice
                        <ChevronRight className="w-4 h-4" />
                      </button>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="h-6 w-6 md:h-8 md:w-8 bg-[#002147] rounded-full flex items-center justify-center">
                          <ChevronRight className="w-3 h-3 md:w-4 md:h-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredNotices.length === 0 && (
          <div className="text-center py-12">
            <div className="text-[#002147]/60 mb-4">
              <Bell className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-xl font-medium text-[#002147] mb-2">
              No notices found
            </h3>
            <p className="text-[#002147]/70">
              There are no notices in this category at the moment.
            </p>
          </div>
        )}
      </div>

      {/* Modal - Fixed for Mobile */}
      {selectedNotice && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl md:rounded-2xl shadow-2xl w-full max-w-md md:max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
            {/* Modal Header */}
            <div className="bg-[#002147] text-white p-4 md:p-6 flex-shrink-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="bg-white/20 p-2 md:p-3 rounded-xl backdrop-blur-sm">
                    {selectedNotice.icon}
                  </div>
                  <div className="max-w-[70%]">
                    <h2 className="font-bold text-lg md:text-xl mb-1 truncate">
                      Notice Details
                    </h2>
                    <div className="flex items-center gap-2 md:gap-3 flex-wrap">
                      <span className="text-white/80 text-sm">
                        {selectedNotice.date}
                      </span>
                      <div className="h-1 w-1 bg-white/60 rounded-full"></div>
                      <span className="px-2 py-1 bg-white/20 rounded-full text-xs font-medium truncate">
                        {selectedNotice.category}
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedNotice(null)}
                  className="bg-white/20 hover:bg-white/30 p-2 rounded-xl backdrop-blur-sm transition-all duration-300 flex-shrink-0"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Content - Scrollable */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6">
              <div className="space-y-4 md:space-y-6">
                {formatText(selectedNotice.fullText)}
              </div>
            </div>

            {/* Modal Footer - Sticky at bottom */}
            <div className="border-t border-slate-200 p-4 bg-slate-50 flex-shrink-0">
              <div className="flex flex-row gap-3">
                <button
                  onClick={() => setSelectedNotice(null)}
                  className="flex-1 bg-[#002147] hover:bg-[#001a36] text-white py-3 rounded-xl font-semibold transition-all duration-300"
                >
                  Close Notice
                </button>
                <button className="px-4 py-3 bg-[#002147]/90 hover:bg-[#001a36] text-white rounded-xl font-semibold transition-all duration-300">
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notice;
