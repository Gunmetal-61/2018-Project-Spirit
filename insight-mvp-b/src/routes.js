// import React from 'react';
// import {Route} from 'react-router';
// import Dash from "mvp_views/Dash.jsx";

// export default (
//   <Route component={App}>
//     <Route path='/' component={Dash} />
//   </Route>
// );

// default template dependencies
// import VectorMap from "template/views/maps/VectorMap.jsx";
// import GoogleMaps from "template/views/maps/GoogleMaps.jsx";
// import FullScreenMap from "template/views/maps/FullScreenMap.jsx";
// import ReactTables from "template/views/tables/ReactTables.jsx";
// import RegularTables from "template/views/tables/RegularTables.jsx";
// import ExtendedTables from "template/views/tables/ExtendedTables.jsx";
// import Wizard from "template/views/forms/Wizard.jsx";
// import ValidationForms from "template/views/forms/ValidationForms.jsx";
// import ExtendedForms from "template/views/forms/ExtendedForms.jsx";
// import RegularForms from "template/views/forms/RegularForms.jsx";
// import Calendar from "template/views/Calendar.jsx";
// import Widgets from "template/views/Widgets.jsx";
// import Charts from "template/views/Charts.jsx";
// import Dashboard from "template/views/Dashboard.jsx";
// import Buttons from "template/views/components/Buttons.jsx";
// import SweetAlert from "template/views/components/SweetAlert.jsx";
// import Notifications from "template/views/components/Notifications.jsx";
// import Grid from "template/views/components/Grid.jsx";
// import Typography from "template/views/components/Typography.jsx";
// import Panels from "template/views/components/Panels.jsx";
// import Icons from "template/views/components/Icons.jsx";
// import Pricing from "template/views/pages/Pricing.jsx";
// import Register from "template/views/pages/Register.jsx";
// import Timeline from "template/views/pages/Timeline.jsx";
// import User from "template/views/pages/User.jsx";
// import Login from "template/views/pages/Login.jsx";
// import Rtl from "template/views/pages/Rtl.jsx";
// import Lock from "template/views/pages/Lock.jsx";

// My application's (Insight) dependencies
import React from 'react';
// import {Route} from 'react-router';

import Dash from "mvp_views/Dash.jsx";
import EventDetails from "mvp_views/EventDetails.jsx";
import Events from "mvp_views/Events.jsx";
import Org from "mvp_views/Org.jsx";
import Review from "mvp_views/Review.jsx";
import Submit from "mvp_views/SubmitEvent.jsx";
import Admin from 'template/layouts/Admin/Admin';

// export default (
//   <Route component={Admin}>
//     <Route path='/dash' component={Dash} layout='/admin'/>
//     <Route path='/events' component={Events} layout='/admin'/>
//     <Route path='/event-details' component={EventDetails} layout='/admin'/>
//     <Route path='/organizations' component={Org} layout='/admin'/>
//     <Route path='/submit-event-sug' component={Submit} layout='/admin'/>
//     <Route path='review-submissions' component={Review} layout='/admin'/>
//   </Route>
// );

const routes = [
  // My (Insight's) routes
  {
    path: "/dash",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-components",
    component:Dash,
    layout: "/admin"
  },
  {
    path: "/events",
    name: "Browse Events",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-map-big",
    component: Events,
    layout: "/admin"
  },
  {
    path: "/event-details",
    name: "Event Details",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-calendar-60",
    component: EventDetails,
    layout: "/admin"
  },
  {
    path: "/organizations",
    name: "Organizations",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-world",
    component: Org,
    layout: "/admin"
  },
  {
    path: "/submit-event-sug",
    name: "Submit Event",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-upload",
    component: Submit,
    layout: "/admin"
  },
  {
    path: "/review-submissions",
    name: "Review Submissions (Admin)",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-paper",
    component: Review,
    layout: "/admin"
  },










  // default template's routes

  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   rtlName: "لوحة القيادة",
  //   icon: "tim-icons icon-chart-pie-36",
  //   component: Dashboard,
  //   layout: "/admin"
  // },
  // {
  //   collapse: true,
  //   name: "Pages",
  //   rtlName: "صفحات",
  //   icon: "tim-icons icon-image-02",
  //   state: "pagesCollapse",
  //   views: [
  //     {
  //       path: "/pricing",
  //       name: "Pricing",
  //       rtlName: "عالتسعير",
  //       mini: "P",
  //       rtlMini: "ع",
  //       component: Pricing,
  //       layout: "/auth"
  //     },
  //     {
  //       path: "/rtl-support",
  //       name: "RTL Support",
  //       rtlName: "صودعم رتل",
  //       mini: "RS",
  //       rtlMini: "صو",
  //       component: Rtl,
  //       layout: "/rtl"
  //     },
  //     {
  //       path: "/timeline",
  //       name: "Timeline",
  //       rtlName: "تيالجدول الزمني",
  //       mini: "T",
  //       rtlMini: "تي",
  //       component: Timeline,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/login",
  //       name: "Login",
  //       rtlName: "هعذاتسجيل الدخول",
  //       mini: "L",
  //       rtlMini: "هعذا",
  //       component: Login,
  //       layout: "/auth"
  //     },
  //     {
  //       path: "/register",
  //       name: "Register",
  //       rtlName: "تسجيل",
  //       mini: "R",
  //       rtlMini: "صع",
  //       component: Register,
  //       layout: "/auth"
  //     },
  //     {
  //       path: "/lock-screen",
  //       name: "Lock Screen",
  //       rtlName: "اقفل الشاشة",
  //       mini: "LS",
  //       rtlMini: "هذاع",
  //       component: Lock,
  //       layout: "/auth"
  //     },
  //     {
  //       path: "/user-profile",
  //       name: "User Profile",
  //       rtlName: "ملف تعريفي للمستخدم",
  //       mini: "UP",
  //       rtlMini: "شع",
  //       component: User,
  //       layout: "/admin"
  //     }
  //   ]
  // },
  // {
  //   collapse: true,
  //   name: "Components",
  //   rtlName: "المكونات",
  //   icon: "tim-icons icon-molecule-40",
  //   state: "componentsCollapse",
  //   views: [
  //     {
  //       collapse: true,
  //       name: "Multi Level Collapse",
  //       rtlName: "انهيار متعدد المستويات",
  //       mini: "MLT",
  //       rtlMini: "ر",
  //       state: "multiCollapse",
  //       views: [
  //         {
  //           path: "/buttons",
  //           name: "Buttons",
  //           rtlName: "وصفت",
  //           mini: "B",
  //           rtlMini: "ب",
  //           component: Buttons,
  //           layout: "/admin"
  //         }
  //       ]
  //     },
  //     {
  //       path: "/buttons",
  //       name: "Buttons",
  //       rtlName: "وصفت",
  //       mini: "B",
  //       rtlMini: "ب",
  //       component: Buttons,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/grid-system",
  //       name: "Grid System",
  //       rtlName: "نظام الشبكة",
  //       mini: "GS",
  //       rtlMini: "زو",
  //       component: Grid,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/panels",
  //       name: "Panels",
  //       rtlName: "لوحات",
  //       mini: "P",
  //       rtlMini: "ع",
  //       component: Panels,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/sweet-alert",
  //       name: "Sweet Alert",
  //       rtlName: "الحلو تنبيه",
  //       mini: "SA",
  //       rtlMini: "ومن",
  //       component: SweetAlert,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/notifications",
  //       name: "Notifications",
  //       rtlName: "إخطارات",
  //       mini: "N",
  //       rtlMini: "ن",
  //       component: Notifications,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/icons",
  //       name: "Icons",
  //       rtlName: "الرموز",
  //       mini: "I",
  //       rtlMini: "و",
  //       component: Icons,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/typography",
  //       name: "Typography",
  //       rtlName: "طباعة",
  //       mini: "T",
  //       rtlMini: "ر",
  //       component: Typography,
  //       layout: "/admin"
  //     }
  //   ]
  // },
  // {
  //   collapse: true,
  //   name: "Forms",
  //   rtlName: "إستمارات",
  //   icon: "tim-icons icon-notes",
  //   state: "formsCollapse",
  //   views: [
  //     {
  //       path: "/regular-forms",
  //       name: "Regular Forms",
  //       rtlName: "أشكال عادية",
  //       mini: "RF",
  //       rtlMini: "صو",
  //       component: RegularForms,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/extended-forms",
  //       name: "Extended Forms",
  //       rtlName: "نماذج موسعة",
  //       mini: "EF",
  //       rtlMini: "هوو",
  //       component: ExtendedForms,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/validation-forms",
  //       name: "Validation Forms",
  //       rtlName: "نماذج التحقق من الصحة",
  //       mini: "VF",
  //       rtlMini: "تو",
  //       component: ValidationForms,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/wizard",
  //       name: "Wizard",
  //       rtlName: "ساحر",
  //       mini: "W",
  //       rtlMini: "ث",
  //       component: Wizard,
  //       layout: "/admin"
  //     }
  //   ]
  // },
  // {
  //   collapse: true,
  //   name: "Tables",
  //   rtlName: "الجداول",
  //   icon: "tim-icons icon-puzzle-10",
  //   state: "tablesCollapse",
  //   views: [
  //     {
  //       path: "/regular-tables",
  //       name: "Regular Tables",
  //       rtlName: "طاولات عادية",
  //       mini: "RT",
  //       rtlMini: "صر",
  //       component: RegularTables,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/extended-tables",
  //       name: "Extended Tables",
  //       rtlName: "جداول ممتدة",
  //       mini: "ET",
  //       rtlMini: "هور",
  //       component: ExtendedTables,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/react-tables",
  //       name: "React Tables",
  //       rtlName: "رد فعل الطاولة",
  //       mini: "RT",
  //       rtlMini: "در",
  //       component: ReactTables,
  //       layout: "/admin"
  //     }
  //   ]
  // },
  // {
  //   collapse: true,
  //   name: "Maps",
  //   rtlName: "خرائط",
  //   icon: "tim-icons icon-pin",
  //   state: "mapsCollapse",
  //   views: [
  //     {
  //       path: "/google-maps",
  //       name: "Google Maps",
  //       rtlName: "خرائط جوجل",
  //       mini: "GM",
  //       rtlMini: "زم",
  //       component: GoogleMaps,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/full-screen-map",
  //       name: "Full Screen Map",
  //       rtlName: "خريطة كاملة الشاشة",
  //       mini: "FSM",
  //       rtlMini: "ووم",
  //       component: FullScreenMap,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/vector-map",
  //       name: "Vector Map",
  //       rtlName: "خريطة المتجه",
  //       mini: "VM",
  //       rtlMini: "تم",
  //       component: VectorMap,
  //       layout: "/admin"
  //     }
  //   ]
  // },
  // {
  //   path: "/widgets",
  //   name: "Widgets",
  //   rtlName: "الحاجيات",
  //   icon: "tim-icons icon-settings",
  //   component: Widgets,
  //   layout: "/admin"
  // },
  // {
  //   path: "/charts",
  //   name: "Charts",
  //   rtlName: "الرسوم البيانية",
  //   icon: "tim-icons icon-chart-bar-32",
  //   component: Charts,
  //   layout: "/admin"
  // },
  // {
  //   path: "/calendar",
  //   name: "Calendar",
  //   rtlName: "التقويم",
  //   icon: "tim-icons icon-time-alarm",
  //   component: Calendar,
  //   layout: "/admin"
  // }
];

export default routes;
