"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[25612],{596954:(a,o,e)=>{e.r(o),e.d(o,{assets:()=>i,contentTitle:()=>t,default:()=>l,frontMatter:()=>d,metadata:()=>n,toc:()=>c});var r=e(474848),s=e(28453);const d={id:"compact-data-file",title:"Compact data file",slug:"/commands/compact-data-file",displayed_sidebar:"docs"},t=void 0,n={id:"commands-legacy/compact-data-file",title:"Compact data file",description:"Compact data file ( endEstrutura ; endDados {; pastaArquivo {; op\xe7ao {; metodo}}} ) -> Resultado",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/compact-data-file.md",sourceDirName:"commands-legacy",slug:"/commands/compact-data-file",permalink:"/docs/pt/commands/compact-data-file",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcompact-data-file.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"compact-data-file",title:"Compact data file",slug:"/commands/compact-data-file",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"BUILD APPLICATION",permalink:"/docs/pt/commands/build-application"},next:{title:"COMPONENT LIST",permalink:"/docs/pt/commands/component-list"}},i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function m(a){const o={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...a.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Compact data file"})," ( ",(0,r.jsx)(o.em,{children:"endEstrutura"})," ; ",(0,r.jsx)(o.em,{children:"endDados"})," {; ",(0,r.jsx)(o.em,{children:"pastaArquivo"})," {; ",(0,r.jsx)(o.em,{children:"op\xe7ao"})," {; ",(0,r.jsx)(o.em,{children:"metodo"}),"}}} ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{children:"Par\xe2metro"}),(0,r.jsx)(o.th,{children:"Tipo"}),(0,r.jsx)(o.th,{}),(0,r.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"endEstrutura"}),(0,r.jsx)(o.td,{children:"Text"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"Endere\xe7o de acesso ao arquivo de estrutura"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"endDados"}),(0,r.jsx)(o.td,{children:"Text"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"Endere\xe7o de acesso ao arquivo de dados"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"pastaArquivo"}),(0,r.jsx)(o.td,{children:"Text"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"Endere\xe7o de acesso a pasta onde ser\xe1 colocado o arquivo de dados original"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"op\xe7ao"}),(0,r.jsx)(o.td,{children:"Integer"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"Op\xe7\xf5es de compacta\xe7\xe3o"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"metodo"}),(0,r.jsx)(o.td,{children:"Text"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"Nome do m\xe9todo 4D de retrochamada"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Resultado"}),(0,r.jsx)(o.td,{children:"Text"}),(0,r.jsx)(o.td,{children:"\u2190"}),(0,r.jsx)(o.td,{children:"Endere\xe7o de acesso completo \xe0 pasta que cont\xe9m o arquivo de dados original"})]})]})]}),"\n",(0,r.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(o.p,{children:["O comando ",(0,r.jsx)(o.strong,{children:"Compact data file"})," [# descv] compacta o arquivo de dados designado pelo par\xe2metro ",(0,r.jsx)(o.em,{children:"endere\xe7oDados"})," associado com o arquivo de estrutura ",(0,r.jsx)(o.em,{children:"endere\xe7oEstrutura"}),". [#/ descv] Para mais informa\xe7\xf5es sobre compacta\xe7\xe3o, consulte o manual de Design."]}),"\n",(0,r.jsx)(o.p,{children:'Para assegurar a continuidade da opera\xe7\xe3o do banco de dados, os novos dados de arquivos compactados automaticamente substituem o arquivo original. Por raz\xf5es de seguran\xe7a, o arquivo original n\xe3o \xe9 modificado e \xe9 movido para uma pasta especial chamada "Replaced files (compacting) AAAA-MM-DD HH-MM-SS", onde AAAA-MM-DD HH-MM-SS representa a data e hora do backup. Por exemplo: "Replaced files (compacting) 2007/09/27 15-20-35"'}),"\n",(0,r.jsxs)(o.p,{children:["O comando retorna o caminho completo da pasta realmente criado para armazenar os dados do arquivo original. Este comando s\xf3 pode ser executado a partir de 4D (modo local) ou 4D Server (stored procedure). Os arquivo de dados a ser compactado deve corresponder \xe0 estrutura do arquivo designado pela ",(0,r.jsx)(o.em,{children:"endere\xe7oEstrutura"}),". Al\xe9m disso, o arquivo de dados n\xe3o deve ser aberto quando o comando \xe9 executado, caso contr\xe1rio um erro \xe9 gerado."]}),"\n",(0,r.jsx)(o.p,{children:"Se ocorrer um erro durante o processo de compacta\xe7\xe3o, os arquivos originais s\xe3o mantidos em sua posi\xe7\xe3o inicial. Se um arquivo de \xedndice (arquivo .4DIndx ) \xe9 associado com o arquivo de dados, ele tamb\xe9m \xe9 compactado. Tal como acontece com os dados, o arquivo original est\xe1 salvo e a nova vers\xe3o compactada substitui a anterior."}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:["No par\xe2metro ",(0,r.jsx)(o.em,{children:"endere\xe7oEstrutura"}),", passe o caminho completo da estrutura do arquivo associado ao arquivo de dados que voc\xea deseja compactar. Esta informa\xe7\xe3o \xe9 necess\xe1ria para o processo de compacta\xe7\xe3o. O caminho deve ser expresso na sintaxe do sistema operacional. Voc\xea tamb\xe9m pode passar uma string vazia, neste caso, a caixa de di\xe1logo padr\xe3o de abrir arquivos aparece para que voc\xea possa designar a estrutura do arquivo a ser utilizado."]}),"\n",(0,r.jsxs)(o.li,{children:["No par\xe2metro ",(0,r.jsx)(o.em,{children:"endere\xe7oDados"}),", voc\xea pode passar uma string vazia, um nome de arquivo ou um caminho completo, expresso na sintaxe do sistema operacional. Se voc\xea passar uma string vazia, a caixa de di\xe1logo padr\xe3o de abrir arquivos aparece para que o usu\xe1rio possa selecionar os dados do arquivo a ser compactado. Este arquivo deve corresponder \xe0 estrutura do arquivo definido no par\xe2metro ",(0,r.jsx)(o.em,{children:"endere\xe7oEstrutura"}),". Se voc\xea s\xf3 passar o nome do arquivo de dados, 4D vai procur\xe1-la no mesmo n\xedvel da estrutura de arquivo."]}),"\n",(0,r.jsxs)(o.li,{children:['O par\xe2metro opcional pastaArquivo pode ser usado para especificar a localiza\xe7\xe3o da pasta "Replaced files (compacting) DateTime" destinada a receber as vers\xf5es originais dos arquivos de dados, bem como todos os arquivos de \xedndice.',(0,r.jsx)(o.br,{}),"\nO comando retorna o caminho completo da pasta criada.",(0,r.jsx)(o.br,{}),'\n- Se voc\xea omitir esse par\xe2metro, os arquivos originais s\xe3o automaticamente colocados em na pasta "Replaced files (compacting) DateTime" que \xe9 criada ao lado da estrutura de arquivo.',(0,r.jsx)(o.br,{}),"\n- Se voc\xea passar uma string vazia, uma caixa de di\xe1logo padr\xe3o de Abrir pasta ir\xe1 aparecer para que o usu\xe1rio possa especificar a localiza\xe7\xe3o da pasta a ser criada.",(0,r.jsx)(o.br,{}),'\n- Se voc\xea passar um endere\xe7o (expresso na sintaxe do sistema operacional), o comando vai criar uma pasta "Replaced files (compacting) DateTime" neste local.']}),"\n",(0,r.jsxs)(o.li,{children:["O par\xe2metro opcional ",(0,r.jsx)(o.em,{children:"op\xe7\xf5es"})," \xe9 usado para definir v\xe1rias op\xe7\xf5es de compacta\xe7\xe3o. Para fazer isso, use as seguintes constantes, encontradas no tema ",(0,r.jsx)(o.em,{children:"Manuten\xe7\xe3o do arquivo de dados"}),". Voc\xea pode passar v\xe1rias op\xe7\xf5es, combinando-as:",(0,r.jsx)(o.br,{}),"\n| Constante               | Tipo          | Valor  | Coment\xe1rio                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |",(0,r.jsx)(o.br,{}),"\n| ----------------------- | ------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |",(0,r.jsx)(o.br,{}),"\n| Compact address table   | Inteiro longo | 131072 | For\xe7ar a reescrever os registros de endere\xe7o tabela (compacta\xe7\xe3o lenta). Se voc\xea apenas passar esta op\xe7\xe3o, 4D ativa automaticamente a op\xe7\xe3o \"Atualizar Registros '. Note que neste caso, os n\xfameros de registro s\xe3o reescritos.                                                                                                                                                                                                                                                          |",(0,r.jsx)(o.br,{}),"\n| Create process          | Inteiro longo | 32768  | Quando se passa esta op\xe7\xe3o, a compacta\xe7\xe3o ser\xe1 assincr\xf4nica e dever\xe1 administrar os resultados utilizando o m\xe9todo de retrochamada (ver a continua\xe7\xe3o). 4D n\xe3o mostrar\xe1 a barra de progresso (\xe9 poss\xedvel fazer isso atrav\xe9s do m\xe9todo de retrochamada). A vari\xe1vel sistema OK toma o valor 1 se o processo for lan\xe7ado corretamente e 0 em todos os outros casos. Quando n\xe3o se passa esta op\xe7\xe3o, a vari\xe1vel OK toma o valor 1 se a compacta\xe7\xe3o se realiza corretamente, do contr\xe1rio 0. |",(0,r.jsx)(o.br,{}),"\n| Do not create log file  | Inteiro longo | 16384  | Geralmente, esse comando cria um arquivo de hist\xf3rico em formato XML (veja o final da descri\xe7\xe3o do comando). Voc\xea pode cancelar esta opera\xe7\xe3o a partir desta op\xe7\xe3o.                                                                                                                                                                                                                                                                                                                      |",(0,r.jsx)(o.br,{}),"\n| Timestamp log file name | Inteiro longo | 262144 | Quando esta op\xe7\xe3o for passada, o nome do arquivo de hist\xf3rico gerado conter\xe1 a data e a hora de sua cria\xe7\xe3o; como resulado, n\xe3o substituir\xe1 nenhum arquivo de hist\xf3rico gerado anteriormente. Como padr\xe3o, se esta op\xe7\xe3o n\xe3o for passada, os nomes de arquivo de hist\xf3rico n\xe3o ter\xe3o uma timestamp e cada novo arquivo gerado vai substituir o anterior.                                                                                                                                 |",(0,r.jsx)(o.br,{}),"\n| Update records          | Inteiro longo | 65536  | For\xe7a a reescrita de todos os registros ap\xf3s a atual defini\xe7\xe3o de campos na estrutura.                                                                                                                                                                                                                                                                                                                                                                                                   |"]}),"\n",(0,r.jsxs)(o.li,{children:["O par\xe2metro metodo \xe9 usado para definir um m\xe9todo de callback que ser\xe1 chamado com durante a compacta\xe7\xe3o, se a op\xe7\xe3o Create process for passada. Caso contr\xe1rio, o m\xe9todo de callback nunca \xe9 chamado. Para obter mais informa\xe7\xf5es sobre este m\xe9todo, consulte a descri\xe7\xe3o do comando ",(0,r.jsx)(o.a,{href:"/docs/pt/commands/verify-data-file",children:"VERIFY DATA FILE"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(o.p,{children:["Por padr\xe3o, o comando ",(0,r.jsx)(o.strong,{children:"Compact data file"}),' cria um arquivo de log no formato XML (se voc\xea n\xe3o tiver passado a op\xe7\xe3o Do not create log file, consulte o par\xe2metro op\xe7\xf5es). Seu nome \xe9 baseado no arquivo de dados e \xe9 colocado pr\xf3ximo a esse arquivo. Por exemplo, para um arquivo de dados chamado "data.4dd", o arquivo de log ser\xe1 nomeado "data_compact_log.xml"']}),"\n",(0,r.jsx)(o.p,{children:'Se tiver passado a op\xe7\xe3o Timestamp o nome do arquivo de hist\xf3rico inclui a data e a hora de sua cria\xe7\xe3o na forma "AAAA-MM-DD HH-MM-SS", o que nos d\xe1, por exemplo: \u201cmyDB_Compact_Log_2015-09-27 15-20-35.xml\u201d. Isto significa que cada novo arquivo de hist\xf3rico n\xe3o substitui ao anterior, mas poderia exigir a\xe7\xe3o manual posterior para eliminar arquivos desnecess\xe1rios. Independentemente da op\xe7\xe3o selecionada, logo que for gerado um arquivo de hist\xf3rico, sua trajet\xf3ria se devolve na vari\xe1vel sistema Document depois da execu\xe7\xe3o do comando.'}),"\n",(0,r.jsx)(o.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(o.p,{children:"O exemplo a seguir (Windows) efetua a compacta\xe7\xe3o de um arquivo de dados:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:'\xa0$arquivoEstrutura:=Structure file\n\xa0$arquivoDados:="C:\\Bancos\\Faturas\\Janeiro\\Faturas.4dd"\n\xa0$arquivoOrig:="C:\\Bancos\\Faturas\\Arquivos\\Janeiro\\"\n\xa0$pastaArqu:=Compact data file($arquivoEstrutura;$arquivoDados;$arquivoOrig)\n'})}),"\n",(0,r.jsx)(o.h4,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,r.jsxs)(o.p,{children:["Se a opera\xe7\xe3o de compacta\xe7\xe3o foi realizada corretamente, a vari\xe1vel sistema OK recebe o valor 1, caso contr\xe1rio, recebe o valor 0.",(0,r.jsx)(o.br,{}),"\nSe um arquivo de hist\xf3rico for gerado, seu nome de caminho completo \xe9 retornado na vari\xe1vel de sistema Document."]}),"\n",(0,r.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.a,{href:"/docs/pt/commands/table-fragmentation",children:"Table fragmentation"}),(0,r.jsx)(o.br,{}),"\n",(0,r.jsx)(o.a,{href:"/docs/pt/commands/verify-data-file",children:"VERIFY DATA FILE"})]})]})}function l(a={}){const{wrapper:o}={...(0,s.R)(),...a.components};return o?(0,r.jsx)(o,{...a,children:(0,r.jsx)(m,{...a})}):m(a)}},28453:(a,o,e)=>{e.d(o,{R:()=>t,x:()=>n});var r=e(296540);const s={},d=r.createContext(s);function t(a){const o=r.useContext(d);return r.useMemo((function(){return"function"==typeof a?a(o):{...o,...a}}),[o,a])}function n(a){let o;return o=a.disableParentContext?"function"==typeof a.components?a.components(s):a.components||s:t(a.components),r.createElement(d.Provider,{value:o},a.children)}}}]);