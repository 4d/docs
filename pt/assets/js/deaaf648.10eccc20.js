"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[75034],{603905:(a,e,o)=>{o.d(e,{Zo:()=>p,kt:()=>m});var r=o(667294);function t(a,e,o){return e in a?Object.defineProperty(a,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):a[e]=o,a}function i(a,e){var o=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),o.push.apply(o,r)}return o}function s(a){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?i(Object(o),!0).forEach((function(e){t(a,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(o,e))}))}return a}function n(a,e){if(null==a)return{};var o,r,t=function(a,e){if(null==a)return{};var o,r,t={},i=Object.keys(a);for(r=0;r<i.length;r++)o=i[r],e.indexOf(o)>=0||(t[o]=a[o]);return t}(a,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(r=0;r<i.length;r++)o=i[r],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(a,o)&&(t[o]=a[o])}return t}var d=r.createContext({}),u=function(a){var e=r.useContext(d),o=e;return a&&(o="function"==typeof a?a(e):s(s({},e),a)),o},p=function(a){var e=u(a.components);return r.createElement(d.Provider,{value:e},a.children)},c={inlineCode:"code",wrapper:function(a){var e=a.children;return r.createElement(r.Fragment,{},e)}},l=r.forwardRef((function(a,e){var o=a.components,t=a.mdxType,i=a.originalType,d=a.parentName,p=n(a,["components","mdxType","originalType","parentName"]),l=u(o),m=t,v=l["".concat(d,".").concat(m)]||l[m]||c[m]||i;return o?r.createElement(v,s(s({ref:e},p),{},{components:o})):r.createElement(v,s({ref:e},p))}));function m(a,e){var o=arguments,t=e&&e.mdxType;if("string"==typeof a||t){var i=o.length,s=new Array(i);s[0]=l;var n={};for(var d in e)hasOwnProperty.call(e,d)&&(n[d]=e[d]);n.originalType=a,n.mdxType="string"==typeof a?a:t,s[1]=n;for(var u=2;u<i;u++)s[u]=o[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}l.displayName="MDXCreateElement"},338378:(a,e,o)=>{o.r(e),o.d(e,{assets:()=>u,contentTitle:()=>n,default:()=>l,frontMatter:()=>s,metadata:()=>d,toc:()=>p});o(667294);var r=o(603905);function t(){return t=Object.assign||function(a){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(a[r]=o[r])}return a},t.apply(this,arguments)}function i(a,e){if(null==a)return{};var o,r,t=function(a,e){if(null==a)return{};var o,r,t={},i=Object.keys(a);for(r=0;r<i.length;r++)o=i[r],e.indexOf(o)>=0||(t[o]=a[o]);return t}(a,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(r=0;r<i.length;r++)o=i[r],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(a,o)&&(t[o]=a[o])}return t}const s={id:"log",title:"Arquivo de Log (.journal)"},n=void 0,d={unversionedId:"Backup/log",id:"version-20-R4/Backup/log",title:"Arquivo de Log (.journal)",description:"Um banco de dados de uso continuo sempre registra mudan\xe7as, adi\xe7\xf5es ou apagamentos. Realizar backups ou c\xf3pias de seguran\xe7a regularmente \xe9 importante mas lembre que n\xe3o permite (em caso de problemas) restaurar os dados registrados depois do \xfaltimo backup. Para responder \xe0 essa necessidade, 4D oferece agora uma ferramenta espec\xedfica: o arquivo de log. Este arquivo permite garantir a seguran\xe7a permanente dos dados do banco de dados. Este arquivo permite garantir a seguran\xe7a permanente dos dados do banco de dados.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R4/Backup/log.md",sourceDirName:"Backup",slug:"/Backup/log",permalink:"/docs/pt/Backup/log",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Backup%2Flog.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"log",title:"Arquivo de Log (.journal)"},sidebar:"docs",previous:{title:"Backups peri\xf3dicos",permalink:"/docs/pt/Backup/settings"},next:{title:"Restaurar um backup",permalink:"/docs/pt/Backup/restore"}},u={},p=[{value:"como o arquivo de hist\xf3rico funciona",id:"como-o-arquivo-de-hist\xf3rico-funciona",level:2},{value:"Criar o arquivo de hist\xf3rico",id:"criar-o-arquivo-de-hist\xf3rico",level:2},{value:"Configura\xe7\xf5es do arquivo de registro",id:"configura\xe7\xf5es-do-arquivo-de-registro",level:2},{value:"Parando um arquivo de log",id:"parando-um-arquivo-de-log",level:2}],c={toc:p};function l(a){var{components:e}=a,s=i(a,["components"]);return(0,r.kt)("wrapper",t({},c,s,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Um banco de dados de uso continuo sempre registra mudan\xe7as, adi\xe7\xf5es ou apagamentos. Realizar backups ou c\xf3pias de seguran\xe7a regularmente \xe9 importante mas lembre que n\xe3o permite (em caso de problemas) restaurar os dados registrados depois do \xfaltimo backup. Para responder \xe0 essa necessidade, 4D oferece agora uma ferramenta espec\xedfica: o arquivo de log. Este arquivo permite garantir a seguran\xe7a permanente dos dados do banco de dados. Este arquivo permite garantir a seguran\xe7a permanente dos dados do banco de dados."),(0,r.kt)("p",null,"Al\xe9m disso, 4D trabalha constantemente com dados cache em mem\xf3ria. Todas as mudan\xe7as realizadas nos dados do banco de dados s\xe3o armazenados temporariamente na cache antes de serem escritas no disco r\xedgido. Isso acelera a opera\xe7\xe3o das aplica\xe7\xf5es; na verdade, acessar a mem\xf3ria \xe9 mais r\xe1pido que acessar o disco r\xedgido. Se acontecer algo no banco de dados antes que armazenagem dos dados na cache possa ser gravada no disco r\xedgido, precisa incluir o arquivo de hist\xf3rico atual para poder restaurar o banco de dados por completo."),(0,r.kt)("p",null,"Por \xfaltimo, 4D possui fun\xe7\xf5es que analisam os conte\xfados do arquivo de hist\xf3rico, tornando poss\xedvel reverter as opera\xe7\xf5es realizadas sobre os dados do banco de dados. Essa fun\xe7\xf5es est\xe3o dispon\xedveis no MSC: veja a p\xe1gina de",(0,r.kt)("a",t({parentName:"p"},{href:"/docs/pt/MSC/analysis"}),"An\xe1lise de atividade")," e a p\xe1gina ",(0,r.kt)("a",t({parentName:"p"},{href:"/docs/pt/MSC/rollback"}),"Rollback"),"."),(0,r.kt)("h2",t({},{id:"como-o-arquivo-de-hist\xf3rico-funciona"}),"como o arquivo de hist\xf3rico funciona"),(0,r.kt)("p",null,"O arquivo de hist\xf3rico gerado por 4D cont\xe9m uma descri\xe7\xe3o de todas as opera\xe7\xf5es realizadas nos dados das tbelas registradas no di\xe1rio do banco de dados, as quais s\xe3o registradas de forma sequencial. Como padr\xe3o, todas as tabelas s\xe3o registradas, ou seja, incluidas no arquivo de hist\xf3rico, mas pode desmarcar as tabelas individuais usando a propriedade de tabela ",(0,r.kt)("strong",{parentName:"p"},"Incluir no arquivo de hist\xf3rico"),"."),(0,r.kt)("p",null,"Dessa forma, cada opera\xe7\xe3o realizada por um usu\xe1rio causa duas a\xe7\xf5es simult\xe2neas: a primeira no banco de dados (instru\xe7\xe3o \xe9 realizada normalmente) e a segunda a\xe7\xe3o no arquivo de hist\xf3rico (a descri\xe7\xe3o da a\xe7\xe3o \xe9 registrada). O arquivo de historial se cria de forma independente, sem perturbar nem ralentar o trabalho do usu\xe1rio. The log file is created independently without disturbing or slowing down the work of the user. O arquivo de historial registra os seguintes tipos de a\xe7\xf5es:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Abertura e fechamento de arquivos de dados,"),(0,r.kt)("li",{parentName:"ul"},"Abertura e fechamento de processos (contextos),"),(0,r.kt)("li",{parentName:"ul"},"Adi\xe7\xe3o de registros ou BLOBs,"),(0,r.kt)("li",{parentName:"ul"},"Modifica\xe7\xe3o de registros,"),(0,r.kt)("li",{parentName:"ul"},"Elimina\xe7\xe3o de registros,"),(0,r.kt)("li",{parentName:"ul"},"Criar ou fechar as transa\xe7\xf5es.")),(0,r.kt)("p",null,"Para saber mais sobre essas a\xe7\xf5es, consulte a p\xe1gina ",(0,r.kt)("a",t({parentName:"p"},{href:"/docs/pt/MSC/analysis"}),"An\xe1lise de atividades")," do CSM."),(0,r.kt)("p",null,"4D gerencia o arquivo de historial. Leva em considera\xe7\xe3o todas as opera\xe7\xf5es que afetam o arquivo de dados por igual, independente das manipula\xe7\xf5es realizadas pelo usu\xe1rio, m\xe9todos 4D, o motor SQL, os plug-ins, ou um navegador web ou uma aplica\xe7\xe3o m\xf3vel."),(0,r.kt)("p",null,"A instru\xe7\xe3o abaixo resume o funcionamento do arquivo de historial:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(397353).Z,width:"523",height:"448"})),(0,r.kt)("p",null,"O arquivo de historial atual se guarda automaticamente com o arquivo de dados atual. Este mecanismo tem duas vantagens distintas:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Evitar a satura\xe7\xe3o do volume de disco onde se armazena o arquivo de historial. Sem uma c\xf3pia de seguran\xe7a, o arquivo de hist\xf3rico ficaria cada vez maior com o  uso, e acabaria utilizando todo o espa\xe7o dispon\xedvel no disco. Para cada c\xf3pia de segurn\xe7a do arquivo de dados, 4D ou 4D Server fecha o arquivo de hist\xf3rico atual e  imediatamente inicia um novo arquivo vazio, evitando assim o riesco de satura\xe7\xe3o. A continua\xe7\xe3o, o arquivo de historial antigo se arquiva e, finalmente, se destr\xf3i em fun\xe7\xe3o do mecanismo de gest\xe3o dos conjuntos de c\xf3pias de segurian\xe7a."),(0,r.kt)("li",{parentName:"ul"},"Conserva os arquivos de hist\xf3rico correspondentes \xe0s c\xf3pias de seguran\xe7a para poder analisar ou reparar um banco de dados em um momento posterior. A integra\xe7\xe3o de um arquivo de hist\xf3rico s\xf3 pode ser realizada no banco de dados ao qual corresponde. Para poder integrar corretamente um arquivo de historial em uma c\xf3pia de seguran\xe7a, \xe9 importante que as c\xf3pias de seguran\xe7a e os arquivos de historial se arquivem simultaneamente.")),(0,r.kt)("h2",t({},{id:"criar-o-arquivo-de-hist\xf3rico"}),"Criar o arquivo de hist\xf3rico"),(0,r.kt)("p",null,"Como padr\xe3o, todo banco de dados criado com 4D utiliza um arquivo de hist\xf3rico (op\xe7\xe3o definida na p\xe1gina ",(0,r.kt)("strong",{parentName:"p"},"Geral")," das Prefer\xeancias). O arquivo de hist\xf3rico \xe9 chamado ",(0,r.kt)("em",{parentName:"p"},"data.journal")," e est\xe1 na pasta Data."),(0,r.kt)("p",null,"Pode averiguar se seu banco de dados utiliza um arquivo de hist\xf3rico a qualquer momento: s\xf3 precisa comprovar se a op\xe7\xe3o ",(0,r.kt)("strong",{parentName:"p"},"Utilizar o arquivo de hist\xf3rico")," estiver selecionada na p\xe1gina ",(0,r.kt)("strong",{parentName:"p"},"Backup/Configuraci\xf3n")," das Propriedades do banco. Se desmarcar essa op\xe7\xe3o, ou se usar um banco de dados sem arquivo de hist\xf3rico, e quiser estabelecer uma estrat\xe9gia de backup com um arquivo de hist\xf3rico, vai precisar criar um."),(0,r.kt)("p",null,"Para criar um arquivo de hist\xf3rico:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Na p\xe1gina ",(0,r.kt)("strong",{parentName:"p"},"C\xf3pia de seguran\xe7a/Configura\xe7\xe3o")," das Propriedades do banco de dados, marque a op\xe7\xe3o ",(0,r.kt)("strong",{parentName:"p"},"Utilizar o arquivo de hist\xf3rico"),". O programa exibe um caixa de di\xe1logo abrir/novo arquivo. Como padr\xe3o, o nome arquivo \xe9 chamado ",(0,r.kt)("em",{parentName:"p"},"data.journal"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Mant\xe9m o nome padr\xe3o ou renomeia, e da\xed seleciona o local do arquivo. Se tiver pelo menos dois discos duros, \xe9 recomendado que coloque o arquivo de hist\xf3rico no disco que n\xe3o tenha seu banco de dados. Se perder o disco duro do banco de dados, poder\xe1 ent\xe3o recuperar o arquivo de hist\xf3rico.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Clique ",(0,r.kt)("strong",{parentName:"p"},"Salvar"),". O disco e o nome do arquivo de hist\xf3rico aberto agora est\xe3o exibidos na \xe1rea ",(0,r.kt)("strong",{parentName:"p"},"Usar hist\xf3rico")," da caixa de di\xe1logo. Pode clicar nessa \xe1rea para exibir um menu pop-up contendo a rota de hist\xf3rico no disco.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Valide a caixa de di\xe1logo das Propriedades."))),(0,r.kt)("p",null,"Para poder criar um arquivo de hist\xf3rico diretamente, o banco de dados deve estar em uma das situa\xe7\xf5es abaixo:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"O arquivo de dados est\xe1 em branco,"),(0,r.kt)("li",{parentName:"ul"},"Acaba de realizar uma c\xf3pia de seguran\xe7a do banco de dados e ainda n\xe3o foram realizadas mudan\xe7as nos dados.")),(0,r.kt)("p",null,"Em todos os outros casos, quando validar a caixa de di\xe1logo Propriedades de Banco de Dados, um di\xe1logo de alerta informar\xe1 que \xe9 necess\xe1rio fazer um backup. Se clicar em ",(0,r.kt)("strong",{parentName:"p"},"Aceitar"),", a c\xf3pia de seguran\xe7a come\xe7a imediatamente, e depois se ativa o arquivo de hist\xf3rico. If you click ",(0,r.kt)("strong",{parentName:"p"},"OK"),", the backup begins immediately, then the log file is activated. If you click ",(0,r.kt)("strong",{parentName:"p"},"Cancel"),", the request is saved but the creation of the log file is postponed and it will actually be created only after the next backup of the database."),(0,r.kt)("p",null,"Sem ter que fazer nada a mais, todas as opera\xe7\xf5es realizadas sobre os dados s\xe3o registradas nesse arquivo, e s\xe3o usadas no futuro quando abrir o banco de dados."),(0,r.kt)("p",null,"Precisa criar outro arquivo de hist\xf3rico se criar um novo arquivo de dados. Precisa estabelecer ou criar outro arquivo de shit\xf3rico se abrir outro arquivo de dados que n\xe3o estiver linnkado a um arquivo de hist\xf3rico (ou se o arquivo de hist\xf3rico estiver faltando)."),(0,r.kt)("h2",t({},{id:"configura\xe7\xf5es-do-arquivo-de-registro"}),"Configura\xe7\xf5es do arquivo de registro"),(0,r.kt)("p",null,"As configura\xe7\xf5es do arquivo de log ",(0,r.kt)("a",t({parentName:"p"},{href:"/docs/pt/Backup/settings#log-file-management"}))," s\xe3o baseadas em duas informa\xe7\xf5es: um valor booleano e um caminho."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Valor booleano"),': indicando se o recurso "Usar arquivo de registro" est\xe1 ativado ou desativado no aplicativo. Por padr\xe3o, o valor booleano \xe9 armazenado em ',(0,r.kt)("em",{parentName:"p"},"catalog.4DCatalog"),". No entanto, quando as configura\xe7\xf5es do usu\xe1rio ",(0,r.kt)("a",t({parentName:"p"},{href:"/docs/pt/Desktop/user-settings"}))," s\xe3o ativadas, a configura\xe7\xe3o do arquivo ",(0,r.kt)("em",{parentName:"p"},"catalog.4DCatalog")," \xe9 substitu\xedda e o valor booleano pode ser definido no arquivo ",(0,r.kt)("em",{parentName:"p"},"Backup.4DSettings")," arquivo ",(0,r.kt)("a",t({parentName:"p"},{href:"/docs/pt/Project/architecture#settings-user-data"}),"ao lado do arquivo de dados")," ou no arquivo ",(0,r.kt)("em",{parentName:"p"},"Backup.4DSettings")," ",(0,r.kt)("a",t({parentName:"p"},{href:"/docs/pt/Project/architecture#settings-user"}),"na pasta do projeto")," (consulte tamb\xe9m a documenta\xe7\xe3o ",(0,r.kt)("inlineCode",{parentName:"p"},"JournalFileEnabled")," xml backup key em ",(0,r.kt)("a",t({parentName:"p"},{href:"https://doc.4d.com"}),"doc.4d.com"),").")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Path"),": uma string apontando para onde o arquivo de log est\xe1 localizado. O caminho do arquivo de registro \xe9 sempre armazenado no arquivo de dados vinculados."))),(0,r.kt)("h2",t({},{id:"parando-um-arquivo-de-log"}),"Parando um arquivo de log"),(0,r.kt)("p",null,"Se quiser parar as opera\xe7\xf5es de registro no arquivo de hist\xf3rico atual, apenas desmarque a op\xe7\xe3o ",(0,r.kt)("strong",{parentName:"p"},"Use Log|Usar o arquivo de hist\xf3rico ")," na p\xe1gina ",(0,r.kt)("strong",{parentName:"p"},"Backup/Configuration")," das Propriedades do banco de dados."),(0,r.kt)("p",null,"4D ent\xe3o exibe uma mensagem de alerta para avisar que a a\xe7\xe3o evita de aproveitar as vantagens de seguran\xe7a de ter um arquivo de hist\xf3rico:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(795159).Z,width:"482",height:"188"})),(0,r.kt)("p",null,"Se clicar ",(0,r.kt)("strong",{parentName:"p"},"Stop"),", o arquivo de hist\xf3rico \xe9 imediatamente fechado (a caixa de di\xe1logo Propriedades do banco de dados n\xe3o precisa ser validada depois)."),(0,r.kt)("p",null,"Se quiser fechar o arquivo de hist\xf3rico atual porque \xe9 muito grande, pode considerar realizar um backup de arquivo de dados, o que vai fazer com que tamb\xe9m se crie uma c\xf3pia de seguran\xe7a do arquivo de hist\xf3rico"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"4D Server:")," O comando ",(0,r.kt)("inlineCode",{parentName:"p"},"New log file")," fecha automaticamente o arquivo de hist\xf3rico atual e come\xe7a um novo. Se por alguma raz\xe3o o arquivo de hist\xf3rico ficar indispon\xedvel durante uma sess\xe3o de trabalho, o erro 1274 \xe9 gerado e o servidor 4D n\xe3o permimte que o usu\xe1rios escrevam mais dados. Quando o arquivo de hist\xf3rico estiver dispon\xedvel novamente, \xe9 preciso fazer um backup.")))}l.isMDXComponent=!0},397353:(a,e,o)=>{o.d(e,{Z:()=>r});const r=o.p+"assets/images/backup05-467406274aac70bb97c1fc96ec032647.png"},795159:(a,e,o)=>{o.d(e,{Z:()=>r});const r="data:image/png;base64,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"}}]);