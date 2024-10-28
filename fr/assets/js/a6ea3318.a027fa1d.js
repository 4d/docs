"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[23613],{255031:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var s=n(474848),i=n(28453);const o={id:"use-entity-selection",title:"USE ENTITY SELECTION",displayed_sidebar:"docs"},r=void 0,c={id:"commands/use-entity-selection",title:"USE ENTITY SELECTION",description:"USE ENTITY SELECTION ( entitySelection : 4D.EntitySelection )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands/use-entity-selection.md",sourceDirName:"commands",slug:"/commands/use-entity-selection",permalink:"/docs/fr/commands/use-entity-selection",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fuse-entity-selection.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"use-entity-selection",title:"USE ENTITY SELECTION",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Table fragmentation",permalink:"/docs/fr/commands/table-fragmentation"},next:{title:"VERIFY CURRENT DATA FILE",permalink:"/docs/fr/commands/verify-current-data-file"}},l={},d=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function a(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"USE ENTITY SELECTION"})," ( ",(0,s.jsx)(t.em,{children:"entitySelection"})," : 4D.EntitySelection )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Param\xe8tres"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"entitySelection"}),(0,s.jsx)(t.td,{children:"4D.EntitySelection"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Une entity selection"})]})})]}),"\n",(0,s.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"USE ENTITY SELECTION"})," command updates the current selection of the table matching the dataclass of the ",(0,s.jsx)(t.em,{children:"entitySelection"})," parameter, according to the content of the entity selection."]}),"\n",(0,s.jsxs)(t.p,{children:["Cette commande ne peut pas \xeatre utilis\xe9e avec un ",(0,s.jsx)(t.a,{href:"/docs/fr/ORDA/datastores",children:"datastore distant"}),"."]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["Cette commande est con\xe7ue pour permettre aux s\xe9lections courantes 4D de b\xe9n\xe9ficier de la puissance des requ\xeates ORDA. Pour des raisons de performance, dans 4D monoposte et 4D Server, la commande connecte directement ",(0,s.jsx)(t.em,{children:"entitySelection"})," \xe0 la s\xe9lection courante. Par cons\xe9quent, une fois que ",(0,s.jsx)(t.em,{children:"entitySelection"})," a \xe9t\xe9 utilis\xe9e, elle ne doit pas \xeatre r\xe9utilis\xe9e ou modifi\xe9e."]})}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["Apr\xe8s un appel \xe0 ",(0,s.jsx)(t.code,{children:"USE ENTITY SELECTION"}),", le premier enregistrement de la s\xe9lection courante mise \xe0 jour (s'il n'est pas vide) devient l'enregistrement courant, mais il n'est pas charg\xe9 en m\xe9moire. Si vous avez besoin d'utiliser les valeurs des champs de l'enregistrement courant, utilisez la commande ",(0,s.jsx)(t.code,{children:"LOAD RECORD"})," apr\xe8s la commande ",(0,s.jsx)(t.code,{children:"USE ENTITY SELECTION"}),"."]})}),"\n",(0,s.jsx)(t.h4,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'var $entitySel : cs.EmployeeSelection\n\n$entitySel:=ds.Employee.query("lastName = :1";"M@") //$entitySel est associ\xe9e \xe0 la dataclass Employee\nREDUCE SELECTION([Employee];0)\nUSE ENTITY SELECTION($entitySel) //La s\xe9lection courante de la table Employee est mise \xe0 jour\n'})}),"\n",(0,s.jsx)(t.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/docs/fr/commands/create-entity-selection",children:"Create entity selection"})})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var s=n(296540);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);