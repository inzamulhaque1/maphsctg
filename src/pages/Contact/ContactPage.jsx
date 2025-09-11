import React, {  useState } from 'react';
import { FaArrowLeft, FaMapMarkerAlt, FaEnvelope, FaPhone, FaGlobe, FaPaperPlane, FaUser, FaEnvelopeOpen } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-[#f5f2ea] py-8 px-4 relative" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23d4c9a8\' fill-opacity=\'0.2\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")' }}>
      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="flex flex-col items-center mb-8">
          <div className="bg-white p-3 rounded-full shadow-md mb-4 border border-amber-100">
            <img 
              src="https://maphsctg.edu.bd/logo/1739418692logo2.png" 
              alt="Mahamuni Anglo-Pali High School Logo" 
              className="h-16"
            />
          </div>
          <h1 className="text-3xl font-bold text-[#002147] mb-2">যোগাযোগ</h1>
          <p className="text-[#002147]">মহামুনি এংলো-পালি উচ্চ বিদ্যালয়</p>
        </div>

        {/* Back Button */}
        <div className="mb-6">
          <button className="flex items-center px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-amber-50 transition-all shadow-sm border border-amber-100">
            <FaArrowLeft className="mr-2" />
            ফিরে যান
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-amber-100">
            <h2 className="text-xl font-bold text-[#002147] mb-6 flex items-center">
              <FaEnvelopeOpen className="mr-2 text-[#002147]" />
              আমাদেরকে বার্তা পাঠান
            </h2>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className=" text-gray-700 mb-2 font-medium flex items-center">
                  <FaUser className="mr-2 text-[#002147]" />
                  Nick name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002147] bg-white"
                  placeholder="আপনার নাম"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className=" text-gray-700 mb-2 font-medium flex items-center">
                  <FaEnvelope className="mr-2 text-[#002147]" />
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002147] bg-white"
                  placeholder="আপনার ইমেইল ঠিকানা"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 mb-2 font-medium">
                  Write a message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002147] bg-white"
                  placeholder="আপনার বার্তা লিখুন"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#002147] text-white rounded-lg hover:bg-[#071729] transition-colors shadow-sm flex items-center justify-center border border-[#002147]"
              >
                <FaPaperPlane className="mr-2" />
                পাঠান
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-amber-100">
            <h2 className="text-xl font-bold text-[#002147] mb-6">যোগাযোগের তথ্য</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-[#002147] p-3 rounded-full mr-4 flex-shrink-0">
                  <FaMapMarkerAlt className="text-white text-lg" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">ঠিকানা</h3>
                  <p className="text-gray-600">মহামুনি, পাহাড়তলী, রাউজান, চট্টগ্রাম</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#002147] p-3 rounded-full mr-4 flex-shrink-0">
                  <FaEnvelope className="text-white text-lg" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">ইমেইল</h3>
                  <p className="text-gray-600">mahamuni_aphs@yahoo.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#002147] p-3 rounded-full mr-4 flex-shrink-0">
                  <FaPhone className="text-white text-lg" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">ফোন</h3>
                  <p className="text-gray-600">+৮৮০ ১৮১৯ ৬৩৯ ৫৭২</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#002147] p-3 rounded-full mr-4 flex-shrink-0">
                  <FaGlobe className="text-white text-lg" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">ওয়েবসাইট</h3>
                  <p className="text-gray-600">http://maphsctg.edu.bd/</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8">
              <h3 className="font-semibold text-gray-800 mb-4">আমাদের অবস্থান</h3>
              <div className="rounded-lg overflow-hidden shadow-md border border-amber-100">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.536919202833!2d91.9676526!3d22.4404634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad2fea9bbc30ed%3A0x1e1aab00af1ec89!2sMohamuni%20Anglo%20Pali%20High%20School!5e0!3m2!1sen!2sbd!4v1725081234567!5m2!1sen!2sbd" 
                  width="100%" 
                  height="250" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mahamuni Anglo Pali High School Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-lg mb-8">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-6 w-6 text-amber-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-amber-800">
                <strong>দ্রষ্টব্য:</strong> যেকোনো তথ্য বা সহায়তার জন্য আমাদের সাথে যোগাযোগ করতে পারেন।
              </p>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default ContactPage;