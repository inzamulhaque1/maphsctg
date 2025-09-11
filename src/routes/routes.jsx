import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import Shikiti from "../pages/AboutUs/shikiti";
import ManagementCommittee from "../pages/AboutUs/ManagementCommittee";
import StudentInfo from "../pages/AboutUs/StudentInfo";
import SeatPlan from "../pages/SeatPlan/SeatPlan";
import RoutinePage from "../pages/Routine/RoutinePage";
import AdmissionInfo from "../pages/Admission/AdmissionInfo";
import OnlineApplicationForm from "../pages/Admission/OnlineApplicationForm";
import AdmissionFormDownload from "../pages/Admission/AdmissionFormDownload";
import Attendance from "../pages/Attendance/Attendance";
import ResultSearch from "../pages/Results/ResultSearch";
import GalleryPage from "../pages/Gallery/GalleryPage";
import MujibCorner from "../pages/MujibCorner/MujibCorner";
import SheikhRusselCorner from "../pages/MujibCorner/SheikhRusselCorner";
import SubornoJoyontiCorner from "../pages/MujibCorner/SubornoJoyontiCorner";
import ContactPage from "../pages/Contact/ContactPage";
import Notice from "../components/Notice";
import TeachersPage from "../pages/Teachers/TeachersPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/pathdan-onumoti",
        element: <Shikiti></Shikiti>,
      },
      {
        path: "/management",
        element: <ManagementCommittee></ManagementCommittee>,
      },
      {
        path: "/student-info",
        element: <StudentInfo></StudentInfo>,
      },
      {
        path: "/seat-plan",
        element: <SeatPlan></SeatPlan>
      },
      {
        path: "/routine",
        element: <RoutinePage></RoutinePage>
      },
      {
        path: "/admission-info",
        element: <AdmissionInfo></AdmissionInfo>
      },
      {
        path: "/onlineadmission",
        element: <OnlineApplicationForm></OnlineApplicationForm>
      },
      {
        path: "/admission-online-download",
        element: <AdmissionFormDownload></AdmissionFormDownload>
      },
      {
        path: "/attendance",
        element: <Attendance></Attendance>
      },
      {
        path: "/results",
        element: <ResultSearch></ResultSearch>
      },
      {
        path: "/gallery",
        element: <GalleryPage></GalleryPage>
      },
      {
        path: "/mujib-corner",
        element: <MujibCorner></MujibCorner>
      },
      {
        path: "/rasel-corner",
        element: <SheikhRusselCorner></SheikhRusselCorner>
      },
      {
        path: "/joyonti-corner",
        element: <SubornoJoyontiCorner></SubornoJoyontiCorner>
      },
      {
        path: "/contact",
        element: <ContactPage></ContactPage>
      },
      {
        path: "/notice",
        element: <Notice></Notice>
      },
      {
        path: "/all-teachers",
        element: <TeachersPage></TeachersPage>
      },

    ],
  },

]);