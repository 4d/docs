"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["8729"],{260460:function(e,o,n){n.r(o),n.d(o,{default:()=>l,frontMatter:()=>d,metadata:()=>r,assets:()=>i,toc:()=>c,contentTitle:()=>s});var r=JSON.parse('{"id":"commands-legacy/create-document","title":"Create document","description":"Create document ( documento {; tipoArquivo} ) : Time","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/create-document.md","sourceDirName":"commands-legacy","slug":"/commands/create-document","permalink":"/docs/pt/commands/create-document","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcreate-document.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"create-document","title":"Create document","slug":"/commands/create-document","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CREATE ALIAS","permalink":"/docs/pt/commands/create-alias"},"next":{"title":"CREATE FOLDER","permalink":"/docs/pt/commands/create-folder"}}'),t=n("785893"),a=n("250065");let d={id:"create-document",title:"Create document",slug:"/commands/create-document",displayed_sidebar:"docs"},s=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function m(e){let o={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"Create document"})," ( ",(0,t.jsx)(o.em,{children:"documento"})," {; ",(0,t.jsx)(o.em,{children:"tipoArquivo"}),"} ) : Time"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(o.table,{children:[(0,t.jsx)(o.thead,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.th,{children:"Par\xe2metro"}),(0,t.jsx)(o.th,{children:"Tipo"}),(0,t.jsx)(o.th,{}),(0,t.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(o.tbody,{children:[(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"documento"}),(0,t.jsx)(o.td,{children:"Text"}),(0,t.jsx)(o.td,{children:"\u2192"}),(0,t.jsx)(o.td,{children:"Nome de documento ou rota de acesso completa ou string vazia para caixa de di\xe1logo de arquivo"})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"tipoArquivo"}),(0,t.jsx)(o.td,{children:"Text"}),(0,t.jsx)(o.td,{children:"\u2192"}),(0,t.jsx)(o.td,{children:'Lista de tipos de documentos a serem pesquisados, ou "*" para n\xe3o pesquisar os documentos'})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"Resultado"}),(0,t.jsx)(o.td,{children:"Time"}),(0,t.jsx)(o.td,{children:"\u2190"}),(0,t.jsx)(o.td,{children:"N\xfamero de refer\xeancia de documento"})]})]})]}),"\n",(0,t.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsx)(o.p,{children:"O comando Create document cria um novo documento e retorna seu n\xfamero de refer\xeancia."}),"\n",(0,t.jsxs)(o.p,{children:["Passe o nome ou rota completa do novo documento em ",(0,t.jsx)(o.em,{children:"documento"}),". Se ",(0,t.jsx)(o.em,{children:"documento"})," j\xe1 existir no disco, \xe9 substitu\xeddo. Entretanto, se ",(0,t.jsx)(o.em,{children:"documento"})," estiver bloqueado ou aberto, um erro \xe9 gerado."]}),"\n",(0,t.jsxs)(o.p,{children:["Se passa uma string vazia em ",(0,t.jsx)(o.em,{children:"documento"}),", aparece uma caixa de di\xe1logo padr\xe3o Salvar Como e o usu\xe1rio pode especificar o nome do documento que deseja criar. Se cancela o di\xe1logo, n\xe3o se cria o documento; Create document retorna uma refer\xeancia de documento nula e a vari\xe1vel OK toma o valor 0."]}),"\n",(0,t.jsx)(o.p,{children:"Se o documento for criado corretamente e for aberto, Create document retorna seu n\xfamero de refer\xeancia e a vari\xe1vel OK toma o valor 1. O documento da vari\xe1vel sistema Document \xe9 atualizado e retorna a rota de acesso completa do documento criado."}),"\n",(0,t.jsxs)(o.p,{children:["Use ou n\xe3o a caixa de di\xe1logo Salvar como,Create document cria por padr\xe3o um documento de tipo .TXT (Windows) ou TEXT (Macintosh). Para criar outro tipo de documento, passe o par\xe2metro ",(0,t.jsx)(o.em,{children:"tipoArquivo"}),"."]}),"\n",(0,t.jsxs)(o.p,{children:["No par\xe2metro ",(0,t.jsx)(o.em,{children:"tipoArquivo"}),", pode passar um ou v\xe1rios tipos de arquivo com o objetivo de configurar a lista de tipos autorizados na caixa de di\xe1logo. Pode passar uma lista de v\xe1rios tipos separados por um ; (ponto e v\xedrgula). Para cada tipo definido, se adicionar\xe1 uma linha ao menu de elei\xe7\xe3o do tipo de caixa de di\xe1logo."]}),"\n",(0,t.jsxs)(o.p,{children:['Em Mac OS, pode passar um tipo Mac OS cl\xe1ssico (TEXT, APPL, etc.), ou um tipo UTI (Uniform Tipo Identifier). Os tipos UTIs s\xe3o definidos por Apple para cumprir com as necessidades de padroniza\xe7\xe3o de tipos de arquivos. Por exemplo, "public.text" \xe9 o tipo UTI dos arquivos de tipo texto. Para maior informa\xe7\xe3o sobre UTIs, consulte o seguinte endere\xe7o: ',(0,t.jsx)(o.em,{children:(0,t.jsx)(o.a,{href:"https://developer.apple.com/library/mac/#documentation/Miscellaneous/Reference/UTIRef/Articles/System-DeclaredUniformTypeIdentifiers.html",children:"https://developer.apple.com/library/mac/#documentation/Miscellaneous/Reference/UTIRef/Articles/System-DeclaredUniformTypeIdentifiers.html"})})," (documenta\xe7\xe3o em ingl\xeas)."]}),"\n",(0,t.jsx)(o.p,{children:"Em Windows, pode passar igualmente um tipo de arquivo cl\xe1ssico Mac OS, 4D realiza a correspond\xeancia internamente, ou a extens\xe3o de arquivos (.txt, .exe, etc.). Note que em Windows, o usu\xe1rio pode \u201Cfor\xe7ar\u201D a visualiza\xe7\xe3o de todos os tipos de arquivos introduzindo *.* na caixa de di\xe1logo. Entretanto, neste caso, 4D realizar\xe1 uma verifica\xe7\xe3o adicional dos tipos de arquivos selecionados: se o usu\xe1rio seleciona um tipo de arquivo n\xe3o autorizado, o comando retorna um erro."}),"\n",(0,t.jsxs)(o.p,{children:['Se n\xe3o deseja restringir os arquivos mostrados a um ou mais tipos, passe "*" (asterisco) ou ".*" em ',(0,t.jsx)(o.em,{children:"tipoArquivo"}),"."]}),"\n",(0,t.jsxs)(o.p,{children:["Em Windows passe uma extens\xe3o de arquivo Windows ou um tipo de arquivo Mac OS associado com a ajuda do comando ",(0,t.jsx)(o.em,{children:"_o_MAP FILE TYPES"}),". Se deseja criar um documento sem extens\xe3o, um documento com v\xe1rias extens\xf5es, ou um documento com uma extens\xe3o de mais de tr\xeas caracteres, n\xe3o utilize o par\xe2metro ",(0,t.jsx)(o.em,{children:"Tipo"})," e passe o nome completo em documento (ver exemplo 2)."]}),"\n",(0,t.jsxs)(o.p,{children:["Quando tiver criado e aberto um documento, pode escrever ou ler os valores do documento utilizando os comandos ",(0,t.jsx)(o.a,{href:"/docs/pt/commands/receive-packet",children:"RECEIVE PACKET"})," e ",(0,t.jsx)(o.a,{href:"/docs/pt/commands/send-packet",children:"SEND PACKET"})," que pode combinar com os comandos ",(0,t.jsx)(o.a,{href:"/docs/pt/commands/get-document-position",children:"Get document position"})," e ",(0,t.jsx)(o.a,{href:"/docs/pt/commands/set-document-position",children:"SET DOCUMENT POSITION"})," para acessar diretamente a certas partes do documento."]}),"\n",(0,t.jsxs)(o.p,{children:["N\xe3o esque\xe7a de finalmente chamar ",(0,t.jsx)(o.a,{href:"/docs/pt/commands/close-document",children:"CLOSE DOCUMENT"})," para o documento."]}),"\n",(0,t.jsx)(o.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,t.jsx)(o.p,{children:"O exemplo abaixo e cria e abre um novo documento chamado Nota, escreve a string \u201COl\xe1\u201D e fecha o documento:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-4d",children:'\xa0var vhDoc : Time\n\xa0vhDoc:=Create document("Nota.txt")\xa0// Criar um novo documento chamado Nota\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0SEND PACKET(vhDoc;"Ol\xe1")\xa0// Escrever uma palavra no documento\n\xa0\xa0\xa0\xa0CLOSE DOCUMENT(vhDoc)\xa0// Fechar o documento\n\xa0End if\n'})}),"\n",(0,t.jsx)(o.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,t.jsx)(o.p,{children:"O exemplo abaixo cria documentos com extens\xf5es que n\xe3o s\xe3o padr\xe3o em Windows:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-4d",children:'\xa0$vtMinhaDoc:=Create document("Doc.ext1.ext2")\xa0//V\xe1rias extens\xf5es\n\xa0$vtMeuDoc:=Create document("Doc.shtml")\xa0//Extens\xe3o longo\n\xa0$vtMeuDoc:=Create document("Doc.")\xa0//Sem extens\xe3o (o ponto "." \xe9 obrigat\xf3rio)\n'})}),"\n",(0,t.jsx)(o.h2,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,t.jsxs)(o.p,{children:["Se o documento for criado corretamente, a vari\xe1vel sistema OK assume o valor 1 e a vari\xe1vel sistema Document contem a rota completa e o nome do arquivo ",(0,t.jsx)(o.em,{children:"documento"}),"."]}),"\n",(0,t.jsx)(o.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.a,{href:"/docs/pt/commands/append-document",children:"Append document"}),(0,t.jsx)(o.br,{}),"\n",(0,t.jsx)(o.a,{href:"/docs/pt/commands/open-document",children:"Open document"})]}),"\n",(0,t.jsx)(o.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(o.table,{children:[(0,t.jsx)(o.thead,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.th,{}),(0,t.jsx)(o.th,{})]})}),(0,t.jsxs)(o.tbody,{children:[(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"N\xfamero do comando"}),(0,t.jsx)(o.td,{children:"266"})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"Thread-seguro"}),(0,t.jsx)(o.td,{children:"\u2713"})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"Modificar vari\xe1veis"}),(0,t.jsx)(o.td,{children:"OK, Document, error"})]})]})]})]})}function l(e={}){let{wrapper:o}={...(0,a.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},250065:function(e,o,n){n.d(o,{Z:function(){return s},a:function(){return d}});var r=n(667294);let t={},a=r.createContext(t);function d(e){let o=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(a.Provider,{value:o},e.children)}}}]);