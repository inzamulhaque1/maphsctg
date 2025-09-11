import React, { useState } from 'react';
import { FaSearch, FaGraduationCap, FaArrowLeft, FaPrint, FaDownload, FaChartLine, FaAward } from 'react-icons/fa';

const ResultSearch = () => {
  const [resultData, setResultData] = useState({
    session: '',
    exam: '',
    class: '',
    group: '',
    section: '',
    classRoll: '',
    resultSystem: 'General Result'
  });

  const [searchPerformed, setSearchPerformed] = useState(false);

  // Sample data for dropdowns
  const sessions = ['2023-2024', '2024-2025', '2025-2026'];
  const exams = ['Annual Examination', 'Half-Yearly Examination', 'Test Examination', 'Monthly Test'];
  const classes = ['৬ষ্ঠ', '৭ম', '৮ম', '৯ম', '১০ম'];
  const groups = ['বিজ্ঞান', 'মানবিক', 'ব্যবসায় শিক্ষা'];
  const sections = ['ক', 'খ', 'গ'];
  const resultSystems = ['General Result', 'New Result System'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResultData({
      ...resultData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchPerformed(true);
  };

  const handleReset = () => {
    setResultData({
      session: '',
      exam: '',
      class: '',
      group: '',
      section: '',
      classRoll: '',
      resultSystem: 'General Result'
    });
    setSearchPerformed(false);
  };

  // Sample result data for display
  const sampleResults = [
    { subject: 'বাংলা', marks: 85, grade: 'A+', point: 5.0 },
    { subject: 'English', marks: 78, grade: 'A', point: 4.0 },
    { subject: 'গণিত', marks: 92, grade: 'A+', point: 5.0 },
    { subject: 'Physics', marks: 88, grade: 'A+', point: 5.0 },
    { subject: 'Chemistry', marks: 76, grade: 'A', point: 4.0 },
    { subject: 'Biology', marks: 82, grade: 'A+', point: 5.0 },
    { subject: 'ইতিহাস', marks: 73, grade: 'A-', point: 3.5 },
  ];

  // Calculate totals
  const totalMarks = sampleResults.reduce((sum, subject) => sum + subject.marks, 0);
  const averageMarks = (totalMarks / sampleResults.length).toFixed(2);
  const totalPoints = sampleResults.reduce((sum, subject) => sum + subject.point, 0);
  const gpa = (totalPoints / sampleResults.length).toFixed(2);

  return (
    <div className="min-h-screen bg-[#f5f2ea] py-8 px-4 relative" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23d4c9a8\' fill-opacity=\'0.2\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")' }}>
      <div className="max-w-4xl mx-auto relative">
        {/* Header */}
        <div className="flex flex-col items-center mb-8">
          <div className="bg-white p-3 rounded-full shadow-md mb-4 border border-amber-100">
            <img 
              src="https://maphsctg.edu.bd/logo/1739418692logo2.png" 
              alt="Mahamuni Anglo-Pali High School Logo" 
              className="h-16"
            />
          </div>
          <h1 className="text-3xl font-bold text-[#2c3e50] mb-2">ফলাফল</h1>
          <p className="text-[#2c3e50]">মহামুনি এংলো-পালি উচ্চ বিদ্যালয়</p>
        </div>

        {/* Back Button */}
        <div className="mb-6">
          <button className="flex items-center px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-amber-50 transition-all shadow-sm border border-amber-100">
            <FaArrowLeft className="mr-2" />
            Go Back
          </button>
        </div>

        {/* Search Form */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6 border border-amber-100">
          <h2 className="text-xl font-bold text-[#2c3e50] mb-4 flex items-center">
            <FaSearch className="mr-2 text-[#002147]" />
            Student Result Search
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="form-group">
                <label className="block text-gray-700 mb-2 font-medium">Session</label>
                <select
                  name="session"
                  value={resultData.session}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002147] bg-white"
                >
                  <option value="">Select session</option>
                  {sessions.map(session => (
                    <option key={session} value={session}>{session}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="block text-gray-700 mb-2 font-medium">Exam</label>
                <select
                  name="exam"
                  value={resultData.exam}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002147] bg-white"
                >
                  <option value="">Select exam</option>
                  {exams.map(exam => (
                    <option key={exam} value={exam}>{exam}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="block text-gray-700 mb-2 font-medium">Class</label>
                <select
                  name="class"
                  value={resultData.class}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002147] bg-white"
                >
                  <option value="">Select a class</option>
                  {classes.map(cls => (
                    <option key={cls} value={cls}>{cls}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="block text-gray-700 mb-2 font-medium">Group</label>
                <select
                  name="group"
                  value={resultData.group}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002147] bg-white"
                >
                  <option value="">Select an group</option>
                  {groups.map(group => (
                    <option key={group} value={group}>{group}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="block text-gray-700 mb-2 font-medium">Section</label>
                <select
                  name="section"
                  value={resultData.section}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002147] bg-white"
                >
                  <option value="">Select a section</option>
                  {sections.map(section => (
                    <option key={section} value={section}>{section}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="block text-gray-700 mb-2 font-medium">Class Roll</label>
                <input
                  type="text"
                  name="classRoll"
                  value={resultData.classRoll}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002147] bg-white"
                  placeholder="Class Roll"
                />
              </div>

              <div className="form-group">
                <label className="block text-gray-700 mb-2 font-medium">Result System</label>
                <div className="flex space-x-4 mt-2">
                  {resultSystems.map(system => (
                    <label key={system} className="inline-flex items-center">
                      <input
                        type="radio"
                        name="resultSystem"
                        value={system}
                        checked={resultData.resultSystem === system}
                        onChange={handleChange}
                        className="text-[#002147] focus:ring-[#002147]"
                      />
                      <span className="ml-2">{system}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <button
                type="button"
                onClick={handleReset}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors border border-gray-300"
              >
                Reset
              </button>
              
              <button
                type="submit"
                className="px-6 py-2 bg-[#002147] text-white rounded-lg hover:bg-[#071729] transition-colors shadow-sm flex items-center border border-[#002147]"
              >
                <FaSearch className="mr-2" />
                Search Result
              </button>
            </div>
          </form>
        </div>

        {/* Results Section */}
        {searchPerformed && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-6 border border-amber-100">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-[#2c3e50] flex items-center">
                <FaGraduationCap className="mr-2 text-[#002147]" />
                Result Details
              </h2>
              
              <div className="flex space-x-2">
                <button className="px-3 py-2 bg-[#002147] text-white rounded-lg hover:bg-[#002147] transition-colors shadow-sm flex items-center border border-[#002147]">
                  <FaPrint className="mr-1" />
                  Print
                </button>
                <button className="px-3 py-2 bg-[#002147] text-white rounded-lg hover:bg-[#002147] transition-colors shadow-sm flex items-center border border-[#002147]">
                  <FaDownload className="mr-1" />
                  Download
                </button>
              </div>
            </div>

            {/* Student Info */}
            <div className="bg-amber-50 p-4 rounded-lg mb-6 border border-amber-200">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Name</p>
                  <p className="font-medium">রূপম কিশোর</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Class</p>
                  <p className="font-medium">নবম (বিজ্ঞান)</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Section</p>
                  <p className="font-medium">ক</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Roll</p>
                  <p className="font-medium">১২</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Session</p>
                  <p className="font-medium">২০২৩-২০২৪</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Exam</p>
                  <p className="font-medium">Annual Examination</p>
                </div>
              </div>
            </div>

            {/* Result Summary */}
            <div className="bg-amber-50 p-4 rounded-lg mb-6 border border-amber-200">
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                <FaChartLine className="mr-2 text-[#002147]" />
                Result Summary
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white p-3 rounded-lg shadow-sm text-center border border-amber-100">
                  <p className="text-sm text-gray-600">Total Marks</p>
                  <p className="text-2xl font-bold text-[#002147]">{totalMarks}</p>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm text-center border border-amber-100">
                  <p className="text-sm text-gray-600">Average Marks</p>
                  <p className="text-2xl font-bold text-blue-600">{averageMarks}</p>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm text-center border border-amber-100">
                  <p className="text-sm text-gray-600">GPA</p>
                  <p className="text-2xl font-bold text-green-600">{gpa}</p>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm text-center border border-amber-100">
                  <p className="text-sm text-gray-600">Position</p>
                  <p className="text-2xl font-bold text-purple-600">৫ম</p>
                </div>
              </div>
            </div>

            {/* Subject-wise Results */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                <FaAward className="mr-2 text-[#002147]" />
                Subject-wise Results
              </h3>
              <div className="overflow-x-auto rounded-lg shadow-sm border border-amber-100">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[#002147] text-white">
                      <th className="p-3 text-left border border-[#002147]">Subject</th>
                      <th className="p-3 text-left border border-[#002147]">Marks</th>
                      <th className="p-3 text-left border border-[#002147]">Grade</th>
                      <th className="p-3 text-left border border-[#002147]">Point</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sampleResults.map((subject, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-amber-50'}>
                        <td className="p-3 border border-amber-100 font-medium">{subject.subject}</td>
                        <td className="p-3 border border-amber-100">{subject.marks}</td>
                        <td className="p-3 border border-amber-100">
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200">
                            {subject.grade}
                          </span>
                        </td>
                        <td className="p-3 border border-amber-100">{subject.point}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Remarks */}
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
              <h4 className="font-semibold text-green-800 mb-2">Remarks</h4>
              <p className="text-green-700">Excellent performance! Keep up the good work. Shows particular strength in Mathematics and Science subjects.</p>
            </div>
          </div>
        )}

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
                <strong>Note:</strong> Results are published within 30 days after the examination. Contact the examination department for any discrepancies.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center text-sm text-gray-600 bg-white p-3 rounded-lg border border-amber-100">
          <p>© ২০২৪ মহামুনি এংলো-পালি উচ্চ বিদ্যালয়। সকল права সংরক্ষিত।</p>
        </div>
      </div>
    </div>
  );
};

export default ResultSearch;