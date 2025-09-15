import React, { useState, useEffect } from "react";
import {
  X,
  Award,
  Users,
  Quote,
  BookOpen,
  ChevronDown,
} from "lucide-react";

const SchoolLeadershipPage = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const headmasterMessage = {
    title: "প্রধান শিক্ষকের বক্তব্য",
    name: "অঞ্জন বড়ুয়া",
    position: "প্রধান শিক্ষক, মহামুনি এংলো-পালি উচ্চ বিদ্যালয়",
    image: "https://maphsctg.edu.bd/images/details/1555837160.jpg",
    excerpt:
      "আমি প্রথমেই শ্রদ্ধা ও কৃতজ্ঞচিত্তে স্মরণ করছি সে সব আলোকিত ব্যক্তিদের যাঁদের প্রচেষ্ঠায় অত্র এলাকায় শিক্ষার আলোকবর্তিকা পৌঁছে দেয়ার লক্ষ্যে এই বিদ্যালয়টি প্রতিষ্ঠা করে গেছেন।",
    fullMessage: `আমি প্রথমেই শ্রদ্ধা ও কৃতজ্ঞচিত্তে স্মরণ করছি সে সব আলোকিত ব্যক্তিদের যাঁদের প্রচেষ্ঠায় অত্র এলাকায় শিক্ষার আলোকবর্তিকা পৌঁছে দেয়ার লক্ষ্যে এই বিদ্যালয়টি প্রতিষ্ঠা করে গেছেন। যে মহৎ উদ্দেশ্য নিয়ে এই বিদ্যালয়টি প্রতিষ্ঠা করেছিলেন সেই শিক্ষার আলো গ্রাম থেকে গ্রামান্তরে দেশ থেকে দেশান্তরে ব্যাপক বিস্তৃতি লাভ করে এই এলাকার মান মর্যাদা সমৃদ্ধি লাভ করেছে। আমি শ্রদ্ধাবনত চিত্তে স্মরণ করছি কিংবদন্তী প্রবাদ পুরুষগণদেরকে এবং শ্রদ্ধাজ্ঞাপন করছি। এতদ এলাকার শিক্ষা বিস্তারের ক্ষেত্রে মহামুনি এংলো-পালি উচ্চ বিদ্যালয় একটি অগ্রণী শিক্ষাঙ্গন। ধর্ম-বর্ণ সম্প্রদায় নির্বিশেষে ভাবী কালের উত্তর সূরীদের প্রকৃত মানুষ হিসেবে গড়ে তোলার প্রত্যয়ে এর প্রতিষ্ঠা।
১৯০২ সালে লোকমান্য মহান কয়েকজন শিক্ষা ব্রতীর মনে একটি আদর্শ বিদ্যালয় গড়ে তোলার এক শুভ সংকল্পেরই রূপায়ন হল আজকের শতবর্ষোত্তীর্ণ গৌরব দীপ্ত এ মহান বিদ্যাপীঠ। যেহেতু শিক্ষা একটি জীবনব্যাপী প্রক্রিয়া সেহেতু বহুমাত্রিক ধারার এ বর্ধন শিক্ষার্থীকে পূর্ণ মাত্রায় বিকশিত হতে অর্থবহ ভূমিকা রাখে। সার্বিকভাবে শিক্ষার্থীর মানসিক, আবেগিক ও শারীরিক বৃদ্ধির বিষয়টি সাধারণ লক্ষ্য হলেও ব্যাপক অর্থে শিক্ষার্থীর মেধা, প্রজ্ঞা, মনন, নৈতিকতা, চরিত্র গঠন ইত্যাদি মৌলিক গুণাবলীর সুষম বিকাশ সাধনই হল শিক্ষার মূল কাজ।
আমি শ্রদ্ধার সহিত কৃতজ্ঞতা জানাচ্ছি, মহামুনি গ্রামের কৃতি সন্তান কৃতি ব্যক্তিত্ব চট্টগ্রামের নন্দিত কৃতি ব্যক্তিত্ব যশস্বী সমাজ সেবক, শিক্ষানুরাগী, স্বনামধন্য শিল্পপতি, আন্তর্জাতিক খ্যাতি সম্পন্ন প্রতিষ্ঠিত সেবামূলক মানবিক সংগঠন লায়ন্স ক্লাব ইন্টারন্যাশনাল জেলা ৩১৫বি-৪ বাংলাদেশের প্রাক্তন লায়ন্স গভর্নর বিদ্যালয় পরিচালনা পরিষদের সম্মানিত চেয়ারম্যান, কনফিডেন্স সিমেন্ট লিঃ এর সম্মানিত ব্যবস্থাপনা পরিচালক জনাব রূপম কিশোর বড়ুয়া মহোদয়কে।
আমি দৃঢ়ভাবে বিশ্বাস করি যে, প্রাক্তন সকল শিক্ষার্থী, বিদ্যালয় পরিচালনা কমিটির সদস্যবৃন্দ, শিক্ষক মন্ডলী, শুভানুধায়ী, শিক্ষানুরাগী, শিল্পপতি দানশীল সুধীবৃন্দসহ সর্বস্তরের গণ মানুষের সহযোগিতায় এই মহান বিদ্যাপীঠের পূর্ণতা প্রাপ্তি সম্ভব।`,
  };

  const presidentMessage = {
    title: "সভাপতির বক্তব্য",
    name: "রূপম কিশোর বড়ুয়া",
    position: "সভাপতি, মহামুনি এংলো-পালি উচ্চ বিদ্যালয়",
    image: "https://maphsctg.edu.bd/images/details/1554889739.jpg",
    excerpt:
      "আমি প্রথমে অতীব বিনয়ের সাথে শ্রদ্ধা জানাচ্ছি সেই সকল মহান ব্যক্তিদেরকে, এই শতবর্ষোত্তীর্ণ বিদ্যালয়টি প্রতিষ্ঠার পেছনে যাদের প্রত্যক্ষ ও পরোক্ষ অবদান রয়েছে।",
    fullMessage: `আমি প্রথমে অতীব বিনয়ের সাথে শ্রদ্ধা জানাচ্ছি সেই সকল মহান ব্যক্তিদেরকে, এই শতবর্ষোত্তীর্ণ বিদ্যালয়টি প্রতিষ্ঠার পেছনে যাদের প্রত্যক্ষ ও পরোক্ষ অবদান রয়েছে। কৃতজ্ঞতা ও ধন্যবাদ জানাচ্ছি সেই সকল ম্যানেজিং কমিটির সভাপতি ও সদস্যদেরকে যাদের সুষ্ঠু পরিচালনায় বিদ্যালয়টি বর্তমান পর্যায়ে উন্নীত করেছেন। ধন্যবাদ জানাচ্ছি বিদ্যালয়ের সকল প্রধান শিক্ষক ও শিক্ষক-শিক্ষিকাদেরকে যাদের অবদানে বিদ্যালয়টি রাউজান উপজেলার মধ্যে একটি প্রথম সারির বিদ্যালয়ে রূপান্তরিত হয়েছে।
আমি ঐতিহ্যবাহী বৌদ্ধ জনপদ মহামুনি পাহাড়তলী গ্রামের জন্মজাত সন্তান। আমার ব্যক্তিগতভাবে চাওয়া-পাওয়ার কিছু নেই। আমার চেষ্টা ও বুদ্ধের আশীর্বাদে শিক্ষার প্রসার ও শ্রীবৃদ্ধিতে সহযোগিতা প্রদানের মতো আর্থিক ও মানসিক সক্ষমতা আমার আছে। এই বিদ্যালয়ে আমার পূর্বপুরুষ শ্রদ্ধেয় ঠাকুরদা মোক্তার সতীশচন্দ্র বড়ুয়া, জ্যাঠা মহাশয় প্রফেসর মহীমা রঞ্জন বড়ুয়া (সভাপতি ১৯২৩ সাল) এবং আমার শ্রদ্ধেয় পিতা এডভোকেট ফণী ভূষণ বড়ুয়া বিদ্যালয় প্রতিষ্ঠা ও সার্বিক উন্নয়নে গুরুত্বপূর্ণ অবদান রাখেন।
সভাপতি হওয়ার পর থেকে অদ্যাবধি যে সকল উন্নয়নমূলক কাজ সম্পাদন করেছি:
• শিক্ষার মানোন্নয়নে বিভিন্ন কার্যক্রম গ্রহণ
• বিদ্যালয় ভবনের ভিতর ও বাহির এবং সীমানা ও তোরণের রংকরণ
• আধুনিক টয়লেট সহ সকল টয়লেটে টাইল্স ফিটিং এবং পানি সরবরাহের ব্যবস্থা
• শিক্ষার্থীদের থেকে যৎসামান্য অর্থ নিয়ে প্রতিদিন দুপুরে টিফিনের ব্যবস্থা করা
• আধুনিক শিক্ষায় শিক্ষিত করার জন্য ওভারহেড প্রজেক্টরের মাধ্যমে পাঠদানের ব্যবস্থা
• মাঠের ব্যাপক সংস্কারের ব্যবস্থা করা
• প্রতি বছর গরীব ও মেধাবী শিক্ষার্থীদেরকে প্রায় ১,৫০,০০০ টাকা বৃত্তি প্রদান
• লাইব্রেরীতে এক লক্ষ বিশ হাজার টাকা মূল্যের ৮০০টিরও অধিক বই প্রদান
আমি দৃঢ়ভাবে বিশ্বাস করি শিক্ষা ছাড়া একজন মানুষ সত্যিকার অর্থে মানুষ হিসেবে পরিগণিত হয় না। তাই অত্র এলাকার সকল সম্প্রদায়ের কোমলমতি শিক্ষার্থীরা প্রকৃত 'মানুষ' হওয়ার মানসে বিদ্যালয়ের প্রাক্তন শিক্ষার্থী, সমাজ হিতৈষী, মহানুভব শিক্ষানুরাগী ও বিভিন্ন শ্রেণি-পেশার সকল লোকদের নিকট আমার উদাত্ত আহবান। আসুন, আমরা সবাই ঐক্যবদ্ধভাবে এই বিদ্যালয়কে রাউজান তথা দেশের একটি অন্যতম আদর্শ বিদ্যালয়ে রূপান্তর করি।`,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100  font-bangla4">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-indigo-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-br from-purple-200/20 to-pink-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-6 sm:py-8 lg:py-12">
        {/* Header Section */}
        <div
          className={`text-center mb-8 sm:mb-12 lg:mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4 font-bangla1">
            শিক্ষার আলোকবর্তিকা হিসেবে আমাদের প্রিয় বিদ্যালয়ের নেতৃত্বের
            অনুপ্রেরণামূলক বার্তা
          </p>
        </div>

        {/* Messages Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12">
          {/* Headmaster Message Card */}
          <div
            className={`group transform transition-all duration-700 delay-200 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              {/* Decorative Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#002147] to-[#003366] p-0.5 rounded-2xl sm:rounded-3xl">
                <div className="bg-white h-full w-full rounded-2xl sm:rounded-3xl"></div>
              </div>

              {/* Content */}
              <div className="relative">
                {/* Header */}
                <div className="bg-gradient-to-br from-[#002147] via-[#003366] to-[#004080] p-4 sm:p-6 lg:p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent"></div>
                  <div className="relative flex items-center gap-3 sm:gap-4">
                    <div className="bg-white/10 backdrop-blur-md p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg border border-white/20 group-hover:scale-110 transition-transform duration-300">
                      <Award className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-white text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 leading-tight">
                        {headmasterMessage.title}
                      </h2>
                      <p className="text-white/80 text-xs sm:text-sm lg:text-base leading-relaxed">
                        {headmasterMessage.position}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-4 sm:p-6 lg:p-8">
                  {/* Profile Section */}
                  <div className="flex flex-col items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-[#002147] to-[#003366] rounded-xl sm:rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                      <div className="relative w-32 h-40 sm:w-40 sm:h-48 lg:w-44 lg:h-52 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border-2 border-gray-200 group-hover:shadow-2xl transition-all duration-300">
                        <img
                          src={headmasterMessage.image}
                          alt={headmasterMessage.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            e.target.style.display = "none";
                            e.target.nextSibling.style.display = "flex";
                          }}
                        />
                        <div className="w-full h-full bg-gradient-to-br from-[#002147] to-[#003366] flex items-center justify-center">
                          <Award className="w-12 h-12 sm:w-16 sm:h-16 text-white/80" />
                        </div>
                      </div>
                    </div>

                    <div className="text-center space-y-1 sm:space-y-2">
                      <h3 className="font-bold text-[#002147] text-lg sm:text-xl lg:text-2xl leading-tight">
                        {headmasterMessage.name}
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed px-2">
                        {headmasterMessage.position}
                      </p>
                    </div>
                  </div>

                  {/* Quote Section */}
                  <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 border border-gray-100 shadow-sm">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="flex-shrink-0 bg-[#002147] p-2 sm:p-3 rounded-lg shadow-md">
                        <Quote className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                      </div>
                      <p className="text-gray-700 leading-relaxed text-justify text-sm sm:text-base lg:text-lg font-medium">
                        {headmasterMessage.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Button */}
                  <button
                    onClick={() => setActiveModal("headmaster")}
                    className="w-full bg-gradient-to-r from-[#002147] via-[#003366] to-[#004080] text-white py-3 sm:py-4 rounded-xl sm:rounded-2xl font-medium text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-300" />
                    সম্পূর্ণ বক্তব্য পড়ুন
                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* President Message Card */}
          <div
            className={`group transform transition-all duration-700 delay-400 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="relative  bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              {/* Decorative Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#002147] to-[#003366] p-0.5 rounded-2xl sm:rounded-3xl">
                <div className="bg-white h-full w-full rounded-2xl sm:rounded-3xl"></div>
              </div>

              {/* Content */}
              <div className="relative">
                {/* Header */}
                <div className="bg-gradient-to-br  from-[#002147] via-[#003366] to-[#004080] p-4 sm:p-6 lg:p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent"></div>
                  <div className="relative flex items-center gap-3 sm:gap-4">
                    <div className="bg-white/10 backdrop-blur-md p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg border border-white/20 group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-white text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 leading-tight">
                        {presidentMessage.title}
                      </h2>
                      <p className="text-white/80 text-xs sm:text-sm lg:text-base leading-relaxed">
                        {presidentMessage.position}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-4 sm:p-6 lg:p-8">
                  {/* Profile Section */}
                  <div className="flex flex-col items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-[#002147] to-[#003366] rounded-xl sm:rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                      <div className="relative w-32 h-40 sm:w-40 sm:h-48 lg:w-44 lg:h-52 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border-2 border-gray-200 group-hover:shadow-2xl transition-all duration-300">
                        <img
                          src={presidentMessage.image}
                          alt={presidentMessage.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            e.target.style.display = "none";
                            e.target.nextSibling.style.display = "flex";
                          }}
                        />
                        <div className="w-full h-full bg-gradient-to-br from-[#002147] to-[#003366] flex items-center justify-center ">
                          <Users className="w-12 h-12 sm:w-16 sm:h-16 text-white/80" />
                        </div>
                      </div>
                    </div>

                    <div className="text-center space-y-1 sm:space-y-2">
                      <h3 className="font-bold text-[#002147] text-lg sm:text-xl lg:text-2xl leading-tight">
                        {presidentMessage.name}
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed px-2">
                        {presidentMessage.position}
                      </p>
                    </div>
                  </div>

                  {/* Quote Section */}
                  <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 border border-gray-100 shadow-sm">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="flex-shrink-0 bg-[#002147] p-2 sm:p-3 rounded-lg shadow-md">
                        <Quote className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                      </div>
                      <p className="text-gray-700 leading-relaxed text-justify text-sm sm:text-base lg:text-lg font-medium">
                        {presidentMessage.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Button */}
                  <button
                    onClick={() => setActiveModal("president")}
                    className="w-full bg-gradient-to-r from-[#002147] via-[#003366] to-[#004080] text-white py-3 sm:py-4 rounded-xl sm:rounded-2xl font-medium text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-300" />
                    সম্পূর্ণ বক্তব্য পড়ুন
                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal */}
        {activeModal && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-3 sm:p-4 lg:p-6">
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-5xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden flex flex-col animate-fadeIn">
              {/* Modal Header */}
              <div className="bg-gradient-to-br from-[#002147] via-[#003366] to-[#004080] p-4 sm:p-6 lg:p-8 flex-shrink-0 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent"></div>
                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                    <div className="bg-white/10 backdrop-blur-md p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg border border-white/20">
                      {activeModal === "headmaster" ? (
                        <Award className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                      ) : (
                        <Users className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-white text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold mb-1 sm:mb-2 leading-tight">
                        {activeModal === "headmaster"
                          ? headmasterMessage.title
                          : presidentMessage.title}
                      </h2>
                      <p className="text-white/80 text-xs sm:text-sm lg:text-base xl:text-lg leading-relaxed">
                        {activeModal === "headmaster"
                          ? headmasterMessage.name
                          : presidentMessage.name}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveModal(null)}
                    className="bg-white/10 hover:bg-white/20 p-2 sm:p-3 rounded-xl sm:rounded-2xl backdrop-blur-md transition-all duration-300 border border-white/20 group ml-3 sm:ml-4"
                  >
                    <X className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 mb-6 sm:mb-8">
                  {/* Profile Image */}
                  <div className="mx-auto lg:mx-0 flex-shrink-0">
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-[#002147] to-[#003366] rounded-xl sm:rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                      <div className="relative w-40 h-48 sm:w-48 sm:h-56 lg:w-52 lg:h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border-2 border-gray-200">
                        <img
                          src={
                            activeModal === "headmaster"
                              ? headmasterMessage.image
                              : presidentMessage.image
                          }
                          alt={
                            activeModal === "headmaster"
                              ? headmasterMessage.name
                              : presidentMessage.name
                          }
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            e.target.style.display = "none";
                            e.target.nextSibling.style.display = "flex";
                          }}
                        />
                        <div className="w-full h-full bg-gradient-to-br from-[#002147] to-[#003366] flex items-center justify-center ">
                          {activeModal === "headmaster" ? (
                            <Award className="w-12 h-12 sm:w-16 sm:h-16 text-white/80" />
                          ) : (
                            <Users className="w-12 h-12 sm:w-16 sm:h-16 text-white/80" />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Message Content */}
                  <div className="flex-1 min-w-0">
                    <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-100 shadow-sm">
                      <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                        <div className="flex-shrink-0 bg-[#002147] p-2 sm:p-3 rounded-lg shadow-md">
                          <Quote className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-[#002147] text-base sm:text-lg lg:text-xl mb-2 sm:mb-3">
                            {activeModal === "headmaster"
                              ? headmasterMessage.name
                              : presidentMessage.name}
                          </h3>
                          <p className="text-gray-600 text-xs sm:text-sm lg:text-base mb-3 sm:mb-4">
                            {activeModal === "headmaster"
                              ? headmasterMessage.position
                              : presidentMessage.position}
                          </p>
                        </div>
                      </div>

                      <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
                        <p className="text-gray-700 leading-relaxed text-justify whitespace-pre-line text-sm sm:text-base lg:text-lg">
                          {activeModal === "headmaster"
                            ? headmasterMessage.fullMessage
                            : presidentMessage.fullMessage}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="border-t border-gray-200 p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-slate-50 to-blue-50 flex-shrink-0">
                <button
                  onClick={() => setActiveModal(null)}
                  className="w-full bg-gradient-to-r from-[#002147] via-[#003366] to-[#004080] text-white py-3 sm:py-4 rounded-xl sm:rounded-2xl font-medium text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <X className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-300" />
                  বন্ধ করুন
                </button>
              </div>
            </div>
          </div>
        )}
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
      `}</style>
    </div>
  );
};

export default SchoolLeadershipPage;
