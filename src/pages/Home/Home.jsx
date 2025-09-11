import React from 'react';
import Slider from './section/Slider';
import Category from './section/Category';
import AboutSchool from './section/AboutSchool';
import SchoolTime from './section/SchoolTime';
import SchoolLeadershipPage from './section/SchoolLeadershipPag';
import TeacherSlider from './section/TeacherSlider';
import Magazine from './section/Magazine';
import StatsSection from './section/StatsSection';
import InfoSection from './section/InfoSection';
import HeroSection from './section/HeroSection';

const Home = () => {
    return (
        <div>
            {/* <Slider></Slider> */}
            <HeroSection></HeroSection>
            <Category></Category>
            <AboutSchool></AboutSchool>
            <SchoolTime></SchoolTime>
            <SchoolLeadershipPage></SchoolLeadershipPage>
            <TeacherSlider></TeacherSlider>
            <Magazine></Magazine>
            <StatsSection></StatsSection>
            <InfoSection></InfoSection>
        </div>
    );
};

export default Home;