"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["64726"],{212754:function(e,o,s){s.r(o),s.d(o,{default:()=>p,frontMatter:()=>n,metadata:()=>a,assets:()=>t,toc:()=>c,contentTitle:()=>i});var a=JSON.parse('{"id":"Concepts/shared","title":"Objetos e cole\xe7\xf5es compartilhados","description":"Os objectos partilhados e as cole\xe7\xf5es partilhadas  s\xe3o objectos espec\xedficos  e cole\xe7\xf5es  cujos conte\xfados s\xe3o partilhados entre processos. Ao contr\xe1rio das vari\xe1veis interprocessos, os objetos partilhados e as cole\xe7\xf5es partilhadas t\xeam a vantagem de serem compat\xedveis com processos 4D preemptivos: podem ser passados por refer\xeancia como par\xe2metros de comandos como New process ou CALL WORKER.","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/Concepts/shared.md","sourceDirName":"Concepts","slug":"/Concepts/shared","permalink":"/docs/pt/19/Concepts/shared","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fshared.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"shared","title":"Objetos e cole\xe7\xf5es compartilhados"},"sidebar":"docs","previous":{"title":"Par\xe2metros","permalink":"/docs/pt/19/Concepts/parameters"},"next":{"title":"Classes","permalink":"/docs/pt/19/Concepts/classes"}}'),r=s("785893"),d=s("250065");let n={id:"shared",title:"Objetos e cole\xe7\xf5es compartilhados"},i=void 0,t={},c=[{value:"Utiliza\xe7\xe3o de objetos ou cole\xe7\xf5es compartidos",id:"utiliza\xe7\xe3o-de-objetos-ou-cole\xe7\xf5es-compartidos",level:2},{value:"Modifica\xe7\xe3o",id:"modifica\xe7\xe3o",level:3},{value:"Leitura",id:"leitura",level:3},{value:"Duplica\xe7\xe3o",id:"duplica\xe7\xe3o",level:3},{value:"Armazenamento",id:"armazenamento",level:3},{value:"Use... End use",id:"use-end-use",level:2},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2}];function l(e){let o={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Os objectos partilhados"})," e as cole\xe7\xf5es partilhadas **** s\xe3o objectos espec\xedficos ",(0,r.jsx)(o.a,{href:"/docs/pt/19/Concepts/object"})," e cole\xe7\xf5es ",(0,r.jsx)(o.a,{href:"/docs/pt/19/Concepts/collection"})," cujos conte\xfados s\xe3o partilhados entre processos. Ao contr\xe1rio das ",(0,r.jsx)(o.a,{href:"/docs/pt/19/Concepts/variables#interprocess-variables",children:"vari\xe1veis interprocessos"}),", os objetos partilhados e as cole\xe7\xf5es partilhadas t\xeam a vantagem de serem compat\xedveis com ",(0,r.jsx)(o.strong,{children:"processos 4D preemptivos"}),": podem ser passados por refer\xeancia como par\xe2metros de comandos como ",(0,r.jsx)(o.code,{children:"New process"})," ou ",(0,r.jsx)(o.code,{children:"CALL WORKER"}),"."]}),"\n",(0,r.jsxs)(o.p,{children:["Os objetos partilhados e as cole\xe7\xf5es partilhadas podem ser armazenados em vari\xe1veis de tipo normalizadas ",(0,r.jsx)(o.code,{children:"Object"})," e ",(0,r.jsx)(o.code,{children:"Collection"})," , mas t\xeam de ser instanciados utilizando comandos espec\xedficos:"]}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:["Para criar um objeto partilhado, utilize o comando ",(0,r.jsx)(o.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page1471.html",children:(0,r.jsx)(o.code,{children:"New shared object"})})," ,"]}),"\n",(0,r.jsxs)(o.li,{children:["Para criar uma cole\xe7\xe3o partilhada, utilize o comando ",(0,r.jsx)(o.a,{href:"/docs/pt/19/API/CollectionClass#new-shared-collection",children:(0,r.jsx)(o.code,{children:"New shared collection"})})," ."]}),"\n"]}),"\n",(0,r.jsx)(o.admonition,{type:"note",children:(0,r.jsx)(o.p,{children:"Os objectos e cole\xe7\xf5es partilhados podem ser definidos como propriedades de objetos ou cole\xe7\xf5es padr\xe3o (n\xe3o partilhados)."})}),"\n",(0,r.jsxs)(o.p,{children:["Para modificar um objeto/cole\xe7\xe3o partilhado, \xe9 necess\xe1rio chamar a estrutura ",(0,r.jsx)(o.strong,{children:"Use...End use"})," . A leitura de um valor de objeto/cole\xe7\xe3o partilhado n\xe3o requer ",(0,r.jsx)(o.strong,{children:"Use...End use"}),"."]}),"\n",(0,r.jsxs)(o.p,{children:["Um cat\xe1logo \xfanico e global devolvido  pelo comando ",(0,r.jsx)(o.code,{children:"Storage"})," est\xe1 sempre dispon\xedvel em todo o banco de dados e seus componentes, e pode ser utilizado para armazenar todos os objetos e cole\xe7\xf5es compartidos."]}),"\n",(0,r.jsx)(o.h2,{id:"utiliza\xe7\xe3o-de-objetos-ou-cole\xe7\xf5es-compartidos",children:"Utiliza\xe7\xe3o de objetos ou cole\xe7\xf5es compartidos"}),"\n",(0,r.jsxs)(o.p,{children:["Quando forem instanciados com os comandos ",(0,r.jsx)(o.code,{children:"New shared object"})," ou ",(0,r.jsx)(o.code,{children:"New shared collection"})," , as propriedades e os elementos do objeto/cole\xe7\xe3o partilhados podem ser modificados ou lidos a partir de qualquer processo da aplica\xe7\xe3o, sob determinadas condi\xe7\xf5es."]}),"\n",(0,r.jsx)(o.h3,{id:"modifica\xe7\xe3o",children:"Modifica\xe7\xe3o"}),"\n",(0,r.jsx)(o.p,{children:"As modifica\xe7\xf5es podem ser aplicadas a objetos partilhados e cole\xe7\xf5es partilhadas:"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:"adicionar ou remover propriedades de objectos,"}),"\n",(0,r.jsx)(o.li,{children:"adicionar ou editar valores (desde que sejam suportados em objetos partilhados), incluindo outros objetos partilhados ou cole\xe7\xf5es (que criam um grupo partilhado, ver abaixo)."}),"\n"]}),"\n",(0,r.jsxs)(o.p,{children:["Todas as instru\xe7\xf5es de modifica\xe7\xe3o num objeto ou cole\xe7\xe3o partilhados t\xeam de ser protegidas dentro de um bloco ",(0,r.jsx)(o.a,{href:"#useend-use",children:(0,r.jsx)(o.code,{children:"Use...End use"})}),", caso contr\xe1rio \xe9 gerado um erro."]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:' $s_obj:=New shared object("prop1";"alpha")\n Use($s_obj)\n    $s_obj.prop1:="omega"\n End Use\n'})}),"\n",(0,r.jsxs)(o.p,{children:["Por conveni\xeancia, todas as fun\xe7\xf5es de cole\xe7\xe3o ",(0,r.jsx)(o.a,{href:"/docs/pt/19/API/CollectionClass"})," que modificam o objeto partilhado ou a cole\xe7\xe3o inserem um bloco interno ",(0,r.jsx)(o.code,{children:"Use...End use"})," para que n\xe3o tenha de o codificar. Por exemplo:"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:'$col:=New shared collection()\n$col.push("alpha") //.push() desencadeia internamente a utiliza\xe7\xe3o Use/End, pelo que n\xe3o \xe9 necess\xe1rio faz\xea-lo voc\xea mesmo\n'})}),"\n",(0,r.jsxs)(o.p,{children:["Se precisar de executar v\xe1rias modifica\xe7\xf5es na mesma cole\xe7\xe3o, pode proteger todas as modifica\xe7\xf5es com um \xfanico ",(0,r.jsx)(o.code,{children:"Use...End use"})," para que as modifica\xe7\xf5es sejam executadas atomicamente."]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:'$col:=Storage.mySharedCollection\nUse($col)\n    $col[0]:="omega" //modificar um elemento tem de ser efetuado dentro de Use/End use\n    $col.push("alpha") //.push() desencadeia internamente Use/End use, mas queremos fazer ambas as modifica\xe7\xf5es atomicamente\nEnd Use\n'})}),"\n",(0,r.jsxs)(o.p,{children:["Um objeto/cole\xe7\xe3o partilhado s\xf3 pode ser modificado por um processo de cada vez. ",(0,r.jsx)(o.code,{children:"Use"})," bloqueia o objeto/cole\xe7\xe3o compartido para outras threads, enquanto que o \xfaltimo ",(0,r.jsx)(o.code,{children:"End use"})," desbloqueia todos os objetos e cole\xe7\xf5es. . A tentativa de modificar um objeto/cole\xe7\xe3o partilhado sem pelo menos um ",(0,r.jsx)(o.code,{children:"Use...End use"})," gera um erro. Quando um processo chama ",(0,r.jsx)(o.code,{children:"Use...End use"})," num objeto/cole\xe7\xe3o partilhado que j\xe1 est\xe1 a ser utilizado por outro processo, este \xe9 simplesmente colocado em espera at\xe9 que o ",(0,r.jsx)(o.code,{children:"End use"})," o desbloqueie (n\xe3o \xe9 gerado qualquer erro). Consequentemente, as instru\xe7\xf5es em ",(0,r.jsx)(o.code,{children:"Use... End use"})," estruturas devem ser executadas rapidamente e desbloquear os elementos o mais rapidamente poss\xedvel. Assim, recomenda-se vivamente que se evite modificar um objeto partilhado ou uma cole\xe7\xe3o diretamente a partir da interface, por exemplo, atrav\xe9s de uma caixa de di\xe1logo."]}),"\n",(0,r.jsxs)(o.p,{children:["A atribui\xe7\xe3o de objectos/colec\xe7\xf5es partilhados a propriedades ou elementos de outros objectos/colec\xe7\xf5es partilhados \xe9 permitida e cria ",(0,r.jsx)(o.strong,{children:"grupos partilhados"}),". Um grupo partilhado \xe9 criado automaticamente quando um objeto/cole\xe7\xe3o partilhado \xe9 definido como valor de propriedade ou elemento de outro objeto/cole\xe7\xe3o partilhado. Os grupos partilhados permitem o aninhamento de objectos e colec\xe7\xf5es partilhados, mas imp\xf5em regras adicionais:"]}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:["Chamar ",(0,r.jsx)(o.code,{children:"Utilizar"})," num objeto/cole\xe7\xe3o partilhado pertencente a um grupo bloqueia propriedades/elementos de todos os objectos/cole\xe7\xf5es partilhados do grupo e incrementa o seu contador de bloqueio. Chamando ",(0,r.jsx)(o.code,{children:"End use"})," diminui o contador de bloqueio do grupo e quando o contador estiver a 0, todos os objectos/colec\xe7\xf5es partilhados ligados s\xe3o desbloqueados."]}),"\n",(0,r.jsx)(o.li,{children:"Um objeto/cole\xe7\xe3o partilhado s\xf3 pode pertencer a um grupo partilhado. \xc9 devolvido um erro se tentar definir um objeto/cole\xe7\xe3o partilhado j\xe1 agrupado para um grupo diferente."}),"\n",(0,r.jsx)(o.li,{children:"Os objetos/cole\xe7\xf5es partilhados agrupados n\xe3o podem ser desagrupados. Uma vez inclu\xeddo num grupo partilhado, um objeto/cole\xe7\xe3o partilhado est\xe1 permanentemente ligado a esse grupo durante toda a sess\xe3o. Mesmo que todas as refer\xeancias de um objeto/cole\xe7\xe3o sejam removidas do objeto/cole\xe7\xe3o pai, permanecer\xe3o linkadas."}),"\n"]}),"\n",(0,r.jsx)(o.p,{children:"Consulte o exemplo 2 para ver uma ilustra\xe7\xe3o das regras de grupos partilhados."}),"\n",(0,r.jsx)(o.h3,{id:"leitura",children:"Leitura"}),"\n",(0,r.jsxs)(o.p,{children:["Ao chamar a ",(0,r.jsx)(o.code,{children:"Use"})," em um objeto/colecci\xf3n compartido de um grupo se bloquear\xe3o as propriedades/elementos de todos os objetos/cole\xe7\xf5es compartidos que perten\xe7am ao mesmo grupo."]}),"\n",(0,r.jsxs)(o.p,{children:["No entanto, \xe9 necess\xe1rio ler um objeto/cole\xe7\xe3o partilhado em ",(0,r.jsx)(o.code,{children:"Use...End use"})," quando v\xe1rios valores est\xe3o ligados entre si e devem ser lidos de uma s\xf3 vez, por raz\xf5es de coer\xeancia."]}),"\n",(0,r.jsx)(o.h3,{id:"duplica\xe7\xe3o",children:"Duplica\xe7\xe3o"}),"\n",(0,r.jsxs)(o.p,{children:["\xc9 poss\xedvel chamar ",(0,r.jsx)(o.code,{children:"OB Copy"})," com um objeto partilhado (ou com um objeto que contenha objetos partilhados como propriedades), mas devolver\xe1 um objeto padr\xe3o (n\xe3o partilhado), incluindo os objetos nele contidos (se existirem)."]}),"\n",(0,r.jsx)(o.h3,{id:"armazenamento",children:"Armazenamento"}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Armazenamento"})," \xe9 um objeto partilhado \xfanico, automaticamente dispon\xedvel em cada aplica\xe7\xe3o e m\xe1quina. Este objeto partilhado \xe9 devolvido pelo comando ",(0,r.jsx)(o.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page1525.html",children:(0,r.jsx)(o.code,{children:"Storage"})})," . \xc9 poss\xedvel utilizar este objeto para fazer refer\xeancia a todos os objetos/cole\xe7\xf5es partilhados definidos durante a sess\xe3o que se pretende que estejam dispon\xedveis a partir de quaisquer processos preemptivos ou padr\xe3o."]}),"\n",(0,r.jsxs)(o.p,{children:["Note-se que, ao contr\xe1rio dos objetos partilhados padr\xe3o, o objeto ",(0,r.jsx)(o.code,{children:"storage"})," n\xe3o cria um grupo partilhado quando s\xe3o adicionados objetos/cole\xe7\xf5es partilhados como suas propriedades. Esta exce\xe7\xe3o permite que o objeto ",(0,r.jsx)(o.strong,{children:"Storage"})," seja utilizado sem bloquear todos os objectos partilhados ou colec\xe7\xf5es ligados."]}),"\n",(0,r.jsxs)(o.p,{children:["Para mais informa\xe7\xf5es, consulte a descri\xe7\xe3o do comando ",(0,r.jsx)(o.code,{children:"Storage"})," ."]}),"\n",(0,r.jsx)(o.h2,{id:"use-end-use",children:"Use... End use"}),"\n",(0,r.jsxs)(o.p,{children:["A sintaxe formal da estrutura ",(0,r.jsx)(o.code,{children:"Use...End use"})," \xe9 a seguinte:"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:" Use(Shared_object_or_Shared_collection)\n    statement(s)\n End use\n"})}),"\n",(0,r.jsxs)(o.p,{children:["A estrutura ",(0,r.jsx)(o.code,{children:"Use...End use"})," define uma sequ\xeancia de instru\xe7\xf5es que executar\xe3o tarefas no par\xe2metro ",(0,r.jsx)(o.em,{children:"Shared_object_or_Shared_collection"})," sob a prote\xe7\xe3o de um sem\xe1foro interno. ",(0,r.jsx)(o.em,{children:"Shared_object_or_Shared_collection"})," pode ser qualquer objeto partilhado ou cole\xe7\xe3o partilhada v\xe1lida."]}),"\n",(0,r.jsxs)(o.p,{children:["Os objectos partilhados e as colec\xe7\xf5es partilhadas s\xe3o concebidos para permitir a comunica\xe7\xe3o entre processos, em particular, ",(0,r.jsx)(o.strong,{children:"processos 4D preemptivos"}),". Podem ser passados por refer\xeancia como par\xe2metros de um processo para outro. \xc9 obrigat\xf3rio rodear as modifica\xe7\xf5es em objectos partilhados ou colec\xe7\xf5es partilhadas pelas palavras-chave ",(0,r.jsx)(o.code,{children:"Use...End use"})," para impedir o acesso simult\xe2neo entre processos."]}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:["Quando a linha ",(0,r.jsx)(o.strong,{children:"Use"})," \xe9 executada com \xeaxito, todas as propriedades/elementos de ",(0,r.jsx)(o.em,{children:"Shared_object_or_Shared_collection"})," s\xe3o bloqueados para todos os outros processos com acesso de escrita at\xe9 que a linha correspondente ",(0,r.jsx)(o.code,{children:"End use"})," seja executada."]}),"\n",(0,r.jsx)(o.li,{children:"As declara\xe7\xf5es __ sequ\xeancia podem executar qualquer modifica\xe7\xe3o nas propriedades/elementos Shared_object_or_Shared_collection sem risco de acesso simult\xe2neo."}),"\n",(0,r.jsxs)(o.li,{children:["Se outro objeto partilhado ou cole\xe7\xe3o for adicionado como uma propriedade do par\xe2metro ",(0,r.jsx)(o.em,{children:"Shared_object_or_Shared_collection"})," , ficam ligados no mesmo grupo partilhado."]}),"\n",(0,r.jsxs)(o.li,{children:["Se outro processo tentar acessar a uma das propriedades ",(0,r.jsx)(o.em,{children:"Shared_object_or_Shared_collection"})," ou propriedades ligadas enquanto uma sequ\xeancia ",(0,r.jsx)(o.strong,{children:"Use...End use"})," estiver sendo executada, \xe9 automaticamente colocado em espera e aguarda at\xe9 que a sequ\xeancia atual seja terminada."]}),"\n",(0,r.jsxs)(o.li,{children:["A linha ",(0,r.jsx)(o.strong,{children:"End use"})," desbloqueia as propriedades ",(0,r.jsx)(o.em,{children:"Shared_object_or_Shared_collection"})," e todos os objetos que compartem o mesmo identificador de bloqueio."]}),"\n",(0,r.jsxs)(o.li,{children:["V\xe1rias estruturas ",(0,r.jsx)(o.strong,{children:"Use...End use"})," podem ser aninhadas no c\xf3digo 4D. No caso de um grupo, cada ",(0,r.jsx)(o.strong,{children:"Utiliza\xe7\xe3o"})," aumenta o contador de bloqueio do grupo e cada ",(0,r.jsx)(o.strong,{children:"Utiliza\xe7\xe3o final"})," diminui-o; todas as propriedades/elementos s\xf3 ser\xe3o libertados quando a \xfaltima chamada ",(0,r.jsx)(o.strong,{children:"Utiliza\xe7\xe3o final"})," colocar o contador de bloqueio a 0."]}),"\n"]}),"\n",(0,r.jsx)(o.admonition,{type:"note",children:(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.a,{href:"/docs/pt/19/API/CollectionClass",children:"Collection functions"})," that modify shared collections automatically trigger an internal ",(0,r.jsx)(o.strong,{children:"Use"})," for this shared collection while the function is executed, making an explicit call to the structure unnecessary. Tamb\xe9m \xe9 o caso de comandos ",(0,r.jsx)(o.code,{children:"ARRAY TO COLLECTION"})," e ",(0,r.jsx)(o.code,{children:"OB REMOVE"}),"."]})}),"\n",(0,r.jsx)(o.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,r.jsx)(o.p,{children:"Se quiser lan\xe7ar v\xe1rios processos que executem uma tarefa de invent\xe1rio em diferentes produtos e atualizem o mesmo objeto partilhado. O processo principal instancia um objeto partilhado vazio e, em seguida, lan\xe7a os outros processos, passando o objeto partilhado e os produtos a contar como par\xe2metros:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:' ARRAY TEXT($_items;0)\n ... //preencher o array com itens para contar\n $nbItems:=Tamanho do array($_items)\n var $inventory : Object\n $inventory:=Novo objeto partilhado\n Use($inventory)\n    $inventory.nbItems:=$nbItems\n End use\n\n  //Criar processos\n For($i;1;$nbItems)\n    $ps:=New process("HowMany";0; "HowMany_"+$_items{$i};$_items{$i};$inventory)\n  //$inventory objeto enviado por refer\xeancia\n End for\n'})}),"\n",(0,r.jsx)(o.p,{children:'No m\xe9todo "HowMany", o invent\xe1rio \xe9 efetuado e o objeto partilhado $inventory \xe9 atualizado o mais rapidamente poss\xedvel:'}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:"    //HowMany\n #DECLARE ($what : Text ; $inventory : Object)\n\n $count:=CountMethod($what) //m\xe9todo para contar produtos\n Use($inventory) //utilizar objeto partilhado\n    $inventory[$what]:=$count  /guardar os resultados para este item\n End use\n"})}),"\n",(0,r.jsx)(o.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,r.jsx)(o.p,{children:"Os exemplos seguintes destacam regras espec\xedficas para o tratamento de grupos partilhados:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:" $ob1:=Novo objeto partilhado\n $ob2:=Novo objeto partilhado\n Use($ob1)\n    $ob1.a:=$ob2  //grupo 1 \xe9 criado\n End use\n\n $ob3:=Novo objeto partilhado\n $ob4:=Novo objeto partilhado\n Use($ob3)\n    $ob3.a:=$ob4  //grupo 2 \xe9 criado\n End use\n\n Use($ob1) //utilize um objeto do grupo 1\n    $ob1.b:=$ob4  //ERROR\n  //$ob4 j\xe1 pertence a outro grupo\n  //atribui\xe7\xe3o n\xe3o \xe9 permitida\n End use\n\n Use($ob3)\n    $ob3.a:=Null //remover qualquer refer\xeancia a $ob4 do grupo 2\n End use\n\n Use($ob1) //utilizar um objeto do grupo 1\n    $ob1.b:=$ob4  //ERROR\n  //$ob4 ainda pertence ao grupo 2\n  //atribui\xe7\xe3o n\xe3o \xe9 permitida\n End use\n"})})]})}function p(e={}){let{wrapper:o}={...(0,d.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,o,s){s.d(o,{Z:function(){return i},a:function(){return n}});var a=s(667294);let r={},d=a.createContext(r);function n(e){let o=a.useContext(d);return a.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),a.createElement(d.Provider,{value:o},e.children)}}}]);