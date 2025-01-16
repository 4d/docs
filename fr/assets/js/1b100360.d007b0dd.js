"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["16457"],{365507:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>t,assets:()=>l,toc:()=>d,contentTitle:()=>c});var t=JSON.parse('{"id":"ViewPro/commands/vp-remove-span","title":"VP REMOVE SPAN","description":"VP REMOVE SPAN ( rangeObj : Object )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/ViewPro/commands/vp-remove-span.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-remove-span","permalink":"/docs/fr/20-R7/ViewPro/commands/vp-remove-span","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-remove-span.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-remove-span","title":"VP REMOVE SPAN"},"sidebar":"docs","previous":{"title":"VP REMOVE SHEET","permalink":"/docs/fr/20-R7/ViewPro/commands/vp-remove-sheet"},"next":{"title":"VP REMOVE STYLESHEET","permalink":"/docs/fr/20-R7/ViewPro/commands/vp-remove-stylesheet"}}'),r=s("785893"),i=s("250065");let o={id:"vp-remove-span",title:"VP REMOVE SPAN"},c=void 0,l={},d=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP REMOVE SPAN"})," ( ",(0,r.jsx)(n.em,{children:"rangeObj"})," : Object )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tres"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"rangeObj"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Objet plage"}),(0,r.jsx)(n.td,{})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"VP REMOVE SPAN"})," command removes the span from the cells in ",(0,r.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"rangeObj"}),", pass a range object of the cell span. Les cellules fusionn\xe9es de la plage sont divis\xe9es en cellules individuelles."]}),"\n",(0,r.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:"Pour retirer toutes les fusions de cellules de ce document :"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(422655).Z+"",width:"683",height:"162"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' //find all cell spans\n $span:=VP Get spans(VP All("ViewProArea"))\n\n \n  //remove the cell spans\n VP REMOVE SPAN($span)\n'})}),"\n",(0,r.jsx)(n.p,{children:"R\xe9sultat:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(435335).Z+"",width:"670",height:"162"})}),"\n",(0,r.jsx)(n.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/ViewPro/commands/vp-add-span",children:"VP ADD SPAN"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/ViewPro/commands/vp-get-spans",children:"VP Get spans"})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},422655:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/cmd_vpRemoveSpan1-fee2730f9c75949086185290f1a0b64a.PNG"},435335:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/cmd_vpRemoveSpan2-c69b0babe3e0461982532ff0403a0839.PNG"},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return o}});var t=s(667294);let r={},i=t.createContext(r);function o(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);