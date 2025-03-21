"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["91304"],{971510:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>i,assets:()=>l,toc:()=>o,contentTitle:()=>d});var i=JSON.parse('{"id":"commands-legacy/get-field-entry-properties","title":"GET FIELD ENTRY PROPERTIES","description":"GET FIELD ENTRY PROPERTIES ( ptrChp | numTable {; numChamp}; \xe9num\xe9ration ; obligatoire ; nonSaisissable ; nonModifiable )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-field-entry-properties.md","sourceDirName":"commands-legacy","slug":"/commands/get-field-entry-properties","permalink":"/docs/fr/20-R7/commands/get-field-entry-properties","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-field-entry-properties.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-field-entry-properties","title":"GET FIELD ENTRY PROPERTIES","slug":"/commands/get-field-entry-properties","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get external data path","permalink":"/docs/fr/20-R7/commands/get-external-data-path"},"next":{"title":"GET FIELD PROPERTIES","permalink":"/docs/fr/20-R7/commands/get-field-properties"}}'),r=s("785893"),t=s("250065");let a={id:"get-field-entry-properties",title:"GET FIELD ENTRY PROPERTIES",slug:"/commands/get-field-entry-properties",displayed_sidebar:"docs"},d=void 0,l={},o=[{value:"Description",id:"description",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function c(e){let n={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"GET FIELD ENTRY PROPERTIES"})," ( ptrChp | numTable {; ",(0,r.jsx)(n.em,{children:"numChamp"}),"}; \xe9num\xe9ration ; ",(0,r.jsx)(n.em,{children:"obligatoire"})," ; ",(0,r.jsx)(n.em,{children:"nonSaisissable"})," ; ",(0,r.jsx)(n.em,{children:"nonModifiable"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ptrChp | numTable"}),(0,r.jsx)(n.td,{children:"Pointeur, Entier long"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Pointeur de champ ou Num\xe9ro de table"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"numChamp"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Num\xe9ro de champ si un num\xe9ro de table est pass\xe9 en premier param\xe8tre"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\xe9num\xe9ration"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Nom de l\u2019\xe9num\xe9ration associ\xe9e ou Cha\xeene vide"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"obligatoire"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Vrai = Obligatoire, Faux = Facultatif"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"nonSaisissable"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Vrai = Non saisissable, Faux = Saisissable"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"nonModifiable"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Vrai = Non modifiable, Faux = Modifiable"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"GET FIELD ENTRY PROPERTIES"})," retourne les propri\xe9t\xe9s relatives \xe0 la saisie de donn\xe9es du champ d\xe9sign\xe9 par ",(0,r.jsx)(n.em,{children:"numTable"})," et ",(0,r.jsx)(n.em,{children:"numChamp"})," ou par ",(0,r.jsx)(n.em,{children:"ptrChp"}),".",(0,r.jsx)(n.br,{}),"\nVous pouvez passer :"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["soit des num\xe9ros de table et de champ dans ",(0,r.jsx)(n.em,{children:"numTable"})," et ",(0,r.jsx)(n.em,{children:"numChamp"}),","]}),"\n",(0,r.jsxs)(n.li,{children:["soit un pointeur vers le champ dans ",(0,r.jsx)(n.em,{children:"ptrChp"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Les propri\xe9t\xe9s retourn\xe9es par cette commande sont celles qui ont \xe9t\xe9 d\xe9finies au niveau de la fen\xeatre de structure de la base. Des propri\xe9t\xe9s similaires peuvent \xe9galement \xeatre d\xe9finies au niveau des formulaires."}),"\n",(0,r.jsx)(n.p,{children:"Apr\xe8s l\u2019ex\xe9cution de la commande :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Le param\xe8tre ",(0,r.jsx)(n.em,{children:"\xe9num\xe9ration"})," contient le nom de l\u2019\xe9num\xe9ration associ\xe9e au champ, s\u2019il y en a une. Il est possible d\u2019associer un \xe9num\xe9ration aux champs de type Alpha, Texte, Num\xe9rique, Entier, Entier long, Date, Heure et Bool\xe9en.",(0,r.jsx)(n.br,{}),'\nSi aucune \xe9num\xe9ration n\u2019est associ\xe9e au champ, ou si son type n\u2019admet pas l\u2019association d\u2019\xe9num\xe9ration, une cha\xeene vide ("") est retourn\xe9e.']}),"\n",(0,r.jsxs)(n.li,{children:["Le param\xe8tre ",(0,r.jsx)(n.em,{children:"obligatoire"})," retourne Vrai si le champ dispose de l\u2019attribut \u201CObligatoire\u201D, Faux sinon. L\u2019attribut \u201CObligatoire\u201D peut \xeatre associ\xe9 aux champs de tous types, hormis BLOB."]}),"\n",(0,r.jsxs)(n.li,{children:["Le param\xe8tre ",(0,r.jsx)(n.em,{children:"nonSaisissable"})," retourne Vrai si le champ dispose de l\u2019attribut \u201CNon saisissable\u201D, Faux sinon. Un champ non saisissable ne peut qu\u2019\xeatre lu, il n\u2019accepte aucune saisie de donn\xe9es. L\u2019attribut \u201CNon saisissable\u201D peut \xeatre associ\xe9 aux champs de tous types, hormis BLOB."]}),"\n",(0,r.jsxs)(n.li,{children:["Le param\xe8tre ",(0,r.jsx)(n.em,{children:"nonModifiable"})," retourne Vrai si le champ dispose de l\u2019attribut \u201CNon modifiable\u201D, Faux sinon. Un champ non modifiable n\u2019accepte qu\u2019une seule saisie, et ne peut plus \xeatre modifi\xe9 par la suite. L\u2019attribut \u201CNon modifiable\u201D peut \xeatre associ\xe9 aux champs de tous types, hormis BLOB."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/get-field-properties",children:"GET FIELD PROPERTIES"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/get-relation-properties",children:"GET RELATION PROPERTIES"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/get-table-properties",children:"GET TABLE PROPERTIES"})]}),"\n",(0,r.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"685"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return a}});var i=s(667294);let r={},t=i.createContext(r);function a(e){let n=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);