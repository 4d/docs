"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["66153"],{38447:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>s,metadata:()=>i,assets:()=>a,toc:()=>l,contentTitle:()=>o});var i=JSON.parse('{"id":"Events/onWindowOpeningDenied","title":"On Window Opening Denied","description":"|Code|Can be called by|Definition|","source":"@site/versioned_docs/version-20-R9/Events/onWindowOpeningDenied.md","sourceDirName":"Events","slug":"/Events/onWindowOpeningDenied","permalink":"/docs/Events/onWindowOpeningDenied","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonWindowOpeningDenied.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"onWindowOpeningDenied","title":"On Window Opening Denied"},"sidebar":"docs","previous":{"title":"On VP Ready","permalink":"/docs/Events/onVpReady"},"next":{"title":"Menus","permalink":"/docs/Menus/overview"}}'),d=t("785893"),r=t("250065");let s={id:"onWindowOpeningDenied",title:"On Window Opening Denied"},o=void 0,a={},l=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:3}];function c(e){let n={a:"a",code:"code",details:"details",h2:"h2",h3:"h3",p:"p",pre:"pre",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Code"}),(0,d.jsx)(n.th,{children:"Can be called by"}),(0,d.jsx)(n.th,{children:"Definition"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"53"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"/docs/FormObjects/webAreaOverview",children:"Web Area"})}),(0,d.jsx)(n.td,{children:"A pop-up window has been blocked"})]})})]}),"\n",(0,d.jsxs)(n.details,{children:[(0,d.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Release"}),(0,d.jsx)(n.th,{children:"Changes"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"19 R5"}),(0,d.jsx)(n.td,{children:"Triggered on drop"})]})})]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,d.jsx)(n.p,{children:"This event is generated when the opening of a pop-up window is blocked by the Web area. 4D Web areas do not allow the opening of pop-up windows."}),"\n",(0,d.jsxs)(n.p,{children:["You can find out the blocked URL using the ",(0,d.jsx)(n.code,{children:"WA Get last filtered URL"})," command."]}),"\n",(0,d.jsxs)(n.p,{children:["This event is also triggered when a drop operation has been done in the Web area (with embedded and Wwindows system ",(0,d.jsx)(n.a,{href:"/docs/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"engines"}),") if the ",(0,d.jsx)(n.a,{href:"/docs/FormObjects/webAreaOverview#user-interface",children:"Drag and drop"})," option is also enabled for the area. You can accept the drop by calling:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'//web area object method\nIf (FORM Event.code=On Window Opening Denied)\n	WA OPEN URL(*; "WebArea"; WA Get last filtered URL(*; "WebArea"))  \n	// or UrlVariable:=WA Get last filtered URL(*; "WebArea")  \n	// where UrlVariable is the URL variable associated to the web area\nEnd if \n'})}),"\n",(0,d.jsx)(n.h3,{id:"see-also",children:"See also"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/Events/onOpenExternalLink",children:(0,d.jsx)(n.code,{children:"On Open External Link"})})})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return s}});var i=t(667294);let d={},r=i.createContext(d);function s(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);