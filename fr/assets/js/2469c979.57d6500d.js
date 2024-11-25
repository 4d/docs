"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["24260"],{659904:function(e,s,n){n.r(s),n.d(s,{metadata:()=>r,contentTitle:()=>l,default:()=>u,assets:()=>d,toc:()=>a,frontMatter:()=>o});var r=JSON.parse('{"id":"commands-legacy/object-get-subform","title":"OBJECT GET SUBFORM","description":"OBJECT GET SUBFORM ( { ;} objet ; ptrTable ; sousFormDetail {; sousFormListe*} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-get-subform.md","sourceDirName":"commands-legacy","slug":"/commands/object-get-subform","permalink":"/docs/fr/commands/object-get-subform","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-subform.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-get-subform","title":"OBJECT GET SUBFORM","slug":"/commands/object-get-subform","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT Get style sheet","permalink":"/docs/fr/commands/object-get-style-sheet"},"next":{"title":"OBJECT GET SUBFORM CONTAINER SIZE","permalink":"/docs/fr/commands/object-get-subform-container-size"}}'),t=n("785893"),i=n("250065");let o={id:"object-get-subform",title:"OBJECT GET SUBFORM",slug:"/commands/object-get-subform",displayed_sidebar:"docs"},l=void 0,d={},a=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function c(e){let s={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"OBJECT GET SUBFORM"})," ( {* ;} ",(0,t.jsx)(s.em,{children:"objet"})," ; ",(0,t.jsx)(s.em,{children:"ptrTable"})," ; ",(0,t.jsx)(s.em,{children:"sousFormDetail"})," {; ",(0,t.jsx)(s.em,{children:"sousFormListe"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Param\xe8tre"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"*"}),(0,t.jsx)(s.td,{children:"Op\xe9rateur"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsxs)(s.td,{children:["Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene)",(0,t.jsx)(s.br,{}),"Si omis, objet est une variable"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"objet"}),(0,t.jsx)(s.td,{children:"any"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsxs)(s.td,{children:["Nom d'objet (si * est sp\xe9cifi\xe9) ou ",(0,t.jsx)(s.br,{}),"Variable (si * est omis)"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ptrTable"}),(0,t.jsx)(s.td,{children:"Table"}),(0,t.jsx)(s.td,{children:"\u2190"}),(0,t.jsx)(s.td,{children:"Pointeur vers la table du formulaire"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"sousFormDetail"}),(0,t.jsx)(s.td,{children:"Text"}),(0,t.jsx)(s.td,{children:"\u2190"}),(0,t.jsx)(s.td,{children:"Nom du formulaire d\xe9tail du sous-formulaire"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"sousFormListe"}),(0,t.jsx)(s.td,{children:"Text"}),(0,t.jsx)(s.td,{children:"\u2190"}),(0,t.jsx)(s.td,{children:"Nom du formulaire liste du sous-formulaire (formulaire table)"})]})]})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,t.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["La commande ",(0,t.jsx)(s.strong,{children:"OBJECT GET SUBFORM"})," vous permet d\u2019obtenir les noms du ou des formulaire(s) associ\xe9(s) \xe0 l\u2019objet sous-formulaire d\xe9sign\xe9 par les param\xe8tres ",(0,t.jsx)(s.em,{children:"objet"})," et ",(0,t.jsx)(s.em,{children:"*"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,t.jsx)(s.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,t.jsx)(s.em,{children:"objet"})," est un nom d\u2019objet (une cha\xeene). Si vous ne passez pas ce param\xe8tre, vous indiquez que le param\xe8tre ",(0,t.jsx)(s.em,{children:"objet"})," est une variable. Dans ce cas, vous ne passez pas une cha\xeene mais une r\xe9f\xe9rence de variable."]}),"\n",(0,t.jsxs)(s.p,{children:["La commande retourne dans le param\xe8tre ",(0,t.jsx)(s.em,{children:"ptrTable"})," un pointeur vers la table du ou des formulaire(s) utilis\xe9(s). Si le sous-formulaire utilise un formulaire projet, le param\xe8tre contient ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/is-nil-pointer",children:"Is nil pointer"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Dans les param\xe8tres ",(0,t.jsx)(s.em,{children:"sousFormDetail"})," et (optionnellement) ",(0,t.jsx)(s.em,{children:"sousFormListe"}),", la commande retourne :"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"le nom du formulaire d\xe9taill\xe9 si le sous-formulaire a \xe9t\xe9 cr\xe9\xe9 dans l'\xe9diteur de formulaires de 4D,"}),"\n",(0,t.jsxs)(s.li,{children:["la valeur de l'attribut \"name\" du sous-formulaire s'il a \xe9t\xe9 cr\xe9\xe9 \xe0 partir d'un fichier .json ou d'un objet 4D.",(0,t.jsx)(s.br,{}),'\nDans les deux cas, si l\'attribut "name" est ind\xe9fini, la commande retourne :\n',(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"pour un fichier .json, le nom du fichier .json (sans extension)"}),"\n",(0,t.jsx)(s.li,{children:'pour un objet, "untitled"'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["S\u2019il n\u2019y a pas de formulaire liste, une cha\xeene vide est retourn\xe9e dans le param\xe8tre ",(0,t.jsx)(s.em,{children:"sousFormListe"}),"."]}),"\n",(0,t.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/fr/commands/object-get-subform-container-size",children:"OBJECT GET SUBFORM CONTAINER SIZE"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/commands/object-set-subform",children:"OBJECT SET SUBFORM"})]})]})}function u(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return l},a:function(){return o}});var r=n(667294);let t={},i=r.createContext(t);function o(e){let s=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);