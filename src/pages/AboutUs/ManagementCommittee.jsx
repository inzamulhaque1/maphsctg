import React, {  useState } from "react";
import {
  FaPhone,
  FaUserTie,
  FaChalkboardTeacher,
  FaUsers,
  FaFemale,
  FaSearch,
} from "react-icons/fa";

const ManagementCommittee = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  
  const committeeMembers = [
    {
      id: 1,
      name: "জনাব রূপম কিশোর বড়–য়া",
      position: "সভাপতি",
      phone: "০১৯৭৯৭৬০৯৪",
      category: "chairman",
      gender: "male",
    },
    {
      id: 2,
      name: "জনাব আহম্মদ বশার",
      position: "বিদ্যেৎসাহী সদস্য",
      phone: "০১৮১৯৯৬৮৩২৬",
      category: "enthusiast",
      gender: "male",
    },
    {
      id: 3,
      name: "জনাব অঞ্জন বড়–য়া",
      position: "প্রধান শিক্ষক/সম্পাদক",
      phone: "০১৮১৯৬৩৯৫৭২",
      category: "principal",
      gender: "male",
    },
    {
      id: 4,
      name: "জনাব অভিজিত বড়–য়া",
      position: "অভিভাবক সদস্য",
      phone: "০১৮১৮০৪১০৩৬",
      category: "guardian",
      gender: "male",
    },
    {
      id: 5,
      name: "জনাব ওমর ফারুক",
      position: "অভিভাবক সদস্য",
      phone: "০১৮৫৮৮১৬৭৫৮",
      category: "guardian",
      gender: "male",
    },
    {
      id: 6,
      name: "জনাব তারেক মিঞা চৌধুরী",
      position: "অভিভাবক সদস্য",
      phone: "০১৮৬৫৭৮৯৭০১",
      category: "guardian",
      gender: "male",
    },
    {
      id: 7,
      name: "জনাব প্রণব দাশ গুপ্ত",
      position: "অভিভাবক সদস্য",
      phone: "০১৮১৮৫৯৬৬৮৩",
      category: "guardian",
      gender: "male",
    },
    {
      id: 8,
      name: "জনাব সবু বড়–য়া",
      position: "(সংরক্ষিত মহিলা)অভিভাবক সদস্য",
      phone: "০১৮১৩৩৪৮৩১৬",
      category: "guardian",
      gender: "female",
    },
    {
      id: 9,
      name: "জনাব অরূপ দাশ",
      position: "শিক্ষক প্রতিনিধি",
      phone: "০১৭১৫৭০৩৭৭০",
      category: "teacher",
      gender: "male",
    },
    {
      id: 10,
      name: "জনাব শিবাশীষ রায়",
      position: "শিক্ষক প্রতিনিধি",
      phone: "০১৭১৬৫২৪৪৩০",
      category: "teacher",
      gender: "male",
    },
    {
      id: 11,
      name: "জনাব পান্না চৌধুরী",
      position: "(সংরক্ষিত মহিলা)শিক্ষক প্রতিনিধি",
      phone: "০১৭৫৬২০১০৮১",
      category: "teacher",
      gender: "female",
    },
  ];

  const filteredMembers = committeeMembers.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.phone.includes(searchTerm)
  );

  const getCategoryIcon = (category) => {
    switch (category) {
      case "chairman":
        return <FaUserTie className="text-[#002147]" />;
      case "principal":
        return <FaChalkboardTeacher className="text-[#002147]" />;
      case "teacher":
        return <FaChalkboardTeacher className="text-[#002147]" />;
      case "guardian":
        return <FaUsers className="text-[#002147]" />;
      case "enthusiast":
        return <FaUsers className="text-[#002147]" />;
      default:
        return <FaUsers className="text-[#002147]" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-4 md:py-8 px-3 md:px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-[#002147] mb-2 font-bangla1">
            ব্যবস্থাপনা কমিট
          </h1>
          <p className="text-[#002147] text-sm md:text-base">
            মহামুনি এংলো-পালি উচ্চ বিদ্যালয়
          </p>
        </div>

        {/* Search Box */}
        <div className="bg-white rounded-lg shadow-md p-3 md:p-4 mb-4 md:mb-6">
          <div className="flex items-center border border-blue-200 rounded-lg px-3 py-2">
            <FaSearch className="text-blue-500 mr-2" />
            <input
              type="text"
              placeholder="সদস্য খুঁজুন..."
              className="w-full outline-none text-sm md:text-base"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Committee Members Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#002147] text-white">
                  <th className="py-2 md:py-3 px-2 md:px-4 text-left text-xs md:text-sm">
                    নং
                  </th>
                  <th className="py-2 md:py-3 px-2 md:px-4 text-left text-xs md:text-sm">
                    নাম
                  </th>
                  <th className="py-2 md:py-3 px-2 md:px-4 text-left text-xs md:text-sm hidden sm:table-cell">
                    পদবি
                  </th>
                  <th className="py-2 md:py-3 px-2 md:px-4 text-left text-xs md:text-sm">
                    মোবাইল
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredMembers.map((member, index) => (
                  <tr
                    key={member.id}
                    className={index % 2 === 0 ? "bg-blue-50" : "bg-white"}
                  >
                    <td className="py-3 px-2 md:px-4 font-medium text-xs md:text-sm">
                      {member.id}
                    </td>
                    <td className="py-3 px-2 md:px-4">
                      <div className="flex items-center">
                        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                          {getCategoryIcon(member.category)}
                        </div>
                        <div>
                          <div className="text-xs md:text-sm">
                            {member.name}
                          </div>
                          <div className="text-xs text-gray-600 sm:hidden mt-1">
                            {member.position}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-2 md:px-4 text-xs md:text-sm hidden sm:table-cell">
                      {member.position}
                    </td>
                    <td className="py-3 px-2 md:px-4 text-xs md:text-sm">
                      <div className="flex items-center">
                        <FaPhone className="text-[#002147] mr-1 hidden xs:inline" />
                        <span>{member.phone}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-4 md:mt-6 bg-white rounded-lg shadow-md p-3 md:p-4">
          <h3 className="font-bold text-[#002147] mb-2 text-sm md:text-base">
            ব্যাখ্যা:
          </h3>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-2 text-xs md:text-sm">
            <div className="flex items-center">
              <FaUserTie className="text-[#002147] mr-1" />
              <span>সভাপতি</span>
            </div>
            <div className="flex items-center">
              <FaChalkboardTeacher className="text-[#002147] mr-1" />
              <span>শিক্ষক</span>
            </div>
            <div className="flex items-center">
              <FaUsers className="text-[#002147] mr-1" />
              <span>অভিভাবক</span>
            </div>
            <div className="flex items-center">
              <FaFemale className="text-pink-500 mr-1" />
              <span>মহিলা সদস্য</span>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-4 md:mt-6 text-center text-xs md:text-sm text-[#002147]">
          <p>
            এই কমিটি বিদ্যালয়ের উন্নয়ন ও পরিচালনায় গুরুত্বপূর্ণ ভূমিকা পালন
            করে
          </p>
        </div>
      </div>
    </div>
  );
};

export default ManagementCommittee;
