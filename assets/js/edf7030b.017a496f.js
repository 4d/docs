"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["24246"],{414607:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>s,metadata:()=>d,assets:()=>l,toc:()=>c,contentTitle:()=>o});var d=JSON.parse('{"id":"commands-legacy/dom-get-xml-information","title":"DOM Get XML information","description":"DOM Get XML information ( elementRef ; xmlInfo ) : Text","source":"@site/versioned_docs/version-20-R7/commands-legacy/dom-get-xml-information.md","sourceDirName":"commands-legacy","slug":"/commands/dom-get-xml-information","permalink":"/docs/20-R7/commands/dom-get-xml-information","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-get-xml-information.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"dom-get-xml-information","title":"DOM Get XML information","slug":"/commands/dom-get-xml-information","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM GET XML ELEMENT VALUE","permalink":"/docs/20-R7/commands/dom-get-xml-element-value"},"next":{"title":"DOM Insert XML element","permalink":"/docs/20-R7/commands/dom-insert-xml-element"}}'),r=t("785893"),i=t("250065");let s={id:"dom-get-xml-information",title:"DOM Get XML information",slug:"/commands/dom-get-xml-information",displayed_sidebar:"docs"},o=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function h(e){let n={a:"a",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"DOM Get XML information"})," ( ",(0,r.jsx)(n.em,{children:"elementRef"})," ; ",(0,r.jsx)(n.em,{children:"xmlInfo"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"elementRef"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"XML root element reference"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"xmlInfo"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Type of information to get"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Function result"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Value of the XML information"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The DOM Get XML information command retrieves diverse information about the XML element designated by ",(0,r.jsx)(n.em,{children:"elementRef"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"xmlInfo"}),", pass a code indicating the type of information to be retrieved. You can use the following predefined constants, located in the ",(0,r.jsx)(n.em,{children:"XML"})," theme:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constant"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Value"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"DOCTYPE Name"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"3"}),(0,r.jsx)(n.td,{children:"Name of the root element as defined in the DOCTYPE marker"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Document URI"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"6"}),(0,r.jsx)(n.td,{children:"URI of the DTD"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Encoding"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"4"}),(0,r.jsx)(n.td,{children:"Encoding used (UTF-8, ISO...)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"PUBLIC ID"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"Public identifier (FPI) of the DTD to which the document conforms (if the DOCTYPE xxx PUBLIC tag is present)."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"SYSTEM ID"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:"System identifier"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Version"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"5"}),(0,r.jsx)(n.td,{children:"Accepted XML version"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/xml-get-error",children:"XML GET ERROR"})}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"721"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return s}});var d=t(667294);let r={},i=d.createContext(r);function s(e){let n=d.useContext(i);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),d.createElement(i.Provider,{value:n},e.children)}}}]);