"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["20146"],{876039:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>d,default:()=>h,assets:()=>l,toc:()=>o,frontMatter:()=>i});var r=JSON.parse('{"id":"commands-legacy/refresh-license","title":"Refresh license","description":"Refresh license : Object","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/refresh-license.md","sourceDirName":"commands-legacy","slug":"/commands/refresh-license","permalink":"/docs/es/commands/refresh-license","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Frefresh-license.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"refresh-license","title":"Refresh license","slug":"/commands/refresh-license","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"License usage","permalink":"/docs/es/commands/license-usage"},"next":{"title":"List Box","permalink":"/docs/es/category/list-box"}}'),t=s("785893"),c=s("250065");let i={id:"refresh-license",title:"Refresh license",slug:"/commands/refresh-license",displayed_sidebar:"docs"},d=void 0,l={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Propiedades",id:"propiedades",level:4}];function a(e){let n={code:"code",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Refresh license"})," : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resultado"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Objeto de estado"})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando ",(0,t.jsx)(n.strong,{children:"Refresh license"})," actualiza la licencia actual del servidor 4D. Lo conecta con la base de datos de clientes 4D y activa autom\xe1ticamente cualquier licencia nueva o actualizada (por ejemplo, clientes comprados adicionales) relacionada con la licencia actual."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Objeto devuelto"})}),"\n",(0,t.jsxs)(n.p,{children:["El objeto devuelto por ",(0,t.jsx)(n.strong,{children:"Refresh license"})," contiene las siguientes propiedades:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Propiedad"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Tipo"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Descripci\xf3n"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"success"}),(0,t.jsx)(n.td,{children:"booleano"}),(0,t.jsx)(n.td,{children:"True si la acci\xf3n de actualizaci\xf3n es exitosa, de lo contrario False."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"status"}),(0,t.jsx)(n.td,{children:"n\xfamero"}),(0,t.jsx)(n.td,{children:"C\xf3digo de estado"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"statusText"}),(0,t.jsx)(n.td,{children:"texto"}),(0,t.jsx)(n.td,{children:"Descripci\xf3n de estado"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tips"}),(0,t.jsx)(n.td,{children:"texto"}),(0,t.jsx)(n.td,{children:"Sugerencias para resolver el error."})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nota"}),": este comando solo puede ejecutarse en 4D Server. Si el m\xe9todo que llama al comando se ejecuta localmente en un cliente remoto o en un solo usuario 4D, ",(0,t.jsx)(n.strong,{children:"Refresh license"})," no hace nada."]}),"\n",(0,t.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsx)(n.p,{children:"Desea actualizar su licencia y recibir un mensaje cuando se complete:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// M\xe9todo a ejecutar en el servidor\n\xa0var $res : Object\n\xa0$res:=Refresh license\n\xa0If($res.success)\n\xa0\xa0\xa0\xa0ALERT("Success")\n\xa0Else\n\xa0\xa0\xa0\xa0ALERT($res.statusText)\n\xa0End if\n'})}),"\n",(0,t.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero de comando"}),(0,t.jsx)(n.td,{children:"1336"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hilo seguro"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return i}});var r=s(667294);let t={},c=r.createContext(t);function i(e){let n=r.useContext(c);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);