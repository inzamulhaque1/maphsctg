import { Book, Image, Paperclip } from 'lucide-react';
import React, { useState } from 'react';
import { BiStats } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Category = () => {
    const [activeCategory, setActiveCategory] = useState(null);
    
    const categories = [
        { 
            id: 'admission', 
            name: 'Admission', 
            icon: Paperclip,
            gradient: 'from-[#002147] via-[#002147] to-[#002147]',
            hoverGradient: 'from-[#002147] via-purple-500 to-[#002147]',
            shadow: 'shadow-[#002147]/25',
            route: '/admission-info'
        },
        { 
            id: 'result', 
            name: 'Result', 
            icon: BiStats,
            gradient: 'from-[#002147] via-[#002147] to-[#002147]',
            hoverGradient: 'from-[#002147] via-purple-500 to-[#002147]',
            shadow: 'shadow-[#002147]/25',
            route: '/results'
        },
        { 
            id: 'magazine', 
            name: 'Magazine', 
            icon: Book,
           gradient: 'from-[#002147] via-[#002147] to-[#002147]',
            hoverGradient: 'from-[#002147] via-purple-500 to-[#002147]',
            shadow: 'shadow-[#002147]/25',
            route: '/gallery'
        },
        { 
            id: 'gallery', 
            name: 'Gallery', 
            icon: Image,
            gradient: 'from-[#002147] via-[#002147] to-[#002147]',
            hoverGradient: 'from-[#002147] via-purple-500 to-[#002147]',
            shadow: 'shadow-[#002147]/25',
            route: '/gallery'
        }
    ];

    return (
        <div className="flex justify-center items-center ">
            <div className="relative w-full max-w-4xl">
                {/* Animated background glow */}
                {/* <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-[#002147] rounded-full opacity-20 blur-xl"></div> */}
                
                <div className="relative flex flex-col sm:flex-row gap-2 p-2 sm:p-3 bg-white/10 backdrop-blur-lg rounded-b-3xl rout border-6 border-t-0  border-[#002147] shadow-2xl">
                    {categories.map((category, index) => {
                        const IconComponent = category.icon;
                        return (
                            <Link
                                key={category.id}
                                to={category.route}
                                className="block flex-1"
                            >
                                <div
                                    className={`
                                        relative overflow-hidden cursor-pointer transition-all duration-700 ease-out
                                        ${index === 0 ? 'rounded-t-2xl sm:rounded-l-2xl sm:rounded-tr-none' : ''}
                                        ${index === categories.length - 1 ? 'rounded-b-2xl sm:rounded-r-2xl sm:rounded-bl-none' : ''}
                                        ${index > 0 && index < categories.length - 1 ? 'rounded-none' : ''}
                                        ${activeCategory === category.id ? 'scale-105 z-10' : 'hover:scale-102'}
                                    `}
                                    onMouseEnter={() => setActiveCategory(category.id)}
                                    onMouseLeave={() => setActiveCategory(null)}
                                >
                                    {/* Animated background */}
                                    <div className={`
                                        absolute inset-0 bg-gradient-to-br ${category.gradient}
                                        transition-all duration-500 ease-out
                                        ${activeCategory === category.id ? `bg-gradient-to-br ${category.hoverGradient}` : ''}
                                    `}></div>
                                    
                                    {/* Shimmer effect */}
                                    <div className={`
                                        absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
                                        transform -skew-x-12 transition-transform duration-1000
                                        ${activeCategory === category.id ? 'translate-x-full' : '-translate-x-full'}
                                    `}></div>
                                    
                                    {/* Glow effect */}
                                    <div className={`
                                        absolute -inset-1 bg-gradient-to-br ${category.gradient} rounded-2xl opacity-0 blur-lg
                                        transition-all duration-500 ${category.shadow}
                                        ${activeCategory === category.id ? 'opacity-60' : ''}
                                    `}></div>
                                    
                                    {/* Content */}
                                    <div className={`
                                        relative px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-4 text-white font-semibold text-sm sm:text-base md:text-lg
                                        flex items-center justify-center gap-2 sm:gap-3 transition-all duration-500
                                        ${activeCategory === category.id ? 'transform translate-y-[-2px]' : ''}
                                    `}>
                                        <IconComponent className={`
                                            text-xl sm:text-2xl transition-all duration-300
                                            ${activeCategory === category.id ? 'animate-bounce' : ''}
                                        `} />
                                        <span className={`
                                            transition-all duration-300
                                            ${activeCategory === category.id ? 'text-white drop-shadow-lg' : 'text-white/90'}
                                        `}>
                                            {category.name}
                                        </span>
                                        
                                        {/* Sparkle effect */}
                                        {activeCategory === category.id && (
                                            <>
                                                <div className="absolute top-1 right-1 sm:top-2 sm:right-2 w-1 h-1 bg-white rounded-full animate-ping"></div>
                                                <div className="absolute bottom-1 left-1 sm:bottom-2 sm:left-2 w-1 h-1 bg-white rounded-full animate-ping delay-300"></div>
                                                <div className="absolute top-2 left-1/2 sm:top-3 w-0.5 h-0.5 bg-white rounded-full animate-ping delay-500"></div>
                                            </>
                                        )}
                                    </div>
                                    
                                    {/* Bottom accent line */}
                                    <div className={`
                                        absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-white/60 rounded-full
                                        transition-all duration-500 ease-out
                                        ${activeCategory === category.id ? 'w-3/4' : 'w-0'}
                                    `}></div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
                
                {/* Ripple effect */}
                {activeCategory && (
                    <div className="absolute inset-0 rounded-3xl border-2 border-white/20 animate-ping pointer-events-none"></div>
                )}
            </div>
        </div>
    );
};

export default Category;