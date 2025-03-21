"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["10405"],{211246:function(e,s,t){t.r(s),t.d(s,{default:()=>h,frontMatter:()=>o,metadata:()=>n,assets:()=>a,toc:()=>d,contentTitle:()=>i});var n=JSON.parse('{"id":"commands-legacy/object-set-three-states-checkbox","title":"OBJECT SET THREE STATES CHECKBOX","description":"OBJECT SET THREE STATES CHECKBOX ( { ;} objet ; troisEtats* )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/object-set-three-states-checkbox.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-three-states-checkbox","permalink":"/docs/fr/commands/object-set-three-states-checkbox","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-three-states-checkbox.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"object-set-three-states-checkbox","title":"OBJECT SET THREE STATES CHECKBOX","slug":"/commands/object-set-three-states-checkbox","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET TEXT ORIENTATION","permalink":"/docs/fr/commands/object-set-text-orientation"},"next":{"title":"OBJECT SET TITLE","permalink":"/docs/fr/commands/object-set-title"}}'),r=t("785893"),c=t("250065");let o={id:"object-set-three-states-checkbox",title:"OBJECT SET THREE STATES CHECKBOX",slug:"/commands/object-set-three-states-checkbox",displayed_sidebar:"docs"},i=void 0,a={},d=[{value:"Description",id:"description",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function l(e){let s={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"OBJECT SET THREE STATES CHECKBOX"})," ( {* ;} ",(0,r.jsx)(s.em,{children:"objet"})," ; ",(0,r.jsx)(s.em,{children:"troisEtats"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Param\xe8tre"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"*"}),(0,r.jsx)(s.td,{children:"Op\xe9rateur"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsxs)(s.td,{children:["Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene)",(0,r.jsx)(s.br,{}),"Si omis, objet est un champ ou une variable"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"objet"}),(0,r.jsx)(s.td,{children:"any"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsxs)(s.td,{children:["Nom d'objet (si * est sp\xe9cifi\xe9) ou ",(0,r.jsx)(s.br,{}),"Champ ou variable (si * est omis)"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"troisEtats"}),(0,r.jsx)(s.td,{children:"Boolean"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Vrai = case \xe0 cocher \xe0 trois \xe9tats, Faux = case \xe0 cocher standard"})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["La commande ",(0,r.jsx)(s.strong,{children:"OBJECT SET THREE STATES CHECKBOX"}),' vous permet de modifier, pour le process courant, la propri\xe9t\xe9 "Trois \xe9tats" de la ou des case(s) \xe0 cocher d\xe9sign\xe9e(s) par les param\xe8tres ',(0,r.jsx)(s.em,{children:"objet"})," et ",(0,r.jsx)(s.em,{children:"*"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:['L\u2019option "Trois \xe9tats" permet d\u2019utiliser l\u2019\xe9tat suppl\xe9mentaire "semi-coch\xe9" pour les cases \xe0 cocher. Pour plus d\u2019informations, reportez-vous au paragraphe ',(0,r.jsx)(s.em,{children:"Cases \xe0 cocher \xe0 trois \xe9tats"})," dans le manuel ",(0,r.jsx)(s.em,{children:"Mode D\xe9veloppement"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,r.jsx)(s.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,r.jsx)(s.em,{children:"objet"})," est un nom d\u2019objet (une cha\xeene). Si vous ne passez pas le param\xe8tre, vous indiquez que le param\xe8tre ",(0,r.jsx)(s.em,{children:"objet"})," est un champ ou une variable. Dans ce cas, vous ne passez pas une cha\xeene mais une r\xe9f\xe9rence de champ ou de variable (champ ou variable objet uniquement)."]}),"\n",(0,r.jsx)(s.p,{children:"Cette commande s\u2019applique uniquement aux case \xe0 cocher associ\xe9es \xe0 des variables, et non aux champs bool\xe9ens repr\xe9sent\xe9s sous forme de cases \xe0 cocher."}),"\n",(0,r.jsxs)(s.p,{children:["Passez ",(0,r.jsx)(s.strong,{children:"Vrai"})," dans le param\xe8tre ",(0,r.jsx)(s.em,{children:"troisEtat"}),' pour activer le mode "trois \xe9tats", ou ',(0,r.jsx)(s.strong,{children:"Faux"})," pour le d\xe9sactiver."]}),"\n",(0,r.jsx)(s.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/fr/commands/object-get-three-states-checkbox",children:"OBJECT Get three states checkbox"})}),"\n",(0,r.jsx)(s.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(s.td,{children:"1249"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Thread safe"}),(0,r.jsx)(s.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:s}={...(0,c.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,s,t){t.d(s,{Z:function(){return i},a:function(){return o}});var n=t(667294);let r={},c=n.createContext(r);function o(e){let s=n.useContext(c);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(c.Provider,{value:s},e.children)}}}]);