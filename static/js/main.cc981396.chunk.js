(this["webpackJsonpsalat-counter"]=this["webpackJsonpsalat-counter"]||[]).push([[0],{23:function(e,c,t){},24:function(e,c,t){},25:function(e,c,t){},33:function(e,c,t){"use strict";t.r(c);var n=t(9),s=t.n(n),a=t(17),i=t.n(a),l=(t(23),t(24),t(11)),o=(t(25),t(18)),r=(t(31),o.a.initializeApp({apiKey:"AIzaSyAYkOm2--w8mroxJZVQ5IpqFDTsMNcE2tg",authDomain:"salat-counter.firebaseapp.com",projectId:"salat-counter",storageBucket:"salat-counter.appspot.com",messagingSenderId:"256604904104",appId:"1:256604904104:web:2c0f84ff5df00cf7b1c09d",measurementId:"G-T3VR04KFQP"})),d=t(3);var j=function(){var e=Object(n.useState)(),c=Object(l.a)(e,2),t=c[0],s=c[1],a=Object(n.useState)(),i=Object(l.a)(a,2),o=i[0],j=i[1],h=Object(n.useState)(),b=Object(l.a)(h,2),u=b[0],O=b[1],x=Object(n.useState)(),m=Object(l.a)(x,2),f=m[0],N=m[1],g=Object(n.useState)(),p=Object(l.a)(g,2),v=p[0],k=p[1];return Object(n.useEffect)((function(){r.firestore().collection("salat").doc("fajr").get().then((function(e){console.log(e.data()),s(e.data().fajr)})),r.firestore().collection("salat").doc("duhr").get().then((function(e){console.log(e.data()),j(e.data().duhr)})),r.firestore().collection("salat").doc("esar").get().then((function(e){console.log(e.data()),O(e.data().esar)})),r.firestore().collection("salat").doc("magrib").get().then((function(e){console.log(e.data()),N(e.data().magrib)})),r.firestore().collection("salat").doc("isha").get().then((function(e){console.log(e.data()),k(e.data().isha)}))}),[]),Object(d.jsxs)("div",{className:"home",children:[Object(d.jsx)("div",{className:"header",children:Object(d.jsx)("h3",{className:"head",children:"Khalaah Reminder"})}),Object(d.jsx)("div",{className:"body",children:Object(d.jsxs)("table",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("div",{className:"names",children:Object(d.jsxs)("div",{className:"outer",children:[" ",Object(d.jsx)("p",{className:"inner",children:" Fajr "})," "]})})}),Object(d.jsx)("td",{children:Object(d.jsx)("div",{className:"countmain",children:Object(d.jsx)("span",{className:"count",children:t||""})})}),Object(d.jsx)("td",{children:Object(d.jsx)("div",{className:"buttons",children:Object(d.jsx)("button",{onClick:function(){t>0&&(s(t-1),r.firestore().collection("salat").doc("fajr").update({fajr:t-1}).then((function(){console.log("ok")})).catch((function(e){console.log("err")})))},children:"-"})})})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("div",{className:"names",children:Object(d.jsxs)("div",{className:"outer",children:[" ",Object(d.jsx)("p",{className:"inner",children:" Duhr "})," "]})})}),Object(d.jsx)("td",{children:Object(d.jsx)("div",{className:"countmain",children:Object(d.jsx)("span",{className:"count",children:o||""})})}),Object(d.jsx)("td",{children:Object(d.jsx)("div",{className:"buttons",children:Object(d.jsx)("button",{onClick:function(){o>0&&(j(o-1),r.firestore().collection("salat").doc("duhr").update({duhr:o-1}).then((function(){console.log("ok")})).catch((function(e){console.log("err")})))},children:"-"})})})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("div",{className:"names",children:Object(d.jsxs)("div",{className:"outer",children:[" ",Object(d.jsx)("p",{className:"inner",children:" Esar "})," "]})})}),Object(d.jsx)("td",{children:Object(d.jsx)("div",{className:"countmain",children:Object(d.jsx)("span",{className:"count",children:u||""})})}),Object(d.jsx)("td",{children:Object(d.jsx)("div",{className:"buttons",children:Object(d.jsx)("button",{onClick:function(){u>0&&(O(u-1),r.firestore().collection("salat").doc("esar").update({esar:u-1}).then((function(){console.log("ok")})).catch((function(e){console.log("err")})))},children:"-"})})})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("div",{className:"names",children:Object(d.jsxs)("div",{className:"outer",children:[" ",Object(d.jsx)("p",{className:"inner",children:" Magrib"})," "]})})}),Object(d.jsx)("td",{children:Object(d.jsx)("div",{className:"countmain",children:Object(d.jsx)("span",{className:"count",children:f||""})})}),Object(d.jsx)("td",{children:Object(d.jsx)("div",{className:"buttons",children:Object(d.jsx)("button",{onClick:function(){f>0&&(N(f-1),r.firestore().collection("salat").doc("magrib").update({magrib:f-1}).then((function(){console.log("ok")})).catch((function(e){console.log("err")})))},children:"-"})})})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("div",{className:"names",children:Object(d.jsxs)("div",{className:"outer",children:[" ",Object(d.jsx)("p",{className:"inner",children:" Isha "})," "]})})}),Object(d.jsx)("td",{children:Object(d.jsx)("div",{className:"countmain",children:Object(d.jsx)("span",{className:"count",children:v||""})})}),Object(d.jsx)("td",{children:Object(d.jsx)("div",{className:"buttons",children:Object(d.jsx)("button",{onClick:function(){v>0&&(k(v-1),r.firestore().collection("salat").doc("isha").update({isha:v-1}).then((function(){console.log("ok")})).catch((function(e){console.log("err")})))},children:"-"})})})]})]})})]})};var h=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(j,{})})},b=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,34)).then((function(c){var t=c.getCLS,n=c.getFID,s=c.getFCP,a=c.getLCP,i=c.getTTFB;t(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(h,{})}),document.getElementById("root")),b()}},[[33,1,2]]]);
//# sourceMappingURL=main.cc981396.chunk.js.map