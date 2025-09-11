/* eslint-disable no-unused-vars */

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiPhoneCall,
  FiMail,
  FiUser,
  FiLogOut,
  FiLogIn,
  FiGrid,
  FiChevronDown,
} from "react-icons/fi";

const Topbar = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-[#002147] text-white text-xs sm:text-sm  px-1 py-1 shadow-lg relative font-poppins">
      <div className="md:container mx-auto flex items-center justify-between">
        {/* Left Section - Contact & Email (Mobile: stacked vertically) */}
        <div className="hidden md:flex  gap-3">
          {/* Phone */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 group cursor-pointer border-b"
          >
            <motion.div className="p-2 rounded-tl-2xl bg-white group-hover:bg-white transition-all duration-300">
              <FiPhoneCall className="text-[#002147] text-lg" />
            </motion.div>
            <a
              href="tel:+8801819639572"
              className="hover:text-white transition-colors duration-300 font-medium hover:border-b"
            >
              +880 1819 639 572
            </a>
          </motion.div>
          <div className="h-8 border-r hidden md:flex"></div>
          {/* Email */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-2 group cursor-pointer  border-b"
          >
            <a
              href="mailto:mahamuni_aphs@yahoo.com"
              className="hover:text-white transition-colors duration-300 font-medium truncate max-w-[180px] sm:max-w-none hover:border-b"
            >
              mahamuni_aphs@yahoo.com
            </a>

            <motion.div className="p-2 rounded-tr-2xl bg-white group-hover:bg-white transition-all duration-300">
              <FiMail className="text-[#002147] text-lg" />
            </motion.div>
          </motion.div>
        </div>

        <div className="md:hidden flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">

          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 group cursor-pointer border-b"
          >
            <motion.div className="p-2 rounded-tl-2xl bg-white group-hover:bg-white transition-all duration-300">
              <FiPhoneCall className="text-[#002147] text-lg" />
            </motion.div>
            <a
              href="tel:+8801819639572"
              className="hover:text-white transition-colors duration-300 font-medium hover:border-b"
            >
              +880 1819 639 572
            </a>
          </motion.div>

          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-2 group cursor-pointer"
          >
            

            <motion.div className="p-2 rounded-bl-2xl bg-white group-hover:bg-white transition-all duration-300">
              <FiMail className="text-[#002147] text-lg" />
            </motion.div>
            <a
              href="mailto:mahamuni_aphs@yahoo.com"
              className="hover:text-white transition-colors duration-300 font-medium truncate max-w-[180px] sm:max-w-none hover:border-b"
            >
              mahamuni_aphs@yahoo.com
            </a>
          </motion.div>

        </div>

        {/* Right Section - Account Dropdown */}
        <motion.div
          ref={dropdownRef}
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <motion.button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 px-2 py-1.5 bg-white transition-all duration-300  shadow-lg hover:shadow-xl rounded-tr-4xl rounded-bl-3xl md:rounded-bl-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiUser className="text-[#002147] text-lg" />
            <span className="hidden sm:block font-medium text-[#002147]">
              Account
            </span>
            <motion.div
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
            >
              <FiChevronDown className="text-[#002147]" />
            </motion.div>
          </motion.button>

          <AnimatePresence>
            {open && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 bg-black/20  z-40"
                  onClick={() => setOpen(false)}
                />

                {/* Dropdown */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: -20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{
                    duration: 0.4,
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  className="absolute right-0 mt-3 w-56 bg-white text-gray-800 rounded-xl shadow-2xl overflow-hidden z-50 border border-gray-100"
                >
                  <div className="py-1">
                    <motion.a
                      href="#dashboard"
                      className="flex items-center gap-3 px-5 py-3 hover:bg-blue-50 transition-colors duration-200"
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setOpen(false)}
                    >
                      <div className="p-2 rounded-lg bg-blue-100">
                        <FiGrid className="text-blue-600 text-lg" />
                      </div>
                      <span className="font-medium">Dashboard</span>
                    </motion.a>

                    <motion.a
                      href="#login"
                      className="flex items-center gap-3 px-5 py-3 hover:bg-green-50 transition-colors duration-200"
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setOpen(false)}
                    >
                      <div className="p-2 rounded-lg bg-green-100">
                        <FiLogIn className="text-green-600 text-lg" />
                      </div>
                      <span className="font-medium">Login</span>
                    </motion.a>

                    <motion.a
                      href="#logout"
                      className="flex items-center gap-3 px-5 py-3 hover:bg-red-50 transition-colors duration-200"
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setOpen(false)}
                    >
                      <div className="p-2 rounded-lg bg-red-100">
                        <FiLogOut className="text-red-600 text-lg" />
                      </div>
                      <span className="font-medium">Logout</span>
                    </motion.a>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Topbar;
