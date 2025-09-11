import React, { useState } from 'react';
import { FaArrowLeft, FaHeart, FaStar, FaCalendarAlt, FaQuoteLeft } from 'react-icons/fa';

const SheikhRusselCorner = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    'https://maphsctg.edu.bd/image/rasel2.jpeg',
    'https://maphsctg.edu.bd/image/rasel3.jpeg',
    'https://maphsctg.edu.bd/image/rasel.jpeg'
  ];

  const timeline = [
    {
      year: '১৯৬৪',
      title: 'জন্ম',
      description: '১৮ অক্টোবর ঢাকার ঐতিহাসিক বঙ্গবন্ধু ভবনে জন্ম গ্রহণ করেন',
      details: 'বঙ্গবন্ধু তাঁর প্রিয় লেখক খ্যাতিমান দার্শনিক ও নোবেল বিজয়ী ব্যক্তিত্ব বার্ট্রান্ড রাসেলের নামানুসারে পরিবারের নতুন সদস্যের নাম রাখেন \'রাসেল\'।'
    },
    {
      year: '১৯৬৭',
      title: 'কারাগারে সাক্ষাৎ',
      description: 'মাত্র তিন বছর বয়সে পিতার সঙ্গে কারাগারে সাক্ষাৎ',
      details: 'কারাগারের রোজনামচায় বঙ্গবন্ধু লিখেছেন রাসেলের কথা। ছোট রাসেল তার মাকে \'আব্বা\' বলে ডাকতেন।'
    },
    {
      year: '১৯৭১',
      title: 'বন্দী জীবন ও মুক্তি',
      description: 'মুক্তিযুদ্ধকালে পরিবারের সাথে বন্দী ছিলেন',
      details: '১৭ ডিসেম্বর \'জয় বাংলা\' বলে ঘর থেকে বেরিয়ে এসেছিলেন। বাইরে তখন চলছিল বিজয়-উৎসব।'
    },
    {
      year: '১৯৭৫',
      title: 'শাহাদত',
      description: '১৫ আগস্ট কালরাতে সপরিবারে শহীদ হন',
      details: 'তখন রাসেল ইউনিভার্সিটি ল্যাবরেটরি স্কুলের চতুর্থ শ্রেণির ছাত্র ছিলেন।'
    }
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
          box-shadow: 0 10px 30px rgba(0, 33, 71, 0.15);
        }
        
        .image-gallery img {
          transition: transform 0.3s ease;
        }
        
        .image-gallery img:hover {
          transform: scale(1.05);
        }
        
        .quote-box {
          background: linear-gradient(135deg, #f5f2ea 0%, #e8e1d3 100%);
          border-left: 5px solid #002147;
        }
        
        .hero-section {
          background: linear-gradient(135deg, rgba(0, 33, 71, 0.1) 0%, rgba(212, 201, 168, 0.1) 100%);
        }
      `}</style>

      <div className="min-h-screen bg-[#f5f2ea] py-8 px-4 relative" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23d4c9a8\' fill-opacity=\'0.2\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")' }}>
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col items-center mb-8">
            <div className="bg-white p-3 rounded-full shadow-md mb-4 border border-amber-100">
              <img 
                src="https://maphsctg.edu.bd/logo/1739418692logo2.png" 
                alt="Mahamuni Anglo-Pali High School Logo" 
                className="h-16"
              />
            </div>
            <h1 className="text-4xl font-bold text-[#002147] mb-2">শেখ রাসেল কর্ণার</h1>
            <p className="text-[#2c3e50] text-center max-w-2xl">
              জাতির পিতা বঙ্গবন্ধু শেখ মুজিবুর রহমানের কনিষ্ঠ পুত্র ও বাংলাদেশের অবিনাশী স্মৃতি
            </p>
          </div>

          {/* Back Button */}
          <div className="mb-6">
            <button className="flex items-center px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-amber-50 transition-all shadow-sm border border-amber-100">
              <FaArrowLeft className="mr-2" />
              Go Back
            </button>
          </div>

          {/* Hero Section */}
          <div className="hero-section bg-white rounded-lg shadow-md p-8 mb-8 border border-amber-100">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <FaHeart className="text-red-500 mr-2" />
                  <span className="text-[#002147] font-semibold">জাতির কনিষ্ঠ সন্তান</span>
                </div>
                <h2 className="text-3xl font-bold text-[#002147] mb-4">শেখ রাসেল</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  জাতির পিতা বঙ্গবন্ধু শেখ মুজিবুর রহমানের কনিষ্ঠ পুত্র শেখ রাসেল ১৯৬৪ সালের ১৮ অক্টোবর ঢাকায় ঐতিহাসিক বঙ্গবন্ধু ভবনে জন্ম গ্রহণ করেন। বঙ্গবন্ধু তাঁর প্রিয় লেখক খ্যাতিমান দার্শনিক ও নোবেল বিজয়ী ব্যক্তিত্ব বার্ট্রান্ড রাসেলের নামানুসারে পরিবারের নতুন সদস্যের নাম রাখেন 'রাসেল'।
                </p>
                <div className="flex items-center space-x-6 text-sm text-gray-600">
                  <div className="flex items-center">
                    <FaCalendarAlt className="mr-1 text-[#002147]" />
                    জন্ম: ১৮ অক্টোবর ১৯৬৪
                  </div>
                  <div className="flex items-center">
                    <FaStar className="mr-1 text-amber-500" />
                    বয়স: ১০ বছর ১০ মাস
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-[#002147] to-blue-600 p-1 rounded-lg inline-block">
                  <img 
                    src="https://maphsctg.edu.bd/image/rasel.jpeg" 
                    alt="শেখ রাসেল" 
                    className="w-64 h-80 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => openModal('https://maphsctg.edu.bd/image/rasel.jpeg')}
                  />
                </div>
                <p className="text-sm text-gray-600 mt-2">শেখ রাসেল (১৯৬৪-১৯৭৫)</p>
              </div>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8 border border-amber-100">
            <h3 className="text-2xl font-bold text-[#002147] mb-6 flex items-center">
              <FaCalendarAlt className="mr-3" />
              জীবন পরিক্রমা
            </h3>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="timeline-item bg-amber-50 p-6 rounded-lg border border-amber-200">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#002147] text-white rounded-full px-4 py-2 font-bold text-lg flex-shrink-0">
                      {item.year}
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-xl font-semibold text-[#002147] mb-2">{item.title}</h4>
                      <p className="text-gray-700 font-medium mb-2">{item.description}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.details}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quote Section - Sheikh Hasina's Memory */}
          <div className="quote-box rounded-lg p-6 mb-8 shadow-md">
            <div className="flex items-start space-x-4">
              <FaQuoteLeft className="text-[#002147] text-3xl flex-shrink-0 mt-2" />
              <div>
                <blockquote className="text-gray-800 text-lg leading-relaxed italic mb-4">
                  "রাসেলের জন্মের আগের মুহূর্তগুলো ছিল ভীষণ উৎকণ্ঠার। আমি, কামাল, জামাল, রেহানা ও খোকা চাচা বাসায়। বড় ফুফু ও মেজো ফুফু মার সাথে। একজন ডাক্তার ও নার্সও এসেছেন। সময় যেন আর কাটে না। জামাল আর রেহানা কিছুক্ষণ ঘুমায় আবার জেগে ওঠে। আমরা ঘুমে ঢুলুঢুলু চোখে জেগে আছি নতুন অতিথির আগমন বার্তা শোনার অপেক্ষায়। মেজো ফুফু ঘর থেকে বের হয়ে এসে খবর দিলেন আমাদের ভাই হয়েছে। খুশিতে আমরা আত্মহারা। কতক্ষণে দেখব। ফুফু বললেন, তিনি ডাকবেন। কিছুক্ষণ পর ডাক এলো। বড় ফুফু আমার কোলে তুলে দিলেন রাসেলকে। মাথাভরা ঘন কালো চুল। তুলতুলে নরম গাল। বেশ বড় সড় হয়েছিল রাসেল।"
                </blockquote>
                <cite className="text-[#002147] font-semibold">
                  — শেখ হাসিনা, 'আমাদের ছোট রাসেল সোনা'
                </cite>
              </div>
            </div>
          </div>

          {/* Photo Gallery */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8 border border-amber-100">
            <h3 className="text-2xl font-bold text-[#002147] mb-6">স্মৃতির ছবি</h3>
            <div className="image-gallery grid grid-cols-1 md:grid-cols-3 gap-6">
              {images.map((image, index) => (
                <div key={index} className="relative group cursor-pointer" onClick={() => openModal(image)}>
                  <img 
                    src={image} 
                    alt={`শেখ রাসেল ${index + 1}`}
                    className="w-full h-64 object-cover rounded-lg shadow-md border border-amber-200"
                  />
                  <div className="absolute inset-0 bg-[#002147]/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                    <span className="text-white font-semibold bg-[#002147]/80 px-4 py-2 rounded-full">
                      বড় করে দেখুন
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prison Diary Quote */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8 border border-amber-100">
            <h3 className="text-2xl font-bold text-[#002147] mb-6">কারাগারের রোজনামচা থেকে</h3>
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-[#002147]">
              <p className="text-gray-800 leading-relaxed italic">
                "জেল গেটে যখন উপস্থিত হলাম ছোট ছেলেটা আজ আর বাইরে এসে দাঁড়াইয়া নাই দেখে আশ্চর্যই হলাম। আমি যখন রুমের ভিতর যেয়ে ওকে কোলে করলাম আমার গলা ধরে 'আব্বা' 'আব্বা' করে কয়েকবার ডাক দিয়ে ওর মার কোলে যেয়ে 'আব্বা' 'আব্বা' করে ডাকতে শুরু করল। ওর মাকে 'আব্বা' বলে। আমি জিজ্ঞাসা করলাম, 'ব্যাপার কি?' ওর মা বলল, 'বাড়িতে 'আব্বা' 'আব্বা' করে কাঁদে তাই ওকে বলেছি আমাকে 'আব্বা' বলে ডাকতে।' রাসেল 'আব্বা' 'আব্বা' বলে ডাকতে লাগল। যেই আমি জবাব দেই সেই ওর মার গলা ধরে বলে, 'তুমি আমার আব্বা।' আমার উপর অভিমান করেছে বলে মনে হয়। এখন আর বিদায়ের সময় আমাকে নিয়ে যেতে চায় না।"
              </p>
              <p className="text-right text-[#002147] font-semibold mt-4">
                — বঙ্গবন্ধু শেখ মুজিবুর রহমান (১৪-১৫ এপ্রিল ১৯৬৭)
              </p>
            </div>
          </div>

          {/* Memorial Section */}
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg shadow-md p-8 mb-8 border border-red-200">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-red-800 mb-4">শহীদ শেখ রাসেল</h3>
              <p className="text-red-700 text-lg leading-relaxed max-w-4xl mx-auto">
                ১৯৭৫ সালের ১৫ আগস্ট কালরাতে দেশি-বিদেশি চক্রান্তে পরিবারের সদস্যদের সাথে শেখ রাসেলকেও হত্যা করা হয়। তখন রাসেল ইউনিভার্সিটি ল্যাবরেটরি স্কুলের চতুর্থ শ্রেণির ছাত্র ছিলেন। মাত্র ১০ বছর ১০ মাস ২৮ দিন বয়সে এই নিষ্পাপ শিশুটি শাহাদতবরণ করেন।
              </p>
              <div className="mt-6 flex justify-center space-x-4">
                <div className="bg-white px-6 py-3 rounded-full shadow-md border border-red-200">
                  <span className="text-red-800 font-semibold">জন্ম: ১৮ অক্টোবর ১৯৬৪</span>
                </div>
                <div className="bg-white px-6 py-3 rounded-full shadow-md border border-red-200">
                  <span className="text-red-800 font-semibold">শাহাদত: ১৫ আগস্ট ১৯৭৫</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-sm text-gray-600 bg-white p-4 rounded-lg border border-amber-100">
            <p className="mb-2">শেখ রাসেলের স্মৃতির প্রতি গভীর শ্রদ্ধা ও ভালোবাসা</p>
            <p>© ২০২৪ মহামুনি এংলো-পালি উচ্চ বিদ্যালয়। সকল অধিকার সংরক্ষিত।</p>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white rounded-full p-3 z-10 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedImage}
              alt="শেখ রাসেল"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default SheikhRusselCorner;