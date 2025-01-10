"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["50382"],{931816:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>t,assets:()=>a,toc:()=>c,contentTitle:()=>o});var t=JSON.parse('{"id":"ViewPro/commands/vp-remove-span","title":"VP REMOVE SPAN","description":"VP REMOVE SPAN ( rangeObj : Object )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-remove-span.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-remove-span","permalink":"/docs/es/20-R6/ViewPro/commands/vp-remove-span","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-remove-span.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"vp-remove-span","title":"VP REMOVE SPAN"},"sidebar":"docs","previous":{"title":"VP REMOVE SHEET","permalink":"/docs/es/20-R6/ViewPro/commands/vp-remove-sheet"},"next":{"title":"VP REMOVE STYLESHEET","permalink":"/docs/es/20-R6/ViewPro/commands/vp-remove-stylesheet"}}'),r=s("785893"),i=s("250065");let d={id:"vp-remove-span",title:"VP REMOVE SPAN"},o=void 0,a={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP REMOVE SPAN"})," ( ",(0,r.jsx)(n.em,{children:"rangeObj"})," : Object )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metros"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"rangeObj"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Objeto rango"}),(0,r.jsx)(n.td,{})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.code,{children:"VP REMOVE SPAN"})," remueve el span de las celdas en ",(0,r.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["En ",(0,r.jsx)(n.em,{children:"rangeObj"}),", pase un objeto rango de la fusi\xf3n. Las celdas fusionadas en el rango se dividen en celdas individuales."]}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(n.p,{children:"Para eliminar todas las fusiones de celdas de este documento:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(447542).Z+"",width:"683",height:"162"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' //identifica todas las celdas fusionadas\n $span:=VP Get spans(VP All("ViewProArea"))\n\n //eliminar las fusiones\n VP REMOVE SPAN($span)\n'})}),"\n",(0,r.jsx)(n.p,{children:"Resultado:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(328274).Z+"",width:"670",height:"162"})}),"\n",(0,r.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/commands/vp-add-span",children:"VP ADD SPAN"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/commands/vp-get-spans",children:"VP Get spans"})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},447542:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/cmd_vpRemoveSpan1-fee2730f9c75949086185290f1a0b64a.PNG"},328274:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/cmd_vpRemoveSpan2-c69b0babe3e0461982532ff0403a0839.PNG"},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return d}});var t=s(667294);let r={},i=t.createContext(r);function d(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);