/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Book,
  Bell,
  ChevronRight,
  Eye,
  Calendar,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const AboutSchool = () => {
  const [activeNotice, setActiveNotice] = useState(null);

  const notices = [
    {
      id: 2,
      title: "আগামী ১৩ সেপ্টেম্বর আখেরী চাহার সোম্বা উপলক্ষে বিদ্যালয় বন্ধ",
      date: "২০২৩",
      isNew: true,
    },
    {
      id: 3,
      title: "আগামী ০৬ সেপ্টেম্বর শুভ জন্মাষ্টমী উপলক্ষে বিদ্যালয় বন্ধ",
      date: "২০২৩",
      isNew: false,
    },
    {
      id: 4,
      title: "বার্ষিক পরীক্ষার সময়সূচী প্রকাশ - সকল শাখার জন্য",
      date: "২০২৩",
      isNew: true,
    },
    {
      id: 5,
      title: "আন্তঃবিদ্যালয় ক্রীড়া প্রতিযোগিতায় আমাদের বিজয়",
      date: "২০২৩",
      isNew: true,
    },
    {
      id: 6,
      title: "নতুন শিক্ষাবর্ষে ভর্তির আবেদন গ্রহণ শুরু",
      date: "২০২৩",
      isNew: true,
    },
    {
      id: 7,
      title: "নতুন শিক্ষাবর্ষে ভর্তির আবেদন গ্রহণ শুরু",
      date: "২০২৩",
      isNew: true,
    },
  ];

  return (
    <div className="p-4 sm:p-6 md:p-8 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* About School Section - Takes 2/3 width */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Animated background glow */}
              <div className="absolute -inset-4 bg-[#002147] rounded-3xl opacity-10 blur-xl"></div>

              <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl p-6 sm:p-8 h-full">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="relative bg-gradient-to-br from-[#002147] via-[#002147] to-[#002147] p-3 rounded-2xl">
                      <Book className="text-2xl text-white" />
                    </div>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#002147] font-roboto">
                    About School
                  </h2>
                </div>

                {/* School Image */}
                <div className="mb-6 relative overflow-hidden rounded-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002147]/20 to-transparent z-10"></div>
                  <img
                    src="https://maphsctg.edu.bd/images/details/1554889205.jpg"
                    alt="School Building"
                    className="w-full h-48 sm:h-64 object-cover transition-transform duration-700 hover:scale-110"
                  />
                  {/* Shimmer overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 hover:translate-x-full transition-transform duration-1000"></div>
                </div>

                {/* About Text */}
                <div className="space-y-4 font-bangla3">
                  <p className="text-[#002147] leading-relaxed text-sm sm:text-base ">
                    ১৯০২ খৃষ্টাব্দের শেষভাগে পাহাড়তলী মডেল স্কুলের প্রধান প-িত
                    মহিমচন্দ্র গুহ মহোদয় ২৫ বৎসর চাকুরীর পর কার্য্য হইতে অবসর
                    গ্রহণ সময়ে তাঁহার ছাত্রবৃন্দ তাঁহাকে বিদায় অভিনন্দন
                    দেওয়ার জন্য এক সভা আহবান করেন। অভিনন্দন প্রদানের কার্য্য
                    শেষ হইলে উক্ত সভায় পাহাড়তলী গ্রামে একটি উচ্চ ইংরেজী
                    বিদ্যালয় স্থাপন বিষয়ে আলোচনা হয়।
                  </p>

                  <p className="text-[#002147] leading-relaxed text-sm sm:text-base">
                    অবসর প্রাপ্ত পন্ডিত মহিমচন্দ্র গুহ মহাশয় ও হাই স্কুল স্থাপন
                    বিষয়ে গ্রামবাসীদিগকে উৎসাহিত করেন। এ বিষয়ে স্থির
                    সিদ্ধান্তে উপনীত হওয়ার জন্য ১৯০২ খৃষ্টাব্দের ৩০শে ডিসেম্বর
                    তারিখে পাহাড়তলী গ্রামবাসী বৌদ্ধগণ স্থানীয় মডেল স্কুল গৃহে
                    এক সভায় সমবেত হন। হাই স্কুল স্থাপনের আবশ্যকতা ও উপযোগিতা
                    সম্বন্ধে সবিশেষ আলোচনা হওয়ার পর সভায় ইহা স্থিরীকৃত হয় যে,
                    পাহাড়তলী গ্রামে একটা উচ্চ ইংরেজী বিদ্যালয় স্থাপন করা হউক এবং
                    এই উপলক্ষে চাঁদা আদায় করা হউক এবং চাঁদা আদায়ের জন্য একখানি
                    আবেদন পত্র সভার পক্ষে বাবু হরগোবিন্দ মুচ্ছদ্দী, বাবু জয়লাল
                    বড়–য়া ও বাবু সতীশচন্দ্র বড়ুয়া মহাশয়গণের নামে ছাপান হউক।
                    .......
                  </p>
                </div>

                {/* Read More Button */}
                <div className="mt-6">
                  <Link to={"/about-us"}>
                    <button className="group relative overflow-hidden bg-gradient-to-br from-[#002147] via-[#002147] to-[#002147] hover:from-[#002147] hover:via-purple-500 hover:to-[#002147] text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-[#002147]/25">
                      <span className="relative z-10 flex items-center gap-2">
                        Read More
                        <ChevronRight className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Notice Board Sidebar - Takes 1/3 width */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white rounded-2xl shadow-lg border border-[#002147]/10 overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-[#002147] to-[#002147] p-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-2 rounded-xl backdrop-blur-sm">
                      <Bell className="text-white text-xl animate-pulse" />
                    </div>
                    <h3 className="text-white font-bold text-lg font-poppins">
                      Notice Board
                    </h3>
                  </div>
                </div>

                {/* Notice List */}
                <div className=" overflow-y-auto">
                  {notices.map((notice, index) => (
                    <div
                      key={notice.id}
                      className={`
                                                border-b border-[#002147]/10 last:border-b-0 transition-all duration-300
                                                hover:bg-[#002147]/5 cursor-pointer group  font-bangla4
                                                ${
                                                  activeNotice === notice.id
                                                    ? "bg-[#002147]/5"
                                                    : ""
                                                }
                                            `}
                      onMouseEnter={() => setActiveNotice(notice.id)}
                      onMouseLeave={() => setActiveNotice(null)}
                    >
                      <Link to={"/notice"}>
                        <div className="p-4">
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex-1 min-w-0">
                              {/* Notice Header */}
                              <div className="flex items-center gap-2 mb-2">
                                {notice.isNew && (
                                  <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium bg-[#002147]  text-white rounded-full">
                                    New
                                  </span>
                                )}
                                <div className="flex items-center text-xs text-[#002147]/60 gap-1">
                                  <Calendar className="w-3 h-3" />
                                  <span>{notice.date}</span>
                                </div>
                              </div>

                              {/* Notice Title */}
                              <p className="text-[#002147] text-sm leading-relaxed line-clamp-2 group-hover:text-[#002147]/80 transition-colors duration-200">
                                {notice.title}
                              </p>
                            </div>

                            {/* Arrow Icon */}
                            <ArrowRight
                              className={` text-[#002147]/40 w-4 h-4 flex-shrink-0 transition-all duration-300
                                                        ${
                                                          activeNotice ===
                                                          notice.id
                                                            ? "text-[#002147] translate-x-1"
                                                            : ""
                                                        }
                                                        group-hover:text-[#002147]`}
                            />
                          </div>

                          {/* Progress Bar */}
                          <div
                            className={`
                                                    h-0.5 bg-[#002147]/10 rounded-full mt-2 overflow-hidden
                                                    ${
                                                      activeNotice === notice.id
                                                        ? "opacity-100"
                                                        : "opacity-0"
                                                    }
                                                    transition-opacity duration-300
                                                `}
                          ></div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="p-4 bg-[#002147]/5 border-t border-[#002147]/10">
                  <Link to={"/notice"}>
                    <button className="w-full group relative overflow-hidden bg-gradient-to-r from-[#002147] to-[#002147] hover:from-[#002147] hover:to-purple-500 text-white py-2.5 px-4 rounded-xl font-medium transition-all duration-300 hover:shadow-md hover:shadow-[#002147]/25">
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <Eye className="w-4 h-4" />
                        View All Notice
                      </span>
                      {/* Hover effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-700"></div>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSchool;
