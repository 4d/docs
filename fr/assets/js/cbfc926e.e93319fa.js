"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["50906"],{911101:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>i,default:()=>m,assets:()=>c,toc:()=>o,frontMatter:()=>d});var r=JSON.parse('{"id":"ViewPro/commands/vp-get-table-column-index","title":"VP Get table column index","description":"Historique","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/ViewPro/commands/vp-get-table-column-index.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-get-table-column-index","permalink":"/docs/fr/ViewPro/commands/vp-get-table-column-index","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-table-column-index.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-get-table-column-index","title":"VP Get table column index"},"sidebar":"docs","previous":{"title":"VP Get column attributes","permalink":"/docs/fr/ViewPro/commands/vp-get-table-column-attributes"},"next":{"title":"VP Get table dirty rows","permalink":"/docs/fr/ViewPro/commands/vp-get-table-dirty-rows"}}'),l=t("785893"),s=t("250065");let d={id:"vp-get-table-column-index",title:"VP Get table column index"},i=void 0,c={},o=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function a(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",details:"details",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.details,{children:[(0,l.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Release"}),(0,l.jsx)(n.th,{children:"Modifications"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"19 R7"}),(0,l.jsx)(n.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"VP Get table column index"})," ( ",(0,l.jsx)(n.em,{children:"vpAreaName"})," : Text ; ",(0,l.jsx)(n.em,{children:"tableName"})," : Text ; ",(0,l.jsx)(n.em,{children:"columnName"})," : Text {; ",(0,l.jsx)(n.em,{children:"sheet"})," : Integer } ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Param\xe8tres"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Description"}),(0,l.jsx)(n.th,{})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"vpAreaName"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"->"}),(0,l.jsx)(n.td,{children:"Nom d'objet formulaire zone 4D View Pro"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"tableName"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"->"}),(0,l.jsx)(n.td,{children:"Nom de table"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"columnName"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"->"}),(0,l.jsx)(n.td,{children:"Nom de la colonne de la table"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"sheet"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"->"}),(0,l.jsx)(n.td,{children:"Num\xe9ro d'indice de la feuille (feuille courante si omis)"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"R\xe9sultat"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"<-"}),(0,l.jsxs)(n.td,{children:["Num\xe9ro d'indice de ",(0,l.jsx)(n.em,{children:"columnName"})]}),(0,l.jsx)(n.td,{})]})]})]}),"\n",(0,l.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["La commande ",(0,l.jsx)(n.code,{children:"VP Get table column index"})," retourne l'index du ",(0,l.jsx)(n.em,{children:"columnName"})," dans la table ",(0,l.jsx)(n.em,{children:"tableName"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["Dans ",(0,l.jsx)(n.em,{children:"vpAreaName"}),", passez le nom de la zone 4D View Pro."]}),"\n",(0,l.jsxs)(n.p,{children:["Dans ",(0,l.jsx)(n.em,{children:"columnName"}),", passez le nom de la colonne de la table pour laquelle vous souhaitez obtenir l'index."]}),"\n",(0,l.jsxs)(n.p,{children:["Dans ",(0,l.jsx)(n.em,{children:"sheet"}),", passez le num\xe9ro de la page cible. Si aucun num\xe9ro n'est sp\xe9cifi\xe9 ou si vous passez -1, la commande s'applique \xe0 la feuille courante."]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"La num\xe9rotation d\xe9marre \xe0 0."}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["Si ",(0,l.jsx)(n.em,{children:"tableName"})," ou ",(0,l.jsx)(n.em,{children:"columnName"})," n'est pas trouv\xe9, la commande retourne -1."]}),"\n",(0,l.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'	// Rechercher l\'id colonne en fonction du nom de la colonne\nvar $id : Integer\n$id:=VP Get table column index($area; $tableName; "Weight price")\n	// Supprimer la colonne par id\nVP REMOVE TABLE COLUMNS($area; $tableName; $id)\n'})}),"\n",(0,l.jsx)(n.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-create-table",children:"VP CREATE TABLE"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-find-table",children:"VP Find table"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-get-table-column-attributes",children:"VP Get table column attributes"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-set-table-column-attributes",children:"VP SET TABLE COLUMN ATTRIBUTES"})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return d}});var r=t(667294);let l={},s=r.createContext(l);function d(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);