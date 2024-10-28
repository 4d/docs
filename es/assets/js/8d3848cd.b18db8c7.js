"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[48235],{786433:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>i});var s=n(474848),r=n(28453);const d={id:"register-data-key",title:"Register data key",slug:"/commands/register-data-key",displayed_sidebar:"docs"},t=void 0,l={id:"commands-legacy/register-data-key",title:"Register data key",description:"Register data key ( curPassPhrase | curDataKey ) -> Resultado",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/register-data-key.md",sourceDirName:"commands-legacy",slug:"/commands/register-data-key",permalink:"/docs/es/commands/register-data-key",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fregister-data-key.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"register-data-key",title:"Register data key",slug:"/commands/register-data-key",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"New data key",permalink:"/docs/es/commands/new-data-key"},next:{title:"On Backup Shutdown database method",permalink:"/docs/es/commands/on-backup-shutdown-database-method"}},c={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function o(e){const a={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"Register data key"})," ( curPassPhrase | curDataKey ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(a.table,{children:[(0,s.jsx)(a.thead,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.th,{children:"Par\xe1metro"}),(0,s.jsx)(a.th,{children:"Tipo"}),(0,s.jsx)(a.th,{}),(0,s.jsx)(a.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(a.tbody,{children:[(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"curPassPhrase | curDataKey"}),(0,s.jsx)(a.td,{children:"Texto, Objeto"}),(0,s.jsx)(a.td,{children:"\u2192"}),(0,s.jsx)(a.td,{children:"Frase contrase\xf1a actual (texto) o llave de cifrado de datos actual (objeto)"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"Resultado"}),(0,s.jsx)(a.td,{children:"Boolean"}),(0,s.jsx)(a.td,{children:"\u2190"}),(0,s.jsx)(a.td,{children:"True si la llave de cifrado se ha agregado correctamente al llavero 4D, False si ya estaba en el llavero 4D"})]})]})]}),"\n",(0,s.jsx)(a.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(a.p,{children:["El comando ",(0,s.jsx)(a.strong,{children:"Register data key"})," agrega la llave de cifrado de datos pasada en el par\xe1metro al llavero 4D."]}),"\n",(0,s.jsxs)(a.p,{children:["El llavero 4D es un conjunto de una o m\xe1s llaves de cifrado de datos cargadas en la memoria que 4D escanea autom\xe1ticamente cuando se requiere una llave de datos para descifrar/cifrar un archivo de datos. Para m\xe1s informaci\xf3n, consulte ",(0,s.jsx)(a.em,{children:"Encripci\xf3n de datos"}),"."]}),"\n",(0,s.jsxs)(a.p,{children:["En el primer par\xe1metro, pase ",(0,s.jsx)(a.em,{children:"curPassPhrase"})," o ",(0,s.jsx)(a.em,{children:"curDataKey"})," que define la llave de cifrado a agregar:"]}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.em,{children:"curPassPhrase"}),": cadena utilizada para generar la llave de cifrado. Cuando se utiliza este par\xe1metro, se genera una llave de cifrado."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.em,{children:"curDataKey"}),": objeto (con propiedad ",(0,s.jsx)(a.em,{children:"encodedKey"}),") que contiene la llave de cifrado de datos. Esta llave puede haberse generado con el comando ",(0,s.jsx)(a.a,{href:"/docs/es/commands/new-data-key",children:"New data key"}),"."]}),"\n"]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.strong,{children:"Valor devuelto"})}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"True"})," si la llave de cifrado se carga correctamente en el llavero 4D."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"False"})," si la misma llave de cifrado ya estaba presente en el llavero 4D."]}),"\n"]}),"\n",(0,s.jsx)(a.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-4d",children:'\xa0var $passphrase : Text\n\xa0var $added : Boolean\n\xa0\n\xa0$passphrase:=Request("Introduzca la frase contrase\xf1a:")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0$added:=Register data key($passphrase)\n\xa0\n\xa0\xa0\xa0\xa0OPEN DATA FILE("data.4DD")\xa0//No se necesita llave, est\xe1 en el llavero 4D\n\xa0End if\n'})}),"\n",(0,s.jsx)(a.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.a,{href:"/docs/es/commands/new-data-key",children:"New data key"})})]})}function h(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,a,n)=>{n.d(a,{R:()=>t,x:()=>l});var s=n(296540);const r={},d=s.createContext(r);function t(e){const a=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(d.Provider,{value:a},e.children)}}}]);