"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["56521"],{60434:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>c,default:()=>p,assets:()=>d,toc:()=>o,frontMatter:()=>l});var t=JSON.parse('{"id":"ViewPro/commands/vp-get-spans","title":"VP Get spans","description":"VP Get spans ( rangeObj Object","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/ViewPro/commands/vp-get-spans.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-get-spans","permalink":"/docs/fr/ViewPro/commands/vp-get-spans","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-spans.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-get-spans","title":"VP Get spans"},"sidebar":"docs","previous":{"title":"VP Get show print lines","permalink":"/docs/fr/ViewPro/commands/vp-get-show-print-lines"},"next":{"title":"VP Get stylesheets","permalink":"/docs/fr/ViewPro/commands/vp-get-stylesheet"}}'),r=s("785893"),i=s("250065");let l={id:"vp-get-spans",title:"VP Get spans"},c=void 0,d={},o=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP Get spans"})," ( ",(0,r.jsx)(n.em,{children:"rangeObj"})," : Object ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tres"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"rangeObj"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Objet plage"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"R\xe9sultat"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsx)(n.td,{children:"Objet de cellules fusionn\xe9es (cell spans) dans la plage d\xe9finie"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.code,{children:"VP Get spans"})," r\xe9cup\xe8re les cellules fusionn\xe9es (cell spans) dans le ",(0,r.jsx)(n.em,{children:"rangeObj"})," d\xe9sign\xe9."]}),"\n",(0,r.jsxs)(n.p,{children:["Dans ",(0,r.jsx)(n.em,{children:"rangeObj"}),", passez une plage de cellules fusionn\xe9es que vous souhaitez r\xe9cup\xe9rer. Si ",(0,r.jsx)(n.em,{children:"rangeObj"})," ne contient pas de cellules fusionn\xe9es, une plage vide est retourn\xe9e."]}),"\n",(0,r.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:"Pour centrer le texte des cellules fusionn\xe9es dans ce document :"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(680995).Z+"",width:"678",height:"170"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'// Rechercher toutes les cellules fusionn\xe9es \n$range:=VP Get spans(VP All("ViewProArea"))\n \n//centrer le texte\n$style:=New object("vAlign";vk vertical align center;"hAlign";vk horizontal align center)\nVP SET CELL STYLE($range;$style)\n'})}),"\n",(0,r.jsx)(n.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-add-span",children:"VP ADD SPAN"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-remove-span",children:"VP REMOVE SPAN"})]})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},680995:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/cmd_vpGetSpans-60a3f93621cbbd596f1162f143d29894.PNG"},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return l}});var t=s(667294);let r={},i=t.createContext(r);function l(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);