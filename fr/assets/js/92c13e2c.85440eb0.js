"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["55094"],{738237:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>r,assets:()=>a,toc:()=>c,contentTitle:()=>l});var r=JSON.parse('{"id":"commands-legacy/get-macro-parameter","title":"GET MACRO PARAMETER","description":"GET MACRO PARAMETER ( s\xe9lecteur ; paramTexte )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/get-macro-parameter.md","sourceDirName":"commands-legacy","slug":"/commands/get-macro-parameter","permalink":"/docs/fr/commands/get-macro-parameter","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-macro-parameter.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-macro-parameter","title":"GET MACRO PARAMETER","slug":"/commands/get-macro-parameter","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Generate UUID","permalink":"/docs/fr/commands/generate-uuid"},"next":{"title":"LAUNCH EXTERNAL PROCESS","permalink":"/docs/fr/commands/launch-external-process"}}'),s=t("785893"),d=t("250065");let i={id:"get-macro-parameter",title:"GET MACRO PARAMETER",slug:"/commands/get-macro-parameter",displayed_sidebar:"docs"},l=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function o(e){let n={a:"a",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"GET MACRO PARAMETER"})," ( ",(0,s.jsx)(n.em,{children:"s\xe9lecteur"})," ; ",(0,s.jsx)(n.em,{children:"paramTexte"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"s\xe9lecteur"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"S\xe9lection \xe0 utiliser"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"paramText"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Texte r\xe9cup\xe9r\xe9"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"GET MACRO PARAMETER"})," retourne dans ",(0,s.jsx)(n.em,{children:"paramTexte"})," une partie ou la totalit\xe9 du texte de la m\xe9thode depuis laquelle elle a \xe9t\xe9 appel\xe9e."]}),"\n",(0,s.jsxs)(n.p,{children:["Le param\xe8tre ",(0,s.jsx)(n.em,{children:"s\xe9lecteur"})," permet de d\xe9finir le type d\u2019information \xe0 r\xe9cup\xe9rer. Vous pouvez passer l\u2019une des constantes suivantes, plac\xe9es dans le th\xe8me \u201C",(0,s.jsx)(n.em,{children:"Environnement 4D"}),"\u201D :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Valeur"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Full method text"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"1"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Highlighted method text"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"2"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Si vous passez Full method text dans ",(0,s.jsx)(n.em,{children:"s\xe9lecteur"}),", la totalit\xe9 du texte de la m\xe9thode sera retourn\xe9 dans ",(0,s.jsx)(n.em,{children:"paramTexte"}),". Si vous passez Highlighted method text dans ",(0,s.jsx)(n.em,{children:"s\xe9lecteur"}),", seul le texte s\xe9lectionn\xe9 dans la m\xe9thode sera retourn\xe9 dans ",(0,s.jsx)(n.em,{children:"paramTexte"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsxs)(n.p,{children:["Reportez-vous \xe0 l'exemple de ",(0,s.jsx)(n.a,{href:"/docs/fr/commands/set-macro-parameter",children:"SET MACRO PARAMETER"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/fr/commands/set-macro-parameter",children:"SET MACRO PARAMETER"})}),"\n",(0,s.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(n.td,{children:"997"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var r=t(667294);let s={},d=r.createContext(s);function i(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);