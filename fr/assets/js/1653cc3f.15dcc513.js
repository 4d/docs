"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["18103"],{645774:function(e,s,n){n.r(s),n.d(s,{metadata:()=>r,contentTitle:()=>l,default:()=>h,assets:()=>o,toc:()=>a,frontMatter:()=>d});var r=JSON.parse('{"id":"commands-legacy/object-set-scrollbar","title":"OBJECT SET SCROLLBAR","description":"OBJECT SET SCROLLBAR ( { ;} objet ; horizontal ; vertical* )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-set-scrollbar.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-scrollbar","permalink":"/docs/fr/commands/object-set-scrollbar","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-scrollbar.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-set-scrollbar","title":"OBJECT SET SCROLLBAR","slug":"/commands/object-set-scrollbar","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET SCROLL POSITION","permalink":"/docs/fr/commands/object-set-scroll-position"},"next":{"title":"OBJECT SET SHORTCUT","permalink":"/docs/fr/commands/object-set-shortcut"}}'),t=n("785893"),i=n("250065");let d={id:"object-set-scrollbar",title:"OBJECT SET SCROLLBAR",slug:"/commands/object-set-scrollbar",displayed_sidebar:"docs"},l=void 0,o={},a=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function c(e){let s={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"OBJECT SET SCROLLBAR"})," ( {* ;} ",(0,t.jsx)(s.em,{children:"objet"})," ; ",(0,t.jsx)(s.em,{children:"horizontal"})," ; ",(0,t.jsx)(s.em,{children:"vertical"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Param\xe8tre"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"*"}),(0,t.jsx)(s.td,{children:"Op\xe9rateur"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Si sp\xe9cifi\xe9, objet est un nom d\u2019objet (cha\xeene) Si omis, objet est une variable"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"objet"}),(0,t.jsx)(s.td,{children:"any"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Nom d\u2019objet (si * est sp\xe9cifi\xe9) ou Variable (si * est omis)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"horizontal"}),(0,t.jsx)(s.td,{children:"Boolean, Integer"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Visibilit\xe9 de la barre horizontale"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"vertical"}),(0,t.jsx)(s.td,{children:"Boolean, Integer"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Visibilit\xe9 de la barre verticale"})]})]})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,t.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["La commande ",(0,t.jsx)(s.strong,{children:"OBJECT SET SCROLLBAR"})," permet d\u2019afficher ou de masquer les barres de d\xe9filement horizontale et/ou verticale dans l\u2019objet d\xe9sign\xe9 par les param\xe8tres ",(0,t.jsx)(s.em,{children:"objet"})," et ",(0,t.jsx)(s.em,{children:"*"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,t.jsx)(s.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,t.jsx)(s.em,{children:"objet"})," est un nom d\u2019objet (une cha\xeene). Si vous ne passez pas ce param\xe8tre, vous indiquez que le param\xe8tre ",(0,t.jsx)(s.em,{children:"objet"})," est une variable. Dans ce cas, vous ne passez pas une cha\xeene mais une r\xe9f\xe9rence de variable. Pour plus d'informations sur les noms d\u2019objets, reportez-vous \xe0 la section Propri\xe9t\xe9s des objets."]}),"\n",(0,t.jsxs)(s.p,{children:["Passez dans les param\xe8tres ",(0,t.jsx)(s.em,{children:"horizontal"})," et ",(0,t.jsx)(s.em,{children:"vertical"})," des valeurs indiquant si les barres de d\xe9filement correspondantes doivent \xeatre affich\xe9es. Vous pouvez passer soit des valeurs bool\xe9ennes (Vrai=affich\xe9e, Faux=masqu\xe9e), soit des valeurs num\xe9riques (0=masqu\xe9e, 1=affich\xe9e, 2=mode automatique). Utiliser des valeurs num\xe9riques permet notamment d'acc\xe9der au mode automatique, dans lequel la barre de d\xe9filement n'appara\xeet que lorsque c'est n\xe9cessaire."]}),"\n",(0,t.jsxs)(s.p,{children:["Le tableau suivant indique les valeurs que vous pouvez passer dans les param\xe8tres ",(0,t.jsx)(s.em,{children:"horizontal"})," et ",(0,t.jsx)(s.em,{children:"vertical"})," pour les objets acceptant des barres de d\xe9filement (le mode automatique n'est pas disponible avec tous les objets) :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"Objets avec barres de d\xe9filement"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"Masquer barre"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"Afficher barre"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"Mode automatique"})})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Champs et variables objet texte"}),(0,t.jsx)(s.td,{children:"Faux ou 0"}),(0,t.jsx)(s.td,{children:"Vrai ou 1"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.em,{children:"non disponible"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Champs et variables objet image"}),(0,t.jsx)(s.td,{children:"Faux ou 0"}),(0,t.jsx)(s.td,{children:"Vrai ou 1"}),(0,t.jsx)(s.td,{children:"2"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"List box"}),(0,t.jsx)(s.td,{children:"Faux ou 0"}),(0,t.jsx)(s.td,{children:"Vrai ou 1"}),(0,t.jsx)(s.td,{children:"2"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Listes hi\xe9rarchiques"}),(0,t.jsx)(s.td,{children:"Faux ou 0"}),(0,t.jsx)(s.td,{children:"Vrai ou 1"}),(0,t.jsx)(s.td,{children:"2"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Sous-formulaires"}),(0,t.jsx)(s.td,{children:"Faux ou 0"}),(0,t.jsx)(s.td,{children:"Vrai ou 1"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.em,{children:"non disponible"})})]})]})]}),"\n",(0,t.jsx)(s.p,{children:"Par d\xe9faut, les barres de d\xe9filement sont affich\xe9es."}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note :"})," Pour plus d'informations sur le mode automatique, reportez-vous \xe0 la section ",(0,t.jsx)(s.em,{children:"Barres de d\xe9filement"}),"."]}),"\n",(0,t.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/fr/commands/listbox-get-property",children:"LISTBOX Get property"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/commands/listbox-set-grid",children:"LISTBOX SET GRID"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/commands/object-get-scrollbar",children:"OBJECT GET SCROLLBAR"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/commands/object-set-visible",children:"OBJECT SET VISIBLE"})]})]})}function h(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return l},a:function(){return d}});var r=n(667294);let t={},i=r.createContext(t);function d(e){let s=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);