"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["52602"],{619304:function(e,d,n){n.r(d),n.d(d,{default:()=>m,frontMatter:()=>o,metadata:()=>r,assets:()=>t,toc:()=>l,contentTitle:()=>c});var r=JSON.parse('{"id":"commands-legacy/modified-record","title":"Modified record","description":"Modified record {( tabla )} : Boolean","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/modified-record.md","sourceDirName":"commands-legacy","slug":"/commands/modified-record","permalink":"/docs/es/20-R7/commands/modified-record","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmodified-record.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"modified-record","title":"Modified record","slug":"/commands/modified-record","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Is record loaded","permalink":"/docs/es/20-R7/commands/is-record-loaded"},"next":{"title":"POP RECORD","permalink":"/docs/es/20-R7/commands/pop-record"}}'),s=n("785893"),i=n("250065");let o={id:"modified-record",title:"Modified record",slug:"/commands/modified-record",displayed_sidebar:"docs"},c=void 0,t={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function a(e){let d={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(d.p,{children:[(0,s.jsx)(d.strong,{children:"Modified record"})," {( ",(0,s.jsx)(d.em,{children:"tabla"})," )} : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Par\xe1metro"}),(0,s.jsx)(d.th,{children:"Tipo"}),(0,s.jsx)(d.th,{}),(0,s.jsx)(d.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"tabla"}),(0,s.jsx)(d.td,{children:"Table"}),(0,s.jsx)(d.td,{children:"\u2192"}),(0,s.jsx)(d.td,{children:"Tabla a probar si el registro actual se ha modificado o Tabla por defecto, si se omite"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Resultado"}),(0,s.jsx)(d.td,{children:"Boolean"}),(0,s.jsx)(d.td,{children:"\u2190"}),(0,s.jsx)(d.td,{children:"El registro ha sido modificado (True), o El registro no ha sido modificado (False)"})]})]})]}),"\n",(0,s.jsx)(d.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(d.p,{children:["Modified record devuelve True si el registro actual de ",(0,s.jsx)(d.em,{children:"tabla"})," se modific\xf3 pero no guard\xf3; de lo contrario devuelve False. Esta funci\xf3n permite determinar r\xe1pidamente si el registro necesita ser guardado. En los formularios de entrada, puede efectuar la prueba antes de pasar al siguiente registro. Esta funci\xf3n siempre devuelve ",(0,s.jsx)(d.a,{href:"/docs/es/20-R7/commands/true",title:"TRUE",children:"TRUE"})," para un nuevo registro."]}),"\n",(0,s.jsx)(d.p,{children:"Note que esta funci\xf3n siempre devuelve True en los siguientes contextos:"}),"\n",(0,s.jsxs)(d.ul,{children:["\n",(0,s.jsx)(d.li,{children:"el registro actual es un nuevo registro,"}),"\n",(0,s.jsxs)(d.li,{children:["despu\xe9s de la ejecuci\xf3n de los comandos ",(0,s.jsx)(d.a,{href:"/docs/es/20-R7/commands/push-record",children:"PUSH RECORD"})," y ",(0,s.jsx)(d.a,{href:"/docs/es/20-R7/commands/pop-record",children:"POP RECORD"}),","]}),"\n",(0,s.jsxs)(d.li,{children:["tan pronto como un valor ha sido asignado a un campo del registro, incluso si es el mismo valor que el anterior. Por ejemplo, ",(0,s.jsx)(d.strong,{children:"Modified record"})," devuelve True despu\xe9s de que se ejecute la siguiente instrucci\xf3n:"]}),"\n"]}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-4d",children:"\xa0[Table_1]Field_1:=[Table_1]Field_1  \n"})}),"\n",(0,s.jsx)(d.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsx)(d.p,{children:"El siguiente ejemplo muestra una utilizaci\xf3n t\xedpica de Modified record:"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-4d",children:"\xa0If(Modified record([Clientes]))\n\xa0\xa0\xa0\xa0SAVE RECORD([Clientes])\n\xa0End if\n"})}),"\n",(0,s.jsx)(d.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(d.p,{children:[(0,s.jsx)(d.a,{href:"/docs/es/20-R7/commands/modified",children:"Modified"}),(0,s.jsx)(d.br,{}),"\n",(0,s.jsx)(d.a,{href:"/docs/es/20-R7/commands/old",children:"Old"}),(0,s.jsx)(d.br,{}),"\n",(0,s.jsx)(d.a,{href:"/docs/es/20-R7/commands/save-record",children:"SAVE RECORD"})]}),"\n",(0,s.jsx)(d.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{}),(0,s.jsx)(d.th,{})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"N\xfamero de comando"}),(0,s.jsx)(d.td,{children:"314"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Hilo seguro"}),(0,s.jsx)(d.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:d}={...(0,i.a)(),...e.components};return d?(0,s.jsx)(d,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,d,n){n.d(d,{Z:function(){return c},a:function(){return o}});var r=n(667294);let s={},i=r.createContext(s);function o(e){let d=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(d):{...d,...e}},[d,e])}function c(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:d},e.children)}}}]);