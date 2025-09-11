"use client"

import { useState } from "react"
import { FaUser, FaHome, FaGraduationCap, FaUpload, FaCheck, FaSpinner, FaIdCard, FaMapMarkerAlt } from "react-icons/fa"

const OnlineApplicationForm = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    email: "",
    religion: "Islam",
    applicantClass: "",
    fatherName: "",
    motherName: "",
    localGuardianName: "",
    permanentAddress: "",
    presentAddress: "",
    isScholarship: "No",
    guardianYearlyIncome: "",
    gender: "Male",
    birthday: "",
    tribal: "Chakma",
    department: "",
    fatherOccupation: "",
    motherOccupation: "",
    relationWithStudent: "",
    city: "",
    presentCity: "",
    isAutistic: "No",
    studentImage: null,
    bloodGroup: "",
    smsAlertMobile: "",
    nationality: "Bangladesh",
    previousSchoolName: "",
    fatherMobile: "",
    motherMobile: "",
    guardianProfession: "",
    district: "",
    presentDistrict: "",
    autisticType: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [currentSection, setCurrentSection] = useState(0)

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      alert("আবেদন সফলভাবে জমা দেওয়া হয়েছে! (Application submitted successfully!)")
    }, 2000)
  }

  const sections = [
    {
      title: "ব্যক্তিগত তথ্য",
      icon: <FaUser className="text-xl" />,
      fields: ["studentName", "email", "religion", "gender", "birthday", "bloodGroup", "nationality", "tribal"],
    },
    {
      title: "শিক্ষা সংক্রান্ত তথ্য",
      icon: <FaGraduationCap className="text-xl" />,
      fields: ["applicantClass", "department", "previousSchoolName", "isScholarship"],
    },
    {
      title: "পারিবারিক তথ্য",
      icon: <FaHome className="text-xl" />,
      fields: [
        "fatherName",
        "motherName",
        "fatherOccupation",
        "motherOccupation",
        "fatherMobile",
        "motherMobile",
        "guardianYearlyIncome",
      ],
    },
    {
      title: "ঠিকানা ও যোগাযোগ",
      icon: <FaMapMarkerAlt className="text-xl" />,
      fields: [
        "permanentAddress",
        "presentAddress",
        "city",
        "presentCity",
        "district",
        "presentDistrict",
        "smsAlertMobile",
      ],
    },
    {
      title: "অভিভাবক ও অন্যান্য তথ্য",
      icon: <FaIdCard className="text-xl" />,
      fields: [
        "localGuardianName",
        "relationWithStudent",
        "guardianProfession",
        "isAutistic",
        "autisticType",
        "studentImage",
      ],
    },
  ]

  const renderField = (fieldName) => {
    const commonInputClass =
      "w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#002147] focus:outline-none transition-colors duration-300 text-gray-700"
    const labelClass = "block text-sm font-semibold text-[#002147] mb-2"

    switch (fieldName) {
      case "studentName":
        return (
          <div className="mb-6">
            <label className={labelClass}>Student Name :</label>
            <input
              type="text"
              name="studentName"
              value={formData.studentName}
              onChange={handleInputChange}
              className={commonInputClass}
              placeholder="Enter Your Name"
              required
            />
          </div>
        )

      case "email":
        return (
          <div className="mb-6">
            <label className={labelClass}>Email Address :</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={commonInputClass}
              placeholder="Enter Your Email"
              required
            />
          </div>
        )

      case "religion":
        return (
          <div className="mb-6">
            <label className={labelClass}>Religion :</label>
            <select
              name="religion"
              value={formData.religion}
              onChange={handleInputChange}
              className={commonInputClass}
              required
            >
              <option value="Islam">Islam</option>
              <option value="Hindu">Hindu</option>
              <option value="Buddhist">Buddhist</option>
              <option value="Christian">Christian</option>
            </select>
          </div>
        )

      case "applicantClass":
        return (
          <div className="mb-6">
            <label className={labelClass}>Applicant For Class :</label>
            <select
              name="applicantClass"
              value={formData.applicantClass}
              onChange={handleInputChange}
              className={commonInputClass}
              required
            >
              <option value="">Select Class</option>
              <option value="6">Class 6</option>
              <option value="7">Class 7</option>
              <option value="8">Class 8</option>
              <option value="9">Class 9</option>
              <option value="10">Class 10</option>
            </select>
          </div>
        )

      case "fatherName":
        return (
          <div className="mb-6">
            <label className={labelClass}>Father's Name :</label>
            <input
              type="text"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleInputChange}
              className={commonInputClass}
              required
            />
          </div>
        )

      case "motherName":
        return (
          <div className="mb-6">
            <label className={labelClass}>Mothers Name :</label>
            <input
              type="text"
              name="motherName"
              value={formData.motherName}
              onChange={handleInputChange}
              className={commonInputClass}
              required
            />
          </div>
        )

      case "localGuardianName":
        return (
          <div className="mb-6">
            <label className={labelClass}>Local Guardian name :</label>
            <input
              type="text"
              name="localGuardianName"
              value={formData.localGuardianName}
              onChange={handleInputChange}
              className={commonInputClass}
            />
          </div>
        )

      case "permanentAddress":
        return (
          <div className="mb-6">
            <label className={labelClass}>Permanent Address :</label>
            <textarea
              name="permanentAddress"
              value={formData.permanentAddress}
              onChange={handleInputChange}
              className={commonInputClass}
              rows="3"
              required
            />
          </div>
        )

      case "presentAddress":
        return (
          <div className="mb-6">
            <label className={labelClass}>Present Address :</label>
            <textarea
              name="presentAddress"
              value={formData.presentAddress}
              onChange={handleInputChange}
              className={commonInputClass}
              rows="3"
              required
            />
          </div>
        )

      case "isScholarship":
        return (
          <div className="mb-6">
            <label className={labelClass}>Is Scholarship :</label>
            <select
              name="isScholarship"
              value={formData.isScholarship}
              onChange={handleInputChange}
              className={commonInputClass}
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        )

      case "guardianYearlyIncome":
        return (
          <div className="mb-6">
            <label className={labelClass}>Guardian Yearly Income :</label>
            <input
              type="text"
              name="guardianYearlyIncome"
              value={formData.guardianYearlyIncome}
              onChange={handleInputChange}
              className={commonInputClass}
            />
          </div>
        )

      case "gender":
        return (
          <div className="mb-6">
            <label className={labelClass}>Gender :</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className={commonInputClass}
              required
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        )

      case "birthday":
        return (
          <div className="mb-6">
            <label className={labelClass}>Birthday :</label>
            <input
              type="date"
              name="birthday"
              value={formData.birthday}
              onChange={handleInputChange}
              className={commonInputClass}
              placeholder="mm/dd/yyyy"
              required
            />
          </div>
        )

      case "tribal":
        return (
          <div className="mb-6">
            <label className={labelClass}>Tribal :</label>
            <select name="tribal" value={formData.tribal} onChange={handleInputChange} className={commonInputClass}>
              <option value="Chakma">Chakma</option>
              <option value="Marma">Marma</option>
              <option value="Tripura">Tripura</option>
              <option value="Other">Other</option>
              <option value="No">No</option>
            </select>
          </div>
        )

      case "department":
        return (
          <div className="mb-6">
            <label className={labelClass}>Department :</label>
            <select
              name="department"
              value={formData.department}
              onChange={handleInputChange}
              className={commonInputClass}
            >
              <option value="">Select Department</option>
              <option value="Science">Science</option>
              <option value="Humanities">Humanities</option>
              <option value="Business Studies">Business Studies</option>
            </select>
          </div>
        )

      case "fatherOccupation":
        return (
          <div className="mb-6">
            <label className={labelClass}>Father's Occupation :</label>
            <input
              type="text"
              name="fatherOccupation"
              value={formData.fatherOccupation}
              onChange={handleInputChange}
              className={commonInputClass}
            />
          </div>
        )

      case "motherOccupation":
        return (
          <div className="mb-6">
            <label className={labelClass}>Mother's Occupation :</label>
            <input
              type="text"
              name="motherOccupation"
              value={formData.motherOccupation}
              onChange={handleInputChange}
              className={commonInputClass}
            />
          </div>
        )

      case "relationWithStudent":
        return (
          <div className="mb-6">
            <label className={labelClass}>Relation with Student :</label>
            <input
              type="text"
              name="relationWithStudent"
              value={formData.relationWithStudent}
              onChange={handleInputChange}
              className={commonInputClass}
            />
          </div>
        )

      case "city":
        return (
          <div className="mb-6">
            <label className={labelClass}>City :</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className={commonInputClass}
            />
          </div>
        )

      case "presentCity":
        return (
          <div className="mb-6">
            <label className={labelClass}>City :</label>
            <input
              type="text"
              name="presentCity"
              value={formData.presentCity}
              onChange={handleInputChange}
              className={commonInputClass}
            />
          </div>
        )

      case "isAutistic":
        return (
          <div className="mb-6">
            <label className={labelClass}>Is Autistic :</label>
            <select
              name="isAutistic"
              value={formData.isAutistic}
              onChange={handleInputChange}
              className={commonInputClass}
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        )

      case "studentImage":
        return (
          <div className="mb-6">
            <label className={labelClass}>Student Image :</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#002147] transition-colors duration-300">
              <FaUpload className="mx-auto text-3xl text-gray-400 mb-3" />
              <input
                type="file"
                name="studentImage"
                onChange={handleInputChange}
                className="hidden"
                id="studentImage"
                accept="image/jpeg,image/jpg"
                required
              />
              <label htmlFor="studentImage" className="cursor-pointer">
                <span className="text-[#002147] font-semibold">No file chosen</span>
              </label>
            </div>
          </div>
        )

      case "bloodGroup":
        return (
          <div className="mb-6">
            <label className={labelClass}>Blood Group :</label>
            <select
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleInputChange}
              className={commonInputClass}
            >
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>
        )

      case "smsAlertMobile":
        return (
          <div className="mb-6">
            <label className={labelClass}>SMS Alert Mobile Number :</label>
            <input
              type="tel"
              name="smsAlertMobile"
              value={formData.smsAlertMobile}
              onChange={handleInputChange}
              className={commonInputClass}
              placeholder="+8801XXXXXXXXX"
              required
            />
          </div>
        )

      case "nationality":
        return (
          <div className="mb-6">
            <label className={labelClass}>Nationality :</label>
            <input
              type="text"
              name="nationality"
              value={formData.nationality}
              onChange={handleInputChange}
              className={commonInputClass}
              placeholder="Bangladesh"
            />
          </div>
        )

      case "previousSchoolName":
        return (
          <div className="mb-6">
            <label className={labelClass}>Previous School Name :</label>
            <input
              type="text"
              name="previousSchoolName"
              value={formData.previousSchoolName}
              onChange={handleInputChange}
              className={commonInputClass}
            />
          </div>
        )

      case "fatherMobile":
        return (
          <div className="mb-6">
            <label className={labelClass}>Father's Mobile Number :</label>
            <input
              type="tel"
              name="fatherMobile"
              value={formData.fatherMobile}
              onChange={handleInputChange}
              className={commonInputClass}
              placeholder="8801XXXXXXXXX"
              required
            />
          </div>
        )

      case "motherMobile":
        return (
          <div className="mb-6">
            <label className={labelClass}>Mother's Mobile Number :</label>
            <input
              type="tel"
              name="motherMobile"
              value={formData.motherMobile}
              onChange={handleInputChange}
              className={commonInputClass}
              placeholder="8801XXXXXXXXX"
            />
          </div>
        )

      case "guardianProfession":
        return (
          <div className="mb-6">
            <label className={labelClass}>Guardian Profession :</label>
            <select
              name="guardianProfession"
              value={formData.guardianProfession}
              onChange={handleInputChange}
              className={commonInputClass}
            >
              <option value="">Select Profession</option>
              <option value="Service">Service</option>
              <option value="Business">Business</option>
              <option value="Agriculture">Agriculture</option>
              <option value="Teacher">Teacher</option>
              <option value="Other">Other</option>
            </select>
          </div>
        )

      case "district":
        return (
          <div className="mb-6">
            <label className={labelClass}>District :</label>
            <select name="district" value={formData.district} onChange={handleInputChange} className={commonInputClass}>
              <option value="">District :</option>
              <option value="Chittagong">Chittagong</option>
              <option value="Dhaka">Dhaka</option>
              <option value="Sylhet">Sylhet</option>
              <option value="Rajshahi">Rajshahi</option>
              <option value="Other">Other</option>
            </select>
          </div>
        )

      case "presentDistrict":
        return (
          <div className="mb-6">
            <label className={labelClass}>District :</label>
            <select
              name="presentDistrict"
              value={formData.presentDistrict}
              onChange={handleInputChange}
              className={commonInputClass}
            >
              <option value="">District :</option>
              <option value="Chittagong">Chittagong</option>
              <option value="Dhaka">Dhaka</option>
              <option value="Sylhet">Sylhet</option>
              <option value="Rajshahi">Rajshahi</option>
              <option value="Other">Other</option>
            </select>
          </div>
        )

      case "autisticType":
        return (
          <div className="mb-6">
            <label className={labelClass}>Autistic Type :</label>
            <input
              type="text"
              name="autisticType"
              value={formData.autisticType}
              onChange={handleInputChange}
              className={commonInputClass}
            />
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <img
              src="https://maphsctg.edu.bd/logo/1739418675logo1.png"
              alt="School Logo"
              className="w-20 h-20 mx-auto mb-4 object-contain"
            />
            <h1 className="text-3xl font-bold text-[#002147] mb-2">Mahamuni Anglo-Pali High School</h1>
            <h2 className="text-xl text-gray-600 mb-4">Online Application Form</h2>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            {sections.map((section, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-colors duration-300 ${
                    index <= currentSection ? "bg-[#002147] text-white" : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {index < currentSection ? <FaCheck /> : index + 1}
                </div>
                <span className="text-xs mt-2 text-center max-w-20 leading-tight">{section.title.split(" ")[0]}</span>
              </div>
            ))}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-[#002147] h-2 rounded-full transition-all duration-500"
              style={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
          <div className="mb-8">
            <div className="flex items-center mb-6">
              <div className="bg-[#002147] text-white p-3 rounded-full mr-4">{sections[currentSection].icon}</div>
              <h3 className="text-2xl font-bold text-[#002147]">{sections[currentSection].title}</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {sections[currentSection].fields.map((field) => (
                <div
                  key={field}
                  className={
                    field === "permanentAddress" || field === "presentAddress" || field === "studentImage"
                      ? "lg:col-span-2"
                      : ""
                  }
                >
                  {renderField(field)}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center pt-6 border-t">
            <button
              type="button"
              onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
              disabled={currentSection === 0}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                currentSection === 0
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-gray-500 text-white hover:bg-gray-600"
              }`}
            >
              Previous
            </button>

            {currentSection < sections.length - 1 ? (
              <button
                type="button"
                onClick={() => setCurrentSection(currentSection + 1)}
                className="px-6 py-3 bg-[#002147] text-white rounded-lg font-semibold hover:bg-blue-900 transition-all duration-300"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 flex items-center disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <FaSpinner className="animate-spin mr-2" />
                    Submitting...
                  </>
                ) : (
                  "Submit Application"
                )}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default OnlineApplicationForm
