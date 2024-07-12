/*! For license information please see cbaeb4a7.9d432d25.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[48880],{999974:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var s=o(474848),t=o(28453);const i={id:"onDisplayDetail",title:"On Display Detail"},r=void 0,l={id:"Events/onDisplayDetail",title:"On Display Detail",description:"| Code | Pode ser chamado por                                     | Defini\xe7\xe3o                                                                                         |",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/Events/onDisplayDetail.md",sourceDirName:"Events",slug:"/Events/onDisplayDetail",permalink:"/docs/pt/19/Events/onDisplayDetail",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonDisplayDetail.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"onDisplayDetail",title:"On Display Detail"},sidebar:"docs",previous:{title:"On Delete Action",permalink:"/docs/pt/19/Events/onDeleteAction"},next:{title:"On Double Clicked",permalink:"/docs/pt/19/Events/onDoubleClicked"}},d={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Formul\xe1rio de sa\xedda",id:"formul\xe1rio-de-sa\xedda",level:3},{value:"List box sele\xe7\xe3o",id:"list-box-sele\xe7\xe3o",level:3},{value:"N\xfamero de linha apresentado",id:"n\xfamero-de-linha-apresentado",level:3}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Code"}),(0,s.jsx)(n.th,{children:"Pode ser chamado por"}),(0,s.jsx)(n.th,{children:"Defini\xe7\xe3o"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"8"}),(0,s.jsxs)(n.td,{children:["Formul\xe1rio - ",(0,s.jsx)(n.a,{href:"/docs/pt/19/FormObjects/listboxOverview",children:"List Box"})]}),(0,s.jsx)(n.td,{children:"A record is about to be displayed in a list form or a row is about to be displayed in a list box."})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"On Display Detail"})," event can be used in the following contexts:"]}),"\n",(0,s.jsx)(n.h3,{id:"formul\xe1rio-de-sa\xedda",children:"Formul\xe1rio de sa\xedda"}),"\n",(0,s.jsxs)(n.p,{children:["A record is about to be displayed in a list form displayed via ",(0,s.jsx)(n.code,{children:"DISPLAY SELECTION"})," and ",(0,s.jsx)(n.code,{children:"MODIFY SELECTION"}),"."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["This event cannot be selected for project forms, it is only available with ",(0,s.jsx)(n.strong,{children:"table forms"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"In this context, the following sequence of calls to methods and form events is triggered:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Para cada registo:\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Para cada objecto na \xe1rea de detalhes:\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["M\xe9todo objecto com o evento",(0,s.jsx)(n.code,{children:"On Display Detail"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["M\xe9todo formul\xe1rio com o evento",(0,s.jsx)(n.code,{children:"On Display Detail"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["A \xe1rea do cabe\xe7alho \xe9 tratada usando o evento ",(0,s.jsx)(n.a,{href:"/docs/pt/19/Events/onHeader",children:(0,s.jsx)(n.code,{children:"On Header"})}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Calling a 4D command that displays a dialog box from the ",(0,s.jsx)(n.code,{children:"On Display Detail"})," event is not allowed and will cause a syntax error to occur. More particularly, the commands concerned are: ",(0,s.jsx)(n.code,{children:"ALERT"}),", ",(0,s.jsx)(n.code,{children:"DIALOG"}),", ",(0,s.jsx)(n.code,{children:"CONFIRM"}),", ",(0,s.jsx)(n.code,{children:"Request"}),", ",(0,s.jsx)(n.code,{children:"ADD RECORD"}),", ",(0,s.jsx)(n.code,{children:"MODIFY RECORD"}),", ",(0,s.jsx)(n.code,{children:"DISPLAY SELECTION"}),", and ",(0,s.jsx)(n.code,{children:"MODIFY SELECTION"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"list-box-sele\xe7\xe3o",children:"List box sele\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["This event is generated when a row of a ",(0,s.jsx)(n.a,{href:"/docs/pt/19/FormObjects/listboxOverview#selection-list-boxes",children:(0,s.jsx)(n.strong,{children:"selection type"})})," list box is displayed."]}),"\n",(0,s.jsx)(n.h3,{id:"n\xfamero-de-linha-apresentado",children:"N\xfamero de linha apresentado"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"Displayed line number"})," 4D command works with the ",(0,s.jsx)(n.code,{children:"On Display Detail"})," form event. It returns the number of the row being processed while a list of records or list box rows is displayed on screen."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},221020:(e,n,o)=>{var s=o(296540),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,o){var s,i={},a=null,c=null;for(s in void 0!==o&&(a=""+o),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(c=n.ref),n)r.call(n,s)&&!d.hasOwnProperty(s)&&(i[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===i[s]&&(i[s]=n[s]);return{$$typeof:t,type:e,key:a,ref:c,props:i,_owner:l.current}}n.Fragment=i,n.jsx=a,n.jsxs=a},474848:(e,n,o)=>{e.exports=o(221020)},28453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>l});var s=o(296540);const t={},i=s.createContext(t);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);