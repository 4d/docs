"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["29078"],{568986:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>c,metadata:()=>s,assets:()=>d,toc:()=>a,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/object-set-auto-spellcheck","title":"OBJECT SET AUTO SPELLCHECK","description":"OBJECT SET AUTO SPELLCHECK ( { ;} objet ; correctionAuto* )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/object-set-auto-spellcheck.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-auto-spellcheck","permalink":"/docs/fr/20-R8/commands/object-set-auto-spellcheck","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-auto-spellcheck.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"object-set-auto-spellcheck","title":"OBJECT SET AUTO SPELLCHECK","slug":"/commands/object-set-auto-spellcheck","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET ACTION","permalink":"/docs/fr/20-R8/commands/object-set-action"},"next":{"title":"OBJECT SET BORDER STYLE","permalink":"/docs/fr/20-R8/commands/object-set-border-style"}}'),r=n("785893"),o=n("250065");let c={id:"object-set-auto-spellcheck",title:"OBJECT SET AUTO SPELLCHECK",slug:"/commands/object-set-auto-spellcheck",displayed_sidebar:"docs"},i=void 0,d={},a=[{value:"Description",id:"description",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function l(e){let t={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"OBJECT SET AUTO SPELLCHECK"})," ( {* ;} ",(0,r.jsx)(t.em,{children:"objet"})," ; ",(0,r.jsx)(t.em,{children:"correctionAuto"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Param\xe8tre"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"*"}),(0,r.jsx)(t.td,{children:"Op\xe9rateur"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsxs)(t.td,{children:["Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene)",(0,r.jsx)(t.br,{}),"Si omis, objet est une variable ou un champ"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"objet"}),(0,r.jsx)(t.td,{children:"any"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsxs)(t.td,{children:["Nom d'objet (si * est sp\xe9cifi\xe9) ou ",(0,r.jsx)(t.br,{}),"Variable ou champ (si * est omis)"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"correctionAuto"}),(0,r.jsx)(t.td,{children:"Boolean"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Vrai = correction automatique, Faux = pas de correction automatique"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["La commande ",(0,r.jsx)(t.strong,{children:"OBJECT SET AUTO SPELLCHECK"})," permet de d\xe9finir ou de modifier dynamiquement le statut de l\u2019option ",(0,r.jsx)(t.strong,{children:"Correction orthographique"})," du ou des objet(s) d\xe9sign\xe9(s) par les param\xe8tres ",(0,r.jsx)(t.em,{children:"objet"})," et ",(0,r.jsx)(t.em,{children:"*"})," pour le process courant. Cette option permet d\u2019activer ou non la correction orthographique automatique lors de la saisie pour l\u2019objet (objets de type texte uniquement)."]}),"\n",(0,r.jsxs)(t.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,r.jsx)(t.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,r.jsx)(t.em,{children:"objet"})," est un nom d\u2019objet (une cha\xeene). Si vous ne passez pas ce param\xe8tre, vous indiquez que le param\xe8tre ",(0,r.jsx)(t.em,{children:"objet"})," est une variable ou un champ. Dans ce cas, vous ne passez pas un nom mais une r\xe9f\xe9rence."]}),"\n",(0,r.jsxs)(t.p,{children:["Passez ",(0,r.jsx)(t.strong,{children:"Vrai"})," dans ",(0,r.jsx)(t.em,{children:"correctionAuto"})," pour activer la correction automatique pour ",(0,r.jsx)(t.em,{children:"objet"}),", et ",(0,r.jsx)(t.strong,{children:"Faux"})," pour la d\xe9sactiver."]}),"\n",(0,r.jsx)(t.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/fr/20-R8/commands/object-get-auto-spellcheck",children:"OBJECT Get auto spellcheck"})}),"\n",(0,r.jsx)(t.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(t.td,{children:"1173"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Thread safe"}),(0,r.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return c}});var s=n(667294);let r={},o=s.createContext(r);function c(e){let t=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);