"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["53871"],{780322:function(e,r,s){s.r(r),s.d(r,{default:()=>m,frontMatter:()=>i,metadata:()=>n,assets:()=>d,toc:()=>c,contentTitle:()=>t});var n=JSON.parse('{"id":"commands-legacy/string-list-to-array","title":"STRING LIST TO ARRAY","description":"STRING LIST TO ARRAY ( resNum ; cadeias {; resArquivo} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/string-list-to-array.md","sourceDirName":"commands-legacy","slug":"/commands/string-list-to-array","permalink":"/docs/pt/commands/string-list-to-array","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fstring-list-to-array.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"string-list-to-array","title":"STRING LIST TO ARRAY","slug":"/commands/string-list-to-array","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RESOURCE TYPE LIST","permalink":"/docs/pt/commands/resource-type-list"},"next":{"title":"SQL","permalink":"/docs/pt/commands/theme/SQL"}}'),o=s("785893"),a=s("250065");let i={id:"string-list-to-array",title:"STRING LIST TO ARRAY",slug:"/commands/string-list-to-array",displayed_sidebar:"docs"},t=void 0,d={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Compatibilidade com arquitetura XLIFF",id:"compatibilidade-com-arquitetura-xliff",level:2},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let r={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"STRING LIST TO ARRAY"})," ( ",(0,o.jsx)(r.em,{children:"resNum"})," ; ",(0,o.jsx)(r.em,{children:"cadeias"})," {; ",(0,o.jsx)(r.em,{children:"resArquivo"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Par\xe2metro"}),(0,o.jsx)(r.th,{children:"Tipo"}),(0,o.jsx)(r.th,{}),(0,o.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(r.tbody,{children:[(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"resNum"}),(0,o.jsx)(r.td,{children:"Integer"}),(0,o.jsx)(r.td,{children:"\u2192"}),(0,o.jsx)(r.td,{children:'N\xba do recurso ou atributo "id" do elemento "group" (XLIFF)'})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"cadeias"}),(0,o.jsx)(r.td,{children:"Text array"}),(0,o.jsx)(r.td,{children:"\u2190"}),(0,o.jsx)(r.td,{children:'Strings do recurso STR# ou strings do elemento "group"(XLIFF)'})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"resArquivo"}),(0,o.jsx)(r.td,{children:"Time"}),(0,o.jsx)(r.td,{children:"\u2192"}),(0,o.jsx)(r.td,{children:"Arquivo de n\xfamero de referencia de Resource se omitido: todos os arquivos XLIFF ou arquivos de resources abertos"})]})]})]}),"\n",(0,o.jsx)(r.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(r.p,{children:["O comando STRING LIST TO ARRAY preenche o array ",(0,o.jsx)(r.em,{children:"cadeias"})," com:"]}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:['As cadeias armazenadas no recurso de tipo lista de cadeias ("STR#") cujo n\xfamero se passa em ',(0,o.jsx)(r.em,{children:"resNum"}),"."]}),"\n",(0,o.jsxs)(r.li,{children:['Ou com una cadeia armazenada em um arquivo XLIFF aberto cujo atributo "id" do elemento "group" se passa em ',(0,o.jsx)(r.em,{children:"resNum"}),' (ver a continua\xe7\xe3o "Compatibilidade com arquitetura XLIFF").\nSe o recurso n\xe3o for encontrado, o array ',(0,o.jsx)(r.em,{children:"cadeias"})," n\xe3o muda e a vari\xe1vel OK assume o valor 0 (zero)."]}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:["Se passa um n\xfamero de refer\xeancia de arquivo de recursos v\xe1lido em ",(0,o.jsx)(r.em,{children:"resArquivo"}),", o recurso \xe9 pesquisado apenas nesse arquivo. Se n\xe3o passa ",(0,o.jsx)(r.em,{children:"resArquivo"}),", se devolver\xe1 a primeira ocorr\xeancia do recurso encontrado na fila de arquivos de recursos. Antes de chamar STRING LIST TO ARRAY, pode pr\xe9-declarar o array ",(0,o.jsx)(r.em,{children:"cadeias"})," como una array de tipo cadeia ou texto. Se n\xe3o pr\xe9-declara o array, o comando cria ",(0,o.jsx)(r.em,{children:"cadeias"})," como um array de tipo Texto."]}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"Nota:"})," Cada cadeia de um recurso lista de cadeias pode conter at\xe9 255 caracteres."]}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"Dica:"})," Quando utilize os recursos listas de cadeias, limite-se a recursos de 32K, e a um m\xe1ximo de umas centenas de cadeias por recurso."]}),"\n",(0,o.jsx)(r.h2,{id:"compatibilidade-com-arquitetura-xliff",children:"Compatibilidade com arquitetura XLIFF"}),"\n",(0,o.jsxs)(r.p,{children:["O comando STRING LIST TO ARRAY \xe9 compat\xedvel com a arquitetura XLIFF de 4D a partir da vers\xe3o 11: o comando busca primeiro pelos valores correspondentes a ",(0,o.jsx)(r.em,{children:"resNum"})," e ",(0,o.jsx)(r.em,{children:"cadeiaNum"})," em todos os arquivos XLIFF abertos (se o par\xe2metro ",(0,o.jsx)(r.em,{children:"resArquivo"})," for omitido) e preenche o array ",(0,o.jsx)(r.em,{children:"cadeias"})," com os valores correspondentes. Neste caso, ",(0,o.jsx)(r.em,{children:"resNum"})," espec\xedfica o atributo ",(0,o.jsx)(r.strong,{children:"id"})," do elemento ",(0,o.jsx)(r.strong,{children:"group"})," e o array ",(0,o.jsx)(r.em,{children:"cadeias"})," cont\xe9m todas as cadeias do elemento. Se n\xe3o for encontrado o valor, o comando continua a pesquisa nos arquivos de recursos abertos. Para maior informa\xe7\xe3o sobre a arquitetura XLIFF em 4D, consulte o Manual de Desenho."]}),"\n",(0,o.jsx)(r.h2,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,o.jsx)(r.p,{children:"Se o recurso for encontrado, a vari\xe1vel sistema OK assume o valor 1, do contr\xe1rio assume o valor 0 (zero)."}),"\n",(0,o.jsx)(r.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"/docs/pt/commands/get-indexed-string",children:"Get indexed string"}),(0,o.jsx)(r.br,{}),"\n",(0,o.jsx)(r.a,{href:"/docs/pt/commands/get-string-resource",children:"Get string resource"}),(0,o.jsx)(r.br,{}),"\n",(0,o.jsx)(r.a,{href:"/docs/pt/commands/get-text-resource",children:"Get text resource"})]}),"\n",(0,o.jsx)(r.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{}),(0,o.jsx)(r.th,{})]})}),(0,o.jsxs)(r.tbody,{children:[(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"N\xfamero do comando"}),(0,o.jsx)(r.td,{children:"511"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"Thread-seguro"}),(0,o.jsx)(r.td,{children:"\u2717"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"Modificar vari\xe1veis"}),(0,o.jsx)(r.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,r,s){s.d(r,{Z:function(){return t},a:function(){return i}});var n=s(667294);let o={},a=n.createContext(o);function i(e){let r=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);