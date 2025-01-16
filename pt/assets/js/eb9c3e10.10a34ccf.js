"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["99362"],{273222:function(e,o,n){n.r(o),n.d(o,{default:()=>m,frontMatter:()=>r,metadata:()=>a,assets:()=>t,toc:()=>c,contentTitle:()=>i});var a=JSON.parse('{"id":"commands-legacy/copy-document","title":"COPY DOCUMENT","description":"COPY DOCUMENT ( nomFonte ; nomDest {; newName} {; *} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/copy-document.md","sourceDirName":"commands-legacy","slug":"/commands/copy-document","permalink":"/docs/pt/commands/copy-document","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcopy-document.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"copy-document","title":"COPY DOCUMENT","slug":"/commands/copy-document","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Convert path system to POSIX","permalink":"/docs/pt/commands/convert-path-system-to-posix"},"next":{"title":"CREATE ALIAS","permalink":"/docs/pt/commands/create-alias"}}'),s=n("785893"),d=n("250065");let r={id:"copy-document",title:"COPY DOCUMENT",slug:"/commands/copy-document",displayed_sidebar:"docs"},i=void 0,t={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Exemplo 3",id:"exemplo-3",level:4},{value:"Exemplo 4",id:"exemplo-4",level:4},{value:"Exemplo 5",id:"exemplo-5",level:4},{value:"Exemplo 6",id:"exemplo-6",level:4},{value:"Exemplo 7",id:"exemplo-7",level:4},{value:"Exemplo 8",id:"exemplo-8",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let o={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"COPY DOCUMENT"})," ( ",(0,s.jsx)(o.em,{children:"nomFonte"})," ; ",(0,s.jsx)(o.em,{children:"nomDest"})," {; ",(0,s.jsx)(o.em,{children:"newName"}),"} {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:"Par\xe2metro"}),(0,s.jsx)(o.th,{children:"Tipo"}),(0,s.jsx)(o.th,{}),(0,s.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"nomFonte"}),(0,s.jsx)(o.td,{children:"Text"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Nome do documento a copiar"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"nomDest"}),(0,s.jsx)(o.td,{children:"Text"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Nome do documento copiado"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"newName"}),(0,s.jsx)(o.td,{children:"Text"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"New name of copied file or folder"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"*"}),(0,s.jsx)(o.td,{children:"Operador"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Substituir documento existente, se houver"})]})]})]}),"\n",(0,s.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(o.p,{children:["O comando ",(0,s.jsx)(o.strong,{children:"COPY DOCUMENT"})," copia o documento especificado por ",(0,s.jsx)(o.em,{children:"nomFonte"})," na localiza\xe7\xe3o especificada por ",(0,s.jsx)(o.em,{children:"nomDest"}),".\nEste caso, o par\xe2metro ",(0,s.jsx)(o.em,{children:"nomFonte"})," deve conter um caminho de arquivo completo, expressa em rela\xe7\xe3o \xe0 raiz do volume.",(0,s.jsx)(o.br,{}),"\nO par\xe2metro ",(0,s.jsx)(o.em,{children:"nomDest"})," pode conter v\xe1rios tipos de locais:"]}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"um caminho de arquivo completo expressa com rela\xe7\xe3o \xe0 raiz do volume: o arquivo \xe9 copiado para este local"}),"\n",(0,s.jsx)(o.li,{children:"um nome de arquivo ou caminho do arquivo relativo: o arquivo \xe9 copiado para a pasta de banco de dados (as subpastas j\xe1 deve existir)"}),"\n",(0,s.jsxs)(o.li,{children:["um caminho de pasta completo ou um caminho relativo para a pasta base de dados (",(0,s.jsx)(o.em,{children:"nomDest"})," deve terminar com o separador de pasta para a plataforma): o arquivo \xe9 copiado para a pasta designada. Essas pastas j\xe1 devem existir no disco, n\xe3o s\xe3o criadas.",(0,s.jsx)(o.br,{}),"\nSer\xe1 gerado um erro se j\xe1 houver um documento chamado ",(0,s.jsx)(o.em,{children:"nomDest"})," a menos que tenha especificado o par\xe2metro opcional ",(0,s.jsx)(o.em,{children:"*"})," que lhe indica a ",(0,s.jsx)(o.strong,{children:"COPY DOCUMENT"})," que apague e substitua o documento existente pelo documento de destino."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"C\xf3pia de pasta"})," ",(0,s.jsx)(o.strong,{children:"s"}),(0,s.jsx)(o.br,{}),"\nPara indicar que voc\xea est\xe1 designando uma pasta, as sequ\xeancias passadas em ",(0,s.jsx)(o.em,{children:"nomFonte"})," e ",(0,s.jsx)(o.em,{children:"nomDest"}),' deve terminar com um separador de pasta para a plataforma. Por exemplo, no Windows "C:\\\\Element\\\\" designa uma pasta e "C:\\\\Element" designa um arquivo.',(0,s.jsx)(o.br,{}),"\nPara copiar uma pasta, passe o seu caminho completo em ",(0,s.jsx)(o.em,{children:"nomFonte"}),". Esta pasta j\xe1 deve existir no disco. Quando uma pasta \xe9 definida no par\xe2metro ",(0,s.jsx)(o.em,{children:"nomFonte"}),", a pasta deve tamb\xe9m ser designada no par\xe2metro ",(0,s.jsx)(o.em,{children:"nomDest"}),". Deve passar uma rota de acesso completa de pasta (cada elemento j\xe1 deve existir no disco).",(0,s.jsx)(o.br,{}),"\nSe y\xe1 existir uma pasta com o mesmo nome da pasta designada pelo par\xe2metro ",(0,s.jsx)(o.em,{children:"nomFonte"})," na localiza\xe7\xe3o definida pelo par\xe2metro ",(0,s.jsx)(o.em,{children:"nomDest"})," e n\xe3o est\xe1 vazia, 4D verifica seu conte\xfado antes de copiar os elementos. Um erro \xe9 gerado quando j\xe1 existe um arquivo com o mesmo nome, a menos que tenha passado o par\xe2metro opcional ",(0,s.jsx)(o.em,{children:"*"}),", que indica ao comando excluir e substituir o arquivo no lugar de destino."]}),"\n"]}),"\n",(0,s.jsxs)(o.p,{children:["Note que voc\xea pode passar um arquivo no par\xe2metro ",(0,s.jsx)(o.em,{children:"nomFonte"})," e uma pasta no par\xe2metro ",(0,s.jsx)(o.em,{children:"nomDest"}),", a fim de copiar um arquivo em uma pasta."]}),"\n",(0,s.jsxs)(o.p,{children:["O par\xe2metro opcional ",(0,s.jsx)(o.em,{children:"novoNome"}),", se passar, permite renomear o documento copiado a sua localiza\xe7\xe3o de destino (arquivo ou pasta). Quando se passa no contexto de uma c\xf3pia de arquivo, este par\xe2metro substitui o nome (se existir) passado no par\xe2metro ",(0,s.jsx)(o.em,{children:"nomDest"}),"."]}),"\n",(0,s.jsx)(o.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,s.jsx)(o.p,{children:"O exemplo abaixo duplica um documento em sua pr\xf3pria pasta:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'\xa0COPY DOCUMENT("C:\\\\PASTA\\\\DocNome";"C:\\\\PASTA\\\\DocNome2")\n'})}),"\n",(0,s.jsx)(o.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,s.jsx)(o.p,{children:"O exemplo abaixo copia um documento na pasta do banco (sempre e quando C:\\\\PASTA n\xe3o seja a pasta do banco):"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'\xa0COPY DOCUMENT("C:\\\\PASTA \\\\DocNome";"DocNome")\n'})}),"\n",(0,s.jsx)(o.h4,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,s.jsx)(o.p,{children:"O exemplo abaixo copia um documento de um volume a outro:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'\xa0COPY DOCUMENT("C:\\\\PASTA \\\\DocNome";"F:\\\\Arquivos\\\\DocNome.OLD")\n'})}),"\n",(0,s.jsx)(o.h4,{id:"exemplo-4",children:"Exemplo 4"}),"\n",(0,s.jsx)(o.p,{children:"O exemplo abaixo duplica um documento em sua pr\xf3pria pasta, substituindo uma c\xf3pia existente:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'\xa0COPY DOCUMENT("C:\\\\PASTA \\\\DocNome";"C:\\\\PASTA \\\\DocNome2";*)\n'})}),"\n",(0,s.jsx)(o.h4,{id:"exemplo-5",children:"Exemplo 5"}),"\n",(0,s.jsx)(o.p,{children:"C\xf3pia de um arquivo em uma pasta espec\xedfica, mantendo o mesmo nome:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'\xa0COPY DOCUMENT("C:\\\\Projects\\\\DocName";"C:\\\\Projects\\\\")\n'})}),"\n",(0,s.jsx)(o.h4,{id:"exemplo-6",children:"Exemplo 6"}),"\n",(0,s.jsx)(o.p,{children:"C\xf3pia de um arquivo em uma pasta espec\xedfica, mantendo o mesmo nome e substituir o documento existente:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'\xa0COPY DOCUMENT("C:\\\\Projects\\\\DocName";"C:\\\\Projects\\\\"; *)\n'})}),"\n",(0,s.jsx)(o.h4,{id:"exemplo-7",children:"Exemplo 7"}),"\n",(0,s.jsx)(o.p,{children:"Copia de uma pasta para outra pasta (ambas as pastas j\xe1 devem estar presentes no disco):"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'\xa0COPY DOCUMENT("C:\\\\Projects\\\\";"C\\\\Archives\\\\2011\\\\")\n'})}),"\n",(0,s.jsx)(o.h4,{id:"exemplo-8",children:"Exemplo 8"}),"\n",(0,s.jsx)(o.p,{children:'Os seguintes exemplos criam diferentes arquivos e pastas na pasta da base (exemplos em Windows). Em cada caso, a pasta "folder2" deve existir:'}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'\xa0COPY DOCUMENT("folder1\\\\name1";"folder2\\\\")\n\xa0\xa0//Cria o arquivo "folder2/name1"\n\xa0\n\xa0COPY DOCUMENT("folder1\\\\name1";"folder2\\\\" ; "new")\n\xa0\xa0//Cria o arquivo "folder2/new"\n\xa0\n\xa0COPY DOCUMENT("folder1\\\\name1";"folder2\\\\name2")\n\xa0\xa0//Cria o arquivo "folder2/name2"\n\xa0\n\xa0COPY DOCUMENT("folder1\\\\name1";"folder2\\\\name2";"new")\n\xa0\xa0//Cria o arquivo "folder2/new" (name2 se ignora)\n\xa0\n\xa0COPY DOCUMENT("folder1\\\\" ; "folder2\\\\")\n\xa0\xa0//Cria a pasta "folder2/folder1/"\n\xa0\n\xa0COPY DOCUMENT("folder1\\\\" ; "folder2\\\\" ; "new")\n\xa0\xa0//Cria a pasta "folder2/new/"\n'})}),"\n",(0,s.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.em,{children:"Documentos de Sistema"}),(0,s.jsx)(o.br,{}),"\n",(0,s.jsx)(o.a,{href:"/docs/pt/commands/move-document",children:"MOVE DOCUMENT"})]}),"\n",(0,s.jsx)(o.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{}),(0,s.jsx)(o.th,{})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"N\xfamero do comando"}),(0,s.jsx)(o.td,{children:"541"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"Thread-seguro"}),(0,s.jsx)(o.td,{children:"\u2713"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"Modificar vari\xe1veis"}),(0,s.jsx)(o.td,{children:"OK, error"})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,d.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,o,n){n.d(o,{Z:function(){return i},a:function(){return r}});var a=n(667294);let s={},d=a.createContext(s);function r(e){let o=a.useContext(d);return a.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(d.Provider,{value:o},e.children)}}}]);