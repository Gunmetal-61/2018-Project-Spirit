// ##############################
// // // data for populating the calendar in Calendar view
// #############################

import {
  organizationTags,
  orgCatTags,
  universityTags,
  fieldStudyTags,
  interestTypeTags,
  eventTypeTags
}from "mvp_variables/TagList.jsx";


var today = new Date();
var y = today.getFullYear();
var m = today.getMonth();
var d = today.getDate();

function eventInfo(
  eventName, eventSubtitle, description, rsvpCount, date, startTime, endTime, orgName, altLocText, street, city, state, country, zipcode, infoURLa, infoURLb, signupURL, img,
  organization, orgCat, university, fieldStudy, interestType, eventType)
  {
      this.listing = new listing(eventName, eventSubtitle, description, rsvpCount, date, startTime, endTime, orgName, altLocText, street, city, state, country, zipcode, infoURLa, infoURLb, signupURL, img);
      this.tags = new tagCollage(organization, orgCat, university, fieldStudy, interestType, eventType);
}

function listing(eventName, eventSubtitle, description, rsvpCount, date, startTime, endTime,
  orgName, altLocText, street, city, state, country, zipcode, infoURLa, infoURLb, signupURL, img) {
  this.eventName = eventName;
  this.eventSubtitle = eventSubtitle;
  this.description = description;
  this.rsvpCount = rsvpCount;
  this.date = date;
  this.startTime = startTime;
  this.endTime = endTime;
  this.orgName = orgName;
  this.location = new Location(altLocText, street, city, state, country, zipcode);
  this.infoURLa = infoURLa;
  this.infoURLb = infoURLb;
  this.signupURL = signupURL;
  this.img = img;
}


function Location(altLocText, street, city, state, country, zipcode) {
  this.altLocText = altLocText;
  this.street = street;
  this.city = city;
  this.state = state;
  this.country = country;
  this.zipcode = zipcode;
}


function tagCollage(organization, orgCat, university,
  fieldStudy, interestType, eventType)
  {
  this.organization = [...organization];
  this.orgCat = [...orgCat];
  this.university = [...university];
  this.fieldStudy = [...fieldStudy];
  this.interestType = [...interestType];
  this.eventType = [...eventType];
}

//[organizationTags.cauci],
//[orgCatTags.clubs, orgCatTags.studentLife],
//[universityTags.UCI],
//[fieldStudyTags.allStudents],
//[interestTypeTags.Cultural, interestTypeTags.Social],
//[]

var asuci = new eventInfo(
  "ASUCI Resource Fair",
  "",
  "Come learn about what the ASUCI Office of Internal Affairs has to offer. We will have a lot of various resources and a wide variety of giveaways. You can learn to make toothpaste for pets, make your own overnight oats, learn about health and wellness resources and create your own plant. Location: Student Center Terrace Stage Time: 11-2pm on May 22nd and 23rd Giveaways will be soon announced, but you have a sneak peek in the flyer ;)",
  57,
  "May 22, 2019",
  "11:00",
  "14:00",
  "ASUCI",
  "UCI Student Center Terrage Stage",
  "",
  "Irvine",
  "CA",
  "USA",
  "92617",
  "https://www.facebook.com/events/328936727772376/?event_time_id=328936731105709",
  "",
  "",
  "asuci.png",

  [organizationTags.asuci],
  [orgCatTags.uniRunOrg, orgCatTags.studentLife],
  [universityTags.UCI],
  [fieldStudyTags.allStudents],
  [interestTypeTags.wellness],
  [eventTypeTags.exhibition]
);
export { asuci };

var aiCareerPanel = new eventInfo(
  "AI Career Panel",
  "Sponsored by UCI Master of Computer Science and Technossus",
  "The technology industry is evolving and growing rapidly with new advancements and developments. Specifically, artificial intelligence is a field that is revolutionizing many industries and applicable to nearly every sector. With the quick expansion and rapidly changing dynamic in the field, industry panelists will share their expertise and experience on anything ranging from the trends in AI, the challenges they face at work, and personal insight on adapting to emerging technologies and staying relevant to the constantly developing industry.",
  34,
  "May 21, 2019",
  "12:30",
  "14:30",
  "Donald Bren School of ICS",
  "DBH 6011",
  "",
  "Irvine",
  "CA",
  "",
  "",
  "https://www.facebook.com/events/663716630748361/",
  "",
  "bit.ly/mcs_aicareerpanel",
  "uci-ics.jpg",

  [organizationTags.donaldBrenICS],
  [orgCatTags.universityDepartment],
  [universityTags.UCI],
  [fieldStudyTags.ics],
  [interestTypeTags.academic, interestTypeTags.careerProfessional],
  [eventTypeTags.panelSession, eventTypeTags.networking]
);
export { aiCareerPanel };

var hackNights = new eventInfo(
  "HackNights",
  "Calling all innovators and creative individuals!",
  "Working on or wanting to start a project? Hack at UCI is holding its first HackNights! HackNights is a hackathon-style event where you are welcome to come work on (class or personal) projects and team up with others. The event provides a fun, productive environment for participants to collaborate on projects and develop new technical skills aided by technical mentors. HackNights is the perfect opportunity to have a structured time to work on a project! Have a problem hindering project development? Mentors and other skilled hackers will be there to help you develop skills to solve those problems! Want to meet new people in UCI’s hacking community? HackNights is the best place to socialize with enthusiastic and inspired people who you will see (and possibly work with) at future hackathons!",
  21,
  "May 21, 2019",
  "19:00",
  "21:30",
  "Hack at UCI",
  "DBH 6011",
  "",
  "Irvine",
  "CA",
  "",
  "",
  "https://www.facebook.com/events/2238215163095031/",
  "",
  "https://forms.gle/Jz5N5bJ8UwyDjBn36",
  "hack-uci.jpg",

  [organizationTags.hack],
  [orgCatTags.clubs],
  [universityTags.UCI],
  [fieldStudyTags.ics],
  [interestTypeTags.programming, interestTypeTags.tech],
  [eventTypeTags.workSession, eventTypeTags.meetup]
);
export { hackNights };

var iceSkate = new eventInfo(
  "Pi Class Ice Skating Fundraiser",
  "Have some fun on the ice while also supporting Pi Class! :)",
  "The event is Sunday May 19 1PM-3PM but feel free to drop in whenever during this time. Tickets are $15 including skate rental! Make sure to buy your ticket from our table in the front so that your contribution counts!",
  15,
  "May 19, 2019",
  "13:00",
  "15:00",
  "Theta Tau",
  "The Rinks - Anaheim ICE",
  "300 W Lincoln Ave",
  "Anaheim",
  "CA",
  "",
  "",
  "https://www.facebook.com/events/430292567531584/?active_tab=about",
  "",
  "",
  "thetatau.jpeg",

  [organizationTags.thetaTau],
  [orgCatTags.greekLife],
  [universityTags.UCI],
  [fieldStudyTags.engineering, fieldStudyTags.ics],
  [interestTypeTags.proFraternity, interestTypeTags.social],
  [eventTypeTags.socialEvent]
);
export { iceSkate };

var acmComp = new eventInfo(
  "ACM Internal Competition - Week 8",
  "",
  "We'll be having an internal competition today!! Anyone is welcome to compete, there will be prizes :)))",
  5,
  "May 21, 2019",
  "19:00",
  "21:00",
  "UCI Association of Computing Machinery",
  "ICS 432",
  "",
  "Irvine",
  "CA",
  "USA",
  "92617",
  "https://www.facebook.com/events/352064405499267/",
  "",
  "https://open.kattis.com/contests/y6ycsy/standings",
  "acm-uci.png",

  [organizationTags.acmuci],
  [orgCatTags.clubs],
  [universityTags.UCI],
  [fieldStudyTags.ics],
  [interestTypeTags.programming],
  [eventTypeTags.competition]
);
export { acmComp };


const ICSEvents = [
  aiCareerPanel,
  hackNights
];
export { ICSEvents };
