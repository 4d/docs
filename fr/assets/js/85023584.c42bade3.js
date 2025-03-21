"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["48824"],{357825:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>s,assets:()=>d,toc:()=>o,contentTitle:()=>c});var s=JSON.parse('{"id":"commands/create-entity-selection","title":"Create entity selection","description":"Create entity selection ( dsTable Object } ) : 4D.EntitySelection","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands/create-entity-selection.md","sourceDirName":"commands","slug":"/commands/create-entity-selection","permalink":"/docs/fr/20-R7/commands/create-entity-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fcreate-entity-selection.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"create-entity-selection","title":"Create entity selection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CREATE DATA FILE","permalink":"/docs/fr/20-R7/commands/create-data-file"},"next":{"title":"Data file","permalink":"/docs/fr/20-R7/commands/data-file"}}'),i=t("785893"),r=t("250065");let l={id:"create-entity-selection",title:"Create entity selection",displayed_sidebar:"docs"},c=void 0,d={},o=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Create entity selection"})," ( ",(0,i.jsx)(n.em,{children:"dsTable"})," : Table { ; ",(0,i.jsx)(n.em,{children:"settings"})," : Object } ) : 4D.EntitySelection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param\xe8tres"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"dsTable"}),(0,i.jsx)(n.td,{children:"Table"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Table de la base 4D dont la s\xe9lection courante doit \xeatre utilis\xe9e pour construire l'entity selection"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"settings"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Option de cr\xe9ation : contexte"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"R\xe9sultat"}),(0,i.jsx)(n.td,{children:"4D.EntitySelection"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Nouvelle entity selection li\xe9e \xe0 la dataclass de la table"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La commande ",(0,i.jsx)(n.code,{children:"Create entity selection"})," construit et renvoie une nouvelle entity selection ",(0,i.jsx)(n.a,{href:"/docs/fr/20-R7/ORDA/entities#shareable-or-alterable-entity-selections",children:"modifiable"})," relative \xe0 la classe de donn\xe9es correspondant \xe0 la ",(0,i.jsx)(n.em,{children:"dsTable"})," fournie, en fonction de la s\xe9lection actuelle de cette table."]}),"\n",(0,i.jsxs)(n.p,{children:["Si la s\xe9lection actuelle est tri\xe9e, une entity selection ",(0,i.jsx)(n.a,{href:"/docs/fr/20-R7/ORDA/dsmapping#ordered-or-unordered-entity-selection",children:"tri\xe9e"})," est cr\xe9\xe9e (l'ordre de la s\xe9lection actuelle est conserv\xe9). Si la s\xe9lection courante n'est pas tri\xe9e, une entity selection non-tri\xe9e est cr\xe9\xe9e."]}),"\n",(0,i.jsxs)(n.p,{children:["Si la ",(0,i.jsx)(n.em,{children:"dsTable"})," n'est pas expos\xe9e dans ",(0,i.jsx)(n.a,{href:"/docs/fr/20-R7/commands/ds",children:(0,i.jsx)(n.code,{children:"ds"})}),", une erreur est retourn\xe9e. Cette commande ne peut pas \xeatre utilis\xe9e avec un datastore distant."]}),"\n",(0,i.jsxs)(n.p,{children:["Dans le param\xe8tre optionnel ",(0,i.jsx)(n.em,{children:"settings"}),", vous pouvez passer un objet contenant la propri\xe9t\xe9 suivante :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"context"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsxs)(n.td,{children:["Nom du ",(0,i.jsx)(n.a,{href:"/docs/fr/20-R7/ORDA/client-server-optimization",children:"contexte d'optimisation"})," appliqu\xe9 \xe0 l'entity selection."]})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"var $employees : cs.EmployeeSelection\nALL RECORDS([Employee])\n$employees:=Create entity selection([Employee]) \n// L'entity selection $employees contient maintenant un ensemble de \n// r\xe9f\xe9rences vers toutes les entit\xe9s de la dataclass Employee\n"})}),"\n",(0,i.jsx)(n.h2,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/fr/20-R7/commands/use-entity-selection",children:"USE ENTITY SELECTION"}),(0,i.jsx)(n.br,{}),(0,i.jsx)(n.a,{href:"/docs/fr/20-R7/API/DataClassClass#newselection",children:(0,i.jsx)(n.code,{children:"dataClass.newSelection()"})})]}),"\n",(0,i.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,i.jsx)(n.td,{children:"1512"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return l}});var s=t(667294);let i={},r=s.createContext(i);function l(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);