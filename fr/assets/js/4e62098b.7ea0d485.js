"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[91786],{946616:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>l});var s=t(474848),r=t(28453);const d={id:"ds",title:"ds",displayed_sidebar:"docs"},a=void 0,o={id:"commands/ds",title:"ds",description:"ds { ( localID cs.DataStore",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands/ds.md",sourceDirName:"commands",slug:"/commands/ds",permalink:"/docs/fr/commands/ds",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fds.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"ds",title:"ds",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"DROP REMOTE USER",permalink:"/docs/fr/commands/drop-remote-user"},next:{title:"Export structure file",permalink:"/docs/fr/commands/export-structure-file"}},c={},l=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function i(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ds"})," { ( ",(0,s.jsx)(n.em,{children:"localID"})," : Text ) } : cs.DataStore"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tres"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"localID"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Identifiant local du datastore distant"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"R\xe9sultat"}),(0,s.jsx)(n.td,{children:"DataStore"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Nouvelle r\xe9f\xe9rence de datastore"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.code,{children:"ds"})," retourne une r\xe9f\xe9rence vers le datastore correspondant \xe0 la base de donn\xe9es 4D courante ou \xe0 la base de donn\xe9es d\xe9sign\xe9e par ",(0,s.jsx)(n.em,{children:"localID"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Si vous omettez le param\xe8tre ",(0,s.jsx)(n.em,{children:"localID"})," (ou si vous passez une cha\xeene vide \"\"), la commande renvoie une r\xe9f\xe9rence au datastore correspondant \xe0 la base de donn\xe9es 4D locale (ou \xe0 la base 4D Server en cas d'ouverture d'une base de donn\xe9es distante sur 4D Ser Le datastore est ouvert automatiquement et est disponible directement via ",(0,s.jsx)(n.code,{children:"ds"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Vous pouvez \xe9galement obtenir une r\xe9f\xe9rence sur un datastore distant ouvert en passant son identifiant local dans le param\xe8tre ",(0,s.jsx)(n.em,{children:"localID"}),". The datastore must have been previously opened with the ",(0,s.jsx)(n.a,{href:"/docs/fr/commands/open-datastore",children:(0,s.jsx)(n.code,{children:"Open datastore"})})," command by the current database (host or component). L'identifiant local est d\xe9fini lors de l'utilisation de cette commande."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"La port\xe9e de l'identifiant local est la base de donn\xe9es dans laquelle le datastore a \xe9t\xe9 ouvert."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Si aucun datastore nomm\xe9 ",(0,s.jsx)(n.em,{children:"localID"})," n'est trouv\xe9, la commande renvoie ",(0,s.jsx)(n.strong,{children:"Null"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Objects available in the ",(0,s.jsx)(n.code,{children:"cs.Datastore"})," are mapped from the target database with respect to the ",(0,s.jsx)(n.a,{href:"/docs/fr/ORDA/dsmapping#general-rules",children:"ORDA general rules"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,s.jsx)(n.p,{children:"Utilisation du datastore principal de la base 4D :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'var $result : cs.EmployeeSelection\n$result:=ds.Employee.query("firstName = :1";"S@")\n'})}),"\n",(0,s.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:' var $connectTo; $firstFrench; $firstForeign : Object\n\n var $frenchStudents; $foreignStudents : cs.DataStore\n\n $connectTo:=New object("type";"4D Server";"hostname";"192.168.18.11:8044")\n $frenchStudents:=Open datastore($connectTo;"french")\n\n $connectTo.hostname:="192.168.18.11:8050"\n $foreignStudents:=Open datastore($connectTo;"foreign")\n  //...\n  //...\n $firstFrench:=getFirst("french";"Students")\n $firstForeign:=getFirst("foreign";"Students")\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"  //getFirst method\n  //getFirst(localID;dataclass) -> entity\n #DECLARE( $localId : Text; $dataClassName : Text ) -> $entity : 4D.Entity\n\n $entity:=ds($localId)[$dataClassName].all().first()\n"})}),"\n",(0,s.jsx)(n.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/fr/commands/open-datastore",children:"Open datastore"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var s=t(296540);const r={},d=s.createContext(r);function a(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);