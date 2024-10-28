"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[64829],{430211:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>t,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var r=a(474848),n=a(28453);const s={id:"log-file-to-json",title:"LOG FILE TO JSON",slug:"/commands/log-file-to-json",displayed_sidebar:"docs"},i=void 0,d={id:"commands-legacy/log-file-to-json",title:"LOG FILE TO JSON",description:"LOG FILE TO JSON ( rotaPastaDest {; tamMax {; rotaHist {; atrCampo}}} )",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/log-file-to-json.md",sourceDirName:"commands-legacy",slug:"/commands/log-file-to-json",permalink:"/docs/pt/commands/log-file-to-json",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flog-file-to-json.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"log-file-to-json",title:"LOG FILE TO JSON",slug:"/commands/log-file-to-json",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Log File",permalink:"/docs/pt/commands/log-file"},next:{title:"New log file",permalink:"/docs/pt/commands/new-log-file"}},t={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function c(e){const o={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"LOG FILE TO JSON"})," ( ",(0,r.jsx)(o.em,{children:"rotaPastaDest"})," {; ",(0,r.jsx)(o.em,{children:"tamMax"})," {; ",(0,r.jsx)(o.em,{children:"rotaHist"})," {; ",(0,r.jsx)(o.em,{children:"atrCampo"}),"}}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{children:"Par\xe2metro"}),(0,r.jsx)(o.th,{children:"Tipo"}),(0,r.jsx)(o.th,{}),(0,r.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"rotaPastaDest"}),(0,r.jsx)(o.td,{children:"Text"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"Rota da pasta de destino do arquivo salvo"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"tamMax"}),(0,r.jsx)(o.td,{children:"Integer"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"Tamanho m\xe1ximo do arquivo JSON a criar (bytes)"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"rotaHist"}),(0,r.jsx)(o.td,{children:"Text"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"Rota do arquivo de hist\xf3rico a exportar; se omitido, usa o arquivo de hist\xf3rico atual"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"atrCampo"}),(0,r.jsx)(o.td,{children:"Integer"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"Descri\xe7\xe3o do atributo do campo: 1 = usa n\xfamero (padr\xe3o), 2 = usa nome"})]})]})]}),"\n",(0,r.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(o.p,{children:["O comando ",(0,r.jsx)(o.strong,{children:"LOG FILE TO JSON"})," salva em formato JSON o arquivo de hist\xf3rico atual ou todo arquivo de hist\xf3rico especificado."]}),"\n",(0,r.jsx)(o.p,{children:"Quando o hist\xf3rico (arquivo bin\xe1rio) for salvado em JSON, seu conte\xfado pode ser lido e interpretado pelo administrador do banco de dados ou por qualquer usu\xe1rio com o objetivo de analisar os eventos do banco de dados, por exemplo."}),"\n",(0,r.jsxs)(o.p,{children:["Em ",(0,r.jsx)(o.em,{children:"rotaPastaDest"}),", passe a rota da pasta na que deseja armazenar o arquivo JSON. Este arquivo se chama ",(0,r.jsx)(o.strong,{children:"JournalExport.json"}),"."]}),"\n",(0,r.jsxs)(o.p,{children:["De forma pr\xe9-determinada, o tamanho m\xe1ximo do arquivo JSON exportada \xe9 de 10 MB. Quando for alcan\xe7ado este tamanho, o arquivo \xe9 fechado e \xe9 criado um novo arquivo. Limitar o tamanho de cada arquivo JSON reduz as exig\xeancias de mem\xf3ria para a an\xe1lise dos arquivos. Pode mudar o tamanho m\xe1ximo para o arquivo exportado definindo um valor (em bytes) no par\xe2metro ",(0,r.jsx)(o.em,{children:"tamMax"}),". Passar 0 restaura o tamanho pr\xe9-determinado. Passar um valor negativo elimina todo limite de tamanho."]}),"\n",(0,r.jsxs)(o.p,{children:["De forma pr\xe9-determinada, se o par\xe2metro ",(0,r.jsx)(o.em,{children:"rotaHist"}),", for omitido o comando salva o arquivo de hist\xf3rico atual. Se desejar exportar um arquivo de hist\xf3rico espec\xedfico, passe sua rota no par\xe2metro ",(0,r.jsx)(o.em,{children:"rotaHist"}),'. O arquivo de hist\xf3rico deve ser um arquivo com uma extens\xe3o ".journal". Se desejar exportar um arquivo de hist\xf3rico arquivado (extens\xe3o ".4bl"), \xe9 necess\xe1rio converter o arquivo anteriormente com o comando ',(0,r.jsx)(o.a,{href:"/docs/pt/commands/restore",children:"RESTORE"}),'. Pode passar uma string vazia ("") para mostrar o di\xe1logo padr\xe3o de abrir arquivo, o que permite ao usu\xe1rio selecionar o arquivo de hist\xf3rico a salvar. A rota do arquivo de hist\xf3rico selecionado \xe9 devolvido na vari\xe1vel sistema ',(0,r.jsx)(o.strong,{children:"Document"}),"."]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Nota:"})," quando o comando guardar o arquivo de hist\xf3rico atual, o banco de dados n\xe3o est\xe1 bloqueado. As novas opera\xe7\xf5es podem ser executadas enquanto o arquivo \xe9 escrito no disco, estas opera\xe7\xf5es n\xe3o s\xe3o incluidas no arquivo salvo."]}),"\n",(0,r.jsxs)(o.p,{children:["Quando exportar o arquivo de historial atual, o par\xe2metro ",(0,r.jsx)(o.em,{children:"atribCampo"}),' lhe permite definir como se descrevem os campos no atributo exportado: por n\xfamero (pr\xe9-determinado), ou por nome. Pode passar uma das seguintes constantes, que se encontra no tema "',(0,r.jsx)(o.em,{children:"Backup"}),'":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{children:"Constante"}),(0,r.jsx)(o.th,{children:"Tipo"}),(0,r.jsx)(o.th,{children:"Valor"}),(0,r.jsx)(o.th,{children:"Coment\xe1rio"})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Field attribute with name"}),(0,r.jsx)(o.td,{children:"Inteiro longo"}),(0,r.jsx)(o.td,{children:"2"}),(0,r.jsx)(o.td,{children:'Os campos s\xe3o identificados por seu nome. Exemplo: {"Sobrenome":"G\xf3mez"}'})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Field attribute with number"}),(0,r.jsx)(o.td,{children:"Inteiro longo"}),(0,r.jsx)(o.td,{children:"1"}),(0,r.jsx)(o.td,{children:'Os campos s\xe3o identificados por seu n\xfamero (como padr\xe3o se for omitido). Exemplo: { "5":"Jones"}.'})]})]})]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Nota:"})," quando exportar um arquivo de hist\xf3rico externo, os campos sempre se identificam por seu n\xfamero."]}),"\n",(0,r.jsx)(o.p,{children:"O arquivo JSON salvo cont\xe9m todas as opera\xe7\xf5es registradas no hist\xf3rico, em forma de um array de objetos JSON. Cada objeto cont\xe9m v\xe1rias propriedades que descrevem a opera\xe7\xe3o. Exemplo:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-json",children:'[\xa0\xa0 {\xa0\xa0\xa0\xa0\xa0 "operationType":25,\xa0\xa0\xa0\xa0\xa0 "operationName":"Modify record",\xa0\xa0\xa0\xa0\xa0 "operationNumber":45,\xa0\xa0\xa0\xa0\xa0 "contextID":37,\xa0\xa0\xa0\xa0\xa0 "timeStamp":"2015-06-11T09:13:17.138Z",\xa0\xa0\xa0\xa0\xa0 "dataLen":42,\xa0\xa0\xa0\xa0\xa0 "recordNumber":4,\xa0\xa0\xa0\xa0\xa0 "tableID":"5AFA15123F991C43B6ACF8B46A914BD0",\xa0\xa0\xa0\xa0\xa0 "tableName":"elem",\xa0\xa0\xa0\xa0\xa0 "fields": {\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "1": "primkey5",\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "2": -5,\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "5": "data 25"\xa0\xa0\xa0 \xa0\xa0\xa0 },\xa0\xa0\xa0\xa0\xa0 "primaryKey": "8"\xa0\xa0 },\xa0\xa0 {\xa0\xa0\xa0\xa0\xa0 "operationType":23,\xa0\xa0\xa0\xa0\xa0 "operationName":"Save seqnum",\xa0\xa0\xa0\xa0\xa0 "operationNumber":46,\xa0\xa0\xa0\xa0\xa0 "contextID":37,\xa0\xa0\xa0\xa0\xa0 "timeStamp":"2015-06-11T09:13:17.138Z",\xa0\xa0\xa0\xa0\xa0 "sequenceNumber":23,\xa0\xa0\xa0\xa0\xa0 "tableID":"5AFA15123F991C43B6ACF8B46A914BD0",\xa0\xa0\xa0\xa0\xa0 "tableName":"elem" \xa0\xa0 },\xa0\xa0 {\xa0\xa0\xa0\xa0\xa0 "operationType":24,\xa0\xa0\xa0\xa0\xa0 "operationName":"Create record",\xa0\xa0\xa0\xa0\xa0 "operationNumber":47,\xa0\xa0\xa0\xa0\xa0 "contextID":37,\xa0\xa0\xa0\xa0\xa0 "timeStamp":"2015-06-11T09:13:17.138Z",\xa0\xa0\xa0\xa0\xa0 "dataLen":570,\xa0\xa0\xa0\xa0\xa0 "recordNumber":7,\xa0\xa0\xa0\xa0\xa0 "tableID":"5AFA15123F991C43B6ACF8B46A914BD0",\xa0\xa0\xa0\xa0\xa0 "tableName":"elem",\xa0\xa0\xa0\xa0\xa0 "fields": {\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "1": 9,\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "2": "test value",\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "3": "2003-03-03T00:00:00.000Z",\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "4": "BlobPath: Table 1/Field 4/Data_9ACB28F1A2744FDFA5822B22F18B2E12.png",\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "8": "BlobID: 2" \xa0\xa0\xa0\xa0\xa0 },\xa0\xa0\xa0 \xa0 "extraData": {\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0 "task_id": 1,\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0 "user_name": "Vanessa Smith",\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0 "user4d_id": 1,\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0 "host_name": "iMac-VSmith-0833",\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0 "task_name": "Application process",\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0 "client_version": -1610541776\xa0\xa0\xa0 \xa0 },\xa0\xa0\xa0\xa0\xa0 "primaryKey": "9"\xa0\xa0 }]\n'})}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Nota:"})," se passou Field attribute with name no par\xe2metro ",(0,r.jsx)(o.em,{children:"atribCampo"}),', o objeto "fields" conter\xe1:']}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-json",children:'...\xa0\xa0\xa0\xa0\xa0 "fields": {\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "ID": 9,\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "Field_2": "test value",\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "Date_Field": "2003-03-03T00:00:00.000Z",\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "Field_4": "BlobPath: Table 1/Field 4/Data_9ACB28F1A2744FDFA5822B22F18B2E12.png",\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "Field_8": "BlobID: 2" \xa0\xa0\xa0\xa0\xa0 },...\n'})}),"\n",(0,r.jsx)(o.h5,{id:""}),"\n",(0,r.jsx)(o.p,{children:"A lista atual de propriedades dispon\xedveis depende do tipo de opera\xe7\xe3o (por exemplo: criar registros, apagar registros, modificar registros, etc.). Aqui est\xe3o algumas das propriedades principais:"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.em,{children:"operationType"}),": c\xf3digo interno para a opera\xe7\xe3o"]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.em,{children:"operationName"}),': tipo da opera\xe7\xe3o, por exemplo "criar registro", "modificar registro"']}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.em,{children:"operationNumber"}),": n\xfamero interno da opera\xe7\xe3o no arquivo de log"]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.em,{children:"contextID"}),": ID do contexto da execu\xe7\xe3o"]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.em,{children:"timeStamp"}),": timestamp da opera\xe7\xe3o no arquivo de log"]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.em,{children:"dataLen"}),": tamanhos dos dados"]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.em,{children:"recordNumber"}),": n\xfamero interno do registro"]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.em,{children:"tableID"}),": ID interna da tabela"]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.em,{children:"tableName"}),": nome da tabela"]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.em,{children:"fields"}),": objeto contendo a lista dos n\xf9meros de campo (ou nomes de campo) com seus valores. Quaisquer campos com um valor modificado est\xe3o logados.",(0,r.jsx)(o.br,{}),"\nNo caso de valores Blob ou imagem, diferentes informa\xe7\xf5es s\xe3o oferecidas baseadas na localiza\xe7\xe3o do armazenamento:\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:'Se o Blob ou imagem for armazenado dentro do arquivo de dados, a propriedade ser\xe1 "BlobID:"+ um n\xfamero interno Blob, por exemplo: "BlobID:1"'}),"\n",(0,r.jsx)(o.li,{children:'Se o Blob ou imagem for armazenado fora do arquivo de dados, a propriedade ser\xe1 "BlobPath:" + o caminho para os dados, por exemplo: "BlobPath: Table 1/Field 6/Data_EE12D091535F9748BCE62EDE972A4BA2.jpg"'}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.em,{children:"extraData"}),": dados contextual de usu\xe1rio, incluindo nome do usu\xe1rio e ID, nome de tarefa e ID, nome da m\xe1quina host, e vers\xe3o cliente."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.em,{children:"sequenceNumber"}),": n\xfamero atual com sequ\xeancia de auto incremento."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.em,{children:"primaryKey"}),": valor da chave prim\xe1ria."]}),"\n"]}),"\n",(0,r.jsx)(o.p,{children:'(*) Nos bancos de dados projeto, a propriedade "user4d_id" n\xe3o \xe9 devolvida.'}),"\n",(0,r.jsx)(o.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(o.p,{children:"Para exportar o arquivo atual de journal em JSON:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:'\xa0LOG FILE TO JSON("c:\\\\4Dv15\\\\ExportLogs")\n'})}),"\n",(0,r.jsx)(o.p,{children:"Para exportar um arquivo de journal arquivado em JSON:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:'\xa0LOG FILE TO JSON("c:\\\\4Dv15\\\\ExportLogs";0;"c:\\\\4Dv15\\\\Backup\\\\old_myDB.journal";Field attribute with name)\n'})}),"\n",(0,r.jsx)(o.h4,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,r.jsxs)(o.p,{children:["Ocomando ",(0,r.jsx)(o.strong,{children:"LOG FILE TO JSON"}),' modifica o valor das vari\xe1veis OK e Document: se o arquivo JSON for guardado corretamente, OK toma o valor 1 e Document contem o nome de rota do arquivo de hist\xf3rico. Se for passado "" no par\xe2metro ',(0,r.jsx)(o.em,{children:"rutaLog"})," e o usu\xe1rio cancelar o quadro de di\xe1logo de sele\xe7\xe3o de arquivos, OK toma o valor 0 e o Document cont\xe9m uma string vazia. Se o usu\xe1rio selecionar um arquivo n\xe3o v\xe1lido, OK toma o valor 0 e o documento cont\xe9m a rota do arquivo."]}),"\n",(0,r.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.a,{href:"/docs/pt/commands/integrate-mirror-log-file",children:"INTEGRATE MIRROR LOG FILE"})})]})}function m(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,o,a)=>{a.d(o,{R:()=>i,x:()=>d});var r=a(296540);const n={},s=r.createContext(n);function i(e){const o=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(s.Provider,{value:o},e.children)}}}]);