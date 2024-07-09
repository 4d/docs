/*! For license information please see c40ef55f.a1923a74.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[61433],{599139:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>n,toc:()=>c});var o=r(474848),i=r(28453);const s={id:"repair",title:"P\xe1gina de repara\xe7\xe3o",sidebar_label:"P\xe1gina de repara\xe7\xe3o"},t=void 0,n={id:"MSC/repair",title:"P\xe1gina de repara\xe7\xe3o",description:"Esta p\xe1gina \xe9 utilizada para reparar o ficheiro de dados quando este foi danificado. Geralmente s\xf3 se usa essas fun\xe7\xf5es sob a supervis\xe3o de times t\xe9cnicos 4D, quando anomalias forem detectadas quando abrir a aplica\xe7\xe3o ou ap\xf3s uma verifica\xe7\xe3o.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/MSC/repair.md",sourceDirName:"MSC",slug:"/MSC/repair",permalink:"/docs/pt/20/MSC/repair",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20MSC%2Frepair.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"repair",title:"P\xe1gina de repara\xe7\xe3o",sidebar_label:"P\xe1gina de repara\xe7\xe3o"},sidebar:"docs",previous:{title:"P\xe1gina Restaura\xe7\xe3o",permalink:"/docs/pt/20/MSC/restore"},next:{title:"P\xe1gina de criptografia",permalink:"/docs/pt/20/MSC/encrypt"}},d={},c=[{value:"overview",id:"overview",level:2},{value:"Ficheiro de dados a reparar",id:"Ficheiro-de-dados-a-reparar",level:3},{value:"Pasta de c\xf3pia de seguran\xe7a dos ficheiros originais",id:"Pasta-de-c\xf3pia-de-seguran\xe7a-dos-ficheiros-originais",level:3},{value:"Ficheiros reparados",id:"Ficheiros-reparados",level:3},{value:"Repara\xe7\xe3o standard",id:"Repara\xe7\xe3o-standard",level:2},{value:"Recuperar por cabe\xe7alhos de registos",id:"Recuperar-por-cabe\xe7alhos-de-registos",level:2},{value:"Atribui\xe7\xe3o manual",id:"Atribui\xe7\xe3o-manual",level:3},{value:"Abrir arquivo de registo",id:"Abrir-arquivo-de-registo",level:2}];function l(e){const a={a:"a",blockquote:"blockquote",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(a.p,{children:["Esta p\xe1gina \xe9 utilizada para reparar o ficheiro de dados quando este foi danificado. Geralmente s\xf3 se usa essas fun\xe7\xf5es sob a supervis\xe3o de times t\xe9cnicos 4D, quando anomalias forem detectadas quando abrir a aplica\xe7\xe3o ou ap\xf3s uma ",(0,o.jsx)(a.a,{href:"/docs/pt/20/MSC/verify",children:"verifica\xe7\xe3o"}),"."]}),"\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.strong,{children:"Warning:"})," Each repair operation involves the duplication of the original file, which increases the size of the application folder. \xc9 importante ter isto em conta (especialmente em macOS onde as aplica\xe7\xf5es 4D aparecem como pacotes) para que o tamanho da aplica\xe7\xe3o n\xe3o aumente excessivamente. Manually removing the copies of the original file inside the package can be useful to minimize the package size."]}),"\n",(0,o.jsxs)(a.blockquote,{children:["\n",(0,o.jsx)(a.p,{children:"Data compacting, rollback, restore, repair, and encryption functions can only be used with data files that are not open (the MSC must have been opened in maintenance mode). Se tentar fazer essa opera\xe7\xe3o em modo padr\xe3o, um aviso informar\xe1 que o banco de dados ser\xe1 fechado e reiniciado em modo manuten\xe7\xe3o.\nQuando o banco de dados est\xe1 encriptado, a repara\xe7\xe3o dos dados inclui passos de desencripta\xe7\xe3o e encripta\xe7\xe3o e, por isso, requer a chave de encripta\xe7\xe3o de dados atual. If no valid encryption key has already been provided, a dialog requesting the passphrase or the encryption key is displayed (see Encrypt page)."}),"\n"]}),"\n",(0,o.jsx)(a.h2,{id:"overview",children:"overview"}),"\n",(0,o.jsx)(a.h3,{id:"Ficheiro-de-dados-a-reparar",children:"Ficheiro de dados a reparar"}),"\n",(0,o.jsxs)(a.p,{children:["Nome do caminho do ficheiro de dados atual. The ",(0,o.jsx)(a.strong,{children:"[...]"})," button can be used to specify another data file. When you click on this button, a standard Open document dialog is displayed so that you can designate the data file to be repaired. Pathname of the current data file. If you perform a ",(0,o.jsx)(a.a,{href:"#recover-by-record-headers",children:"recover by record headers"})," repair, you can select any data file. Once this dialog has been validated, the pathname of the file to be repaired is indicated in the window."]}),"\n",(0,o.jsx)(a.h3,{id:"Pasta-de-c\xf3pia-de-seguran\xe7a-dos-ficheiros-originais",children:"Pasta de c\xf3pia de seguran\xe7a dos ficheiros originais"}),"\n",(0,o.jsxs)(a.p,{children:["By default, the original data file will be duplicated before the repair operation. By default, the original data file will be duplicated before the repair operation. The second ",(0,o.jsx)(a.strong,{children:"[...]"})," button can be used to specify another location for the original files to be saved before repairing begins. This option can be used more particularly when repairing voluminous files while using different disks."]}),"\n",(0,o.jsx)(a.h3,{id:"Ficheiros-reparados",children:"Ficheiros reparados"}),"\n",(0,o.jsx)(a.p,{children:"4D cria um ficheiro de dados em branco no local do ficheiro original. 4D creates a new blank data file at the location of the original file. O ficheiro em branco \xe9 preenchido com os dados recuperados."}),"\n",(0,o.jsx)(a.h2,{id:"Repara\xe7\xe3o-standard",children:"Repara\xe7\xe3o standard"}),"\n",(0,o.jsx)(a.p,{children:"A repara\xe7\xe3o padr\xe3o deve ser escolhida quando apenas alguns registos ou \xedndices est\xe3o danificados (as tabelas de endere\xe7os est\xe3o intactas). Os dados s\xe3o compactados e reparados. This type of repair can only be performed when the data and structure file match."}),"\n",(0,o.jsxs)(a.p,{children:['When the repair procedure is finished, the "Repair" page of the MSC is displayed. Uma mensagem indica se a repara\xe7\xe3o foi bem sucedida. Se for assim, pode abrir o banco de dados imediatamente. ',(0,o.jsx)(a.img,{src:r(221070).A+"",width:"225",height:"45"})]}),"\n",(0,o.jsx)(a.h2,{id:"Recuperar-por-cabe\xe7alhos-de-registos",children:"Recuperar por cabe\xe7alhos de registos"}),"\n",(0,o.jsx)(a.p,{children:"Use this low-level repair option only when the data file is severely damaged and after all other solutions (restoring from a backup, standard repair) have proven to be ineffective."}),"\n",(0,o.jsx)(a.p,{children:"4D records vary in size, so it is necessary to keep the location where they are stored on disk in a specific table, named address table, in order to find them again. The program therefore accesses the address of the record via an index and the address table. If only records or indexes are damaged, the standard repair option is usually sufficient to resolve the problem. However, when the address table itself is affected, it requires a more sophisticated recovery since it will be necessary to reconstitute it. To do this, the MSC uses the marker located in the header of each record. The markers are compared to a summary of the record, including the bulk of their information, and from which it is possible to reconstruct the address table."}),"\n",(0,o.jsxs)(a.blockquote,{children:["\n",(0,o.jsxs)(a.p,{children:["Se desmarcou a op\xe7\xe3o ",(0,o.jsx)(a.strong,{children:"Registros eliminados definitivamente"})," nas propriedades de uma tabela na estrutura do banco de dados, a repara\xe7\xe3o por marcadores de cabe\xe7alhos pode fazer que reapare\xe7am os registros eliminados anteriormente."]}),"\n",(0,o.jsxs)(a.p,{children:["A recupera\xe7\xe3o por cabe\xe7alhos n\xe3o tem em conta as restri\xe7\xf5es de integridade. More specifically, after this operation you may get duplicated values with unique fields or NULL values with fields declared ",(0,o.jsx)(a.strong,{children:"Never Null"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(a.p,{children:["When you click on ",(0,o.jsx)(a.strong,{children:"Scan and repair..."}),", 4D performs a complete scan of the data file. Quando a verifica\xe7\xe3o estiver conclu\xedda, os resultados aparecem na janela seguinte:"]}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.img,{src:r(642391).A+"",width:"906",height:"683"})}),"\n",(0,o.jsxs)(a.blockquote,{children:["\n",(0,o.jsx)(a.p,{children:"Se todos os registos e todas as tabelas tiverem sido atribu\xeddos, apenas a \xe1rea principal \xe9 mostrada."}),"\n"]}),"\n",(0,o.jsx)(a.p,{children:'The "Records found in the data file" area includes two tables summarizing the information from the scan of the data file.'}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsxs)(a.li,{children:["\n",(0,o.jsx)(a.p,{children:"A primeira tabela lista as informa\xe7\xf5es provenientes da verifica\xe7\xe3o do ficheiro de dados. Cada linha mostra um grupo de registos recuper\xe1veis no ficheiro de dados:"}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsxs)(a.li,{children:["The ",(0,o.jsx)(a.strong,{children:"Order"})," column indicates the recovery order for the group of records."]}),"\n",(0,o.jsxs)(a.li,{children:["The ",(0,o.jsx)(a.strong,{children:"Count"})," column indicates the number of the records in the table."]}),"\n",(0,o.jsxs)(a.li,{children:["The ",(0,o.jsx)(a.strong,{children:"Destination table"})," column indicates the names of tables that were automatically assigned to the groups of identified records. Os nomes das tabelas atribu\xeddas aparecem automaticamente a verde. Groups that were not assigned, i.e. tables that could not be associated with any records appear in red."]}),"\n",(0,o.jsxs)(a.li,{children:["The ",(0,o.jsx)(a.strong,{children:"Recover"})," column lets you indicate, for each group, whether you want to recover the records. By default, this option is checked for every group with records that can be associated with a table."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(a.li,{children:["\n",(0,o.jsx)(a.p,{children:"A segunda tabela lista as tabelas do ficheiro de projeto."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(a.h3,{id:"Atribui\xe7\xe3o-manual",children:"Atribui\xe7\xe3o manual"}),"\n",(0,o.jsx)(a.p,{children:'If several groups of records could not be assigned to tables due to a damaged address table, you can assign them manually. Para fazer isso, primeiro selecione um grupo de registros n\xe3o atribu\xeddo na primeira tabela. The "Content of the records" area then displays a preview of the contents of the first records of the group to make it easier to assign them:'}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.img,{src:r(942894).A+"",width:"903",height:"682"})}),"\n",(0,o.jsxs)(a.p,{children:['Next select the table you want to assign to the group in the "Unassigned tables" table and click on the ',(0,o.jsx)(a.strong,{children:"Identify table"})," button. Tamb\xe9m pode atribuir uma tabela utilizando a fun\xe7\xe3o arrastar e largar. The group of records is then associated with the table and it will be recovered in this table. Os nomes das tabelas atribu\xeddas manualmente aparecem a preto. Use the ",(0,o.jsx)(a.strong,{children:"Ignore records"})," button to remove the association made manually between the table and the group of records."]}),"\n",(0,o.jsx)(a.h2,{id:"Abrir-arquivo-de-registo",children:"Abrir arquivo de registo"}),"\n",(0,o.jsxs)(a.p,{children:["Depois que a repara\xe7\xe3o terminar, 4D gera um arquivo de hist\xf3rico na pasta Logs do banco de dados. Este arquivo permite visualizar todas as opera\xe7\xf5es efectuadas. \xc9 criado no formato XML e chamado: ",(0,o.jsx)(a.em,{children:"DatabaseName**_Repair_Log_yyyy-mm-dd hh-mm-ss.xml"}),'" onde:']}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsxs)(a.li,{children:[(0,o.jsx)(a.em,{children:"NomBase"}),' \xe9 o nome do arquivo de estrutura sem extens\xe3o, por exemplo "Faturas",']}),"\n",(0,o.jsxs)(a.li,{children:[(0,o.jsx)(a.em,{children:"yyyy-mm-dd hh-mm-ss"}),' \xe9 o carimbo de data/hora do arquivo, com base na hora do sistema local quando a opera\xe7\xe3o de manuten\xe7\xe3o foi iniciada, por exemplo "2019-02-11 15-20-45".']}),"\n"]}),"\n",(0,o.jsxs)(a.p,{children:["Quando clica no bot\xe3o ",(0,o.jsx)(a.strong,{children:"Abrir arquivo de registo"})," , 4D mostra o arquivo de registo mais recente no navegador predefinido da m\xe1quina."]})]})}function h(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},221020:(e,a,r)=>{var o=r(296540),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,n=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,a,r){var o,s={},c=null,l=null;for(o in void 0!==r&&(c=""+r),void 0!==a.key&&(c=""+a.key),void 0!==a.ref&&(l=a.ref),a)t.call(a,o)&&!d.hasOwnProperty(o)&&(s[o]=a[o]);if(e&&e.defaultProps)for(o in a=e.defaultProps)void 0===s[o]&&(s[o]=a[o]);return{$$typeof:i,type:e,key:c,ref:l,props:s,_owner:n.current}}a.Fragment=s,a.jsx=c,a.jsxs=c},474848:(e,a,r)=>{e.exports=r(221020)},221070:(e,a,r)=>{r.d(a,{A:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAAAtCAIAAADX+5viAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAPcSURBVHhe7ZdBaxNBFMf7qXISD/Ugiih48KAIEYXeRDz3HlD8JLlJta0IIhZpEBLtxZNCL4k2mkZqhXpydt7M7JuZt5vdJGYH/f8ouvvmzZv3Jj9CuzYFIG3gKEgdOApSB46C1IGjIHXgKEgdOApSB46C1IGjIHXgKEgdOApSB46C1GnY0U5rLaTV6fd1uN01STVZbLdHt21b0k/qfwplD+Us2ETFUxpn3j5rXU8S36PUcT7qX3VUX2uV2l5XcFQEjprXmpTv1rdaw9EwE44ug1rXszRHD4bH5qk+1HHoaKuV/csXKE5EHyBfVGTzR/kkqEFlFBf0qqlMJw23p6QfWgpGEPJZR/wTo1PabW+7QjwxDlLV+AIJnk+nFlQIGyhKU49VagYn+xOXsBxHH/fH554Otz99N+81odbtIN47Peph9H3QWCxqoE8lz/Pnd1cpripYgsM7xCXkmfqJluN+5BEstoh0rEYv8O3FJ0rBaLt3OoXycytVcNkZejWLuIfqNXWQPc5mCY4+6o8v73y52zu98Hw0n6bhLbipFP51eLAR+cx8t727DKof3k6U4PDq+G3M7EcewcU1KuLegqOFLaqUeGJJUJ9Ou736Qai4QtiAe9Zkqy6tQk3WlFdyJos6SoLeH5w9/PB7492v+TQNBvQmsLcQ5viI81Mw22KLBJligsO7R5dgH8r7EUeQj6No/q7hCbaUeKLcBtXUpwsJfqikgglShpUsC7pV91ChJmvKldQLs1jIUS4o/dx4Pb26O/pW81fTcCQ+QXALbq5uh98Aq+Dy8hhb5bXlBAfLZG1U68fbbLZ0i49zRS06QJG8kniiGKTtOhadFYVKKngN5NvyJ9d4hZosJV8O9onM72gs6O23J5e2Rx9Htf94ChuldxqQf3xmNCKci27Vke22IfrjwW6wUZUhJxh4F3kb7sFlGPzd4gjRcTag8LezhQzTRMGJcZC261206FWPQ0UVHGwQRX5dOpI9VKkpVRXai5AdfXM4ufly9Pmo0LYlCgpSxMmXAIKje4eT9WfD66+Or+3Kmqq/4iHoP07KjqpvUCXovd6pMu/W3o9YU3yD/hck6+jBcHJ+a3Rn/6fzL9AUgoLVE36PbvaOrrw4esAsNJqOIShoBuH3UVHT9a0hBAWNIDiqiDXd6J1AUNAIsqOKzX2t6XsjJf+BoGCVFDqqEDWFoGDFlDmqCDSFoGD1zHBUYTQdnEFQ0AizHVUoTS/ufIWgoBEqOap4MhhDUNAIVR0FoCngKEgdOApSB46C1IGjIHXgKEgdOApSB46C1IGjIHXgKEgdOArSZjr9Az4Tm0/7xRlRAAAAAElFTkSuQmCC"},642391:(e,a,r)=>{r.d(a,{A:()=>o});const o=r.p+"assets/images/mscrepair2-70f7dc0be1529255122f9c117f88d8a0.png"},942894:(e,a,r)=>{r.d(a,{A:()=>o});const o=r.p+"assets/images/mscrepair3-fca9ba66ac4c95138c0a5560adae3d30.png"},28453:(e,a,r)=>{r.d(a,{R:()=>t,x:()=>n});var o=r(296540);const i={},s=o.createContext(i);function t(e){const a=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function n(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),o.createElement(s.Provider,{value:a},e.children)}}}]);