import {
  FaUsers,
  FaMale,
  FaFemale,
  FaChartBar,
  FaGraduationCap,
  FaTrophy,
} from "react-icons/fa";

const StudentInfo = () => {
  const studentData = [
    {
      class: "৬ষ্ঠ",
      section: "ক+খ",
      male: 122,
      female: 82,
      islam: 109,
      hindu: 63,
      buddhist: 32,
      total: 204,
    },
    {
      class: "৭ম",
      section: "ক+খ",
      male: 105,
      female: 80,
      islam: 85,
      hindu: 63,
      buddhist: 37,
      total: 185,
    },
    {
      class: "৮ম",
      section: "ক+খ",
      male: 65,
      female: 75,
      islam: 79,
      hindu: 30,
      buddhist: 31,
      total: 140,
    },
    {
      class: "৯ম",
      section: "বিজ্ঞান",
      male: 14,
      female: 19,
      islam: 27,
      hindu: 4,
      buddhist: 2,
      total: 33,
    },
    {
      class: "৯ম",
      section: "মানবিক",
      male: 6,
      female: 18,
      islam: 20,
      hindu: 3,
      buddhist: 1,
      total: 24,
    },
    {
      class: "৯ম",
      section: "ব্যবসায় শিক্ষা",
      male: 70,
      female: 69,
      islam: 120,
      hindu: 15,
      buddhist: 4,
      total: 139,
    },
    {
      class: "১০ম",
      section: "বিজ্ঞান",
      male: 8,
      female: 21,
      islam: 25,
      hindu: 3,
      buddhist: 1,
      total: 29,
    },
    {
      class: "১০ম",
      section: "মানবিক",
      male: 1,
      female: 12,
      islam: 11,
      hindu: 2,
      buddhist: 0,
      total: 13,
    },
    {
      class: "১০ম",
      section: "ব্যবসায় শিক্ষা",
      male: 30,
      female: 39,
      islam: 60,
      hindu: 7,
      buddhist: 2,
      total: 69,
    },
  ];

  const scholarshipData = [
    { class: "৬ষ্ঠ", male: 21, female: 19, total: 40 },
    { class: "৭ম", male: 16, female: 13, total: 29 },
    { class: "৮ম", male: 13, female: 21, total: 34 },
    { class: "৯ম", male: 15, female: 38, total: 53 },
    { class: "১০ম", male: 10, female: 21, total: 31 },
  ];

  const totalStudents = studentData.reduce((sum, item) => sum + item.total, 0);
  const totalMale = studentData.reduce((sum, item) => sum + item.male, 0);
  const totalFemale = studentData.reduce((sum, item) => sum + item.female, 0);
  const totalScholarship = scholarshipData.reduce(
    (sum, item) => sum + item.total,
    0
  );
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#002147] text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <FaGraduationCap className="text-4xl mx-auto mb-4" />
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            শিক্ষার্থীর তথ্য
          </h1>
          <p className="text-lg opacity-90">
            ষষ্ঠ শ্রেণি হইতে দশম শ্রেণি পর্যন্ত ২০২৩
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {/* Total Students */}
          <div className="bg-white rounded-xl shadow-md p-5 flex items-center border-l-4 border-[#002147] hover:shadow-lg transition">
            <div className="p-3 bg-[#002147]/10 rounded-full">
              <FaUsers className="text-3xl text-[#002147]" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-600">
                মোট শিক্ষার্থী
              </h3>
              <p className="text-2xl font-bold text-[#002147]">
                {totalStudents}
              </p>
            </div>
          </div>

          {/* Male Students */}
          <div className="bg-white rounded-xl shadow-md p-5 flex items-center border-l-4 border-[#002147] hover:shadow-lg transition">
            <div className="p-3 bg-[#002147]/10 rounded-full">
              <FaMale className="text-3xl text-[#002147]" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-600">ছাত্র</h3>
              <p className="text-2xl font-bold text-[#002147]">{totalMale}</p>
            </div>
          </div>

          {/* Female Students */}
          <div className="bg-white rounded-xl shadow-md p-5 flex items-center border-l-4 border-[#002147] hover:shadow-lg transition">
            <div className="p-3 bg-[#002147]/10 rounded-full">
              <FaFemale className="text-3xl text-[#002147]" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-600">ছাত্রী</h3>
              <p className="text-2xl font-bold text-[#002147]">{totalFemale}</p>
            </div>
          </div>

          {/* Scholarship Students */}
          <div className="bg-white rounded-xl shadow-md p-5 flex items-center border-l-4 border-[#002147] hover:shadow-lg transition">
            <div className="p-3 bg-[#002147]/10 rounded-full">
              <FaTrophy className="text-3xl text-[#002147]" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-600">
                বৃত্তিপ্রাপ্ত
              </h3>
              <p className="text-2xl font-bold text-[#002147]">
                {totalScholarship}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md mb-8 overflow-hidden">
          <div className="bg-[#002147] text-white p-4">
            <h2 className="text-xl font-bold flex items-center">
              <FaChartBar className="mr-3" />
              শ্রেণিভিত্তিক শিক্ষার্থীর তথ্য
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-[#002147]">
                    শ্রেণি
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-[#002147]">
                    শাখা
                  </th>
                  <th className="px-4 py-3 text-center font-semibold text-[#002147]">
                    ছাত্র
                  </th>
                  <th className="px-4 py-3 text-center font-semibold text-[#002147]">
                    ছাত্রী
                  </th>
                  <th className="px-4 py-3 text-center font-semibold text-[#002147]">
                    ইসলাম
                  </th>
                  <th className="px-4 py-3 text-center font-semibold text-[#002147]">
                    হিন্দু
                  </th>
                  <th className="px-4 py-3 text-center font-semibold text-[#002147]">
                    বৌদ্ধ
                  </th>
                  <th className="px-4 py-3 text-center font-semibold text-[#002147]">
                    মোট
                  </th>
                </tr>
              </thead>
              <tbody>
                {studentData.map((row, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="px-4 py-3 font-semibold text-[#002147]">
                      {row.class}
                    </td>
                    <td className="px-4 py-3 text-gray-700">{row.section}</td>
                    <td className="px-4 py-3 text-center text-[#002147] font-semibold">
                      {row.male}
                    </td>
                    <td className="px-4 py-3 text-center text-[#002147] font-semibold">
                      {row.female}
                    </td>
                    <td className="px-4 py-3 text-center text-gray-700">
                      {row.islam}
                    </td>
                    <td className="px-4 py-3 text-center text-gray-700">
                      {row.hindu}
                    </td>
                    <td className="px-4 py-3 text-center text-gray-700">
                      {row.buddhist}
                    </td>
                    <td className="px-4 py-3 text-center font-bold text-[#002147]">
                      {row.total}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-[#002147] text-white p-4">
            <h2 className="text-xl font-bold flex items-center">
              <FaTrophy className="mr-3" />
              বৃত্তি প্রাপ্ত শিক্ষার্থীর তালিকা
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-[#002147]">
                    ক্রম
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-[#002147]">
                    শ্রেণি
                  </th>
                  <th className="px-4 py-3 text-center font-semibold text-[#002147]">
                    ছাত্র
                  </th>
                  <th className="px-4 py-3 text-center font-semibold text-[#002147]">
                    ছাত্রী
                  </th>
                  <th className="px-4 py-3 text-center font-semibold text-[#002147]">
                    মোট
                  </th>
                </tr>
              </thead>
              <tbody>
                {scholarshipData.map((row, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="px-4 py-3 font-semibold text-[#002147]">
                      {String(index + 1).padStart(2, "0")}
                    </td>
                    <td className="px-4 py-3 font-semibold text-[#002147]">
                      {row.class}
                    </td>
                    <td className="px-4 py-3 text-center text-[#002147] font-semibold">
                      {row.male}
                    </td>
                    <td className="px-4 py-3 text-center text-[#002147] font-semibold">
                      {row.female}
                    </td>
                    <td className="px-4 py-3 text-center font-bold text-[#002147]">
                      {row.total}
                    </td>
                  </tr>
                ))}
                <tr className="bg-[#002147] text-white font-bold">
                  <td className="px-4 py-3" colSpan="2">
                    মোট
                  </td>
                  <td className="px-4 py-3 text-center">
                    {scholarshipData.reduce((sum, item) => sum + item.male, 0)}
                  </td>
                  <td className="px-4 py-3 text-center">
                    {scholarshipData.reduce(
                      (sum, item) => sum + item.female,
                      0
                    )}
                  </td>
                  <td className="px-4 py-3 text-center text-lg">
                    {totalScholarship}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentInfo;
