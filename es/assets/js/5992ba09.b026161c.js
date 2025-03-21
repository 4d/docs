"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["22411"],{980668:function(e,s,n){n.r(s),n.d(s,{default:()=>h,frontMatter:()=>d,metadata:()=>t,assets:()=>a,toc:()=>l,contentTitle:()=>r});var t=JSON.parse('{"id":"commands-legacy/session-storage","title":"Session storage","description":"Session storage ( id ) : Object","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/session-storage.md","sourceDirName":"commands-legacy","slug":"/commands/session-storage","permalink":"/docs/es/20-R7/commands/session-storage","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsession-storage.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"session-storage","title":"Session storage","slug":"/commands/session-storage","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Session info","permalink":"/docs/es/20-R7/commands/session-info"},"next":{"title":"UNREGISTER CLIENT","permalink":"/docs/es/20-R7/commands/unregister-client"}}'),i=n("785893"),o=n("250065");let d={id:"session-storage",title:"Session storage",slug:"/commands/session-storage",displayed_sidebar:"docs"},r=void 0,a={},l=[{value:"Nota",id:"nota",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let s={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Session storage"})," ( ",(0,i.jsx)(s.em,{children:"id"})," ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Par\xe1metro"}),(0,i.jsx)(s.th,{children:"Tipo"}),(0,i.jsx)(s.th,{}),(0,i.jsx)(s.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"id"}),(0,i.jsx)(s.td,{children:"Text"}),(0,i.jsx)(s.td,{children:"\u2192"}),(0,i.jsx)(s.td,{children:"Identificador \xfanico (UUID) de la sesi\xf3n en el servidor"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Resultado"}),(0,i.jsx)(s.td,{children:"Object"}),(0,i.jsx)(s.td,{children:"\u2190"}),(0,i.jsx)(s.td,{children:"Objeto de almacenamiento de la sesi\xf3n"})]})]})]}),"\n",(0,i.jsx)(s.h2,{id:"nota",children:"Nota"}),"\n",(0,i.jsxs)(s.p,{children:["El comando ",(0,i.jsx)(s.strong,{children:"Session storage"})," devuelve el objeto de almacenamiento de la sesi\xf3n cuyo identificador \xfanico se pas\xf3 en el par\xe1metro ",(0,i.jsx)(s.em,{children:"id"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["En ",(0,i.jsx)(s.em,{children:"id"}),", pase el UUID de la sesi\xf3n para la que desea obtener el almacenamiento. El servidor lo asigna autom\xe1ticamente y se almacena en la propiedad ",(0,i.jsx)(s.a,{href:"/docs/es/20-R7/API/SessionClass#id",children:(0,i.jsx)(s.strong,{children:".id"})})," del ",(0,i.jsx)(s.a,{href:"/docs/es/20-R7/API/SessionClass",children:"objeto sesi\xf3n"}),". Si la sesi\xf3n no existe en el servidor, el comando devuelve ",(0,i.jsx)(s.strong,{children:"Null"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Nota:"})," puede obtener los identificadores de sesi\xf3n utilizando el comando ",(0,i.jsx)(s.a,{href:"/docs/es/20-R7/commands/process-activity",children:"Process activity"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["El objeto devuelto es la propiedad ",(0,i.jsx)(s.a,{href:"/docs/es/20-R7/API/SessionClass#storage",children:(0,i.jsx)(s.strong,{children:".storage"})})," de la sesi\xf3n. Es un objeto compartido utilizado para almacenar informaci\xf3n disponible para todos los procesos de la sesi\xf3n."]}),"\n",(0,i.jsx)(s.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,i.jsx)(s.p,{children:'Este m\xe9todo modifica el valor de una propiedad "settings" almacenada en el objeto de almacenamiento de una sesi\xf3n espec\xedfica:'}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:'\xa0\xa0//Definir el almacenamiento de una sesi\xf3n\n\xa0\xa0// La propiedad del m\xe9todo "Execute On Server" est\xe1 definida\n\xa0\n\xa0#DECLARE($id Text;$text Text)\n\xa0var $obj : Object\n\xa0\n\xa0$obj:=Session storage($id)\n\xa0\n\xa0If($obj.settings=Null)\n\xa0\xa0\xa0\xa0Use($obj)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$obj.settings:=New shared object("text";$text)\n\xa0\xa0\xa0\xa0End use\n\xa0Else\n\xa0\xa0\xa0\xa0Use($obj.settings)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$obj.settings.text:=$text\n\xa0\xa0\xa0\xa0End use\n\xa0End if\n'})}),"\n",(0,i.jsx)(s.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"/docs/es/20-R7/commands/process-activity",children:"Process activity"})}),"\n",(0,i.jsx)(s.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{}),(0,i.jsx)(s.th,{})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"N\xfamero de comando"}),(0,i.jsx)(s.td,{children:"1839"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Hilo seguro"}),(0,i.jsx)(s.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return r},a:function(){return d}});var t=n(667294);let i={},o=t.createContext(i);function d(e){let s=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);