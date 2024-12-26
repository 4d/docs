"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["75186"],{291023:function(e,r,s){s.r(r),s.d(r,{metadata:()=>n,contentTitle:()=>o,default:()=>u,assets:()=>a,toc:()=>c,frontMatter:()=>t});var n=JSON.parse('{"id":"commands-legacy/get-indexed-string","title":"Get indexed string","description":"Get indexed string ( resID ; cadeiaNum {; resArquivo} ) : Text","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-indexed-string.md","sourceDirName":"commands-legacy","slug":"/commands/get-indexed-string","permalink":"/docs/pt/commands/get-indexed-string","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-indexed-string.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-indexed-string","title":"Get indexed string","slug":"/commands/get-indexed-string","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CLOSE RESOURCE FILE","permalink":"/docs/pt/commands/close-resource-file"},"next":{"title":"GET PICTURE RESOURCE","permalink":"/docs/pt/commands/get-picture-resource"}}'),d=s("785893"),i=s("250065");let t={id:"get-indexed-string",title:"Get indexed string",slug:"/commands/get-indexed-string",displayed_sidebar:"docs"},o=void 0,a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Compatibilidade com arquitetura XLIFFO",id:"compatibilidade-com-arquitetura-xliffo",level:5},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let r={a:"a",br:"br",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:"Get indexed string"})," ( ",(0,d.jsx)(r.em,{children:"resID"})," ; ",(0,d.jsx)(r.em,{children:"cadeiaNum"})," {; ",(0,d.jsx)(r.em,{children:"resArquivo"}),"} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Par\xe2metro"}),(0,d.jsx)(r.th,{children:"Tipo"}),(0,d.jsx)(r.th,{}),(0,d.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"resID"}),(0,d.jsx)(r.td,{children:"Integer"}),(0,d.jsx)(r.td,{children:"\u2192"}),(0,d.jsx)(r.td,{children:'N\xba de recurso Id ou atributo "id" do elemento do "grupo" (XLIFF)'})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"cadeiaNum"}),(0,d.jsx)(r.td,{children:"Integer"}),(0,d.jsx)(r.td,{children:"\u2192"}),(0,d.jsx)(r.td,{children:'N\xba de Cadeia ou atributo de "id" ou elemento de "trans-unit" (XLIFF)'})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"resArquivo"}),(0,d.jsx)(r.td,{children:"Time"}),(0,d.jsx)(r.td,{children:"\u2192"}),(0,d.jsx)(r.td,{children:"Arquivo de n\xfamero de referencia de Resource se omitido: todos os arquivos XLIFF ou arquivos de resources abertos"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"Resultado"}),(0,d.jsx)(r.td,{children:"Text"}),(0,d.jsx)(r.td,{children:"\u2190"}),(0,d.jsx)(r.td,{children:"Valor da cadeia indexada"})]})]})]}),"\n",(0,d.jsx)(r.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsx)(r.p,{children:"O comando Get indexed string devolve:"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:["Uma das cadeias guardadas no recurso lista de cadeias (\u201CSTR#\u201D) cujo n\xfamero de identifica\xe7\xe3o for passada em ",(0,d.jsx)(r.em,{children:"resNum"}),"."]}),"\n",(0,d.jsxs)(r.li,{children:['Uma cadeia guardada em um arquivo XLIFF aberto cujo atributo "id" do elemento "grupo" se passa em ',(0,d.jsx)(r.em,{children:"resNum"}),' (ver a continua\xe7\xe3o "Compatibilidade com a arquitetura XLIFF ). Passe o n\xfamero da cadeia em ',(0,d.jsx)(r.em,{children:"cadeiaNum"}),". As cadeias de um recurso lista de cadeias est\xe3o numeradas de 1 a N. Para recuperar todas as cadeias (e seus n\xfameros) de um recurso lista de cadeias, utilize o comando ",(0,d.jsx)(r.a,{href:"/docs/pt/commands/string-list-to-array",title:"STRING LIST TO ARRAY",children:"STRING LIST TO ARRAY"}),". Se o recurso n\xe3o for encontrado, ou se a cadeia n\xe3o estiver no interior do recurso, uma cadeia vazia \xe9 devolvida e a vari\xe1vel sistema OK toma o valor 0 (zero). Se passa um n\xfamero de refer\xeancia de arquivo de recursos v\xe1lido em ",(0,d.jsx)(r.em,{children:"resArquivo"}),", o recurso \xe9 procurado nesse arquivo apenas. Se n\xe3o passa ",(0,d.jsx)(r.em,{children:"resArquivo"}),", a primeira ocorr\xeancia do recurso encontrada na cadeia de arquivos de recursos."]}),"\n"]}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:"Nota:"})," uma cadeia de um recurso lista de cadeias pode conter at\xe9 255 caracteres."]}),"\n",(0,d.jsx)(r.h5,{id:"compatibilidade-com-arquitetura-xliffo",children:"Compatibilidade com arquitetura XLIFFO"}),"\n",(0,d.jsxs)(r.p,{children:["O comando Get indexed string \xe9 compat\xedvel com a arquitetura XLIFF de 4D a partir da vers\xe3o 11: o comando pesquisa primeiro pelos valores correspondentes a ",(0,d.jsx)(r.em,{children:"resNum"})," e ",(0,d.jsx)(r.em,{children:"cadeiaNum"})," em todos os arquivos XLIFF abertos (se o par\xe2metro ",(0,d.jsx)(r.em,{children:"resArquivo"})," for omitido). Neste caso, ",(0,d.jsx)(r.em,{children:"resNum"})," especifica o atributo ",(0,d.jsx)(r.strong,{children:"id"})," do elemento ",(0,d.jsx)(r.strong,{children:"grupo"})," e",(0,d.jsx)(r.em,{children:"cadeiaNum"})," especifica o atributo ",(0,d.jsx)(r.strong,{children:"id"})," do elemento ",(0,d.jsx)(r.strong,{children:"trans-unit"}),". Se n\xe3o for encontrado o valor, o comando continua a pesquisa nos arquivos de recursos abertos. Para maiores informa\xe7\xf5es sobre a arquitetura XLIFF em 4D, consulte o Manual de Desenho."]}),"\n",(0,d.jsx)(r.h4,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,d.jsx)(r.p,{children:"Se o recurso for encontrado, OK toma o valor 1, do contr\xe1rio assume o valor 0 (zero)."}),"\n",(0,d.jsx)(r.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.a,{href:"/docs/pt/commands/get-string-resource",children:"Get string resource"}),(0,d.jsx)(r.br,{}),"\n",(0,d.jsx)(r.a,{href:"/docs/pt/commands/get-text-resource",children:"Get text resource"}),(0,d.jsx)(r.br,{}),"\n",(0,d.jsx)(r.a,{href:"/docs/pt/commands/string-list-to-array",children:"STRING LIST TO ARRAY"})]}),"\n",(0,d.jsx)(r.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{}),(0,d.jsx)(r.th,{})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"N\xfamero do comando"}),(0,d.jsx)(r.td,{children:"510"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"Thread-seguro"}),(0,d.jsx)(r.td,{children:"\u2717"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"Modificar vari\xe1veis"}),(0,d.jsx)(r.td,{children:"OK"})]})]})]})]})}function u(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,d.jsx)(r,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},250065:function(e,r,s){s.d(r,{Z:function(){return o},a:function(){return t}});var n=s(667294);let d={},i=n.createContext(d);function t(e){let r=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);