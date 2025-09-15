"use client";

import { useState } from "react";
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
  FaPrint,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const AdmissionInfo = () => {
  const [activeStep, setActiveStep] = useState(null);

  const handleDownloadForm = () => {
    // This will be replaced with actual form download link
    console.log("Downloading admission form...");
  };

  const handleOnlineAdmission = () => {
    // This will be replaced with actual online admission link
    console.log("Redirecting to online admission...");
  };

  const steps = [
    {
      number: 1,
      title: "অনলাইন ভর্তি লিঙ্কে প্রবেশ",
      description:
        "এই লিঙ্কটিতে প্রবেশ করে Online Admission লেখাটিতে ক্লিক করুন",
      icon: <FaUserPlus className="text-lg" />,
    },
    {
      number: 2,
      title: "আবেদনপত্র পূরণ",
      description:
        "আবেদনপত্রের ফরমটি বের হলে যাবতীয় তথ্য দিয়ে তা পূরণ করতে হবে",
      icon: <FaFileAlt className="text-lg" />,
    },
    {
      number: 3,
      title: "ছবি আপলোড",
      description:
        "৩০০×৩০০ পিক্সেল এর রঙ্গিন ছবি JPEG ফরমেট এ নির্ধারিত স্থানে আপলোড করতে হবে",
      icon: <FaCloudUploadAlt className="text-lg" />,
    },
    {
      number: 4,
      title: "আবেদন প্রিভিউ",
      description:
        "আবেদনপত্রটি পূরণ করে সাবমিট করলে Application Preview দেখা যায়",
      icon: <FaEye className="text-lg" />,
    },
    {
      number: 5,
      title: "আবেদনকারীর কপি",
      description:
        "পূরণকৃত আবেদনটি সাবমিট করা হলে User ID সহ ছবিযুক্ত Applicant's copy আসবে",
      icon: <FaCheckCircle className="text-lg" />,
    },
    {
      number: 6,
      title: "কপি সংরক্ষণ",
      description: "কপিটি প্রিন্ট অথবা ডাউনলোড করে সংরক্ষণ করতে হবে",
      icon: <FaSave className="text-lg" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-bangla3">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#002147] to-[#003366] text-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-bangla3">
            ভর্তির তথ্য
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed font-bangla2">
            মহামুনি এংলো-পালি উচ্চ বিদ্যালয়ে ভর্তির জন্য আবেদনের নিয়মাবলী ও
            প্রয়োজনীয় তথ্য
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 ">
        {/* Application Rules Section */}
        <div className="bg-white rounded-xl md:rounded-2xl shadow-md md:shadow-lg p-6 md:p-8 mb-8 md:mb-12">
          <div className="flex items-center mb-6">
            <div className="bg-[#002147] p-3 rounded-full mr-4">
              <FaInfoCircle className="text-white text-lg md:text-xl" />
            </div>
            <h2 className="font-bangla3 text-2xl md:text-3xl font-bold text-[#002147]">
              আবেদনের নিয়মাবলী
            </h2>
          </div>

          <div className="bg-blue-50 border-l-4 border-[#002147] p-4 md:p-6 rounded-r-lg mb-6 md:mb-8">
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              এই লিঙ্কটিতে প্রবেশ করে Online Admission লেখাটিতে ক্লিক করে
              আবেদনপত্রের ফরমটি বের হলে যাবতীয় তথ্য দিয়ে তা পূরণ করতে হবে।
              ৩০০×৩০০ পিক্সেল এর রঙ্গিন ছবি JPEG ফরমেট এ নির্ধারিত স্থানে আপলোড
              করতে হবে। আবেদনপত্রটি পূরণ করে সাবমিট করলে Application Preview
              দেখা যায়। পূরণকৃত আবেদনটি সাবমিট করা হলে User ID সহ ছবিযুক্ত
              Applicant's copy আসবে। কপিটি প্রিন্ট অথবা ডাউনলোড করে সংরক্ষণ করতে
              হবে। এটি পরবর্তীতে প্রয়োজন পড়তেও পারে। অনলাইনে প্রদত্ত তথ্যই
              পরবর্তীতে সকল কার্যক্রমে ব্যবহৃত হবে। তাই তথ্য যেন ভুল না হয় তার
              প্রতি দৃষ্টি রাখতে হবে।
            </p>
          </div>

          {/* Important Notice */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 md:p-6">
            <div className="flex items-start">
              <FaExclamationTriangle className="text-yellow-600 text-lg md:text-xl mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-yellow-800 mb-2 text-lg">
                  গুরুত্বপূর্ণ নোটিশ
                </h3>
                <p className="text-yellow-700 text-base md:text-lg">
                  অনলাইনে প্রদত্ত তথ্যই পরবর্তীতে সকল কার্যক্রমে ব্যবহৃত হবে।
                  তাই তথ্য যেন ভুল না হয় তার প্রতি দৃষ্টি রাখতে হবে।
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Step by Step Process */}
        <div className="bg-white rounded-xl md:rounded-2xl shadow-md md:shadow-lg p-6 md:p-8 mb-8 md:mb-12">
          <h2 className="font-bangla3 text-2xl md:text-3xl font-bold text-[#002147] mb-6 md:mb-8 text-center">
            ধাপে ধাপে আবেদন প্রক্রিয়া
          </h2>

          <div className="grid gap-4 md:gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex items-start p-4 md:p-6 rounded-lg md:rounded-xl transition-all duration-300 cursor-pointer ${
                  activeStep === index
                    ? "bg-[#002147] text-white shadow-lg transform -translate-y-1"
                    : "bg-gray-50 hover:bg-blue-50"
                }`}
                onClick={() =>
                  setActiveStep(activeStep === index ? null : index)
                }
              >
                <div className="flex-shrink-0 mr-4 md:mr-6">
                  <div
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                      activeStep === index
                        ? "bg-white text-[#002147]"
                        : "bg-[#002147] text-white"
                    }`}
                  >
                    {step.number}
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center mb-2 md:mb-3">
                    <div
                      className={`mr-3 ${
                        activeStep === index ? "text-white" : "text-[#002147]"
                      }`}
                    >
                      {step.icon}
                    </div>
                    <h3
                      className={`text-lg md:text-xl font-bold ${
                        activeStep === index ? "text-white" : "text-[#002147]"
                      }`}
                    >
                      {step.title}
                    </h3>
                  </div>
                  <p
                    className={`leading-relaxed text-sm md:text-base ${
                      activeStep === index ? "text-blue-100" : "text-gray-700"
                    }`}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Photo Requirements */}
        <div className="bg-white rounded-xl md:rounded-2xl shadow-md md:shadow-lg p-6 md:p-8 mb-8 md:mb-12">
          <h2 className="font-bangla3 text-xl md:text-2xl font-bold text-[#002147] mb-6">
            ছবির প্রয়োজনীয়তা
          </h2>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-blue-50 p-4 md:p-6 rounded-lg">
              <h3 className="font-bold text-[#002147] mb-3 text-lg">
                ছবির বিশেষত্ব
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                  <span>আকার: ৩০০×৩০০ পিক্সেল</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                  <span>ফরমেট: JPEG</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                  <span>রঙ্গিন ছবি</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                  <span>স্পষ্ট ও পরিষ্কার</span>
                </li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-4 md:p-6 rounded-lg">
              <h3 className="font-bold text-[#002147] mb-3 text-lg">সতর্কতা</h3>
              <p className="text-gray-700">
                ছবি আপলোড করার সময় নির্ধারিত আকার ও ফরমেট অনুসরণ করুন। ভুল
                ফরমেট বা আকারের ছবি আপলোড করলে আবেদন প্রক্রিয়ায় সমস্যা হতে
                পারে।
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="bg-white rounded-xl md:rounded-2xl shadow-md md:shadow-lg p-6 md:p-8">
          <h2 className="font-bangla3 text-xl md:text-2xl font-bold text-[#002147] mb-6 md:mb-8 text-center">
            আবেদন শুরু করুন
          </h2>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
            {/* Download Form Button */}
            <button
              onClick={handleDownloadForm}
              className="group bg-gradient-to-r from-[#002147] to-[#003366] text-white py-4 md:py-6 px-6 md:px-8 rounded-lg md:rounded-xl font-bold text-base md:text-lg hover:from-[#003366] hover:to-[#002147] transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg"
            >
              <div className="flex items-center justify-center">
                <FaDownload className="mr-3 text-lg md:text-xl group-hover:animate-bounce" />
                <Link to={"/admission-online-download"}>
                  <div>
                    <div className="text-base md:text-xl">
                      ভর্তির ফরম ডাউনলোড
                    </div>
                    <div className="text-xs md:text-sm opacity-90 mt-1">
                      PDF ফরম ডাউনলোড করুন
                    </div>
                  </div>
                </Link>
              </div>
            </button>

            {/* Online Admission Button */}
            <button
              onClick={handleOnlineAdmission}
              className="group bg-gradient-to-r from-green-600 to-green-700 text-white py-4 md:py-6 px-6 md:px-8 rounded-lg md:rounded-xl font-bold text-base md:text-lg hover:from-green-700 hover:to-green-600 transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg"
            >
              <div className="flex items-center justify-center">
                <FaUserPlus className="mr-3 text-lg md:text-xl group-hover:animate-pulse" />
                <Link to={"/onlineadmission"}>
                  <div>
                    <div className="text-base md:text-xl">অনলাইন ভর্তি</div>
                    <div className="text-xs md:text-sm opacity-90 mt-1">
                      এখনই আবেদন করুন
                    </div>
                  </div>
                </Link>
              </div>
            </button>
          </div>

          <div className="text-center mt-6 md:mt-8">
            <p className="text-gray-600 text-sm md:text-base">
              যেকোনো সমস্যার জন্য স্কুল অফিসে যোগাযোগ করুন
            </p>
            <div className="mt-4 flex justify-center space-x-4">
              <button className="flex items-center text-[#002147] hover:text-[#003366] text-sm md:text-base">
                <FaPrint className="mr-2" />
                প্রিন্ট গাইডলাইন
              </button>
              <button className="flex items-center text-[#002147] hover:text-[#003366] text-sm md:text-base">
                <FaDownload className="mr-2" />
                ডাউনলোড গাইডলাইন
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionInfo;
