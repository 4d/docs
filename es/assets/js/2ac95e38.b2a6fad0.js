"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[13035],{16752:(e,d,n)=>{n.r(d),n.d(d,{assets:()=>t,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(474848),s=n(28453);const i={id:"modified-record",title:"Modified record",slug:"/commands/modified-record",displayed_sidebar:"docs"},o=void 0,c={id:"commands-legacy/modified-record",title:"Modified record",description:"Modified record {( tabla )} -> Resultado",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/modified-record.md",sourceDirName:"commands-legacy",slug:"/commands/modified-record",permalink:"/docs/es/commands/modified-record",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmodified-record.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"modified-record",title:"Modified record",slug:"/commands/modified-record",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Is record loaded",permalink:"/docs/es/commands/is-record-loaded"},next:{title:"POP RECORD",permalink:"/docs/es/commands/pop-record"}},t={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function a(e){const d={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(d.p,{children:[(0,r.jsx)(d.strong,{children:"Modified record"})," {( ",(0,r.jsx)(d.em,{children:"tabla"})," )} -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Par\xe1metro"}),(0,r.jsx)(d.th,{children:"Tipo"}),(0,r.jsx)(d.th,{}),(0,r.jsx)(d.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"tabla"}),(0,r.jsx)(d.td,{children:"Table"}),(0,r.jsx)(d.td,{children:"\u2192"}),(0,r.jsx)(d.td,{children:"Tabla a probar si el registro actual se ha modificado o Tabla por defecto, si se omite"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"Resultado"}),(0,r.jsx)(d.td,{children:"Boolean"}),(0,r.jsx)(d.td,{children:"\u2190"}),(0,r.jsx)(d.td,{children:"El registro ha sido modificado (True), o El registro no ha sido modificado (False)"})]})]})]}),"\n",(0,r.jsx)(d.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(d.p,{children:["Modified record devuelve True si el registro actual de ",(0,r.jsx)(d.em,{children:"tabla"})," se modific\xf3 pero no guard\xf3; de lo contrario devuelve False. Esta funci\xf3n permite determinar r\xe1pidamente si el registro necesita ser guardado. En los formularios de entrada, puede efectuar la prueba antes de pasar al siguiente registro. Esta funci\xf3n siempre devuelve ",(0,r.jsx)(d.a,{href:"/docs/es/commands/true",title:"TRUE",children:"TRUE"})," para un nuevo registro."]}),"\n",(0,r.jsx)(d.p,{children:"Note que esta funci\xf3n siempre devuelve True en los siguientes contextos:"}),"\n",(0,r.jsxs)(d.ul,{children:["\n",(0,r.jsx)(d.li,{children:"el registro actual es un nuevo registro,"}),"\n",(0,r.jsxs)(d.li,{children:["despu\xe9s de la ejecuci\xf3n de los comandos ",(0,r.jsx)(d.a,{href:"/docs/es/commands/push-record",children:"PUSH RECORD"})," y ",(0,r.jsx)(d.a,{href:"/docs/es/commands/pop-record",children:"POP RECORD"}),","]}),"\n",(0,r.jsxs)(d.li,{children:["tan pronto como un valor ha sido asignado a un campo del registro, incluso si es el mismo valor que el anterior. Por ejemplo, ",(0,r.jsx)(d.strong,{children:"Modified record"})," devuelve True despu\xe9s de que se ejecute la siguiente instrucci\xf3n:"]}),"\n"]}),"\n",(0,r.jsx)(d.pre,{children:(0,r.jsx)(d.code,{className:"language-4d",children:"\xa0[Table_1]Field_1:=[Table_1]Field_1  \n"})}),"\n",(0,r.jsx)(d.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(d.p,{children:"El siguiente ejemplo muestra una utilizaci\xf3n t\xedpica de Modified record:"}),"\n",(0,r.jsx)(d.pre,{children:(0,r.jsx)(d.code,{className:"language-4d",children:"\xa0If(Modified record([Clientes]))\n\xa0\xa0\xa0\xa0SAVE RECORD([Clientes])\n\xa0End if\n"})}),"\n",(0,r.jsx)(d.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(d.p,{children:[(0,r.jsx)(d.a,{href:"/docs/es/commands/modified",children:"Modified"}),(0,r.jsx)(d.br,{}),"\n",(0,r.jsx)(d.a,{href:"/docs/es/commands/old",children:"Old"}),(0,r.jsx)(d.br,{}),"\n",(0,r.jsx)(d.a,{href:"/docs/es/commands/save-record",children:"SAVE RECORD"})]})]})}function m(e={}){const{wrapper:d}={...(0,s.R)(),...e.components};return d?(0,r.jsx)(d,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,d,n)=>{n.d(d,{R:()=>o,x:()=>c});var r=n(296540);const s={},i=r.createContext(s);function o(e){const d=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function c(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:d},e.children)}}}]);