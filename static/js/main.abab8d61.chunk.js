(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{121:function(t,e,l){"use strict";l.r(e);var c=l(2),s=l.n(c),n=l(32),a=l.n(n),i=(l(40),l(33)),o=l(8),r=l(34),d=l.n(r)()({projectId:"ghqm8r5e",dataset:"production",useCdn:!0}),j=function(){var t=Object(c.useState)(null),e=Object(o.a)(t,2),l=e[0],s=e[1],n=Object(c.useState)(null),a=Object(o.a)(n,2),i=a[0],r=a[1],j=Object(c.useState)(null),u=Object(o.a)(j,2),_=u[0],b=u[1],x=Object(c.useState)(null),h=Object(o.a)(x,2),m=h[0],v=h[1];return Object(c.useEffect)((function(){d.fetch('*[_type == "titleContent"] {\n            myName,\n            mainTitle1,\n            mainTitle2,\n            mainTitle3,\n            myPicture {\n              asset->{\n                _id,\n                url\n              }\n            },\n            whatIam,\n            basedIn\n          }').then((function(t){s(t[0])})).catch((function(t){console.log(t)})),d.fetch('*[_type == "aboutMe"] {\n        aboutMeHeading,\n        aboutMeText1,\n        aboutMeText2\n      }').then((function(t){r(t[0])})).catch((function(t){console.log(t)})),d.fetch('*[_type == "skills"] {\n        skillsHeading,\n        skillsText,\n        skillsToolsHeading,\n        skillsTools\n      }').then((function(t){b(t[0])})).catch((function(t){console.log(t)})),d.fetch('*[_type == "contacts"] {\n        contactLinks\n      }').then((function(t){console.log(t[0]),v(t[0])})).catch((function(t){console.log(t)}))}),[]),{titleData:l,aboutMe:i,skills:_,contacts:m}},u=l(3),_=l.n(u),b=l(0),x=function(t){var e,l,c,s,n,a,i;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("section",{"data-scroll-section":!0,children:Object(b.jsxs)("div",{className:_.a.Title,children:[Object(b.jsx)("div",{className:"".concat(_.a.my_name," ").concat(_.a.fade_in),children:Object(b.jsx)("h5",{children:null===(e=t.titleData)||void 0===e?void 0:e.myName})}),Object(b.jsx)("div",{"data-scroll":!0,"data-scroll-speed":"2",className:_.a.title_container,children:Object(b.jsxs)("h1",{children:[Object(b.jsx)("div",{"data-scroll":!0,className:_.a.t_c_1,children:null===(l=t.titleData)||void 0===l?void 0:l.mainTitle1}),Object(b.jsx)("div",{"data-scroll":!0,className:_.a.t_c_2,children:null===(c=t.titleData)||void 0===c?void 0:c.mainTitle2}),Object(b.jsx)("div",{"data-scroll":!0,className:_.a.t_c_3,children:null===(s=t.titleData)||void 0===s?void 0:s.mainTitle3})]})})]})}),Object(b.jsx)("section",{"data-scroll-section":!0,children:Object(b.jsxs)("div",{"data-scroll":!0,"data-scroll-speed":"2",className:_.a.picture_container,children:[Object(b.jsx)("div",{"data-scroll":!0,children:null===(n=t.titleData)||void 0===n?void 0:n.whatIam}),Object(b.jsx)("div",{children:Object(b.jsx)("img",{"data-scroll":!0,src:null===(a=t.titleData)||void 0===a?void 0:a.myPicture.asset.url,alt:"..."})}),Object(b.jsx)("div",{"data-scroll":!0,children:null===(i=t.titleData)||void 0===i?void 0:i.basedIn})]})})]})},h=l(15),m=l.n(h),v=l(4),O=l.n(v),f=function(t){var e=t.aboutMe;return Object(b.jsx)("section",{"data-scroll-section":!0,children:Object(b.jsxs)("div",{"data-scroll":!0,"data-scroll-speed":"2","data-scroll-class":m.a.scrollClass,className:m.a.AboutMe,children:[Object(b.jsx)("h1",{children:null===e||void 0===e?void 0:e.aboutMeHeading}),e&&Object(b.jsx)(O.a,{content:e.aboutMeText1,className:"dummyStyles",serializers:{}}),Object(b.jsx)("br",{}),e&&Object(b.jsx)(O.a,{content:e.aboutMeText2,className:"dummyStyles",serializers:{}})]})})},T=l(7),k=l.n(T),p=function(t){var e=t.skills;return Object(b.jsx)("section",{"data-scroll-section":!0,children:Object(b.jsxs)("div",{"data-scroll":!0,"data-scroll-speed":"2","data-scroll-class":k.a.scrollClass,className:k.a.Skills,children:[Object(b.jsx)("h1",{children:null===e||void 0===e?void 0:e.skillsHeading}),e&&Object(b.jsx)(O.a,{content:null===e||void 0===e?void 0:e.skillsText,className:k.a.skillText,serializers:{}}),Object(b.jsx)("h1",{children:null===e||void 0===e?void 0:e.skillsToolsHeading}),e&&Object(b.jsx)(O.a,{content:null===e||void 0===e?void 0:e.skillsTools,className:k.a.toolsList,serializers:{}})]})})},g=l(35),y=l.n(g),S=function(t){var e=t.contacts;return Object(b.jsx)("section",{"data-scroll-section":!0,children:Object(b.jsx)("div",{className:y.a.Contacts,children:e&&Object(b.jsx)("h1",{children:Object(b.jsx)(O.a,{content:null===e||void 0===e?void 0:e.contactLinks,className:"dummyStyles",serializers:{}})})})})};var M=function(){var t=j(),e=t.titleData,l=t.aboutMe,s=t.skills,n=t.contacts;return Object(c.useEffect)((function(){console.log(document.querySelector("[data-scroll-container]"));new i.a({el:document.querySelector("[data-scroll-container]"),smooth:!0,multiplier:.5})}),[]),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{"data-scroll-container":!0,children:[Object(b.jsx)(x,{titleData:e}),Object(b.jsx)(f,{aboutMe:l}),Object(b.jsx)(p,{skills:s}),Object(b.jsx)(S,{contacts:n})]})})},N=function(t){t&&t instanceof Function&&l.e(3).then(l.bind(null,122)).then((function(e){var l=e.getCLS,c=e.getFID,s=e.getFCP,n=e.getLCP,a=e.getTTFB;l(t),c(t),s(t),n(t),a(t)}))};a.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(M,{})}),document.getElementById("root")),N()},15:function(t,e,l){t.exports={AboutMe:"AboutMe_AboutMe__xP-ln",scrollClass:"AboutMe_scrollClass__3Rf6a"}},3:function(t,e,l){t.exports={Title:"Title_Title__3cQPx",my_name:"Title_my_name__3GYor",fadeIn:"Title_fadeIn__3wctV",title_container:"Title_title_container__2YmuT",t_c_1:"Title_t_c_1__2gJ-6",reveal:"Title_reveal__1mMVW",t_c_2:"Title_t_c_2__34Pr4",t_c_3:"Title_t_c_3__2mjEH",picture_container:"Title_picture_container__YatQX"}},35:function(t,e,l){t.exports={Contacts:"Contacts_Contacts__2ZxDR"}},40:function(t,e,l){},7:function(t,e,l){t.exports={Skills:"Skills_Skills__2xCDS",scrollClass:"Skills_scrollClass__RHKbL",skillText:"Skills_skillText__30EzW",toolsList:"Skills_toolsList__2sR55"}}},[[121,1,2]]]);
//# sourceMappingURL=main.abab8d61.chunk.js.map