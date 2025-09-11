import React, { useState } from "react";
import {
  FaArrowLeft,
  FaStar,
  FaCalendarAlt,
  FaQuoteLeft,
  FaFlag,
  FaCrown,
  FaGlobe,
} from "react-icons/fa";

const SubornoJoyontiCorner = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "https://maphsctg.edu.bd/image/jyonti.jpeg",
    "https://maphsctg.edu.bd/image/jyonti2.jpeg",
    "https://maphsctg.edu.bd/image/jyonti3.jpeg",
    "https://maphsctg.edu.bd/image/jyonti4.jpeg",
  ];

  const timeline = [
    {
      year: "১৯৭১",
      title: "স্বাধীনতা অর্জন",
      description: "২৬ মার্চ স্বাধীনতা ঘোষণা থেকে ১৬ ডিসেম্বর চূড়ান্ত বিজয়",
      details:
        "নয় মাসের সশস্ত্র মুক্তিযুদ্ধের মাধ্যমে পাকিস্তানের কাছ থেকে চূড়ান্ত বিজয় অর্জন। জন্ম হয় স্বাধীন সার্বভৌম বাংলাদেশের।",
    },
    {
      year: "১৯৯৬-২০০১",
      title: "প্রথম উন্নয়ন যাত্রা",
      description:
        "শেখ হাসিনার প্রথম প্রধানমন্ত্রিত্বকালে উন্নয়নের ভিত্তি স্থাপন",
      details:
        "খাদ্য নিরাপত্তা, শিক্ষা সম্প্রসারণ এবং পররাষ্ট্রনীতিতে গুরুত্বপূর্ণ অগ্রগতি সাধিত হয়।",
    },
    {
      year: "২০০৯-২০২৪",
      title: "ডিজিটাল বিপ্লব ও উন্নয়নের মহাযাত্রা",
      description: "রূপকল্প ২০২১ এবং ডিজিটাল বাংলাদেশ বাস্তবায়ন",
      details:
        "স্বল্পোন্নত দেশ থেকে উন্নয়নশীল দেশে উত্তরণ। পদ্মা সেতু, মেট্রো রেল, কর্ণফুলী টানেল নির্মাণসহ বিস্ময়কর উন্নয়ন।",
    },
    {
      year: "২০২১",
      title: "সুবর্ণ জয়ন্তী উদযাপন",
      description: "স্বাধীনতার ৫০ বছর ও বঙ্গবন্ধুর জন্মশতবার্ষিকী",
      details:
        "বিশ্বব্যাপী উদযাপন, দুবাইয়ের বুর্জ খলিফায় বঙ্গবন্ধুর ছবি প্রদর্শন। বিশ্ব নেতৃবৃন্দের সফর ও শুভেচ্ছা।",
    },
  ];

  const achievements = [
    {
      title: "অর্থনৈতিক অগ্রগতি",
      description: "জিডিপি বৃদ্ধি, দারিদ্র্য বিমোচন ও মাথাপিছু আয় বৃদ্ধি",
      icon: <FaStar className="text-yellow-500" />,
    },
    {
      title: "মেগা প্রকল্প",
      description:
        "পদ্মা সেতু, মেট্রো রেল, কর্ণফুলী টানেল, রূপপুর পারমাণবিক বিদ্যুৎ কেন্দ্র",
      icon: <FaCrown className="text-purple-500" />,
    },
    {
      title: "ডিজিটাল বাংলাদেশ",
      description:
        "ই-গভর্নেন্স, ডিজিটাল সেবা প্রদান ও তথ্যপ্রযুক্তির সম্প্রসারণ",
      icon: <FaGlobe className="text-blue-500" />,
    },
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <style jsx>{`
        .timeline-item {
          transition: all 0.3s ease;
        }

        .timeline-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 106, 78, 0.15);
        }

        .image-gallery img {
          transition: transform 0.3s ease;
        }

        .image-gallery img:hover {
          transform: scale(1.05);
        }

        .quote-box {
          background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
          border-left: 5px solid #006a4e;
        }

        .hero-section {
          background: linear-gradient(
            135deg,
            rgba(0, 106, 78, 0.1) 0%,
            rgba(220, 38, 127, 0.1) 100%
          );
        }

        .achievement-card {
          transition: all 0.3s ease;
        }

        .achievement-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0, 106, 78, 0.12);
        }
      `}</style>

      <div
        className="min-h-screen bg-gradient-to-br from-green-50 to-red-50 py-8 px-4 relative"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23006A4E' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E\")",
        }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col items-center mb-8">
            <div className="bg-white p-4 rounded-full shadow-lg mb-4 border-4 border-green-600">
              <img
                src="https://maphsctg.edu.bd/logo/1739418692logo2.png"
                alt="Mahamuni Anglo-Pali High School Logo"
                className="h-16"
              />
            </div>
            <h1 className="text-5xl font-bold text-green-800 mb-2 text-center">
              সুবর্ণ জয়ন্তী কর্নার
            </h1>
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="w-12 h-8 bg-green-600 rounded"></div>
              <div className="w-12 h-8 bg-red-600 rounded-full"></div>
            </div>
            <p className="text-gray-700 text-center text-lg max-w-3xl leading-relaxed">
              বাংলাদেশের স্বাধীনতার ৫০ বছর পূর্তি ও জাতির পিতা বঙ্গবন্ধু শেখ
              মুজিবুর রহমানের জন্মশতবার্ষিকী উদযাপন
            </p>
          </div>

          {/* Back Button */}
          <div className="mb-6">
            <button className="flex items-center px-6 py-3 bg-white text-gray-700 rounded-lg hover:bg-green-50 transition-all shadow-md border border-green-200">
              <FaArrowLeft className="mr-2" />
              Go Back
            </button>
          </div>

          {/* Hero Section */}
          <div className="hero-section bg-white rounded-xl shadow-lg p-8 mb-8 border border-green-200">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <FaFlag className="text-green-600 mr-3 text-2xl" />
                  <span className="text-green-800 font-bold text-xl">
                    স্বাধীনতার সুবর্ণ জয়ন্তী
                  </span>
                </div>
                <h2 className="text-4xl font-bold text-green-800 mb-4">
                  মুজিব চিরন্তন
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  ২৬ মার্চ ২০২১ থেকে ১৬ ডিসেম্বর ২০২১ পর্যন্ত বাংলাদেশ উদযাপন
                  করেছে স্বাধীনতার সুবর্ণ জয়ন্তী। একই সাথে পালিত হয়েছে জাতির
                  পিতা বঙ্গবন্ধু শেখ মুজিবুর রহমানের জন্মশতবার্ষিকী। এই উদযাপনে
                  বিশ্বের বিভিন্ন দেশের নেতৃবৃন্দ বাংলাদেশকে শুভেচ্ছা
                  জানিয়েছেন।
                </p>
                <div className="flex items-center space-x-8 text-sm text-gray-600">
                  <div className="flex items-center">
                    <FaCalendarAlt className="mr-2 text-green-600" />
                    স্বাধীনতা: ১৬ ডিসেম্বর ১৯৭১
                  </div>
                  <div className="flex items-center">
                    <FaStar className="mr-2 text-yellow-500" />
                    ৫০ বছরের সফল যাত্রা
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className=" p-2 rounded-xl inline-block">
                  <img
                    src="https://t4.ftcdn.net/jpg/03/21/70/45/360_F_321704592_azoD811yWmGtGixdjW2koEM1i4ZSksyA.jpg"
                    alt="বাংলাদেশের পতাকা"
                    className="object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                    
                  />
                </div>
                <p className="text-sm text-gray-600 mt-3 font-semibold">
                  স্বাধীন বাংলাদেশের পতাকা
                </p>
              </div>
            </div>
          </div>

          {/* Achievement Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="achievement-card bg-white rounded-xl shadow-lg p-6 border border-green-200"
              >
                <div className="flex items-center mb-4">
                  {achievement.icon}
                  <h3 className="text-xl font-bold text-green-800 ml-3">
                    {achievement.title}
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>

          {/* Timeline Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-green-200">
            <h3 className="text-3xl font-bold text-green-800 mb-8 flex items-center">
              <FaCalendarAlt className="mr-4" />
              উন্নয়নের মাইলফলক
            </h3>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className="timeline-item bg-green-50 p-6 rounded-xl border border-green-200"
                >
                  <div className="flex items-start space-x-6">
                    <div className="bg-green-600 text-white rounded-full px-6 py-3 font-bold text-xl flex-shrink-0 min-w-[80px] text-center">
                      {item.year}
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-2xl font-semibold text-green-800 mb-3">
                        {item.title}
                      </h4>
                      <p className="text-gray-800 font-medium mb-3 text-lg">
                        {item.description}
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        {item.details}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vision 2021 Quote */}
          <div className="quote-box rounded-xl p-8 mb-8 shadow-lg">
            <div className="flex items-start space-x-6">
              <FaQuoteLeft className="text-green-600 text-4xl flex-shrink-0 mt-2" />
              <div>
                <blockquote className="text-gray-800 text-xl leading-relaxed italic mb-6">
                  "২০০৮ সালের জাতীয় সংসদ নির্বাচনে আওয়ামী লীগের নির্বাচনী
                  ইস্তেহারের মধ্যে ২০২১ সালে স্বাধীনতার সুবর্ণ জয়ন্তীকে সামনে
                  রেখে 'রূপকল্প ২০২১' ঘোষণা করে, যেখানে ২০২১ সালের মধ্যেই
                  বাংলাদেশকে একটি উন্নয়নশীল, ডিজিটাল ও আধুনিক রাষ্ট্রে পরিণত
                  করার প্রত্যয় দেয়া হয়।"
                </blockquote>
                <cite className="text-green-800 font-bold text-lg">
                  — রূপকল্প ২০২১, আওয়ামী লীগ নির্বাচনী ইস্তেহার
                </cite>
              </div>
            </div>
          </div>

          {/* Photo Gallery */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-green-200">
            <h3 className="text-3xl font-bold text-green-800 mb-8">
              সুবর্ণ জয়ন্তীর চিত্রমালা
            </h3>
            <div className="image-gallery grid grid-cols-1 md:grid-cols-3 gap-8">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative group cursor-pointer"
                  onClick={() => openModal(image)}
                >
                  <img
                    src={image}
                    alt={`সুবর্ণ জয়ন্তী ${index + 1}`}
                    className="w-full h-64 object-cover rounded-xl shadow-md border border-green-200"
                  />
                  <div className="absolute inset-0 bg-green-600/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold bg-green-600/90 px-6 py-3 rounded-full text-lg">
                      বড় করে দেখুন
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* International Recognition */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-green-200">
            <h3 className="text-3xl font-bold text-green-800 mb-8">
              আন্তর্জাতিক স্বীকৃতি
            </h3>
            <div className="bg-blue-50 p-8 rounded-xl border-l-4 border-blue-600">
              <p className="text-gray-800 leading-relaxed text-lg mb-6">
                স্বাধীনতার সুবর্ণ জয়ন্তী ও জাতির পিতা বঙ্গবন্ধু শেখ মুজিবুর
                রহমানের জন্মবার্ষিকী উপলক্ষে আরব আমিরাতের দুবাইয়ে বিশ্বের
                সর্বোচ্চ ভবন বুর্জ আল খলিফায় ঘণ্টাব্যাপী বঙ্গবন্ধুর ছবি
                প্রদর্শন ও আলোকসজ্জার আয়োজন করা হয়েছে।
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-green-800 mb-3 text-lg">
                    সফরকারী রাষ্ট্রপ্রধানগণ:
                  </h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• ভারতের প্রধানমন্ত্রী নরেন্দ্র মোদি</li>
                    <li>• মালদ্বীপের প্রেসিডেন্ট ইব্রাহিম মোহাম্মদ সালেহ</li>
                    <li>• শ্রীলংকার প্রধানমন্ত্রী মাহেন্দ্র রাজাপাকসে</li>
                    <li>• নেপালের প্রেসিডেন্ট বিদ্যাদেবী ভান্ডারী</li>
                    <li>• ভুটানের প্রধানমন্ত্রী ড. লোটে শেরিং</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-green-800 mb-3 text-lg">
                    ভিডিও বার্তা প্রেরণকারী:
                  </h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• চীনের প্রেসিডেন্ট শি জিনপিং</li>
                    <li>• জাপানের প্রধানমন্ত্রী ইউশিহিদে সুগা</li>
                    <li>• কানাডার প্রধানমন্ত্রী জাস্টিন ট্রুডো</li>
                    <li>• পোপ ফ্রান্সিস</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Pope Francis Quote */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-green-200">
            <h3 className="text-3xl font-bold text-green-800 mb-8">
              পোপ ফ্রান্সিসের বার্তা
            </h3>
            <div className="bg-yellow-50 p-8 rounded-xl border-l-4 border-yellow-600">
              <p className="text-gray-800 leading-relaxed italic text-lg">
                "প্রাকৃতিক সৌন্দর্য এবং সাংস্কৃতিক ঐক্য, ভাষা নিয়ে সহাবস্থানে
                এক আধুনিক নাগরিকের দেশ বাংলাদেশ, যার আরেকটি পরিচয় সোনার বাংলা।
                এই সোনার বাংলার স্বপ্ন দেখেছিলেন বঙ্গবন্ধু শেখ মুজিবুর রহমান।"
              </p>
              <p className="text-right text-green-800 font-bold mt-6 text-lg">
                — পোপ ফ্রান্সিস
              </p>
            </div>
          </div>

          {/* Future Vision */}
          <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-xl shadow-lg p-8 mb-8 border border-green-300">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-green-800 mb-6">
                বিস্ময়ের বাংলাদেশ
              </h3>
              <p className="text-green-700 text-xl leading-relaxed max-w-5xl mx-auto mb-8">
                একাত্তরে স্বাধীনতার মহানায়ক বঙ্গবন্ধু শেখ মুজিবুর রহমানের
                নেতৃত্বে আমরা একটি স্বাধীন দেশ পেয়েছি, আর তারই সুযোগ্য কন্যা
                বর্তমান মাননীয় প্রধানমন্ত্রী দেশরত্ন শেখ হাসিনার নেতৃত্বে গড়ে
                তুলতে চলেছি ক্ষুধা-দারিদ্র্যমুক্ত, আধুনিক, মর্যাদাশীল জাতি ও
                সমৃদ্ধ বাংলাদেশ।
              </p>
              <div className="flex justify-center space-x-6">
                <div className="bg-white px-8 py-4 rounded-full shadow-lg border border-green-300">
                  <span className="text-green-800 font-bold text-lg">
                    স্বাধীনতা: ১৬ ডিসেম্বর ১৯৭১
                  </span>
                </div>
                <div className="bg-white px-8 py-4 rounded-full shadow-lg border border-green-300">
                  <span className="text-green-800 font-bold text-lg">
                    সুবর্ণ জয়ন্তী: ২০২১
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-sm text-gray-600 bg-white p-6 rounded-xl border border-green-200">
            <p className="mb-2 text-lg font-semibold text-green-800">
              স্বাধীনতার সুবর্ণ জয়ন্তীতে গভীর শ্রদ্ধা ও অভিনন্দন
            </p>
            <p>মহামুনি এংলো-পালি উচ্চ বিদ্যালয়, চট্টগ্রাম</p>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              className="absolute -top-12 right-0 text-white text-2xl z-50 bg-red-600 rounded-full p-2 hover:bg-red-700 transition-colors"
              onClick={closeModal}
            >
              <FaTimes />
            </button>
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-screen object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default SubornoJoyontiCorner;
