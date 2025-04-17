"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["29256"],{822588:function(e,r,s){s.r(r),s.d(r,{default:()=>u,frontMatter:()=>d,metadata:()=>n,assets:()=>c,toc:()=>a,contentTitle:()=>i});var n=JSON.parse('{"id":"commands-legacy/get-string-resource","title":"Get string resource","description":"Get string resource ( resNum {; resArquivo} ) : Text","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/get-string-resource.md","sourceDirName":"commands-legacy","slug":"/commands/get-string-resource","permalink":"/docs/pt/commands/get-string-resource","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-string-resource.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"get-string-resource","title":"Get string resource","slug":"/commands/get-string-resource","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get resource properties","permalink":"/docs/pt/commands/get-resource-properties"},"next":{"title":"Get text resource","permalink":"/docs/pt/commands/get-text-resource"}}'),t=s("785893"),o=s("250065");let d={id:"get-string-resource",title:"Get string resource",slug:"/commands/get-string-resource",displayed_sidebar:"docs"},i=void 0,c={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let r={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Get string resource"})," ( ",(0,t.jsx)(r.em,{children:"resNum"})," {; ",(0,t.jsx)(r.em,{children:"resArquivo"}),"} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Par\xe2metro"}),(0,t.jsx)(r.th,{children:"Tipo"}),(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"resNum"}),(0,t.jsx)(r.td,{children:"Integer"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"N\xfamero do resource"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"resArquivo"}),(0,t.jsx)(r.td,{children:"Time"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"N\xfamero de refer\xeancia do arquivo Resource, ou todos os arquivos de refer\xeancia abertos, se omitido"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Resultado"}),(0,t.jsx)(r.td,{children:"Text"}),(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:"Conte\xfados do resource STR"})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(r.p,{children:["o comando Get string resource retorna a string armazenada no recurso string (\u201CSTR \u201D) cujo n\xfamero de refer\xeancia se passa em ",(0,t.jsx)(r.em,{children:"resNum"}),"."]}),"\n",(0,t.jsx)(r.p,{children:"Se o recurso n\xe3o for encontrado, uma string vazia \xe9 retornada e a vari\xe1vel oK toma o valor 0 (zero)."}),"\n",(0,t.jsxs)(r.p,{children:["Se passa um n\xfamero de refer\xeancia de arquivo de recursos v\xe1lido em ",(0,t.jsx)(r.em,{children:"resArquivo"}),", o recurso \xe9 pesquisado apenas nesse arquivo. Se n\xe3o passar ",(0,t.jsx)(r.em,{children:"resArquivo"}),", se retorna a primeira ocorr\xeancia do recurso encontrada na fila de arquivos de recursos."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Nota"}),": um recurso string pode conter at\xe9 255 caracteres."]}),"\n",(0,t.jsx)(r.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(r.p,{children:"O exemplo a seguir mostra os conte\xfados do recurso string de ID=20911, que deve estar localizado em pelo menos um dos arquivos de recursos abertos."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:"\xa0ALERT(Get string resource(20911))\n"})}),"\n",(0,t.jsx)(r.h2,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,t.jsx)(r.p,{children:"A vari\xe1vel sistema OK toma o valor 1 se for encontrado o recurso, do contr\xe1rio assume o valor 0 (zero)."}),"\n",(0,t.jsx)(r.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/pt/commands/get-indexed-string",children:"Get indexed string"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.a,{href:"/docs/pt/commands/get-text-resource",children:"Get text resource"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.a,{href:"/docs/pt/commands/string-list-to-array",children:"STRING LIST TO ARRAY"})]}),"\n",(0,t.jsx)(r.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"N\xfamero do comando"}),(0,t.jsx)(r.td,{children:"506"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Thread-seguro"}),(0,t.jsx)(r.td,{children:"\u2717"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Modificar vari\xe1veis"}),(0,t.jsx)(r.td,{children:"OK"})]})]})]})]})}function u(e={}){let{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,r,s){s.d(r,{Z:function(){return i},a:function(){return d}});var n=s(667294);let t={},o=n.createContext(t);function d(e){let r=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);