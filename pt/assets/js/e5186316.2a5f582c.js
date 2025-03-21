"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["81217"],{745132:function(e,o,s){s.r(o),s.d(o,{default:()=>p,frontMatter:()=>n,metadata:()=>r,assets:()=>t,toc:()=>c,contentTitle:()=>d});var r=JSON.parse('{"id":"FormObjects/dropdownListOverview","title":"Lista suspensa ou drop down","description":"Listas drop-down s\xe3o objetos que permitem que os usu\xe1rios selecionem de uma lista. Gerenciar os itens exibidos na lista drop down usando um array, uma lista de escolha ou uma a\xe7\xe3o padr\xe3o.","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/FormObjects/dropdownList_Overview.md","sourceDirName":"FormObjects","slug":"/FormObjects/dropdownListOverview","permalink":"/docs/pt/20-R7/FormObjects/dropdownListOverview","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2FdropdownList_Overview.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"dropdownListOverview","title":"Lista suspensa ou drop down"},"sidebar":"docs","previous":{"title":"Combo Box","permalink":"/docs/pt/20-R7/FormObjects/comboBoxOverview"},"next":{"title":"\xc1rea de grupo","permalink":"/docs/pt/20-R7/FormObjects/groupBox"}}'),a=s("785893"),i=s("250065");let n={id:"dropdownListOverview",title:"Lista suspensa ou drop down"},d=void 0,t={},c=[{value:"Tipos de listas pendentes",id:"tipos-de-listas-pendentes",level:2},{value:"Manuseamento de listas pendentes",id:"manuseamento-de-listas-pendentes",level:2},{value:"Utiliza\xe7\xe3o de um objecto",id:"utiliza\xe7\xe3o-de-um-objecto",level:3},{value:"Usar um array",id:"usar-um-array",level:3},{value:"Utilizar uma lista de sele\xe7\xe3o",id:"utilizar-uma-lista-de-sele\xe7\xe3o",level:3},{value:"Valor do item selecionado ou Refer\xeancia do item selecionado",id:"valor-do-item-selecionado-ou-refer\xeancia-do-item-selecionado",level:4},{value:"Se usar uma lista hier\xe1rquica, s\xf3 o primeiro n\xedvel \xe9 mostrado e pode ser selecionado.",id:"se-usar-uma-lista-hier\xe1rquica-s\xf3-o-primeiro-n\xedvel-\xe9-mostrado-e-pode-ser-selecionado",level:3},{value:"Usar uma a\xe7\xe3o padr\xe3o",id:"usar-uma-a\xe7\xe3o-padr\xe3o",level:3},{value:"Propriedades compat\xedveis",id:"propriedades-compat\xedveis",level:2}];function l(e){let o={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.p,{children:"Listas drop-down s\xe3o objetos que permitem que os usu\xe1rios selecionem de uma lista. Gerenciar os itens exibidos na lista drop down usando um array, uma lista de escolha ou uma a\xe7\xe3o padr\xe3o."}),"\n",(0,a.jsx)(o.p,{children:'Em macOS, listas drop down s\xe3o tamb\xe9m chamadas de "menu pop up" Ambos os nomes referem aos mesmos objetos. Ambos os nomes referem aos mesmos objetos. Como no exemplo abaixo, a apar\xeancia desses objetos podem diferenciar levemente de acordo com a plataforma:'}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.img,{src:s(872682).Z+"",width:"458",height:"158"})}),"\n",(0,a.jsx)(o.h2,{id:"tipos-de-listas-pendentes",children:"Tipos de listas pendentes"}),"\n",(0,a.jsxs)(o.p,{children:["Pode criar diferentes tipos de listas pendentes com diferentes funcionalidades. Para definir un tipo, seleccione los valores apropiados ",(0,a.jsx)(o.strong,{children:"Tipo de expresi\xf3n"})," y ",(0,a.jsx)(o.strong,{children:"Tipo de datos"})," en la lista Propiedades o utilice su equivalente JSON."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(o.table,{children:[(0,a.jsx)(o.thead,{children:(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.th,{children:"Tipo"}),(0,a.jsx)(o.th,{children:"Funcionalidades"}),(0,a.jsx)(o.th,{children:"Tipo de express\xe3o"}),(0,a.jsx)(o.th,{children:"Tipo de dados"}),(0,a.jsx)(o.th,{children:"Defini\xe7\xe3o JSON"})]})}),(0,a.jsxs)(o.tbody,{children:[(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Object"}),(0,a.jsx)(o.td,{children:"Constru\xeddo sobre uma colec\xe7\xe3o"}),(0,a.jsx)(o.td,{children:"Object"}),(0,a.jsx)(o.td,{children:"Numeric, Text, Date, ou Time"}),(0,a.jsxs)(o.td,{children:[(0,a.jsx)(o.code,{children:"dataSourceTypeHint: object"})," + ",(0,a.jsx)(o.code,{children:"numberFormat: <format>"})," or ",(0,a.jsx)(o.code,{children:"textFormat: <format>"})," o ",(0,a.jsx)(o.code,{children:"dateFormat: <format>"})," o ",(0,a.jsx)(o.code,{children:"timeFormat: <format>"})]})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Array"}),(0,a.jsx)(o.td,{children:"Constru\xeddo sobre um array"}),(0,a.jsx)(o.td,{children:"Array"}),(0,a.jsx)(o.td,{children:"Numeric, Text, Date, ou Time"}),(0,a.jsxs)(o.td,{children:[(0,a.jsx)(o.code,{children:"dataSourceTypeHint: arrayNumber"})," o ",(0,a.jsx)(o.code,{children:"arrayText"})," o ",(0,a.jsx)(o.code,{children:"arrayDate"})," o ",(0,a.jsx)(o.code,{children:"arrayTime"})]})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Lista de op\xe7\xf5es guardada como valor"}),(0,a.jsx)(o.td,{children:"Constru\xeddo com base numa lista de op\xe7\xf5es (\u201Cpadr\xe3o\u201D)"}),(0,a.jsx)(o.td,{children:"Lista"}),(0,a.jsx)(o.td,{children:"Valor do item seleccionado"}),(0,a.jsxs)(o.td,{children:[(0,a.jsx)(o.code,{children:"dataSourceTypeHint: text"})," + ",(0,a.jsx)(o.code,{children:"saveAs: value"})]})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Salvar como"}),(0,a.jsx)(o.td,{children:"Constru\xeddo sobre numa lista de escolha. A posi\xe7\xe3o do item \xe9 guardada"}),(0,a.jsx)(o.td,{children:"Lista"}),(0,a.jsx)(o.td,{children:"Refer\xeancia do item seleccionado"}),(0,a.jsxs)(o.td,{children:[(0,a.jsx)(o.code,{children:"dataSourceTypeHint: integer"})," + ",(0,a.jsx)(o.code,{children:"saveAs: reference"})]})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Lista de sele\xe7\xe3o hier\xe1rquica"}),(0,a.jsx)(o.td,{children:"Pode apresentar conte\xfados hier\xe1rquicos"}),(0,a.jsx)(o.td,{children:"Lista"}),(0,a.jsx)(o.td,{children:"Refer\xeancia da lista"}),(0,a.jsx)(o.td,{children:(0,a.jsx)(o.code,{children:"dataSourceTypeHint: integer"})})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"A\xe7\xe3o padr\xe3o"}),(0,a.jsx)(o.td,{children:"Criado automaticamente pela a\xe7\xe3o"}),(0,a.jsx)(o.td,{children:(0,a.jsx)(o.em,{children:"qualquer"})}),(0,a.jsx)(o.td,{children:(0,a.jsx)(o.em,{children:"qualquer exceto refer\xeancia de lista"})}),(0,a.jsxs)(o.td,{children:["toda definici\xf3n + ",(0,a.jsx)(o.code,{children:"action: <action>"})," (+ ",(0,a.jsx)(o.code,{children:"focusable: false"})," para acciones que se aplican a otras \xe1reas)"]})]})]})]}),"\n",(0,a.jsx)(o.h2,{id:"manuseamento-de-listas-pendentes",children:"Manuseamento de listas pendentes"}),"\n",(0,a.jsx)(o.h3,{id:"utiliza\xe7\xe3o-de-um-objecto",children:"Utiliza\xe7\xe3o de um objecto"}),"\n",(0,a.jsxs)(o.blockquote,{children:["\n",(0,a.jsx)(o.p,{children:"Esta funcionalidade s\xf3 est\xe1 dispon\xedvel em projectos 4D."}),"\n"]}),"\n",(0,a.jsxs)(o.p,{children:["Um ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R7/Concepts/object",children:"objeto"})," que encapsula uma ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R7/Concepts/collection",children:"cole\xe7\xe3o"})," pode ser usado como a fonte de dados de uma lista suspensa. O objeto deve conter as seguintes propriedades:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(o.table,{children:[(0,a.jsx)(o.thead,{children:(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.th,{children:"Propriedade"}),(0,a.jsx)(o.th,{children:"Tipo"}),(0,a.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsxs)(o.tbody,{children:[(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:(0,a.jsx)(o.code,{children:"valores"})}),(0,a.jsx)(o.td,{children:"Collection"}),(0,a.jsxs)(o.td,{children:["Obrigat\xf3rio - Cole\xe7\xe3o de valores escalares. Todos os valores devem ser do mesmo tipo. Tipos suportados:",(0,a.jsx)(o.li,{children:"cadeias"}),(0,a.jsx)(o.li,{children:"n\xfameros"}),(0,a.jsx)(o.li,{children:"datas"}),(0,a.jsx)(o.li,{children:"horas"}),"se estiver vazio ou n\xe3o, a lista suspensa est\xe1 vazia"]})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:(0,a.jsx)(o.code,{children:"index"})}),(0,a.jsx)(o.td,{children:"number"}),(0,a.jsxs)(o.td,{children:["\xcdndice do item selecionado no momento (valor entre 0 e ",(0,a.jsx)(o.code,{children:"collection.length-1"}),"). Se voc\xea definir -1, ",(0,a.jsx)(o.code,{children:"currentValue"})," ser\xe1 exibido como uma cadeia de caracteres de espa\xe7o reservado"]})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:(0,a.jsx)(o.code,{children:"currentValue"})}),(0,a.jsx)(o.td,{children:"igual a Colec\xe7\xe3o"}),(0,a.jsx)(o.td,{children:"Item atualmente selecionado (utilizado como valor de marcador de posi\xe7\xe3o se definido por c\xf3digo)"})]})]})]}),"\n",(0,a.jsx)(o.p,{children:"Se o objeto contiver outras propriedades, estas s\xe3o ignoradas."}),"\n",(0,a.jsx)(o.p,{children:"Objetos lista drop down s\xe3o iniciados ao carregar uma lista de valores em um array. Pode fazer isso de v\xe1rias maneiras:"}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:["\n",(0,a.jsxs)(o.p,{children:["Insira uma lista de valores padr\xe3o nas propriedades do objeto selecionando ",(0,a.jsx)(o.code,{children:"\\<Static List>"})," no tema [Data Source] (properties_DataSource.md) da Property List. Os valores por defeito s\xe3o carregados automaticamente para um objeto."]}),"\n"]}),"\n",(0,a.jsxs)(o.li,{children:["\n",(0,a.jsxs)(o.p,{children:['Executar c\xf3digo que cria o objeto e as suas propriedades. Por exemplo, se "myList" for a ',(0,a.jsx)(o.a,{href:"/docs/pt/20-R7/FormObjects/propertiesObject#variable-or-expression",children:"variable"})," associada \xe0 lista suspensa, voc\xea poder\xe1 escrever no evento de formul\xe1rio ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R7/Events/onLoad",children:"On Load"}),":"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'// Form.myDrop \xe9 a datasource do objeto formul\xe1rio\n \nForm.myDrop:=New object\nForm.myDrop.values:=New collection("apples"; "nuts"; "pears"; "oranges"; "carrots")\nForm.myDrop.index:=-1 //currentValue \xe9 um placeholder\nForm.myDrop.currentValue:="Select a fruit" \n'})}),"\n",(0,a.jsx)(o.p,{children:"A lista suspensa \xe9 exibida com a string de placeholder:"}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.img,{src:s(894252).Z+"",width:"230",height:"33"})}),"\n",(0,a.jsx)(o.p,{children:"Depois de o utilizador selecionar um valor:"}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.img,{src:s(740532).Z+"",width:"234",height:"116"})}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'Form.myDrop.values // ["apples","nuts","pears","oranges","carrots"]\nForm.myDrop.currentValue //"oranges" Form.myDrop.index //3\n'})}),"\n",(0,a.jsx)(o.h3,{id:"usar-um-array",children:"Usar um array"}),"\n",(0,a.jsx)(o.p,{children:"Uma [matriz] (Concepts/arrays.md) \xe9 uma lista de valores na mem\xf3ria que \xe9 referenciada pelo nome da matriz. Uma lista drop down exibe um array como lista de valores quando clicar nela."}),"\n",(0,a.jsx)(o.p,{children:"Para inicializar o array associado \xe0 lista pendente, pode:"}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:["\n",(0,a.jsxs)(o.p,{children:["Insira uma lista de valores padr\xe3o nas propriedades do objeto selecionando ",(0,a.jsx)(o.code,{children:"\\<Static List>"})," no tema [Data Source] (properties_DataSource.md) da Property List. Os valores padr\xe3o s\xe3o carregados em um array autom\xe1tico. Pode fazer uma refer\xeancia ao array usando o nome da vari\xe1vel associado com o objeto."]}),"\n"]}),"\n",(0,a.jsxs)(o.li,{children:["\n",(0,a.jsx)(o.p,{children:"Antes que o objeto seja exibido, execute um c\xf3digo que atribua valores aos elementos do array. Por exemplo:"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'  ARRAY TEXT($aCities;6)\n  $aCities{1}:="Philadelphia"\n  $aCities{2}:="Pittsburg"\n  $aCities{3}:="Grand Blanc"\n  $aCities{4}:="Bad Axe"\n  $aCities{5}:="Frostbite Falls"\n  $aCities{6}:="Green Bay" \n'})}),"\n",(0,a.jsxs)(o.p,{children:["Nesse caso, o nome da [vari\xe1vel] (properties_Object.md#variable-or-expression) associada ao objeto no formul\xe1rio deve ser ",(0,a.jsx)(o.code,{children:"aCities"}),". Esse c\xf3digo pode ser colocado no m\xe9todo do formul\xe1rio e ser executado quando o evento ",(0,a.jsx)(o.code,{children:"On Load"})," do formul\xe1rio for executado."]}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:["Antes de que se muestre el objeto, cargue los valores de una lista en el array utilizando el comando ",(0,a.jsx)(o.a,{href:"https://doc.4d.com/4dv19/help/command/en/page288.html",children:"LIST TO ARRAY"}),". Por exemplo:"]}),"\n"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'   LIST TO ARRAY("Cities";$aCities)\n'})}),"\n",(0,a.jsxs)(o.p,{children:["Nesse caso tamb\xe9m, o nome da ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R7/FormObjects/propertiesObject#variable-or-expression",children:"vari\xe1vel"})," associada ao objeto no formul\xe1rio deve ser ",(0,a.jsx)(o.code,{children:"aCities"}),". Este c\xf3digo pode ser executado ao inv\xe9s das senten\xe7as de atribui\xe7\xe3o mostradas anteriormente."]}),"\n",(0,a.jsx)(o.p,{children:"Se precisar salvar as escolhas do usu\xe1rio em um campo, precisa usar uma declara\xe7\xe3o de atribui\xe7\xe3o que rode depois que o registro seja aceito. O c\xf3digo poderia ser assim:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'  Case of\n    :(Form event=On Load)\n       LIST TO ARRAY("Cities";aCities)\n       If(Record number([People])<0) `new record\n          aCities:=3 `display a default value\n       Else `existing record, display stored value\n          aCities:=Find in array(aCities;City)\n       End if\n    :(Form event=On Clicked) `user modified selection\n       City:=aCities{aCities} `field gets new value\n    :(Form event=On Validate)\n       City:=aCities{aCities}\n    :(Form event=On Unload)\n       CLEAR VARIABLE(aCities)\n End case\n'})}),"\n",(0,a.jsx)(o.p,{children:"Deve selecionar cada event que teste nas estruturas Case. Os arrays sempre cont\xe9m um n\xfamero finito de elementos. A lista de elementos \xe9 din\xe2mica e pode ser modificada por um m\xe9todo. Itens em um array podem ser modificados, ordenados e terem itens adicionados."}),"\n",(0,a.jsx)(o.h3,{id:"utilizar-uma-lista-de-sele\xe7\xe3o",children:"Utilizar uma lista de sele\xe7\xe3o"}),"\n",(0,a.jsx)(o.p,{children:"Se quiser usar uma lista suspensa para gerenciar os valores de uma \xe1rea de entrada (campo ou vari\xe1vel listada), 4D permite que voc\xea fa\xe7a refer\xeancia ao campo ou \xe0 vari\xe1vel diretamente como [fonte de dados] da lista suspensa (properties_Object.md#variable-or-expression). Isso facilita gerenciar vari\xe1veis/campos listados."}),"\n",(0,a.jsx)(o.p,{children:'Por exemplo, no caso de um campo "Cor" que s\xf3 possa conter os valores "White", "Blue", "Green" ou "Red", agora \xe9 poss\xedvel criar uma lista que contenha esses valores e associe-os a um objeto emergente menu que fa\xe7a refer\xeancia ao campo "Color". 4D ent\xe3o se encarrega automaticamente de gerenciar o input e exibir os valores atuais no formul\xe1rio.'}),"\n",(0,a.jsxs)(o.blockquote,{children:["\n",(0,a.jsx)(o.p,{children:"Se usar uma lista hier\xe1rquica, s\xf3 o primeiro n\xedvel \xe9 mostrado e pode ser selecionado. Se quiser exibir conte\xfados hier\xe1rquicos, voc\xea precisar\xe1 usar uma [lista de op\xe7\xf5es hier\xe1rquicas] (#using-a-hierarchical-choice-list)."}),"\n"]}),"\n",(0,a.jsxs)(o.p,{children:["Para associar uma lista suspensa a um campo ou vari\xe1vel, digite o nome do campo ou da vari\xe1vel diretamente como o campo ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R7/FormObjects/propertiesObject#variable-or-expression",children:"Variable or Expression"})," da lista suspensa na Lista de propriedades."]}),"\n",(0,a.jsxs)(o.blockquote,{children:["\n",(0,a.jsx)(o.p,{children:"N\xe3o \xe9 poss\xedvel combinar esse princ\xedpio com o uso de um array para iniciar o objeto. Se digitar um nome de campo na \xe1rea Nome da vari\xe1vel, deve usar uma lista de sele\xe7\xe3o."}),"\n"]}),"\n",(0,a.jsx)(o.p,{children:"Quando o formul\xe1rio for executado, 4D automaticamente gerencia o menu pop up ou com box durante a entrada ou a visualiza\xe7\xe3o: quando um usu\xe1rio escolher um valor, \xe9 salvo no campo; esse valor de campo \xe9 mostrado no menu pop up quando o formul\xe1rio for exibido:"}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.img,{src:s(512168).Z+"",width:"755",height:"171"})}),"\n",(0,a.jsx)(o.h4,{id:"valor-do-item-selecionado-ou-refer\xeancia-do-item-selecionado",children:"Valor do item selecionado ou Refer\xeancia do item selecionado"}),"\n",(0,a.jsxs)(o.p,{children:["When you have associated a drop-down list with a choice list and with a field or a variable, you can set the ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R7/FormObjects/propertiesDataSource#data-type-list",children:(0,a.jsx)(o.strong,{children:"Data Type"})})," property to ",(0,a.jsx)(o.strong,{children:"Selected item value"})," or ",(0,a.jsx)(o.strong,{children:"Selected item reference"}),". Essa op\xe7\xe3o permite otimizar o tamanho dos dados salvos."]}),"\n",(0,a.jsx)(o.h3,{id:"se-usar-uma-lista-hier\xe1rquica-s\xf3-o-primeiro-n\xedvel-\xe9-mostrado-e-pode-ser-selecionado",children:"Se usar uma lista hier\xe1rquica, s\xf3 o primeiro n\xedvel \xe9 mostrado e pode ser selecionado."}),"\n",(0,a.jsx)(o.p,{children:"Uma lista suspensa hier\xe1rquica tem uma sub-lista associada a cada item da lista. Eis um exemplo de uma lista pendente hier\xe1rquica:"}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.img,{src:s(659506).Z+"",width:"248",height:"177"})}),"\n",(0,a.jsxs)(o.blockquote,{children:["\n",(0,a.jsx)(o.p,{children:"Nos formul\xe1rios, as listas pendentes hier\xe1rquicas est\xe3o limitadas a dois n\xedveis."}),"\n"]}),"\n",(0,a.jsxs)(o.p,{children:["Voc\xea pode atribuir a lista de op\xe7\xf5es hier\xe1rquicas ao objeto de lista suspensa usando o campo ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R7/FormObjects/propertiesDataSource#choice-list",children:"Choice List"})," da Lista de propriedades."]}),"\n",(0,a.jsxs)(o.p,{children:["Pode gerenciar as listas suspensas hier\xe1rquicas usando os comandos ",(0,a.jsx)(o.strong,{children:"listas hier\xe1rquicas"})," do idioma 4D. Todos os comandos compat\xedveis com a sintaxe ",(0,a.jsx)(o.code,{children:'(*; "name")'})," podem ser usados com listas suspensas hier\xe1rquicas, por exemplo, ",(0,a.jsx)(o.a,{href:"https://doc.4d.com/4dv19/help/command/en/page633.html",children:(0,a.jsx)(o.code,{children:"List item parent"})}),"."]}),"\n",(0,a.jsx)(o.h3,{id:"usar-uma-a\xe7\xe3o-padr\xe3o",children:"Usar uma a\xe7\xe3o padr\xe3o"}),"\n",(0,a.jsx)(o.p,{children:"Voc\xea pode criar automaticamente uma lista suspensa usando uma [a\xe7\xe3o padr\xe3o] (properties_Action.md#standard-action). Esta funcionalidade \xe9 suportada nos seguintes contextos:"}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:["\n",(0,a.jsxs)(o.p,{children:["Uso da a\xe7\xe3o padr\xe3o ",(0,a.jsx)(o.code,{children:"gotoPage"}),". Nesse caso, o 4D exibir\xe1 automaticamente a [p\xe1gina do formul\xe1rio] (FormEditor/forms.md#form-pages) que corresponde ao n\xfamero do item selecionado. Por exemplo, se o usu\xe1rio selecionar o terceiro item, 4D exibir\xe1 a terceira p\xe1gina do formul\xe1rio atual (se existir). No tempo de execu\xe7\xe3o, por padr\xe3o a lista suspensa exibe os n\xfameros de p\xe1gina (1, 2...)."]}),"\n"]}),"\n",(0,a.jsxs)(o.li,{children:["\n",(0,a.jsxs)(o.p,{children:["Uso de uma a\xe7\xe3o padr\xe3o que exibe uma sub-lista de itens, por exemplo, ",(0,a.jsx)(o.code,{children:"backgroundColor"}),". Essa funcionalidade exige que:"]}),"\n"]}),"\n",(0,a.jsxs)(o.li,{children:["\n",(0,a.jsxs)(o.p,{children:["uma \xe1rea de texto com estilo (",(0,a.jsx)(o.a,{href:"/docs/pt/20-R7/FormObjects/writeProAreaOverview",children:"4D Write Pro area"})," ou ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R7/FormObjects/inputOverview",children:"input"})," com a propriedade ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R7/FormObjects/propertiesText#multi-style",children:"multistyle"}),") est\xe1 presente no formul\xe1rio como o alvo da a\xe7\xe3o padr\xe3o."]}),"\n"]}),"\n",(0,a.jsxs)(o.li,{children:["\n",(0,a.jsxs)(o.p,{children:["A propriedade ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R7/FormObjects/propertiesEntry#focusable",children:"focusable"})," n\xe3o esteja definida para a lista suspensa.\nEm tempo de execu\xe7\xe3o, a lista suspensa exibir\xe1 uma lista autom\xe1tica de valores, por exemplo, cores de fundo. Pode substituir esta lista autom\xe1tica atribuindo al\xe9m disso uma lista de sele\xe7\xe3o na qual cada elemento tenha atribu\xedda uma a\xe7\xe3o padr\xe3o personalizada."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(o.blockquote,{children:["\n",(0,a.jsx)(o.p,{children:"Esta funcionalidade n\xe3o pode ser utilizada com uma lista pendente hier\xe1rquica."}),"\n"]}),"\n",(0,a.jsx)(o.h2,{id:"propriedades-compat\xedveis",children:"Propriedades compat\xedveis"}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.a,{href:"/docs/pt/20-R7/FormObjects/propertiesDisplay#alpha-format",children:"Alpha Format"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R7/FormObjects/propertiesText#bold",children:"Bold"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R7/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Bottom"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R7/FormObjects/propertiesTextAndPicture#button-style",children:"Button Style"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R7/FormObjects/propertiesDataSource#choice-list",children:"Choice List"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R7/FormObjects/propertiesObject#css-class",children:"Class"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R7/FormObjects/propertiesDataSource#data-type-expression-type",children:"Data Type (expression type)"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R7/FormObjects/propertiesDataSource#data-type-list",children:"Data Type (list)"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R7/FormObjects/propertiesDisplay#date-format",children:"Date Format"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R7/FormObjects/propertiesObject#expression-type",children:"Expression Type"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R7/FormObjects/propertiesEntry#focusable",children:"Focusable"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R7/FormObjects/propertiesText#font",children:"Font"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R7/FormObjects/propertiesText#font-color",children:"Font Color"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R7/FormObjects/propertiesText#font-size",children:"Font Size"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R7/FormObjects/propertiesCoordinatesAndSizing#height",children:"Height"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R7/FormObjects/propertiesHelp#help-tip",children:"Help Tip"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R7/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Horizontal Sizing"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R7/FormObjects/propertiesText#italic",children:"Italic"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R7/FormObjects/propertiesCoordinatesAndSizing#left",children:"Left"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R7/FormObjects/propertiesDisplay#not-rendered",children:"Not rendered"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R7/FormObjects/propertiesObject#object-name",children:"Object Name"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R7/FormObjects/propertiesCoordinatesAndSizing#right",children:"Right"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R7/FormObjects/propertiesAction#standard-action",children:"Standard action"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R7/FormObjects/propertiesObject#save-value",children:"Save value"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R7/FormObjects/propertiesDisplay#time-format",children:"Time Format"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R7/FormObjects/propertiesCoordinatesAndSizing#top",children:"Top"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R7/FormObjects/propertiesObject#type",children:"Type"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R7/FormObjects/propertiesText#underline",children:"Underline"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R7/FormObjects/propertiesObject#variable-or-expression",children:"Variable or Expression"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R7/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Vertical Sizing"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R7/FormObjects/propertiesDisplay#visibility",children:"Visibility"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R7/FormObjects/propertiesCoordinatesAndSizing#width",children:"Width"})]})]})}function p(e={}){let{wrapper:o}={...(0,i.a)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},894252:function(e,o,s){s.d(o,{Z:function(){return r}});let r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOYAAAAhCAYAAADNh9e3AAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAAiJJREFUeF7t2M2xgyAUhmF7spcsaIZCsrGBrFKBRaSAdGAHXA9qggiKeud6Zu67eGb4OUYWfIGx6rrOAdCFYAIKEUxAIYIJKPQJ5uPxAHChbDDf7zeACxBMQCGCCShEMAGFCCagEMEEFCKYgELlwWyMq6pqZFwTzi00zlS1s21q7g9Ma62ta1PzOa119ZXrBkZlwfQbNghj37fN2E46E8yzoZbnK2dW11fi4j8X/GtlwZQTaNfpc3UwfyNQBBPXKQum36SVq20bjI38aRpfcaNNnawRrbP1NC6n3PCeqV+ZZqz7asza/Pz5Yb3DWoyp+zF5d7S2WX9qz38ntQ6g1PP5TI6L3FxhMMU3RN9rYrTJ+5M1DMN8s8c1w+8twx7VZ+Xq4nHph+9JzU/9XBs45vV6udvt5u73+2JOxmROauK5HcEcjaefD+fsJAxPl2BT52r8eOoj0kYgZh+hUnXx83v6uTZwXCqca6EU+4PZa21/LSwNV67mSDBnz8iJm6qLn9/Tz7WBc8JwboVSlAWzscEGDa+gsnm3rqO5mgNX2fAjlA9pqi5+Pu4P7/1cx/0JHK411QbOm8K5FUpReGLKJo2uotOcD0g8F23qZM3yd6ewfD7whO/xhlD5udo4c+jE7IXXYdP/TiaM+XUAx0ggt0IpCoMJ4C8RTEAhggkoRDABhQgmoBDBBBQimIBCBBNQiGACCq0GE8B1ksEEoAfBBNTp3A89HOoPkDBgIQAAAABJRU5ErkJggg=="},740532:function(e,o,s){s.d(o,{Z:function(){return r}});let r="data:image/png;base64,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"},872682:function(e,o,s){s.d(o,{Z:function(){return r}});let r=s.p+"assets/images/popupDropdown_appearance-be4e6872edee7cab175cf9702b8731e4.png"},512168:function(e,o,s){s.d(o,{Z:function(){return r}});let r=s.p+"assets/images/popupDropdown_choiceList-f3bc797fde9f06db0a718cbc323d678b.png"},659506:function(e,o,s){s.d(o,{Z:function(){return r}});let r="data:image/png;base64,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"},250065:function(e,o,s){s.d(o,{Z:function(){return d},a:function(){return n}});var r=s(667294);let a={},i=r.createContext(a);function n(e){let o=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:n(e.components),r.createElement(i.Provider,{value:o},e.children)}}}]);