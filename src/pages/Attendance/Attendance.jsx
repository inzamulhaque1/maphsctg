import React, {  useState } from 'react';
import { FaSearch, FaCalendarAlt, FaUserGraduate, FaArrowLeft, FaChartBar, FaPrint, FaDownload } from 'react-icons/fa';

const Attendance = () => {
  const [attendanceData, setAttendanceData] = useState({
    startDate: '',
    endDate: '',
    session: '',
    class: '',
    group: '',
    section: '',
    classRoll: ''
  });

  const [searchPerformed, setSearchPerformed] = useState(false);

  // Sample data for dropdowns
  const sessions = ['2023-2024', '2024-2025', '2025-2026'];
  const classes = ['৬ষ্ঠ', '৭ম', '৮ম', '৯ম', '১০ম'];
  const groups = ['বিজ্ঞান', 'মানবিক', 'ব্যবসায় শিক্ষা'];
  const sections = ['ক', 'খ', 'গ'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAttendanceData({
      ...attendanceData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchPerformed(true);
  };

  const handleReset = () => {
    setAttendanceData({
      startDate: '',
      endDate: '',
      session: '',
      class: '',
      group: '',
      section: '',
      classRoll: ''
    });
    setSearchPerformed(false);
  };

  // Sample attendance data for display
  const sampleAttendance = [
    { date: '২০২৪-০১-১৫', status: 'উপস্থিত', inTime: '০৮:৪৫', outTime: '১৪:৩০' },
    { date: '২০২৪-০১-১৬', status: 'উপস্থিত', inTime: '০৮:৫০', outTime: '১৪:২৫' },
    { date: '২০২৪-০১-১৭', status: 'অনুপস্থিত', inTime: '-', outTime: '-' },
    { date: '২০২৪-০১-১৮', status: 'উপস্থিত', inTime: '০৯:০০', outTime: '১৪:৪০' },
    { date: '২০২৪-০১-২১', status: 'উপস্থিত', inTime: '০৮:৩০', outTime: '১৪:২০' },
  ];

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
          <h1 className="text-3xl font-bold text-[#2c3e50] mb-2">উপস্থিতি</h1>
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
          <h2 className="text-xl font-bold text-[#002147] mb-4 flex items-center">
            <FaSearch className="mr-2 text-[#002147] " />
            Student Search Attendance
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="form-group">
                <label className="block text-gray-700 mb-2 font-medium">Start</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaCalendarAlt className="text-gray-400" />
                  </div>
                  <input
                    type="date"
                    name="startDate"
                    value={attendanceData.startDate}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002147] bg-white"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="block text-gray-700 mb-2 font-medium">End</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaCalendarAlt className="text-gray-400" />
                  </div>
                  <input
                    type="date"
                    name="endDate"
                    value={attendanceData.endDate}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002147] bg-white"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="block text-gray-700 mb-2 font-medium">Session</label>
                <select
                  name="session"
                  value={attendanceData.session}
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
                <label className="block text-gray-700 mb-2 font-medium">Class</label>
                <select
                  name="class"
                  value={attendanceData.class}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002147] bg-white"
                >
                  <option value="">Select class</option>
                  {classes.map(cls => (
                    <option key={cls} value={cls}>{cls}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="block text-gray-700 mb-2 font-medium">Group</label>
                <select
                  name="group"
                  value={attendanceData.group}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002147] bg-white"
                >
                  <option value="">Select group</option>
                  {groups.map(group => (
                    <option key={group} value={group}>{group}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="block text-gray-700 mb-2 font-medium">Section</label>
                <select
                  name="section"
                  value={attendanceData.section}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002147] bg-white"
                >
                  <option value="">Select section</option>
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
                  value={attendanceData.classRoll}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002147] bg-white"
                  placeholder="Class Roll"
                />
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
                className="px-6 py-2 bg-[#002147] text-white rounded-lg hover:bg-[#061527] transition-colors shadow-sm flex items-center border border-[#002147]"
              >
                <FaSearch className="mr-2" />
                Search Attendance
              </button>
            </div>
          </form>
        </div>

        {/* Results Section */}
        {searchPerformed && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-6 border border-amber-100">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-[#2c3e50] flex items-center">
                <FaUserGraduate className="mr-2 text-[#002147]" />
                Attendance Results
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
              </div>
            </div>

            {/* Attendance Summary */}
            <div className="bg-amber-50 p-4 rounded-lg mb-6 border border-amber-200">
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                <FaChartBar className="mr-2 text-[#002147]" />
                Attendance Summary
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white p-3 rounded-lg shadow-sm text-center border border-amber-100">
                  <p className="text-sm text-gray-600">Total Days</p>
                  <p className="text-2xl font-bold text-[#002147]">৫</p>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm text-center border border-amber-100">
                  <p className="text-sm text-gray-600">Present</p>
                  <p className="text-2xl font-bold text-green-600">৪</p>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm text-center border border-amber-100">
                  <p className="text-sm text-gray-600">Absent</p>
                  <p className="text-2xl font-bold text-red-600">১</p>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm text-center border border-amber-100">
                  <p className="text-sm text-gray-600">Percentage</p>
                  <p className="text-2xl font-bold text-purple-600">৮০%</p>
                </div>
              </div>
            </div>

            {/* Attendance Details */}
            <div className="overflow-x-auto rounded-lg shadow-sm border border-amber-100">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#002147] text-white">
                    <th className="p-3 text-left border border-[#002147]">Date</th>
                    <th className="p-3 text-left border border-[#002147]">Status</th>
                    <th className="p-3 text-left border border-[#002147]">In Time</th>
                    <th className="p-3 text-left border border-[#002147]">Out Time</th>
                  </tr>
                </thead>
                <tbody>
                  {sampleAttendance.map((record, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-amber-50'}>
                      <td className="p-3 border border-amber-100">{record.date}</td>
                      <td className="p-3 border border-amber-100">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          record.status === 'উপস্থিত' ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-red-100 text-red-800 border border-red-200'
                        }`}>
                          {record.status}
                        </span>
                      </td>
                      <td className="p-3 border border-amber-100">{record.inTime}</td>
                      <td className="p-3 border border-amber-100">{record.outTime}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
                <strong>Note:</strong> Attendance records are updated daily at 5:00 PM. Please contact the administration office for any discrepancies.
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

export default Attendance;