"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["18474"],{546752:function(e,r,n){n.r(r),n.d(r,{default:()=>u,frontMatter:()=>d,metadata:()=>s,assets:()=>i,toc:()=>a,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/get-resource-name","title":"Get resource name","description":"Get resource name ( resTipo ; resNum {; resArquivo} ) : Text","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-resource-name.md","sourceDirName":"commands-legacy","slug":"/commands/get-resource-name","permalink":"/docs/pt/20-R7/commands/get-resource-name","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-resource-name.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-resource-name","title":"Get resource name","slug":"/commands/get-resource-name","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET RESOURCE","permalink":"/docs/pt/20-R7/commands/get-resource"},"next":{"title":"Get resource properties","permalink":"/docs/pt/20-R7/commands/get-resource-properties"}}'),t=n("785893"),o=n("250065");let d={id:"get-resource-name",title:"Get resource name",slug:"/commands/get-resource-name",displayed_sidebar:"docs"},c=void 0,i={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let r={em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Get resource name"})," ( ",(0,t.jsx)(r.em,{children:"resTipo"})," ; ",(0,t.jsx)(r.em,{children:"resNum"})," {; ",(0,t.jsx)(r.em,{children:"resArquivo"}),"} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Par\xe2metro"}),(0,t.jsx)(r.th,{children:"Tipo"}),(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"resTipo"}),(0,t.jsx)(r.td,{children:"Text"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"tipo de resource de 4 caracteres"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"resNum"}),(0,t.jsx)(r.td,{children:"Integer"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"N\xfamero resource"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"resArquivo"}),(0,t.jsx)(r.td,{children:"Time"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"N\xfamero de refer\xeancia do arquivo Resource, ou todos os arquivos de refer\xeancia abertos, se omitido"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Resultado"}),(0,t.jsx)(r.td,{children:"Text"}),(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:"Nome do recurso"})]})]})]}),"\n",(0,t.jsx)(r.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(r.p,{children:["O comando Get resource name retorna o nome do recurso cujo tipo se passa em ",(0,t.jsx)(r.em,{children:"resTipo"})," e cujo n\xfamero de refer\xeancia (ID) em ",(0,t.jsx)(r.em,{children:"resNum"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["Se passa um n\xfamero de refer\xeancia de arquivo de recursos no par\xe2metro ",(0,t.jsx)(r.em,{children:"resArquivo"}),", o recurso \xe9 pesquisado apenas nesse arquivo. Se n\xe3o passa ",(0,t.jsx)(r.em,{children:"resArquivo"}),", o arquivo \xe9 pesquisado nos arquivos de recursos que est\xe3o abertos."]}),"\n",(0,t.jsx)(r.p,{children:"Se o recurso n\xe3o existir, Get resource name retorna uma cadeia vazia."}),"\n",(0,t.jsx)(r.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"N\xfamero do comando"}),(0,t.jsx)(r.td,{children:"513"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Thread-seguro"}),(0,t.jsx)(r.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return c},a:function(){return d}});var s=n(667294);let t={},o=s.createContext(t);function d(e){let r=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);