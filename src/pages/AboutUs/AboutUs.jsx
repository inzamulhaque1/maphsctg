/* eslint-disable no-unused-vars */
"use client"

import { useState, useEffect } from "react"
import {
  FaSchool,
  FaHistory,
  FaUsers,
  FaAward,
  FaCalendarAlt,
  FaGraduationCap,
  FaBookOpen,
  FaTrophy,
  FaHeart,
  FaStar,
  FaChalkboardTeacher,
  FaFlask,
  FaFootballBall,
  FaMusic,
  FaPalette,
  FaLightbulb,
  FaCrown,
  FaGem,
  FaRocket,
  FaEye,
  FaArrowUp,
  FaQuoteLeft,
  FaBuilding,
  FaTree,
  FaMedal,
  FaBook,
  FaUniversity,
} from "react-icons/fa"

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState({})
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [activeStory, setActiveStory] = useState(0)
  
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll("[id]").forEach((el) => observer.observe(el))
    window.addEventListener("scroll", handleScroll)

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const founders = [
    {
      name: "গগন চন্দ্র বড়ুয়া",
      role: "প্রধান প্রতিষ্ঠাতা",
      designation: "ডেপুটি ইন্সপেক্টর অব স্কুল, রাঙ্গাঁমাটি",
      contribution: "বিদ্যালয়ের মূল পরিকল্পনাকারী ও প্রতিষ্ঠাতা। তাঁর দূরদর্শিতা ও নিরলস প্রচেষ্টায় গড়ে উঠেছে এই মহান শিক্ষা প্রতিষ্ঠান।",
      icon: FaCrown,
      color: "bg-[#002147]",
    },
    {
      name: "দক্ষিনা রঞ্জন মুৎসুদ্দী",
      role: "প্রতিষ্ঠাতা সদস্য",
      designation: "ডিস্ট্রিক ইঞ্জিনিয়ার",
      contribution: "প্রাথমিক অবকাঠামো উন্নয়নে অবদান রেখেছেন। তাঁর প্রকৌশল জ্ঞান দিয়ে বিদ্যালয়ের ভবন নির্মাণে সহায়তা করেছেন।",
      icon: FaBuilding,
      color: "bg-[#002147]",
    },
    {
      name: "মোহন চন্দ্র বড়ুয়া",
      role: "প্রথম শিক্ষক",
      designation: "প্রধান শিক্ষক",
      contribution: "শিক্ষা কার্যক্রমের সূচনাকারী। প্রথম ছাত্র যতীন্দ্রলাল বড়ুয়াকে নিয়ে শুরু করেছিলেন শিক্ষা কার্যক্রম।",
      icon: FaChalkboardTeacher,
     color: "bg-[#002147]",
    },
    {
      name: "অধর লাল বড়ুয়া",
      role: "সেক্রেটারী",
      designation: "সাব রেজিষ্ট্রার",
      contribution: "প্রশাসনিক কাঠামো প্রতিষ্ঠাতা। বিদ্যালয়ের প্রাথমিক নিয়ম-কানুন ও ব্যবস্থাপনা গড়ে তুলেছেন।",
      icon: FaBookOpen,
      color: "bg-[#002147]",
    },
  ]

  const historicalStories = [
    {
      period: "প্রতিষ্ঠার সূচনা (১৯০২-১৯০৫)",
      title: "একটি স্বপ্নের জন্মকথা",
      story:
        "১৯০২ খৃষ্টাব্দের শেষভাগে পাহাড়তলী মডেল স্কুলের প্রধান পন্ডিত মহিমচন্দ্র গুহ মহোদয় ২৫ বৎসর চাকুরীর পর অবসর গ্রহণের সময় তাঁর ছাত্রবৃন্দ একটি বিদায় সভার আয়োজন করেন। সেই সভায়ই জন্ম নেয় পাহাড়তলী গ্রামে একটি উচ্চ ইংরেজী বিদ্যালয় স্থাপনের স্বপ্ন। ১৯০৫ খৃষ্টাব্দের এপ্রিল মাসে বাবু মোহনচন্দ্র বড়ুয়া প্রথম ছাত্র যতীন্দ্রলাল বড়ুয়াকে নিয়ে শুরু করেন এই মহান যাত্রা。",
      icon: FaRocket,
      image: "https://dainikpurbokone.net/wp-content/uploads/2023/02/Pahartoli-mohamini-school.jpg",
    },
    {
      period: "স্বীকৃতি ও প্রতিষ্ঠা (১৯০৫-১৯১০)",
      title: "কলিকাতা বিশ্ববিদ্যালয়ের স্বীকৃতি",
      story:
        "১৯০৯ খৃষ্টাব্দে কলিকাতা বিশ্ববিদ্যালয় কর্তৃক স্কুলটি হাইস্কুল হিসেবে স্বীকৃতি পায়। এটি ছিল স্কুলের ইতিহাসে একটি মাইলফলক। দুর্ভাগ্যবশত, এই সুখবর পাওয়ার আগেই প্রতিষ্ঠাতা গগন চন্দ্র বড়ুয়া মহাশয় পরলোকগমন করেন। তবে তাঁর স্বপ্ন বাস্তবায়নের পথে এগিয়ে চলে বিদ্যালয়।",
      icon: FaUniversity,
      image: "https://scontent.fdac27-2.fna.fbcdn.net/v/t1.6435-9/153460620_261854982228836_8544757983958582226_n.jpg?_nc_cat=102&cb=99be929b-7bdcbe47&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEww1teIBP1xbADUfih0m9z4UMPz9-jT4ThQw_P36NPhEG8WxWxk6vC89aGVqHCHVcxnldGhdSYGQvWCbJxrqBq&_nc_ohc=ajLb5Jmt5ukQ7kNvwE1Ggm0&_nc_oc=Adlh_J-pcJnfk14dcyMDUfG9tI87MrQZoOuqaG1qM0_cxOFU9OySF4xVP3hsk-6xO1Y&_nc_zt=23&_nc_ht=scontent.fdac27-2.fna&_nc_gid=oODFRkjyHpZKT5acTXVQ_Q&oh=00_AfVi4F7v27CmA7vYGjpMGEbtwIbXJSVteJ_DHCm6Roj_mg&oe=68DD1EAA",
    },
    {
      period: "উন্নতির দশক (১৯১০-১৯২০)",
      title: "আত্মনির্ভরশীলতার পথে",
      story:
        "১৯১০ খৃষ্টাব্দের পর হইতে স্কুল আত্মনির্ভরশীল হইয়া চলিয়া আসিয়াছে। 一九二০ খৃষ্টাব্দের এপ্রিল মাসে এই স্কুলের জন্য গভর্নমেন্ট হইতে মাসিক ৭৫ টাকা করিয়া সাহায্য মঞ্জুর হইয়াছে। পরবর্তীতে এই সাহায্য ১০০ টাকায় উন্নীত করা হয়। এই সময়ে বিদ্যালয়ে ছাত্র সংখ্যা ক্রমাগত বৃদ্ধি পেতে থাকে।",
      icon: FaTrophy,
      image: "https://scontent.fdac27-2.fna.fbcdn.net/v/t1.6435-9/155058817_3872306612833312_8393134991701854190_n.jpg?_nc_cat=102&cb=99be929b-7bdcbe47&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHPPo0EVLVpKYUaIx49CkcfleK6pIkNSoiV4rqkiQ1KiPnfIkn8PCzTin467zUbdMZMhlHzpzF7pZFIb-0Xrx29&_nc_ohc=MqKQNdagxeEQ7kNvwGw9YBw&_nc_oc=AdnP04ltPiL6jwkclE1wHIZHpC4ZA3Yw-hfz1SWOTOCjrVUEcyMljG48-fAhumgluGs&_nc_zt=23&_nc_ht=scontent.fdac27-2.fna&_nc_gid=gNX6eq5rekKeLw3BTlH2nQ&oh=00_AfXD3v-TQPuLP0m6v3bKZsLJw31GFrhjLQaa7F1jTpT7Eg&oe=68DD3DF2",
    },
    {
      period: "চ্যালেঞ্জ ও পুনর্গঠন (১৯৪০-১৯৫০)",
      title: "প্রলয়ংকরী বন্যা ও পুনর্গঠন",
      story:
        "১৯৪৬ ইং সনের প্রলयংকরী বন্যায় স্কুলের পশ্চিমের দালান সম্পূর্ণ বিধ্বস্ত হয়। এই দুর্যোগের মুখে স্থানীয় জনগণের সহযোগিতায় এবং শিক্ষানুরাগীদের প্রচেষ্টায় স্কুল পুনরায় গড়ে ওঠে। এই ঘটনা প্রমাণ করে যে সমাজের সাথে বিদ্যালয়ের কতটা গভীর সম্পর্ক।",
      icon: FaTree,
      image: "https://scontent.fdac27-2.fna.fbcdn.net/v/t1.6435-9/155058817_3872306612833312_8393134991701854190_n.jpg?_nc_cat=102&cb=99be929b-7bdcbe47&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHPPo0EVLVpKYUaIx49CkcfleK6pIkNSoiV4rqkiQ1KiPnfIkn8PCzTin467zUbdMZMhlHzpzF7pZFIb-0Xrx29&_nc_ohc=MqKQNdagxeEQ7kNvwGw9YBw&_nc_oc=AdnP04ltPiL6jwkclE1wHIZHpC4ZA3Yw-hfz1SWOTOCjrVUEcyMljG48-fAhumgluGs&_nc_zt=23&_nc_ht=scontent.fdac27-2.fna&_nc_gid=gNX6eq5rekKeLw3BTlH2nQ&oh=00_AfXD3v-TQPuLP0m6v3bKZsLJw31GFrhjLQaa7F1jTpT7Eg&oe=68DD3DF2",
    },
    {
      period: "হীরক জয়ন্তী (১৯৬২)",
      title: "৬০ বছরের গৌরবময় উদযাপন",
      story:
        "১৯৬২ ইং সনে বিদ্যালয়ের ৬০ বৎসর পূর্তি উদযাপন করা হয়। তদানীন্তন মাননীয় শিক্ষামন্ত্রী জনাব ফজলুল কাদের চৌधুরী অনুষ্ঠানে প্রধান অতিথি ছিলেন। এই উৎসবে সারা দেশ থেকে শিক্ষাবিদ ও প্রাক্তন ছাত্রদের উপস্থিতি ছিল চোখে পড়ার মতো।",
      icon: FaGem,
      image: "https://scontent.fdac27-2.fna.fbcdn.net/v/t1.6435-9/155058817_3872306612833312_8393134991701854190_n.jpg?_nc_cat=102&cb=99be929b-7bdcbe47&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHPPo0EVLVpKYUaIx49CkcfleK6pIkNSoiV4rqkiQ1KiPnfIkn8PCzTin467zUbdMZMhlHzpzF7pZFIb-0Xrx29&_nc_ohc=MqKQNdagxeEQ7kNvwGw9YBw&_nc_oc=AdnP04ltPiL6jwkclE1wHIZHpC4ZA3Yw-hfz1SWOTOCjrVUEcyMljG48-fAhumgluGs&_nc_zt=23&_nc_ht=scontent.fdac27-2.fna&_nc_gid=gNX6eq5rekKeLw3BTlH2nQ&oh=00_AfXD3v-TQPuLP0m6v3bKZsLJw31GFrhjLQaa7F1jTpT7Eg&oe=68DD3DF2",
    },
    {
      period: "শতবর্ষ পূর্তি (২০০২-২০০৪)",
      title: "একশত বছরের মাইলফলক",
      story:
        "২০০৪ সালের ২০ ও ২১ ফেব্রুয়ারী ২ দিন ব্যাপী বিদ্যালয়ের শতবর্ষপূর্তি উৎসব উদযাপিত হয়। এই উপলক্ষে বিদ্যালয়ের ব্যাপক উন্নয়ন কাজ সম্পন্ন করা হয়। নতুন ভবন নির্মাণ, আধুনিক সুবিধা সংযোজন এবং ক্যাম্পাস সৌন্দর্যবর্ধনের কাজ করা হয়।",
      icon: FaCrown,
      image: "https://scontent.fdac27-2.fna.fbcdn.net/v/t1.6435-9/155058817_3872306612833312_8393134991701854190_n.jpg?_nc_cat=102&cb=99be929b-7bdcbe47&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHPPo0EVLVpKYUaIx49CkcfleK6pIkNSoiV4rqkiQ1KiPnfIkn8PCzTin467zUbdMZMhlHzpzF7pZFIb-0Xrx29&_nc_ohc=MqKQNdagxeEQ7kNvwGw9YBw&_nc_oc=AdnP04ltPiL6jwkclE1wHIZHpC4ZA3Yw-hfz1SWOTOCjrVUEcyMljG48-fAhumgluGs&_nc_zt=23&_nc_ht=scontent.fdac27-2.fna&_nc_gid=gNX6eq5rekKeLw3BTlH2nQ&oh=00_AfXD3v-TQPuLP0m6v3bKZsLJw31GFrhjLQaa7F1jTpT7Eg&oe=68DD3DF2",
    },
  ]

  const notableDonors = [
    {
      name: "লায়ন রূপম কিশোর বড়ুয়া",
      category: "প্রধান দাতা",
      contribution: "বিদ্যালয়ের অবকাঠামো উন্নয়নে বিশেষ অবদান",
      icon: FaHeart,
      amount: "৫০,০০০+ টাকা",
    },
    {
      name: "আলহাজ্ব মোঃ নাজিম উদ্দীন",
      category: "শিক্ষানুরাগী",
      contribution: "ছাত্রবৃত্তি ও শিক্ষা উপকরণ প্রদান",
      icon: FaStar,
      amount: "৩০,০০০+ টাকা",
    },
    {
      name: "বেগম শামীম আক্তার",
      category: "সমাজসেবী",
      contribution: "দরিদ্র ছাত্রদের শিক্ষা সহায়তা",
      icon: FaHeart,
      amount: "২৫,০০০+ টাকা",
    },
    {
      name: "মোঃ আবুল কালাম",
      category: "শিক্ষা পৃষ্ঠপোষক",
      contribution: "গ্রন্থাগার ও বই সংগ্রহে অবদান",
      icon: FaBook,
      amount: "২০,০০০+ টাকা",
    },
    {
      name: "মোঃ এস.এম শফি",
      category: "উন্নয়ন সহায়ক",
      contribution: "খেলাধুলা ও সাংস্কৃতিক কার্যক্রমে সহায়তা",
      icon: FaRocket,
      amount: "১৮,০００+ টাকা",
    },
    {
      name: "মোঃ আসলাম চৌধুরী",
      category: "অবকাঠামো দাতা",
      contribution: "শ্রেণীকক্ষ ও আসবাবপত্র প্রদান",
      icon: FaBuilding,
      amount: "১৫,০০০+ টাকা",
    },
  ]

  const achievements = [
    {
      title: "১৩৯ জন মেট্রিক পাস",
      description: "২০১২ সাল পর্যন্ত মোট ১৩৯ জন ছাত্র মেট্রিক পরীক্ষায় উত্তীর্ণ",
      icon: FaGraduationCap,
      number: "১৩৯",
    },
    {
      title: "১২০+ বছরের ঐতিহ্য",
      description: "অবিচ্ছিন্ন শিক্ষা সেবায় দীর্ঘ ইতিহাস",
      icon: FaTrophy,
      number: "১২০+",
    },
    {
      title: "১৭০০+ বর্তমান ছাত্র",
      description: "বর্তমানে প্রায় ১৭০০ ছাত্র-ছাত্রী অধ্যয়নরত",
      icon: FaUsers,
      number: "১৭০০+",
    },
    {
      title: "৫০+ শিক্ষক",
      description: "অভিজ্ঞ ও দক্ষ শিক্ষকমণ্ডলী",
      icon: FaChalkboardTeacher,
      number: "৫০+",
    },
  ]

  const facilities = [
    { name: "আধুনিক শ্রেণীকক্ষ", icon: FaChalkboardTeacher, desc: "সুসজ্জিত ও আলো-বাতাসপূর্ণ" },
    { name: "বিজ্ঞানাগার", icon: FaFlask, desc: "পদার্থ, রসায়ন ও জীববিজ্ঞান ল্যাব" },
    { name: "গ্রন্থাগার", icon: FaBookOpen, desc: "হাজারো বইয়ের সমাহার" },
    { name: "খেলার মাঠ", icon: FaFootballBall, desc: "ফুটবল, ক্রিকেট ও অন্যান্য খেলা" },
    { name: "কম্পিউটার ল্যাব", icon: FaLightbulb, desc: "আধুনিক প্রযুক্তি শিক্ষা" },
    { name: "অডিটোরিয়াম", icon: FaMusic, desc: "সাংস্কৃতিক অনুষ্ঠানের মঞ্চ" },
    { name: "শিল্প কক্ষ", icon: FaPalette, desc: "চিত্রকলা ও হস্তশিল্প" },
    { name: "ক্যান্টিন", icon: FaHeart, desc: "স্বাস্থ্যকর খাবারের ব্যবস্থা" },
  ]

  return (
    <div className="min-h-screen bg-white relative">
      <div className="relative bg-[#002147] text-white py-16 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white opacity-20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 font-bangla3">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="transform hover:scale-105 transition-transform duration-500 mb-6 lg:hidden">
                <img
                  src="https://maphsctg.edu.bd/images/details/1554889205.jpg"
                  alt="মহামুনি এংলো-পালি উচ্চ বিদ্যালয়"
                  className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full border-4 border-white shadow-2xl object-cover"
                />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-balance leading-tight font-bangla2">
                মহামুনি এংলো-পালি
                <br />
                <span className="text-yellow-300">উচ্চ বিদ্যালয়</span>
              </h1>
              <div className="flex items-center justify-center lg:justify-start space-x-3 md:space-x-4 mb-4 md:mb-6">
                <FaCalendarAlt className="text-xl md:text-2xl text-yellow-300" />
                <p className="text-lg md:text-xl font-semibold">প্রতিষ্ঠা: ১৯০২ ইংরেজী</p>
              </div>
              <p className="text-lg md:text-xl opacity-90 mb-6 md:mb-8 text-pretty">শিক্ষার আলোয় আলোকিত করে চলেছে ১২০+ বছর ধরে</p>
              <div className="flex flex-wrap gap-3 md:gap-4 justify-center lg:justify-start font-bangla2">
                <div className="bg-white text-[#002147] bg-opacity-10 backdrop-blur-sm rounded-full px-4 py-2 md:px-6 md:py-3">
                  <span className="text-xl md:text-2xl font-bold">১২০+</span>
                  <span className="text-xs md:text-sm block opacity-80">বছর ঐতিহ্য</span>
                </div>
                <div className="bg-white text-[#002147] bg-opacity-10 backdrop-blur-sm rounded-full px-4 py-2 md:px-6 md:py-3">
                  <span className="text-xl md:text-2xl font-bold">১৩৯</span>
                  <span className="text-xs md:text-sm block opacity-80">মেট্রিক পাস</span>
                </div>
                <div className="bg-white text-[#002147] bg-opacity-10 backdrop-blur-sm rounded-full px-4 py-2 md:px-6 md:py-3">
                  <span className="text-xl md:text-2xl font-bold">১৭০০+</span>
                  <span className="text-xs md:text-sm block opacity-80">বর্তমান ছাত্র</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="transform hover:scale-105 transition-transform duration-500">
                <img
                  src="https://maphsctg.edu.bd/images/details/1554889205.jpg"
                  alt="মহামুনি এংলো-পালি উচ্চ বিদ্যালয়"
                  className="h-[400px] md:h-[500px] mx-auto rounded-2xl border-4 border-white shadow-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="mission" className="py-10 md:py-14 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#002147] mb-6 md:mb-8 text-balance font-bangla1">আমাদের লক্ষ্য ও আদর্শ</h2>
          </div>

          <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl p-6 md:p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#002147] to-[#003366]"></div>
            <div className="relative z-10">
              <FaQuoteLeft className="text-4xl md:text-6xl text-[#002147] opacity-20 mb-4 md:mb-6" />
              <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-700 text-pretty mb-6 md:mb-8 font-medium">
                শিক্ষার্থীর সহজান গুণাবলী ও সামগ্রীক ব্যক্তিত্বের পরিপূর্ণ বিকাশ ঘটিয়ে তাদের ভাবীকালের সুনাগরিকে পরিণত করা। তাই এ মহান
                শিক্ষাংগনের উদ্দেশ্য হল মনন ও বুদ্ধি বৃত্তি বিকাশে অনুকল জীবনমুখী শিক্ষার মধ্য দিয়ে শিক্ষার্থীদের সমাজ জীবনে জ্ঞানের মূর্তিমান
                আদর্শ হিসেবে তৈরী ও প্রতিষ্ঠিত করা।
              </p>
              <div className="bg-gradient-to-r from-[#002147] to-[#003366] text-white p-4 md:p-6 rounded-xl md:rounded-2xl font-bangla1">
                <p className="text-base md:text-lg font-semibold text-center text-balance">
                  "সততা, নীতিবোধ, সমাজ চেতনা, হৃদয়, ধর্ম ও মানবতার চিরায়ত আদর্শের অনুস্মৃতি - এ বিদ্যায়তনের অভিপ্রেত আদর্শ।"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="founders" className="py-14 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#002147] mb-6 md:mb-8 text-balance font-bangla1">প্রতিষ্ঠাতা মহাপুরুষগণ</h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto text-pretty">
              যাঁদের দূরদর্শিতা, নিরলস প্রচেষ্টা ও আত্মত্যাগের মাধ্যমে গড়ে উঠেছে এই মহান শিক্ষা প্রতিষ্ঠান
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {founders.map((founder, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl p-6 md:p-8 hover:shadow-xl md:hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 md:hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
              >
                <div
                  className={`absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br ${founder.color} opacity-10 rounded-full -translate-y-12 md:-translate-y-16 translate-x-12 md:translate-x-16`}
                ></div>
                <div className="relative z-10">
                  <div className="flex items-start space-x-4 md:space-x-6">
                    <div
                      className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${founder.color} rounded-xl md:rounded-2xl flex items-center justify-center shadow-md md:shadow-lg group-hover:scale-105 md:group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                    >
                      <founder.icon className="text-xl md:text-2xl text-white" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl md:text-2xl font-bangla1 font-bold text-[#002147] mb-1 md:mb-2 text-balance group-hover:text-[#003366] transition-colors duration-300">
                        {founder.name}
                      </h3>
                      <div className="inline-block bg-gradient-to-r from-[#002147] to-[#003366] text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-2 md:mb-3">
                        {founder.role}
                      </div>
                      <p className="text-xs md:text-sm text-gray-600 mb-3 md:mb-4 font-medium">{founder.designation}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm md:text-base text-pretty leading-relaxed mt-3 md:mt-4">{founder.contribution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="history" className="py-14 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#002147] mb-6 md:mb-8 text-balance font-bangla1">ইতিহাসের গৌরবময় অধ্যায়</h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto text-pretty font-bangla2">
              ১২০ বছরের দীর্ঘ পথপরিক্রমায় রচিত হয়েছে অসংখ্য গৌরবগাথা ও অর্জনের কাহিনী
            </p>
          </div>

          <div className="grid gap-6 md:gap-8">
            {historicalStories.map((story, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl overflow-hidden hover:shadow-xl md:hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 md:hover:-translate-y-2 border border-gray-100 flex flex-col`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={story.image || "/placeholder.svg"}
                    alt={story.title}
                    className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4">
                    <div className="flex items-center space-x-2 md:space-x-3">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <story.icon className="text-[#002147] text-lg md:text-xl" />
                      </div>
                      <span className="text-white font-semibold text-xs md:text-sm">{story.period}</span>
                    </div>
                  </div>
                </div>
                <div className="p-5 md:p-6 lg:p-8 flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#002147] mb-3 md:mb-4 text-balance group-hover:text-[#003366] transition-colors duration-300">
                    {story.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-pretty text-sm md:text-base lg:text-lg">{story.story}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="achievements" className="py-14 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#002147] mb-6 md:mb-8 text-balance font-bangla1">গৌরবময় অর্জনসমূহ</h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto text-pretty">
              দীর্ঘ ১২০ বছরের পথচলায় অর্জিত সাফল্য ও কৃতিত্বের পরিসংখ্যান
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group text-center bg-gradient-to-br from-gray-50 to-white rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl p-4 md:p-6 hover:shadow-xl md:hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 md:hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-[#002147] to-[#003366] opacity-5 rounded-full -translate-y-8 md:-translate-y-12 translate-x-8 md:translate-x-12"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 md:w-20 md:h-20 bg-gradient-to-br from-[#002147] to-[#003366] rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-105 md:group-hover:scale-110 transition-transform duration-300 shadow-md md:shadow-lg">
                    <achievement.icon className="text-lg md:text-2xl text-white" />
                  </div>
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#002147] mb-1 md:mb-2">{achievement.number}</div>
                  <h3 className="text-sm md:text-base lg:text-xl font-bold text-[#002147] mb-2 md:mb-3 text-balance">{achievement.title}</h3>
                  <p className="text-gray-600 text-xs md:text-sm text-pretty leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="facilities" className="py-14 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#002147] mb-6 md:mb-8 text-balance font-bangla1">আধুনিক সুবিধাসমূহ</h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto text-pretty">
              শিক্ষার্থীদের সর্বোচ্চ মানের শিক্ষা প্রদানের জন্য রয়েছে অত্য়াাধুনিক সুবিধা
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl md:rounded-2xl shadow-md md:shadow-lg p-4 md:p-5 hover:shadow-lg md:hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#002147] to-[#003366] opacity-5 rounded-full -translate-y-6 md:-translate-y-8 translate-x-6 md:translate-x-8"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#002147] to-[#003366] rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:scale-105 md:group-hover:scale-110 transition-transform duration-300 shadow-md md:shadow-lg">
                    <facility.icon className="text-lg md:text-2xl text-white" />
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-[#002147] mb-1 md:mb-2 text-balance group-hover:text-[#003366] transition-colors duration-300">
                    {facility.name}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm text-pretty">{facility.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="donors" className="py-14 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#002147] mb-6 md:mb-8 text-balance font-bangla1">সম্মানিত দাতা সদস্যবৃন্দ</h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto text-pretty">
              যাঁদের উদার অনুদান ও নিঃস্বার্থ সেবায় সমৃদ্ধ হয়েছে এই প্রতিষ্ঠান
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
            {notableDonors.map((donor, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-gray-50 rounded-xl md:rounded-2xl shadow-md md:shadow-lg p-4 md:p-5 lg:p-6 hover:shadow-lg md:hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-14 h-14 md:w-20 md:h-20 bg-gradient-to-br from-[#002147] to-[#003366] opacity-5 rounded-full -translate-y-7 md:-translate-y-10 translate-x-7 md:translate-x-10"></div>
                <div className="relative z-10">
                  <div className="flex items-start space-x-3 md:space-x-4 mb-3 md:mb-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#002147] to-[#003366] rounded-lg md:rounded-xl flex items-center justify-center group-hover:scale-105 md:group-hover:scale-110 transition-transform duration-300 shadow-md md:shadow-lg flex-shrink-0">
                      <donor.icon className="text-white text-base md:text-xl" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-base md:text-lg font-bold text-[#002147] mb-1 text-balance group-hover:text-[#003366] transition-colors duration-300">
                        {donor.name}
                      </h3>
                      <div className="inline-block bg-gradient-to-r from-[#002147] to-[#003366] text-white px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-semibold">
                        {donor.category}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-xs md:text-sm text-pretty mb-2 md:mb-3 leading-relaxed">{donor.contribution}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#002147] font-bold text-xs md:text-sm">অনুদান:</span>
                    <span className="text-[#002147] font-bold text-sm md:text-base">{donor.amount}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="gallery" className="py-14 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#002147] mb-6 md:mb-8 text-balance font-bangla1">ক্যাম্পাস গ্যালারি</h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto text-pretty">
              আমাদের প্রতিষ্ঠানের বিভিন্ন সুবিধা, কার্যক্রম ও ঐতিহাসিক মুহূর্তের দৃশ্যাবলী
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
            {[
              {
                src: "https://maphsctg.edu.bd/images/details/1554889205.jpg",
                title: "ঐতিহাসিক প্রধান ভবন",
                desc: "১২০ বছরের পুরনো ঐতিহ্যবাহী স্থাপত্য",
              },
              {
                src: "https://maphsctg.edu.bd/images/details/1554889205.jpg",
                title: "আধুনিক শ্রেণীকক্ষ",
                desc: "সুসজ্জিত ও প্রযুক্তিসমৃদ্ধ শিক্ষা পরিবেশ",
              },
              {
                src: "https://maphsctg.edu.bd/images/details/1554889205.jpg",
                title: "বিজ্ঞানাগার",
                desc: "অত্যাধুনিক যন্ত্রপাতি ও পরীক্ষা-নিরীক্ষার সুবিধা",
              },
              {
                src: "https://maphsctg.edu.bd/images/details/1554889205.jpg",
                title: "বিস্তৃত খেলার মাঠ",
                desc: "ফুটবল, ক্রিকেট ও বিভিন্ন খেলাধুলার সুবিধা",
              },
              { src: "https://maphsctg.edu.bd/images/details/1554889205.jpg", title: "সমৃদ্ধ গ্রন্থাগার", desc: "হাজারো বই ও জ্ঞানের ভাণ্ডার" },
              {
                src: "https://maphsctg.edu.bd/images/details/1554889205.jpg",
                title: "প্রশস্ত অডিটোরিয়াম",
                desc: "সাংস্কৃতিক অনুষ্ঠান ও সভার আয়োজনের মঞ্চ",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl overflow-hidden hover:shadow-xl md:hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 md:hover:-translate-y-2 border border-gray-100"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.src || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-40 md:h-48 lg:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-3 left-3 right-3 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <h3 className="text-white font-bold text-sm md:text-base mb-1">{item.title}</h3>
                    <p className="text-white text-xs md:text-sm opacity-90">{item.desc}</p>
                  </div>
                </div>
                <div className="p-4 md:p-5 lg:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-[#002147] mb-1 md:mb-2 text-balance group-hover:text-[#003366] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base text-pretty leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#002147] to-[#003366] text-white rounded-full shadow-xl md:shadow-2xl hover:shadow-2xl md:hover:shadow-3xl transition-all duration-300 transform hover:scale-105 md:hover:scale-110 z-50 flex items-center justify-center"
        >
          <FaArrowUp className="text-lg md:text-xl" />
        </button>
      )}

      <style jsx>{`
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </div>
  )
}