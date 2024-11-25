"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["82599"],{958019:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>c,default:()=>h,assets:()=>o,toc:()=>l,frontMatter:()=>d});var t=JSON.parse('{"id":"commands-legacy/object-get-shortcut","title":"OBJECT GET SHORTCUT","description":"OBJECT GET SHORTCUT ( { ;} objet ; touche ; modifiers* )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-get-shortcut.md","sourceDirName":"commands-legacy","slug":"/commands/object-get-shortcut","permalink":"/docs/fr/commands/object-get-shortcut","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-shortcut.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-get-shortcut","title":"OBJECT GET SHORTCUT","slug":"/commands/object-get-shortcut","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT GET SCROLLBAR","permalink":"/docs/fr/commands/object-get-scrollbar"},"next":{"title":"OBJECT Get style sheet","permalink":"/docs/fr/commands/object-get-style-sheet"}}'),r=s("785893"),i=s("250065");let d={id:"object-get-shortcut",title:"OBJECT GET SHORTCUT",slug:"/commands/object-get-shortcut",displayed_sidebar:"docs"},c=void 0,o={},l=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function a(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"OBJECT GET SHORTCUT"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"objet"})," ; ",(0,r.jsx)(n.em,{children:"touche"})," ; ",(0,r.jsx)(n.em,{children:"modifiers"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Op\xe9rateur"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsxs)(n.td,{children:["Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene)",(0,r.jsx)(n.br,{}),"Si omis, objet est une variable"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objet"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsxs)(n.td,{children:["Nom d\u2019objet (si * est sp\xe9cifi\xe9) ou ",(0,r.jsx)(n.br,{}),"Variable (si * est omis)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"touche"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Touche associ\xe9e \xe0 l\u2019objet"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"modifiers"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Masque ou combinaison de masques de touche(s) de modification"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"OBJECT GET SHORTCUT"})," retourne l\u2019\xe9quivalent clavier associ\xe9 \xe0 l\u2019objet ou aux objets d\xe9sign\xe9(s) par les param\xe8tres ",(0,r.jsx)(n.em,{children:"objet"})," et ",(0,r.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,r.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,r.jsx)(n.em,{children:"objet"})," est un nom d\u2019objet (une cha\xeene). Si vous ne passez pas ce param\xe8tre, vous indiquez que le param\xe8tre ",(0,r.jsx)(n.em,{children:"objet"})," est une variable. Dans ce cas, vous ne passez pas une cha\xeene mais une r\xe9f\xe9rence de variable."]}),"\n",(0,r.jsxs)(n.p,{children:["Le param\xe8tre ",(0,r.jsx)(n.em,{children:"touche"})," retourne le caract\xe8re associ\xe9 \xe0 la touche (dans le cas d\u2019une touche standard) ou une cha\xeene entre crochets d\xe9signant la touche (dans le cas d\u2019une touche de fonction). Vous pouvez comparer cette valeur aux constantes du th\xe8me ",(0,r.jsx)(n.em,{children:"Touches \xe9quivalents clavier"})," (cf. commande ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/object-set-shortcut",children:"OBJECT SET SHORTCUT"}),")."]}),"\n",(0,r.jsxs)(n.p,{children:["Le param\xe8tre ",(0,r.jsx)(n.em,{children:"modifiers"})," retourne une valeur indiquant la ou les touche(s) de modification associ\xe9e(s) \xe0 l\u2019\xe9quivalent clavier. Si plusieurs touches de modification ont \xe9t\xe9 combin\xe9es, la commande retourne le cumul de leurs valeurs. Vous pouvez comparer la valeur re\xe7ue aux constantes suivantes du th\xe8me ",(0,r.jsx)(n.em,{children:"Ev\xe9nements (Modifiers)"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Valeur"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command key mask"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"256"}),(0,r.jsx)(n.td,{children:"Touche Ctrl sous Windows, touche Commande sous OS X"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Control key mask"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"4096"}),(0,r.jsx)(n.td,{children:"Touche Ctrl sous OS X, ou clic droit sous Windows et OS X"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Option key mask"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"2048"}),(0,r.jsx)(n.td,{children:"Touche Alt (aussi appel\xe9e Option sous OS X)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Shift key mask"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"512"}),(0,r.jsx)(n.td,{children:"Windows et OS X"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Si aucune touche de modification n\u2019a \xe9t\xe9 d\xe9finie dans l\u2019\xe9quivalent clavier, ",(0,r.jsx)(n.em,{children:"modifiers"})," retourne 0."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Si le param\xe8tre ",(0,r.jsx)(n.em,{children:"objet"}),' d\xe9signe plusieurs objets du formulaire ayant des param\xe9trages diff\xe9rents, la commande retourne "" dans ',(0,r.jsx)(n.em,{children:"touche"})," et 0 dans ",(0,r.jsx)(n.em,{children:"modifiers"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/fr/commands/object-set-shortcut",children:"OBJECT SET SHORTCUT"})})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return d}});var t=s(667294);let r={},i=t.createContext(r);function d(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);