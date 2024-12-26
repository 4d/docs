"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["25950"],{869207:function(e,n,d){d.r(n),d.d(n,{metadata:()=>s,contentTitle:()=>o,default:()=>m,assets:()=>t,toc:()=>c,frontMatter:()=>r});var s=JSON.parse('{"id":"commands-legacy/delete-index","title":"DELETE INDEX","description":"DELETE INDEX ( Ptrcamp\xa0|\xa0nomIndex {; *} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/delete-index.md","sourceDirName":"commands-legacy","slug":"/commands/delete-index","permalink":"/docs/es/commands/delete-index","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdelete-index.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"delete-index","title":"DELETE INDEX","slug":"/commands/delete-index","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CREATE INDEX","permalink":"/docs/es/commands/create-index"},"next":{"title":"EXPORT STRUCTURE","permalink":"/docs/es/commands/export-structure"}}'),i=d("785893"),a=d("250065");let r={id:"delete-index",title:"DELETE INDEX",slug:"/commands/delete-index",displayed_sidebar:"docs"},o=void 0,t={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Nota para despliegue",id:"nota-para-despliegue",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"DELETE INDEX"})," ( Ptrcamp\xa0|\xa0nomIndex {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Ptrcamp\xa0|\xa0nomIndex"}),(0,i.jsx)(n.td,{children:"Puntero, Cadena"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Puntero al campo del cual borrar los \xedndices o Nombre del \xedndice a borrar"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Operador"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Si se pasa = operaci\xf3n asincr\xf3nica"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["El comando DELETE INDEX se utiliza para borrar uno o m\xe1s \xedndices existentes en la base.",(0,i.jsx)(n.br,{}),"\nPuede pasar en par\xe1metro un puntero o un campo o el nombre de un \xedndice en el par\xe1metro:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Si pasa un puntero a un campo (",(0,i.jsx)(n.em,{children:"ptrcampo"}),"), todos los \xedndices asociados al campo ser\xe1n borrados. Puede tratarse de \xedndices de palabras claves o de \xedndices est\xe1ndar. Sin embargo, si el campo est\xe1 incluido en uno o m\xe1s \xedndices compuestos, no se borrar\xe1n (debe pasar un nombre de \xedndice)."]}),"\n",(0,i.jsxs)(n.li,{children:["Si pasa el nombre de un \xedndice (",(0,i.jsx)(n.em,{children:"nomIndex"}),"), s\xf3lo se borrar\xe1 el \xedndice designado. Puede tratarse de \xedndices de palabras claves, \xedndices est\xe1ndar o \xedndices compuestos."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["El par\xe1metro opcional ",(0,i.jsx)(n.em,{children:"*"}),", cuando se pasa, permite efectuar la desindexaci\xf3n en modo asincr\xf3nico. En este modo, el m\xe9todo de origen contin\xfaa su ejecuci\xf3n despu\xe9s de la llamada al comando, sin importar si la eliminaci\xf3n del \xedndice a terminado o no."]}),"\n",(0,i.jsxs)(n.p,{children:["Si no existe un \xedndice correspondiente a Ptrfcamp o ",(0,i.jsx)(n.em,{children:"nomIndex"}),", el comando no hace nada."]}),"\n",(0,i.jsx)(n.h4,{id:"nota-para-despliegue",children:"Nota para despliegue"}),"\n",(0,i.jsx)(n.p,{children:"Dado que este comando modifica la estructura de la base de datos, no puede utilizarse en el contexto de una aplicaci\xf3n empaquetada de s\xf3lo lectura (archivo .4dc instalado en la carpeta Archivos de programa o archivo .4dz)."}),"\n",(0,i.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,i.jsx)(n.p,{children:"Este ejemplo ilustra las dos sintaxis del comando:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//Eliminaci\xf3n de todos los \xedndices relacionados con el campo Apellido\n\xa0DELETE INDEX(->[Clientes]Apellido)\n\xa0\xa0//Eliminaci\xf3n del \xedndice llamado \u201CCPCiudad\u201D\n\xa0DELETE INDEX("CPCiudad")\n'})}),"\n",(0,i.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/es/commands/create-index",children:"CREATE INDEX"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/commands/pause-indexes",children:"PAUSE INDEXES"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/commands/set-index",children:"SET INDEX"})]}),"\n",(0,i.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"N\xfamero de comando"}),(0,i.jsx)(n.td,{children:"967"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Hilo seguro"}),(0,i.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},250065:function(e,n,d){d.d(n,{Z:function(){return o},a:function(){return r}});var s=d(667294);let i={},a=s.createContext(i);function r(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);