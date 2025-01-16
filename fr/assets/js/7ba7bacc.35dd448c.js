"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["14250"],{988627:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>d,metadata:()=>t,assets:()=>a,toc:()=>c,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/get-relation-properties","title":"GET RELATION PROPERTIES","description":"GET RELATION PROPERTIES ( ptrChp | numTable {; numChamp}; tableDest ; champDest {; discriminant {; allerAuto {; retourAuto}}} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-relation-properties.md","sourceDirName":"commands-legacy","slug":"/commands/get-relation-properties","permalink":"/docs/fr/20-R7/commands/get-relation-properties","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-relation-properties.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-relation-properties","title":"GET RELATION PROPERTIES","slug":"/commands/get-relation-properties","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET MISSING TABLE NAMES","permalink":"/docs/fr/20-R7/commands/get-missing-table-names"},"next":{"title":"GET TABLE PROPERTIES","permalink":"/docs/fr/20-R7/commands/get-table-properties"}}'),s=r("785893"),i=r("250065");let d={id:"get-relation-properties",title:"GET RELATION PROPERTIES",slug:"/commands/get-relation-properties",displayed_sidebar:"docs"},l=void 0,a={},c=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function o(e){let n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"GET RELATION PROPERTIES"})," ( ptrChp | numTable {; ",(0,s.jsx)(n.em,{children:"numChamp"}),"}; ",(0,s.jsx)(n.em,{children:"tableDest"})," ; ",(0,s.jsx)(n.em,{children:"champDest"})," {; ",(0,s.jsx)(n.em,{children:"discriminant"})," {; ",(0,s.jsx)(n.em,{children:"allerAuto"})," {; ",(0,s.jsx)(n.em,{children:"retourAuto"}),"}}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ptrChp | numTable"}),(0,s.jsx)(n.td,{children:"Pointeur, Entier long"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Pointeur de champ ou Num\xe9ro de table"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"numChamp"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Num\xe9ro de champ si un num\xe9ro de table est pass\xe9 en premier param\xe8tre"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tableDest"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Num\xe9ro de la table cible ou 0 si aucun lien ne part du champ"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"champDest"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Num\xe9ro du champ cible ou 0 si aucun lien ne part du champ"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"discriminant"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Num\xe9ro du champ discriminant ou 0 si aucun champ discriminant"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"allerAuto"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Vrai = Lien aller automatique, Faux = Lien aller manuel"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"retourAuto"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Vrai = Lien retour automatique, Faux = Lien retour manuel"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"GET RELATION PROPERTIES"})," retourne les propri\xe9t\xe9s du lien, s\u2019il y en a un, qui part du champ source, d\xe9sign\xe9 par ",(0,s.jsx)(n.em,{children:"numTable"})," et ",(0,s.jsx)(n.em,{children:"numChamp"})," ou par ",(0,s.jsx)(n.em,{children:"ptrChp"}),".",(0,s.jsx)(n.br,{}),"\nVous pouvez passer :"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["soit des num\xe9ros de table et de champ dans ",(0,s.jsx)(n.em,{children:"numTable"})," et ",(0,s.jsx)(n.em,{children:"numChamp"}),","]}),"\n",(0,s.jsxs)(n.li,{children:["soit un pointeur vers le champ dans ",(0,s.jsx)(n.em,{children:"ptrChp"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Apr\xe8s l\u2019ex\xe9cution de la commande :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Les param\xe8tres ",(0,s.jsx)(n.em,{children:"tableDest"})," et ",(0,s.jsx)(n.em,{children:"champDest"})," contiennent respectivement le num\xe9ro de la table et du champ vers lesquels pointe le lien partant du champ source. Si aucun lien ne part du champ, ces param\xe8tres contiennent 0."]}),"\n",(0,s.jsxs)(n.li,{children:["Le param\xe8tre ",(0,s.jsx)(n.em,{children:"discriminant"})," contient le num\xe9ro du champ discriminant (appartenant \xe0 la table cible) d\xe9fini pour le lien. Si aucun champ discriminant n\u2019a \xe9t\xe9 d\xe9fini pour le lien ou si aucun lien ne part du champ source, ce param\xe8tre contient 0."]}),"\n",(0,s.jsxs)(n.li,{children:["Les param\xe8tres ",(0,s.jsx)(n.em,{children:"allerAuto"})," et ",(0,s.jsx)(n.em,{children:"retourAuto"})," retournent Vrai si respectivement les options \u201CLien aller auto\u201D et \u201CLien retour auto\u201D ont \xe9t\xe9 coch\xe9es pour le lien, Faux sinon."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note :"})," Les deux derniers param\xe8tres retournent \xe9galement Vrai si aucun lien ne part du champ source (dans ce cas, leur valeur est non significative). La valeur des param\xe8tres ",(0,s.jsx)(n.em,{children:"tableDest"})," et ",(0,s.jsx)(n.em,{children:"champDest"})," vous permet de vous assurer de l\u2019existence d\u2019un lien."]}),"\n",(0,s.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/fr/20-R7/commands/get-field-entry-properties",children:"GET FIELD ENTRY PROPERTIES"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/20-R7/commands/get-field-properties",children:"GET FIELD PROPERTIES"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/20-R7/commands/get-table-properties",children:"GET TABLE PROPERTIES"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/20-R7/commands/set-automatic-relations",children:"SET AUTOMATIC RELATIONS"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/20-R7/commands/set-field-relation",children:"SET FIELD RELATION"})]}),"\n",(0,s.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(n.td,{children:"686"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return d}});var t=r(667294);let s={},i=t.createContext(s);function d(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);