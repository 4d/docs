"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["47521"],{855869:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>o,assets:()=>a,toc:()=>l,contentTitle:()=>i});var o=JSON.parse('{"id":"commands-legacy/sql-set-option","title":"SQL SET OPTION","description":"SQL SET OPTION ( op\xe7ao ; valor )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/sql-set-option.md","sourceDirName":"commands-legacy","slug":"/commands/sql-set-option","permalink":"/docs/pt/commands/sql-set-option","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsql-set-option.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"sql-set-option","title":"SQL SET OPTION","slug":"/commands/sql-set-option","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SQL LOGOUT","permalink":"/docs/pt/commands/sql-logout"},"next":{"title":"SQL SET PARAMETER","permalink":"/docs/pt/commands/sql-set-parameter"}}'),r=s("785893"),t=s("250065");let d={id:"sql-set-option",title:"SQL SET OPTION",slug:"/commands/sql-set-option",displayed_sidebar:"docs"},i=void 0,a={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let n={a:"a",br:"br",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SQL SET OPTION"})," ( ",(0,r.jsx)(n.em,{children:"op\xe7ao"})," ; ",(0,r.jsx)(n.em,{children:"valor"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"op\xe7ao"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"N\xfamero da op\xe7a\xf5 a estabelecer"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"valor"}),(0,r.jsx)(n.td,{children:"Integer, Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Novo valor da op\xe7\xe3op"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["O comando SQL SET OPTION \xe9 utilizado para modificar o ",(0,r.jsx)(n.em,{children:"valor"})," da op\xe7\xe3o passada em ",(0,r.jsx)(n.em,{children:"op\xe7ao"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"op\xe7ao"})," pode ter um dos seguintes valores, localizados no tema \u201C",(0,r.jsx)(n.em,{children:"SQL"}),"\u201D:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Valor"}),(0,r.jsx)(n.th,{children:"Coment\xe1rio"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"SQL asynchronous"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"0 = Conex\xe3o cr\xf4nica (valor por padr\xe3o), 1 (ou valor diferente de 0) = Conex\xe3o anacr\xf4nica"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"SQL charset"}),(0,r.jsx)(n.td,{children:"100"}),(0,r.jsxs)(n.td,{children:["Codifica\xe7\xe3o do texto utilizada pelas peti\xe7\xf5es enviadas a fontes externas (via SQL pass-through). A modifica\xe7\xe3o \xe9 levada a cabo para o processo atual e a conex\xe3o atual.",(0,r.jsx)(n.br,{}),'Valores poss\xedveis: identificador MIBEnum (ver nota 2), cadeia "WCHAR" (ver nota 3) ou valor -2 (ver nota 4). Por padr\xe3o: 106 (UTF-8)']})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"SQL connection timeout"}),(0,r.jsx)(n.td,{children:"5"}),(0,r.jsxs)(n.td,{children:["Tempo m\xe1ximo de espera durante a execu\xe7\xe3o do comando ",(0,r.jsx)(n.em,{children:"SQL LOGIN"}),". Este valor deve ser definido antes de abrir a conex\xe3o para que seja levado em conta.",(0,r.jsx)(n.br,{}),"Valores poss\xedveis: tempo em segundos",(0,r.jsx)(n.br,{}),"Por padr\xe3o: n\xe3o h\xe1 timeout"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"SQL data chunk size"}),(0,r.jsx)(n.td,{children:"6"}),(0,r.jsxs)(n.td,{children:["Tamanho de chunk de dados que se enviar\xe1 ao servidor. Esta op\xe7\xe3o \xe9 \xfatil principalmente com o controlador ODBC Sybase, que n\xe3o admite chunks de dados reais. Definir um valor maior que o predeterminado permite enviar dados maiores a cada vez. ",(0,r.jsx)(n.br,{}),"Valor: tamanho em bytes",(0,r.jsx)(n.br,{}),"Por padr\xe3o: 8000"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"SQL max data length"}),(0,r.jsx)(n.td,{children:"3"}),(0,r.jsx)(n.td,{children:"Longitude m\xe1xima dos dados devolvidos"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"SQL max rows"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:"N\xfamero m\xe1ximo de linhas no conjunto resultante (utilizado para pr\xe9 visualiza\xe7\xf5es)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"SQL query timeout"}),(0,r.jsx)(n.td,{children:"4"}),(0,r.jsxs)(n.td,{children:["Tempo m\xe1ximo de espera ao executar o comando ",(0,r.jsx)(n.em,{children:"SQL EXECUTE"}),". ",(0,r.jsx)(n.br,{}),"Valores: tempo em segundos",(0,r.jsx)(n.br,{}),"Por padr\xe3o: n\xe3o h\xe1 timeout"]})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Notas"}),":"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Quando trabalha com o motor SQL interno de 4D, a op\xe7\xe3o SQL Asynchronous n\xe3o tem nenhum prop\xf3sito j\xe1 que esse tipo de conex\xe3o sempre \xe9 Cr\xf4nica."}),"\n",(0,r.jsxs)(n.li,{children:["Os n\xfameros MIBEmum s\xe3o referenciados nas seguintes dire\xe7\xf5es: ",(0,r.jsxs)(n.em,{children:[(0,r.jsx)(n.a,{href:"http://www.iana.org/asSegnments/character-sets",children:"http://www.iana.org/asSegnments/character-sets"}),"."]})]}),"\n",(0,r.jsxs)(n.li,{children:["Quando passa -2 como o valor a SQL Charset, a codifica\xe7\xe3o utilizada pelo servidor SQL de 4D \xe9 adaptada automaticamente a plataforma de execu\xe7\xe3o (codifica\xe7\xe3o n\xe3o UTF):\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"em Windows, se utiliza ISO8859-1"}),"\n",(0,r.jsx)(n.li,{children:"em Mac OS, se utiliza MAC-ROMAN."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,r.jsx)(n.p,{children:"Se o comando for executado corretamente, a vari\xe1vel Sistema OK retorna 1. Do contr\xe1rio, retorna 0."}),"\n",(0,r.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/pt/commands/sql-get-option",children:"SQL GET OPTION"})}),"\n",(0,r.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero do comando"}),(0,r.jsx)(n.td,{children:"818"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread-seguro"}),(0,r.jsx)(n.td,{children:"\u2717"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modificar vari\xe1veis"}),(0,r.jsx)(n.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return d}});var o=s(667294);let r={},t=o.createContext(r);function d(e){let n=o.useContext(t);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);