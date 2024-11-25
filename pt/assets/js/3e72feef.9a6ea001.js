"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["45241"],{211895:function(a,e,o){o.r(e),o.d(e,{metadata:()=>r,contentTitle:()=>n,default:()=>l,assets:()=>t,toc:()=>c,frontMatter:()=>d});var r=JSON.parse('{"id":"Backup/log","title":"Arquivo de Log (.journal)","description":"Um banco de dados de uso continuo sempre registra mudan\xe7as, adi\xe7\xf5es ou apagamentos. Realizar backups ou c\xf3pias de seguran\xe7a regularmente \xe9 importante mas lembre que n\xe3o permite (em caso de problemas) restaurar os dados registrados depois do \xfaltimo backup. Para responder \xe0 essa necessidade, 4D oferece agora uma ferramenta espec\xedfica: o arquivo de log. Este arquivo permite garantir a seguran\xe7a permanente dos dados do banco de dados. Este arquivo permite garantir a seguran\xe7a permanente dos dados do banco de dados.","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R6/Backup/log.md","sourceDirName":"Backup","slug":"/Backup/log","permalink":"/docs/pt/20-R6/Backup/log","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Backup%2Flog.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"log","title":"Arquivo de Log (.journal)"},"sidebar":"docs","previous":{"title":"Backups peri\xf3dicos","permalink":"/docs/pt/20-R6/Backup/settings"},"next":{"title":"Restaurar um backup","permalink":"/docs/pt/20-R6/Backup/restore"}}'),i=o("785893"),s=o("250065");let d={id:"log",title:"Arquivo de Log (.journal)"},n=void 0,t={},c=[{value:"como o arquivo de hist\xf3rico funciona",id:"como-o-arquivo-de-hist\xf3rico-funciona",level:2},{value:"Criar o arquivo de hist\xf3rico",id:"criar-o-arquivo-de-hist\xf3rico",level:2},{value:"Configura\xe7\xf5es do arquivo de registro",id:"configura\xe7\xf5es-do-arquivo-de-registro",level:2},{value:"Parando um arquivo de log",id:"parando-um-arquivo-de-log",level:2}];function u(a){let e={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...a.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:"Um banco de dados de uso continuo sempre registra mudan\xe7as, adi\xe7\xf5es ou apagamentos. Realizar backups ou c\xf3pias de seguran\xe7a regularmente \xe9 importante mas lembre que n\xe3o permite (em caso de problemas) restaurar os dados registrados depois do \xfaltimo backup. Para responder \xe0 essa necessidade, 4D oferece agora uma ferramenta espec\xedfica: o arquivo de log. Este arquivo permite garantir a seguran\xe7a permanente dos dados do banco de dados. Este arquivo permite garantir a seguran\xe7a permanente dos dados do banco de dados."}),"\n",(0,i.jsx)(e.p,{children:"Al\xe9m disso, 4D trabalha constantemente com dados cache em mem\xf3ria. Todas as mudan\xe7as realizadas nos dados do banco de dados s\xe3o armazenados temporariamente na cache antes de serem escritas no disco r\xedgido. Isso acelera a opera\xe7\xe3o das aplica\xe7\xf5es; na verdade, acessar a mem\xf3ria \xe9 mais r\xe1pido que acessar o disco r\xedgido. Se acontecer algo no banco de dados antes que armazenagem dos dados na cache possa ser gravada no disco r\xedgido, precisa incluir o arquivo de hist\xf3rico atual para poder restaurar o banco de dados por completo."}),"\n",(0,i.jsxs)(e.p,{children:["Por \xfaltimo, 4D possui fun\xe7\xf5es que analisam os conte\xfados do arquivo de hist\xf3rico, tornando poss\xedvel reverter as opera\xe7\xf5es realizadas sobre os dados do banco de dados. Essas fun\xe7\xf5es est\xe3o dispon\xedveis no MSC: consulte a p\xe1gina de ",(0,i.jsx)(e.a,{href:"/docs/pt/20-R6/MSC/analysis",children:"An\xe1lise de atividade"})," e a p\xe1gina de ",(0,i.jsx)(e.a,{href:"/docs/pt/20-R6/MSC/rollback",children:"Rollback"}),"."]}),"\n",(0,i.jsx)(e.h2,{id:"como-o-arquivo-de-hist\xf3rico-funciona",children:"como o arquivo de hist\xf3rico funciona"}),"\n",(0,i.jsxs)(e.p,{children:["O arquivo de hist\xf3rico gerado por 4D cont\xe9m uma descri\xe7\xe3o de todas as opera\xe7\xf5es realizadas nos dados das tbelas registradas no di\xe1rio do banco de dados, as quais s\xe3o registradas de forma sequencial. Por padr\xe3o, todas as tabelas s\xe3o registradas, ou seja, inclu\xeddas no arquivo de log, mas voc\xea pode desmarcar tabelas individuais usando a propriedade de tabela ",(0,i.jsx)(e.strong,{children:"Incluir no arquivo de log"}),"."]}),"\n",(0,i.jsx)(e.p,{children:"Dessa forma, cada opera\xe7\xe3o realizada por um usu\xe1rio causa duas a\xe7\xf5es simult\xe2neas: a primeira no banco de dados (instru\xe7\xe3o \xe9 realizada normalmente) e a segunda a\xe7\xe3o no arquivo de hist\xf3rico (a descri\xe7\xe3o da a\xe7\xe3o \xe9 registrada). O arquivo de historial se cria de forma independente, sem perturbar nem ralentar o trabalho do usu\xe1rio. The log file is created independently without disturbing or slowing down the work of the user. O arquivo de historial registra os seguintes tipos de a\xe7\xf5es:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Abertura e fechamento de arquivos de dados,"}),"\n",(0,i.jsx)(e.li,{children:"Abertura e fechamento de processos (contextos),"}),"\n",(0,i.jsx)(e.li,{children:"Adi\xe7\xe3o de registros ou BLOBs,"}),"\n",(0,i.jsx)(e.li,{children:"Modifica\xe7\xe3o de registros,"}),"\n",(0,i.jsx)(e.li,{children:"Elimina\xe7\xe3o de registros,"}),"\n",(0,i.jsx)(e.li,{children:"Criar ou fechar as transa\xe7\xf5es."}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["Para saber mais sobre essas a\xe7\xf5es, consulte a p\xe1gina de ",(0,i.jsx)(e.a,{href:"/docs/pt/20-R6/MSC/analysis",children:"An\xe1lise de atividades"})," do CSM."]}),"\n",(0,i.jsx)(e.p,{children:"4D gerencia o arquivo de historial. Leva em considera\xe7\xe3o todas as opera\xe7\xf5es que afetam o arquivo de dados por igual, independente das manipula\xe7\xf5es realizadas pelo usu\xe1rio, m\xe9todos 4D, o motor SQL, os plug-ins, ou um navegador web ou uma aplica\xe7\xe3o m\xf3vel."}),"\n",(0,i.jsx)(e.p,{children:"A instru\xe7\xe3o abaixo resume o funcionamento do arquivo de historial:"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:o(647877).Z+"",width:"523",height:"448"})}),"\n",(0,i.jsx)(e.p,{children:"O arquivo de historial atual se guarda automaticamente com o arquivo de dados atual. Este mecanismo tem duas vantagens distintas:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Evitar a satura\xe7\xe3o do volume de disco onde se armazena o arquivo de historial. Sem uma c\xf3pia de seguran\xe7a, o arquivo de hist\xf3rico ficaria cada vez maior com o  uso, e acabaria utilizando todo o espa\xe7o dispon\xedvel no disco. Para cada c\xf3pia de segurn\xe7a do arquivo de dados, 4D ou 4D Server fecha o arquivo de hist\xf3rico atual e  imediatamente inicia um novo arquivo vazio, evitando assim o riesco de satura\xe7\xe3o. A continua\xe7\xe3o, o arquivo de historial antigo se arquiva e, finalmente, se destr\xf3i em fun\xe7\xe3o do mecanismo de gest\xe3o dos conjuntos de c\xf3pias de segurian\xe7a."}),"\n",(0,i.jsx)(e.li,{children:"Conserva os arquivos de hist\xf3rico correspondentes \xe0s c\xf3pias de seguran\xe7a para poder analisar ou reparar um banco de dados em um momento posterior. A integra\xe7\xe3o de um arquivo de hist\xf3rico s\xf3 pode ser realizada no banco de dados ao qual corresponde. Para poder integrar corretamente um arquivo de historial em uma c\xf3pia de seguran\xe7a, \xe9 importante que as c\xf3pias de seguran\xe7a e os arquivos de historial se arquivem simultaneamente."}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"criar-o-arquivo-de-hist\xf3rico",children:"Criar o arquivo de hist\xf3rico"}),"\n",(0,i.jsxs)(e.p,{children:["Como padr\xe3o, todo projeto de aplicativo criado com 4D utiliza um arquivo de hist\xf3rico (op\xe7\xe3o definida na p\xe1gina ",(0,i.jsx)(e.strong,{children:"Geral"})," das Prefer\xeancias). El archivo de historial se llama ",(0,i.jsx)(e.em,{children:"data.journal"})," y se coloca en la carpeta Data."]}),"\n",(0,i.jsxs)(e.p,{children:["Voc\xea pode descobrir se o seu aplicativo utiliza um arquivo de log a qualquer momento: basta verificar se a op\xe7\xe3o ",(0,i.jsx)(e.strong,{children:"Use Log"})," est\xe1 selecionada na p\xe1gina de ",(0,i.jsx)(e.strong,{children:"Backup/Configura\xe7\xe3o"})," das Configura\xe7\xf5es. Se desmarcar essa op\xe7\xe3o, ou se usar um banco de dados sem arquivo de hist\xf3rico, e quiser estabelecer uma estrat\xe9gia de backup com um arquivo de hist\xf3rico, vai precisar criar um."]}),"\n",(0,i.jsx)(e.p,{children:"Para criar um arquivo de hist\xf3rico:"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Na p\xe1gina ",(0,i.jsx)(e.strong,{children:"C\xf3pia de seguran\xe7a/Configura\xe7\xe3o"})," das Propriedades do banco de dados, marque a op\xe7\xe3o ",(0,i.jsx)(e.strong,{children:"Utilizar o arquivo de hist\xf3rico"}),".\nO programa exibe um caixa de di\xe1logo abrir/novo arquivo. Por padr\xe3o, o arquivo de log \xe9 chamado ",(0,i.jsx)(e.em,{children:"data.journal"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Mant\xe9m o nome padr\xe3o ou renomeia, e da\xed seleciona o local do arquivo.\nSe tiver pelo menos dois discos duros, \xe9 recomendado que coloque o arquivo de hist\xf3rico no disco que n\xe3o tenha seu banco de dados. Se perder o disco duro do banco de dados, poder\xe1 ent\xe3o recuperar o arquivo de hist\xf3rico."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Clique em ",(0,i.jsx)(e.strong,{children:"Salvar"}),".\nO disco e o nome do arquivo de hist\xf3rico aberto agora est\xe3o exibidos na \xe1rea Usar hist\xf3rico da caixa de di\xe1logo. Pode clicar nessa \xe1rea para exibir um menu pop-up contendo a rota de hist\xf3rico no disco."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Valide a caixa de di\xe1logo das Propriedades."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"Para poder criar um arquivo de hist\xf3rico diretamente, o banco de dados deve estar em uma das situa\xe7\xf5es abaixo:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"O arquivo de dados est\xe1 em branco,"}),"\n",(0,i.jsx)(e.li,{children:"Acaba de realizar uma c\xf3pia de seguran\xe7a do banco de dados e ainda n\xe3o foram realizadas mudan\xe7as nos dados."}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["Em todos os outros casos, quando validar a caixa de di\xe1logo Propriedades de Banco de Dados, um di\xe1logo de alerta informar\xe1 que \xe9 necess\xe1rio fazer um backup. Si hace clic en ",(0,i.jsx)(e.strong,{children:"Aceptar"}),", la copia de seguridad comienza inmediatamente, y luego se activa el archivo de historial. Se voc\xea clicar em ",(0,i.jsx)(e.strong,{children:"Cancelar"}),", a solicita\xe7\xe3o ser\xe1 salva, mas a cria\xe7\xe3o do arquivo de log ser\xe1 adiada e ele ser\xe1 criado apenas ap\xf3s o pr\xf3ximo backup do aplicativo. If you click ",(0,i.jsx)(e.strong,{"x-id":"1",children:"Cancel"}),", the request is saved but the creation of the log file is postponed and it will actually be created only after the next backup of the database."]}),"\n",(0,i.jsx)(e.p,{children:"Sem ter que fazer nada a mais, todas as opera\xe7\xf5es realizadas sobre os dados s\xe3o registradas nesse arquivo, e s\xe3o usadas no futuro quando abrir o banco de dados."}),"\n",(0,i.jsx)(e.p,{children:"Precisa criar outro arquivo de hist\xf3rico se criar um novo arquivo de dados. Precisa estabelecer ou criar outro arquivo de shit\xf3rico se abrir outro arquivo de dados que n\xe3o estiver linnkado a um arquivo de hist\xf3rico (ou se o arquivo de hist\xf3rico estiver faltando)."}),"\n",(0,i.jsx)(e.h2,{id:"configura\xe7\xf5es-do-arquivo-de-registro",children:"Configura\xe7\xf5es do arquivo de registro"}),"\n",(0,i.jsxs)(e.p,{children:["As ",(0,i.jsx)(e.a,{href:"/docs/pt/20-R6/Backup/settings#log-file-management",children:"configura\xe7\xf5es do arquivo de log"})," s\xe3o baseadas em duas informa\xe7\xf5es: um valor booleano e um caminho."]}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Valor booleano"}),': indicando se o recurso "Usar arquivo de registro" est\xe1 ativado ou desativado no aplicativo. Por padr\xe3o, o valor booleano \xe9 armazenado em ',(0,i.jsx)(e.em,{children:"catalog.4DCatalog"}),". No entanto, quando as ",(0,i.jsx)(e.a,{href:"/docs/pt/20-R6/Desktop/user-settings",children:"configura\xe7\xf5es do usu\xe1rio"})," s\xe3o ativadas, a configura\xe7\xe3o do arquivo ",(0,i.jsx)(e.em,{children:"catalog.4DCatalog"})," \xe9 substitu\xedda, e o valor booleano pode ent\xe3o ser definido no arquivo ",(0,i.jsx)(e.em,{children:"Backup.4DSettings"})," ",(0,i.jsx)(e.a,{href:"/docs/pt/20-R6/Project/architecture#settings-user-data",children:"ao lado do arquivo de dados"})," ou no arquivo ",(0,i.jsx)(e.em,{children:"Backup.4DSettings"})," ",(0,i.jsx)(e.a,{href:"/docs/pt/20-R6/Project/architecture#settings-user",children:"na pasta do projeto"})," (consulte tamb\xe9m a documenta\xe7\xe3o da chave de backup xml ",(0,i.jsx)(e.code,{children:"JournalFileEnabled"})," em ",(0,i.jsx)(e.a,{href:"https://doc.4d.com",children:"doc.4d.com"}),")."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Caminho"}),": uma string apontando para onde o arquivo de log est\xe1 localizado. O caminho do arquivo de registro \xe9 sempre armazenado no arquivo de dados vinculados."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"parando-um-arquivo-de-log",children:"Parando um arquivo de log"}),"\n",(0,i.jsxs)(e.p,{children:["Se quiser parar as opera\xe7\xf5es de registro no arquivo de hist\xf3rico atual, simplesmente desmarque a op\xe7\xe3o ",(0,i.jsx)(e.strong,{children:"Use Log"})," na p\xe1gina ",(0,i.jsx)(e.strong,{children:"Backup/Configuration"})," das Configura\xe7\xf5es."]}),"\n",(0,i.jsx)(e.p,{children:"4D ent\xe3o exibe uma mensagem de alerta para avisar que a a\xe7\xe3o evita de aproveitar as vantagens de seguran\xe7a de ter um arquivo de hist\xf3rico:"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:o(11794).Z+"",width:"482",height:"188"})}),"\n",(0,i.jsxs)(e.p,{children:["Se voc\xea clicar em ",(0,i.jsx)(e.strong,{children:"Parar"}),", o arquivo de log atual \xe9 fechado imediatamente (a caixa de di\xe1logo de configura\xe7\xf5es n\xe3o precisa ser validada depois)."]}),"\n",(0,i.jsx)(e.p,{children:"Se quiser fechar o arquivo de hist\xf3rico atual porque \xe9 muito grande, pode considerar realizar um backup de arquivo de dados, o que vai fazer com que tamb\xe9m se crie uma c\xf3pia de seguran\xe7a do arquivo de hist\xf3rico"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"4D Server:"})," O comando ",(0,i.jsx)(e.code,{children:"New log file"})," fecha automaticamente o arquivo de hist\xf3rico atual e come\xe7a um novo.\nSe por alguma raz\xe3o o arquivo de hist\xf3rico ficar indispon\xedvel durante uma sess\xe3o de trabalho, o erro 1274 \xe9 gerado e o servidor 4D n\xe3o permimte que o usu\xe1rios escrevam mais dados. Quando o arquivo de hist\xf3rico estiver dispon\xedvel novamente, \xe9 preciso fazer um backup."]}),"\n"]})]})}function l(a={}){let{wrapper:e}={...(0,s.a)(),...a.components};return e?(0,i.jsx)(e,{...a,children:(0,i.jsx)(u,{...a})}):u(a)}},647877:function(a,e,o){o.d(e,{Z:function(){return r}});let r=o.p+"assets/images/backup05-467406274aac70bb97c1fc96ec032647.png"},11794:function(a,e,o){o.d(e,{Z:function(){return r}});let r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeIAAAC8CAIAAAAreDrHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAABUpSURBVHhe7Z0/r5zHdYcvkIDKJ0hAFSqDNC4MFQaIpErlIEUMEQ7AD8Ba6dzdr8BW3W1SGWlZBBQM2nGgwqYky0aAEJHFNrAYwYGDxADpzJmZd+bM33fu3nd3Z3efBwP7/XPmnDMzZ377cnV39+pDAACYGJHpPwAAwJQg0wAAU4NMAwBMDTINADA1yDQAwNQg0wAAU4NMAwBMDTINADA1yDQAwNQg0wAAUzMq0y+fPLh68OSlHD59fBXx1wAAYD8MyrSV5ijTQZzt9cdP3QkAAGzOkEybR+nHT548qMi0e8xGpwEA9sWATItIP5X/rco0Og0AsE9WZXqRZ2QaAOAYrMh0FOeeTOtTAADYkhWZ1n/UIYgg8940AMDhWJHpSP1p2hwj0gAAe2Q3mQ6ox2oAANgDwzINAADHAJkGAJgaZBoAYGqQaQCAqUGmAQCmBpkGAJgaZBoAYGqQaQCAqUGmAQCmBpkGAJgaZBoAYGqQaQCAqUGmAQCmBpkGAJgaZBoAYGr+5lv3kWkAgHm5/5d/j0wDAMzLt+7zNA0AMDG8Nw0AMDXINADA1NznTQ8AgJnhaRoAYGqQaQCAqUGmAQCmBpkGAJgaZBoAYGqQaQCAqUGmAQCmBpkGAJgaZBoAYGqQaQCAqZlApv/rE2kAAFBjApn+4qE0AACocWyZ/p+v3n5+zzRz4K8AAIDi2DL96d+9eXXPNHPgrwAAgOKDh98/pky//UI02jRz4C8BAIDiqE/Tn/zVm6+8TJsDc+qvH4BXLx68/9HV+x89fu4vwB15efPDq0cvXtrjp9cfhePN0YEmpzcnqgK3mq69TvuGmDwf3Lz2J7dHhnn9pT/ZhMZabB9oV44p029+9Y7XaNd++Y6/sQfSGf/yMQK9Nch0SXtOkgrcarr2Ou0bYvKcSaaba7F1oN05nkz/+M/f/FpptGm/vmcu+rtbk8y4vHj+8Mkrf3ZETkhxVjnYWEYCTTKxzTQ2qsDDD3O3iFmvuWS6vRYXL9Nv/vdt9ihtm7lobnmbTUGm983BxjISaJKJbaaBTCPTt+FIMv2jP43vSuv21T1zy9tsSphxqRj7PpRtz56625ZyVXR5JR2j2esnj5L3T8SsurRSDUt38Skdo8OBKKay1d0k84BP+PkzbaN6peXozWxbSaDuWWbMWT568dQZhOtLX3OcZL7YOFoeMppmelZ9VrWJrZjluJxjnjZ/NRtJr9YsGVqpOv/mIOlr3YZbnnJdxoaZ+WklacyaK5JXqeZWFRuo59kpZnV9SD07CYilu96orqRvsRbtQId+yDuGTP/uP97+ohDopZlbxsBbbkcy41KLtYmW7aErJr5pZdc73LKV573J8YBMp+9/3agSV6XTj2LqIzyDiGVRcwZfSSqBxFIN0FqGSXj95Fps2gk0PAdjt72XQHJrsbRmIXOZh/RW3YOmY/by5llYRx00m9iWmaaSZzxNpiLJp3OrPSdZBepb1XUZHKa+lWRSSbK6IvUq1VQiNqJoar3aJREs8/3oEZvRYdbXIqG9FvnxWmL74xgy/eP7mTRnzRh4y+3QM54tjEKWeakeuxhuYewaay1WHqTLukw3IibluxYlcdtxqAsoNwvZJhvS00ug8Fx40GNp1bpBmfU8KAbNihehqo2hs/lVFzlVZtFhb5ZG5yRbF3Wrti4Z7WFGP92lTDLJh6arpUISsRtF08zT0k4g31yOsWEOl00aVOeWBlpPbH8cXKZf/+Tt54ko/+7fpekr8qHE1z/x9huRVEY+6RG9lqaLl+zKxg5FMCbTLoHi9TwpnbUo8fVDqO/nvBbFp42rmvipSlUvgarnxDibOl3rSeahY9dDZM1MTuPovGXpqmqmSSqk9GDScKdFPnGWuqkm/lvSUHHuGRlm109cyuaKOA/Gfzp1miRiN4qmzLNdEmGMvqVlLwwNs7iV5RAZkemxxPbHwWX6k7/QimzalSW7aMy8/Ubo2e/ItF1mdyscdKthWKYdkoZZ48VguOjvItOZT0v1ei+Bdc/aIKv19p5seoj0zCS92EVZpq6aZpqkQqrjdaeV7sss9VLtVWC8Vc9tcJh9P3EpmyuyIH5UlWqSiN0omjLPwZKoMjTM4la+oIFRmV5PbH8cVqa/fvb200SOTavKtDEzxr7XFujZ78r0UkNmYRL7tPiih1xAk0BVVPSkdNaiJG6VE01ei6VPR/V6L4Gq5yQBGfhioCfBz2cgVHzXQ6Rjlm4eyXA5TbJtm2l0zoZ8vMaJO+3M0vCcZJbxVuncMDjMvh8V0Zj1ZVooxuJIInajaMo82yVRDL9gaJhFJtJL5RBJLaPzfqDDclCZfvvpX2dybFpVpk0zxr7bFujZL5cwQTbks8fpM7J0j6WciKbeNrbgVKDAqxePQ12KzRI93SHtKPY4Fkqh2gvZfjDkPu1/kjJUr68MM/Fs74YrbuDLqfhZOprjhij0PCjaZnrz2OOYvJ7YjplC52zIx2scLqftWRqdE5tGWxq0c7Mug8Ps+4lJyq2WStarVFNGbERJKHq1Xidyh0u5asRmfZi9tUjor0UrkE9Momih2BMHlOnXz8tHadPaMn3PdPF974ye8WxhCtIFXrBybJZKWlJkzt7dcn/RFQIF/O5yTYde+i7hGlHE7MHNlzqQv5NSiKlgK6z0WY/VGmbNczHwxSCr72S6kh3b9JDSNIvZmitVz9aybRZJKqQcr+mlTqPD1WJYenUqsBI6dd7OPxnmqh9Hc0WaVapJIhraU6HJ86wnYJFRdB0ODrOzFgljMm2oJCZ9K7W0OQeU6S++lwmxay2Zlr+h/uJ7vu9BkdVtF9xRmDCl7WluJIA7s5fqMi8wSsf3x6Fk+r9/8fazQohta8q0eaD+7J7p6D0cjEO9Qt6GS5Dpi3gpgiOxl+oy0n+AdzwMh5Lpzz/IJDi0jkybZjp6DwdiTrE4Swkzg4ovh/afrp13ogBuxVlV10Fk+vffdD522Jdp+VDi77/xfvaMXcvk3ahpOEuZXibct9n+BQOnzTlV10Fk+mffzcRXt75MyzvUP/uu9wMAcHkcQqbf/rLyZXihrci0eaDe5/dQAwBMzv5l+qffrn8Z3tJWZVq+h/qn3/beAAAujL3LdP4TLUVbl2nTfsUDNQBcKHuW6R+923+UNu36H/7ItOxi3uR7qN/1PgEALol9yvT//Wf/XelbtbdfvGMces+nhnx+afnT+s7HnDZkf553ZU9/rNJzO98kXCjyRxcTfHBJb8PTYp8y/fzPMqmttn/+xz82LbtYbcah93xq6PrQ2rE/HZlPoZDpywWZviN7k+nfftb5W2ndht6btk3+hvq3n3n/JwsyvSlbyvQkanJ+jEwsk99hbzL9L+9mIttqf/LOlWnZxVYzbr3/kwWZ3hRk+gRApu/IfmT6649b3+Bxxybf8vH1xz7KMOV21TUhx+HTStFM9r/+wL6YFXs+8yynqtTCXW3WOtaY60Z6YmJp+TYSTsg8t7r0A4mT5Xr2i5/KYfwMrlw0NvKFZ+Z69rkvr6eqY2JQdZiQfH9b6Ntz256EMoT4We7GeVBdmlMtNsWom7G8mW3dKFnyBrlS6TI0/6U3bxyOvTdt1tsCnViOZvFU1rE2+fXl1vTSS7ovofUkmOPdKv8o7Eemf/6dTF43bMa5jzKOFJNe6eSXLNQtWy5+IbtFEEg821/ZiNsmjaLqo3qscVViysieWbe6Sz3hhDxKo8toIFf0utxD4aoZ8EVfy8fHVV81qZ20HGoaP9u65lYPZz1EsiGlS2PeNOWoW7GsZSiPte/4zpNMy6npv57kirdqAva4tQV6sTKfafFs9yvDnfTi6Azht3e1H5vhrSv/WOxBpn/zcfV7pbdq8j3Uv7ntA7WsaNjJUrJu3u0a6JW2V9xG6tWoQhWEdfskfJeuuPKLnddH7ViTXY8V3Es4IXrodmkGSgvdkOagI8aJEptECzRilgw2+Gk7bBJFp+02n4T1EGr4rktz3jT5qJux8ikVelGkY6No62NZnf8Nt0A3Vrt4MuI6tm0MykzRTi+fIo+u9l0q/3jsQaZ//rd/+Nd7+20mxC3Rc21WyNdrZfnDIvVqVBPW2xiI22UDaPtWfWS1EogZOkKevYQToudul/FAcQLlljyJ6Oac6EkuSGVCWNJoO8wQ/9HGpdd2m09C6OhbGSLJv5iB1lTno27FqjhciaI9x5Vqj6U7/x1vrQTWZLoVq/CZGctpTN5blg6rZopeerL0plfqMNaDngFHyHkt+aOwB5meFFN87gU2HOxeownGiayisbdu5ZXc+Ey6Z/VRPdaM15De1ZroudtlPFAs1opDT7egZUKSWCGNtkOFGEfnsUvb7cokVEjyr3SpT3U+6las6vV+lPBU6IvK0h5Ld/4NxvNmW6AXq/CpjMV5dZJTh00zRS89hxSA8bNcjPWwW+Ufj8uR6WVhzDKEtZTqTzde/OdSvv/1GqfYon/+4oFfS1c9aicU9VE91vhUA6F0egknRM/dLt1AiVtx6AZYOlzoFrRMSzLYEKLtMJJuHgnkT9tu+5NQI8m/7KI8a/JRt2JVr69FcQskIcIYW/4HBMUv9xZboBcrHYIhFk9zHVOHbTPF2A5VyWgDPxWBkco/Hhck07ISm/8WrWDL5ZF9x8NiOppTvbRZfVSPNeZ6vYa6CWvyKI0u7UDWLNk28TR3uPyuaLLTcqzDqAh5GlWHEa0m9jjJs+N2PIRBzbMh76I8a8pRt2JVr69EMSlJ0RbCUfPfnX+L97bBFlhf63BXF09zHdPJ75gpmuk1fntXRrrkb453qPxjcUkynS3Agl1sUwfSkpVz9u6W+8lLvX8U1oPaSLawtKusPqrHmnYNCe2EI5nnVpduoGL4aurEf+Ews0kRb51f3a061MQhmBDppmq5zSZhNUQc8jKKkamujroVq+qwG8WmNOa/mklK3Vs7gWVCTEu3wFqsouNiHGOZK9V6s5ZtM00jPa/srsWNqevBHCcjHa78o3BxMl1sAxhihmKFO8MWuDXI9GGR19jqazKswvY+C9gCt2aKyr8cmUZoboWZrrif7b9Ak7dH4QRhC4wwY+VfhEzbuY5vS8EIftJ84xHstGELjDNh5V/O0zQAwEmCTAMATA0yDQAwNcg0AMDUINMAAFNzoTKdfwYJ5kD+I/vARwn0x8kAzh5keifko6XhT3ak6S9JmIvmB21nBJkGKLkUmc72/wYyrdXEqvZuSj0oTLuDTAOcOMj0TmQyfYfPdyHTGmQaoOQiZNpoaHyDwqqAk2kRBX89ETJ1vfE50TWZrnvQX9wl3aXXYuYTM6i+iRh5CbNP7iHhoVQbMt0KZBAddNfbP9nptDI6sR6Uz9aUDsaSydH/QBEPS8dMppVzPtEOZ8jlPk2bXb0Iq/2pCC0BwbKlcalMW5mIZg0PEiXoTvgZzVpiwZXV8SUxL0ZKnkZTrV3vBEpuuZcWlWHAmqVzGE/bDkdjjcq0HK9OAsApc8EyvexzQ7wrSqGfyHKx8IgciCq5pp+jmx7y654kMatTSTjVy8q00qBbpFooVy9Q8nJiyKYukOhjJrj5lO4Qa0ymBycB4JS5XJlOtDVoWaq/riWWDmO2eBPPWinaHqyQ5U+mSWIVSY1Clg3hFqmWMt0JVNzK4y5ErbRU0nOnO8Yak2nxMDAJAKcMMm0JelHRlBrGLPUWT9c8eLFeFCdJrNK3L9NjqZZmnUDFrTzuwjQyXYwO4LxApi1ht5f/Qq8SNMgjuuMdjnhQ/1RPEiv7tiwN46mWQtYJpCI6khchxahM7xhLZFqvkQ4Xj0vnAGfHpch0plZmn9dl2klAtGz/tmmqXCJSfQ+Nn9EsE0v6Zv8JMQ06mqryH2gHsschkHS/m0zvGktPqb+1hNOh65OAfMMZcTEy7RRhUQGzt1sybbA737fELKA0aEEeqFNhSj1Y4Vgu6kfIJDGDlSdvqaOXMm0YSnUxyMxagWJKprV/slNCj8m0YadYxa2aTBtas41Mw3lwOTINO9KSaQA4DMg09JFH2vpzOgAcBGQaMowux/d/7JsVyX/lA4ADg0xDjn4fWb9lDwBHAZkGAJgaZBoAYGqQaQCAqUGmAQCmBpkGAJgaZBoAYGqQaQCAqUGmAQCmBpkGAJgaZBoAYGqQaQCAqUGmAQCmBpkGAJgaZBoAYGqQaQCAqUGmAQCmBpkGAJgaZBoAYGqQaQCAqUGmAQCmBpkGAJgaZBoAYGqQaQCAqUGmAQCmBpkGAJgaZBoAYGqQaQCAqUGmAQCmBpkGAJgaZBoAYGqQaQCAqUGmAQCmBpkGAJgaL9NfAgDAlHiZ/gYAAKYEmQYAmBpkGgBgapBpAICpQaYBAKYGmQYAmBpkGgBgapBpAICpQaYBAKbmg4ffR6YBTo+rH/zbmTU/sDH+6YzwQ2rD0zTASZJp3Bk0P7AxjLq9OguQaYCzxUmb2efvvffeqf8vMt0HmQY4SZy0OaU7dZDpPsg0wEnipM3v9VOGp2k/pDbINMBJ4qTtbk/TN4+u3r9+7o6fX79/dfXoxp0cmKPJtJkAz5FGjkwDnDFO2vxe35Eo01qwD8zRnqblhWlR5+fX13J0hGlApgHOFidtmzxNa706CseR6YomI9MAsB1O2vxe3xGrSteFNNn3P5K3AvIrtuONv3hHYTvee9NmFDp5OfW4UcZRh4nYcuAOZBrgbHHSduenaSF9krZK5PTn5pE9ql5ZVEq0bLm7K0eSaYNX4kSF/VhkjP56HOPGAzcg0wBni5M2v9d3xKqSPBsquVGPkIIRqvJKImdykgr97Tje0/SCHaAdghqXXIzDWsa45cAdIzL98OFDZBrg9HDStsl70/L/QXBSeRLKK4laVW7fliPLdByDGte6TG8wcAMyDXC2OGnze31HouiI5PhDczFKkaV75c5idbSn6ZvrZUxh9FqFZYx+YHGMWw7cgUwDnC1O2rZ5ml5O/JkI0IITovyKdHz0yF+7u1YdR6btiD3LGPylfNRau7ccuAGZBjhbnLT5vX5oRK2Cvt+R4783fQu2HLgDmQY4W5y03e1pemc2Vitkug8yDXCSOGnze/3Q8DS9Gcg0wNnipO1IT9MbczoyvT3INMDZ4qTN7HOn1Cf9v8h0H2Qa4CRx0nZOzQ9sDGQaAGYn07gzaH5gYxh1Oxv8kNog0wAAU4NMAwBMDTINADA1yDQAwNQg0wAAU4NMAwBMDTINADA1yDQAwNQg0wAAU2MkWmQaAAAm5cMP/x/vEPATy8mWiAAAAABJRU5ErkJggg=="},250065:function(a,e,o){o.d(e,{Z:function(){return n},a:function(){return d}});var r=o(667294);let i={},s=r.createContext(i);function d(a){let e=r.useContext(s);return r.useMemo(function(){return"function"==typeof a?a(e):{...e,...a}},[e,a])}function n(a){let e;return e=a.disableParentContext?"function"==typeof a.components?a.components(i):a.components||i:d(a.components),r.createElement(s.Provider,{value:e},a.children)}}}]);