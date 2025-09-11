/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Star,
  BookOpen,
  Trophy,
  GraduationCap,
  Bell,
  ArrowRight,
  Play,
  Pause,
} from "lucide-react"

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [preloadedImages, setPreloadedImages] = useState(new Set())
  const [currentNotice, setCurrentNotice] = useState(0)

  const intervalRef = useRef(null)
  const noticeIntervalRef = useRef(null)
  const containerRef = useRef(null)
  const dragStartRef = useRef(0)

  const images = [
    "https://maphsctg.edu.bd/images/slider/1563685477.jpg",
    "https://maphsctg.edu.bd/images/slider/1554889275.JPG",
    "https://maphsctg.edu.bd/images/slider/1554889287.jpg",
    "https://maphsctg.edu.bd/images/slider/1554889301.jpg",
    "https://maphsctg.edu.bd/images/slider/1554889316.jpg",
  ]

  const notices = [
    {
      icon: <Calendar className="w-5 h-5" />,
      text: "আগামী ১৩ সেপ্টেম্বর আখেরী চাহার সোম্বা উপলক্ষে বিদ্যালয় বন্ধ থাকবে",
      fullText: "আগামী ১৩ সেপ্টেম্বর, বুধবার ২০২৩, আখেরী চাহার সোম্বা উপলক্ষে বিদ্যালয় বন্ধ থাকিবে। সকল শিক্ষার্থীদের জানানো যাচ্ছে।",
    },
    {
      icon: <Star className="w-5 h-5" />,
      text: "আগামী ০৬ সেপ্টেম্বর শুভ জন্মাষ্টমী উপলক্ষে বিদ্যালয় বন্ধ থাকবে",
      fullText: "আগামী ০৬ সেপ্টেম্বর, বুধবার শুভ জন্মাষ্টমী উপলক্ষে বিদ্যালয় বন্ধ থাকিবে। সকল শিক্ষার্থীদের জানানো যাচ্ছে।",
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      text: "বার্ষিক পরীক্ষার সময়সূচী প্রকাশিত হয়েছে সকল শাখার জন্য",
      fullText: "বার্ষিক পরীক্ষার সময়সূচী প্রকাশিত হয়েছে। ২০২৩ সালের বার্ষিক পরীক্ষার সময়সূচী সকল শিক্ষার্থী ও অভিভাবকদের জানানো যাচ্ছে।",
    },
    {
      icon: <Trophy className="w-5 h-5" />,
      text: "আন্তঃবিদ্যালয় ক্রীড়া প্রতিযোগিতায় আমাদের গৌরবজনক বিজয়",
      fullText: "আন্তঃবিদ্যালয় ক্রীড়া প্রতিযোগিতায় গৌরবজনক সাফল্য অর্জন। আমাদের বিদ্যালয়ের শিক্ষার্থীরা জেলা পর্যায়ে অসাধারণ সাফল্য পেয়েছে।",
    },
    {
      icon: <GraduationCap className="w-5 h-5" />,
      text: "নতুন শিক্ষাবর্ষে ভর্তির আবেদন গ্রহণ শুরু হয়েছে আজ থেকে",
      fullText: "২০২৪ শিক্ষাবর্ষে ভর্তির বিজ্ঞপ্তি প্রকাশিত। আগামী শিক্ষাবর্ষ ২০২৪ এর জন্য ভর্তির আবেদন গ্রহণ শুরু হয়েছে।",
    },
  ]

  const heroContent = [
    {
      title: "শিক্ষার আলোয় আলোকিত হোন আমাদের সাথে",
      subtitle: "মাফস কলেজিয়েট স্কুল - শিক্ষার মানোন্নয়নে",
      description:
        "জ্ঞান, মূল্যবোধ ও নৈতিকতার সমন্বয়ে গড়ে তুলুন আপনার সন্তানের উজ্জ্বল ভবিষ্যৎ। আমাদের অভিজ্ঞ শিক্ষকমণ্ডলী ও আধুনিক শিক্ষা ব্যবস্থার মাধ্যমে পান সর্বোচ্চ মানের শিক্ষা।",
    },
    {
      title: "আধুনিক শিক্ষা ব্যবস্থা ও প্রযুক্তি",
      subtitle: "প্রযুক্তি ও ঐতিহ্যের মেলবন্ধন - শিক্ষায়",
      description:
        "ডিজিটাল ক্লাসরুম, স্মার্ট বোর্ড ও অত্যাধুনিক ল্যাবরেটরির মাধ্যমে শিক্ষার্থীদের জন্য তৈরি করেছি এক অনন্য শিক্ষার পরিবেশ। এখানে প্রতিটি শিশু পাবে তার প্রতিভা বিকাশের পূর্ণ সুযোগ।",
    },
    {
      title: "গৌরবময় ঐতিহ্য ও সাফল্যের ইতিহাস",
      subtitle: "৫০+ বছরের শিক্ষার ইতিহাস - গর্বের সাথে",
      description:
        "দীর্ঘ পাঁচ দশকের বেশি সময় ধরে আমরা গড়ে তুলেছি হাজারো মেধাবী শিক্ষার্থী। আমাদের প্রাক্তন শিক্ষার্থীরা আজ দেশ-বিদেশে বিভিন্ন ক্ষেত্রে সফলতার সাথে কাজ করছেন।",
    },
    {
      title: "সহশিক্ষা কার্যক্রম ও সাংস্কৃতিক চর্চা",
      subtitle: "সর্বাঙ্গীণ বিকাশের জন্য - বিশেষ ব্যবস্থা",
      description:
        "খেলাধুলা, সাংস্কৃতিক অনুষ্ঠান, বিজ্ঞান মেলা, বিতর্ক প্রতিযোগিতা সহ নানা ধরনের সহশিক্ষা কার্যক্রমের মাধ্যমে শিক্ষার্থীদের সর্বাঙ্গীণ বিকাশ নিশ্চিত করি।",
    },
    {
      title: "ভবিষ্যতের নেতৃত্ব ও স্বপ্নদ্রষ্টা তৈরি",
      subtitle: "আগামীর স্বপ্নদ্রষ্টা তৈরি করি - আমরা",
      description:
        "নেতৃত্ব, সৃজনশীলতা ও উদ্ভাবনী চিন্তাভাবনা বিকাশের মাধ্যমে আমরা তৈরি করি ভবিষ্যতের যোগ্য নাগরিক। আমাদের শিক্ষার্থীরাই হবে আগামী দিনের বাংলাদেশের কর্ণধার।",
    },
  ]

  // Image preloading
  useEffect(() => {
    const preloadImages = async () => {
      const loadPromises = images.map((src, index) => {
        return new Promise((resolve) => {
          const img = new Image()
          img.onload = () => {
            setPreloadedImages((prev) => new Set([...prev, index]))
            resolve()
          }
          img.onerror = () => resolve()
          img.src = src
        })
      })
      await Promise.all(loadPromises)
    }
    preloadImages()
  }, [])

  // Auto-advance slides
  const advanceSlide = useCallback(() => {
    if (!isDragging && isPlaying && !isTransitioning) {
      setIsTransitioning(true)
      setCurrentSlide((prev) => (prev + 1) % images.length)
      setTimeout(() => setIsTransitioning(false), 5000)
    }
  }, [isDragging, isPlaying, isTransitioning, images.length])

  useEffect(() => {
    if (isPlaying && !isDragging && !isTransitioning) {
      intervalRef.current = setInterval(advanceSlide, 15000)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isPlaying, isDragging, isTransitioning, advanceSlide])

  // Auto-advance notices
  useEffect(() => {
    noticeIntervalRef.current = setInterval(() => {
      setCurrentNotice((prev) => (prev + 1) % notices.length)
    }, 4000)
    return () => {
      if (noticeIntervalRef.current) clearInterval(noticeIntervalRef.current)
    }
  }, [notices.length])

  // Navigation functions
  const goToSlide = useCallback(
    (index) => {
      if (isTransitioning || index === currentSlide) return
      setIsTransitioning(true)
      setCurrentSlide(index)
      setTimeout(() => setIsTransitioning(false), 500)
    },
    [isTransitioning, currentSlide],
  )

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % images.length)
  }, [currentSlide, images.length, goToSlide])

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + images.length) % images.length)
  }, [currentSlide, images.length, goToSlide])

  // Touch/drag handlers
  const handlePointerDown = useCallback((e) => {
    e.preventDefault()
    setIsDragging(true)
    setIsPlaying(false)
    const clientX = e.clientX || (e.touches && e.touches[0] && e.touches[0].clientX) || 0
    dragStartRef.current = clientX
  }, [])

  const handlePointerMove = useCallback(
    (e) => {
      if (!isDragging) return
      const clientX = e.clientX || (e.touches && e.touches[0] && e.touches[0].clientX) || 0
      const diff = clientX - dragStartRef.current
      setDragOffset(diff)
    },
    [isDragging],
  )

  const handlePointerUp = useCallback(() => {
    if (!isDragging) return
    const threshold = 100
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        prevSlide()
      } else {
        nextSlide()
      }
    }
    setDragOffset(0)
    setIsDragging(false)
    setTimeout(() => setIsPlaying(true), 1000)
  }, [isDragging, dragOffset, nextSlide, prevSlide])

  return (
    <div className="relative  bg-[#002147] overflow-hidden py-16">
      <div className="absolute inset-0 bg-slate-900"></div>

      {/* Main hero content */}
      <div className="relative z-10  flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
              currentSlide % 2 === 0 ? "" : "lg:grid-flow-col-dense"
            }`}
          >
            {/* Content section */}
            <div className={`space-y-6 lg:space-y-8 ${currentSlide % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}>
              <div className="bg-slate-800/90 backdrop-blur-xl border border-slate-600/50 rounded-3xl p-3 shadow-2xl">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex items-center gap-3 text-yellow-400">
                    <div className="p-2 bg-yellow-400/20 rounded-xl">
                      <Bell className="w-5 h-5 animate-pulse" />
                    </div>
                    <span className="font-bold text-lg text-yellow-300">সর্বশেষ নোটিশ</span>
                  </div>
                  <div className="flex-1 h-px bg-gradient-to-r from-yellow-400/50 to-transparent"></div>
                </div>

                <div className="relative overflow-hidden rounded-2xl bg-slate-700/50 p-4 border border-slate-600/30">
                  <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${currentNotice * 100}%)` }}
                  >
                    {notices.map((notice, index) => (
                      <div key={index} className="w-full flex-shrink-0">
                        <div className="flex items-start gap-4 group cursor-pointer">
                          <div className="text-yellow-400 mt-1 p-2 bg-yellow-400/15 rounded-xl group-hover:bg-yellow-400/25 transition-colors">
                            {notice.icon}
                          </div>
                          <div className="flex-1 space-y-2">
                            <p className="text-white font-medium text-base leading-relaxed">{notice.text}</p>
                            <p className="text-slate-200 text-sm leading-relaxed">{notice.fullText}</p>
                          </div>
                          <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-yellow-400 group-hover:translate-x-1 transition-all mt-1" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enhanced notice indicators */}
                <div className="flex justify-center gap-3 mt-6">
                  {notices.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentNotice(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentNotice
                          ? "bg-yellow-400 w-8 shadow-lg shadow-yellow-400/50"
                          : "bg-slate-400 hover:bg-slate-300 w-2"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Main hero text */}
              <div className="space-y-6">
                <div className="space-y-3">
                  <p className="text-yellow-300 font-semibold text-lg tracking-wide">
                    {heroContent[currentSlide].subtitle}
                  </p>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                    {heroContent[currentSlide].title}
                  </h1>
                </div>

                {/* <p className="text-xl text-slate-100 leading-relaxed">{heroContent[currentSlide].description}</p> */}
              </div>
            </div>

            {/* Image section */}
            <div className={`relative ${currentSlide % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}>
              <div
                ref={containerRef}
                className="relative aspect-[4/3] lg:aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl shadow-black/50 cursor-grab select-none h-[500px] w-full"
                onMouseDown={handlePointerDown}
                onMouseMove={handlePointerMove}
                onMouseUp={handlePointerUp}
                onMouseLeave={handlePointerUp}
                onTouchStart={handlePointerDown}
                onTouchMove={handlePointerMove}
                onTouchEnd={handlePointerUp}
              >
                {images.map((src, index) => {
                  const isActive = index === currentSlide
                  const isPrev = index === (currentSlide - 1 + images.length) % images.length
                  const isNext = index === (currentSlide + 1) % images.length

                  let transform = "translateX(100%)"
                  let opacity = 0

                  if (isActive) {
                    transform = `translateX(${dragOffset * 0.05}px)`
                    opacity = 1
                  } else if (isPrev) {
                    transform = `translateX(-100%) translateX(${dragOffset * 0.05}px)`
                    opacity = isDragging && dragOffset > 0 ? 0.3 : 0
                  } else if (isNext) {
                    transform = `translateX(100%) translateX(${dragOffset * 0.05}px)`
                    opacity = isDragging && dragOffset < 0 ? 0.3 : 0
                  }

                  return (
                    <div
                      key={index}
                      className="absolute inset-0 transition-all duration-500 ease-out "
                      style={{
                        transform: transform,
                        opacity: opacity,
                      }}
                    >
                      <div className="w-full h-full relative overflow-hidden">
                        {preloadedImages.has(index) ? (
                          <>
                            <img
                              src={src || "/placeholder.svg"}
                              alt={`School image ${index + 1}`}
                              className="w-full h-full"
                              draggable={false}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#002147]/40 via-transparent to-transparent" />
                          </>
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 animate-pulse flex items-center justify-center">
                            <div className="w-12 h-12 border-4 border-blue-400/30 border-t-blue-400 rounded-full animate-spin" />
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}

                {/* Navigation controls */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/30 backdrop-blur-xl text-white rounded-2xl hover:bg-black/50 transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/30 backdrop-blur-xl text-white rounded-2xl hover:bg-black/50 transition-all duration-300 hover:scale-110"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Play/pause button */}
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="absolute top-4 right-4 z-20 p-3 bg-black/30 backdrop-blur-xl text-white rounded-2xl hover:bg-black/50 transition-all duration-300 hover:scale-110"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </button>

                {/* Slide indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-3">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide
                          ? "bg-white w-8 shadow-lg shadow-white/50"
                          : "bg-white/40 hover:bg-white/60 w-2"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Simplified decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#002147] to-transparent pointer-events-none" />
    </div>
  )
}

export default HeroSection
