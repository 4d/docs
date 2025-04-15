"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["60446"],{937486:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>d});var s=JSON.parse('{"id":"ViewPro/commands/vp-remove-table","title":"VP REMOVE TABLE","description":"Historique","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/ViewPro/commands/vp-remove-table.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-remove-table","permalink":"/docs/fr/20-R7/ViewPro/commands/vp-remove-table","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-remove-table.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-remove-table","title":"VP REMOVE TABLE"},"sidebar":"docs","previous":{"title":"VP REMOVE STYLESHEET","permalink":"/docs/fr/20-R7/ViewPro/commands/vp-remove-stylesheet"},"next":{"title":"VP REMOVE TABLE COLUMNS","permalink":"/docs/fr/20-R7/ViewPro/commands/vp-remove-table-columns"}}'),r=t("785893"),l=t("250065");let i={id:"vp-remove-table",title:"VP REMOVE TABLE"},d=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:2}];function a(e){let n={a:"a",code:"code",details:"details",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Modifications"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"19 R6"}),(0,r.jsx)(n.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP REMOVE TABLE"})," ( ",(0,r.jsx)(n.em,{children:"vpAreaName"})," : Object; ",(0,r.jsx)(n.em,{children:"tableName"})," : Text {; ",(0,r.jsx)(n.em,{children:"options"})," : Integer} {; ",(0,r.jsx)(n.em,{children:"sheet"})," : Integer}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tres"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vpAreaName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Nom de la zone 4D View Pro"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tableName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Nom de la table \xe0 supprimer"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"options"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Options suppl\xe9mentaires"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sheet"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Num\xe9ro d'indice de la feuille (feuille courante si omis)"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"VP REMOVE TABLE"})," command removes a table that you created with ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/ViewPro/commands/vp-create-table",children:"VP CREATE TABLE"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"vpAreaName"}),", pass the name of the area where the table to remove is located."]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"tableName"}),", pass the name of the table to remove."]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"options"}),", you can specify additional behavior. Valeurs possibles :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Valeur"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vk table remove all"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"Tput supprimer y compris le style et les donn\xe9es"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vk table remove style"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"Supprimer le style mais conserver les donn\xe9es"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vk table remove data"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:"Supprimer les donn\xe9es mais conserver le style"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Les noms des tables sont d\xe9finis au niveau de la feuille. You can specify where the table is located using the optional ",(0,r.jsx)(n.em,{children:"sheet"})," parameter (indexing starts at 0)."]}),"\n",(0,r.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:'Pour supprimer la table "people" dans la deuxi\xe8me feuille et conserver les donn\xe9es dans les cellules :'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'VP REMOVE TABLE("ViewProArea"; "people"; vk table remove style; 2)\n'})}),"\n",(0,r.jsx)(n.h2,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/ViewPro/commands/vp-create-table",children:"VP CREATE TABLE"})})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return i}});var s=t(667294);let r={},l=s.createContext(r);function i(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);