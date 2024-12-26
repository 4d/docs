"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["97876"],{353691:function(e,s,n){n.r(s),n.d(s,{metadata:()=>t,contentTitle:()=>o,default:()=>u,assets:()=>d,toc:()=>a,frontMatter:()=>l});var t=JSON.parse('{"id":"commands-legacy/listbox-set-table-source","title":"LISTBOX SET TABLE SOURCE","description":"LISTBOX SET TABLE SOURCE ( { ;} objet ; numTable | tempo {; nomSurlignage*} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-set-table-source.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-set-table-source","permalink":"/docs/fr/commands/listbox-set-table-source","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-set-table-source.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-set-table-source","title":"LISTBOX SET TABLE SOURCE","slug":"/commands/listbox-set-table-source","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX SET STATIC COLUMNS","permalink":"/docs/fr/commands/listbox-set-static-columns"},"next":{"title":"LISTBOX SORT COLUMNS","permalink":"/docs/fr/commands/listbox-sort-columns"}}'),r=n("785893"),i=n("250065");let l={id:"listbox-set-table-source",title:"LISTBOX SET TABLE SOURCE",slug:"/commands/listbox-set-table-source",displayed_sidebar:"docs"},o=void 0,d={},a=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let s={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"LISTBOX SET TABLE SOURCE"})," ( {* ;} ",(0,r.jsx)(s.em,{children:"objet"})," ; numTable | tempo {; ",(0,r.jsx)(s.em,{children:"nomSurlignage"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Param\xe8tre"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"*"}),(0,r.jsx)(s.td,{children:"Op\xe9rateur"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Si sp\xe9cifi\xe9, objet est un nom d\u2019objet (cha\xeene) Si omis, objet est une variable"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"objet"}),(0,r.jsx)(s.td,{children:"any"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Nom d\u2019objet (si * est sp\xe9cifi\xe9) ou Variable (si * est omis)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"numTable | tempo"}),(0,r.jsx)(s.td,{children:"Entier long, Cha\xeene"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Num\xe9ro de la table de laquelle utiliser la s\xe9lection courante ou Nom de la s\xe9lection temporaire \xe0 utiliser"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"nomSurlignage"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Nom de l\u2019ensemble de surlignage"})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["La commande ",(0,r.jsx)(s.strong,{children:"LISTBOX SET TABLE SOURCE"})," vous permet de modifier la source des donn\xe9es affich\xe9es dans la list box d\xe9sign\xe9e par les param\xe8tres ",(0,r.jsx)(s.em,{children:"*"})," et ",(0,r.jsx)(s.em,{children:"objet"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Note :"})," Cette commande ne peut \xeatre utilis\xe9e que lorsque la propri\xe9t\xe9 \u201CSource de donn\xe9es\u201D de la list box est ",(0,r.jsx)(s.strong,{children:"S\xe9lection courante"})," ou ",(0,r.jsx)(s.strong,{children:"S\xe9lection temporaire"})," (pour plus d'informations sur ce point, reportez-vous \xe0 la section ",(0,r.jsx)(s.em,{children:"Gestion programm\xe9e des objets de type List box"}),"). Elle ne fait rien si vous l\u2019utilisez avec une list box associ\xe9e \xe0 des tableaux, des collections ou des entity selections."]}),"\n",(0,r.jsxs)(s.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,r.jsx)(s.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,r.jsx)(s.em,{children:"objet"})," est un nom d\u2019objet (une cha\xeene). Si vous ne passez pas ce param\xe8tre, vous indiquez que le param\xe8tre ",(0,r.jsx)(s.em,{children:"objet"})," est une variable. Dans ce cas, vous ne passez pas une cha\xeene mais une r\xe9f\xe9rence de variable. Pour plus d'informations sur les noms d\u2019objets, reportez-vous \xe0 la section ",(0,r.jsx)(s.em,{children:"Objets de formulaires"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Si vous passez un num\xe9ro de table comme param\xe8tre ",(0,r.jsx)(s.em,{children:"numTable"}),", la list box sera remplie avec les donn\xe9es des enregistrements de la s\xe9lection courante de la table.",(0,r.jsx)(s.br,{}),"\nSi vous passez un nom de s\xe9lection temporaire comme param\xe8tre ",(0,r.jsx)(s.em,{children:"tempo"}),", la list box sera remplie avec les donn\xe9es des enregistrements appartenant \xe0 la s\xe9lection temporaire."]}),"\n",(0,r.jsxs)(s.p,{children:["Le param\xe8tre optionnel ",(0,r.jsx)(s.em,{children:"nomSurlignage"})," vous permet d\u2019associer un ensemble de surlignage \xe0 la list box. L\u2019ensemble de surlignage est utilis\xe9 pour g\xe9rer le surlignage des enregistrements par l\u2019utilisateur dans la list box."]}),"\n",(0,r.jsx)(s.p,{children:"Si la list box contenait d\xe9j\xe0 des colonnes, leur contenu est mis \xe0 jour \xe0 l\u2019issue de l\u2019ex\xe9cution de la commande."}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Note :"})," Pour des raisons d'optimisation, cette commande est trait\xe9e de mani\xe8re asynchrone, c'est-\xe0-dire que le changement de source de la listbox n'est effectif qu'\xe0 l'issue de l'ex\xe9cution compl\xe8te de la m\xe9thode dans laquelle la commande est appel\xe9e."]}),"\n",(0,r.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/fr/commands/listbox-get-table-source",children:"LISTBOX GET TABLE SOURCE"})}),"\n",(0,r.jsx)(s.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(s.td,{children:"1013"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Thread safe"}),(0,r.jsx)(s.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return o},a:function(){return l}});var t=n(667294);let r={},i=t.createContext(r);function l(e){let s=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);