"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["80571"],{800437:function(e,o,s){s.r(o),s.d(o,{default:()=>p,frontMatter:()=>d,metadata:()=>a,assets:()=>t,toc:()=>i,contentTitle:()=>c});var a=JSON.parse('{"id":"Concepts/shared","title":"Objetos e cole\xe7\xf5es compartilhados","description":"Shared objects and shared collections are specific objects and collections whose contents are shared between processes. In contrast to interprocess variables, shared objects and shared collections have the advantage of being compatible with preemptive 4D processes: they can be passed by reference as parameters to commands such as New process or CALL WORKER.","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/Concepts/shared.md","sourceDirName":"Concepts","slug":"/Concepts/shared","permalink":"/docs/pt/20-R7/Concepts/shared","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fshared.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"shared","title":"Objetos e cole\xe7\xf5es compartilhados"},"sidebar":"docs","previous":{"title":"Par\xe2metros","permalink":"/docs/pt/20-R7/Concepts/parameters"},"next":{"title":"Classes","permalink":"/docs/pt/20-R7/Concepts/classes"}}'),r=s("785893"),n=s("250065");let d={id:"shared",title:"Objetos e cole\xe7\xf5es compartilhados"},c=void 0,t={},i=[{value:"Utiliza\xe7\xe3o de objetos ou cole\xe7\xf5es compartidos",id:"utiliza\xe7\xe3o-de-objetos-ou-cole\xe7\xf5es-compartidos",level:2},{value:"Modifica\xe7\xe3o",id:"modifica\xe7\xe3o",level:3},{value:"Leitura",id:"leitura",level:3},{value:"Duplica\xe7\xe3o",id:"duplica\xe7\xe3o",level:3},{value:"Armazenamento",id:"armazenamento",level:3},{value:"Use... End use",id:"use-end-use",level:2},{value:"Automatic Use...End use calls",id:"automatic-useend-use-calls",level:3},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2}];function l(e){let o={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Shared objects"})," and ",(0,r.jsx)(o.strong,{children:"shared collections"})," are specific ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R7/Concepts/object",children:"objects"})," and ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R7/Concepts/collection",children:"collections"})," whose contents are shared between processes. In contrast to ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R7/Concepts/variables#interprocess-variables",children:"interprocess variables"}),", shared objects and shared collections have the advantage of being compatible with ",(0,r.jsx)(o.strong,{children:"preemptive 4D processes"}),": they can be passed by reference as parameters to commands such as ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R7/commands/new-process",children:(0,r.jsx)(o.code,{children:"New process"})})," or ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R7/commands/call-worker",children:(0,r.jsx)(o.code,{children:"CALL WORKER"})}),"."]}),"\n",(0,r.jsxs)(o.p,{children:["Objetos compartilhados e cole\xe7\xf5es compartilhadas s\xe3o armazenados em vari\xe1veis padr\xe3o ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R7/Concepts/object",children:(0,r.jsx)(o.code,{children:"Object"})})," e ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R7/Concepts/collection",children:(0,r.jsx)(o.code,{children:"Collection"})})," do tipo, mas devem ser instanciados usando comandos espec\xedficos:"]}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:["para criar um objeto compartilhado, use o comando ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R7/commands/new-shared-object",children:(0,r.jsx)(o.code,{children:"Novo objeto compartilhado"})})," ou chame a fun\xe7\xe3o ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R7/API/ClassClass#new",children:(0,r.jsx)(o.code,{children:"new()"})})," de uma ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R7/Concepts/classes#shared-classes",children:"classe compartilhada"}),","]}),"\n",(0,r.jsxs)(o.li,{children:["para criar uma cole\xe7\xe3o compartilhada, use o comando ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R7/commands/new-shared-collection",children:(0,r.jsx)(o.code,{children:"New shared collection"})}),"."]}),"\n"]}),"\n",(0,r.jsx)(o.p,{children:"Shared objects and collections can only contain scalar values or other shared objects and collections. However, shared objects and collections can be set as properties of standard (not shared) objects or collections."}),"\n",(0,r.jsxs)(o.p,{children:["Para modificar um objeto/cole\xe7\xe3o compartilhada, a estrutura ",(0,r.jsx)(o.strong,{children:"Usar... Uso final"})," deve ser chamada. A leitura de um valor de objeto/cole\xe7\xe3o compartilhado n\xe3o requer ",(0,r.jsx)(o.strong,{children:"Uso...Uso final"}),"."]}),"\n",(0,r.jsxs)(o.p,{children:["A unique, global catalog returned by the ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R7/commands/storage",children:(0,r.jsx)(o.code,{children:"Storage"})})," command is always available throughout the application and its components, and can be used to store all shared objects and collections."]}),"\n",(0,r.jsx)(o.h2,{id:"utiliza\xe7\xe3o-de-objetos-ou-cole\xe7\xf5es-compartidos",children:"Utiliza\xe7\xe3o de objetos ou cole\xe7\xf5es compartidos"}),"\n",(0,r.jsxs)(o.p,{children:["Depois de instanciados com os comandos ",(0,r.jsx)(o.code,{children:"New shared object"})," ou ",(0,r.jsx)(o.code,{children:"New shared collection"}),", as propriedades e os elementos do objeto/cole\xe7\xe3o compartilhados podem ser modificados ou lidos em qualquer processo do aplicativo, sob determinadas condi\xe7\xf5es."]}),"\n",(0,r.jsx)(o.h3,{id:"modifica\xe7\xe3o",children:"Modifica\xe7\xe3o"}),"\n",(0,r.jsx)(o.p,{children:"As modifica\xe7\xf5es podem ser aplicadas a objetos partilhados e cole\xe7\xf5es partilhadas:"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:"adicionar ou remover propriedades de objectos,"}),"\n",(0,r.jsx)(o.li,{children:"adicionar ou editar valores (desde que sejam suportados em objetos partilhados), incluindo outros objetos partilhados ou cole\xe7\xf5es (que criam um grupo partilhado, ver abaixo)."}),"\n"]}),"\n",(0,r.jsx)(o.admonition,{type:"note",children:(0,r.jsx)(o.p,{children:"Keep in mind that objects or collections set as the content of a shared object or collection must themselves be shared."})}),"\n",(0,r.jsxs)(o.p,{children:["Todas as instru\xe7\xf5es de modifica\xe7\xe3o em um objeto compartilhado ou cole\xe7\xe3o requerem ser protegidas dentro de um bloco ",(0,r.jsx)(o.a,{href:"#useend-use-use",children:(0,r.jsx)(o.code,{children:"Use...End use"})}),", caso contr\xe1rio um erro \xe9 gerado."]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:' $s_obj:=New shared object("prop1";"alpha")\n Use($s_obj)\n    $s_obj.prop1:="omega"\n End Use\n'})}),"\n",(0,r.jsx)(o.p,{children:"Por conveni\xeancia, todas as fun\xe7\xf5es de cole\xe7\xe3o  que modificam o objeto partilhado ou a cole\xe7\xe3o inserem um bloco interno Use...End use para que n\xe3o tenha de o codificar. Por exemplo:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:'$col:=New shared collection()\n$col.push("alpha") //.push() desencadeia internamente a utiliza\xe7\xe3o Use/End, pelo que n\xe3o \xe9 necess\xe1rio faz\xea-lo voc\xea mesmo\n'})}),"\n",(0,r.jsxs)(o.p,{children:["Se precisar executar v\xe1rias modifica\xe7\xf5es na mesma cole\xe7\xe3o, voc\xea poder\xe1 proteger todas as modifica\xe7\xf5es com um \xfanico ",(0,r.jsx)(o.code,{children:"Use...End use"})," para que as modifica\xe7\xf5es sejam executadas atomicamente."]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:'$col:=Storage.mySharedCollection\nUse($col)\n	$col[0]:="omega" //modificar um elemento tem de ser efetuado dentro de Use/End use\n	$col.push("alpha") //.push() desencadeia internamente Use/End use, mas queremos fazer ambas as modifica\xe7\xf5es atomicamente\nEnd Use\n'})}),"\n",(0,r.jsxs)(o.p,{children:["Um objeto/cole\xe7\xe3o partilhado s\xf3 pode ser modificado por um processo de cada vez. ",(0,r.jsx)(o.code,{children:"Usar"})," bloqueia o objeto/cole\xe7\xe3o compartilhada de outros t\xf3picos, enquanto ",(0,r.jsx)(o.code,{children:"Finalizar uso"})," desbloqueia o objeto/cole\xe7\xe3o compartilhada (se o contador de bloqueio estiver em 0, veja abaixo). . A tentativa de modificar um objeto/cole\xe7\xe3o compartilhado sem pelo menos um ",(0,r.jsx)(o.code,{children:"Use...End use"})," gera um erro. Quando um processo chama ",(0,r.jsx)(o.code,{children:"Use...End use"})," em um objeto/colec\u0327a\u0303o compartilhado que ja\u0301 esta\u0301 em uso por outro processo, ele simplesmente fica em espera ate\u0301 que o ",(0,r.jsx)(o.code,{children:"End use"})," o desbloqueie (nenhum erro e\u0301 gerado). Consequentemente, as instru\xe7\xf5es dentro das estruturas ",(0,r.jsx)(o.code,{children:"Use...End use"})," devem ser executadas rapidamente e desbloquear os elementos o mais r\xe1pido poss\xedvel. Assim, recomenda-se vivamente que se evite modificar um objeto partilhado ou uma cole\xe7\xe3o diretamente a partir da interface, por exemplo, atrav\xe9s de uma caixa de di\xe1logo."]}),"\n",(0,r.jsx)(o.p,{children:"A atribui\xe7\xe3o de objectos/colec\xe7\xf5es partilhados a propriedades ou elementos de outros objectos/colec\xe7\xf5es partilhados \xe9 permitida e cria grupos partilhados**. Um grupo partilhado \xe9 criado automaticamente quando um objeto/cole\xe7\xe3o partilhado \xe9 definido como valor de propriedade ou elemento de outro objeto/cole\xe7\xe3o partilhado. Os grupos partilhados permitem o aninhamento de objectos e colec\xe7\xf5es partilhados, mas imp\xf5em regras adicionais:"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:["Chamar ",(0,r.jsx)(o.code,{children:"Use"})," em um objeto/coleta compartilhado pertencente a um grupo bloqueia propriedades/elementos de todos os objetos/coletas compartilhados do grupo e incrementa seu contador de bloqueio. Chamando ",(0,r.jsx)(o.code,{children:"Fim uso"})," diminui o contador de bloqueio do grupo e quando o contador est\xe1 em 0, todos os objetos/cole\xe7\xf5es compartilhadas vinculadas s\xe3o desbloqueados."]}),"\n",(0,r.jsx)(o.li,{children:"Um objeto/cole\xe7\xe3o partilhado s\xf3 pode pertencer a um grupo partilhado. \xc9 devolvido um erro se tentar definir um objeto/cole\xe7\xe3o partilhado j\xe1 agrupado para um grupo diferente."}),"\n",(0,r.jsx)(o.li,{children:"Os objetos/cole\xe7\xf5es partilhados agrupados n\xe3o podem ser desagrupados. Uma vez inclu\xeddo num grupo partilhado, um objeto/cole\xe7\xe3o partilhado est\xe1 permanentemente ligado a esse grupo durante toda a sess\xe3o. Mesmo que todas as refer\xeancias de um objeto/cole\xe7\xe3o sejam removidas do objeto/cole\xe7\xe3o pai, permanecer\xe3o linkadas."}),"\n"]}),"\n",(0,r.jsx)(o.p,{children:"Consulte o exemplo 2 para ver uma ilustra\xe7\xe3o das regras de grupos partilhados."}),"\n",(0,r.jsx)(o.h3,{id:"leitura",children:"Leitura"}),"\n",(0,r.jsxs)(o.p,{children:["A leitura de propriedades ou elementos de um objeto/cole\xe7\xe3o compartilhado \xe9 permitida sem a necessidade de chamar a estrutura ",(0,r.jsx)(o.code,{children:"Use...End use"}),", mesmo que o objeto/cole\xe7\xe3o compartilhado esteja sendo usado por outro processo."]}),"\n",(0,r.jsxs)(o.p,{children:["No entanto, \xe9 necess\xe1rio ler um objeto/cole\xe7\xe3o partilhado dentro de ",(0,r.jsx)(o.code,{children:"Use...End use"})," quando v\xe1rios valores est\xe3o ligados entre si e devem ser lidos de uma s\xf3 vez, por raz\xf5es de coer\xeancia."]}),"\n",(0,r.jsx)(o.h3,{id:"duplica\xe7\xe3o",children:"Duplica\xe7\xe3o"}),"\n",(0,r.jsxs)(o.p,{children:["Chamar ",(0,r.jsx)(o.code,{children:"OB Copy"})," com um objeto partilhado (ou com um objeto que contenha objeto(s) partilhados como propriedades) \xe9 poss\xedvel, mas ir\xe1 retornar um objeto padr\xe3o (n\xe3o partilhado) incluindo os objetos contidos nele (se houver)."]}),"\n",(0,r.jsx)(o.h3,{id:"armazenamento",children:"Armazenamento"}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Armazenamento"})," \xe9 um objeto partilhado \xfanico, automaticamente dispon\xedvel em cada aplica\xe7\xe3o e m\xe1quina. Este objeto compartilhado \xe9 retornado pelo comando ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R7/commands/storage",children:(0,r.jsx)(o.code,{children:"Storage"})}),". \xc9 poss\xedvel utilizar este objeto para fazer refer\xeancia a todos os objetos/cole\xe7\xf5es partilhados definidos durante a sess\xe3o que se pretende que estejam dispon\xedveis a partir de quaisquer processos preemptivos ou padr\xe3o."]}),"\n",(0,r.jsxs)(o.p,{children:["Observe que, diferentemente dos objetos compartilhados padr\xe3o, o objeto ",(0,r.jsx)(o.code,{children:"storage"})," n\xe3o cria um grupo compartilhado quando objetos/cole\xe7\xf5es compartilhados s\xe3o adicionados como suas propriedades. Esta exce\xe7\xe3o permite que o objeto ",(0,r.jsx)(o.strong,{children:"Storage"})," seja usado sem bloquear todos os objetos compartilhados ou cole\xe7\xf5es conectadas."]}),"\n",(0,r.jsxs)(o.p,{children:["Para mais informa\xe7\xf5es, consulte a descri\xe7\xe3o do comando ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R7/commands/storage",children:(0,r.jsx)(o.code,{children:"Storage"})}),"."]}),"\n",(0,r.jsx)(o.h2,{id:"use-end-use",children:"Use... End use"}),"\n",(0,r.jsxs)(o.p,{children:["A sintaxe formal da estrutura ",(0,r.jsx)(o.code,{children:"Use...End use"})," \xe9 a seguinte:"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:" Use(Shared_object_or_Shared_collection)\n    statement(s)\n End use\n"})}),"\n",(0,r.jsxs)(o.p,{children:["A estrutura ",(0,r.jsx)(o.code,{children:"Use...End use"})," define uma sequ\xeancia de instru\xe7\xf5es que executar\xe3o tarefas no par\xe2metro ",(0,r.jsx)(o.em,{children:"Shared_object_or_Shared_collection"})," sob a prote\xe7\xe3o de um sem\xe1foro interno. O ",(0,r.jsx)(o.em,{children:"Shared_object_or_Shared_collection"})," pode ser qualquer objeto compartilhado ou cole\xe7\xe3o compartilhada v\xe1lida."]}),"\n",(0,r.jsxs)(o.p,{children:["Objetos compartilhados e cole\xe7\xf5es compartilhadas s\xe3o projetados para permitir a comunica\xe7\xe3o entre processos, em particular, ",(0,r.jsx)(o.strong,{children:"processos 4D preemptivos"}),". Podem ser passados por refer\xeancia como par\xe2metros de um processo para outro. \xc9 obrigat\xf3rio envolver as modifica\xe7\xf5es em objetos compartilhados ou cole\xe7\xf5es compartilhadas com as palavras-chave ",(0,r.jsx)(o.code,{children:"Use...End use"})," para evitar o acesso simult\xe2neo entre processos."]}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:["Quando a linha ",(0,r.jsx)(o.strong,{children:"Use"})," \xe9 executada com sucesso, todas as propriedades/elementos ",(0,r.jsx)(o.em,{children:"Shared_object_or_Shared_collection"})," s\xe3o bloqueados para todos os outros processos com acesso de grava\xe7\xe3o at\xe9 que a linha ",(0,r.jsx)(o.code,{children:"End use"})," correspondente seja executada."]}),"\n",(0,r.jsxs)(o.li,{children:["A sequ\xeancia de ",(0,r.jsx)(o.em,{children:"declara\xe7\xf5es"})," pode executar qualquer modifica\xe7\xe3o nas propriedades/elementos do ",(0,r.jsx)(o.em,{children:"Shared_object_or_Shared_collection"})," sem risco de acesso simult\xe2neo."]}),"\n",(0,r.jsxs)(o.li,{children:["Se outro objeto ou cole\xe7\xe3o compartilhada for adicionado como uma propriedade do par\xe2metro ",(0,r.jsx)(o.em,{children:"Shared_object_or_Shared_collection"}),", eles se tornar\xe3o conectados dentro do mesmo grupo compartilhado."]}),"\n",(0,r.jsxs)(o.li,{children:["Se outro processo tentar acessar uma das propriedades ",(0,r.jsx)(o.em,{children:"Shared_object_or_Shared_collection"})," ou propriedades conectadas enquanto um ",(0,r.jsx)(o.strong,{children:"Use. .Fim de uso"})," a sequ\xeancia est\xe1 sendo executada, ela \xe9 automaticamente colocada em espera e aguarda at\xe9 que a sequ\xeancia atual seja encerrada."]}),"\n",(0,r.jsxs)(o.li,{children:["A linha ",(0,r.jsx)(o.strong,{children:"End use"})," desbloqueia as propriedades ",(0,r.jsx)(o.em,{children:"Shared_object_or_Shared_collection"})," e todos os objetos do mesmo grupo."]}),"\n",(0,r.jsxs)(o.li,{children:["V\xe1rias estruturas de ",(0,r.jsx)(o.strong,{children:"Uso...Uso final"})," podem ser aninhadas no c\xf3digo 4D. No caso de um grupo, cada ",(0,r.jsx)(o.strong,{children:"Uso"})," incrementa o contador de bloqueio do grupo e cada ",(0,r.jsx)(o.strong,{children:"uso final"})," decreta ele; todas as propriedades/elementos ser\xe3o liberadas somente quando a \xfaltima chamada ",(0,r.jsx)(o.strong,{children:"Final"})," define o contador de bloqueio como 0."]}),"\n"]}),"\n",(0,r.jsx)(o.h3,{id:"automatic-useend-use-calls",children:"Automatic Use...End use calls"}),"\n",(0,r.jsxs)(o.p,{children:["The following features automatically trigger an internal ",(0,r.jsx)(o.strong,{children:"Use/End use"}),", making an explicit call to the structure unnecessary when it is executed:"]}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.a,{href:"/docs/pt/20-R7/API/CollectionClass",children:"fun\xe7\xf5es de cole\xe7\xe3o"})," que modificam as cole\xe7\xf5es compartilhadas,"]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.a,{href:"/docs/pt/20-R7/commands/array-to-collection",children:(0,r.jsx)(o.code,{children:"ARRAY TO COLLECTION"})})," command,"]}),"\n",(0,r.jsxs)(o.li,{children:["comando ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R7/commands/ob-remove",children:(0,r.jsx)(o.code,{children:"OB REMOVE"})}),","]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.a,{href:"/docs/pt/20-R7/Concepts/classes#shared-functions",children:"fun\xe7\xf5es compartilhadas"})," (definida em ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R7/Concepts/classes#shared-classes",children:"classes compartilhadas"}),")."]}),"\n"]}),"\n",(0,r.jsx)(o.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,r.jsx)(o.p,{children:"Se quiser lan\xe7ar v\xe1rios processos que executem uma tarefa de invent\xe1rio em diferentes produtos e atualizem o mesmo objeto partilhado. O processo principal instancia um objeto partilhado vazio e, em seguida, lan\xe7a os outros processos, passando o objeto partilhado e os produtos a contar como par\xe2metros:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:' ARRAY TEXT($_items;0)\n ... //preencher o array com itens para contar\n $nbItems:=Tamanho do array($_items)\n var $inventory : Object\n $inventory:=Novo objeto partilhado\n Use($inventory)\n    $inventory.nbItems:=$nbItems\n End use\n\n  //Criar processos\n For($i;1;$nbItems)\n    $ps:=New process("HowMany";0; "HowMany_"+$_items{$i};$_items{$i};$inventory)\n  //$inventory objeto enviado por refer\xeancia\n End for\n'})}),"\n",(0,r.jsx)(o.p,{children:'No m\xe9todo "HowMany", o invent\xe1rio \xe9 efetuado e o objeto partilhado $inventory \xe9 atualizado o mais rapidamente poss\xedvel:'}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:"	//HowMany\n #DECLARE ($what : Text ; $inventory : Object)\n\n $count:=CountMethod($what) //m\xe9todo para contar produtos\n Use($inventory) //utilizar objeto partilhado\n    $inventory[$what]:=$count  //guardar os resultados para este item\n End use\n"})}),"\n",(0,r.jsx)(o.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,r.jsx)(o.p,{children:"Os exemplos seguintes destacam regras espec\xedficas para o tratamento de grupos partilhados:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:" $ob1:=New shared object\n $ob2:=New shared object\n Use($ob1)\n    $ob1.a:=$ob2  //grupo 1 \xe9 criado\n End use\n\n $ob3:=New shared object\n $ob4:=New shared object\n Use($ob3)\n    $ob3.a:=$ob4  //grupo 2 \xe9 criado\n End use\n\n Use($ob1) //utilize um objeto do grupo 1\n    $ob1.b:=$ob4  //ERROR\n  //$ob4 j\xe1 pertence a outro grupo\n  //atribui\xe7\xe3o n\xe3o \xe9 permitida\n End use\n\n Use($ob3)\n    $ob3.a:=Null //remover qualquer refer\xeancia a $ob4 do grupo 2\n End use\n\n Use($ob1) //utilizar um objeto do grupo 1\n    $ob1.b:=$ob4  //ERROR\n  //$ob4 ainda pertence ao grupo 2\n  //atribui\xe7\xe3o n\xe3o \xe9 permitida\n End use\n"})})]})}function p(e={}){let{wrapper:o}={...(0,n.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,o,s){s.d(o,{Z:function(){return c},a:function(){return d}});var a=s(667294);let r={},n=a.createContext(r);function d(e){let o=a.useContext(n);return a.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),a.createElement(n.Provider,{value:o},e.children)}}}]);