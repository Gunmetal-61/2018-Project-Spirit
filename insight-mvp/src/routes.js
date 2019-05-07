import Dashboard from "views/Dashboard.jsx";
import Icons from "views/Icons.jsx";
import Map from "views/Map.jsx";
import Notifications from "views/Notifications.jsx";
import Rtl from "views/Rtl.jsx";
import TableList from "views/TableList.jsx";
import Typography from "views/Typography.jsx";
import UserProfile from "views/UserProfile.jsx";

import Home from "views/Home.jsx";
import Events from "views/Events.jsx";
import Submit from "views/Submit.jsx";
import Review from "views/Review.jsx";
import User from "views/User.jsx";

var routes = [
  {
    path: "/home",
    name: "Home",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-components",
    component: Home,
    layout: "/Home"
  },
  {
    path: "/events",
    name: "Events",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-map-big",
    component: Events,
    layout: "/admin"
  },
  {
    path: "/submit",
    name: "Submit",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-upload",
    component: Submit,
    layout: "/admin"
  },
  {
    path: "/review",
    name: "Review Subs (Admin)",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-notes",
    component: Review,
    layout: "/admin"
  },
  {
    path: "/usr-profile",
    name: "User Profile",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-single-02",
    component: User,
    layout: "/User"
  },

  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    rtlName: "الرموز",
    icon: "tim-icons icon-atom",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/map",
    name: "Map",
    rtlName: "خرائط",
    icon: "tim-icons icon-pin",
    component: Map,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "إخطارات",
    icon: "tim-icons icon-bell-55",
    component: Notifications,
    layout: "/admin"
  },
  {
    path: "/user-profile",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "Table List",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-puzzle-10",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Typography",
    rtlName: "طباعة",
    icon: "tim-icons icon-align-center",
    component: Typography,
    layout: "/admin"
  },
  // {
  //   path: "/rtl-support",
  //   name: "RTL Support",
  //   rtlName: "ار تي ال",
  //   icon: "tim-icons icon-world",
  //   component: Rtl,
  //   layout: "/rtl"
  // }
];
export default routes;
