"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["28866"],{37894:function(e,r,o){o.r(r),o.d(r,{default:()=>l,frontMatter:()=>i,metadata:()=>s,assets:()=>t,toc:()=>c,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/open-resource-file","title":"Open resource file","description":"Open resource file ( resNomArq {; tipoArquivo} ) : Time","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/open-resource-file.md","sourceDirName":"commands-legacy","slug":"/commands/open-resource-file","permalink":"/docs/pt/commands/open-resource-file","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fopen-resource-file.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"open-resource-file","title":"Open resource file","slug":"/commands/open-resource-file","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get text resource","permalink":"/docs/pt/commands/get-text-resource"},"next":{"title":"RESOURCE LIST","permalink":"/docs/pt/commands/resource-list"}}'),a=o("785893"),n=o("250065");let i={id:"open-resource-file",title:"Open resource file",slug:"/commands/open-resource-file",displayed_sidebar:"docs"},d=void 0,t={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Exemplo 3",id:"exemplo-3",level:4},{value:"Exemplo 4",id:"exemplo-4",level:4},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:4},{value:"Gest\xe3o de erros",id:"gest\xe3o-de-erros",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function u(e){let r={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"Open resource file"})," ( ",(0,a.jsx)(r.em,{children:"resNomArq"})," {; ",(0,a.jsx)(r.em,{children:"tipoArquivo"}),"} ) : Time"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Par\xe2metro"}),(0,a.jsx)(r.th,{children:"Tipo"}),(0,a.jsx)(r.th,{}),(0,a.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"resNomArq"}),(0,a.jsx)(r.td,{children:"Text"}),(0,a.jsx)(r.td,{children:"\u2192"}),(0,a.jsx)(r.td,{children:"Nome curto ou longo ou arquivo de resource ou string Vazia para caixa de di\xe1logo Abrir Arquivo"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"tipoArquivo"}),(0,a.jsx)(r.td,{children:"Text"}),(0,a.jsx)(r.td,{children:"\u2192"}),(0,a.jsx)(r.td,{children:"Tipo de arquivo Mac OS (string de 4-caracteres), ou arquivo de extensao Windows  (string 1- a 3-caracteres), ou Todos arquivos, se omitido."})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Resultado"}),(0,a.jsx)(r.td,{children:"Time"}),(0,a.jsx)(r.td,{children:"\u2190"}),(0,a.jsx)(r.td,{children:"N\xfamero de refer\xeancia do arquivo de Resouce"})]})]})]}),"\n",(0,a.jsx)(r.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsxs)(r.p,{children:["O comando ",(0,a.jsx)(r.strong,{children:"Open resource file"})," abre o arquivo de recursos cujo nome ou rota de acesso completa se passa em ",(0,a.jsx)(r.em,{children:"resNomArquivo"}),"."]}),"\n",(0,a.jsx)(r.p,{children:"Se passar um nome de arquivo, o arquivo deve estar localizado na mesma pasta que o arquivo de estrutura da banco. Para abrir um arquivo de recursos localizado em outra pasta, passe uma rota de acesso completa."}),"\n",(0,a.jsxs)(r.p,{children:["Se passar uma string vazia em ",(0,a.jsx)(r.em,{children:"resNomArquivo"}),", a caixa de di\xe1logo padr\xe3o de abertura de arquivos aparece, permitindo ao usu\xe1rio selecionar o arquivo a abrir. Se o usu\xe1rio clicar em Cancelar nesta caixa de di\xe1logo, nenhum arquivo de recursos \xe9 aberto; ",(0,a.jsx)(r.strong,{children:"Open resource file"})," retorna um valor nulo em DocRef e a vari\xe1vel oK toma o valor 0."]}),"\n",(0,a.jsxs)(r.p,{children:["Se o arquivo de recursos for aberto corretamente, ",(0,a.jsx)(r.strong,{children:"Open resource file"})," retorna seu n\xfamero de refer\xeancia de arquivo e a vari\xe1vel oK toma o valor 1. Se o arquivo de recursos n\xe3o existir ou se o arquivo que intenta abrir n\xe3o for um arquivo de recursos, um erro \xe9 gerado."]}),"\n",(0,a.jsxs)(r.p,{children:["Em Macintosh, a caixa de di\xe1logo padr\xe3o de apertura de arquivos \xe9 utilizada, todos os arquivos s\xe3o apresentados por padr\xe3o. Para mostrar arquivos de um tipo em particular, especifique o tipo do arquivo no par\xe2metro opcional ",(0,a.jsx)(r.em,{children:"tipoArquivo"}),"."]}),"\n",(0,a.jsxs)(r.p,{children:["Em Windows, Se utiliza a caixa de di\xe1logo padr\xe3o de apertura de arquivos, todos os arquivos se apresentam por padr\xe3o. Para mostrar arquivos de um tipo particular, passe em ",(0,a.jsx)(r.em,{children:"tipoArquivo"}),", uma extens\xe3o de arquivo Windows de 1 a 3 caracteres ou um tipo de arquivo Macintosh associado a uma extens\xe3o Windows utilizando o comando ",(0,a.jsx)(r.em,{children:"_o_MAP FILE TYPES"}),"."]}),"\n",(0,a.jsxs)(r.p,{children:["Lembre chamar ",(0,a.jsx)(r.a,{href:"/docs/pt/commands/close-resource-file",children:"CLOSE RESOURCE FILE"})," para o arquivo de recursos. Note, entretanto, que 4D fecha automaticamente todos os arquivos de recursos abertos utilizando ",(0,a.jsx)(r.strong,{children:"Open resource file"}),"."]}),"\n",(0,a.jsxs)(r.p,{children:["Ao contr\xe1rio do comando ",(0,a.jsx)(r.a,{href:"/docs/pt/commands/open-document",children:"Open document"}),", que abre por padr\xe3o um documento com um acesso exclusivo em leitura escritura, ",(0,a.jsx)(r.strong,{children:"Open resource file"}),", permite abrir um arquivo de recursos j\xe1 aberto desde a sess\xe3o 4D. Por exemplo, se tentar abrir o mesmo documento duas vezes com ",(0,a.jsx)(r.a,{href:"/docs/pt/commands/open-document",children:"Open document"}),", um erro de E/S ser\xe1 devolvido na segunda tentativa. Por outro lado, se tentar abrir um arquivo de recursos j\xe1 aberto desde a sess\xe3o 4D, ",(0,a.jsx)(r.strong,{children:"Open resource file"})," devolver\xe1 seu n\xfamero de refer\xeancia. Mesmo se abrir um arquivo de recursos v\xe1rias vezes, necessita chamar ",(0,a.jsx)(r.a,{href:"/docs/pt/commands/close-resource-file",children:"CLOSE RESOURCE FILE"})," uma \xfanica vez para fechar esse arquivo. Note que este funcionamento \xe9 v\xe1lido apenas se o arquivo de recursos estiver aberto desde a sess\xe3o 4D; Se tentar abrir um arquivo de recursos j\xe1 aberto por outra aplica\xe7\xe3o, obter\xe1 um erro E/S."]}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"Advert\xeancia:"})}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"Est\xe1 proibido acessar aos arquivos de recursos das aplica\xe7\xf5es 4D e dos bancos fusionados com 4D Desktop."}),"\n",(0,a.jsx)(r.li,{children:"Mesmo que seja tecnicamente poss\xedvel, n\xe3o \xe9 recomend\xe1vel utilizar o arquivo de recursos da estrutura do banco porque seu c\xf3digo n\xe3o funcionar\xe1. Se o banco estiver compilado e fusionado com 4D Desktop."}),"\n",(0,a.jsx)(r.li,{children:"Entretanto, se acessar ao arquivo de recursos da estrutura e deseja adicionar, apagar ou modificar os recursos por programa\xe7\xe3o, tenha certeza de provar o ambiente no qual o banco \xe9 executado. Com 4D Server, isso provavelmente levar\xe1 a s\xe9rios problemas. Por exemplo, se modificar um recurso na m\xe1quina do servidor (atrav\xe9s de um m\xe9todo de banco de dados ou um procedimento armazenado), definitivamente afetar\xe1 o sistema de administra\xe7\xe3o integrado de 4D Server que distribui recursos (de manera transparente) \xe0s esta\xe7\xf5es de trabalho. Note que com 4D Client, voc\xea n\xe3o tem acesso direto ao arquivo de estrutura; est\xe1 localizado na m\xe1quina servidora."}),"\n",(0,a.jsx)(r.li,{children:"Por todas estas raz\xf5es, se utiliza os recursos, guarde-os em seus pr\xf3prios arquivos."}),"\n",(0,a.jsxs)(r.li,{children:["Quando trabalhe com seus pr\xf3prios recursos, n\xe3o utilize n\xfameros de recursos negativos; os n\xfameros negativos est\xe3o reservados para o sistema operativo. N\xe3o utilize n\xfameros de recursos entre 0 e 14.999; esta faixa est\xe1 reservada para 4D. Utilize a faixa entre 15.000 e 32.767 para seus pr\xf3prios recursos. Lembre que uma vez tenha aberto um arquivo de recursos, ser\xe1 o primeiro arquivo onde ser\xe1 pesquisado na string de arquivos de recursos. Um recurso nesse arquivo foi guardado com um n\xfamero que pertence \xe0s faixas reservadas para o Sistema ou para 4D, este recurso ser\xe1 utilizado n\xe3o apenas por comandos como ",(0,a.jsx)(r.a,{href:"/docs/pt/commands/get-resource",children:"GET RESOURCE"})," como tamb\xe9m por rotinas internas da aplica\xe7\xe3o 4D. Este pode poderia ser o resultado que voc\xea deseja obter, mas se n\xe3o tiver certeza, N\xc3O utilize estas faixas, j\xe1 que podem produzir erros do Sistema."]}),"\n",(0,a.jsxs)(r.li,{children:["Um arquivo de recursos \xe9 altamente estruturado e n\xe3o pode aceitar mais de 2.700 recursos por arquivo. Se deseja trabalhar com arquivos que contenham um grande n\xfamero de recursos, \xe9 recomend\xe1vel provar esse n\xfamero antes de adicionar novos recursos a um arquivo. Consulte os exemplos de Count resources na descri\xe7\xe3o do comando ",(0,a.jsx)(r.a,{href:"/docs/pt/commands/resource-type-list",children:"RESOURCE TYPE LIST"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(r.p,{children:["Quando tiver aberto um arquivo de recursos, pode analizar seu conte\xfado utilizando os comandos ",(0,a.jsx)(r.a,{href:"/docs/pt/commands/resource-type-list",children:"RESOURCE TYPE LIST"})," e ",(0,a.jsx)(r.a,{href:"/docs/pt/commands/resource-list",children:"RESOURCE LIST"}),"."]}),"\n",(0,a.jsx)(r.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,a.jsx)(r.p,{children:"O exemplo a seguir abre, em Windows, o arquivo de recursos \u201CMyPrefs.res\u201D localizado na pasta do banco:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-4d",children:'\xa0$vhResArquivo:=Open resource file("MinhasPrefs";"res ")\n'})}),"\n",(0,a.jsx)(r.p,{children:"Em Macintosh, o exemplo trata de abrir o arquivo \u201CMinhasPrefs\u201D."}),"\n",(0,a.jsx)(r.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,a.jsx)(r.p,{children:"O exemplo a seguir tenta abrir em Windows o arquivo de recursos \u201CMinhasPrefs.rsr\u201D localizado na pasta do banco:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-4d",children:'\xa0$vhResArchivo:=Open resource file("MinhasPrefs";"rsr")\n'})}),"\n",(0,a.jsx)(r.p,{children:"Em Mac OS, o exemplo tentar\xe1 abrir o arquivo \u201CMnhasPrefs\u201D."}),"\n",(0,a.jsx)(r.h4,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,a.jsx)(r.p,{children:"O exemplo a seguir mostra a caixa de di\xe1logo padr\xe3o de abertura de arquivos, na qual s\xe3o mostradas todos os tipos de documentos:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-4d",children:'\xa0$vhResArchivo:=Open resource file("")\n'})}),"\n",(0,a.jsx)(r.h4,{id:"exemplo-4",children:"Exemplo 4"}),"\n",(0,a.jsx)(r.p,{children:"O exemplo a seguir mostra a caixa de di\xe1logo padr\xe3o de abertura de arquivos, na qual apenas s\xe3o mostrados os documentos criados com a ajuda da fun\xe7\xe3o Create resource file, e que s\xe3o utilizadas o tipo padr\xe3o:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-4d",children:'\xa0$vhResArchivo:=Open resource file("";"res ")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0ALERT("Acaba de abrir\u201C"+Document+"\u201D.")\n\xa0\xa0\xa0\xa0CLOSE RESOURCE FILE($vhResArquivo)\n\xa0End if\n'})}),"\n",(0,a.jsx)(r.h4,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,a.jsx)(r.p,{children:"Se o arquivo de recursos for aberto corretamente, a vari\xe1vel sistema OK assume o valor 1. Se o arquivo de recursos n\xe3o puder ser aberto ou se o usu\xe1rio clicar em Cancelar na caixa de di\xe1logo padr\xe3o de abertura de arquivos, a vari\xe1vel OK assume o valor 0 (zero)."}),"\n",(0,a.jsx)(r.p,{children:"Se o arquivo de recursos for aberto corretamente usando a caixa de di\xe1logo padr\xe3o de abertura de arquivos, a vari\xe1vel sistema Document cont\xe9m a rota de acesso ao arquivo."}),"\n",(0,a.jsx)(r.h4,{id:"gest\xe3o-de-erros",children:"Gest\xe3o de erros"}),"\n",(0,a.jsxs)(r.p,{children:["Se o arquivo de recursos n\xe3o puder ser aberto por um problema do recurso ou de E/S, um erro \xe9 gerado. Pode interceptar esse erro com um m\xe9todo de gest\xe3o de erros instalado pelo comando ",(0,a.jsx)(r.a,{href:"/docs/pt/commands/on-err-call",title:"ON ERR CALL",children:"ON ERR CALL"}),"."]}),"\n",(0,a.jsx)(r.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.a,{href:"/docs/pt/commands/close-resource-file",children:"CLOSE RESOURCE FILE"}),(0,a.jsx)(r.br,{}),"\n",(0,a.jsx)(r.em,{children:"Recursos"})]}),"\n",(0,a.jsx)(r.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{}),(0,a.jsx)(r.th,{})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"N\xfamero do comando"}),(0,a.jsx)(r.td,{children:"497"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Thread-seguro"}),(0,a.jsx)(r.td,{children:"\u2717"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Modificar vari\xe1veis"}),(0,a.jsx)(r.td,{children:"OK, Document, error"})]})]})]})]})}function l(e={}){let{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},250065:function(e,r,o){o.d(r,{Z:function(){return d},a:function(){return i}});var s=o(667294);let a={},n=s.createContext(a);function i(e){let r=s.useContext(n);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(n.Provider,{value:r},e.children)}}}]);