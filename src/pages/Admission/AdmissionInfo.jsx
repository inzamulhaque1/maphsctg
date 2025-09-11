"use client"

import {
  FaDownload,
  FaGraduationCap,
  FaUserPlus,
  FaFileAlt,
  FaCheckCircle,
  FaInfoCircle,
  FaCloudUploadAlt,
  FaEye,
  FaSave,
  FaExclamationTriangle,
} from "react-icons/fa"

const AdmissionInfo = () => {
  const handleDownloadForm = () => {
    // This will be replaced with actual form download link
    console.log("Downloading admission form...")
  }

  const handleOnlineAdmission = () => {
    // This will be replaced with actual online admission link
    console.log("Redirecting to online admission...")
  }

  const steps = [
    {
      number: 1,
      title: "অনলাইন ভর্তি লিঙ্কে প্রবেশ",
      description: "এই লিঙ্কটিতে প্রবেশ করে Online Admission লেখাটিতে ক্লিক করুন",
      icon: <FaUserPlus />,
    },
    {
      number: 2,
      title: "আবেদনপত্র পূরণ",
      description: "আবেদনপত্রের ফরমটি বের হলে যাবতীয় তথ্য দিয়ে তা পূরণ করতে হবে",
      icon: <FaFileAlt />,
    },
    {
      number: 3,
      title: "ছবি আপলোড",
      description: "৩০০×৩০০ পিক্সেল এর রঙ্গিন ছবি JPEG ফরমেট এ নির্ধারিত স্থানে আপলোড করতে হবে",
      icon: <FaCloudUploadAlt />,
    },
    {
      number: 4,
      title: "আবেদন প্রিভিউ",
      description: "আবেদনপত্রটি পূরণ করে সাবমিট করলে Application Preview দেখা যায়",
      icon: <FaEye />,
    },
    {
      number: 5,
      title: "আবেদনকারীর কপি",
      description: "পূরণকৃত আবেদনটি সাবমিট করা হলে User ID সহ ছবিযুক্ত Applicant's copy আসবে",
      icon: <FaCheckCircle />,
    },
    {
      number: 6,
      title: "কপি সংরক্ষণ",
      description: "কপিটি প্রিন্ট অথবা ডাউনলোড করে সংরক্ষণ করতে হবে",
      icon: <FaSave />,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-[#002147]  text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">

          <h1 className="text-4xl md:text-5xl font-bold mb-4">ভর্তির তথ্য</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            মহামুনি এংলো-পালি উচ্চ বিদ্যালয়ে ভর্তির জন্য আবেদনের নিয়মাবলী ও প্রয়োজনীয় তথ্য
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Application Rules Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="flex items-center mb-6">
            <div className="bg-[#002147] p-3 rounded-full mr-4">
              <FaInfoCircle className="text-white text-xl" />
            </div>
            <h2 className="text-3xl font-bold text-[#002147]">আবেদনের নিয়মাবলী</h2>
          </div>

          <div className="bg-blue-50 border-l-4 border-[#002147] p-6 rounded-r-lg mb-8">
            <p className="text-gray-700 leading-relaxed text-lg">
              এই লিঙ্কটিতে প্রবেশ করে Online Admission লেখাটিতে ক্লিক করে আবেদনপত্রের ফরমটি বের হলে যাবতীয় তথ্য দিয়ে তা পূরণ করতে
              হবে। ৩০০×৩০০ পিক্সেল এর রঙ্গিন ছবি JPEG ফরমেট এ নির্ধারিত স্থানে আপলোড করতে হবে। আবেদনপত্রটি পূরণ করে সাবমিট করলে
              Application Preview দেখা যায়। পূরণকৃত আবেদনটি সাবমিট করা হলে User ID সহ ছবিযুক্ত Applicant's copy আসবে। কপিটি
              প্রিন্ট অথবা ডাউনলোড করে সংরক্ষণ করতে হবে। এটি পরবর্তীতে প্রয়োজন পড়তেও পারে। অনলাইনে প্রদত্ত তথ্যই পরবর্তীতে সকল
              কার্যক্রমে ব্যবহৃত হবে। তাই তথ্য যেন ভুল না হয় তার প্রতি দৃষ্টি রাখতে হবে।
            </p>
          </div>

          {/* Important Notice */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <div className="flex items-start">
              <FaExclamationTriangle className="text-yellow-600 text-xl mr-3 mt-1" />
              <div>
                <h3 className="font-bold text-yellow-800 mb-2">গুরুত্বপূর্ণ নোটিশ</h3>
                <p className="text-yellow-700">
                  অনলাইনে প্রদত্ত তথ্যই পরবর্তীতে সকল কার্যক্রমে ব্যবহৃত হবে। তাই তথ্য যেন ভুল না হয় তার প্রতি দৃষ্টি রাখতে হবে।
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Step by Step Process */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-[#002147] mb-8 text-center">ধাপে ধাপে আবেদন প্রক্রিয়া</h2>

          <div className="grid gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex items-start p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300"
              >
                <div className="flex-shrink-0 mr-6">
                  <div className="bg-[#002147] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center mb-3">
                    <div className="text-[#002147] mr-3 text-xl">{step.icon}</div>
                    <h3 className="text-xl font-bold text-[#002147]">{step.title}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Photo Requirements */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-[#002147] mb-6">ছবির প্রয়োজনীয়তা</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-[#002147] mb-3">ছবির বিশেষত্ব</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  আকার: ৩০০×৩০০ পিক্সেল
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  ফরমেট: JPEG
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  রঙ্গিন ছবি
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  স্পষ্ট ও পরিষ্কার
                </li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="font-bold text-[#002147] mb-3">সতর্কতা</h3>
              <p className="text-gray-700">
                ছবি আপলোড করার সময় নির্ধারিত আকার ও ফরমেট অনুসরণ করুন। ভুল ফরমেট বা আকারের ছবি আপলোড করলে আবেদন প্রক্রিয়ায় সমস্যা হতে
                পারে।
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-[#002147] mb-8 text-center">আবেদন শুরু করুন</h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Download Form Button */}
            <button
              onClick={handleDownloadForm}
              className="group bg-gradient-to-r from-[#002147] to-[#003366] text-white py-6 px-8 rounded-xl font-bold text-lg hover:from-[#003366] hover:to-[#002147] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <div className="flex items-center justify-center">
                <FaDownload className="mr-3 text-xl group-hover:animate-bounce" />
                <div>
                  <div className="text-xl">ভর্তির ফরম ডাউনলোড</div>
                  <div className="text-sm opacity-90">PDF ফরম ডাউনলোড করুন</div>
                </div>
              </div>
            </button>

            {/* Online Admission Button */}
            <button
              onClick={handleOnlineAdmission}
              className="group bg-gradient-to-r from-green-600 to-green-700 text-white py-6 px-8 rounded-xl font-bold text-lg hover:from-green-700 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <div className="flex items-center justify-center">
                <FaUserPlus className="mr-3 text-xl group-hover:animate-pulse" />
                <div>
                  <div className="text-xl">অনলাইন ভর্তি</div>
                  <div className="text-sm opacity-90">এখনই আবেদন করুন</div>
                </div>
              </div>
            </button>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600">যেকোনো সমস্যার জন্য স্কুল অফিসে যোগাযোগ করুন</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdmissionInfo
