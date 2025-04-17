"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["43571"],{714927:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>c,metadata:()=>t,assets:()=>l,toc:()=>d,contentTitle:()=>o});var t=JSON.parse('{"id":"commands-legacy/object-set-focus-rectangle-invisible","title":"OBJECT SET FOCUS RECTANGLE INVISIBLE","description":"OBJECT SET FOCUS RECTANGLE INVISIBLE ( { ;} objet ; invisible* )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/object-set-focus-rectangle-invisible.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-focus-rectangle-invisible","permalink":"/docs/fr/commands/object-set-focus-rectangle-invisible","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-focus-rectangle-invisible.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"object-set-focus-rectangle-invisible","title":"OBJECT SET FOCUS RECTANGLE INVISIBLE","slug":"/commands/object-set-focus-rectangle-invisible","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET FILTER","permalink":"/docs/fr/commands/object-set-filter"},"next":{"title":"OBJECT SET FONT","permalink":"/docs/fr/commands/object-set-font"}}'),i=s("785893"),r=s("250065");let c={id:"object-set-focus-rectangle-invisible",title:"OBJECT SET FOCUS RECTANGLE INVISIBLE",slug:"/commands/object-set-focus-rectangle-invisible",displayed_sidebar:"docs"},o=void 0,l={},d=[{value:"Description",id:"description",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"OBJECT SET FOCUS RECTANGLE INVISIBLE"})," ( {* ;} ",(0,i.jsx)(n.em,{children:"objet"})," ; ",(0,i.jsx)(n.em,{children:"invisible"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param\xe8tre"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Op\xe9rateur"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsxs)(n.td,{children:["Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene)",(0,i.jsx)(n.br,{}),"Si omis, objet est une variable ou un champ"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"objet"}),(0,i.jsx)(n.td,{children:"any"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Nom d'objet (si * est sp\xe9cifi\xe9) ou Variable (si * est omis)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"invisible"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Vrai = rectangle focus cach\xe9, Faux = rectangle focus visible"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La commande ",(0,i.jsx)(n.strong,{children:"OBJECT SET FOCUS RECTANGLE INVISIBLE"})," permet de d\xe9finir ou de modifier dynamiquement l\u2019option d\u2019invisibilit\xe9 du rectangle de focus de l\u2019objet ou des objets d\xe9sign\xe9(s) par les param\xe8tres ",(0,i.jsx)(n.em,{children:"objet"})," et ",(0,i.jsx)(n.em,{children:"*"})," pour le process courant. Ce param\xe9trage correspond \xe0 l\u2019option ",(0,i.jsx)(n.strong,{children:"Cacher rectangle de focus"})," disponible pour les objets saisissables dans la Liste des propri\xe9t\xe9s en mode D\xe9veloppement."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note :"})," Cette option est utilisable sous Mac OS uniquement. Elle n\u2019a pas d\u2019effet sous Windows."]}),"\n",(0,i.jsxs)(n.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,i.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,i.jsx)(n.em,{children:"objet"})," est un nom d\u2019objet (une cha\xeene). Si vous ne passez pas ce param\xe8tre, vous indiquez que le param\xe8tre ",(0,i.jsx)(n.em,{children:"objet"})," est une variable ou un champ. Dans ce cas, vous ne passez pas une cha\xeene mais une r\xe9f\xe9rence de variable."]}),"\n",(0,i.jsxs)(n.p,{children:["Passez ",(0,i.jsx)(n.strong,{children:"Vrai"})," dans le param\xe8tre ",(0,i.jsx)(n.em,{children:"invisible"})," pour cacher le rectangle de focus et ",(0,i.jsx)(n.strong,{children:"Faux"})," pour le laisser visible."]}),"\n",(0,i.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/fr/commands/object-get-focus-rectangle-invisible",children:"OBJECT Get focus rectangle invisible"})}),"\n",(0,i.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,i.jsx)(n.td,{children:"1177"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return c}});var t=s(667294);let i={},r=t.createContext(i);function c(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);