/*! For license information please see 73a5e6e1.d3d0803d.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[30444],{38113:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>i,contentTitle:()=>n,default:()=>m,frontMatter:()=>r,metadata:()=>t,toc:()=>c});var s=a(474848),d=a(28453);const r={id:"methods",title:"P\xe1gina M\xe9todos"},n=void 0,t={id:"Concepts/methods",title:"P\xe1gina M\xe9todos",description:"Um m\xe9todo \xe9 basicamente um peda\xe7o de c\xf3digo que executa uma ou v\xe1rias ac\xe7\xf5es. Na linguagem 4D, h\xe1 duas categorias de m\xe9todos:",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R6/Concepts/methods.md",sourceDirName:"Concepts",slug:"/Concepts/methods",permalink:"/docs/pt/Concepts/methods",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fmethods.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"methods",title:"P\xe1gina M\xe9todos"},sidebar:"docs",previous:{title:"Arrays",permalink:"/docs/pt/Concepts/arrays"},next:{title:"Par\xe2metros",permalink:"/docs/pt/Concepts/parameters"}},i={},c=[{value:"M\xe9todos especializados",id:"m\xe9todos-especializados",level:2},{value:"M\xe9todos projeto recursivos",id:"m\xe9todos-projeto-recursivos",level:2},{value:"Sugest\xf5es",id:"sugest\xf5es",level:3},{value:"Objeto f\xf3rmula",id:"objeto-f\xf3rmula",level:3},{value:"M\xe9todos do menu",id:"m\xe9todos-do-menu",level:3},{value:"M\xe9todos Processo",id:"m\xe9todos-processo",level:3},{value:"M\xe9todos de captura de eventos e erros",id:"m\xe9todos-de-captura-de-eventos-e-erros",level:3},{value:"Execution mode",id:"execution-mode",level:3},{value:"No editor de c\xf3digo",id:"no-editor-de-c\xf3digo",level:4},{value:"Na caixa de di\xe1logo Executar m\xe9todo",id:"na-caixa-de-di\xe1logo-executar-m\xe9todo",level:4},{value:"M\xe9todos associados aos objetos",id:"m\xe9todos-associados-aos-objetos",level:2}];function l(e){const o={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.p,{children:"Um m\xe9todo \xe9 basicamente um peda\xe7o de c\xf3digo que executa uma ou v\xe1rias ac\xe7\xf5es. Na linguagem 4D, h\xe1 duas categorias de m\xe9todos:"}),"\n",(0,s.jsxs)(o.p,{children:["Uma linha de instru\xe7\xe3o realiza uma a\xe7\xe3o e pode ser simples ou complexa. Cada instru\xe7\xe3o geralmente consiste em uma linha no m\xe9todo (se necess\xe1rio, no entanto, pode ser ",(0,s.jsxs)(o.a,{href:"/docs/pt/Concepts/quick-tour#code-on-several-lines",children:["dividida usando o caractere ",(0,s.jsx)(o.code,{children:"\\"})]}),")."]}),"\n",(0,s.jsx)(o.p,{children:"O tamanho m\xe1ximo de um m\xe9todo de projecto \xe9 limitado a 2 GB de texto ou 32.000 linhas de comando."}),"\n",(0,s.jsx)(o.h2,{id:"m\xe9todos-especializados",children:"M\xe9todos especializados"}),"\n",(0,s.jsx)(o.p,{children:"Na Linguagem 4D, existem v\xe1rias categorias de m\xe9todos. A categoria depende da forma como podem ser chamados:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:"Tipo"}),(0,s.jsx)(o.th,{children:"Contexto de chamada"}),(0,s.jsx)(o.th,{children:"Aceita par\xe2metros"}),(0,s.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:(0,s.jsx)(o.strong,{children:"M\xe9todos projeto"})}),(0,s.jsxs)(o.td,{children:["Por demanda, quando chamar ao nome do m\xe9todo projeto (ver ",(0,s.jsx)(o.a,{href:"#chamando-metodos-projeto",children:"Chamando a m\xe9todos projeto"}),")"]}),(0,s.jsx)(o.td,{children:"Sim"}),(0,s.jsx)(o.td,{children:"Pode conter qualquer c\xf3digo para executar a\xe7\xf5es personalizadas Quando um m\xe9todo projeto for criado, se torna parte  parte da linguagem do banco de dados na qual foi criado."})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:(0,s.jsx)(o.strong,{children:"M\xe9todo objeto (widget)"})}),(0,s.jsx)(o.td,{children:"Autom\xe1tico, quando um evento envolve a forma a que o m\xe9todo est\xe1 ligado"}),(0,s.jsx)(o.td,{children:"N\xe3o"}),(0,s.jsx)(o.td,{children:"Propriedade de um objecto de formul\xe1rio (tamb\xe9m chamado widget)"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:(0,s.jsx)(o.strong,{children:"M\xe9todo formul\xe1rio"})}),(0,s.jsx)(o.td,{children:"Autom\xe1tico, quando um evento envolve o objecto ao qual o m\xe9todo est\xe1 ligado"}),(0,s.jsx)(o.td,{children:"N\xe3o"}),(0,s.jsx)(o.td,{children:"Propriedade de um formul\xe1rio. Pode-se utilizar um m\xe9todo de formul\xe1rio para gerir dados e objectos, mas \xe9 geralmente mais simples e mais eficiente utilizar um m\xe9todo de objecto para estes fins."})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsxs)(o.td,{children:[(0,s.jsx)(o.strong,{children:"Trigger"})," (o ",(0,s.jsx)(o.em,{children:"m\xe9todo tabla"}),")"]}),(0,s.jsx)(o.td,{children:"Autom\xe1tico, cada vez que manipula os registos de uma tabela (Adicionar, Apagar e Modificar)"}),(0,s.jsx)(o.td,{children:"N\xe3o"}),(0,s.jsx)(o.td,{children:'Propriedade de uma tabela. Os gatilhos/triggers s\xe3o m\xe9todos que podem prevenir opera\xe7\xf5es "ilegais" com os registos da sua base de dados.'})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:(0,s.jsx)(o.strong,{children:"M\xe9todo base"})}),(0,s.jsx)(o.td,{children:"Autom\xe1tico, quando ocorre um evento de sess\xe3o de trabalho"}),(0,s.jsx)(o.td,{children:"Sim (pr\xe9-definido)"}),(0,s.jsx)(o.td,{children:"Existem 16 m\xe9todos base em 4D."})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:(0,s.jsx)(o.strong,{children:"Class"})}),(0,s.jsxs)(o.td,{children:[(0,s.jsx)(o.a,{href:"/docs/pt/Concepts/classes#function",children:(0,s.jsx)(o.strong,{children:"Fun\xe7\xf5es de classe"})})," s\xe3o chamadas no contexto de uma inst\xe2ncia de objeto"]}),(0,s.jsx)(o.td,{children:"sim"}),(0,s.jsxs)(o.td,{children:["As fun\xe7\xf5es de classe podem ser incorporadas (",(0,s.jsx)(o.em,{children:"por exemplo"})," ",(0,s.jsx)(o.code,{children:"collection.orderBy()"})," ou ",(0,s.jsx)(o.code,{children:"entity.save()"}),"), ou criadas pelo desenvolvedor do 4D. Veja ",(0,s.jsx)(o.a,{href:"/docs/pt/Concepts/classes",children:(0,s.jsx)(o.strong,{children:"Classes"})})]})]})]})]}),"\n",(0,s.jsx)(o.h2,{id:"m\xe9todos-projeto-recursivos",children:"M\xe9todos projeto recursivos"}),"\n",(0,s.jsx)(o.p,{children:"Um m\xe9todo de projecto pode ter uma das seguintes fun\xe7\xf5es, dependendo de como \xe9 executado e utilizado:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"Constantes"}),"\n",(0,s.jsx)(o.li,{children:"Objeto f\xf3rmula"}),"\n",(0,s.jsx)(o.li,{children:"M\xe9todo do menu"}),"\n",(0,s.jsx)(o.li,{children:"M\xe9todo de gerenciamento de processos"}),"\n",(0,s.jsx)(o.li,{children:"M\xe9todo de captura de eventos ou erros"}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:"Tamb\xe9m pode executar os seus m\xe9todos projeto manualmente, por exemplo, para fins de teste."}),"\n",(0,s.jsx)(o.h3,{id:"sugest\xf5es",children:"Sugest\xf5es"}),"\n",(0,s.jsx)(o.p,{children:"Uma sub-rotina \xe9 um m\xe9todo de projecto que pode ser pensado como um servo. Executa as tarefas que outros m\xe9todos lhe pedem para executar. Uma fun\xe7\xe3o \xe9 uma sub-rotina que devolve um valor ao m\xe9todo que a chamou."}),"\n",(0,s.jsx)(o.p,{children:"Quando criar um m\xe9todo projeto, este passa a formar parte da lingagem do banco de dados no qual foi criado. Voc\xea pode ent\xe3o chamar o m\xe9todo projeto a partir de outro m\xe9todo (m\xe9todo projeto, m\xe9todo de objeto...) da mesma forma que voc\xea chama os comandos internos do 4D. Um m\xe9todo de projecto utilizado desta forma \xe9 chamado de sub-rotina."}),"\n",(0,s.jsx)(o.p,{children:"Utiliza sub-rotinas para:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"Reduzir a codifica\xe7\xe3o repetitiva"}),"\n",(0,s.jsx)(o.li,{children:"Esclare\xe7a os seus m\xe9todos"}),"\n",(0,s.jsx)(o.li,{children:"Facilitar mudan\xe7as nos seus m\xe9todos"}),"\n",(0,s.jsx)(o.li,{children:"Modularize o seu c\xf3digo"}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:"Por exemplo, suponha que tenha um banco de dados de clientes. Ao personalizar o banco de dados, pode perceber que ha'tarefas que tem que realizar repetidamente, como achar um cliente e modificar seu registro. O c\xf3digo para fazer isso  parece-se com o seguinte:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'  // Procure um cliente\n QUERY BY EXAMPLE([Customers])\n  // Selecione o formul\xe1rio de entrada\n FORMUL\xc1RIO DE ENTRADA([Customers]; "Data Entry")\n  // Modifique o registo do cliente\n MODIFY RECORD([Customers])\n'})}),"\n",(0,s.jsx)(o.p,{children:"Se n\xe3o utilizar sub-rotinas, ter\xe1 de escrever o c\xf3digo cada vez que quiser modificar o registo de um cliente. Se houver dez lugares na sua base de dados personalizada onde precise fazer isso, ter\xe1 de escrever o c\xf3digo dez vezes. Se utilizar sub-rotinas, s\xf3 ter\xe1 de o escrever uma vez. Esta \xe9 a primeira vantagem das sub-rotinas - reduzir a quantidade de c\xf3digo."}),"\n",(0,s.jsxs)(o.p,{children:["Se o c\xf3digo descrito anteriormente fosse um m\xe9todo chamado ",(0,s.jsx)(o.code,{children:"MODIFY_CUSTOMER"}),", voc\xea o executaria simplesmente usando o nome do m\xe9todo em outro m\xe9todo. Por exemplo, para modificar o registo de um cliente e depois imprimir o registo, escrever-se-ia este m\xe9todo:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:" MODIFY CUSTOMER\n PRINT SELECTION([Customers])\n"})}),"\n",(0,s.jsxs)(o.p,{children:["Esta capacidade simplifica dramaticamente os seus m\xe9todos. No exemplo, voc\xea n\xe3o precisa saber como o m\xe9todo ",(0,s.jsx)(o.code,{children:"MODIFY_CUSTOMER"})," funciona, apenas o que ele faz. Esta \xe9 a segunda raz\xe3o para a utiliza\xe7\xe3o de sub-rotinas para esclarecer os seus m\xe9todos. Desta forma, os seus m\xe9todos tornam-se extens\xf5es \xe0 linguagem 4D."]}),"\n",(0,s.jsx)(o.p,{children:"Se precisar mudar seu m\xe9todo de pesquisa de clientes nesse banco de dados de exemplo, ter\xe1 que mudar apenas um m\xe9todo, n\xe3o dez. Este \xe9 o pr\xf3ximo motivo para utilizar sub-rotinas para facilitar mudan\xe7as nos seus m\xe9todos."}),"\n",(0,s.jsx)(o.p,{children:"Usando sub-rotinas, voc\xea torna o seu c\xf3digo modular. Isto significa simplesmente a divis\xe3o do seu c\xf3digo em m\xf3dulos (sub-rotinas), cada um dos quais executa uma tarefa l\xf3gica. Considere o c\xf3digo abaixo de um banco de dados de contas correntes:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:" FIND CLEARED CHECKS ` Buscar os cheques emitidos\n RECONCILE ACCOUNT ` Reconciliar a conta\n PRINT CHECK BOOK REPORT ` Imprimir um relat\xf3rio da conta\n"})}),"\n",(0,s.jsx)(o.p,{children:"Mesmo para algu\xe9m que n\xe3o conhe\xe7a o banco de dados, \xe9 claro o que o c\xf3digo faz. N\xe3o \xe9 necess\xe1rio examinar cada sub-rotina. Cada sub-rotina pode ter muitas linhas e realizar algumas opera\xe7\xf5es complexas, mas aqui \xe9 apenas importante que desempenhe a sua tarefa. Recomendamos que divida o seu c\xf3digo em tarefas l\xf3gicas, ou m\xf3dulos, sempre que poss\xedvel."}),"\n",(0,s.jsx)(o.h3,{id:"objeto-f\xf3rmula",children:"Objeto f\xf3rmula"}),"\n",(0,s.jsxs)(o.p,{children:["Voc\xea pode encapsular os m\xe9todos do seu projeto em objetos ",(0,s.jsx)(o.strong,{children:"f\xf3rmula"})," e cham\xe1-los a partir dos seus objetos."]}),"\n",(0,s.jsxs)(o.p,{children:["Os comandos ",(0,s.jsx)(o.code,{children:"Formula"})," ou ",(0,s.jsx)(o.code,{children:"Formula from string"})," permitem-lhe criar objetos de f\xf3rmula nativa que voc\xea pode encapsular em propriedades de objeto. Permite-lhe implementar m\xe9todos de objectos personalizados."]}),"\n",(0,s.jsxs)(o.p,{children:["Para executar um m\xe9todo armazenado em uma propriedade de objeto, use o operador ",(0,s.jsx)(o.strong,{children:"()"})," depois do nome da propriedade. Por exemplo:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'//myAlert ALERT("Hello world!")\n'})}),"\n",(0,s.jsxs)(o.p,{children:["Ent\xe3o ",(0,s.jsx)(o.code,{children:"myAlert"})," pode ser encapsulado em qualquer objeto e chamado:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'C_OBJECT($o)\n$o:=New object("custom_Alert";Formula(myAlert))\n$o.custom_Alert() //displays "Hello world!"\n'})}),"\n",(0,s.jsx)(o.p,{children:"Tamb\xe9m se admite a sintaxe com par\xeanteses:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'$o["custom_Alert"]() //exibe "Hello world!"\n'})}),"\n",(0,s.jsxs)(o.p,{children:["Voc\xea tamb\xe9m pode ",(0,s.jsx)(o.a,{href:"/docs/pt/Concepts/parameters",children:"passar par\xe2metros"})," para sua f\xf3rmula quando voc\xea a chamar usando $1, $2\u2026 assim como nos m\xe9todos do projeto 4D:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'//fullName method C_TEXT($0;$1;$2)\n$0:=$1+" "+$2\n'})}),"\n",(0,s.jsxs)(o.p,{children:["Voc\xea pode encapsular ",(0,s.jsx)(o.code,{children:"fullName"})," em um objeto:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'C_OBJECT($o)\n$o:=New object("full_name";Formula(fullName))\n$result:=$o.full_name("John";"Smith") \n//$result = "John Smith"\n// equivalent to $result:=fullName("param1";"param2")\n'})}),"\n",(0,s.jsxs)(o.p,{children:["Combinado com a fun\xe7\xe3o ",(0,s.jsx)(o.code,{children:"This"}),", tais m\xe9todos de objectos permitem escrever um poderoso c\xf3digo gen\xe9rico. Por exemplo:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'//fullName2 method C_TEXT($0)\n$0:=This.firstName+" "+This.lastName\n'})}),"\n",(0,s.jsx)(o.p,{children:"Ent\xe3o o m\xe9todo atua como um novo atributo calculado que pode ser adicionado a outros atributos:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'C_OBJECT($o)\n$o:=New object("firstName";"Jim";"lastName";"Wesson")\n$o.fullName:=Formula(fullName2) //add the method  \n\n$result:=$o.fullName() \n//$result = "Jim Wesson"\n'})}),"\n",(0,s.jsxs)(o.p,{children:["Note-se que, mesmo que n\xe3o tenha par\xe2metros, um m\xe9todo de objeto a ser executado deve ser chamado com ",(0,s.jsx)(o.code,{children:"()"})," par\xeanteses. Chamar s\xf3 a propriedade de objeto devolver\xe1 uma nova refer\xeancia \xe0 f\xf3rmula (e n\xe3o a executar\xe1):"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:"$o:=$f.message //devolve o objeto f\xf3rmula em $o\n"})}),"\n",(0,s.jsx)(o.h3,{id:"m\xe9todos-do-menu",children:"M\xe9todos do menu"}),"\n",(0,s.jsx)(o.p,{children:'Um m\xe9todo de menu \xe9 invocado quando se selecciona o comando do menu personalizado ao qual est\xe1 anexado. Atribui-se o m\xe9todo ao comando menu usando o editor de menu ou um comando do tema "Menus". O m\xe9todo executa-se quando o comando do menu \xe9 escolhido. Ao criar menus personalizados com m\xe9todos de menu que realizam a\xe7\xf5es espec\xedficas, pode personalizar seu banco de dados.'}),"\n",(0,s.jsxs)(o.p,{children:["Os comandos personalizados do menu podem causar a realiza\xe7\xe3o de uma ou mais actividades. Por exemplo, um comando de menu para inserir registros pode chamar um m\xe9todo que realiza duas tarefas: exibir o formul\xe1rio de entrada apropriado e chamar o comando ",(0,s.jsx)(o.code,{children:"ADD RECORD"})," at\xe9 que o usu\xe1rio cancele a atividade de entrada de dados."]}),"\n",(0,s.jsx)(o.p,{children:"A automatiza\xe7\xe3o de sequ\xeancias de actividades \xe9 uma capacidade muito poderosa da linguagem de programa\xe7\xe3o. Usando menus personalizados, pode automatizar sequ\xeancias de tarefa e fornecer mais orienta\xe7\xe3o aos usu\xe1rios do banco de dados."}),"\n",(0,s.jsx)(o.h3,{id:"m\xe9todos-processo",children:"M\xe9todos Processo"}),"\n",(0,s.jsxs)(o.p,{children:["Um ",(0,s.jsx)(o.strong,{children:"m\xe9todo de processo"})," \xe9 um m\xe9todo de projeto que \xe9 chamado quando um processo \xe9 iniciado. O processo dura apenas enquanto o m\xe9todo do processo continuar a ser executado, excepto se for um processo de Worker. Note-se que um m\xe9todo de menu anexado a um comando de menu com a propriedade ",(0,s.jsx)(o.em,{children:"Start a New Process"})," \xe9 tamb\xe9m o m\xe9todo de processo para o processo recentemente iniciado."]}),"\n",(0,s.jsx)(o.h3,{id:"m\xe9todos-de-captura-de-eventos-e-erros",children:"M\xe9todos de captura de eventos e erros"}),"\n",(0,s.jsxs)(o.p,{children:["Um ",(0,s.jsx)(o.strong,{children:"m\xe9todo de capta\xe7\xe3o de eventos"})," \xe9 executado em um processo separado como o m\xe9todo de processo para capturar eventos. Normalmente, deixa a 4D fazer a maior parte do tratamento do evento por si. Por exemplo, durante a introdu\xe7\xe3o de dados, 4D detecta toques no teclado e cliques, depois chama os m\xe9todos corretos de objetos e formul\xe1rios para que possa responder adequadamente aos eventos a partir destes m\xe9todos. Para mais informa\xe7\xf5es, veja a descri\xe7\xe3o do comando ",(0,s.jsx)(o.code,{children:"ON EVENT CALL"}),"."]}),"\n",(0,s.jsxs)(o.p,{children:["Um ",(0,s.jsx)(o.strong,{children:"m\xe9todo de apanhar erros"})," \xe9 um m\xe9todo de projecto baseado na interrup\xe7\xe3o. Cada vez que ocorre um erro ou uma exce\xe7\xe3o, este \xe9 executado dentro do processo em que foi instalado. Para mais informa\xe7\xf5es, consulte a se\xe7\xe3o ",(0,s.jsx)(o.a,{href:"/docs/pt/Concepts/error-handling",children:"Error handling"}),"."]}),"\n",(0,s.jsx)(o.h3,{id:"execution-mode",children:"Execution mode"}),"\n",(0,s.jsx)(o.p,{children:"Os m\xe9todos projeto escritos em sua aplica\xe7\xe3o costumam ser chamados automaticamente durante o uso da aplica\xe7\xe3o atrav\xe9s de comandos de menu, bot\xf5es, outros m\xe9todos, etc. Para m\xe9todos de banco de dados, s\xe3o executados em rela\xe7\xe3o \xe0 eventos espec\xedficos que ocorrem na aplica\xe7\xe3o."}),"\n",(0,s.jsx)(o.p,{children:"Entretanto, para teste e depura\xe7\xe3o, 4D deixa que execute m\xe9todos de projeto manualmente e certos m\xe9todos de banco de dados em modo Design.\nNeste caso \xe9 poss\xedvel executar o m\xe9todo em um novo processo ou diretamente no modo Debug, para verificar sua execu\xe7\xe3o passo a passo."}),"\n",(0,s.jsx)(o.p,{children:"Pode executar m\xe9todos de duas formas:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"Na janela Editor de c\xf3digo,"}),"\n",(0,s.jsx)(o.li,{children:"Na caixa de di\xe1logo Executar m\xe9todo (apenas m\xe9todos de projecto)."}),"\n"]}),"\n",(0,s.jsx)(o.h4,{id:"no-editor-de-c\xf3digo",children:"No editor de c\xf3digo"}),"\n",(0,s.jsxs)(o.p,{children:["Cada janela do ",(0,s.jsx)(o.a,{href:"/docs/pt/code-editor/write-class-method",children:(0,s.jsx)(o.strong,{children:"Editor de C\xf3digo"})})," possui um bot\xe3o que pode ser usado para executar o m\xe9todo atual. Usar o menu associado com o bot\xe3o, pode escolher o tipo de execu\xe7\xe3o desejado."]}),"\n",(0,s.jsx)(o.p,{children:"Esse bot\xe3o \xe9 ativo para m\xe9todos projeto e para os m\xe9todos database:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"On Startup"}),"\n",(0,s.jsx)(o.li,{children:"On Exit"}),"\n",(0,s.jsx)(o.li,{children:"On Server Startup"}),"\n",(0,s.jsx)(o.li,{children:"On Server Shutdown"}),"\n"]}),"\n",(0,s.jsxs)(o.p,{children:["Para obter mais informa\xe7\xf5es, consulte ",(0,s.jsx)(o.a,{href:"/docs/pt/code-editor/write-class-method#toolbar",children:"Toolbar"}),"."]}),"\n",(0,s.jsx)(o.h4,{id:"na-caixa-de-di\xe1logo-executar-m\xe9todo",children:"Na caixa de di\xe1logo Executar m\xe9todo"}),"\n",(0,s.jsxs)(o.p,{children:["Quando voc\xea selecionar o comando ",(0,s.jsx)(o.strong,{children:"Method..."})," do menu ",(0,s.jsx)(o.strong,{children:"Run"}),", exibe o di\xe1logo ",(0,s.jsx)(o.strong,{children:"Execute Method"}),"."]}),"\n",(0,s.jsx)(o.p,{children:"Esta caixa de di\xe1logo lista todos os m\xe9todos de projecto da base de dados, incluindo m\xe9todos de projecto partilhados de componentes. Por outro lado, os m\xe9todos de projecto que foram declarados invis\xedveis n\xe3o aparecer\xe3o."}),"\n",(0,s.jsxs)(o.p,{children:["Para executar um m\xe9todo projeto, basta selecionar o seu nome na lista e clicar em ",(0,s.jsx)(o.strong,{children:"Executar"}),". Para executar um m\xe9todo passo a passo no modo Debug, clique em ",(0,s.jsx)(o.strong,{children:"Debug"}),". Para mais informa\xe7\xf5es sobre o depurador 4D, consulte a se\xe7\xe3o ",(0,s.jsx)(o.a,{href:"/docs/pt/Debugging/basics",children:"Depura\xe7\xe3o"}),"."]}),"\n",(0,s.jsxs)(o.p,{children:["Se voc\xea marcar a caixa de sele\xe7\xe3o de ",(0,s.jsx)(o.strong,{children:"Novo Processo"}),", o m\xe9todo que voc\xea selecionou \xe9 executado em outro processo. Se o m\xe9todo estiver executando uma tarefa demorada, como a impress\xe3o de um grande conjunto de registos, pode continuar trabalhando com a base de dados, adicionando registos a uma tabela, criando um gr\xe1fico para apresentar dados, etc. Para mais informa\xe7\xf5es sobre processos, consulte ",(0,s.jsx)(o.a,{href:"https://doc.4d.com/4Dv19R5/4D/19-R5/Processes.300-5830912.en.html",children:"Processes"})," o manual 4D ",(0,s.jsx)(o.em,{children:"Refer\xeancia de Idioma"}),"."]}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Notas Servidor 4D"}),":"]}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"Se quiser que o m\xe9todo seja executado na m\xe1quina do servidor e n\xe3o na m\xe1quina do cliente, selecione a op\xe7\xe3o On 4D Server no menu To be executed. Neste caso, \xe9 criado um novo processo, chamado stored procedure, na m\xe1quina do servidor para executar o m\xe9todo. Essa op\xe7\xe3o pode ser usada para reduzir o tr\xe1fego de rede e otimizar o funcionamento do 4D Server, em particular para m\xe9todos que chamam dados armazenados no disco. Todos os tipos de m\xe9todos podem ser executados na m\xe1quina servidor ou noutra m\xe1quina cliente, excepto os que modificam a interface do utilizador. Neste caso, os procedimentos armazenados s\xe3o ineficazes."}),"\n",(0,s.jsxs)(o.li,{children:['Tamb\xe9m pode optar por executar o m\xe9todo noutra esta\xe7\xe3o de trabalho cliente. Outras esta\xe7\xf5es de trabalho do cliente n\xe3o aparecer\xe3o no menu, a menos que tenham sido previamente "registradas" (para mais informa\xe7\xf5es, consulte a descri\xe7\xe3o do [CLIENTO REGISTAR](',(0,s.jsx)(o.a,{href:"https://doc",children:"https://doc"}),". d.com/4dv19/help/command/en/page648.html)."]}),"\n"]}),"\n",(0,s.jsxs)(o.p,{children:["Por padr\xe3o, a op\xe7\xe3o ",(0,s.jsx)(o.strong,{children:"local"})," est\xe1 selecionada. Com a vers\xe3o 4D para um \xfanico utilizador, esta \xe9 a \xfanica op\xe7\xe3o dispon\xedvel."]}),"\n",(0,s.jsx)(o.h2,{id:"m\xe9todos-associados-aos-objetos",children:"M\xe9todos associados aos objetos"}),"\n",(0,s.jsx)(o.p,{children:"Os m\xe9todos de projecto podem chamar-se a si pr\xf3prios. Por exemplo:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"O m\xe9todo A pode chamar o m\xe9todo B que pode chamar A, por isso A chamar\xe1 novamente B e assim por diante."}),"\n",(0,s.jsx)(o.li,{children:"Um m\xe9todo pode chamar-se a si pr\xf3prio."}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:"A isto chama-se recorr\xeancia. A linguagem 4D suporta plenamente a recorr\xeancia."}),"\n",(0,s.jsxs)(o.p,{children:["Aqui um exemplo simples. Digamos que voc\xea tenha uma tabela ",(0,s.jsx)(o.code,{children:"[Amigos e Relativas]"})," composta por este conjunto extremamente simplificado de campos:"]}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.code,{children:"[Friends and Relatives]Name"})}),"\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.code,{children:"[Friends and Relatives]ChildrensName"})}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:'Para este exemplo, assumimos que os valores nos campos s\xe3o \xfanicos (n\xe3o h\xe1 duas pessoas com o mesmo nome). Dado um nome, quer construir a frase "Um amigo meu, Jo\xe3o que \xe9 o filho de Paulo que \xe9 o filho de Jane que \xe9 o filho de Robert que \xe9 o filho de Eleanor, faz isto para viver":'}),"\n",(0,s.jsxs)(o.ol,{children:["\n",(0,s.jsx)(o.li,{children:"Pode construir a frase desta forma:"}),"\n"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:' $vsName:=Request("Enter the name:";"John")\n If(OK=1)\n    QUERY([Friends and Relatives];[Friends and Relatives]Name=$vsName)\n    If(Records in selection([Friends and Relatives])>0)\n       $vtTheWholeStory:="A friend of mine, "+$vsName\n       Repeat\n          QUERY([Friends and Relatives];[Friends and Relatives]ChildrensName=$vsName)\n          $vlQueryResult:=Records in selection([Friends and Relatives])\n          If($vlQueryResult>0)\n             $vtTheWholeStory:=$vtTheWholeStory+" who is the child of "+[Friends and Relatives]Name\n             $vsName:=[Friends and Relatives]Name\n          End if\n       Until($vlQueryResult=0)\n       $vtTheWholeStory:=$vtTheWholeStory+", does this for a living!"\n       ALERT($vtTheWholeStory)\n    End if\n End if\n'})}),"\n",(0,s.jsxs)(o.ol,{start:"2",children:["\n",(0,s.jsx)(o.li,{children:"Tamb\xe9m se pode construir desta forma:"}),"\n"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:' $vsName:=Request("Enter the name:";"John")\n If(OK=1)\n    QUERY([Friends and Relatives];[Friends and Relatives]Name=$vsName)\n    If(Records in selection([Friends and Relatives])>0)\n       ALERT("A friend of mine, "+Genealogy of($vsName)+", does this for a living!")\n    End if\n End if\n'})}),"\n",(0,s.jsxs)(o.p,{children:["com a fun\xe7\xe3o recursiva ",(0,s.jsx)(o.code,{children:"Genealogy de"})," listada aqui:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'  ` Genealogy of project method\n  ` Genealogy of ( String ) -> Text\n  ` Genealogy of ( Name ) -> Part of sentence\n \n $0:=$1\n QUERY([Friends and Relatives];[Friends and Relatives]ChildrensName=$1)\n If(Records in selection([Friends and Relatives])>0)\n    $0:=$0+" who is the child of "+Genealogy of([Friends and Relatives]Name)\n End if\n'})}),"\n",(0,s.jsxs)(o.p,{children:["Note que el m\xe9todo ",(0,s.jsx)(o.code,{children:"Genealogy of"})," se llama a s\xed mismo."]}),"\n",(0,s.jsxs)(o.p,{children:["A primeira forma \xe9 um ",(0,s.jsx)(o.strong,{children:"algoritmo iterativo"}),". A segunda via \xe9 um ",(0,s.jsx)(o.strong,{children:"algoritmo recursivo"}),"."]}),"\n",(0,s.jsx)(o.p,{children:"Ao implementar c\xf3digo para casos como o exemplo anterior, \xe9 importante notar que \xe9 sempre poss\xedvel escrever m\xe9todos usando itera\xe7\xe3o ou recursividade. Tipicamente, a recurs\xe3o fornece um c\xf3digo mais conciso, leg\xedvel e de f\xe1cil manuten\xe7\xe3o, mas a sua utiliza\xe7\xe3o n\xe3o \xe9 obrigat\xf3ria."}),"\n",(0,s.jsx)(o.p,{children:"Alguns usos t\xedpicos da recursividade em 4D s\xe3o:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"Tratar os registos dentro de tabelas que se relacionam entre si da mesma forma que no exemplo."}),"\n",(0,s.jsxs)(o.li,{children:["Navegar por los documentos y las carpetas del disco, utilizando los comandos ",(0,s.jsx)(o.code,{children:"FOLDER LIST"})," y ",(0,s.jsx)(o.code,{children:"DOCUMENT LIST"}),". Uma pasta pode conter pastas e documentos, as pr\xf3prias subpastas podem conter pastas e documentos, e assim por diante."]}),"\n"]}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Importante:"})," Las llamadas recursivas deben terminar siempre en alg\xfan punto. No exemplo, o m\xe9todo ",(0,s.jsx)(o.code,{children:"Genealogia de"}),' deixa de chamar a si pr\xf3prio quando a consulta n\xe3o devolve registos. Sem este teste de condi\xe7\xe3o, o m\xe9todo chamar-se-ia indefinidamente; eventualmente, 4D retornaria um erro "Stack Full" porque deixaria de ter espa\xe7o para "empilhar" as chamadas (bem como os par\xe2metros e vari\xe1veis locais utilizados no m\xe9todo).']})]})}function m(e={}){const{wrapper:o}={...(0,d.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},221020:(e,o,a)=>{var s=a(296540),d=Symbol.for("react.element"),r=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,t=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,o,a){var s,r={},c=null,l=null;for(s in void 0!==a&&(c=""+a),void 0!==o.key&&(c=""+o.key),void 0!==o.ref&&(l=o.ref),o)n.call(o,s)&&!i.hasOwnProperty(s)&&(r[s]=o[s]);if(e&&e.defaultProps)for(s in o=e.defaultProps)void 0===r[s]&&(r[s]=o[s]);return{$$typeof:d,type:e,key:c,ref:l,props:r,_owner:t.current}}o.Fragment=r,o.jsx=c,o.jsxs=c},474848:(e,o,a)=>{e.exports=a(221020)},28453:(e,o,a)=>{a.d(o,{R:()=>n,x:()=>t});var s=a(296540);const d={},r=s.createContext(d);function n(e){const o=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:n(e.components),s.createElement(r.Provider,{value:o},e.children)}}}]);