"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["80946"],{910126:function(e,t,r){r.r(t),r.d(t,{default:()=>m,frontMatter:()=>d,metadata:()=>n,assets:()=>i,toc:()=>c,contentTitle:()=>a});var n=JSON.parse('{"id":"commands-legacy/get-text-from-pasteboard","title":"Get text from pasteboard","description":"Get text from pasteboard  : Text","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-text-from-pasteboard.md","sourceDirName":"commands-legacy","slug":"/commands/get-text-from-pasteboard","permalink":"/docs/pt/20-R7/commands/get-text-from-pasteboard","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-text-from-pasteboard.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-text-from-pasteboard","title":"Get text from pasteboard","slug":"/commands/get-text-from-pasteboard","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET PICTURE FROM PASTEBOARD","permalink":"/docs/pt/20-R7/commands/get-picture-from-pasteboard"},"next":{"title":"Pasteboard data size","permalink":"/docs/pt/20-R7/commands/pasteboard-data-size"}}'),o=r("785893"),s=r("250065");let d={id:"get-text-from-pasteboard",title:"Get text from pasteboard",slug:"/commands/get-text-from-pasteboard",displayed_sidebar:"docs"},a=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let t={a:"a",br:"br",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Get text from pasteboard"}),"  : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Par\xe2metro"}),(0,o.jsx)(t.th,{children:"Tipo"}),(0,o.jsx)(t.th,{}),(0,o.jsx)(t.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsx)(t.tbody,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Resultado"}),(0,o.jsx)(t.td,{children:"Text"}),(0,o.jsx)(t.td,{children:"\u2190"}),(0,o.jsx)(t.td,{children:"Retorna o texto (se houver) presente na \xe1rea de transfer\xeancia"})]})})]}),"\n",(0,o.jsx)(t.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsx)(t.p,{children:"Get text from pasteboard devolve o texto na \xe1rea de transfer\xeancia."}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Nota"}),": no caso das opera\xe7\xf5es copiar/colar, o container de dados corresponde a \xe1rea de transfer\xeancia"]}),"\n",(0,o.jsx)(t.p,{children:"Se o container de dados cont\xe9m texto enriquecido (por exemplo em formato RTF), o texto conserva seus atributos ao soltar ou colar, se a \xe1rea de destino \xe9 compat\xedvel."}),"\n",(0,o.jsx)(t.p,{children:"Note que os campos e vari\xe1veis de tipo texto de 4D podem conter at\xe9 2 GB de texto."}),"\n",(0,o.jsx)(t.h4,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,o.jsx)(t.p,{children:"Se o texto for extra\xeddo corretamente, OK toma o valor 1; do contr\xe1rio OK toma o valor 0 e \xe9 gerado um erro."}),"\n",(0,o.jsx)(t.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"/docs/pt/20-R7/commands/get-pasteboard-data",children:"GET PASTEBOARD DATA"}),(0,o.jsx)(t.br,{}),"\n",(0,o.jsx)(t.a,{href:"/docs/pt/20-R7/commands/get-picture-from-pasteboard",children:"GET PICTURE FROM PASTEBOARD"}),(0,o.jsx)(t.br,{}),"\n",(0,o.jsx)(t.a,{href:"/docs/pt/20-R7/commands/pasteboard-data-size",children:"Pasteboard data size"})]}),"\n",(0,o.jsx)(t.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{}),(0,o.jsx)(t.th,{})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"N\xfamero do comando"}),(0,o.jsx)(t.td,{children:"524"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Thread-seguro"}),(0,o.jsx)(t.td,{children:"\u2717"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Modificar vari\xe1veis"}),(0,o.jsx)(t.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,t,r){r.d(t,{Z:function(){return a},a:function(){return d}});var n=r(667294);let o={},s=n.createContext(o);function d(e){let t=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);