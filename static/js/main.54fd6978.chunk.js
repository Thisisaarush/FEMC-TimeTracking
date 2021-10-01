(this["webpackJsonptime-tracking-dashboard"]=this["webpackJsonptime-tracking-dashboard"]||[]).push([[0],{12:function(e){e.exports=JSON.parse('[{"title":"Work","color":"hsl(15, 100%, 70%)","timeframes":{"daily":{"current":5,"previous":7},"weekly":{"current":32,"previous":36},"monthly":{"current":103,"previous":128}}},{"title":"Play","color":"hsl(195, 74%, 62%)","timeframes":{"daily":{"current":1,"previous":2},"weekly":{"current":10,"previous":8},"monthly":{"current":23,"previous":29}}},{"title":"Study","color":"hsl(348, 100%, 68%)","timeframes":{"daily":{"current":0,"previous":1},"weekly":{"current":4,"previous":7},"monthly":{"current":13,"previous":19}}},{"title":"Exercise","color":"hsl(145, 58%, 55%)","timeframes":{"daily":{"current":1,"previous":1},"weekly":{"current":4,"previous":5},"monthly":{"current":11,"previous":18}}},{"title":"Social","color":"hsl(264, 64%, 52%)","timeframes":{"daily":{"current":1,"previous":3},"weekly":{"current":5,"previous":10},"monthly":{"current":21,"previous":23}}},{"title":"Self Care","color":"hsl(43, 84%, 65%)","timeframes":{"daily":{"current":0,"previous":1},"weekly":{"current":2,"previous":2},"monthly":{"current":7,"previous":11}}}]')},23:function(e,n,r){"use strict";r.r(n);var t,i,o,c,s,l,a,h,d,m,u=r(1),p=r.n(u),j=r(8),b=r.n(j),f=r(3),g=r(13),x=r(2),y=Object(x.b)(t||(t=Object(f.a)(["\n  *, *::before, *::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n  body {\n    font-family: Rubik, sans-serif;\n  }\n"]))),O={bgColor:"hsl(226, 43%, 10%)",cardBg:"hsl(235, 46%, 20%)",profileText:"hsl(235, 45%, 61%)",profileTextLight:"hsl(236, 100%, 87%)",profileBg:"hsl(246, 80%, 60%)",work:"hsl(15, 100%, 70%)",play:"hsl(195, 74%, 62%)",study:"hsl(348, 100%, 68%)",exercise:"hsl(145, 58%, 55%)",social:"hsl(264, 64%, 52%)",selfCare:"hsl(43, 84%, 65%)"},v=r.p+"static/media/icon-ellipsis.a57a4ac8.svg",w=r(12),k=r(0),C=x.c.div(i||(i=Object(f.a)(["\n  color: white;\n  border-radius: 1rem;\n  position: relative;\n  overflow: hidden;\n  h1 {\n    font-weight: 300;\n    font-size: 3rem;\n    margin-bottom: 0.5rem;\n  }\n  p {\n    color: ",";\n    font-size: 0.8rem;\n  }\n"])),(function(e){return e.theme.profileTextLight})),T=x.c.div(o||(o=Object(f.a)(["\n  width: 100%;\n  height: 90%;\n"]))),F=x.c.div(c||(c=Object(f.a)(["\n  width: 100%;\n  height: 80%;\n  background-color: ",";\n  padding: 1.5rem;\n  border-radius: 1rem;\n  position: absolute;\n  bottom: 0;\n  &:hover {\n    cursor: pointer;\n    background-color: ",";\n  }\n"])),(function(e){return e.theme.cardBg}),(function(e){return e.theme.profileText})),L=x.c.div(s||(s=Object(f.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n  h3 {\n    font-weight: 400;\n  }\n  img {\n    width: 15px;\n    height: 100%;\n    cursor: pointer;\n  }\n"]))),z=function(e){var n=e.time;return Object(k.jsx)(k.Fragment,{children:w.map((function(e){return Object(k.jsxs)(C,{children:[Object(k.jsx)(T,{style:{backgroundColor:"".concat(e.color)}}),Object(k.jsxs)(F,{children:[Object(k.jsxs)(L,{children:[Object(k.jsx)("h3",{children:e.title}),Object(k.jsx)("img",{src:v,alt:"more"})]}),"daily"===n?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)("h1",{children:[e.timeframes.daily.current,"hrs"]}),Object(k.jsxs)("p",{children:["Last Day - ",e.timeframes.daily.previous,"hrs"]})]}):"monthly"===n?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)("h1",{children:[e.timeframes.monthly.current,"hrs"]}),Object(k.jsxs)("p",{children:["Last Month - ",e.timeframes.monthly.previous,"hrs"]})]}):Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)("h1",{children:[e.timeframes.weekly.current,"hrs"]}),Object(k.jsxs)("p",{children:["Last Week - ",e.timeframes.weekly.previous,"hrs"]})]})]})]})}))})},B=r.p+"static/media/image-jeremy.71cd41f1.png",S=x.c.div(l||(l=Object(f.a)(["\n  grid-row: 1/3;\n  background-color: ",";\n  border-radius: 1rem;\n\n  @media (max-width: 600px) {\n    grid-row: 1;\n  }\n"])),(function(e){return e.theme.cardBg})),R=x.c.div(a||(a=Object(f.a)(["\n  height: 65%;\n  background-color: ",";\n  border-radius: 1rem;\n  padding: 1.5rem;\n  img {\n    width: 60px;\n    height: 60px;\n    margin-bottom: 2rem;\n    background-color: white;\n    padding: 2px;\n    border-radius: 50%;\n  }\n  p {\n    color: ",";\n    margin-bottom: 0.5rem;\n    font-size: 0.8rem;\n  }\n  h1 {\n    color: white;\n    font-weight: 300;\n  }\n\n  @media (max-width: 600px) {\n    height: auto;\n    display: flex;\n    img {\n      margin-right: 1rem;\n    }\n    p {\n      font-size: 1rem;\n    }\n    h1 {\n      font-size: 1.8rem;\n    }\n  }\n"])),(function(e){return e.theme.profileBg}),(function(e){return e.theme.profileTextLight})),J=x.c.div(h||(h=Object(f.a)(["\n  padding: 1.5rem;\n  color: ",";\n  p {\n    margin-bottom: 1rem;\n    cursor: pointer;\n    &:hover {\n      color: white;\n    }\n    &.weekly {\n      color: white;\n    }\n  }\n\n  @media (max-width: 600px) {\n    display: flex;\n    justify-content: space-between;\n    p {\n      font-size: 1.3rem;\n      margin-bottom: 0;\n    }\n  }\n"])),(function(e){return e.theme.profileText})),D=function(e){var n=e.useTime,r=Object(u.useRef)(),t=Object(u.useRef)(),i=Object(u.useRef)();return Object(k.jsxs)(S,{children:[Object(k.jsxs)(R,{children:[Object(k.jsx)("img",{src:B,alt:"profile"}),Object(k.jsxs)("div",{children:[Object(k.jsx)("p",{children:"Report for"}),Object(k.jsx)("h1",{children:"Jeremy Robson"})]})]}),Object(k.jsxs)(J,{children:[Object(k.jsx)("p",{ref:r,onClick:function(){n("daily"),r.current.style.color="white",t.current.style.color="hsl(235, 45%, 61%)",i.current.style.color="hsl(235, 45%, 61%)"},children:"Daily"}),Object(k.jsx)("p",{ref:t,className:"weekly",onClick:function(){n("weekly"),t.current.style.color="white",r.current.style.color="hsl(235, 45%, 61%)",i.current.style.color="hsl(235, 45%, 61%)"},children:"Weekly"}),Object(k.jsx)("p",{ref:i,onClick:function(){n("monthly"),i.current.style.color="white",t.current.style.color="hsl(235, 45%, 61%)",r.current.style.color="hsl(235, 45%, 61%)"},children:"Monthly"})]})]})};var M=x.c.div(d||(d=Object(f.a)(["\n  width: 100vw;\n  height: 100vh;\n  background-color: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  @media (max-width: 600px) {\n    height: auto;\n  }\n"])),(function(e){return e.theme.bgColor})),P=x.c.div(m||(m=Object(f.a)(["\n  width: 60vw;\n  height: 60vh;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 20px;\n\n  @media (max-width: 600px) {\n    width: 95%;\n    height: auto;\n    grid-template-columns: repeat(1, 1fr);\n    grid-template-rows: repeat(8, 1fr);\n    margin: 5rem 0;\n  }\n"]))),W=function(){var e=Object(u.useState)("weekly"),n=Object(g.a)(e,2),r=n[0],t=n[1];return Object(k.jsx)(x.a,{theme:O,children:Object(k.jsxs)(M,{children:[Object(k.jsx)(y,{}),Object(k.jsxs)(P,{children:[Object(k.jsx)(D,{time:r,useTime:t}),Object(k.jsx)(z,{time:r,useTime:t})]})]})})},E=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,24)).then((function(n){var r=n.getCLS,t=n.getFID,i=n.getFCP,o=n.getLCP,c=n.getTTFB;r(e),t(e),i(e),o(e),c(e)}))};b.a.render(Object(k.jsx)(p.a.StrictMode,{children:Object(k.jsx)(W,{})}),document.getElementById("root")),E()}},[[23,1,2]]]);
//# sourceMappingURL=main.54fd6978.chunk.js.map