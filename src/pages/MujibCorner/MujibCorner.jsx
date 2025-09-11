/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useState, useEffect } from "react"
import {
  FaUser,
  FaCalendarAlt,
  FaFlag,
  FaHeart,
  FaStar,
  FaQuoteLeft,
  FaBook,
  FaGavel,
  FaChevronDown,
} from "react-icons/fa"

export default function MujibCorner() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [visibleBioItems, setVisibleBioItems] = useState(8)

  const images = [
    "https://maphsctg.edu.bd/image/mujib.jpeg",
    "https://maphsctg.edu.bd/image/mujib2.jpeg",
    "https://maphsctg.edu.bd/image/mujib3.jpeg",
    "https://maphsctg.edu.bd/image/mujib4.jpeg",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const detailedBiography = [
    {
      year: "১৯২০",
      title: "জন্ম ও পারিবারিক পরিচয়",
      content:
        "জাতির জনক বঙ্গবন্ধু শেখ মুজিবুর রহমান ফরিদপুর জেলার গোপালগঞ্জ মহকুমার (বর্তমানে জেলা) টুঙ্গিপাড়া গ্রামে এক সম্ভ্রান্ত মুসলিম পরিবারে ১৯২০ সালের ১৭ মার্চ জন্মগ্রহণ করেন। শেখ লুৎফর রহমান ও মোসাম্মät সাহারা খাতুনের চার কন্যা ও দুই পুত্রের মধ্যে তৃতীয় সন্তান শেখ মুজিব। বাবা-মা ডাকতেন খোকা বলে। খোকার শৈশবকাল কাটে টুঙ্গিপাড়ায়।",
    },
    {
      year: "১৯২৭",
      title: "শিক্ষাজীবনের সূচনা",
      content:
        "৭ বছর বয়সে গিমাডাঙ্গা প্রাইমারি স্কুলে পড়াশোনা শুরু করেন। নয় বছর বয়সে গোপালগঞ্জ পাবলিক স্কুলে তৃতীয় শ্রেণীতে ভর্তি হন। পরে তিনি স্থানীয় মিশনারি স্কুলে ভর্তি হন।",
    },
    {
      year: "১৯৩৪",
      title: "স্বাস্থ্য সমস্যা ও শিক্ষা বিরতি",
      content:
        "১৪ বছর বয়সে বেরিবেরি রোগে আক্রান্ত হলে তার একটি চোখ কলকাতায় অপারেশন করা হয় এবং চক্ষুরোগের কারণে তার লেখাপড়ার সাময়িক বিরতি ঘটে।",
    },
    {
      year: "১৯৩৭",
      title: "শিক্ষাজীবনে প্রত্যাবর্তন",
      content: "চক্ষুরোগে চার বছর শিক্ষাজীবন ব্যাহত হওয়ার পর শেখ মুজিব পুনরায় স্কুলে ভর্তি হন।",
    },
    {
      year: "১৯৩৮",
      title: "বিবাহ",
      content:
        "১৮ বছর বয়সে বঙ্গবন্ধু ও বেগম ফজিলাতুন্নেছা আনুষ্ঠানিক বিয়ে সম্পন্ন হয়। তারা দুই কন্যা শেখ হাসিনা, শেখ রেহানা ও তিন পুত্র শেখ কামাল, শেখ জামাল ও শেখ রাসেল এর জনক-জননী।",
    },
    {
      year: "১৯৩৯",
      title: "প্রথম রাজনৈতিক যোগাযোগ",
      content:
        "অবিভক্ত বাংলার মুখ্যমন্ত্রী শেরে বাংলা এ কে ফজলুল হক এবং হোসেন শহীদ সোহরাওয়ার্দী গোপালগঞ্জ মিশনারি স্কুল পরিদর্শনে এলে বঙ্গবন্ধু স্কুলের ছাদ দিয়ে পানি পড়ত তা সারাবার জন্য ও ছাত্রাবাসের দাবি স্কুল ছাত্রদের পক্ষ থেকে তুলে ধরেন।",
    },
    {
      year: "১৯৪০",
      title: "ছাত্র রাজনীতিতে প্রবেশ",
      content:
        "শেখ মুজিব নিখিল ভারত মুসলিম ছাত্র ফেডারেশনে যোগদান করেন এবং এক বছরের জন্য বেঙ্গল মুসলিম ছাত্র ফেডারেশনের কাউন্সিলর নির্বাচিত হন। তাকে গোপালগঞ্জ মুসলিম ডিফেন্স কমিটির সেক্রেটারি নিযুক্ত করা হয়।",
    },
    {
      year: "১৯৪২",
      title: "কলেজ জীবন ও পাকিস্তান আন্দোলন",
      content:
        "এস.এস.সি পাস করেন। কলকাতা ইসলামিয়া কলেজে মানবিক বিভাগে ইন্টারমিডিয়েট ক্লাসে ভর্তি হন এবং বেকার হোস্টেলে থাকার ব্যবস্থা হয়। বঙ্গবন্ধু এই বছরেই পাকিস্তান আন্দোলনের সাথে সক্রিয়ভাবে যুক্ত হয়ে পড়েন।",
    },
    {
      year: "১৯৪৩",
      title: "সক্রিয় রাজনীতিতে অংশগ্রহণ",
      content: "সক্রিয় রাজনীতিতে জড়িয়ে পড়েন এবং মুসলিম লীগের কাউন্সিলর নির্বাচিত হন।",
    },
    {
      year: "১৯৪৪",
      title: "ছাত্র নেতৃত্ব",
      content:
        "কুষ্টিয়ায় অনুষ্ঠিত নিখিল বঙ্গ মুসলিম ছাত্রলীগের সম্মেলনে যোগদান এবং গুরুত্বপূর্ণ ভূমিকা পালন করেন। কলকাতাস্থ ফরিদপুর বাসীদের একটি সংস্থা 'ফরিদপুরস্থ' ডিস্ট্রিক্ট এসোসিয়েশন'-এর সম্পাদক নির্বাচিত হন।",
    },
    {
      year: "১৯৪৬",
      title: "ছাত্র সংসদের নেতৃত্ব",
      content: "বঙ্গবন্ধু ইসলামিয়া কলেজ ছাত্র সংসদের সাধারণ সম্পাদক (জিএস) নির্বাচিত হন।",
    },
    {
      year: "১৯৪৭",
      title: "স্নাতক ও দেশভাগ",
      content:
        "কোলকাতা বিশ্ববিদ্যালয়ের অধীনে ইসলামিয়া কলেজ থেকে বি.এ পাশ করেন। ভারত ভাগ হয়ে পাকিস্তান রাষ্ট্র প্রতিষ্ঠা হলে কোলকাতায় দাঙ্গা প্রতিরোধ তৎপরতায় অগ্রণী ভূমিকা পালন করেন।",
    },
    {
      year: "১৯৪৮",
      title: "ভাষা আন্দোলনের সূচনা ও প্রথম গ্রেফতার",
      content:
        "ঢাকা বিশ্ববিদ্যালয়ে আইন বিভাগে ভর্তি হন এবং ৪ জানুয়ারি মুসলিম ছাত্রলীগ প্রতিষ্ঠা করেন। ২৩ ফেব্রুয়ারি প্রধানমন্ত্রী খাজা নাজিম উদ্দিন আইন পরিষদে 'পূর্ব পাকিস্তানের জনগণ উর্দুকে রাষ্ট্রভাষা হিসেবে মেনে নেবে' বলে ঘোষণা দিলে তাৎক্ষণিকভাবে বঙ্গবন্ধু এর প্রতিবাদ জানান।",
    },
    {
      year: "১৯৪৯",
      title: "আওয়ামী মুসলিম লীগ প্রতিষ্ঠা",
      content:
        "২১ জানুয়ারি শেখ মুজিব কারাগার থেকে মুক্তি পান। ২৩ জুন পূর্ব পাকিস্তান আওয়ামী মুসলিম লীগ গঠিত হয় এবং জেলে থাকা অবস্থায় বঙ্গবন্ধু এ দলের যুগ্ম সম্পাদক নির্বাচিত হন।",
    },
    {
      year: "১৯৫২",
      title: "ভাষা আন্দোলনে অনশন",
      content:
        "২৬ জানুয়ারি খাজা নাজিমুদ্দিন ঘোষণা করেন 'পাকিস্তানের রাষ্ট্রভাষা হবে উর্দু'। এর প্রতিবাদে বন্দি থাকা অবস্থায় ২১ ফেব্রুয়ারিকে রাষ্ট্রভাষা সংগ্রাম পরিষদের প্রতি আহ্বান জানান।",
    },
    {
      year: "১৯৫৩",
      title: "আওয়ামী লীগের সাধারণ সম্পাদক",
      content:
        "৯ জুলাই পূর্ব পাকিস্তান আওয়ামী মুসলিম লীগের কাউন্সিলে তিনি দলের সাধারণ সম্পাদক নির্বাচিত হন। ১৪ নভেম্বর দলের বিশেষ কাউন্সিল ডাকা হয় এবং এতে যুক্তফ্রন্ট গঠনের প্রস্তাব গৃহীত হয়।",
    },
    {
      year: "১৯৬৬",
      title: "ঐতিহাসিক ৬ দফা দাবি",
      content:
        "৫ ফেব্রুয়ারি লাহোরে বিরোধী দলসমূহের জাতীয় সম্মেলনের বিষয় নির্বাচনী কমিটিতে বঙ্গবন্ধু ঐতিহাসিক ৬ দফা দাবি পেশ করেন। প্রস্তাবিত ৬ দফা ছিল বাঙালি জাতির মুক্তি সনদ।",
    },
    {
      year: "১৯৬৯",
      title: "'বঙ্গবন্ধু' উপাধি ও 'বাংলাদেশ' নামকরণ",
      content:
        "২৩ ফেব্রুয়ারি রেসকোর্স ময়দানে প্রায় ১০ লাখ ছাত্র জনতার সংবর্ধনা সমাবেশে শেখ মুজিবুর রহমানকে আনুষ্ঠানিকভাবে 'বঙ্গবন্ধু' উপাধিতে ভূষিত করা হয়। ৫ ডিসেম্বর পূর্ব বাংলার নামকরণ করেন 'বাংলাদেশ'।",
    },
    {
      year: "১৯৭০",
      title: "নির্বাচনে নিরঙ্কুশ বিজয়",
      content:
        "৭ ডিসেম্বরে সাধারণ নির্বাচনে আওয়ামী লীগ নিরঙ্কুশ সংখ্যাগরিষ্ঠতা অর্জন করে। আওয়ামী লীগ তৎকালীন পূর্ব পাকিস্তানে জাতীয় পরিষদের ১৬৯টি আসনের মধ্যে ১৬৭টি আসন লাভ করে।",
    },
    {
      year: "১৯৭১",
      title: "স্বাধীনতার ঘোষণা ও মুক্তিযুদ্ধ",
      content:
        "৭ মার্চ রেসকোর্সের জনসমুদ্র থেকে বঙ্গবন্ধু ঘোষণা করেন 'এবারের সংগ্রাম আমাদের মুক্তির সংগ্রাম, এবারের সংগ্রাম স্বাধীনতার সংগ্রাম'। ২৫ মার্চ রাত ১২টা ২০ মিনিটে বঙ্গবন্ধু বাংলাদেশের স্বাধীনতা ঘোষণা করেন।",
    },
    {
      year: "১৯৭২",
      title: "স্বদেশ প্রত্যাবর্তন ও পুনর্গঠন",
      content:
        "১০ জানুয়ারি ঢাকায় পৌঁছলে তাকে অবিস্মরণীয় সংবর্ধনা জ্ঞাপন করা হয়। ১২ জানুয়ারি বঙ্গবন্ধু প্রধানমন্ত্রীর দায়িত্ব গ্রহণ করেন। যুদ্ধবিধ্বস্ত দেশ পুনর্গঠনে আত্মনিয়োগ করেন।",
    },
    {
      year: "১৯৭৪",
      title: "জাতিসংঘে বাংলায় ভাষণ",
      content: "২৪ সেপ্টেম্বর জাতিসংঘের সাধারণ পরিষদের অধিবেশনে বাংলায় ভাষণ দেন। বিশ্ব দরবারে বাংলা ভাষার মর্যাদা প্রতিষ্ঠা করেন।",
    },
    {
      year: "১৯৭৫",
      title: "দ্বিতীয় বিপ্লব ও শাহাদাত",
      content:
        "স্বাধীনতাকে অর্থবহ করে তোলার লক্ষ্যে দ্বিতীয় বিপ্লবের কর্মসূচি ঘোষণা। ১৫ আগস্টের ভোরে সপরিবারে শাহাদাত বরণ করেন। বাঙালি জাতির ইতিহাসে এক কলঙ্কময় অধ্যায়।",
    },
  ]

  const achievements = [
    { icon: FaFlag, title: "স্বাধীনতার ঘোষক", desc: "বাংলাদেশের স্বাধীনতা ঘোষণা" },
    { icon: FaUser, title: "জাতির জনক", desc: "বাঙালি জাতির অবিসংবাদিত নেতা" },
    { icon: FaStar, title: "৬ দফার প্রণেতা", desc: "বাঙালির মুক্তির সনদ" },
    { icon: FaHeart, title: "বঙ্গবন্ধু", desc: "বাংলার মানুষের প্রিয় নেতা" },
    { icon: FaBook, title: "ভাষা সৈনিক", desc: "বাংলা ভাষা আন্দোলনের নেতা" },
    { icon: FaGavel, title: "সংবিধান প্রণেতা", desc: "বাংলাদেশের প্রথম সংবিধান" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Majestic Hero Section */}
      <div className="relative min-h-screen bg-gradient-to-br from-[#002147] via-[#003366] to-[#001122] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen">
            {/* Left Content */}
            <div className="text-white space-y-6 lg:space-y-8 order-2 lg:order-1">
              <div className="space-y-4">
                <div className="inline-block px-4 sm:px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium">
                  জাতির জনক • ১৯২০ - ১৯৭৫
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight text-balance">
                  বঙ্গবন্ধু
                  <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-blue-200 mt-2">
                    শেখ মুজিবুর রহমান
                  </span>
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-2xl">
                  হাজার বছরের শ্রেষ্ঠ বাঙালি, স্বাধীন বাংলাদেশের স্থপতি ও বাঙালি জাতির অবিসংবাদিত নেতা
                </p>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 py-6 lg:py-8">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white">৫৫</div>
                  <div className="text-blue-200 text-xs sm:text-sm">বছর জীবনকাল</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white">৬</div>
                  <div className="text-blue-200 text-xs sm:text-sm">দফা দাবি</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white">১৯৭১</div>
                  <div className="text-blue-200 text-xs sm:text-sm">স্বাধীনতা</div>
                </div>
              </div>

              {/* Famous Quote */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 lg:p-8 border border-white/20">
                <FaQuoteLeft className="text-2xl lg:text-3xl text-blue-200 mb-4" />
                <blockquote className="text-lg sm:text-xl lg:text-2xl font-medium leading-relaxed mb-4">
                  "এবারের সংগ্রাম আমাদের মুক্তির সংগ্রাম, এবারের সংগ্রাম স্বাধীনতার সংগ্রাম"
                </blockquote>
                <cite className="text-blue-200 text-sm sm:text-base">৭ মার্চ, ১৯৭১ - রেসকোর্স ময়দান</cite>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative order-1 lg:order-2">
              <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[700px]">
                {/* Main Image Container */}
                <div className="absolute inset-0 rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={images[currentImageIndex] || "/placeholder.svg"}
                    alt="বঙ্গবন্ধু শেখ মুজিবুর রহমান"
                    className="w-full h-full object-cover transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 lg:-top-6 lg:-left-6 w-16 h-16 lg:w-24 lg:h-24 bg-[#004488] rounded-full opacity-20 blur-xl"></div>
                <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 w-20 h-20 lg:w-32 lg:h-32 bg-[#0066cc] rounded-full opacity-20 blur-xl"></div>

                {/* Image Navigation */}
                <div className="absolute bottom-4 lg:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 lg:gap-3">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full transition-all duration-300 ${
                        index === currentImageIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 lg:bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <FaChevronDown className="text-xl lg:text-2xl" />
        </div>
      </div>

      {/* Achievements Banner */}
      <div className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#002147] mb-4">অমর কীর্তি</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              একটি জাতির স্বপ্ন থেকে বাস্তবতায় রূপান্তরের মহানায়ক
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group relative p-6 lg:p-8 bg-gradient-to-br from-[#002147]/5 to-[#002147]/10 rounded-xl lg:rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 lg:gap-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-[#002147] to-[#003366] rounded-xl lg:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <achievement.icon className="text-lg sm:text-xl lg:text-2xl text-white" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-lg sm:text-xl font-bold text-[#002147] mb-2">{achievement.title}</h3>
                    <p className="text-gray-600 text-sm sm:text-base">{achievement.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Biography */}
      <div className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#002147] mb-4">জীবন পরিক্রমা</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              একটি মহান জীবনের অসাধারণ যাত্রা - সাধারণ গ্রামের ছেলে থেকে জাতির জনক
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-[#002147] to-[#003366]"></div>

              {detailedBiography.slice(0, visibleBioItems).map((entry, index) => (
                <div key={index} className="relative flex gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 lg:mb-12 group">
                  {/* Timeline Dot */}
                  <div className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-[#002147] to-[#003366] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <FaCalendarAlt className="text-white text-sm sm:text-lg lg:text-xl" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-6 lg:pb-8">
                    <div className="bg-white rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 lg:mb-4 gap-2">
                        <h3 className="text-xl sm:text-2xl font-bold text-[#002147]">{entry.year}</h3>
                        <div className="text-base sm:text-lg font-semibold text-gray-800">{entry.title}</div>
                      </div>
                      <p className="text-gray-700 leading-relaxed text-justify text-sm sm:text-base">{entry.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            {visibleBioItems < detailedBiography.length && (
              <div className="text-center mt-8 lg:mt-12">
                <button
                  onClick={() => setVisibleBioItems((prev) => Math.min(prev + 8, detailedBiography.length))}
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#002147] to-[#003366] text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                >
                  আরও দেখুন
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Historic Speech Section */}
      <div className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#002147] to-[#003366] text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 50L60 40L50 30L40 40Z' fill='%23ffffff' fillOpacity='0.1'/%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 lg:mb-8">৭ই মার্চের অমর বাণী</h2>
            <p className="text-lg sm:text-xl text-blue-200 mb-8 lg:mb-12">ইতিহাসের সবচেয়ে প্রভাবশালী ভাষণগুলোর একটি</p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 border border-white/20">
              <FaQuoteLeft className="text-3xl sm:text-4xl lg:text-5xl text-blue-300 mx-auto mb-6 lg:mb-8" />
              <blockquote className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-medium leading-relaxed mb-6 lg:mb-8 italic">
                "রক্ত যখন দিয়েছি রক্ত আরও দেবো। এদেশের মানুষকে মুক্ত করে ছাড়বো ইনশাআল্লাহ্। প্রত্যেকে ঘরে ঘরে দুর্গ গড়ে তোল। যার যা কিছু
                আছে তাই নিয়ে মোকাবেলা করতে হবে।"
              </blockquote>
              <div className="text-blue-200 text-base sm:text-lg">
                <strong>৭ মার্চ ১৯৭১</strong> • রেসকোর্স ময়দান, ঢাকা
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Memorial Section */}
      <div className="py-12 sm:py-16 lg:py-20 bg-[#001122] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 lg:mb-8">অমর স্মৃতি</h2>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 lg:mb-12">
              ১৯৭৫ সালের ১৫ আগস্ট জাতির জনক বঙ্গবন্ধু শেখ মুজিবুর রহমান সপরিবারে শাহাদাত বরণ করেন। তাঁর আত্মত্যাগ ও নেতৃত্বে আমরা পেয়েছি
              স্বাধীন বাংলাদেশ।
            </p>

            <div className="bg-[#002147]/30 border-2 border-[#004488] rounded-xl lg:rounded-2xl p-6 lg:p-8 mb-8 lg:mb-12">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-blue-300">জাতীয় শোক দিবস</h3>
              <p className="text-blue-200 text-base sm:text-lg">
                ১৫ আগস্ট - বাঙালি জাতির জীবনে একটি কলঙ্কময় দিন। এই দিবসটি জাতীয় শোক দিবস হিসেবে বাঙালি জাতি পালন করে।
              </p>
            </div>

            <div className="text-gray-400 text-xs sm:text-sm border-t border-gray-700 pt-6 lg:pt-8">
              <p>
                সূত্র: জাতির জনক বঙ্গবন্ধু শেখ মুজিবুর রহমান মেমোরিয়াল ট্রাস্ট
                <br />
                রাস্তা-৩২, ধানমন্ডি আবাসিক এলাকা, ঢাকা-১২০৯
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
