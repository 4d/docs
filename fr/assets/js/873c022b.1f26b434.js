"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["80945"],{635585:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>r,assets:()=>i,toc:()=>o,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/default-table","title":"DEFAULT TABLE","description":"DEFAULT TABLE ( laTable )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/default-table.md","sourceDirName":"commands-legacy","slug":"/commands/default-table","permalink":"/docs/fr/commands/default-table","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdefault-table.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"default-table","title":"DEFAULT TABLE","slug":"/commands/default-table","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Current form table","permalink":"/docs/fr/commands/current-form-table"},"next":{"title":"NO DEFAULT TABLE","permalink":"/docs/fr/commands/no-default-table"}}'),t=s("785893"),a=s("250065");let l={id:"default-table",title:"DEFAULT TABLE",slug:"/commands/default-table",displayed_sidebar:"docs"},d=void 0,i={},o=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"DEFAULT TABLE"})," ( ",(0,t.jsx)(n.em,{children:"laTable"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"laTable"}),(0,t.jsx)(n.td,{children:"Table"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Table \xe0 d\xe9finir comme table par d\xe9faut"})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Conseil :"})," Bien que l'appel de ",(0,t.jsx)(n.strong,{children:"DEFAULT TABLE"})," et l'omission du nom de la table rendent le code plus lisible, la plupart des programmeurs estiment que l'utilisation de cette commande apporte plus d'inconv\xe9nients que d'avantages.",(0,t.jsx)(n.br,{}),"\nEn particulier, notez que ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/default-table",children:"DEFAULT TABLE"})," est prioritaire lorsque vous utilisez par exemple la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/dialog",children:"DIALOG"})," avec un formulaire projet et qu'un formulaire de la table par d\xe9faut a le m\xeame nom."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"DEFAULT TABLE"})," d\xe9signe ",(0,t.jsx)(n.em,{children:"laTable"})," comme la table par d\xe9faut pour le process courant."]}),"\n",(0,t.jsxs)(n.p,{children:["Un process n'a pas de table par d\xe9faut tant que la commande ",(0,t.jsx)(n.strong,{children:"DEFAULT TABLE"})," n'a pas \xe9t\xe9 ex\xe9cut\xe9e. Apr\xe8s qu'une table par d\xe9faut ait \xe9t\xe9 d\xe9sign\xe9e, toute commande pour laquelle le param\xe8tre ",(0,t.jsx)(n.em,{children:"laTable"})," n'a pas \xe9t\xe9 d\xe9fini s'appliquera \xe0 la table par d\xe9faut. Consid\xe9rez par exemple l'instruction suivante :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0FORM SET INPUT([maTable];"Formulaire")\n'})}),"\n",(0,t.jsx)(n.p,{children:"Si [maTable] a pr\xe9alablement \xe9t\xe9 d\xe9finie comme table par d\xe9faut, la m\xeame instruction pourrait s'\xe9crire :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0FORM SET INPUT("Formulaire")\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Une des raisons pour lesquelles vous pouvez d\xe9finir une table par d\xe9faut est l'\xe9criture de code qui ne soit pas li\xe9 \xe0 une table. Cela permet au m\xeame code d'\xeatre appliqu\xe9 \xe0 diff\xe9rentes tables.",(0,t.jsx)(n.br,{}),"\nVous pouvez aussi utiliser des pointeurs vers des tables pour \xe9crire du code non li\xe9 aux tables. Pour plus d'informations sur cette technique, reportez-vous \xe0 la description de la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/table-name",children:"Table name"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"DEFAULT TABLE"})," ne permet pas d'omettre les noms de tables lorsque vous vous r\xe9f\xe9rez \xe0 des champs. Par exemple :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0[MaTable]MonChamp:="Une cha\xeene"\xa0// OK\n'})}),"\n",(0,t.jsx)(n.p,{children:"ne peut pas s'\xe9crire :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0DEFAULT TABLE([MaTable])\n\xa0MonChamp:="Une cha\xeene"\xa0// Incorrect\n'})}),"\n",(0,t.jsx)(n.p,{children:"... simplement parce qu'une table par d\xe9faut a \xe9t\xe9 d\xe9finie."}),"\n",(0,t.jsxs)(n.p,{children:["Dans 4D, toutes les tables sont \u201Couvertes\u201D et pr\xeates \xe0 \xeatre utilis\xe9es. ",(0,t.jsx)(n.strong,{children:"DEFAULT TABLE"})," n'ouvre pas de table, ne d\xe9finit pas de table courante et ne pr\xe9pare pas de table pour la saisie ou l'affichage. ",(0,t.jsx)(n.strong,{children:"DEFAULT TABLE"})," est simplement une facilit\xe9 de programmation propos\xe9e pour acc\xe9l\xe9rer la saisie du code et le rendre plus facile \xe0 lire."]}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsxs)(n.p,{children:["L'exemple suivant pr\xe9sente la m\xeame m\xe9thode avec et sans la commande ",(0,t.jsx)(n.strong,{children:"DEFAULT TABLE"}),". Le code est une boucle souvent utilis\xe9e pour cr\xe9er de nouveaux enregistrements dans une base. Les commandes ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/form-set-input",children:"FORM SET INPUT"})," et ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/add-record",children:"ADD RECORD"})," n\xe9cessitent le nom d'une table comme premier param\xe8tre :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0FORM SET INPUT([Clients];"Ajout Enrg")\n\xa0Repeat\n\xa0\xa0\xa0\xa0ADD RECORD([Clients])\n\xa0Until(OK=0)\n'})}),"\n",(0,t.jsx)(n.p,{children:"Voici le r\xe9sultat lorsqu'une table par d\xe9faut est d\xe9finie :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0DEFAULT TABLE([Clients])\n\xa0FORM SET INPUT("Ajout Enrg")\n\xa0Repeat\n\xa0\xa0\xa0\xa0ADD RECORD\n\xa0Until(OK=0)\n'})}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/commands/current-default-table",children:"Current default table"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/no-default-table",children:"NO DEFAULT TABLE"})]}),"\n",(0,t.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"46"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return l}});var r=s(667294);let t={},a=r.createContext(t);function l(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);