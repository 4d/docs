"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["95244"],{569180:function(e,r,n){n.r(r),n.d(r,{default:()=>u,frontMatter:()=>d,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/wa-get-last-url-error","title":"WA GET LAST URL ERROR","description":"WA GET LAST URL ERROR ( { ;} objet ; url ; description ; codeErreur* )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/wa-get-last-url-error.md","sourceDirName":"commands-legacy","slug":"/commands/wa-get-last-url-error","permalink":"/docs/fr/20-R8/commands/wa-get-last-url-error","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fwa-get-last-url-error.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wa-get-last-url-error","title":"WA GET LAST URL ERROR","slug":"/commands/wa-get-last-url-error","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WA Get last filtered URL","permalink":"/docs/fr/20-R8/commands/wa-get-last-filtered-url"},"next":{"title":"WA Get page content","permalink":"/docs/fr/20-R8/commands/wa-get-page-content"}}'),t=n("785893"),i=n("250065");let d={id:"wa-get-last-url-error",title:"WA GET LAST URL ERROR",slug:"/commands/wa-get-last-url-error",displayed_sidebar:"docs"},l=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let r={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"WA GET LAST URL ERROR"})," ( {* ;} ",(0,t.jsx)(r.em,{children:"objet"})," ; ",(0,t.jsx)(r.em,{children:"url"})," ; ",(0,t.jsx)(r.em,{children:"description"})," ; ",(0,t.jsx)(r.em,{children:"codeErreur"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Param\xe8tre"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"*"}),(0,t.jsx)(r.td,{children:"Op\xe9rateur"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene) Si omis, objet est une variable"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"objet"}),(0,t.jsx)(r.td,{children:"any"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"Nom d'objet (si * est sp\xe9cifi\xe9) ou Variable (si * est omis)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"url"}),(0,t.jsx)(r.td,{children:"Text"}),(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:"URL \xe0 l\u2019origine de l\u2019erreur"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"description"}),(0,t.jsx)(r.td,{children:"Text"}),(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:"Description de l\u2019erreur (macOS)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"codeErreur"}),(0,t.jsx)(r.td,{children:"Integer"}),(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:"Code d'erreur"})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(r.p,{children:["La commande ",(0,t.jsx)(r.strong,{children:"WA GET LAST URL ERROR"})," vous permet de r\xe9cup\xe9rer plusieurs informations relatives \xe0 la derni\xe8re erreur ayant eu lieu dans la zone Web d\xe9sign\xe9e par les param\xe8tres ",(0,t.jsx)(r.em,{children:"*"})," et ",(0,t.jsx)(r.em,{children:"objet"}),".",(0,t.jsx)(r.br,{}),"\nCes informations sont retourn\xe9es dans trois variables :"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.em,{children:"url"})," : l\u2019URL ayant provoqu\xe9 l\u2019erreur."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.em,{children:"description"})," (Mac OS uniquement) : un texte d\xe9crivant l\u2019erreur (si disponible). S\u2019il n\u2019est pas possible d\u2019associer un texte \xe0 l\u2019erreur, une cha\xeene vide est retourn\xe9e. Sous Windows, ce param\xe8tre est toujours retourn\xe9 vide."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.em,{children:"codeErreur"})," : code de l\u2019erreur.\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Si le code est >=400, il s\u2019agit d\u2019une erreur li\xe9e au protocole HTTP. Pour plus d\u2019informations sur ce type d\u2019erreur, reportez-vous \xe0 l\u2019adresse ",(0,t.jsx)(r.em,{children:(0,t.jsx)(r.a,{href:"http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html",children:"http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html"})})]}),"\n",(0,t.jsx)(r.li,{children:"Sinon, il s\u2019agit d\u2019une erreur retourn\xe9e par le WebKit (macOS) ou ActiveX (Windows)."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["Il est judicieux d\u2019appeler cette commande dans le cadre de l\u2019\xe9v\xe9nement formulaire On URL Loading Error afin de conna\xeetre la cause de l\u2019erreur qui vient de se produire. Pour plus d\u2019informations, reportez-vous \xe0 la description de la commande ",(0,t.jsx)(r.a,{href:"/docs/fr/20-R8/commands/form-event-code",children:"Form event code"}),"."]}),"\n",(0,t.jsx)(r.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"/docs/fr/20-R8/commands/form-event-code",children:"Form event code"})}),"\n",(0,t.jsx)(r.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(r.td,{children:"1034"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Thread safe"}),(0,t.jsx)(r.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return l},a:function(){return d}});var s=n(667294);let t={},i=s.createContext(t);function d(e){let r=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);