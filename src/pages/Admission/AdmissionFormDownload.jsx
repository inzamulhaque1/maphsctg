import React, {  useState } from 'react';
import { FaDownload, FaSearch, FaFilePdf, FaExclamationCircle, FaArrowLeft } from 'react-icons/fa';

const AdmissionFormDownload = () => {
  const [formNumber, setFormNumber] = useState('');
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [formFound, setFormFound] = useState(false);

  // Sample form data - in a real application, this would come from an API
  const sampleFormData = {
    formNumber: '56922',
    studentName: 'রূপম কিশোর',
    className: 'নবম শ্রেণী',
    section: 'ক',
    status: 'Pending',
    issueDate: '১৫ জানুয়ারী, ২০২৪',
    downloadUrl: '/forms/admission-form-56922.pdf'
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchPerformed(true);
    
    // Simulate form search - in a real app, this would be an API call
    if (formNumber === '56922') {
      setFormFound(true);
    } else {
      setFormFound(false);
    }
  };

  const handleDownload = () => {
    // In a real application, this would download the actual PDF
    alert(`Downloading admission form #${formNumber}`);
  };

  const handleReset = () => {
    setFormNumber('');
    setSearchPerformed(false);
    setFormFound(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#002147] mb-2">Admission Form Download</h1>
          <p className="text-[#002147]">মহামুনি এংলো-পালি উচ্চ বিদ্যালয়</p>
        </div>

        {/* Instructions */}
        <div className="bg-white rounded-xl shadow-md p-5 mb-6">
          <div className="flex items-start mb-4">
            <FaExclamationCircle className="text-[#002147] text-xl mt-1 mr-3 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-bold text-[#002147] mb-2">দিকনির্দেশনা</h2>
              <p className="text-gray-700">
                ভর্তি ফর্ম ডাউনলোড করতে নিচে আপনার ফর্ম নম্বরটি প্রবেশ করুন এবং ডাউনলোড বাটনে ক্লিক করুন।
                ফর্ম নম্বরটি আপনার ভর্তি আবেদন করার সময় প্রদান করা হয়েছিল।
              </p>
            </div>
          </div>
        </div>

        {/* Search Form */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <form onSubmit={handleSearch}>
            <div className="mb-4">
              <label htmlFor="formNumber" className="block text-gray-700 font-medium mb-2">
                Form Number <span className="text-red-500">* 56922~demo</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  id="formNumber"
                  value={formNumber}
                  onChange={(e) => setFormNumber(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter Form Number"
                  required
                />
              </div>
            </div>

            <div className="flex justify-between">
              <button
                type="button"
                onClick={handleReset}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors flex items-center"
              >
                <FaArrowLeft className="mr-2" />
                Reset
              </button>
              
              <button
                type="submit"
                className="px-6 py-2 bg-[#002147] text-white rounded-lg hover:bg-[#002147] transition-colors flex items-center"
              >
                <FaSearch className="mr-2" />
                Search
              </button>
            </div>
          </form>
        </div>

        {/* Results */}
        {searchPerformed && (
          <div className="bg-white rounded-xl shadow-md p-6 mb-6">
            {formFound ? (
              <div>
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <FaFilePdf className="text-green-600 text-2xl" />
                  </div>
                  <h2 className="text-xl font-bold text-[#002147]">Form Found!</h2>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h3 className="font-semibold text-gray-800 mb-3">Form Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Form Number</p>
                      <p className="font-medium">{sampleFormData.formNumber}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Student Name</p>
                      <p className="font-medium">{sampleFormData.studentName}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Class</p>
                      <p className="font-medium">{sampleFormData.className}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Section</p>
                      <p className="font-medium">{sampleFormData.section}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Status</p>
                      <p className="font-medium">{sampleFormData.status}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Issue Date</p>
                      <p className="font-medium">{sampleFormData.issueDate}</p>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <button
                    onClick={handleDownload}
                    className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center mx-auto"
                  >
                    <FaDownload className="mr-2" />
                    Download Admission Form
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center">
                <div className="bg-red-100 p-4 rounded-lg mb-4">
                  <div className="flex items-center justify-center">
                    <FaExclamationCircle className="text-red-600 mr-2" />
                    <h3 className="text-red-800 font-medium">Form Not Found</h3>
                  </div>
                  <p className="text-red-700 mt-2">
                    No admission form found with number: <span className="font-semibold">{formNumber}</span>
                  </p>
                </div>
                <p className="text-gray-700">
                  Please check your form number and try again. If you continue to experience issues, 
                  please contact the school administration.
                </p>
              </div>
            )}
          </div>
        )}

        {/* Help Section */}
        <div className="bg-white rounded-xl shadow-md p-5">
          <h3 className="font-semibold text-[#002147] mb-3">Need Help?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-800 mb-2">Contact Administration</h4>
              <p className="text-sm text-[#002147]">
                Phone: ০১৮১-XXXXXXX<br />
                Email: admin@maphsctg.edu.bd
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-medium text-green-800 mb-2">Office Hours</h4>
              <p className="text-sm text-green-700">
                Sunday - Thursday: 9:00 AM - 5:00 PM<br />
                Friday: 9:00 AM - 12:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center text-sm text-gray-600">
          <p>© ২০২৪ মহামুনি এংলো-পালি উচ্চ বিদ্যালয়। সকল права সংরক্ষিত।</p>
        </div>
      </div>
    </div>
  );
};

export default AdmissionFormDownload;