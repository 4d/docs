"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[70927],{835567:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>r});var i=t(474848),s=t(28453);const o={id:"use-entity-selection",title:"USE ENTITY SELECTION",displayed_sidebar:"docs"},c=void 0,a={id:"commands/use-entity-selection",title:"USE ENTITY SELECTION",description:"USE ENTITY SELECTION ( entitySelection : 4D.EntitySelection )",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands/use-entity-selection.md",sourceDirName:"commands",slug:"/commands/use-entity-selection",permalink:"/docs/es/commands/use-entity-selection",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fuse-entity-selection.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"use-entity-selection",title:"USE ENTITY SELECTION",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Table fragmentation",permalink:"/docs/es/commands/table-fragmentation"},next:{title:"VERIFY CURRENT DATA FILE",permalink:"/docs/es/commands/verify-current-data-file"}},l={},r=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"USE ENTITY SELECTION"})," ( ",(0,i.jsx)(n.em,{children:"entitySelection"})," : 4D.EntitySelection )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metros"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"entitySelection"}),(0,i.jsx)(n.td,{children:"4D.EntitySelection"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Una entity selection"})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"USE ENTITY SELECTION"})," command updates the current selection of the table matching the dataclass of the ",(0,i.jsx)(n.em,{children:"entitySelection"})," parameter, according to the content of the entity selection."]}),"\n",(0,i.jsxs)(n.p,{children:["Este comando no puede utilizarse con un ",(0,i.jsx)(n.a,{href:"/docs/es/ORDA/datastores",children:"almac\xe9n de datos remoto"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Este comando est\xe1 dise\xf1ado para hacer que las selecciones actuales 4D se beneficien del poder de las consultas ORDA. Por razones de rendimiento, en 4D monousuario y 4D Server, el comando conecta directamente ",(0,i.jsx)(n.em,{children:"entitySelection"})," a la selecci\xf3n actual. Por lo tanto, una vez que se ha utilizado ",(0,i.jsx)(n.em,{children:"entitySelection"}),", no debe reutilizarse ni alterarse posteriormente."]})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Tras una llamada a ",(0,i.jsx)(n.code,{children:"USE ENTITY SELECTION"}),", el primer registro de la selecci\xf3n actual actualizada (si no est\xe1 vac\xedo) se convierte en el registro actual, pero no se carga en memoria. Si necesita utilizar los valores de los campos en el registro actual, utilice el comando ",(0,i.jsx)(n.code,{children:"LOAD RECORD"})," despu\xe9s del comando ",(0,i.jsx)(n.code,{children:"USE ENTITY SELECTION"}),"."]})}),"\n",(0,i.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'var $entitySel : cs.EmployeeSelection\n\n$entitySel:=ds.Employee.query("lastName = :1";"M@") //$entitySel est\xe1 asociado a la dataclass Employee \nREDUCE SELECTION([Employee];0)\nUSE ENTITY SELECTION($entitySel) //Se actualiza la selecci\xf3n actual de la tabla Employee\n'})}),"\n",(0,i.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/es/commands/create-entity-selection",children:"Create entity selection"})})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>a});var i=t(296540);const s={},o=i.createContext(s);function c(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);