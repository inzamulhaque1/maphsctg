/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaImages, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const images = [
    'https://maphsctg.edu.bd/images/gallary/1555581028.jpg',
    'https://maphsctg.edu.bd/images/gallary/1554891528.jpg',
    'https://maphsctg.edu.bd/images/gallary/1554891516.jpg',
    'https://maphsctg.edu.bd/images/gallary/1554891507.jpg',
    'https://maphsctg.edu.bd/images/gallary/1554891496.JPG',
    'https://maphsctg.edu.bd/images/gallary/1554891491.JPG',
    'https://maphsctg.edu.bd/images/gallary/1554891483.jpg',
    'https://maphsctg.edu.bd/images/gallary/1554891470.jpg'
  ];

  // Proper scroll disable/enable
  useEffect(() => {
    if (selectedImage) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [selectedImage]);

  // Handle keyboard events
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedImage) return;
      
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, selectedIndex]);

  const openModal = (image, index) => {
    setSelectedImage(image);
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = (e) => {
    e?.stopPropagation();
    const newIndex = (selectedIndex + 1) % images.length;
    setSelectedIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    const newIndex = selectedIndex === 0 ? images.length - 1 : selectedIndex - 1;
    setSelectedIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <>
      <style jsx>{`
        .blur-backdrop {
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
        
        .modal-enter {
          animation: modalEnter 0.3s ease-out forwards;
        }
        
        .image-enter {
          animation: imageEnter 0.4s ease-out forwards;
        }
        
        @keyframes modalEnter {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes imageEnter {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .gallery-item:hover img {
          transform: scale(1.05);
        }
        
        .gallery-item img {
          transition: transform 0.3s ease;
        }
        
        .nav-button {
          transition: all 0.2s ease;
        }
        
        .nav-button:hover {
          transform: scale(1.1);
          background-color: #1e40af;
        }
      `}</style>

      <div className="min-h-screen bg-[#f5f2ea] py-8 px-4 relative" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23d4c9a8\' fill-opacity=\'0.2\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")' }}>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col items-center mb-8">
            <div className="bg-white p-3 rounded-full shadow-md mb-4 border border-amber-100">
              <img 
                src="https://maphsctg.edu.bd/logo/1739418692logo2.png" 
                alt="Mahamuni Anglo-Pali High School Logo" 
                className="h-16"
              />
            </div>
            <h1 className="text-3xl font-bold text-[#2c3e50] mb-2">ফটো গ্যালারি</h1>
            <p className="text-[#2c3e50]">মহামুনি এংলো-পালি উচ্চ বিদ্যালয়</p>
          </div>

          {/* Back Button */}
          <div className="mb-6">
            <button className="flex items-center px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-amber-50 transition-all shadow-sm border border-amber-100">
              <FaArrowLeft className="mr-2" />
              Go Back
            </button>
          </div>

          {/* Gallery Header */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6 border border-amber-100">
            <h2 className="text-xl font-bold text-[#2c3e50] mb-4 flex items-center">
              <FaImages className="mr-2 text-[#002147]" />
              School Photo Gallery
            </h2>
            <p className="text-gray-600">
              আমাদের স্কুলের বিভিন্ন কার্যক্রম, অনুষ্ঠান এবং দৈনন্দিন জীবনের ছবি দেখুন। প্রতিটি ছবি আমাদের শিক্ষা প্রতিষ্ঠানের গৌরবময় ইতিহাস এবং ঐতিহ্যের সাক্ষী।
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6 border border-amber-100">
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6">
              {images.map((image, index) => (
                <div 
                  key={index}
                  className="gallery-item group relative bg-white rounded-lg shadow-sm border border-amber-100 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer mb-6 break-inside-avoid"
                  onClick={() => openModal(image, index)}
                >
                  <div className="relative bg-gray-100 overflow-hidden">
                    <img
                      src={image}
                      alt={`Gallery Image ${index + 1}`}
                      className="w-full h-auto object-contain"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#002147]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <p className="text-sm font-medium bg-[#002147]/90 rounded-lg px-3 py-2 text-center">
                        ছবি {index + 1}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6 border border-amber-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-amber-50 rounded-lg border border-amber-200">
                <div className="text-3xl font-bold text-[#002147] mb-2">{images.length}</div>
                <p className="text-gray-600">মোট ছবি</p>
              </div>
              <div className="text-center p-4 bg-amber-50 rounded-lg border border-amber-200">
                <div className="text-3xl font-bold text-[#002147] mb-2">১০+</div>
                <p className="text-gray-600">বার্ষিক অনুষ্ঠান</p>
              </div>
              <div className="text-center p-4 bg-amber-50 rounded-lg border border-amber-200">
                <div className="text-3xl font-bold text-[#002147] mb-2">৫০+</div>
                <p className="text-gray-600">সাংস্কৃতিক কর্মকাণ্ড</p>
              </div>
            </div>
          </div>

          {/* Information Box */}
          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-lg mb-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-[#002147]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-amber-800">
                  <strong>দ্রষ্টব্য:</strong> আমাদের গ্যালারিতে স্কুলের বিভিন্ন কার্যক্রমের ছবি রয়েছে। আরও ছবি দেখতে নিয়মিত ভিজিট করুন।
                </p>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="text-center text-sm text-gray-600 bg-white p-3 rounded-lg border border-amber-100">
            <p>© ২০২৪ মহামুনি এংলো-পালি উচ্চ বিদ্যালয়। সকল অধিকার সংরক্ষিত।</p>
          </div>
        </div>
      </div>

      {/* MODAL - FIXED VERSION */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[10000] modal-enter"
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
        >
          {/* BACKDROP with proper blur */}
          <div 
            className="absolute inset-0 bg-black/80 blur-backdrop"
            onClick={closeModal}
            style={{ 
              backdropFilter: 'blur(15px)', 
              WebkitBackdropFilter: 'blur(15px)',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0
            }}
          ></div>

          {/* MODAL CONTENT */}
          <div className="relative w-full h-full flex items-center justify-center p-4">
            
            {/* CLOSE BUTTON - PROPERLY POSITIONED */}
            <button
              onClick={closeModal}
              className="absolute top-8 right-8 z-20 bg-red-600 hover:bg-red-700 text-white rounded-full p-3 shadow-lg nav-button"
              style={{ position: 'absolute' }}
            >
              <FaTimes size={18} />
            </button>

            {/* NAVIGATION BUTTONS */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 bg-[#002147] hover:bg-blue-700 text-white rounded-full p-4 shadow-lg nav-button"
                  style={{ position: 'absolute' }}
                >
                  <FaChevronLeft size={20} />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 bg-[#002147] hover:bg-blue-700 text-white rounded-full p-4 shadow-lg nav-button"
                  style={{ position: 'absolute' }}
                >
                  <FaChevronRight size={20} />
                </button>
              </>
            )}

            {/* IMAGE CONTAINER */}
            <div className="image-enter max-w-[85vw] max-h-[80vh] flex items-center justify-center">
              <img
                src={selectedImage}
                alt={`Gallery Image ${selectedIndex + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                style={{ maxWidth: '85vw', maxHeight: '80vh' }}
              />
            </div>

            {/* IMAGE COUNTER */}
            <div 
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 bg-[#002147]/90 text-white px-6 py-3 rounded-full shadow-lg"
              style={{ position: 'absolute' }}
            >
              <span className="font-medium text-sm">
                {selectedIndex + 1} / {images.length}
              </span>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;