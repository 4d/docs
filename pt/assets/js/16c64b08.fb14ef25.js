"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["6560"],{497898:function(e,o,a){a.r(o),a.d(o,{default:()=>m,frontMatter:()=>d,metadata:()=>s,assets:()=>t,toc:()=>c,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/select-document","title":"Select document","description":"Select document ( diretorio ; tipoArquivos ; titulo ; op\xe7oes {; selecionados} ) : Text","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/select-document.md","sourceDirName":"commands-legacy","slug":"/commands/select-document","permalink":"/docs/pt/commands/select-document","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fselect-document.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"select-document","title":"Select document","slug":"/commands/select-document","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RESOLVE ALIAS","permalink":"/docs/pt/commands/resolve-alias"},"next":{"title":"Select folder","permalink":"/docs/pt/commands/select-folder"}}'),n=a("785893"),r=a("250065");let d={id:"select-document",title:"Select document",slug:"/commands/select-document",displayed_sidebar:"docs"},i=void 0,t={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let o={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Select document"})," ( ",(0,n.jsx)(o.em,{children:"diretorio"})," ; ",(0,n.jsx)(o.em,{children:"tipoArquivos"})," ; ",(0,n.jsx)(o.em,{children:"titulo"})," ; ",(0,n.jsx)(o.em,{children:"op\xe7oes"})," {; ",(0,n.jsx)(o.em,{children:"selecionados"}),"} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"Par\xe2metro"}),(0,n.jsx)(o.th,{children:"Tipo"}),(0,n.jsx)(o.th,{}),(0,n.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,n.jsxs)(o.tbody,{children:[(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"diretorio"}),(0,n.jsx)(o.td,{children:"Text, Integer"}),(0,n.jsx)(o.td,{children:"\u2192"}),(0,n.jsx)(o.td,{children:'Rota de acesso do diret\xf3rio a exibir na caixa de di\xe1logo de sele\xe7\xe3o de documentos, ou String vazia para exibir a pasta de usu\xe1rio padr\xe3o ("Meus documentos" em Windows e "Documentos" em Mac OS) ou N\xfamero da rota de acesso memorizada.'})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"tipoArquivos"}),(0,n.jsx)(o.td,{children:"Text"}),(0,n.jsx)(o.td,{children:"\u2192"}),(0,n.jsx)(o.td,{children:'Lista de tipos de documentos a filtrar, ou "*" para n\xe3o filtrar os documentos'})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"titulo"}),(0,n.jsx)(o.td,{children:"Text"}),(0,n.jsx)(o.td,{children:"\u2192"}),(0,n.jsx)(o.td,{children:"T\xedtulo da caixa de di\xe1logo de sele\xe7\xe3o"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"op\xe7oes"}),(0,n.jsx)(o.td,{children:"Integer"}),(0,n.jsx)(o.td,{children:"\u2192"}),(0,n.jsx)(o.td,{children:"Op\xe7\xf5es de sele\xe7\xe3o"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"selecionados"}),(0,n.jsx)(o.td,{children:"Text array"}),(0,n.jsx)(o.td,{children:"\u2190"}),(0,n.jsx)(o.td,{children:"Array que cont\xe9m a lista de rotas de acesso + nomes dos arquivos selecionados"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"Resultado"}),(0,n.jsx)(o.td,{children:"Text"}),(0,n.jsx)(o.td,{children:"\u2190"}),(0,n.jsx)(o.td,{children:"Nome dos arquivos selecionados (primeiro arquivo da lista em caso de sele\xe7\xe3o m\xfaltipla)"})]})]})]}),"\n",(0,n.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsx)(o.p,{children:"O comando Select document mostra uma caixa de di\xe1logo padr\xe3o de abertura de documentos, permitindo ao usu\xe1rio definir um ou mais arquivos e devolver o nome e/ou rota de acesso completa dos arquivos selecionados."}),"\n",(0,n.jsx)(o.p,{children:"O par\xe2metro diret\xf3rio indica a pasta cujo conte\xfado deve ser mostrado inicialmente na caixa de di\xe1logo de abertura de documentos. Pode passar tr\xeas tipos de valores:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"um texto que contenha a rota de acesso completa do diret\xf3rio a mostrar."}),"\n",(0,n.jsx)(o.li,{children:'uma string vazia ("") para mostrar a pasta do usu\xe1rio por padr\xe3o do sistema (\u201CMeus documentos\u201D em Windows, \u201CDocumentos\u201D em Mac OS).'}),"\n",(0,n.jsx)(o.li,{children:"um n\xfamero de rota de acesso memorizada (de 1 a 32.000) para mostrar a pasta associada."}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"Com este princ\xedpio, pode armazenar em mem\xf3ria a rota de acesso da pasta aberta no momento em que o usu\xe1rio faz clique no bot\xe3o de sele\xe7\xe3o, em outras palavras, a pasta selecionada pelo usu\xe1rio. Durante a primeira chamada de um n\xfamero arbitr\xe1rio (por exemplo, 5) o comando mostra a pasta usu\xe1rio por padr\xe3o do sistema operativo (equivalente a passar uma string vazia). O usu\xe1rio poder\xe1 navegar as pastas no disco duro. Quando o usu\xe1rio clicar no bot\xe3o de sele\xe7\xe3o, a rota de acesso \xe9 memorizada e associa ao n\xfamero 5. Durante as seguintes chamadas ao n\xfamero 5, a rota de acesso memorizada ser\xe1 utilizada por padr\xe3o. Caso seja selecionada uma nova localiza\xe7\xe3o, a rota n\xfamero 5 \xe9 atualizada."}),"\n",(0,n.jsx)(o.p,{children:"Este mecanismo lhe permite memorizar at\xe9 32.000 rotas de acesso. Em Windows, cada rota se conserva apenas durante a sess\xe3o. Em Mac OS, as rotas s\xe3o conservadas pelo sistema e permanecem armazenadas de uma sess\xe3o a outra."}),"\n",(0,n.jsxs)(o.p,{children:["Nota: este mecanismo \xe9 o mesmo que o utilizado pelo comando ",(0,n.jsx)(o.a,{href:"/docs/pt/commands/select-folder",children:"Select folder"}),".. Os n\xfameros das rotas de acesso memorizadas s\xe3o compartidos por ambos comandos."]}),"\n",(0,n.jsxs)(o.p,{children:['Passe no par\xe2metro tiposArquivos os tipo(s) de arquivo(s) que podem ser selecionados na caixa de di\xe1logo de abertura. Pode passar uma lista de v\xe1rios tipos separados por um ";" (ponto e v\xedrgula). Para cada tipo definido, uma fila ser\xe1 adicionada no men\xfa de sele\xe7\xe3o do tipo da caixa de di\xe1logo.',(0,n.jsx)(o.br,{}),'\nEm Mac OS, pode passar um tipo Mac OS cl\xe1ssico (TEXT, APPL, etc.), ou um tipo UTI (Uniform Tipo Identifier). Os tipos UTIs s\xe3o definidos por Apple para cumprir com as necessidades de padroniza\xe7\xe3o de tipos de arquivos. Por exemplo, "public.text" \xe9 o tipo UTI dos arquivos de tipo texto. Para maior informa\xe7\xe3o sobre UTIs, consulte o seguinte endere\xe7o: ',(0,n.jsx)(o.em,{children:(0,n.jsx)(o.a,{href:"https://developer.apple.com/library/ios/documentation/FileManagement/Conceptual/understanding%5C_utis/understand%5C_utis%5C_conc/understand%5C_utis%5C_conc.html",children:"https://developer.apple.com/library/ios/documentation/FileManagement/Conceptual/understanding\\_utis/understand\\_utis\\_conc/understand\\_utis\\_conc.html"})}),"."]}),"\n",(0,n.jsx)(o.p,{children:"Em Windows, pode tamb\xe9m passar um tipo de arquivo cl\xe1ssico Mac OS, 4D realiza a correspond\xeancia internamente ou a extens\xe3o de arquivos (.txt, .exe, etc.). Note que em Windows, o usu\xe1rio pode \u201Cfor\xe7ar\u201D a visualiza\xe7\xe3o de todos os tipos de arquivos introduzindo *.* na caixa de di\xe1logo. Entretanto, neste caso, 4D efetuar\xe1 uma verifica\xe7\xe3o adicional dos tipos de arquivos selecionados: se o usu\xe1rio selecionar um tipo de arquivo n\xe3o autorizado, o comando retorna um erro."}),"\n",(0,n.jsx)(o.p,{children:'Se n\xe3o desejar restringir os arquivos mostrados a um ou mais tipos, passe "*" (asterisco) ou ".*" em tiposArquivos.'}),"\n",(0,n.jsx)(o.p,{children:"Passe no par\xe2metro t\xedtulo a etiqueta que deve aparecer na caixa de di\xe1logo. Por padr\xe3o, se passar uma string vazia, se mostra a etiqueta \u201CAbrir\u201D."}),"\n",(0,n.jsxs)(o.p,{children:["O par\xe2metro op\xe7\xf5es permite especificar fun\xe7\xf5es avan\xe7adas autorizadas na caixa de di\xe1logo de abertura. 4D oferece as seguintes constantes pr\xe9-definidas no tema ",(0,n.jsx)(o.em,{children:"Documentos Sistema"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"Constante"}),(0,n.jsx)(o.th,{children:"Tipo"}),(0,n.jsx)(o.th,{children:"Valor"}),(0,n.jsx)(o.th,{children:"Coment\xe1rio"})]})}),(0,n.jsxs)(o.tbody,{children:[(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"Allow alias files"}),(0,n.jsx)(o.td,{children:"Inteiro longo"}),(0,n.jsx)(o.td,{children:"8"}),(0,n.jsx)(o.td,{children:"Autoriza a sele\xe7\xe3o de atalhos (Windows) ou de alias (Mac OS) como documentos.Por padr\xe3o, se n\xe3o \xe9 utilizada esta constante, quando um alias ou atalho seja selecionado, o comando retornar\xe1 a rota de acesso do elemento objetivo. Quando passe a constante, o comando retorna a rota do alias ou do atalho."})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"File name entry"}),(0,n.jsx)(o.td,{children:"Inteiro longo"}),(0,n.jsx)(o.td,{children:"32"}),(0,n.jsx)(o.td,{children:'Permite ao usu\xe1rio introduzir um nome de arquivo na caixa de di\xe1logo "Guardar como". N\xe3o s\xe3o guardados os arquivos, o desenvolvedor dever\xe1 criar um arquivo em resposta a esta a\xe7\xe3o (a vari\xe1vel do sistema Documento \xe9 atualizada) Neste contexto, o par\xe2metro diret\xf3rio pode conter a via a um arquivo em lugar de a um diret\xf3rio. O nome do arquivo ser\xe1 utilizado como nome de arquivo sugerido no campo de texto Guardar como. O diret\xf3rio pai ser\xe1 utilizado como via por padr\xe3o.'})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"Multiple files"}),(0,n.jsx)(o.td,{children:"Inteiro longo"}),(0,n.jsx)(o.td,{children:"1"}),(0,n.jsx)(o.td,{children:"Autoriza a sele\xe7\xe3o simult\xe2nea de v\xe1rios arquivos utilizando as combina\xe7\xf5es Shift+clique (sele\xe7\xe3o adjacente) e Ctrl+clique (Windows) ou Comando+clique (Mac OS). Neste caso, o par\xe2metro selecionado, se for passado, cont\xe9m a lista de todos os arquivos selecionados. por padr\xe3o, se esta constante n\xe3o for utilizada, o comando n\xe3o permitir\xe1 a sele\xe7\xe3o de m\xfaltiplos arquivos."})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"Package open"}),(0,n.jsx)(o.td,{children:"Inteiro longo"}),(0,n.jsx)(o.td,{children:"2"}),(0,n.jsx)(o.td,{children:"(Somente Mac OS): autoriza a apertura de pacotes como pastas e assim a visualiza\xe7\xe3o/sele\xe7\xe3o dos seus conte\xfados. Por padr\xe3om e n\xe3o for utilizada esta constante, o comando n\xe3o permitir\xe1 a abertura de pacotes."})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"Package selection"}),(0,n.jsx)(o.td,{children:"Inteiro longo"}),(0,n.jsx)(o.td,{children:"4"}),(0,n.jsx)(o.td,{children:"(Somente Mac OS): autoriza a sele\xe7\xe3o de pacotes como entidades (como padr\xe3o \xe9 omitido). Utilize Package open se quiser permitir que os usu\xe1rios visualizem/selecionem conte\xfados do pacote."})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"Use sheet window"}),(0,n.jsx)(o.td,{children:"Inteiro longo"}),(0,n.jsx)(o.td,{children:"16"}),(0,n.jsxs)(o.td,{children:["(Somente Mac OS): mostra a caixa de di\xe1logo de sele\xe7\xe3o na forma de uma janela folha (esta op\xe7\xe3o \xe9 ignorada no Windows).As janelas folha s\xe3o especificas para o Mac OS X com anima\xe7\xe3o gr\xe1fica (para mais informa\xe7\xe3o consulte a se\xe7\xe3o ",(0,n.jsx)(o.em,{children:"Tipos de Janelas"}),"). Por padr\xe3o, se esta constante n\xe3o \xe9 utilizada, o comando mostrar\xe1 uma caixa de di\xe1logo padr\xe3o."]})]})]})]}),"\n",(0,n.jsx)(o.p,{children:"Se n\xe3o quer utilizar uma op\xe7\xe3o, passe 0 no par\xe2metro op\xe7\xf5es. O par\xe2metro opcional selecionados lhe permite obter a rota de acesso completa (rota de acesso + nome) de cada arquivo selecionado pelo usu\xe1rio. O comando cria, dimensiona e preenche o array de acordo com a sele\xe7\xe3o do usu\xe1rio. Este par\xe2metro \xe9 \xfatil quando a op\xe7\xe3o Multiple files for utilizada ou quando deseja conhecer a rota de acesso do arquivo selecionado (simplesmente tome o nome do arquivo devolvido pelo comando do valor do array). Se nenhum arquivo estiver selecionado, o array se retorna vazio."}),"\n",(0,n.jsx)(o.p,{children:'Nota: em Mac OS, um pacote selecionado se considera como sendo uma pasta. A rota de acesso retornada no array selecionados inclui um caractere final ":" . Por exemplo: Disk:Applications:4D:4D v11.4:US:4D Volume Desktop.app:'}),"\n",(0,n.jsx)(o.p,{children:"O comando retorna o nome (nome + extens\xe3o em Windows) do arquivo selecionado. Se forem selecionados v\xe1rios arquivos, o comando retorna o nome do primeiro arquivo da lista de arquivos selecionados. A lista de arquivos pode ser recuperada no par\xe2metro selecionados. Se nenhum arquivo for selecionado, o comando retorna uma string vazia."}),"\n",(0,n.jsx)(o.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,n.jsx)(o.p,{children:"Este exemplo \xe9 utilizado para especificar um arquivo de dados 4D:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:'\xa0var $plataforma : Integer\n\xa0PLATFORM PROPERTIES($plataforma)\n\xa0If($plataforma=Windows)\n\xa0\xa0\xa0\xa0$DocTipo:=".4DD"\n\xa0Else\n\xa0\xa0\xa0\xa0$DocTipo:="com.4d.4d.data-file"\xa0//UTI type\n\xa0End if\n\xa0$Op\xe7\xf5es:=Allow alias files+Package open+Use sheet window\n\xa0$Doc:=Select document("";$DocTipo;"Selecionar o arquivo de dados";$Op\xe7\xf5es)\n'})}),"\n",(0,n.jsx)(o.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,n.jsx)(o.p,{children:"Cria\xe7\xe3o de um documento personalizado pelo usu\xe1rio:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:'\xa0$doc:=Select document(System folder(Documents folder)+"Report.pdf";"pdf";"Report name:";File name entry)\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0BLOB TO DOCUMENT(Document;$blob)\xa0// $blob cont\xe9m o documento a registrar\n\xa0End if\n'})}),"\n",(0,n.jsx)(o.h4,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,n.jsx)(o.p,{children:"Se o comando for executado corretamente e for selecionado um documento v\xe1lido, a vari\xe1vel sistema OK toma o valor 1 e a vari\xe1vel sistema Document conter\xe1 a rota de acesso completa do arquivo selecionado."}),"\n",(0,n.jsxs)(o.p,{children:["Se n\xe3o for selecionado nenhum arquivo (por exemplo, se o usu\xe1rio clicar no bot\xe3o ",(0,n.jsx)(o.strong,{children:"Cancelar"})," na caixa de di\xe1logo de abertura de arquivos), a vari\xe1vel sistema OK toma o valor 0 e a vari\xe1vel Document estar\xe1 vazia."]}),"\n",(0,n.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.a,{href:"/docs/pt/commands/open-document",children:"Open document"}),(0,n.jsx)(o.br,{}),"\n",(0,n.jsx)(o.a,{href:"/docs/pt/commands/select-folder",children:"Select folder"})]}),"\n",(0,n.jsx)(o.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{}),(0,n.jsx)(o.th,{})]})}),(0,n.jsxs)(o.tbody,{children:[(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"N\xfamero do comando"}),(0,n.jsx)(o.td,{children:"905"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"Thread-seguro"}),(0,n.jsx)(o.td,{children:"\u2713"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"Modificar vari\xe1veis"}),(0,n.jsx)(o.td,{children:"OK, Document, error"})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},250065:function(e,o,a){a.d(o,{Z:function(){return i},a:function(){return d}});var s=a(667294);let n={},r=s.createContext(n);function d(e){let o=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),s.createElement(r.Provider,{value:o},e.children)}}}]);