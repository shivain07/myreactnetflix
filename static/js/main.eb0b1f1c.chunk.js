(this.webpackJsonpmyreact2=this.webpackJsonpmyreact2||[]).push([[0],{22:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var i=a(1),n=a(16),c=a.n(n),r=(a(22),a(0));var s=function(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"pagecontainer",children:[Object(r.jsx)("h1",{children:e.heading}),Object(r.jsxs)("div",{className:"pagecontent",children:[Object(r.jsx)("h3",{style:{color:"azure",textAlign:"center",width:"70vw"},children:e.content}),Object(r.jsx)("img",{src:e.image,alt:"images"})]})]})})};var o=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(s,{heading:"this is contact",content:"welcome to netflix here we solve your daily quest for series movies and more\r\nCarl Sagan and Ann Druyan began working on the film in 1979. Together, they wrote a film treatment more than 100 pages long and set up Contact at Warner Bros. with Peter Guber and Lynda Obst as producers. When development stalled on the film, Sagan published Contact as a novel in 1985, and the film adaptation was rejuvenated in 1989. Roland Joff\xe9 and George Miller had planned to direct it, but Joff\xe9 dropped out in 1993, and Warner Bros. fired Miller in 1995. Robert Zemeckis was eventually hired to direct, and filming for Contact lasted from September 1996 to February 1997. Sony Pictures Imageworks handled most of the visual effects sequences. ",image:"https://picsum.photos/400/400"})})};var m=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(s,{heading:"this is About",content:"welcome to netflix here we solve your daily quest for series movies and more\r\nJoin Over 30 Million People Learning Online with Udemy. 30-Day Money-Back Guarantee! Learn CompTIA A+ Online At Your Own Pace. Start Today and Become an Expert in Days. Over 50,000 Instructors. Download To Your Phone. Lifetime Access. Over 130,000 Courses. ",image:"https://picsum.photos/400/400"})})},j=a(2);var g=function(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"card-tag",children:[Object(r.jsx)("img",{src:e.image,alt:"hi"}),Object(r.jsx)("h2",{children:e.show})]})})},l=[{image:"/images/ih1.jpeg",type:"horror"},{image:"/images/ih2.jpeg",type:"horror"},{image:"/images/ih3.jpeg",type:"horror"},{image:"/images/ih4.jpeg",type:"horror"},{image:"/images/ac3.jpeg",type:"horror"},{image:"/images/ac1.jpeg",type:"action"},{image:"/images/ac2.jpeg",type:"action"},{image:"/images/ac3.jpeg",type:"action"},{image:"/images/i1.jpeg",type:"action"},{image:"/images/ac4.jpeg",type:"action"},{image:"/images/ac5.jpeg",type:"action"},{image:"/images/i4.jpeg",type:"comedy"},{image:"/images/i5.jpeg",type:"comedy"},{image:"/images/i7.jpeg",type:"comedy"},{image:"/images/ic1.jpeg",type:"comedy"},{image:"/images/ic2.jpeg",type:"comedy"},{image:"/images/ic3.jpeg",type:"comedy"},{image:"/images/i8.jpeg",type:"comedy"},{image:"/images/i7.jpeg",type:"romance"},{image:"/images/i8.jpeg",type:"romance"},{image:"/images/ic2.jpeg",type:"romance"},{image:"/images/i6.jpeg",type:"romance"},{image:"/images/ac4.jpeg",type:"romance"}];var h=function(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"net-category",children:[Object(r.jsx)("h1",{children:e.heading}),Object(r.jsx)("div",{className:"card-parent",children:l.map((function(t,a){if(t.type===e.heading)return Object(r.jsx)(g,{image:t.image,show:t.show},a)}))})]})})},d=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"slider"})})};var p=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{children:"this is netflix home"}),Object(r.jsx)(d,{}),Object(r.jsx)(h,{heading:"action"}),Object(r.jsx)(h,{heading:"comedy"}),Object(r.jsx)(h,{heading:"romance"}),Object(r.jsx)(h,{heading:"horror"})]})},b=a(7),u=a(14),x=function(){var e=Object(i.useState)(l),t=Object(u.a)(e,2),a=t[0],n=t[1],c=Object(i.useState)(""),s=Object(u.a)(c,2),o=s[0],m=s[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"searchdiv",children:Object(r.jsx)("input",{className:"searchBox",style:{border:"2px solid rgb(20, 16, 231)"},type:"text",placeholder:"search here",onChange:function(e){return function(e){var t=e.target.value;if(""===t||null===t)m("Enter in searchbox to search"),n(l);else{var a=l.filter((function(e,a){if(e.type.includes(t))return m("results:"),e.type===t}));n(a)}}(e)}})}),Object(r.jsx)("h1",{children:o}),Object(r.jsx)("div",{className:"card-parent",style:{display:"flex",flexWrap:"wrap"},children:a.map((function(e,t){return Object(r.jsx)(g,{image:e.image,show:e.show},t)}))})]})};var O=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"navbarLinks",children:[Object(r.jsx)(b.b,{className:"link",exact:!0,activeClassName:"active",to:"/About",children:"About"}),Object(r.jsx)(b.b,{className:"link",exact:!0,activeClassName:"active",to:"/",children:"Home"}),Object(r.jsx)(b.b,{className:"link",exact:!0,activeClassName:"active",to:"/Contact",children:"Contact"}),Object(r.jsx)(b.b,{className:"link",exact:!0,activeClassName:"active",to:"/Search",children:"Search"})]})})};var y=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(O,{}),Object(r.jsxs)(j.c,{children:[Object(r.jsx)(j.a,{path:"/",component:p,exact:!0}),Object(r.jsx)(j.a,{exact:!0,path:"/about",component:m}),Object(r.jsx)(j.a,{exact:!0,path:"/contact",component:o}),Object(r.jsx)(j.a,{exact:!0,path:"/search",component:x}),Object(r.jsx)(j.a,{component:p})]})]})};c.a.render(Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(b.a,{children:Object(r.jsx)(y,{})})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.eb0b1f1c.chunk.js.map