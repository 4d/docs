"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["49436"],{953112:function(e,t,n){n.r(t),n.d(t,{default:()=>p,frontMatter:()=>a,metadata:()=>s,assets:()=>i,toc:()=>l,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/get-text-from-pasteboard","title":"Get text from pasteboard","description":"Get text from pasteboard  : Text","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-text-from-pasteboard.md","sourceDirName":"commands-legacy","slug":"/commands/get-text-from-pasteboard","permalink":"/docs/es/commands/get-text-from-pasteboard","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-text-from-pasteboard.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-text-from-pasteboard","title":"Get text from pasteboard","slug":"/commands/get-text-from-pasteboard","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET PICTURE FROM PASTEBOARD","permalink":"/docs/es/commands/get-picture-from-pasteboard"},"next":{"title":"Pasteboard data size","permalink":"/docs/es/commands/pasteboard-data-size"}}'),r=n("785893"),o=n("250065");let a={id:"get-text-from-pasteboard",title:"Get text from pasteboard",slug:"/commands/get-text-from-pasteboard",displayed_sidebar:"docs"},d=void 0,i={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let t={a:"a",br:"br",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Get text from pasteboard"}),"  : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Par\xe1metro"}),(0,r.jsx)(t.th,{children:"Tipo"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Descripci\xf3n"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Resultado"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"\u2190"}),(0,r.jsx)(t.td,{children:"Devuelve el texto (si lo hay) en el Portapapeles"})]})})]}),"\n",(0,r.jsx)(t.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsx)(t.p,{children:"Get text from pasteboard devuelve el texto en el portapapeles."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Nota"}),": en el caso de las operaciones copiar/pegar, el contenedor de datos corresponde al Portapapeles."]}),"\n",(0,r.jsx)(t.p,{children:"Si el contenedor de datos contiene texto enriquecido (por ejemplo en formato RTF), el texto conserva sus atributos al soltar o pegar, si el \xe1rea de destino es compatible."}),"\n",(0,r.jsx)(t.p,{children:"Note que los campos y variables de tipo texto de 4D pueden contener hasta 2 GB de texto."}),"\n",(0,r.jsx)(t.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,r.jsx)(t.p,{children:"Si el texto se extrae correctamente, OK toma el valor 1; de lo contrario OK toma el valor 0 y se genera un error."}),"\n",(0,r.jsx)(t.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/es/commands/get-pasteboard-data",children:"GET PASTEBOARD DATA"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/es/commands/get-picture-from-pasteboard",children:"GET PICTURE FROM PASTEBOARD"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/es/commands/pasteboard-data-size",children:"Pasteboard data size"})]}),"\n",(0,r.jsx)(t.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"N\xfamero de comando"}),(0,r.jsx)(t.td,{children:"524"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Hilo seguro"}),(0,r.jsx)(t.td,{children:"\u2717"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Modifica variables"}),(0,r.jsx)(t.td,{children:"OK"})]})]})]})]})}function p(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return a}});var s=n(667294);let r={},o=s.createContext(r);function a(e){let t=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);