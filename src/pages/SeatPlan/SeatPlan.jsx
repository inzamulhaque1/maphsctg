"use client"

import { useState, useEffect } from "react"
import { FaChair, FaChevronLeft, FaUser, FaUsers, FaClipboardList, FaGraduationCap, FaBars } from "react-icons/fa"

const SeatPlan = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const allClasses = [
    {
      name: "ষষ্ঠ শ্রেণি",
      students: [
        { name: "আহমেদ হাসান", roll: "৬০১", class: "ষষ্ঠ" },
        { name: "ফাতিমা খাতুন", roll: "৬০২", class: "ষষ্ঠ" },
        { name: "রহিম উদ্দিন", roll: "৬০৩", class: "ষষ্ঠ" },
        { name: "সালমা বেগম", roll: "৬০৪", class: "ষষ্ঠ" },
        { name: "করিম মিয়া", roll: "৬০৫", class: "ষষ্ঠ" },
        { name: "রাশিদা আক্তার", roll: "৬০৬", class: "ষষ্ঠ" },
        { name: "নাসির আহমেদ", roll: "৬০৭", class: "ষষ্ঠ" },
        { name: "রুমানা খাতুন", roll: "৬০৮", class: "ষষ্ঠ" },
        { name: "জাহিদ হোসেন", roll: "৬০৯", class: "ষষ্ঠ" },
        { name: "সুমাইয়া আক্তার", roll: "৬১০", class: "ষষ্ঠ" },
      ],
    },
    {
      name: "সপ্তম শ্রেণি",
      students: [
        { name: "মোহাম্মদ আলী", roll: "৭০১", class: "সপ্তম" },
        { name: "আয়েশা সিদ্দিকা", roll: "৭০২", class: "সপ্তম" },
        { name: "আব্দুল জলিল", roll: "৭০৩", class: "সপ্তম" },
        { name: "খাদিজা খাতুন", roll: "৭০৪", class: "সপ্তম" },
        { name: "নুরুল আমিন", roll: "৭০৫", class: "সপ্তম" },
        { name: "ফরিদা বেগম", roll: "৭০৬", class: "সপ্তম" },
        { name: "আব্দুস সালাম", roll: "৭০৭", class: "সপ্তম" },
        { name: "রুকসানা আক্তার", roll: "৭০৮", class: "সপ্তম" },
        { name: "মোশারফ হোসেন", roll: "৭০৯", class: "সপ্তম" },
        { name: "নাফিসা খাতুন", roll: "৭১০", class: "সপ্তম" },
      ],
    },
    {
      name: "অষ্টম শ্রেণি",
      students: [
        { name: "আব্দুর রশিদ", roll: "৮০১", class: "অষ্টম" },
        { name: "সালমা আক্তার", roll: "৮০২", class: "অষ্টম" },
        { name: "মোহাম্মদ ইউসুফ", roll: "৮০৩", class: "অষ্টম" },
        { name: "নাজনীন সুলতানা", roll: "৮০৪", class: "অষ্টম" },
        { name: "আব্দুল আজিজ", roll: "৮০৫", class: "অষ্টম" },
        { name: "রাহেলা বেগম", roll: "৮০৬", class: "অষ্টম" },
        { name: "নুরুল হুদা", roll: "৮০৭", class: "অষ্টম" },
        { name: "সাবিনা খাতুন", roll: "৮০৮", class: "অষ্টম" },
        { name: "আব্দুল মজিদ", roll: "৮০৯", class: "অষ্টম" },
        { name: "ফাতেমা খাতুন", roll: "৮১০", class: "অষ্টম" },
      ],
    },
    {
      name: "নবম শ্রেণি",
      students: [
        { name: "মোহাম্মদ তারিক", roll: "৯০১", class: "নবম" },
        { name: "আয়েশা খাতুন", roll: "৯০২", class: "নবম" },
        { name: "আব্দুল বাসেত", roll: "৯০৩", class: "নবম" },
        { name: "সালমা সুলতানা", roll: "৯০৪", class: "নবম" },
        { name: "নুরুল হক", roll: "৯০৫", class: "নবম" },
        { name: "রাশিদা পারভীন", roll: "৯০৬", class: "নবম" },
        { name: "মোহাম্মদ সাদিক", roll: "৯০৭", class: "নবম" },
        { name: "নাজমা আক্তার", roll: "৯০৮", class: "নবম" },
        { name: "আব্দুল ওয়াহাব", roll: "৯০৯", class: "নবম" },
        { name: "ফাতিমা বেগম", roll: "৯১০", class: "নবম" },
      ],
    },
    {
      name: "দশম শ্রেণি",
      students: [
        { name: "আব্দুল আলিম", roll: "১০০১", class: "দশম" },
        { name: "সালমা খাতুন", roll: "১০০২", class: "দশम" },
        { name: "মোহাম্মদ হাবিব", roll: "১০০৩", class: "দশম" },
        { name: "নাজনীন আক্তার", roll: "১০০৪", class: "দশম" },
        { name: "নুরুল আলম", roll: "১০০৫", class: "দশম" },
        { name: "রাশিদা খাতুন", roll: "১০০৬", class: "দশম" },
        { name: "আব্দুল হাসিব", roll: "১০০৭", class: "দশম" },
        { name: "রুমানা আক্তার", roll: "১০০৮", class: "দশম" },
        { name: "মোহাম্মদ সেলিম", roll: "১০০৯", class: "দশম" },
        { name: "নাফিসা খাতুন", roll: "১০১০", class: "দশম" },
      ],
    },
  ]

  const examHalls = [
    {
      id: 1,
      name: "পরীক্ষা হল - ১",
      rows: 8,
      seatsPerRow: 6,
      totalSeats: 48,
    },
    {
      id: 2,
      name: "পরীক্ষা হল - ২",
      rows: 7,
      seatsPerRow: 5,
      totalSeats: 35,
    },
    {
      id: 3,
      name: "পরীক্ষা হল - ৩",
      rows: 6,
      seatsPerRow: 6,
      totalSeats: 36,
    },
  ]

  const createExamSeating = (hall) => {
    const allStudents = allClasses.flatMap((cls) => cls.students)
    const seatingArrangement = []

    // Shuffle students to randomize seating
    const shuffledStudents = [...allStudents].sort(() => Math.random() - 0.5)

    const studentIndex = 0

    for (let row = 0; row < hall.rows; row++) {
      const rowStudents = []
      const usedClasses = new Set()

      for (let seat = 0; seat < hall.seatsPerRow; seat++) {
        let selectedStudent = null
        let attempts = 0

        // Try to find a student from a different class than already seated in this row
        while (attempts < shuffledStudents.length && !selectedStudent) {
          const candidateIndex = (studentIndex + attempts) % shuffledStudents.length
          const candidate = shuffledStudents[candidateIndex]

          if (candidate && !usedClasses.has(candidate.class)) {
            selectedStudent = candidate
            usedClasses.add(candidate.class)
            // Remove selected student from shuffled array
            shuffledStudents.splice(candidateIndex, 1)
            break
          }
          attempts++
        }

        // If no different class student found, take any available student
        if (!selectedStudent && shuffledStudents.length > 0) {
          selectedStudent = shuffledStudents.shift()
        }

        rowStudents.push(selectedStudent)
      }

      seatingArrangement.push(rowStudents)
    }

    return seatingArrangement
  }

  const renderExamSeatGrid = (hall) => {
    const seatingArrangement = createExamSeating(hall)
    const seats = []

    seatingArrangement.forEach((rowStudents, rowIndex) => {
      const rowSeats = []

      rowStudents.forEach((student, seatIndex) => {
        const seatNumber = rowIndex * hall.seatsPerRow + seatIndex + 1
        const isOccupied = student !== null

        const getClassColor = (className) => {
          const colors = {
            ষষ্ঠ: "bg-blue-500",
            সপ্তম: "bg-green-500",
            অষ্টম: "bg-purple-500",
            নবম: "bg-red-500",
            দশম: "bg-indigo-500",
          }
          return colors[className] || "bg-gray-500"
        }

        rowSeats.push(
          <div
            key={`${rowIndex}-${seatIndex}`}
            className={`
              relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-lg sm:rounded-xl border-2 flex flex-col items-center justify-center text-xs font-medium
              ${
                isOccupied
                  ? `${getClassColor(student.class)} text-white border-gray-300 shadow-lg transform hover:scale-110`
                  : "bg-gray-100 text-gray-400 border-gray-300 hover:bg-gray-200"
              }
              transition-all duration-300 cursor-pointer
            `}
            title={isOccupied ? `${student.name} - রোল: ${student.roll} - শ্রেণি: ${student.class}` : "খালি আসন"}
          >
            <div className="text-center">
              <FaUser className={`text-xs sm:text-sm md:text-lg mb-0.5 sm:mb-1 mx-auto ${isOccupied ? "text-white" : "text-gray-400"}`} />
              <div className="text-[8px] sm:text-[10px] font-bold">{seatNumber}</div>
              {isOccupied && <div className="text-[7px] sm:text-[9px] font-bold mt-0.5 sm:mt-1">{student.roll}</div>}
            </div>
            {isOccupied && (
              <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 bg-[#002147] text-white px-2 py-1 sm:px-3 sm:py-2 rounded-lg text-[10px] sm:text-[11px] shadow-xl opacity-0 hover:opacity-100 transition-all duration-300 whitespace-nowrap z-20 font-medium hidden sm:block">
                <div className="font-bold">{student.name}</div>
                <div>রোল: {student.roll}</div>
                <div>শ্রেণি: {student.class}</div>
                <div className="absolute top-[-4px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-[#002147]"></div>
              </div>
            )}
          </div>,
        )
      })

      seats.push(
        <div key={rowIndex} className="flex justify-center items-center space-x-2 sm:space-x-4 mb-4 sm:mb-8">
          <div className="flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-[#002147] to-[#003366] text-white rounded-full text-xs sm:text-sm font-bold shadow-lg">
            {rowIndex + 1}
          </div>
          <div className="flex space-x-1 sm:space-x-2 md:space-x-3">{rowSeats}</div>
        </div>,
      )
    })

    return seats
  }

  const currentHall = examHalls[activeTab]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#002147] via-[#003366] to-[#004488] text-white py-8 md:py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <FaGraduationCap className="text-4xl md:text-6xl mx-auto mb-4 md:mb-6" />
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">পরীক্ষার আসন বিন্যাস</h1>
          <p className="text-sm sm:text-base md:text-xl lg:text-2xl opacity-90 font-medium">নকল প্রতিরোধী আসন পরিকল্পনা ২০২৩</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-6 md:py-8">
        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="flex items-center space-x-2 text-[#002147] hover:bg-[#002147] hover:text-white px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl border-2 border-[#002147] mb-6 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 text-sm md:text-base"
        >
          <FaChevronLeft className="text-sm md:text-base" />
          <span>Go Back</span>
        </button>

        <div className="bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl p-4 md:p-6 mb-6 md:mb-8">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-[#002147] mb-4 md:mb-6 text-center">পরীক্ষা হল নির্বাচন করুন</h2>
          
          {/* Mobile Hall Selector */}
          {isMobile ? (
            <div className="relative">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-full px-4 py-3 bg-[#002147] text-white rounded-lg font-semibold flex items-center justify-between"
              >
                <span>{examHalls[activeTab].name}</span>
                <FaBars />
              </button>
              
              {mobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg mt-1 z-10">
                  {examHalls.map((hall, index) => (
                    <button
                      key={hall.id}
                      onClick={() => {
                        setActiveTab(index)
                        setMobileMenuOpen(false)
                      }}
                      className={`w-full px-4 py-3 text-left ${
                        activeTab === index ? 'bg-gray-100 text-[#002147]' : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <div className="font-medium">{hall.name}</div>
                      <div className="text-sm opacity-80">{hall.totalSeats} আসন</div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {examHalls.map((hall, index) => (
                <button
                  key={hall.id}
                  onClick={() => setActiveTab(index)}
                  className={`
                    px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 text-sm md:text-base
                    ${
                      activeTab === index
                        ? "bg-[#002147] text-white shadow-lg"
                        : "bg-gray-100 text-[#002147] hover:bg-gray-200"
                    }
                  `}
                >
                  <div className="text-center">
                    <div className="font-bold">{hall.name}</div>
                    <div className="text-xs md:text-sm opacity-80">{hall.totalSeats} আসন</div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-8 md:mb-12">
          <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-3 md:p-6 text-center border-l-4 border-[#002147] transform hover:scale-105 transition-all duration-300">
            <FaUsers className="text-2xl md:text-4xl text-[#002147] mx-auto mb-2 md:mb-4" />
            <h3 className="text-sm md:text-xl font-bold text-[#002147] mb-1 md:mb-2">মোট আসন</h3>
            <p className="text-lg md:text-3xl font-bold text-gray-800">{currentHall.totalSeats}</p>
          </div>
          <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-3 md:p-6 text-center border-l-4 border-green-500 transform hover:scale-105 transition-all duration-300">
            <FaChair className="text-2xl md:text-4xl text-green-500 mx-auto mb-2 md:mb-4" />
            <h3 className="text-sm md:text-xl font-bold text-[#002147] mb-1 md:mb-2">সারি সংখ্যা</h3>
            <p className="text-lg md:text-3xl font-bold text-gray-800">{currentHall.rows}</p>
          </div>
          <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-3 md:p-6 text-center border-l-4 border-red-500 transform hover:scale-105 transition-all duration-300">
            <FaClipboardList className="text-2xl md:text-4xl text-red-500 mx-auto mb-2 md:mb-4" />
            <h3 className="text-sm md:text-xl font-bold text-[#002147] mb-1 md:mb-2">সারিতে আসন</h3>
            <p className="text-lg md:text-3xl font-bold text-gray-800">{currentHall.seatsPerRow}</p>
          </div>
          <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-3 md:p-6 text-center border-l-4 border-blue-500 transform hover:scale-105 transition-all duration-300">
            <FaGraduationCap className="text-2xl md:text-4xl text-blue-500 mx-auto mb-2 md:mb-4" />
            <h3 className="text-sm md:text-xl font-bold text-[#002147] mb-1 md:mb-2">মিশ্র বিন্যাস</h3>
            <p className="text-sm md:text-lg font-bold text-gray-800">সক্রিয়</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl p-4 md:p-6 lg:p-10 mb-6 md:mb-8">
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-[#002147] mb-3 md:mb-4">{currentHall.name}</h2>
            <div className="flex justify-center flex-wrap gap-2 md:gap-4 text-xs md:text-sm font-medium">
              <div className="flex items-center space-x-1 md:space-x-2">
                <div className="w-3 h-3 md:w-4 md:h-4 bg-blue-500 rounded"></div>
                <span>ষষ্ঠ শ্রেণি</span>
              </div>
              <div className="flex items-center space-x-1 md:space-x-2">
                <div className="w-3 h-3 md:w-4 md:h-4 bg-green-500 rounded"></div>
                <span>সপ্তম শ্রেণি</span>
              </div>
              <div className="flex items-center space-x-1 md:space-x-2">
                <div className="w-3 h-3 md:w-4 md:h-4 bg-purple-500 rounded"></div>
                <span>অষ্টম শ্রেণি</span>
              </div>
              <div className="flex items-center space-x-1 md:space-x-2">
                <div className="w-3 h-3 md:w-4 md:h-4 bg-red-500 rounded"></div>
                <span>নবম শ্রেণি</span>
              </div>
              <div className="flex items-center space-x-1 md:space-x-2">
                <div className="w-3 h-3 md:w-4 md:h-4 bg-indigo-500 rounded"></div>
                <span>দশম শ্রেণি</span>
              </div>
            </div>
          </div>

          {/* Teacher's Desk */}
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-block bg-gradient-to-r from-[#002147] to-[#003366] text-white px-6 py-3 md:px-12 md:py-6 rounded-xl md:rounded-2xl font-bold text-sm md:text-xl shadow-lg md:shadow-xl">
              <FaGraduationCap className="inline-block mr-2 md:mr-3 text-lg md:text-2xl" />
              পরীক্ষকের টেবিল
            </div>
          </div>

          {/* Seat Grid */}
          <div className="relative bg-gray-50 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 overflow-x-auto">
            {renderExamSeatGrid(currentHall)}
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-[#002147] rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg">
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[#002147] mb-4 md:mb-6 flex items-center">
            <FaClipboardList className="mr-2 md:mr-3 text-sm md:text-base" />
            পরীক্ষার আসন বিন্যাস নির্দেশনা:
          </h3>
          <ul className="space-y-2 md:space-y-3 text-gray-700 text-sm md:text-base lg:text-lg">
            <li className="flex items-start">
              <span className="text-[#002147] mr-2 md:mr-3 font-bold">•</span>
              একই সারিতে একই শ্রেণির শিক্ষার্থী বসবে না (নকল প্রতিরোধে)
            </li>
            <li className="flex items-start">
              <span className="text-[#002147] mr-2 md:mr-3 font-bold">•</span>
              একই কলামে (উপর-নিচে) একই শ্রেণির শিক্ষার্থী বসতে পারবে
            </li>
            <li className="flex items-start">
              <span className="text-[#002147] mr-2 md:mr-3 font-bold">•</span>
              রঙের মাধ্যমে বিভিন্ন শ্রেণি চিহ্নিত করা হয়েছে
            </li>
            <li className="flex items-start">
              <span className="text-[#002147] mr-2 md:mr-3 font-bold">•</span>
              আসনের উপর হোভার করলে শিক্ষার্থীর বিস্তারিত তথ্য দেখা যাবে
            </li>
            <li className="flex items-start">
              <span className="text-[#002147] mr-2 md:mr-3 font-bold">•</span>
              প্রতিটি আসনে রোল নম্বর স্পষ্টভাবে দেখানো হয়েছে
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SeatPlan