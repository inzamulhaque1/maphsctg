/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, RotateCcw, Maximize2, Sparkles } from 'lucide-react';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [preloadedImages, setPreloadedImages] = useState(new Set());
  const [showControls, setShowControls] = useState(true);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [imageFilter, setImageFilter] = useState('none');
  const [slideDirection, setSlideDirection] = useState('next');
  const [particleAnimation, setParticleAnimation] = useState(true);
  
  const intervalRef = useRef(null);
  const sliderRef = useRef(null);
  const containerRef = useRef(null);
  const lastInteractionRef = useRef(Date.now());
  const dragStartRef = useRef(0);
  const velocityRef = useRef(0);
  const startTimeRef = useRef(0);
  const animationIdRef = useRef(null);

  const images = [
    'https://maphsctg.edu.bd/images/slider/1563685477.jpg',
    'https://maphsctg.edu.bd/images/slider/1554889275.JPG',
    'https://maphsctg.edu.bd/images/slider/1554889287.jpg',
    'https://maphsctg.edu.bd/images/slider/1554889301.jpg',
    'https://maphsctg.edu.bd/images/slider/1554889316.jpg'
  ];

  const filters = ['none', 'sepia(0.2)', 'contrast(1.15)', 'brightness(1.05)', 'saturate(1.2)', 'hue-rotate(15deg)'];

  // Responsive container width tracking
  useEffect(() => {
    const updateContainerWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateContainerWidth();
    
    const resizeObserver = new ResizeObserver(updateContainerWidth);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    const handleResize = () => updateContainerWidth();
    window.addEventListener('resize', handleResize);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Premium image preloading
  useEffect(() => {
    const preloadImages = async () => {
      const loadPromises = images.map((src, index) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = () => {
            setPreloadedImages(prev => new Set([...prev, index]));
            resolve();
          };
          img.onerror = () => resolve();
          img.src = src;
          setTimeout(resolve, index * 80);
        });
      });
      
      await Promise.all(loadPromises);
    };
    
    preloadImages();
  }, []);

  // Auto-advance with visual effects
  const advanceSlide = useCallback(() => {
    if (!isDragging && isPlaying && !isTransitioning) {
      setIsTransitioning(true);
      setSlideDirection('next');
      setCurrentSlide(prev => (prev + 1) % images.length);
      
      // Random filter for visual variety
      setImageFilter(filters[Math.floor(Math.random() * filters.length)]);
      
      setTimeout(() => setIsTransitioning(false), 1000);
    }
  }, [isDragging, isPlaying, isTransitioning, images.length]);

  useEffect(() => {
    if (isPlaying && !isDragging && !isTransitioning) {
      intervalRef.current = setInterval(advanceSlide, 4500);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying, isDragging, isTransitioning, advanceSlide]);

  // Enhanced navigation
  const goToSlide = useCallback((index, direction = 'next') => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setSlideDirection(direction);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 1000);
  }, [isTransitioning, currentSlide]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % images.length, 'next');
  }, [currentSlide, images.length, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + images.length) % images.length, 'prev');
  }, [currentSlide, images.length, goToSlide]);

  // Advanced gesture system
  const handlePointerDown = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
    setIsPlaying(false);
    
    const clientX = e.clientX || e.touches?.[0]?.clientX || 0;
    dragStartRef.current = clientX;
    velocityRef.current = 0;
    lastInteractionRef.current = Date.now();
    startTimeRef.current = Date.now();
    
    if (sliderRef.current) {
      sliderRef.current.style.cursor = 'grabbing';
    }

    // Haptic feedback
    if (navigator.vibrate) {
      navigator.vibrate(5);
    }

    if (animationIdRef.current) {
      cancelAnimationFrame(animationIdRef.current);
    }
  }, []);

  const handlePointerMove = useCallback((e) => {
    if (!isDragging) return;
    
    const clientX = e.clientX || e.touches?.[0]?.clientX || 0;
    const diff = clientX - dragStartRef.current;
    const now = Date.now();
    const timeDiff = now - lastInteractionRef.current;
    
    if (timeDiff > 0) {
      const newVelocity = diff / (now - startTimeRef.current);
      velocityRef.current = newVelocity * 0.2 + velocityRef.current * 0.8;
    }
    
    // Enhanced resistance with responsive calculation
    const resistance = 0.25;
    const maxDrag = containerWidth * 0.35;
    let constrainedDiff = diff;
    
    if (Math.abs(diff) > maxDrag) {
      const excess = Math.abs(diff) - maxDrag;
      constrainedDiff = Math.sign(diff) * (maxDrag + excess * resistance);
    }
    
    setDragOffset(constrainedDiff);
    lastInteractionRef.current = now;
  }, [isDragging, containerWidth]);

  const handlePointerUp = useCallback(() => {
    if (!isDragging) return;
    
    const threshold = containerWidth * 0.15;
    const velocityThreshold = 0.4;
    const duration = Date.now() - startTimeRef.current;
    
    const shouldChange = Math.abs(dragOffset) > threshold || 
                        (Math.abs(velocityRef.current) > velocityThreshold && duration < 400);
    
    if (shouldChange) {
      if (dragOffset > 0 || velocityRef.current > velocityThreshold) {
        prevSlide();
      } else if (dragOffset < 0 || velocityRef.current < -velocityThreshold) {
        nextSlide();
      }
      // Haptic feedback
      if (navigator.vibrate) {
        navigator.vibrate(8);
      }
    }
    
    // Spring animation
    const springBack = () => {
      setDragOffset(prev => {
        const spring = prev * 0.88;
        if (Math.abs(spring) < 0.5) {
          setIsDragging(false);
          if (sliderRef.current) {
            sliderRef.current.style.cursor = 'grab';
          }
          setTimeout(() => setIsPlaying(true), 1800);
          return 0;
        }
        animationIdRef.current = requestAnimationFrame(springBack);
        return spring;
      });
    };
    
    if (!shouldChange) {
      springBack();
    } else {
      setDragOffset(0);
      setIsDragging(false);
      if (sliderRef.current) {
        sliderRef.current.style.cursor = 'grab';
      }
      setTimeout(() => setIsPlaying(true), 1800);
    }
    
    velocityRef.current = 0;
  }, [isDragging, dragOffset, containerWidth, nextSlide, prevSlide]);

  // Smart control visibility
  useEffect(() => {
    let hideTimer;
    let lastMouseY = 0;
    
    const resetHideTimer = (e) => {
      const currentMouseY = e ? e.clientY : 0;
      const mouseDelta = Math.abs(currentMouseY - lastMouseY);
      
      if (mouseDelta > 3 || !e) {
        setShowControls(true);
        clearTimeout(hideTimer);
        hideTimer = setTimeout(() => setShowControls(false), 3500);
        lastMouseY = currentMouseY;
      }
    };

    resetHideTimer();
    window.addEventListener('mousemove', resetHideTimer);
    window.addEventListener('touchstart', resetHideTimer);
    
    return () => {
      clearTimeout(hideTimer);
      window.removeEventListener('mousemove', resetHideTimer);
      window.removeEventListener('touchstart', resetHideTimer);
    };
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === ' ') {
        e.preventDefault();
        setIsPlaying(!isPlaying);
      }
      if (e.key === 'f' || e.key === 'F') setIsFullscreen(!isFullscreen);
      if (e.key === 'r' || e.key === 'R') {
        setImageFilter(filters[Math.floor(Math.random() * filters.length)]);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isPlaying, nextSlide, prevSlide, isFullscreen]);

  // Premium slide component
  const SlideImage = ({ src, index, isActive, isPrev, isNext }) => {
    const isPreloaded = preloadedImages.has(index);
    
    let transform = 'translateX(0%)';
    let opacity = 0;
    let scale = 0.94;
    let blur = 4;
    let brightness = 0.75;
    
    if (isActive) {
      transform = `translateX(${(dragOffset / containerWidth) * 100}%)`;
      opacity = 1;
      scale = 1;
      blur = 0;
      brightness = 1;
    } else if (isPrev) {
      transform = `translateX(${-100 + (dragOffset / containerWidth) * 100}%)`;
      opacity = isDragging && dragOffset > 0 ? Math.min(0.85, dragOffset / containerWidth * 2) : 0;
      scale = 0.94 + (isDragging && dragOffset > 0 ? 0.06 * (dragOffset / containerWidth) : 0);
      blur = 2;
      brightness = 0.85;
    } else if (isNext) {
      transform = `translateX(${100 + (dragOffset / containerWidth) * 100}%)`;
      opacity = isDragging && dragOffset < 0 ? Math.min(0.85, -dragOffset / containerWidth * 2) : 0;
      scale = 0.94 + (isDragging && dragOffset < 0 ? 0.06 * (-dragOffset / containerWidth) : 0);
      blur = 2;
      brightness = 0.85;
    }
    
    return (
      <div 
        className={`absolute inset-0 will-change-transform ${isActive ? 'z-20' : 'z-10'}`}
        style={{
          transform: transform,
          opacity: opacity,
          transition: isDragging ? 'none' : 'all 1s cubic-bezier(0.23, 1, 0.32, 1)',
        }}
      >
        <div 
          className="w-full h-full relative overflow-hidden"
          style={{
            transform: `scale(${scale})`,
            transition: isDragging ? 'none' : 'transform 1s cubic-bezier(0.23, 1, 0.32, 1)',
          }}
        >
          {isPreloaded ? (
            <>
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover select-none"
                style={{
                  filter: `
                    blur(${blur}px) 
                    brightness(${brightness}) 
                    ${isActive ? imageFilter : 'none'}
                    contrast(${isActive ? 1.08 : 0.92})
                    saturate(${isActive ? 1.15 : 0.85})
                  `,
                  transform: `scale(${isActive ? 1 : 1.02})`,
                  transition: 'all 7s cubic-bezier(0.23, 1, 0.32, 1)',
                }}
                draggable={false}
              />
              
              {/* Dynamic gradient overlays */}
              <div 
                className="absolute inset-0"
                style={{
                  background: `
                    radial-gradient(circle at ${45 + Math.sin(Date.now() / 4000) * 25}% ${45 + Math.cos(Date.now() / 5000) * 25}%, 
                    rgba(0,33,71,${isActive ? 0.12 : 0.35}) 0%, 
                    transparent 65%),
                    linear-gradient(${35 + index * 25}deg, 
                    rgba(0,33,71,${isActive ? 0.08 : 0.25}) 0%, 
                    transparent 55%)
                  `,
                  opacity: isActive ? 0.7 : 1,
                  transition: 'all 2.5s ease-in-out'
                }}
              />
              
              {/* Enhanced particle system */}
              {particleAnimation && isActive && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  {Array.from({ length: 25 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute rounded-full bg-white/15 animate-pulse"
                      style={{
                        width: `${2 + Math.random() * 3}px`,
                        height: `${2 + Math.random() * 3}px`,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 6}s`,
                        animationDuration: `${2.5 + Math.random() * 3}s`,
                        transform: `scale(${0.6 + Math.random() * 0.8})`,
                        opacity: 0.4 + Math.random() * 0.4
                      }}
                    />
                  ))}
                </div>
              )}
              
              {/* Subtle edge vignette */}
              <div 
                className="absolute inset-0"
                style={{
                  boxShadow: isActive 
                    ? 'inset 0 0 150px rgba(0,0,0,0.08)' 
                    : 'inset 0 0 80px rgba(0,0,0,0.25)',
                  transition: 'box-shadow 1s ease-out'
                }}
              />
            </>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 animate-pulse flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent -skew-x-12 animate-shimmer"></div>
              <div className="w-16 h-16 lg:w-20 lg:h-20 border-4 border-blue-400/30 border-t-blue-400 rounded-full animate-spin"></div>
            </div>
          )}
        </div>
      </div>
    );
  };

  const prevIndex = (currentSlide - 1 + images.length) % images.length;
  const nextIndex = (currentSlide + 1) % images.length;

  // Fullscreen mode
  if (isFullscreen) {
    return (
      <div className="fixed inset-0 z-50 bg-black">
        <div className="relative w-full h-full">
          <SlideImage 
            src={images[currentSlide]} 
            index={currentSlide} 
            isActive={true}
            isPrev={false}
            isNext={false}
          />
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-40 p-3 sm:p-4 bg-black/40 backdrop-blur-xl text-white rounded-full hover:bg-black/60 transition-all duration-300 hover:scale-110"
          >
            <Maximize2 className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          
          {/* Fullscreen navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-40 p-4 sm:p-5 bg-black/30 backdrop-blur-xl text-white rounded-2xl hover:bg-black/50 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={2.5} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-40 p-4 sm:p-5 bg-black/30 backdrop-blur-xl text-white rounded-2xl hover:bg-black/50 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full mt-2 px-2 sm:px-4 lg:px-6">
      <div 
        ref={containerRef}
        className="relative w-full aspect-[4/3] sm:aspect-video md:aspect-[21/9] lg:aspect-[2.4/1] overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black cursor-grab select-none shadow-2xl"
        style={{ 
          touchAction: 'pan-y pinch-zoom',
          borderRadius: 'clamp(16px, 2vw, 24px)',
          boxShadow: `
            0 20px 40px -12px rgba(0, 0, 0, 0.4), 
            0 8px 16px -8px rgba(0, 0, 0, 0.3),
            0 0 0 1px rgba(255,255,255,0.08)
          `
        }}
      >
        <div
          ref={sliderRef}
          className="relative w-full h-full"
          onMouseDown={handlePointerDown}
          onMouseMove={handlePointerMove}
          onMouseUp={handlePointerUp}
          onMouseLeave={handlePointerUp}
          onTouchStart={handlePointerDown}
          onTouchMove={handlePointerMove}
          onTouchEnd={handlePointerUp}
        >
          {/* Slide rendering */}
          <SlideImage 
            src={images[prevIndex]} 
            index={prevIndex} 
            isActive={false}
            isPrev={true}
            isNext={false}
          />
          
          <SlideImage 
            src={images[currentSlide]} 
            index={currentSlide} 
            isActive={true}
            isPrev={false}
            isNext={false}
          />
          
          <SlideImage 
            src={images[nextIndex]} 
            index={nextIndex} 
            isActive={false}
            isPrev={false}
            isNext={true}
          />

          {/* Responsive control panel */}
          <div 
            className={`absolute inset-0 pointer-events-none transition-all duration-1000 ${
              showControls ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Main navigation - responsive sizing */}
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 lg:p-4 bg-black/20 backdrop-blur-2xl text-white rounded-xl sm:rounded-2xl transition-all duration-500 hover:bg-black/35 hover:scale-110 group pointer-events-auto"
              style={{ 
                backdropFilter: 'blur(20px) saturate(180%)',
                border: '1px solid rgba(255,255,255,0.12)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.15)'
              }}
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 group-hover:scale-110 transition-transform" strokeWidth={2.5} />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 lg:p-4 bg-black/20 backdrop-blur-2xl text-white rounded-xl sm:rounded-2xl transition-all duration-500 hover:bg-black/35 hover:scale-110 group pointer-events-auto"
              style={{ 
                backdropFilter: 'blur(20px) saturate(180%)',
                border: '1px solid rgba(255,255,255,0.12)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.15)'
              }}
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 group-hover:scale-110 transition-transform" strokeWidth={2.5} />
            </button>

            {/* Responsive control panel */}
            <div className="absolute top-2 sm:top-4 lg:top-6 right-2 sm:right-4 lg:right-6 z-30 flex space-x-1.5 sm:space-x-2 lg:space-x-3">
              <button
                onClick={() => setImageFilter(filters[Math.floor(Math.random() * filters.length)])}
                className="p-2 sm:p-2.5 lg:p-3 bg-black/20 backdrop-blur-2xl text-white rounded-lg sm:rounded-xl hover:bg-black/35 transition-all duration-300 hover:scale-110 pointer-events-auto"
                style={{ backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <RotateCcw className="w-4 h-4 sm:w-4.5 sm:h-4.5 lg:w-5 lg:h-5" />
              </button>
              
              <button
                onClick={() => setIsFullscreen(true)}
                className="p-2 sm:p-2.5 lg:p-3 bg-black/20 backdrop-blur-2xl text-white rounded-lg sm:rounded-xl hover:bg-black/35 transition-all duration-300 hover:scale-110 pointer-events-auto"
                style={{ backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <Maximize2 className="w-4 h-4 sm:w-4.5 sm:h-4.5 lg:w-5 lg:h-5" />
              </button>
              
              
            </div>
          </div>

          {/* Enhanced responsive progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1.5 sm:h-2 bg-gradient-to-r from-black/30 via-black/15 to-black/30 z-30">
            <div 
              className="h-full bg-[#002147] relative overflow-hidden transition-all duration-600 ease-out"
              style={{
                width: `${((currentSlide + 1) / images.length) * 100}%`,
                boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-shimmer"></div>
            </div>
          </div>

          {/* Responsive slide counter */}
          <div className="absolute top-2 sm:top-4 lg:top-6 left-2 sm:left-4 lg:left-6 z-30 px-2.5 sm:px-3 lg:px-4 py-1.5 sm:py-2 bg-black/20 backdrop-blur-2xl text-white rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm"
            style={{ backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.08)' }}>
            {currentSlide + 1} / {images.length}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        .animate-shimmer {
          animation: shimmer 2.2s infinite;
        }
      `}</style>
    </div>
  );
};

export default Slider;