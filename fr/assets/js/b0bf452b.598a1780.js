"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["35783"],{679747:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>o,metadata:()=>t,assets:()=>l,toc:()=>d,contentTitle:()=>c});var t=JSON.parse('{"id":"commands-legacy/listbox-get-static-columns","title":"LISTBOX Get static columns","description":"LISTBOX Get static columns ( { ;} objet* ) : Integer","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-get-static-columns.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-get-static-columns","permalink":"/docs/fr/20-R7/commands/listbox-get-static-columns","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-get-static-columns.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-get-static-columns","title":"LISTBOX Get static columns","slug":"/commands/listbox-get-static-columns","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX Get rows height","permalink":"/docs/fr/20-R7/commands/listbox-get-rows-height"},"next":{"title":"LISTBOX GET TABLE SOURCE","permalink":"/docs/fr/20-R7/commands/listbox-get-table-source"}}'),i=s("785893"),r=s("250065");let o={id:"listbox-get-static-columns",title:"LISTBOX Get static columns",slug:"/commands/listbox-get-static-columns",displayed_sidebar:"docs"},c=void 0,l={},d=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"LISTBOX Get static columns"})," ( {* ;} ",(0,i.jsx)(n.em,{children:"objet"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param\xe8tre"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Op\xe9rateur"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsxs)(n.td,{children:["Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene)",(0,i.jsx)(n.br,{}),"Si omis, objet est une variable"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"objet"}),(0,i.jsx)(n.td,{children:"any"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsxs)(n.td,{children:["Nom d'objet (si * est sp\xe9cifi\xe9) ou ",(0,i.jsx)(n.br,{}),"Variable (si * est omis)"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"R\xe9sultat"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Nombre de colonnes statiques"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La commande ",(0,i.jsx)(n.strong,{children:"LISTBOX Get static columns"})," retourne le nombre de colonnes statiques dans la list box d\xe9sign\xe9e par les param\xe8tres ",(0,i.jsx)(n.em,{children:"objet"})," et ",(0,i.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,i.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,i.jsx)(n.em,{children:"objet"})," est un nom d'objet (une cha\xeene). Si vous ne passez pas ce param\xe8tre, vous indiquez que le param\xe8tre ",(0,i.jsx)(n.em,{children:"objet"})," est une variable. Dans ce cas, vous ne passez pas une cha\xeene mais une r\xe9f\xe9rence de variable."]}),"\n",(0,i.jsxs)(n.p,{children:["Les colonnes statiques peuvent avoir \xe9t\xe9 d\xe9finies via la Liste des propri\xe9t\xe9s ou \xe0 l\u2019aide de la commande ",(0,i.jsx)(n.a,{href:"/docs/fr/20-R7/commands/listbox-set-static-columns",children:"LISTBOX SET STATIC COLUMNS"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Si une colonne a \xe9t\xe9 ins\xe9r\xe9e ou supprim\xe9e par programmation \xe0 l\u2019int\xe9rieur d\u2019un ensemble de colonnes statiques, le nombre de colonnes retourn\xe9 par cette commande tient compte de cette modification. En revanche, la commande ne tient pas compte du statut visible/invisible des colonnes."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note :"})," Les colonnes statiques et les colonnes verrouill\xe9es sont deux fonctionnalit\xe9s ind\xe9pendantes. Pour plus d\u2019informations, reportez-vous au manuel ",(0,i.jsx)(n.em,{children:"Mode D\xe9veloppement"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/fr/20-R7/commands/listbox-set-static-columns",children:"LISTBOX SET STATIC COLUMNS"})}),"\n",(0,i.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,i.jsx)(n.td,{children:"1154"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return o}});var t=s(667294);let i={},r=t.createContext(i);function o(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);