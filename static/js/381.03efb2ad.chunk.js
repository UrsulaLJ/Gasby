"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[381],{3381:function(e,t,r){r.r(t),r.d(t,{default:function(){return L}});var s=r(1413),a=r(9439),n=r(4165),u=r(5861),i=r(1366),l=r(4028),o=r.n(l),c=r(2751),d=r(6056),m=r(7313),p=r(6376),D=r(4202),x=r(8878),h=r(3083),f=r(4377),b=r(7067),C=r(6773),v=r(8684),g=r(5572),E=r(8898),j=r(2129),F=r(587),N=r(6417);function Z(e){var t,r=e.onChange,s=e.value,l=e.setVisible,Z=(0,E.bp)(),A=Z.settings,S=Z.updateSettings,B=(0,m.useState)(),z=(0,a.Z)(B,2),P=z[0],R=z[1],q=(0,j.r1)(s,{customPrompts:null===A||void 0===A?void 0:A.customPrompts}),I=P?F.Q4.filter((function(e){return!e.pinned&&-1!==e.name.toLocaleLowerCase().indexOf(P.toLocaleLowerCase())})):F.Q4.filter((function(e){return!e.pinned})),L=P?F.Q4.filter((function(e){return e.pinned&&-1!==e.name.toLocaleLowerCase().indexOf(P.toLocaleLowerCase())})):F.Q4.filter((function(e){return e.pinned})),O=(0,m.createRef)();function V(){e.setRoute("create")}function U(e){return Y.apply(this,arguments)}function Y(){return(Y=(0,u.Z)((0,n.Z)().mark((function e(t){var r,s,u,i,l;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object.assign({description:""},t,{id:(0,c.x0)()}),(s=(null===A||void 0===A?void 0:A.customPrompts)||[]).push(r),e.next=5,o()(S({customPrompts:s}));case 5:if(u=e.sent,i=(0,a.Z)(u,1),!(l=i[0])){e.next=11;break}return d.Am.error(l.toString()),e.abrupt("return");case 11:d.Am.success("Duplicated");case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Q(){return(Q=(0,u.Z)((0,n.Z)().mark((function e(t){var r,s,u,i,l;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(null===A||void 0===A?void 0:A.customPrompts)||[],s=r.findIndex((function(e){return e.id===t.id})),r.splice(s,1),e.next=5,o()(S({customPrompts:r}));case 5:if(u=e.sent,i=(0,a.Z)(u,1),!(l=i[0])){e.next=11;break}return d.Am.error(l.toString()),e.abrupt("return");case 11:d.Am.success("Removed");case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(t){var s=t.name,a=s.replace(F.RY,""),n="emoji"in t?t:F.qU.find((function(e){return e.title===a}))||F.qU[0],u=q.name===s;return(0,N.jsxs)("div",{className:(0,p.createClassStr)(i.Z.cardContainer,u?"bg-lime-600/10 text-lime-700 dark:text-lime-500":"text-zinc-900/80 dark:text-white md:hover:opacity-70"),onClick:function(){r(t),l(!1)},children:[(0,N.jsx)("span",{className:"text-3xl",children:n.emoji}),(0,N.jsx)("label",{className:i.Z.cardTitle,children:s.replace(F.RY,"")}),(0,N.jsx)("p",{className:i.Z.cardDesc,children:n.description}),(0,N.jsxs)("div",{className:(0,p.createClassStr)(y,"top-3 right-3"),children:[(0,N.jsx)("button",{onClick:function(e){(0,j.PF)(e),U(t)},title:"Duplicate",className:k,children:(0,N.jsx)(x.Z,{size:14})}),"id"in t&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)("button",{onClick:function(r){e.setEditing(t.id),(0,j.PF)(r)},title:"Edit",className:k,children:(0,N.jsx)(h.Z,{size:14})}),(0,N.jsx)("button",{title:"Delete",onClick:function(e){(0,j.PF)(e),window.confirm("Delete ".concat(t.name,"?"))&&function(e){Q.apply(this,arguments)}(t)},className:k,children:(0,N.jsx)(f.Z,{size:14})})]})]})]},"prompt-pin-".concat(t.name))}function _(e){var t=e.index,s=e.key,a=e.style,n=I[t],u=n.name,i=q.name===u;return(0,N.jsxs)("div",{className:(0,p.createClassStr)("relative group duration-200 cursor-pointer py-2 border-zinc-900/10 dark:border-zinc-700/40 opacity-80 md:hover:opacity-100",t<I.length-1&&"border-b",i?"bg-lime-600/10 text-lime-700 dark:text-lime-500 px-2 font-semibold":"text-zinc-800 dark:text-zinc-300"),style:a,onClick:function(){r(n),l(!1)},children:[u.replace(F.RY,""),(0,N.jsx)("div",{className:(0,p.createClassStr)(y,"top-1.5 right-0"),children:(0,N.jsx)("button",{onClick:function(e){(0,j.PF)(e),U(n)},title:"Duplicate",className:k,children:(0,N.jsx)(x.Z,{size:14})})})]},s)}return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)("div",{className:"relative m-4 mb-0",children:[(0,N.jsx)(b.Z,{size:18,className:"absolute top-4 opacity-40 left-4"}),(0,N.jsx)("input",{ref:O,onChange:function(e){R(e.currentTarget.value)},placeholder:"Find your AI assistant...",className:(0,p.createClassStr)("outline-none w-full","placeholder:text-zinc-900/40 dark:placeholder:text-zinc-100/40","pl-12 px-3 pt-[14px] pb-[13px]",i.Z.borderColor,i.Z.inputContainer)}),(0,N.jsx)("div",{className:"z-10 absolute right-3 top-2 flex flex-row gap-2",children:P&&(0,N.jsx)("button",{onClick:function(){O.current&&(O.current.value=""),R(void 0)},children:(0,N.jsx)(C.Z,{className:"rotate-45"})})})]}),(0,N.jsxs)("div",{className:"flex flex-col sm:flex-row duration-200 flex-1 overflow-y-auto border-zinc-100/10 md:hover:border-zinc-100/30",children:[(0,N.jsxs)("div",{className:(0,p.createClassStr)(i.Z.borderColor,"flex-1 sm:overflow-y-auto grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 app-sb flex border-r"),children:[(0,N.jsxs)("div",{className:"sm:col-span-2 flex flex-row gap-4 items-center pb-2",children:[(0,N.jsx)("label",{className:"block text-xl font-semibold",children:"Your characters"}),(0,N.jsxs)("button",{onClick:V,className:(0,p.createClassStr)(i.Z.btnSquareContainer,"px-1 text-[12px] mt-1"),children:[(0,N.jsx)(C.Z,{size:18}),"New"]})]}),null!==A&&void 0!==A&&null!==(t=A.customPrompts)&&void 0!==t&&t.length?A.customPrompts.map(T):null!==A&&void 0!==A&&A.licenseKey?(0,N.jsxs)("div",{onClick:V,className:(0,p.createClassStr)(i.Z.btnSquareContainer,"p-4 text-sm sm:col-span-2 cursor-pointer"),children:[(0,N.jsx)(C.Z,{size:18}),"Click to create your custom AI Characters"]}):(0,N.jsxs)("div",{className:(0,p.createClassStr)("p-4 text-sm sm:col-span-2 bg-orange-400/20 text-orange-500 dark:text-orange-500 rounded-lg flex flex-row gap-2"),children:[(0,N.jsx)(v.Z,{size:18,variant:"Bold"}),"Upgrade to add your custom AI Character"]}),(0,N.jsx)("label",{className:"sm:col-span-2 text-xl font-semibold my-2",children:"Common characters"}),L.map(T)]}),(0,N.jsxs)("div",{className:(0,p.createClassStr)(i.Z.borderColor,"sm:w-[240px]"),children:[(0,N.jsx)("label",{className:"block mb-3 text-xl font-semibold p-4 pb-0",children:"Others"}),g.t?(0,N.jsx)("div",{className:(0,p.createClassStr)("app-sb p-4 pt-0 w-full sm:overflow-y-auto",i.Z.borderColor),children:I.map((function(e,t){if(e.pinned)return null;var a=e.name;return(0,N.jsxs)("div",{className:(0,p.createClassStr)("relative group duration-200 cursor-pointer py-2 border-zinc-900/10 dark:border-zinc-700/40 opacity-80 md:hover:opacity-100",t<I.length-1&&"border-b",t===parseInt(s.toString())?"bg-lime-600/10 text-lime-700 dark:text-lime-500 px-2 font-semibold":"text-zinc-800 dark:text-zinc-300"),onClick:function(){r(e),l(!1)},children:[a.replace(F.RY,""),(0,N.jsx)("div",{className:(0,p.createClassStr)(y,"top-3 right-3"),children:(0,N.jsx)("button",{onClick:function(t){(0,j.PF)(t),U(e)},title:"Duplicate",className:k,children:(0,N.jsx)(x.Z,{size:14})})})]},"item-".concat(a))}))}):(0,N.jsx)(w,{children:function(e){var t=e.height,r=e.width;return(0,m.createElement)(D.aV,{width:r,height:t-60,rowCount:I.length,rowHeight:40,rowRenderer:_,className:(0,p.createClassStr)("app-sb p-4",i.Z.borderColor)})}})]})]})]})}var w=D.qj,k=(0,p.createClassStr)("p-1 text-[11px] font-semibold",i.Z.borderColorRg),y=(0,p.createClassStr)(i.Z.btnSquareContainer,"duration-100 lg:opacity-0 md:group-hover:lg:opacity-100 absolute divide-x"),A=r(7451),S=r(4942),B=r(5539),z=r(1398),P=r(3766),R=/(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEDC-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8])+/g;function q(e){var t,r=(0,m.useState)(!1),l=(0,a.Z)(r,2),D=l[0],x=l[1],h=(0,m.useState)(),f=(0,a.Z)(h,2),b=f[0],C=f[1],v=(0,E.bp)(),g=v.settings,j=v.updateSettings,F=e.setRoute,Z=e.editing,w=e.setEditing,k=Z?null===g||void 0===g||null===(t=g.customPrompts)||void 0===t?void 0:t.find((function(e){return e.id===Z})):void 0;function y(e){var t=e.currentTarget;C((0,s.Z)((0,s.Z)({},b),{},(0,S.Z)({},t.name,t.value)))}function A(){return(A=(0,u.Z)((0,n.Z)().mark((function e(){var t,r,s,u;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=Z?I():q())){e.next=15;break}return x(!0),e.next=5,o()(j({customPrompts:t}));case 5:if(r=e.sent,s=(0,a.Z)(r,1),!(u=s[0])){e.next=11;break}return d.Am.error(u.message),e.abrupt("return");case 11:return d.Am.success("Completed"),x(!1),L(),e.abrupt("return");case 15:d.Am.error("Unable to ".concat(Z?"update":"create",". Please try again!"));case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(){var e=b||{},t=e.name,r=void 0===t?"":t,s=e.description,a=void 0===s?"":s,n=e.prompt,u=void 0===n?"":n,i=e.example,l=void 0===i?"":i;if(r&&u){var o=(null===g||void 0===g?void 0:g.customPrompts)||[],d=(r.match(R)||[])[0]||"\ud83d\ude00";return r=r.substring(r.search(/[a-z]/i)),o.push({name:r,description:a,emoji:d,prompt:u,example:l,id:(0,c.x0)()}),o}return null}function I(){if(b&&Z){var e=(null===g||void 0===g?void 0:g.customPrompts)||[],t=e.findIndex((function(e){return e.id===Z})),r=b.name,a=void 0===r?(null===k||void 0===k?void 0:k.name)||"":r,n=(a.match(R)||[])[0]||"\ud83d\ude00";return a=a.substring(a.search(/[a-z]/i)),e[t]=Object.assign({},e[t],(0,s.Z)((0,s.Z)({},b),{},{name:a,emoji:n})),e}return null}function L(){Z?w(void 0):F("select")}return(0,N.jsxs)("div",{className:(0,p.createClassStr)("p-8 md:w-[680px] overflow-y-auto app-sb relative",i.Z.borderColor),children:[(0,N.jsxs)("button",{className:(0,p.createClassStr)(i.Z.btnSquareContainer,"px-2 py-1 mb-4 text-xs gap-2 rounded-full"),onClick:L,children:[(0,N.jsx)(z.Z,{size:16})," Go back"]}),(0,N.jsxs)("h2",{className:"text-3xl font-semibold mb-2",children:[Z?"Edit":"New"," character"]}),(0,N.jsx)("p",{className:"mt-2 text-sm text-zinc-900/50 dark:text-zinc-100/40 mb-6",children:"Add your customize AI Character"}),(0,N.jsxs)("div",{className:"grid md:grid-cols-2 md:gap-8",children:[(0,N.jsxs)("div",{children:[(0,N.jsx)("label",{className:"text-md font-semibold",children:"Name"}),(0,N.jsx)("input",{placeholder:"\u270d\ufe0f A Content Writer",className:(0,p.createClassStr)(i.Z.inputClassName,"mt-2 mb-4"),onChange:y,defaultValue:k?[k.emoji,k.name].filter(Boolean).join(""):"",name:"name"}),(0,N.jsx)("label",{className:"text-md font-semibold",children:"Description"}),(0,N.jsx)("textarea",{placeholder:"A professional writer that help optimise for high quality content and SEO",className:(0,p.createClassStr)(i.Z.inputClassName,"mt-2 mb-4"),onChange:y,defaultValue:null===k||void 0===k?void 0:k.description,name:"description"}),(0,N.jsx)("label",{className:"text-md font-semibold",children:"Example prompt"}),(0,N.jsx)("textarea",{placeholder:"proofread and fix grammar error of the following content:....",className:(0,p.createClassStr)(i.Z.inputClassName,"mt-2 mb-4"),onChange:y,defaultValue:null===k||void 0===k?void 0:k.example,name:"example"})]}),(0,N.jsxs)("div",{children:[(0,N.jsx)("label",{className:"text-md font-semibold",children:"Prompt"}),(0,N.jsx)("textarea",{placeholder:"I want you to act as an SEO editor and help me optimise my website's content for search engines. Focus on principles of SEO writing, such as conducting keyword research, optimising headings and subheadings, and incorporating internal and external links. Also ensure that my content is high-quality and relevant to my target audience while also ranking well in search results, follow best practices for tracking and analysing the performance of my content and making data-driven decisions about future optimisation efforts",className:(0,p.createClassStr)(i.Z.inputClassName,"mt-2 mb-4 h-[160px] md:h-[256px] app-sb"),onChange:y,defaultValue:null===k||void 0===k?void 0:k.prompt,name:"prompt"})]})]}),(0,N.jsx)("div",{className:"mt-4",children:(0,N.jsxs)("button",{disabled:D,onClick:function(){return A.apply(this,arguments)},className:(0,p.createClassStr)(B.L,"w-[200px]"),children:[D?(0,N.jsx)(P.Z,{size:14,className:"absolute left-4 animate-spin"}):null,(0,N.jsx)("span",{className:"ml-2 flex-1",children:Z?"Update":"Create"})]})})]})}var I=r(3096);function L(e){var t=(0,m.useState)("select"),r=(0,a.Z)(t,2),n=r[0],u=r[1],i=(0,E.bp)().settings,l=void 0===i?{}:i,o=(0,m.useState)(!1),c=(0,a.Z)(o,2),d=c[0],D=c[1],x=(0,m.useState)(),h=(0,a.Z)(x,2),f=h[0],b=h[1],C=(0,j.r1)(e.value,{customPrompts:l.customPrompts}),v=f?"create":n;return(0,N.jsx)(A.Z,{visible:d,ctnClassName:(0,p.createClassStr)("sm:overflow-y-hidden","select"===v?"lg:w-[800px]":"lg:w-auto"),btnClassName:"px-[5px] py-1 md:py-[2px] font-medium rounded-md max-w-[60%]",onVisibleChange:D,button:(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)("span",{className:"bg-gradient-to-bl from-lime-500 to-lime-600 w-[10px] h-[10px] bg-green-600 inline-block rounded-full shadow shadow-lime-600/20 mr-1"}),(0,N.jsx)("span",{className:"whitespace-nowrap text-ellipsis overflow-hidden sm:max-w-fit",children:g.t||"bubble"===l.display?C.name.replace(/^(an|a)\s{0,1}/,""):"I'm ".concat(C.name)})]}),children:(0,N.jsx)(I.O,{route:v,tabs:{select:{children:(0,N.jsx)(Z,(0,s.Z)((0,s.Z)({setVisible:D,setEditing:b},e),{},{setRoute:u}))},create:{children:(0,N.jsx)(q,(0,s.Z)({editing:f,setEditing:b,setVisible:D,setRoute:u},e))}}})})}}}]);